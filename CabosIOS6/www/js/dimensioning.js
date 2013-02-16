var loadingNaval = true;
var loading = true;

function removeA(arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax= arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}

var pages = ["page-newproject", "page-projectdescription", "page-cabledescription", "page-cableinfo", "page-dimension", "localInstalacaoAparente-popup"];
var currentPage = 0;
var db = window.openDatabase("a2", "1.0", "", 200000);

var app = {
    initialize: function() {
        this.bind();
        $("#faq-button").click(function(){
	    	document.location.href = "information.html";
	    });
        
        $("li").bind('click',function(){
			if(!this.getAttribute('url')) return;
				document.location.href = this.getAttribute('url');
		});
		$("#btn-return").click(function(){
			previousPage();
		});
		document.body.addEventListener('touchmove', preventDefault, false);
    },
    bind: function() {
        document.addEventListener('deviceready', this.deviceready, false);
    },
    deviceready: function() {
        // note that this is an event handler so the scope is that of the event
        // so we need to call app.report(), and not this.report()
        app.report('lucas');
    },
    report: function(id) { 
        console.log("report:" + id);
    }
};

function getUserData() {
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem){
		app.report("onFSSSuccess");
		fileSystem.root.getFile("user_data.txt", {create: true, exclusive: false}, function(fileEntry){
			app.report("gotFileEntry");
			fileEntry.file(function(file){
			
				var reader = new FileReader();
				reader.onloadend = function(evt) {
					var res = evt.target.result.split(";");
					$("#username").val(res[0]);
					$("#company").val(res[1]);
				};
				reader.readAsText(file);
				
			}, onError);
		}, onError);
	}, onError);
}

function saveUserData() {
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem){
		app.report("onFSSSuccess");
		fileSystem.root.getFile("user_data.txt", {create: true, exclusive: false}, function(fileEntry){
			app.report("gotFileEntry");
			fileEntry.createWriter(function(writer){
			
				writer.onwrite = function(e){
					console.log("write success");
				};
				writer.write($("#username").val()+";"+$("#company").val());
				
				nextPage();
				
			}, onError);
		}, onError);
	}, onError);
}

function initCurrentPage(p) {
	if(p == 0) {
		$("#title").html("Novo Projeto");
		document.body.removeEventListener('touchmove', preventDefault);
		document.body.addEventListener('touchmove', preventDefault, false);
	}
	if(p > 0) {
		document.body.removeEventListener('touchmove', preventDefault);
		$(".title").html($("#projectName").val());
	}
}

function errorCB(err) {
	alert("Erro Banco: " + err.code + " " +err.message);
	for(var e in  err)
		console.log(e);
}

function initNewProject() {
	app.report("initNewProject()");
	for(var i in pages) {
		$("#"+pages[i]).hide();
	}
	$("#specification-popup").hide();
	$("#end-popup").hide();
	$("#"+pages[currentPage]).show();
	initCurrentPage(currentPage);
}

function preventDefault(e) {
	e.preventDefault();
}

function showPopup(name) {
	$("#"+name).show();
	//document.body.addEventListener('touchmove', preventDefault, false);
	$("*").bind("blur",function(){window.scrollBy(0,-500);});
	document.activeElement.blur();
	window.scrollBy(0,-500);
}

function closePopup(name) {
	$("#"+name).hide();
	$("*").unbind("blur");
	//document.body.removeEventListener('touchmove', preventDefault);
}

function checkEmptyElement(e) {
	if($.trim(e.val()) == "")
		return true;
	return false;
}

function warnElementError(e) {
	e.parent().css("color", "red");
}

function unwarnElementError(e) {
	e.parent().css("color", "black");
}

function checkPageConsistency(p) {
	var valid = true;
	if(p == 0) {
		if(checkEmptyElement($("#username"))) {
			warnElementError($("#username")); 
			valid = false;
		}
		else unwarnElementError($("#username")); 
		
		if(checkEmptyElement($("#company"))) {
			warnElementError($("#company")); 
			valid = false;
		}
		else unwarnElementError($("#company")); 
		
		if(checkEmptyElement($("#projectName"))) {
			warnElementError($("#projectName")); 
			valid = false;
		}
		else unwarnElementError($("#projectName"));

	}
	else if(p == 1) {
		if($("#cableList option:selected").text() == "Cabos de Potência") {
			if($("#cableList").val() == "0") {
				warnElementError($("#cableList"));
				valid = false;
			}
			else unwarnElementError($("#cableList"));
			
			if($("#systemVoltage").val() == "0") {
				warnElementError($("#systemVoltage"));
				valid = false;
			}
			else unwarnElementError($("#systemVoltage"));
			
			if($("#cableMaterial").val() == "0") {
				warnElementError($("#cableMaterial"));
				valid = false;
			}
			else unwarnElementError($("#cableMaterial"));
			
			if($("#conductorNumber").val() == "0") {
				warnElementError($("#conductorNumber"));
				valid = false;
			}
			else unwarnElementError($("#conductorNumber"));
			
			if(checkEmptyElement($("#serviceVoltage"))) {
				warnElementError($("#serviceVoltage"));
				valid = false;
			}
			else unwarnElementError($("#serviceVoltage"));
			
			if($("#voltageUnit").val() == "0") {
				warnElementError($("#voltageUnit"));
				valid = false;
			}
			else unwarnElementError($("#voltageUnit"));
			
			if($("#isolationVoltage").val() == "0") {
				warnElementError($("#isolationVoltage"));
				valid = false;
			}
			else unwarnElementError($("#isolationVoltage"));
			
			if($("#circuitUsage").val() == "0") {
				warnElementError($("#circuitUsage"));
				valid = false;
			}
			else unwarnElementError($("#circuitUsage"));
			
			if($("#system").val() == "0") {
				warnElementError($("#system"));
				valid = false;
			}
			else unwarnElementError($("#system"));

			if(valid) {
				/*db.transaction(function(tx){
					
					var material = $("#cableMaterial").val();
					var condutores = $("#conductorNumber").val();
					var tensao = $("#isolationVoltage").val();
					var temperatura = $("#maximumTemperature").val();
					
					tx.executeSql('SELECT c.* FROM cabos c JOIN cabos_de_potencia cp ON c.id = cp.id_cabo WHERE cp.id_material = ? AND id_condutores = ? AND id_tensao = ? AND id_temperatura >= ?',[material, condutores, tensao, temperatura],function(tx, rs){
							//$("#page-cabledescription ul").empty();
							var i;
							for(i = 0; i < rs.rows.length; i++) {
								console.log(rs.rows.item(i));
								//$("#page-cabledescription ul").first().append("<li onclick='loadCableInfo("+rs.rows.item(i).id+")'>"+rs.rows.item(i).nome+"</li>");
							}
							if(i <= 0)
							{
								navigator.notification.alert("Não existe nenhum cabo associado. Por favor entre com os dados novamente.",null,"Erro");
								valid = false;
							}
					});
					
					
					
				},errorCB);*/
				
			}
			else {
				navigator.notification.alert("Escolha todas as opções",null,"Erro");
				window.scrollBy(0,-500);
			}
		}
		else if($("#cableList option:selected").text() == "Cabos Navais (Offshore)") {
			if($("#cableList").val() == "0") {
				warnElementError($("#cableList"));
				valid = false;
			}
			else unwarnElementError($("#cableList"));
			
			if($("#systemVoltage").val() == "0") {
				warnElementError($("#systemVoltage"));
				valid = false;
			}
			else unwarnElementError($("#systemVoltage"));
			
			if($("#cableMaterial").val() == "0") {
				warnElementError($("#cableMaterial"));
				valid = false;
			}
			else unwarnElementError($("#cableMaterial"));
			
			if($("#conductorNumber").val() == "0") {
				warnElementError($("#conductorNumber"));
				valid = false;
			}
			else unwarnElementError($("#conductorNumber"));
			
			if(checkEmptyElement($("#serviceVoltage"))) {
				warnElementError($("#serviceVoltage"));
				valid = false;
			}
			else unwarnElementError($("#serviceVoltage"));
			
			if($("#voltageUnit").val() == "0") {
				warnElementError($("#voltageUnit"));
				valid = false;
			}
			else unwarnElementError($("#voltageUnit"));
			
			if($("#isolationVoltage").val() == "0") {
				warnElementError($("#isolationVoltage"));
				valid = false;
			}
			else unwarnElementError($("#isolationVoltage"));
			
			if($("#circuitUsage").val() == "0") {
				warnElementError($("#circuitUsage"));
				valid = false;
			}
			else unwarnElementError($("#circuitUsage"));
			
			if($("#system").val() == "0") {
				warnElementError($("#system"));
				valid = false;
			}
			else unwarnElementError($("#system"));

			if(valid) {
				/*db.transaction(function(tx){
					
					var construcao = $("#cableConstruction").val();
					var aplicacao = $("#cableFirePerformance").val();
					var isolacao = $("#isolationMaterial").val();
					var condutores = $("#conductorNumber").val();
					var tensao = $("#systemVoltage").val();
					
					tx.executeSql('SELECT c.* FROM cabos c JOIN cabos_navais cn ON c.id = cn.id_cabo WHERE cn.id_construcao = ? AND cn.id_aplicacao = ? AND cn.id_isolacao = ? AND id_condutores = ? AND id_tensao = ?',[construcao, aplicacao, isolacao, condutores, tensao],function(tx, rs){
							//$("#page-cabledescription ul").empty();
							var i;
							for(i = 0; i < rs.rows.length; i++) {
								console.log(rs.rows.item(i));
								//$("#page-cabledescription ul").first().append("<li onclick='loadCableInfo("+rs.rows.item(i).id+")'>"+rs.rows.item(i).nome+"</li>");
							}
							if(i <= 0)
							{
								navigator.notification.alert("Não existe nenhum cabo associado. Por favor entre com os dados novamente.",null,"Erro");
								valid = false;
							}
					});
					
				},errorCB);*/
				
			}
			else {
				navigator.notification.alert("Escolha todas as opções",null,"Erro");
				window.scrollBy(0,-500);
			}
		}
		else { //no cable type selected
			navigator.notification.alert("Escolha todas as opções",null,"Erro");
			warnElementError($("#cableList"));
			valid = false;
			window.scrollBy(0,-500);
		}
	
	}
	return valid;
}

function loadCableInfo(c) {
	console.log("loadCableInfo("+c+")");
	db.transaction(function(tx){
		tx.executeSql("SELECT * FROM cabos WHERE id = ?",[c],function(tx, rs){
			console.log(rs.rows.item(0).imagem);
			//$("#cableinfo").html("<div class='cable-name'>" + rs.rows.item(0).nome + "</div>" + "<br><img class='img-cabo' src='"+rs.rows.item(0).imagem+"'></img><br><div class='cable-description'>"+rs.rows.item(0).descricao+"</div>");
			//$(".cable-name").html(rs.rows.item(0).nome);
			//$(".cable-photo").html("<img class='img-cabo' src='"+rs.rows.item(0).imagem+"'></img>");
                      //alert("<img class='img-cabo' src='"+rs.rows.item(0).imagem+"'></img>");
			//$(".cable-description").html(rs.rows.item(0).descricao);
		});
	},errorCB,nextPage);
	//$("#page-cableinfo div").first().html(cables[c].name + "<br><img src='"+cables[c].image+"'></img><br>"+cables[c].description);
	//nextPage();
}

function nextPage() {
	if(!checkPageConsistency(currentPage)) return;
	$("#"+pages[currentPage]).hide();
	currentPage++;
	initCurrentPage(currentPage);
	if(currentPage >= pages.length) {
		showPopup("end-popup");
		currentPage--;
	};
	$("#"+pages[currentPage]).show();
}

function previousPage() {
	$("#"+pages[currentPage]).hide();
	currentPage--;
	if(currentPage < 0) {
		history.back(-1);
		return;	
	}
	if(currentPage == 0) {
		$("#title").html("Novo Projeto");
	}
	$("#"+pages[currentPage]).show();
}

function onError(e) {
	app.report("Error on requestFileSystem: "+e.code);
}

function clearSelect(s) {
	s.find("option").remove().end().append(new Option("Selecione","0",true,true));
}

$(document).ready(function(){

db.transaction(populateDB, errorCB, successCB);

function populateDB(tx) {

	//VERIFICADO
    tx.executeSql('CREATE TABLE IF NOT EXISTS tipo_de_produtos (id INTEGER PRIMARY KEY, nome TEXT NOT NULL)');
	tx.executeSql('DELETE FROM tipo_de_produtos');
	tx.executeSql('INSERT INTO tipo_de_produtos VALUES (1,"Cabos de Potência")');
	tx.executeSql('INSERT INTO tipo_de_produtos VALUES (2,"Cabos Navais (Offshore)")');
	
    //VERIFICADO
	tx.executeSql('CREATE TABLE IF NOT EXISTS nivel_de_tensao_do_sistema (id INTEGER PRIMARY KEY, nome TEXT NOT NULL)');
	tx.executeSql('DELETE FROM nivel_de_tensao_do_sistema');
	tx.executeSql('INSERT INTO nivel_de_tensao_do_sistema VALUES (1,"Baixa Tensão até 1kV")');
	tx.executeSql('INSERT INTO nivel_de_tensao_do_sistema VALUES (2,"Média Tensão de 1kV até 35kV")');
    tx.executeSql('INSERT INTO nivel_de_tensao_do_sistema VALUES (3,"Média Tensão de 1kV até 20kV")');
	
	//TABELA DE RELACIONAMENTO ENTRE TIPO_DE_PRODUTOS E NIVEL_DE_TENSAO_DO_SISTEMA
    tx.executeSql('CREATE TABLE IF NOT EXISTS tipo_x_tensao (id_1 INTEGER, id_2 INTEGER)');
	tx.executeSql('DELETE FROM tipo_x_tensao');
	tx.executeSql('INSERT INTO tipo_x_tensao VALUES (1,1)');
	tx.executeSql('INSERT INTO tipo_x_tensao VALUES (1,2)');
	//tx.executeSql('INSERT INTO tipo_x_tensao VALUES (1,3)');
	tx.executeSql('INSERT INTO tipo_x_tensao VALUES (2,1)');
	//tx.executeSql('INSERT INTO tipo_x_tensao VALUES (2,2)');
	tx.executeSql('INSERT INTO tipo_x_tensao VALUES (2,3)');
	
	/**********/
    //VERIFICADO
	//Especificação do tipo construtivo
    //TIPO ORIGINAL É CabosNavais
	tx.executeSql('CREATE TABLE IF NOT EXISTS construcao_do_cabo (id INTEGER PRIMARY KEY, nome TEXT NOT NULL)');
	tx.executeSql('DELETE FROM construcao_do_cabo');
	tx.executeSql('INSERT INTO construcao_do_cabo VALUES (1,"Cabo armado com trança de Cobre")');
	tx.executeSql('INSERT INTO construcao_do_cabo VALUES (2,"Cabo armado com trança de Aço")');
	tx.executeSql('INSERT INTO construcao_do_cabo VALUES (3,"Cabo não armado")');
	tx.executeSql('INSERT INTO construcao_do_cabo VALUES (4,"Segurança Máxima - resistente ao fogo - Norma IEC 60331-21")');
	tx.executeSql('INSERT INTO construcao_do_cabo VALUES (5,"Auto-extinção e não-propagação de chama - Norma IEC 60332-3-22")');
	tx.executeSql('INSERT INTO construcao_do_cabo VALUES (6,"Isolação HF XLPE")');
	tx.executeSql('INSERT INTO construcao_do_cabo VALUES (7,"Isolação HF HEPR")');
	tx.executeSql('INSERT INTO construcao_do_cabo VALUES (8,"Unipolar - Um condutor")');
	tx.executeSql('INSERT INTO construcao_do_cabo VALUES (9,"Três condutores")');

	
	tx.executeSql('CREATE TABLE IF NOT EXISTS aplicacao_do_cabo (id INTEGER PRIMARY KEY, nome TEXT NOT NULL)');
	tx.executeSql('DELETE FROM aplicacao_do_cabo');
	tx.executeSql('INSERT INTO aplicacao_do_cabo VALUES (5,"Auto-extinção e não-propagação da chama - NORMA IEC 60332-3-22")');
	tx.executeSql('INSERT INTO aplicacao_do_cabo VALUES (4,"Segurança Máxima - resistente ao fogo - NORMA IEC 60331-21")');
	
	//TABELA DE RELACIONAMENTO
    tx.executeSql('CREATE TABLE IF NOT EXISTS tipo_x_tensao_x_construcao (id_1 INTEGER, id_2 INTEGER, id_3 INTEGER)');
	tx.executeSql('DELETE FROM tipo_x_tensao_x_construcao');
	tx.executeSql('INSERT INTO tipo_x_tensao_x_construcao VALUES (2,1,1)');
	tx.executeSql('INSERT INTO tipo_x_tensao_x_construcao VALUES (2,1,2)');
	tx.executeSql('INSERT INTO tipo_x_tensao_x_construcao VALUES (2,1,3)');
	
	tx.executeSql('CREATE TABLE IF NOT EXISTS tipo_x_tensao_x_aplicacao (id_1 INTEGER, id_2 INTEGER, id_3 INTEGER)');
	tx.executeSql('DELETE FROM tipo_x_tensao_x_aplicacao');
	tx.executeSql('INSERT INTO tipo_x_tensao_x_aplicacao VALUES (2,1,1)');
	tx.executeSql('INSERT INTO tipo_x_tensao_x_aplicacao VALUES (2,1,2)');
	
	tx.executeSql('CREATE TABLE IF NOT EXISTS material_de_isolacao (id INTEGER PRIMARY KEY, nome TEXT NOT NULL)');
	tx.executeSql('DELETE FROM material_de_isolacao');
	tx.executeSql('INSERT INTO material_de_isolacao VALUES(1,"Isolação HF XLPE")');
	tx.executeSql('INSERT INTO material_de_isolacao VALUES(2,"Isolação HEPR")');
	
	tx.executeSql('CREATE TABLE IF NOT EXISTS tipo_x_tensao_x_isolacao (id_1 INTEGER, id_2 INTEGER, id_3 INTEGER)');
	tx.executeSql('DELETE FROM tipo_x_tensao_x_isolacao');
	tx.executeSql('INSERT INTO tipo_x_tensao_x_isolacao VALUES(2,2,1)');
	tx.executeSql('INSERT INTO tipo_x_tensao_x_isolacao VALUES(2,2,2)');
	/**********/
	
	tx.executeSql('CREATE TABLE IF NOT EXISTS material_do_condutor (id INTEGER PRIMARY KEY, nome TEXT NOT NULL)');
	tx.executeSql('DELETE FROM material_do_condutor');
	tx.executeSql('INSERT INTO material_do_condutor VALUES(1,"Cobre")');
	tx.executeSql('INSERT INTO material_do_condutor VALUES(2,"Alumínio")');
	
	tx.executeSql('CREATE TABLE IF NOT EXISTS tipo_x_material (id_1 INTEGER, id_2 INTEGER)');
	tx.executeSql('DELETE FROM tipo_x_material');
	tx.executeSql('INSERT INTO tipo_x_material VALUES(1,1)');
	tx.executeSql('INSERT INTO tipo_x_material VALUES(1,2)');
	tx.executeSql('INSERT INTO tipo_x_material VALUES(2,1)');
	
	tx.executeSql('CREATE TABLE IF NOT EXISTS unidade_de_tensao (id INTEGER PRIMARY KEY, nome TEXT NOT NULL)');
	tx.executeSql('DELETE FROM unidade_de_tensao');
	tx.executeSql('INSERT INTO unidade_de_tensao VALUES (1,"Volts - V")');
	tx.executeSql('INSERT INTO unidade_de_tensao VALUES (2,"QuiloVolts - kV")');
	
	//VERIFICADO - ORIGINAL NumeroCondutores
    tx.executeSql('CREATE TABLE IF NOT EXISTS numero_de_condutores (id INTEGER PRIMARY KEY, nome TEXT NOT NULL)');
	tx.executeSql('DELETE FROM numero_de_condutores');
	tx.executeSql('INSERT INTO numero_de_condutores VALUES(1,"Unipolar - Um condutor")');
	tx.executeSql('INSERT INTO numero_de_condutores VALUES(2,"Bipolar - Dois condutores")');
	tx.executeSql('INSERT INTO numero_de_condutores VALUES(3,"Tripolar - Três condutores")');
	tx.executeSql('INSERT INTO numero_de_condutores VALUES(4,"Tetrapolar - Quatro condutores")');
	
	tx.executeSql('CREATE TABLE IF NOT EXISTS tensao_x_numero (id_1 INTEGER, id_2 INTEGER)');
	tx.executeSql('DELETE FROM tensao_x_numero');
	tx.executeSql('INSERT INTO tensao_x_numero VALUES(1,1)');
	tx.executeSql('INSERT INTO tensao_x_numero VALUES(1,2)');
	tx.executeSql('INSERT INTO tensao_x_numero VALUES(1,3)');
	tx.executeSql('INSERT INTO tensao_x_numero VALUES(1,4)');
	tx.executeSql('INSERT INTO tensao_x_numero VALUES(2,1)');
	tx.executeSql('INSERT INTO tensao_x_numero VALUES(2,3)');
	
    //VERIFICADO - ORIGINAL UtilizacaoCircuito
    tx.executeSql('CREATE TABLE IF NOT EXISTS utilizacao_do_circuito (id INTEGER PRIMARY KEY, nome TEXT NOT NULL)');
	tx.executeSql('DELETE FROM utilizacao_do_circuito');
	tx.executeSql('INSERT INTO utilizacao_do_circuito VALUES(1,"Circuito de Iluminação")');
	tx.executeSql('INSERT INTO utilizacao_do_circuito VALUES(2,"Circuito de Força")');
	tx.executeSql('INSERT INTO utilizacao_do_circuito VALUES(3,"Circuito de Sinalização")');
	tx.executeSql('INSERT INTO utilizacao_do_circuito VALUES(4,"Circuito de Controle")');
	tx.executeSql('INSERT INTO utilizacao_do_circuito VALUES(5,"Circuito de extrabaixa tensão para aplicações especiais")');
	tx.executeSql('INSERT INTO utilizacao_do_circuito VALUES(6,"Para qualquer outra aplicação")');
	
	tx.executeSql('CREATE TABLE IF NOT EXISTS tipo_x_material_x_utilizacao (id_1 INTEGER, id_2 INTEGER, id_3 INTEGER)')
	tx.executeSql('DELETE FROM tipo_x_material_x_utilizacao');
	tx.executeSql('INSERT INTO tipo_x_material_x_utilizacao VALUES(1,1,1)');
	tx.executeSql('INSERT INTO tipo_x_material_x_utilizacao VALUES(1,1,2)');
	tx.executeSql('INSERT INTO tipo_x_material_x_utilizacao VALUES(1,1,3)');
	tx.executeSql('INSERT INTO tipo_x_material_x_utilizacao VALUES(1,1,4)');
	tx.executeSql('INSERT INTO tipo_x_material_x_utilizacao VALUES(1,1,5)');
	tx.executeSql('INSERT INTO tipo_x_material_x_utilizacao VALUES(1,1,6)');
	tx.executeSql('INSERT INTO tipo_x_material_x_utilizacao VALUES(1,2,1)');
	tx.executeSql('INSERT INTO tipo_x_material_x_utilizacao VALUES(1,2,2)');
	tx.executeSql('INSERT INTO tipo_x_material_x_utilizacao VALUES(2,1,2)');
	
	//VERIFICADO - ORIGINAL Sistema
    tx.executeSql('CREATE TABLE IF NOT EXISTS sistema (id INTEGER PRIMARY KEY, nome TEXT NOT NULL)');
	tx.executeSql('DELETE FROM sistema');
	tx.executeSql('INSERT INTO sistema VALUES (1,"Monofásico a dois condutores")');
	tx.executeSql('INSERT INTO sistema VALUES (2,"Monofásico a três condutores")');
	tx.executeSql('INSERT INTO sistema VALUES (3,"Duas fases sem neutro")');
	tx.executeSql('INSERT INTO sistema VALUES (4,"Duas fases com neutro")');
	tx.executeSql('INSERT INTO sistema VALUES (5,"Trifásico sem neutro")');
	tx.executeSql('INSERT INTO sistema VALUES (6,"Trifásico com neutro")');
	
	tx.executeSql('CREATE TABLE IF NOT EXISTS tipo_x_condutores_x_sistema (id_1 INTEGER, id_2 INTEGER, id_3 INTEGER)');
	tx.executeSql('DELETE FROM tipo_x_condutores_x_sistema');
	tx.executeSql('INSERT INTO tipo_x_condutores_x_sistema VALUES (1,1,1)');
	tx.executeSql('INSERT INTO tipo_x_condutores_x_sistema VALUES (1,1,2)');
	tx.executeSql('INSERT INTO tipo_x_condutores_x_sistema VALUES (1,1,3)');
	tx.executeSql('INSERT INTO tipo_x_condutores_x_sistema VALUES (1,1,4)');
	tx.executeSql('INSERT INTO tipo_x_condutores_x_sistema VALUES (1,1,5)');
	tx.executeSql('INSERT INTO tipo_x_condutores_x_sistema VALUES (1,1,6)');
	tx.executeSql('INSERT INTO tipo_x_condutores_x_sistema VALUES (1,2,1)');
	tx.executeSql('INSERT INTO tipo_x_condutores_x_sistema VALUES (1,2,3)');
	tx.executeSql('INSERT INTO tipo_x_condutores_x_sistema VALUES (1,3,2)');
	tx.executeSql('INSERT INTO tipo_x_condutores_x_sistema VALUES (1,3,4)');
	tx.executeSql('INSERT INTO tipo_x_condutores_x_sistema VALUES (1,3,5)');
	tx.executeSql('INSERT INTO tipo_x_condutores_x_sistema VALUES (1,4,6)');
	tx.executeSql('INSERT INTO tipo_x_condutores_x_sistema VALUES (2,1,1)');
	tx.executeSql('INSERT INTO tipo_x_condutores_x_sistema VALUES (2,1,2)');
	tx.executeSql('INSERT INTO tipo_x_condutores_x_sistema VALUES (2,1,3)');
	tx.executeSql('INSERT INTO tipo_x_condutores_x_sistema VALUES (2,1,4)');
	tx.executeSql('INSERT INTO tipo_x_condutores_x_sistema VALUES (2,1,5)');
	tx.executeSql('INSERT INTO tipo_x_condutores_x_sistema VALUES (2,1,6)');
	tx.executeSql('INSERT INTO tipo_x_condutores_x_sistema VALUES (2,2,1)');
	tx.executeSql('INSERT INTO tipo_x_condutores_x_sistema VALUES (2,2,3)');
	//tx.executeSql('INSERT INTO tipo_x_condutores_x_sistema VALUES (2,3,2)');
	//tx.executeSql('INSERT INTO tipo_x_condutores_x_sistema VALUES (2,3,4)');
	tx.executeSql('INSERT INTO tipo_x_condutores_x_sistema VALUES (2,3,5)');
	tx.executeSql('INSERT INTO tipo_x_condutores_x_sistema VALUES (2,4,5)');
	//tx.executeSql('INSERT INTO tipo_x_condutores_x_sistema VALUES (2,3,5)');
	
	//VERIFICADO - ORIGINAL TemperaturaMaxima
    tx.executeSql('CREATE TABLE IF NOT EXISTS temperatura_do_condutor (id INTEGER PRIMARY KEY, nome TEXT NOT NULL)');
	tx.executeSql('DELETE FROM temperatura_do_condutor');
	/*tx.executeSql('INSERT INTO temperatura_do_condutor VALUES (1,"70º")');
	tx.executeSql('INSERT INTO temperatura_do_condutor VALUES (2,"85º")');
	tx.executeSql('INSERT INTO temperatura_do_condutor VALUES (3,"90º")');
	tx.executeSql('INSERT INTO temperatura_do_condutor VALUES (4,"105º")');*/
    //DADOS EXTRAIDOS DA CLASSE Dimensionamento, METODO TemperaturaMaxima
    tx.executeSql('INSERT INTO temperatura_do_condutor VALUES (35,"35º")');
    tx.executeSql('INSERT INTO temperatura_do_condutor VALUES (40,"40º")');
    tx.executeSql('INSERT INTO temperatura_do_condutor VALUES (45,"45º")');
    tx.executeSql('INSERT INTO temperatura_do_condutor VALUES (50,"50º")');
    tx.executeSql('INSERT INTO temperatura_do_condutor VALUES (55,"55º")');
    tx.executeSql('INSERT INTO temperatura_do_condutor VALUES (60,"60º")');
    tx.executeSql('INSERT INTO temperatura_do_condutor VALUES (65,"65º")');
    tx.executeSql('INSERT INTO temperatura_do_condutor VALUES (70,"70º")');
    tx.executeSql('INSERT INTO temperatura_do_condutor VALUES (75,"75º")');
    tx.executeSql('INSERT INTO temperatura_do_condutor VALUES (80,"80º")');
    tx.executeSql('INSERT INTO temperatura_do_condutor VALUES (85,"85º")');
    tx.executeSql('INSERT INTO temperatura_do_condutor VALUES (90,"90º")');
    tx.executeSql('INSERT INTO temperatura_do_condutor VALUES (95,"95º")');
    tx.executeSql('INSERT INTO temperatura_do_condutor VALUES (105,"105º")');
	
	/*tx.executeSql('CREATE TABLE IF NOT EXISTS tipo_x_temperatura (id_1 INTEGER, id_2 INTEGER)');
	tx.executeSql('DELETE FROM tipo_x_temperatura');
	tx.executeSql('INSERT INTO tipo_x_temperatura VALUES (1,1)');
	tx.executeSql('INSERT INTO tipo_x_temperatura VALUES (1,3)');
	tx.executeSql('INSERT INTO tipo_x_temperatura VALUES (2,1)');
	tx.executeSql('INSERT INTO tipo_x_temperatura VALUES (2,2)');
	tx.executeSql('INSERT INTO tipo_x_temperatura VALUES (2,3)');*/
	
	//VERIFICADO - ORIGINAL TensaoIsolamento
    tx.executeSql('CREATE TABLE IF NOT EXISTS tensao_de_isolamento (id INTEGER PRIMARY KEY, nome TEXT NOT NULL, max REAL, id_tipo INTEGER)');
	tx.executeSql('DELETE FROM tensao_de_isolamento');
	tx.executeSql('INSERT INTO tensao_de_isolamento VALUES(2,"0.6kV",1.000,1)');
	tx.executeSql('INSERT INTO tensao_de_isolamento VALUES(1,"450/750V",0.750,1)');
	tx.executeSql('INSERT INTO tensao_de_isolamento VALUES(3,"3.6/6kV",6.000,2)');
	tx.executeSql('INSERT INTO tensao_de_isolamento VALUES(4,"6/10kV",10.000,2)');
	tx.executeSql('INSERT INTO tensao_de_isolamento VALUES(5,"8.7/15kV",15.000,2)');
	tx.executeSql('INSERT INTO tensao_de_isolamento VALUES(6,"12/20kV",20.000,2)');
	tx.executeSql('INSERT INTO tensao_de_isolamento VALUES(7,"15/25kV",25.000,2)');
	tx.executeSql('INSERT INTO tensao_de_isolamento VALUES(8,"20/35kV",35.000,2)');
	
	tx.executeSql('CREATE TABLE IF NOT EXISTS cabos(id INTEGER PRIMARY KEY, nome TEXT NOT NULL, descricao TEXT NOT NULL, imagem TEXT NOT NULL, id_tipo INTEGER)');
	tx.executeSql('DELETE FROM cabos');
	/*tx.executeSql('INSERT INTO cabos VALUES(1,"Cabo Noflam Antichama BWF Flexível","Construção\
		\
		1) - Condutor flexível de cobre, têmpera mole, com encordoamento na classe 5.\
		2) - Isolação:\
		PVC (70 ºC) - composto termoplástico de Policloreto de Vinila, com características\
		especiais quanto a não-propagação e auto-extinção do fogo.\
		3) NM 247-3\
		\
		Aplicação\
		\
		São empregados nas fiações de quadros, painéis elétricos e outras aplicações que\
		exijam cabos de maior flexibilidade. Sua instalação é permitida, pela NBR 5410,\
		\
		em eletrodutos, sobre isoladores e em molduras. Para outros tipos de instalação são\
		previstas algumas restrições, conforme NBR 5410. Os Fios e Cabos Noflam Antichama\
		BWF Flexível oferecem maior segurança devido às características especiais quanto\
		a não propagação e auto-extinção do fogo, constatadas através do ensaio de Queima\
		Vertical, conforme NBR 6812.","img/cabo-placeholder.png",1)');
	tx.executeSql('INSERT INTO cabos VALUES(2,"Cabo Afitox 750V","Construção\
		\
		Condutor flexível de cobre, têmpera mole, com encordoamento na classe 5;\
		Isolação em composto termoplástico poliolefínico, não halogenado (70ºC), nas\
		cores: preto, branco, azul claro, vermelho, verde e verde/amarelo.\
		NBR 13248\
		\
		Aplicações\
		\
		Os cabos AFITOX 750V, por apresentarem características de retardantes ao fogo\
		associado à baixa emissão de fumaça e gases, são indicados para instalações em\
		locais com alta densidade de ocupação de fugas difíceis tais como: Shopping centers,\
		hospitais, cinemas, teatros, hotéis, torres comerciais e/ou residenciais, metrô,\
		centro de convenção, bem como em áreas de eletrônica e de computação, conforme\
		recomendações da 5410/97.","img/cabo-placeholder.png",1)');
	tx.executeSql('INSERT INTO cabos VALUES(3,"Cabo Vinil","Construção\
		\
		Condutor: Cobre ou Alumínio, com encordoamento na classe 2\
		Isolação: PVC (70 ºC) - composto termoplástico de Policloreto de Vinila.\
		Cobertura: PVC -, tipo ST1 na cor preta.\
		NBR 7288\
		\
		Aplicações:\
		\
		Sistemas de distribuição subterrânea, instalação em sistemas residenciais urbanos,\
		comerciais e industriais.","img/cabo-placeholder.png",1)');
	tx.executeSql('INSERT INTO cabos VALUES(4,"Cabo Vinil Flexível","Construção\
		\
		Condutor: Flexível de cobre, têmpera mole, com encordoamento na classe 5\
		Isolação: PVC (70 ºC)\
		Cobertura: PVC - composto termoplástico de Policloreto deVinila, flexível, tipo\
		ST1 na cor preta.\
		NBR7288\
		\
		Aplicações:\
		\
		São empregados em instalações fixas, sendo recomendados em circuitos que exijam\
		cabos de maior flexibilidade para alimentação e distribuição de energia elétrica em\
		edifícios residenciais, comerciais, industriais, etc.","img/cabo-placeholder.png",1)');
	tx.executeSql('INSERT INTO cabos VALUES(5,"Cabo Fiter Flex","Construção:\
		\
		Condutor: Flexível de Cobre, têmpera mole, com encordoamento na classe 5\
		Isolação: Composto termofixo (90 ºC).\
		Cobertura: PVC - ST2 Flexível, na cor preta.\
		\
		Aplicações:\
		\
		São empregados como cabos de potência para instalações fixas, sendo\
		recomendados em circuitos que exijam cabos de maior flexibilidade para circuitos de\
		alimentação e distribuição de energia elétrica em edifícios residenciais, comerciais,\
		industriais, subestações transformadoras, etc.","img/cabo-placeholder.png",1)');
	tx.executeSql('INSERT INTO cabos VALUES(6,"Cabo Afitox 0,6/1kV","Construção\
		\
		Condutor flexível de cobre, têmpera mole, com encordoamento na classe 5;\
		Isolação em composto termofixo não halogenado;\
		Cobertura em composto termoplástico poliolefínico não-halogenado;\
		NBR 13248\
		\
		Aplicação\
		\
		Os cabos AFITOX 0,6/1 kV, por apresentarem características de retardantes ao\
		fogo associado à baixa emissão de fumaça e gases, são indicados para instalações\
		em locais com alta densidade de ocupação de fugas difíceis tais como: Shopping\
		centers, hospitais, cinemas, teatros, hotéis, torres comerciais e/ou residenciais, metrô,\
		centro de convenção, bem como em áreas de eletrônica e de computação, conforme\
		recomendações da 5410/97.","img/cabo-placeholder.png",1)');
	tx.executeSql('INSERT INTO cabos VALUES(7,"AFITOX XP","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam risus dui, iaculis vitae sodales et, viverra eu est. Nam at egestas eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris commodo rhoncus suscipit. Nam cursus nisi vel magna aliquam adipiscing. Aenean pellentesque augue eu arcu hendrerit eget pulvinar odio cursus. Vestibulum fringilla sagittis orci, sed convallis quam egestas nec. Nullam a dui nibh, et vehicula quam. Suspendisse dignissim lacinia tortor vitae lacinia. Cras consectetur eros non urna molestie eu condimentum eros interdum. Nam et eros tellus, non porta dolor. Praesent rutrum adipiscing elementum. Nam in nulla sapien, id scelerisque ante.","img/cabo-placeholder.png",2)');
	tx.executeSql('INSERT INTO cabos VALUES(8,"AFITOX XPBC","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam risus dui, iaculis vitae sodales et, viverra eu est. Nam at egestas eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris commodo rhoncus suscipit. Nam cursus nisi vel magna aliquam adipiscing. Aenean pellentesque augue eu arcu hendrerit eget pulvinar odio cursus. Vestibulum fringilla sagittis orci, sed convallis quam egestas nec. Nullam a dui nibh, et vehicula quam. Suspendisse dignissim lacinia tortor vitae lacinia. Cras consectetur eros non urna molestie eu condimentum eros interdum. Nam et eros tellus, non porta dolor. Praesent rutrum adipiscing elementum. Nam in nulla sapien, id scelerisque ante.","img/cabo-placeholder.png",2)');
	tx.executeSql('INSERT INTO cabos VALUES(9,"AFITOX XPS","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam risus dui, iaculis vitae sodales et, viverra eu est. Nam at egestas eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris commodo rhoncus suscipit. Nam cursus nisi vel magna aliquam adipiscing. Aenean pellentesque augue eu arcu hendrerit eget pulvinar odio cursus. Vestibulum fringilla sagittis orci, sed convallis quam egestas nec. Nullam a dui nibh, et vehicula quam. Suspendisse dignissim lacinia tortor vitae lacinia. Cras consectetur eros non urna molestie eu condimentum eros interdum. Nam et eros tellus, non porta dolor. Praesent rutrum adipiscing elementum. Nam in nulla sapien, id scelerisque ante.","img/cabo-placeholder.png",2)');
	tx.executeSql('INSERT INTO cabos VALUES(10,"AFITOX SM","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam risus dui, iaculis vitae sodales et, viverra eu est. Nam at egestas eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris commodo rhoncus suscipit. Nam cursus nisi vel magna aliquam adipiscing. Aenean pellentesque augue eu arcu hendrerit eget pulvinar odio cursus. Vestibulum fringilla sagittis orci, sed convallis quam egestas nec. Nullam a dui nibh, et vehicula quam. Suspendisse dignissim lacinia tortor vitae lacinia. Cras consectetur eros non urna molestie eu condimentum eros interdum. Nam et eros tellus, non porta dolor. Praesent rutrum adipiscing elementum. Nam in nulla sapien, id scelerisque ante.","img/cabo-placeholder.png",2)');
	tx.executeSql('INSERT INTO cabos VALUES(11,"AFITOX SMBC","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam risus dui, iaculis vitae sodales et, viverra eu est. Nam at egestas eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris commodo rhoncus suscipit. Nam cursus nisi vel magna aliquam adipiscing. Aenean pellentesque augue eu arcu hendrerit eget pulvinar odio cursus. Vestibulum fringilla sagittis orci, sed convallis quam egestas nec. Nullam a dui nibh, et vehicula quam. Suspendisse dignissim lacinia tortor vitae lacinia. Cras consectetur eros non urna molestie eu condimentum eros interdum. Nam et eros tellus, non porta dolor. Praesent rutrum adipiscing elementum. Nam in nulla sapien, id scelerisque ante.","img/cabo-placeholder.png",2)');
	tx.executeSql('INSERT INTO cabos VALUES(12,"AFITOX SMAS","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam risus dui, iaculis vitae sodales et, viverra eu est. Nam at egestas eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris commodo rhoncus suscipit. Nam cursus nisi vel magna aliquam adipiscing. Aenean pellentesque augue eu arcu hendrerit eget pulvinar odio cursus. Vestibulum fringilla sagittis orci, sed convallis quam egestas nec. Nullam a dui nibh, et vehicula quam. Suspendisse dignissim lacinia tortor vitae lacinia. Cras consectetur eros non urna molestie eu condimentum eros interdum. Nam et eros tellus, non porta dolor. Praesent rutrum adipiscing elementum. Nam in nulla sapien, id scelerisque ante.","img/cabo-placeholder.png",2)');
	tx.executeSql('INSERT INTO cabos VALUES(13,"AFITOX MXP BC","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam risus dui, iaculis vitae sodales et, viverra eu est. Nam at egestas eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris commodo rhoncus suscipit. Nam cursus nisi vel magna aliquam adipiscing. Aenean pellentesque augue eu arcu hendrerit eget pulvinar odio cursus. Vestibulum fringilla sagittis orci, sed convallis quam egestas nec. Nullam a dui nibh, et vehicula quam. Suspendisse dignissim lacinia tortor vitae lacinia. Cras consectetur eros non urna molestie eu condimentum eros interdum. Nam et eros tellus, non porta dolor. Praesent rutrum adipiscing elementum. Nam in nulla sapien, id scelerisque ante.","img/cabo-placeholder.png",2)');
	tx.executeSql('INSERT INTO cabos VALUES(14,"AFITOX MXP S","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam risus dui, iaculis vitae sodales et, viverra eu est. Nam at egestas eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris commodo rhoncus suscipit. Nam cursus nisi vel magna aliquam adipiscing. Aenean pellentesque augue eu arcu hendrerit eget pulvinar odio cursus. Vestibulum fringilla sagittis orci, sed convallis quam egestas nec. Nullam a dui nibh, et vehicula quam. Suspendisse dignissim lacinia tortor vitae lacinia. Cras consectetur eros non urna molestie eu condimentum eros interdum. Nam et eros tellus, non porta dolor. Praesent rutrum adipiscing elementum. Nam in nulla sapien, id scelerisque ante.","img/cabo-placeholder.png",2)');
	tx.executeSql('INSERT INTO cabos VALUES(15,"AFITOX MEP BC","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam risus dui, iaculis vitae sodales et, viverra eu est. Nam at egestas eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris commodo rhoncus suscipit. Nam cursus nisi vel magna aliquam adipiscing. Aenean pellentesque augue eu arcu hendrerit eget pulvinar odio cursus. Vestibulum fringilla sagittis orci, sed convallis quam egestas nec. Nullam a dui nibh, et vehicula quam. Suspendisse dignissim lacinia tortor vitae lacinia. Cras consectetur eros non urna molestie eu condimentum eros interdum. Nam et eros tellus, non porta dolor. Praesent rutrum adipiscing elementum. Nam in nulla sapien, id scelerisque ante.","img/cabo-placeholder.png",2)');
	tx.executeSql('INSERT INTO cabos VALUES(16,"AFITOX MEP S","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam risus dui, iaculis vitae sodales et, viverra eu est. Nam at egestas eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris commodo rhoncus suscipit. Nam cursus nisi vel magna aliquam adipiscing. Aenean pellentesque augue eu arcu hendrerit eget pulvinar odio cursus. Vestibulum fringilla sagittis orci, sed convallis quam egestas nec. Nullam a dui nibh, et vehicula quam. Suspendisse dignissim lacinia tortor vitae lacinia. Cras consectetur eros non urna molestie eu condimentum eros interdum. Nam et eros tellus, non porta dolor. Praesent rutrum adipiscing elementum. Nam in nulla sapien, id scelerisque ante.","img/cabo-placeholder.png",2)');
		
	tx.executeSql('INSERT INTO cabos VALUES(1,"NOFLAM FLEX",1)');
	tx.executeSql('INSERT INTO cabos VALUES(2,"AFITOX-F 750 V",1)');
	tx.executeSql('INSERT INTO cabos VALUES(3,"VINIL",1)');
	tx.executeSql('INSERT INTO cabos VALUES(4,"VINIL-FLEX",1)');
	tx.executeSql('INSERT INTO cabos VALUES(5,"FITER-FLEX",1)');
	tx.executeSql('INSERT INTO cabos VALUES(6,"AFITOX-F 1kV",1)');
	tx.executeSql('INSERT INTO cabos VALUES(7,"AFITOX XP",2)');
	tx.executeSql('INSERT INTO cabos VALUES(8,"AFITOX XPBC",2)');
	tx.executeSql('INSERT INTO cabos VALUES(9,"AFITOX XPS",2)');
	tx.executeSql('INSERT INTO cabos VALUES(10,"AFITOX SM",2)');
	tx.executeSql('INSERT INTO cabos VALUES(11,"AFITOX SMBC",2)');
	tx.executeSql('INSERT INTO cabos VALUES(12,"AFITOX SMAS",2)');
	tx.executeSql('INSERT INTO cabos VALUES(13,"AFITOX MXP BC",2)');
	tx.executeSql('INSERT INTO cabos VALUES(14,"AFITOX MXP S",2)');
	tx.executeSql('INSERT INTO cabos VALUES(15,"AFITOX MEP BC",2)');
	tx.executeSql('INSERT INTO cabos VALUES(16,"AFITOX MEP S",2)');
    tx.executeSql('INSERT INTO cabos VALUES(17,"EP-DRY 105ºC","","",1)');
    tx.executeSql('INSERT INTO cabos VALUES(18,"EP-DRY","","",1)');
    tx.executeSql('INSERT INTO cabos VALUES(19,"FIFEX BF","","",1)');*/
                  
                  
     //VERIFICADO - ORIGINAL Cabo
     tx.executeSql('INSERT INTO cabos VALUES(370,"Noflam Antichama BWF Flexível","","",1)');
     tx.executeSql('INSERT INTO cabos VALUES(1020,"Afitox-F 750V","","",1)');
     tx.executeSql('INSERT INTO cabos VALUES(2020,"Afitox-F 0,6/1kV","","",1)');
     tx.executeSql('INSERT INTO cabos VALUES(390,"Vinil","","",1)');
     tx.executeSql('INSERT INTO cabos VALUES(400,"Vinil Flexível","","",1)');
     tx.executeSql('INSERT INTO cabos VALUES(340,"Fiter Flex","","",1)');
     tx.executeSql('INSERT INTO cabos VALUES(230,"EP-DRY","","",2)');
     tx.executeSql('INSERT INTO cabos VALUES(300,"FIPEX BF","","",2)');
     tx.executeSql('INSERT INTO cabos VALUES(220,"EP-DRY 105ºC","","",2)');
     tx.executeSql('INSERT INTO cabos VALUES(150,"Afitox SM BC","","",2)');
     tx.executeSql('INSERT INTO cabos VALUES(200,"Afitox XPBC","","",2)');
     tx.executeSql('INSERT INTO cabos VALUES(140,"Afitox SM AS","","",2)');
     tx.executeSql('INSERT INTO cabos VALUES(210,"Afitox XPS","","",2)');
     tx.executeSql('INSERT INTO cabos VALUES(130,"Afitox SM","","",2)');
     tx.executeSql('INSERT INTO cabos VALUES(190,"Afitox XP","","",2)');
     tx.executeSql('INSERT INTO cabos VALUES(110,"Afitox MXP BC","","",2)');
     tx.executeSql('INSERT INTO cabos VALUES(120,"Afitox MXP S","","",1)');
     tx.executeSql('INSERT INTO cabos VALUES(70,"EAfitox MEP BC","","",1)');
     tx.executeSql('INSERT INTO cabos VALUES(80,"Afitox MEP S","","",1)');

	
	tx.executeSql('CREATE TABLE IF NOT EXISTS cabos_de_potencia (id_material INTEGER, id_condutores INTEGER, id_tensao INTENGER, id_temperatura INTEGER, id_cabo INTEGER)');
	tx.executeSql('DELETE FROM cabos_de_potencia');
	tx.executeSql('INSERT INTO cabos_de_potencia VALUES (1,1,2,1,1)'); //NOFLAM FLEX
	tx.executeSql('INSERT INTO cabos_de_potencia VALUES (1,1,2,1,2)'); //AFITOX-F 750 V
	tx.executeSql('INSERT INTO cabos_de_potencia VALUES (1,1,1,1,3)'); //VINIL
	tx.executeSql('INSERT INTO cabos_de_potencia VALUES (2,1,1,1,3)');
	tx.executeSql('INSERT INTO cabos_de_potencia VALUES (1,2,1,1,3)');
	tx.executeSql('INSERT INTO cabos_de_potencia VALUES (2,2,1,1,3)');
	tx.executeSql('INSERT INTO cabos_de_potencia VALUES (1,3,1,1,3)');
	tx.executeSql('INSERT INTO cabos_de_potencia VALUES (2,3,1,1,3)');
	tx.executeSql('INSERT INTO cabos_de_potencia VALUES (1,4,1,1,3)');
	tx.executeSql('INSERT INTO cabos_de_potencia VALUES (2,4,1,1,3)');
	tx.executeSql('INSERT INTO cabos_de_potencia VALUES (1,1,1,1,4)'); //VINIL-FLEX
	tx.executeSql('INSERT INTO cabos_de_potencia VALUES (1,2,1,1,4)');
	tx.executeSql('INSERT INTO cabos_de_potencia VALUES (1,2,1,1,4)');
	tx.executeSql('INSERT INTO cabos_de_potencia VALUES (1,2,1,1,4)');
	//tx.executeSql('INSERT INTO cabos_de_potencia VALUES (1,1,1,3,5)'); //FILTER FLEX
	tx.executeSql('INSERT INTO cabos_de_potencia VALUES (1,2,1,3,5)');
	tx.executeSql('INSERT INTO cabos_de_potencia VALUES (1,3,1,3,5)');
	tx.executeSql('INSERT INTO cabos_de_potencia VALUES (1,4,1,3,5)');
	//tx.executeSql('INSERT INTO cabos_de_potencia VALUES (1,1,1,3,6)'); //AFITOX-F 1kV
	tx.executeSql('INSERT INTO cabos_de_potencia VALUES (1,2,1,3,6)');
	tx.executeSql('INSERT INTO cabos_de_potencia VALUES (1,3,1,3,6)');
	tx.executeSql('INSERT INTO cabos_de_potencia VALUES (1,4,1,3,6)');
	
	tx.executeSql('INSERT INTO cabos_de_potencia VALUES (1,1,1,4,17)'); //EP-DRY 105
	tx.executeSql('INSERT INTO cabos_de_potencia VALUES (1,1,1,3,18)'); //EP-DRY
	tx.executeSql('INSERT INTO cabos_de_potencia VALUES (1,1,1,3,19)'); //FIFEX BF
	
	tx.executeSql('CREATE TABLE IF NOT EXISTS cabos_navais (id_construcao INTEGER, id_aplicacao INTEGER, id_isolacao INTEGER, id_condutores INTEGER, id_tensao INTEGER, id_cabo INTEGER)');
	tx.executeSql('DELETE FROM cabos_navais');
	tx.executeSql('INSERT INTO cabos_navais VALUES (3,1,0,1,1,7)'); //AFIXTOX XP
	tx.executeSql('INSERT INTO cabos_navais VALUES (3,1,0,2,1,7)');
	tx.executeSql('INSERT INTO cabos_navais VALUES (3,1,0,3,1,7)');
	tx.executeSql('INSERT INTO cabos_navais VALUES (3,1,0,4,1,7)');
	tx.executeSql('INSERT INTO cabos_navais VALUES (1,1,0,1,1,8)'); //AFITOX XPBC
	tx.executeSql('INSERT INTO cabos_navais VALUES (1,1,0,2,1,8)');
	tx.executeSql('INSERT INTO cabos_navais VALUES (1,1,0,3,1,8)');
	tx.executeSql('INSERT INTO cabos_navais VALUES (1,1,0,4,1,8)');
	tx.executeSql('INSERT INTO cabos_navais VALUES (2,1,0,1,1,9)'); //AFITOX XPS
	tx.executeSql('INSERT INTO cabos_navais VALUES (2,1,0,2,1,9)');
	tx.executeSql('INSERT INTO cabos_navais VALUES (2,1,0,3,1,9)');
	tx.executeSql('INSERT INTO cabos_navais VALUES (2,1,0,4,1,9)');
	tx.executeSql('INSERT INTO cabos_navais VALUES (3,2,0,2,1,10)'); //SM
	tx.executeSql('INSERT INTO cabos_navais VALUES (3,2,0,3,1,10)');
	tx.executeSql('INSERT INTO cabos_navais VALUES (3,2,0,4,1,10)');
	tx.executeSql('INSERT INTO cabos_navais VALUES (1,2,0,2,1,11)'); //SMBC
	tx.executeSql('INSERT INTO cabos_navais VALUES (1,2,0,3,1,11)');
	tx.executeSql('INSERT INTO cabos_navais VALUES (1,2,0,4,1,11)');
	tx.executeSql('INSERT INTO cabos_navais VALUES (2,2,0,2,1,12)'); //SMAS
	tx.executeSql('INSERT INTO cabos_navais VALUES (2,2,0,3,1,12)');
	tx.executeSql('INSERT INTO cabos_navais VALUES (2,2,0,4,1,12)');
	tx.executeSql('INSERT INTO cabos_navais VALUES (0,0,1,1,2,13)'); //MXP BC
	tx.executeSql('INSERT INTO cabos_navais VALUES (0,0,1,3,2,14)'); //MXP S
	tx.executeSql('INSERT INTO cabos_navais VALUES (0,0,2,1,2,15)'); //MEP BC
	tx.executeSql('INSERT INTO cabos_navais VALUES (0,0,2,3,2,16)'); //MEP S
                  
    //*NOVO - ORIGINAL PossibilidadeInstalacao
    tx.executeSql('CREATE TABLE IF NOT EXISTS possibilidade_instalacao (id INTEGER PRIMARY KEY, nome TEXT NOT NULL)');
    tx.executeSql('DELETE FROM possibilidade_instalacao');
    tx.executeSql('INSERT INTO possibilidade_instalacao VALUES (1,"Aparente")');
    tx.executeSql('INSERT INTO possibilidade_instalacao VALUES (2,"Embutida")');
    tx.executeSql('INSERT INTO possibilidade_instalacao VALUES (3,"Espaço de construção")');
    tx.executeSql('INSERT INTO possibilidade_instalacao VALUES (4,"Subterrânea")');
    tx.executeSql('INSERT INTO possibilidade_instalacao VALUES (5,"Suspensa")');
    tx.executeSql('INSERT INTO possibilidade_instalacao VALUES (6,"Aparente ao Ar (Bandeja - Sem exposição solar)")');
    tx.executeSql('INSERT INTO possibilidade_instalacao VALUES (7,"Banco de dutos no Solo")');
    tx.executeSql('INSERT INTO possibilidade_instalacao VALUES (8,"Canaleta fechada no Solo")');
    tx.executeSql('INSERT INTO possibilidade_instalacao VALUES (9,"Diretamente enterrado no Solo")');
    tx.executeSql('INSERT INTO possibilidade_instalacao VALUES (10,"Eletroduto aparente ao Ar (Bandeja - Sem exposição solar)")');
    tx.executeSql('INSERT INTO possibilidade_instalacao VALUES (11,"Eletroduto no Solo")');
    tx.executeSql('INSERT INTO possibilidade_instalacao VALUES (12,"Eletroduto não metálico aparente ao ar (Sem exposição solar)")');
    tx.executeSql('INSERT INTO possibilidade_instalacao VALUES (13,"Eletroduto metálico aparente ao ar (Sem exposição solar)")');
    tx.executeSql('INSERT INTO possibilidade_instalacao VALUES (14,"Eletroduto não metálico no solo")');
    tx.executeSql('INSERT INTO possibilidade_instalacao VALUES (15,"Eletroduto metálico no solo")');
                  
    //*NOVO - ORIGINAL TemperaturaArSolo
    tx.executeSql('CREATE TABLE IF NOT EXISTS temperatura_ar_solo (id INTEGER PRIMARY KEY, nome TEXT NOT NULL)');
    tx.executeSql('DELETE FROM temperatura_ar_solo');
    tx.executeSql('INSERT INTO temperatura_ar_solo VALUES (10,"10º")');
    tx.executeSql('INSERT INTO temperatura_ar_solo VALUES (15,"15º")');
    tx.executeSql('INSERT INTO temperatura_ar_solo VALUES (20,"20º")');
    tx.executeSql('INSERT INTO temperatura_ar_solo VALUES (25,"25º")');
    tx.executeSql('INSERT INTO temperatura_ar_solo VALUES (30,"30º")');
    tx.executeSql('INSERT INTO temperatura_ar_solo VALUES (35,"35º")');
    tx.executeSql('INSERT INTO temperatura_ar_solo VALUES (40,"40º")');
    tx.executeSql('INSERT INTO temperatura_ar_solo VALUES (45,"45º")');
    tx.executeSql('INSERT INTO temperatura_ar_solo VALUES (50,"50º")');
    tx.executeSql('INSERT INTO temperatura_ar_solo VALUES (55,"55º")');
    tx.executeSql('INSERT INTO temperatura_ar_solo VALUES (60,"60º")');
    tx.executeSql('INSERT INTO temperatura_ar_solo VALUES (65,"65º")');
    tx.executeSql('INSERT INTO temperatura_ar_solo VALUES (70,"70º")');
    tx.executeSql('INSERT INTO temperatura_ar_solo VALUES (75,"75º")');
    tx.executeSql('INSERT INTO temperatura_ar_solo VALUES (80,"80º")');
    tx.executeSql('INSERT INTO temperatura_ar_solo VALUES (85,"85º")');
                  
    //*NOVO - ORIGINAL TipoInstalacao
    tx.executeSql('CREATE TABLE IF NOT EXISTS tipo_instalacao (id INTEGER PRIMARY KEY, nome TEXT NOT NULL, enum TEXT NOT NULL, id INTEGER)');
    tx.executeSql('DELETE FROM tipo_instalacao');
    tx.executeSql('INSERT INTO tipo_instalacao  VALUES (1,"Cabos unipolares",1,"CABOS_UNIPOLARES_B1")');
    tx.executeSql('INSERT INTO tipo_instalacao  VALUES (2,"Cabos multipolares",2,"CABOS_MULTIPOLARES_B2")');
    tx.executeSql('INSERT INTO tipo_instalacao  VALUES (3,"Cabos unipolares",3,"CABOS_UNIPOLARES_F")');
    tx.executeSql('INSERT INTO tipo_instalacao  VALUES (4,"Cabos multipolares",4,"CABOS_MULTIPOLARES_E")');
    tx.executeSql('INSERT INTO tipo_instalacao  VALUES (5,"Cabos unipolares",5,"CABOS_UNIPOLARES_C")');
    tx.executeSql('INSERT INTO tipo_instalacao  VALUES (6,"Cabos multipolares",6,"CABOS_MULTIPOLARES_C")');
    tx.executeSql('INSERT INTO tipo_instalacao  VALUES (7,"Cabos multipolares",7,"CABOS_MULTIPOLARES_A1")');
    tx.executeSql('INSERT INTO tipo_instalacao  VALUES (8,"Cabos unipolares",8,"CABOS_UNIPOLARES_A1")');
    tx.executeSql('INSERT INTO tipo_instalacao  VALUES (9,"Cabos multipolares",9,"CABOS_MULTIPOLARES_A2")');
    tx.executeSql('INSERT INTO tipo_instalacao  VALUES (10,"Cabos unipolares",10,"CABOS_UNIPOLARES_D")');
    tx.executeSql('INSERT INTO tipo_instalacao  VALUES (11,"Cabos multipolares",11,"CABOS_MULTIPOLARES_D")');
    tx.executeSql('INSERT INTO tipo_instalacao  VALUES (12,"Cabos multipolares",12,"CABOS_MULTIPOLARES_B1")');
    tx.executeSql('INSERT INTO tipo_instalacao  VALUES (13,"Condutores isolados",13,"CONDUTORES_ISOLADOS_G")');
    tx.executeSql('INSERT INTO tipo_instalacao  VALUES (14,"Cabos unipolares",14,CABOS_UNIPOLARES_B1_B2"")');
    tx.executeSql('INSERT INTO tipo_instalacao  VALUES (15,"Cabos multipolares",15,"CABOS_MULTIPOLARES_B1_B2")');
    tx.executeSql('INSERT INTO tipo_instalacao  VALUES (16,"Cabos unipolares",16,"CABOS_UNIPOLARES_B2_B1")');
    tx.executeSql('INSERT INTO tipo_instalacao  VALUES (17,"Cabos multipolares",17,"CABOS_MULTIPOLARES_B2_B1")');
    tx.executeSql('INSERT INTO tipo_instalacao  VALUES (18,"Condutores isolados",18,"CONDUTORES_ISOLADOS_B1")');
    tx.executeSql('INSERT INTO tipo_instalacao  VALUES (19,"Condutores isolados",19,"CONDUTORES_ISOLADOS_A1")');
    tx.executeSql('INSERT INTO tipo_instalacao  VALUES (20,"Condutores isolados",20,"CONDUTORES_ISOLADOS_B2_B1")');
    tx.executeSql('INSERT INTO tipo_instalacao  VALUES (21,"Formação espaçada",21,"")');
    tx.executeSql('INSERT INTO tipo_instalacao  VALUES (22,"Trifólio",22,"FORMACAO_TRIFOLIO")');
    tx.executeSql('INSERT INTO tipo_instalacao  VALUES (23,"Plano justapostos",23,"FORMACAO_JUSTAPOSTA")');
    tx.executeSql('INSERT INTO tipo_instalacao  VALUES (24,"Formação Espaçada",24,"FORMACAO_ESPACADA")');
    tx.executeSql('INSERT INTO tipo_instalacao  VALUES (25,"Formação Horizontal",25,"FORMACAO_HORIZONTAL")');
    tx.executeSql('INSERT INTO tipo_instalacao  VALUES (26,"Formação Vertical",26,"FORMACAO_VERTICAL")');
    tx.executeSql('INSERT INTO tipo_instalacao  VALUES (27,"Instalação em Bandejas",27,"INSTALACAO_BANDEJAS")');
    tx.executeSql('INSERT INTO tipo_instalacao  VALUES (28,"Instalação Vertical",28,"INSTALACAO_VERTICAL")');
    tx.executeSql('INSERT INTO tipo_instalacao  VALUES (29,"Não precisa aplicar fator de correção",29,"SEM_FATOR_CORRECAO")');
    tx.executeSql('INSERT INTO tipo_instalacao  VALUES (30,"Um cabo por duto",24,"_1_CABO")');
    tx.executeSql('INSERT INTO tipo_instalacao  VALUES (31,"Três cabos por duto",22,"_3_CABOS")');
                  
    //*NOVO - ORIGINAL LocalInstalacao
    tx.executeSql('CREATE TABLE IF NOT EXISTS local_instalacao (id INTEGER PRIMARY KEY, nome TEXT NOT NULL, enum TEXT NOT NULL, id INTEGER)');
    tx.executeSql('DELETE FROM local_instalacao');
    tx.executeSql('INSERT INTO local_instalacao  VALUES (1,"Eletroduto",1,"ELETRODUTO")');
    tx.executeSql('INSERT INTO local_instalacao  VALUES (2,"Bandeja Perfurada",2,"BANDEJA_PERFURADA")');
    tx.executeSql('INSERT INTO local_instalacao  VALUES (3,"Leito (Escada para Cabos)",3,"LEITO")');
    tx.executeSql('INSERT INTO local_instalacao  VALUES (4,"Bandeja não perfurada (Prateleira)",4,"BANDEJA_NAO_PERFURADA")');
    tx.executeSql('INSERT INTO local_instalacao  VALUES (5,"Suportes",5,"SUPORTES")');
    tx.executeSql('INSERT INTO local_instalacao  VALUES (6,"Em paredes",6,"PAREDES")');
    tx.executeSql('INSERT INTO local_instalacao  VALUES (7,"Moldura",7,"MOLDURA")');
    tx.executeSql('INSERT INTO local_instalacao  VALUES (8,"Em parede isolante diretamente",8,"PAREDE_ISOLANTE")');
    tx.executeSql('INSERT INTO local_instalacao  VALUES (9,"Em alvenaria diretamente",9,"ALVENARIA")');
    tx.executeSql('INSERT INTO local_instalacao  VALUES (10,"Eletroduto em parede termicamente isolante",10,"ELETRODUTO_PAREDE")');
    tx.executeSql('INSERT INTO local_instalacao  VALUES (11,"Caixilho de porta ou janela",11,"CAIXILHO_PORTA_PAREDE")');
    tx.executeSql('INSERT INTO local_instalacao  VALUES (12,"Eletroduto circular em alvenaria",12,"ELETRODUTO_CIRCULAR_ALVENARIA")');
    tx.executeSql('INSERT INTO local_instalacao  VALUES (13,"Diretamente enterrados",13,"DIRETAMENTE_ENTERRADOS")');
    tx.executeSql('INSERT INTO local_instalacao  VALUES (14,"Canaleta fechada",14,"CANALETA_FECHADA")');
    tx.executeSql('INSERT INTO local_instalacao  VALUES (15,"Canaleta ventilada",15,"CANALETA_VENTILADA")');
    tx.executeSql('INSERT INTO local_instalacao  VALUES (16,"Eletrocalha ou perfilado",16,"ELETROCALHA_PERFILADO")');
    tx.executeSql('INSERT INTO local_instalacao  VALUES (17,"Isoladores",17,"ISOLADORES")');
    tx.executeSql('INSERT INTO local_instalacao  VALUES (18,"Diretamente",18,"DIRETAMENTE")');
    tx.executeSql('INSERT INTO local_instalacao  VALUES (19,"Em eletroduto (Seção circular)",19,"ELETRODUTO_SECAO_CIRCULAR")');
    tx.executeSql('INSERT INTO local_instalacao  VALUES (20,"Eletrocalha fechada ou Eletroduto",1,"ELETROCALHA_FECHADA_OU_ELETRODUTO")');
    tx.executeSql('INSERT INTO local_instalacao  VALUES (21,"Teto (Fixação Direta)",23,"TETO")');
                  
    //*NOVO - ORIGINAL TemperaturaMaxima
    tx.executeSql('CREATE TABLE IF NOT EXISTS banco_dutos (id INTEGER PRIMARY KEY, nome TEXT NOT NULL)');
    tx.executeSql('DELETE FROM banco_dutos');
    tx.executeSql('INSERT INTO banco_dutos VALUES (1,"1 Circuito")');
    tx.executeSql('INSERT INTO banco_dutos VALUES (2,"2 Circuitos")');
    tx.executeSql('INSERT INTO banco_dutos VALUES (3,"3 Circuitos")');
    tx.executeSql('INSERT INTO banco_dutos VALUES (4,"4 Circuitos")');
                  
    //*NOVO - ORIGINAL ResistividadeTermica
    tx.executeSql('CREATE TABLE IF NOT EXISTS resistividade_termica (id INTEGER PRIMARY KEY, nome TEXT NOT NULL)');
    tx.executeSql('DELETE FROM resistividade_termica');
    tx.executeSql('INSERT INTO resistividade_termica VALUES (1,"1 K.m/W")');
    tx.executeSql('INSERT INTO resistividade_termica VALUES (2,"1,5 K.m/W")');
    tx.executeSql('INSERT INTO resistividade_termica VALUES (3,"2 K.m/W")');
    tx.executeSql('INSERT INTO resistividade_termica VALUES (4,"3 K.m/W")');
    tx.executeSql('INSERT INTO resistividade_termica VALUES (5,"2,5 K.m/W")');
                  
    //*NOVO - ORIGINAL RelacaoCaboXDuto
    tx.executeSql('CREATE TABLE IF NOT EXISTS relacao_cubo_duto (id INTEGER PRIMARY KEY, nome TEXT NOT NULL)');
    tx.executeSql('DELETE FROM relacao_cubo_duto');
    tx.executeSql('INSERT INTO relacao_cubo_duto VALUES (1,"1,5De <= V < 20De")');
    tx.executeSql('INSERT INTO relacao_cubo_duto VALUES (2,"V => 20De")');
    tx.executeSql('INSERT INTO relacao_cubo_duto VALUES (3,"1,5De <= V < 5De")');
    tx.executeSql('INSERT INTO relacao_cubo_duto VALUES (4,"5De <= V < 50De")');

    //*NOVO - ORIGINAL PosicaoCabos
    tx.executeSql('CREATE TABLE IF NOT EXISTS posicao_cabos (id INTEGER PRIMARY KEY, nome TEXT NOT NULL)');
    tx.executeSql('DELETE FROM posicao_cabos');
    tx.executeSql('INSERT INTO posicao_cabos VALUES (1,"1 circuito")');
    tx.executeSql('INSERT INTO posicao_cabos VALUES (2,"2 circuitos")');
    tx.executeSql('INSERT INTO posicao_cabos VALUES (3,"3 circuitos")');
    tx.executeSql('INSERT INTO posicao_cabos VALUES (4,"4 circuitos")');
    tx.executeSql('INSERT INTO posicao_cabos VALUES (6,"6 circuitos")');
    tx.executeSql('INSERT INTO posicao_cabos VALUES (9,"9 circuitos")');
    tx.executeSql('INSERT INTO posicao_cabos VALUES (10,"3 cabos unipolares em plano encostados ou em trifolio ou um cabo tripolar (método H)")');
    tx.executeSql('INSERT INTO posicao_cabos VALUES (11,"3 cabos unipolares em plano afastados de no mÌnimo um diâmetro.")');
                  
    //*NOVO - ORIGINAL OrientacaoCabo
    tx.executeSql('CREATE TABLE IF NOT EXISTS orientacao_cabo (id INTEGER PRIMARY KEY, nome TEXT NOT NULL)');
    tx.executeSql('DELETE FROM orientacao_cabo');
    tx.executeSql('INSERT INTO orientacao_cabo VALUES (1,"Formação Horizontal")');
    tx.executeSql('INSERT INTO orientacao_cabo VALUES (2,"Formação Vertical")');
                  
    //*NOVO - ORIGINAL DistanciaCabos
    tx.executeSql('CREATE TABLE IF NOT EXISTS distancia_cabos (id INTEGER PRIMARY KEY, nome TEXT NOT NULL, enum TEXT NOT NULL, id INTEGER)');
    tx.executeSql('DELETE FROM distancia_cabos');
    tx.executeSql('INSERT INTO distancia_cabos  VALUES (1,"Nula",1,"NULA")');
    tx.executeSql('INSERT INTO distancia_cabos  VALUES (2,"1m",2,"_1M")');
    tx.executeSql('INSERT INTO distancia_cabos  VALUES (3,"0,125m",3,"_0_125M")');
    tx.executeSql('INSERT INTO distancia_cabos  VALUES (4,"0,25m",4,"_0_25M")');
    tx.executeSql('INSERT INTO distancia_cabos  VALUES (5,"0,5m",5,"_0_5M")');
    tx.executeSql('INSERT INTO distancia_cabos  VALUES (6,"Maior que 0,5m",6,"MAIOR_0_5M")');
    tx.executeSql('INSERT INTO distancia_cabos  VALUES (7,"Maior que 1m",7,"MAIOR_1M")');
    tx.executeSql('INSERT INTO distancia_cabos  VALUES (2,"Um di‚metro de cabo",2,"UM_DIAMETRO")');

    //*NOVO - ORIGINAL OrientacaoFatorCorrecao
    tx.executeSql('CREATE TABLE IF NOT EXISTS orientacao_fator_correcao (id INTEGER PRIMARY KEY, nome TEXT NOT NULL)');
    tx.executeSql('DELETE FROM orientacao_fator_correcao');
    tx.executeSql('INSERT INTO orientacao_fator_correcao VALUES (0,"Não necessita aplicar fator de correção")');
    tx.executeSql('INSERT INTO orientacao_fator_correcao VALUES (2,"Instalação horizontal")');
    tx.executeSql('INSERT INTO orientacao_fator_correcao VALUES (2,"Instalação vertical")');

}

function successCB() {
	/*alert("success!");
	db.transaction(function(tx){
		tx.executeSql('SELECT cc.* FROM construcao_do_cabo cc JOIN tipo_x_tensao_x_construcao ttc ON ttc.id_3 = cc.id WHERE ttc.id_1 = ? AND ttc.id_2 = ?',[2,1],function(tx,rs){
			 for(var i = 0; i < rs.rows.length; i++) {
			 	console.log(rs.rows.item(i));
				//$(me).append(new Option(rs.rows.item(i).nome,rs.rows.item(i).id, false, false));
			 }
		});
	},errorCB);*/
}
                  
$("#cableConstruction").change(function(){
    var nivelTensao = $("#systemVoltage").val(); //dimensionamento.nivelTensao
    getTiposCabo(nivelTensao);
});

$("#cableFirePerformance").change(function(){
    var nivelTensao = $("#systemVoltage").val(); //dimensionamento.nivelTensao
    getAplicacoes(nivelTensao);
});

//react2("#systemVoltage", "#cableList", myquery2("nivel_de_tensao_do_sistema","tipo_de_produtos","tipo_x_tensao") );
$("#cableList").change(function() { //FREQUENCY
    tipoProdutoOnChange();
});
//react2("#cableMaterial","#cableList", myquery2("material_do_condutor","tipo_de_produtos","tipo_x_material"));
//react2("#conductorNumber","#systemVoltage", myquery2("numero_de_condutores","nivel_de_tensao_do_sistema","tensao_x_numero"));
//react3("#circuitUsage","#cableList","#cableMaterial", myquery3("utilizacao_do_circuito","tipo_x_material_x_utilizacao"));
//react3("#system","#cableList","#conductorNumber", myquery3("sistema","tipo_x_condutores_x_sistema"));

//ESTE METODO FOI SUBSTITUIDO, POIS A TEMPERATURA MAXIMA FOR SELECIONADA AI SIM VAI POPULAR A TEMPERATURA MAXIMA
//react2("#maximumTemperature", "#cableList", myquery2("temperatura_do_condutor","tipo_de_produtos","tipo_x_temperatura"));
                  
/*$("#isolationVoltage").change(function(){
    var tipoProduto = $("#cableList").val();
    var nivelTensao = $("#systemVoltage").val();
    var caboSelecionado = $("#caboSelecionado").val();
    var tensaoIsolamento = $("#isolationVoltage").val();
    var materialCondutor = $("#cableMaterial").val();
    getTemperaturaMaximaCondutor(tipoProduto, nivelTensao, caboSelecionado, tensaoIsolamento, materialCondutor);
});*/
                  
$("#systemVoltage").change(function(){
    nivelTensaoOnChange();
});
                  
$("#cableMaterial").change(function(){
    materialCondutorOnChange();
});

$("#conductorNumber").change(function(){
    numeroCondutoresOnChange();
});
                  
$("#serviceVoltage").change(function(){
    tensaoServicoOnChange();
});
                  
$("#voltageUnit").change(function(){
    tensaoServicoOnChange();
});
                  
$("#isolationVoltage").change(function(){
    tensaoIsolamentoOnChange();
});
                  
$("#circuitUsage").change(function(){
    utilizacaoCircuitoOnChange();
});
                  
$("#system").change(function(){
    sistemaOnChange();
});
                                    
$("#maximumTemperature").change(function(){
    updateCaboSelecionado();
});
                  
$("#caboSelecionado").change(function(){
    caboSelecionadoOnChange();
});
                  
$("#possibilidadeInstalacao").change(function(){
    possibilidadeInstalacaoOnChange();
    getLocaisInstalacao()
});
                  
$("#numeroCamadas").change(function(){
    updateNumeroCamadas();
});
                  
$("#numeroCircuitos").change(function(){
    updateNumeroCircuitos();
});
                  
react3("#cableConstruction","#cableList","#systemVoltage",myquery3("construcao_do_cabo","tipo_x_tensao_x_construcao"));
react3("#cableFirePerformance","#cableList","#systemVoltage",myquery3("aplicacao_do_cabo","tipo_x_tensao_x_aplicacao"));
//react3("#isolationMaterial","#cableList","#systemVoltage",myquery3("material_de_isolacao","tipo_x_tensao_x_isolacao"));

/*$("#serviceVoltage").change(function(){
	$("#voltageUnit").change();
});

$("#voltageUnit").change(function(){ //ISOLATION VOLTAGE
	var serviceVoltage = $("#serviceVoltage").val();
	var voltageUnit = $("#voltageUnit").val();
	var type = $("#systemVoltage").val();
	clearSelect($("#isolationVoltage"));
	
	if(serviceVoltage == "") return;
	if(voltageUnit == "0") return;
	
	if(!$.isNumeric(serviceVoltage)) {
		navigator.notification.alert("Insira um valor válido.",null,"");
		$("#serviceVoltage").val("");
		$("#voltageUnit").val("0");
		return;
	}
	
	var divideBy = voltageUnit == "1" ? 1000.0 : 1;
	serviceVoltage = parseFloat(serviceVoltage)/divideBy;
	
	if(type == 1) {
		if(serviceVoltage < 0.001 || serviceVoltage > 1.000) {
			navigator.notification.alert("A tensão de serviço deve estar entre 1V e 1000V ou 0.001kV e 1kV",null,"");
			$("#serviceVoltage").val("");
			$("#voltageUnit").val("0");
			return;
		}
	} else if(type == 2) {
		if(serviceVoltage < 1.000 || serviceVoltage > 20.000) {
			navigator.notification.alert("A tensão de serviço deve estar entre 1000V e 20000V ou 1kV e 20kV",null,"");
			$("#serviceVoltage").val("");
			$("#voltageUnit").val("0");
			return;
		}
	}
	
	db.transaction(function(tx){
		tx.executeSql("SELECT id, nome FROM tensao_de_isolamento WHERE max >= ? AND id_tipo = ?",[serviceVoltage, type],function(tx,rs){
			for(var i = 0; i < rs.rows.length; i++) {
				$("#isolationVoltage").append(new Option(rs.rows.item(i).nome,rs.rows.item(i).id, false, false));
			 }
		});
	},errorCB);
});*/

/*$("#systemVoltage").change(function(){
	var type = $("#cableList").val();
	var voltage = $(this).val();
	
	if(type == "0" || type == "1" || voltage == "0") return;
	
	console.log(type + " " + voltage);
	
	if(voltage == "1") {
		showPopup("specification-popup");
		$("#cableConstruction").focus();
	}
	else if(voltage == "2") {
		showPopup("specification-popup2");
		$("#isolationMaterial").focus();
	}
});*/

$("#specification-popup-cancel").click(function(){
	$("#systemVoltage").val("0");
	closePopup("specification-popup");
});

$("#specification-popup2-cancel").click(function(){
	$("#systemVoltage").val("0");
	closePopup("specification-popup2");
});

$("#specification-popup-continue").click(function(){
	var cableConstruction = $("#cableConstruction").val();
	var cableFirePerformance = $("#cableFirePerformance").val();
	
	if(cableConstruction == 0 || cableFirePerformance == 0) {
		navigator.notification.alert("Escolha todos os campos",null,"");
		return;
	}
	
	closePopup("specification-popup");
});

$("#specification-popup2-continue").click(function(){
	var isolationMaterial = $("#isolationMaterial").val();
	
	if(isolationMaterial == 0) {
		navigator.notification.alert("Escolha todos os campos",null,"");
		return;
	}
	
	closePopup("specification-popup2");
});
   
//INTERATIVIDADE POSSIBILIDADE INSTALAÇÃO
    $("#localInstalacaoAparente-popup-continue").click(function()
    {
        var localInstalacao = $("#localInstalacao").val();
        if(localInstalacao == 0)
        {
            navigator.notification.alert("Selecione o local de instalação",null,"");
            return
        }
        else
        {
            submitPossibilidadeInstalacao();
                                                       
            //closePopup("localInstalacaoAparente-popup");
            //showPopup("possibilidadeCabos-popup");
        }
    });
                  
    $("#localInstalacaoAparente-popup-cancel").click(function()
    {
        $("#localInstalacao").val("0");
        closePopup("localInstalacaoAparente-popup");
    });
                  
    $("#possibilidadeCabos-popup-back").click(function()
    {
        closePopup("possibilidadeCabos-popup");
        showPopup("localInstalacaoAparente-popup");                                              
    });
                  
    $("#possibilidadeCabos-popup-continue").click(function()
    {
        closePopup("possibilidadeCabos-popup");
    });

function myquery2(p1, p2, p3) {
	return 'SELECT a.id, a.nome FROM ' + p2 + ' b INNER JOIN ' + p3 + ' r ON b.id = r.id_1 INNER JOIN ' + p1 + ' a ON a.id = r.id_2 WHERE b.id = ?'
}

function myquery3(p1, p2)
{
	return 'SELECT cc.* FROM ' + p1 + ' cc JOIN ' + p2 + ' ttc ON ttc.id_3 = cc.id WHERE ttc.id_1 = ? AND ttc.id_2 = ?';
}

function react2(me, listen, query) {
	$(listen).change(function() {
		clearSelect($(me));
		
		db.transaction(function(tx){
			tx.executeSql(query,[$(listen).val()],function(tx,rs){
				 for(var i = 0; i < rs.rows.length; i++) {
					$(me).append(new Option(rs.rows.item(i).nome,rs.rows.item(i).id, false, false));
				 }
			});
		},errorCB,function(){ $(me).change(); });
	
	});
	$(listen).change();
}

function react3(me, listen1, listen2, query)
{
	$(listen2).change(function() {
		clearSelect($(me));
		
		if($(listen1).val() == 0) return;
		
		db.transaction(function(tx){
			tx.executeSql(query, [$(listen1).val(),$(listen2).val()], function(tx, rs) {
				for(var i = 0; i < rs.rows.length; i++) {
					$(me).append(new Option(rs.rows.item(i).nome,rs.rows.item(i).id, false, false));
				}
			});
		},errorCB,function(){ $(me).change(); });
	});
	
	$(listen1).change(function() {
		clearSelect($(me));
		
		if($(listen2).val() == 0) return;
		
		db.transaction(function(tx){
			tx.executeSql(query, [$(listen1).val(),$(listen2).val()], function(tx, rs) {
				for(var i = 0; i < rs.rows.length; i++) {
					$(me).append(new Option(rs.rows.item(i).nome,rs.rows.item(i).id, false, false));
				}
			});
		},errorCB,function(){ $(me).change(); });
	});
	
	$(listen1).change();
	$(listen2).change();
}

});