var pages = ["page-newproject", "page-projectdescription", "page-cabledescription", "page-cableinfo", "page-dimension"];
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
	alert(err.code + " " +err.message);
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
	document.body.addEventListener('touchmove', preventDefault, false);
	$("*").bind("blur",function(){window.scrollBy(0,-500);});
	document.activeElement.blur();
	window.scrollBy(0,-500);
}

function closePopup(name) {
	$("#"+name).hide();
	$("*").unbind("blur");
	document.body.removeEventListener('touchmove', preventDefault);
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
				db.transaction(function(tx){
					
					var material = $("#cableMaterial").val();
					var condutores = $("#conductorNumber").val();
					var tensao = $("#isolationVoltage").val();
					var temperatura = $("#maximumTemperature").val();
					
					tx.executeSql('SELECT c.* FROM cabos c JOIN cabos_de_potencia cp ON c.id = cp.id_cabo WHERE cp.id_material = ? AND id_condutores = ? AND id_tensao = ? AND id_temperatura >= ?',[material, condutores, tensao, temperatura],function(tx, rs){
							$("#page-cabledescription ul").empty();
							var i;
							for(i = 0; i < rs.rows.length; i++) {
								console.log(rs.rows.item(i));
								$("#page-cabledescription ul").first().append("<li onclick='loadCableInfo("+rs.rows.item(i).id+")'>"+rs.rows.item(i).nome+"</li>");
							}
							if(i <= 0)
							{
								navigator.notification.alert("Não existe nenhum cabo associado. Por favor entre com os dados novamente.",null,"Erro");
								valid = false;
							}
					});
					
					
					
				},errorCB);
				
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
				db.transaction(function(tx){
					
					var construcao = $("#cableConstruction").val();
					var aplicacao = $("#cableFirePerformance").val();
					var isolacao = $("#isolationMaterial").val();
					var condutores = $("#conductorNumber").val();
					var tensao = $("#systemVoltage").val();
					
					tx.executeSql('SELECT c.* FROM cabos c JOIN cabos_navais cn ON c.id = cn.id_cabo WHERE cn.id_construcao = ? AND cn.id_aplicacao = ? AND cn.id_isolacao = ? AND id_condutores = ? AND id_tensao = ?',[construcao, aplicacao, isolacao, condutores, tensao],function(tx, rs){
							$("#page-cabledescription ul").empty();
							var i;
							for(i = 0; i < rs.rows.length; i++) {
								console.log(rs.rows.item(i));
								$("#page-cabledescription ul").first().append("<li onclick='loadCableInfo("+rs.rows.item(i).id+")'>"+rs.rows.item(i).nome+"</li>");
							}
							if(i <= 0)
							{
								navigator.notification.alert("Não existe nenhum cabo associado. Por favor entre com os dados novamente.",null,"Erro");
								valid = false;
							}
					});
					
				},errorCB);
				
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
			$(".cable-name").html(rs.rows.item(0).nome);
			$(".cable-photo").html("<img class='img-cabo' src='"+rs.rows.item(0).imagem+"'></img>");
			$(".cable-description").html(rs.rows.item(0).descricao);
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

	tx.executeSql('CREATE TABLE IF NOT EXISTS tipo_de_produtos (id INTEGER PRIMARY KEY, nome TEXT NOT NULL)');
	tx.executeSql('DELETE FROM tipo_de_produtos');
	tx.executeSql('INSERT INTO tipo_de_produtos VALUES (1,"Cabos de Potência")');
	tx.executeSql('INSERT INTO tipo_de_produtos VALUES (2,"Cabos Navais (Offshore)")');
	
	tx.executeSql('CREATE TABLE IF NOT EXISTS nivel_de_tensao_do_sistema (id INTEGER PRIMARY KEY, nome TEXT NOT NULL)');
	tx.executeSql('DELETE FROM nivel_de_tensao_do_sistema');
	tx.executeSql('INSERT INTO nivel_de_tensao_do_sistema VALUES (1,"Baixa Tensão até 1kV")');
	tx.executeSql('INSERT INTO nivel_de_tensao_do_sistema VALUES (2,"Média Tensão de 1kV até 35kV")');
	
	tx.executeSql('CREATE TABLE IF NOT EXISTS tipo_x_tensao (id_1 INTEGER, id_2 INTEGER)');
	tx.executeSql('DELETE FROM tipo_x_tensao');
	tx.executeSql('INSERT INTO tipo_x_tensao VALUES (1,1)');
	tx.executeSql('INSERT INTO tipo_x_tensao VALUES (1,2)');
	tx.executeSql('INSERT INTO tipo_x_tensao VALUES (2,1)');
	tx.executeSql('INSERT INTO tipo_x_tensao VALUES (2,2)');
	
	/**********/
	//Especificação do tipo construtivo
	tx.executeSql('CREATE TABLE IF NOT EXISTS construcao_do_cabo (id INTEGER PRIMARY KEY, nome TEXT NOT NULL)');
	tx.executeSql('DELETE FROM construcao_do_cabo');
	tx.executeSql('INSERT INTO construcao_do_cabo VALUES (1,"Cabo armado com trança de Cobre")');
	tx.executeSql('INSERT INTO construcao_do_cabo VALUES (2,"Cabo armado com trança de Aço")');
	tx.executeSql('INSERT INTO construcao_do_cabo VALUES (3,"Cabo não armado")');
	
	tx.executeSql('CREATE TABLE IF NOT EXISTS aplicacao_do_cabo (id INTEGER PRIMARY KEY, nome TEXT NOT NULL)');
	tx.executeSql('DELETE FROM aplicacao_do_cabo');
	tx.executeSql('INSERT INTO aplicacao_do_cabo VALUES (1,"Auto-extinção e não-propagação da chama - NORMA IEC 60332-3-22")');
	tx.executeSql('INSERT INTO aplicacao_do_cabo VALUES (2,"Segurança Máxima - resistente ao fogo - NORMA IEC 60331-21")');
	
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
	
	tx.executeSql('CREATE TABLE IF NOT EXISTS temperatura_do_condutor (id INTEGER PRIMARY KEY, nome TEXT NOT NULL)');
	tx.executeSql('DELETE FROM temperatura_do_condutor');
	tx.executeSql('INSERT INTO temperatura_do_condutor VALUES (1,"70º")');
	tx.executeSql('INSERT INTO temperatura_do_condutor VALUES (2,"85º")');
	tx.executeSql('INSERT INTO temperatura_do_condutor VALUES (3,"90º")');
	tx.executeSql('INSERT INTO temperatura_do_condutor VALUES (4,"105º")');
	
	tx.executeSql('CREATE TABLE IF NOT EXISTS tipo_x_temperatura (id_1 INTEGER, id_2 INTEGER)');
	tx.executeSql('DELETE FROM tipo_x_temperatura');
	tx.executeSql('INSERT INTO tipo_x_temperatura VALUES (1,1)');
	tx.executeSql('INSERT INTO tipo_x_temperatura VALUES (1,3)');
	tx.executeSql('INSERT INTO tipo_x_temperatura VALUES (2,1)');
	tx.executeSql('INSERT INTO tipo_x_temperatura VALUES (2,2)');
	tx.executeSql('INSERT INTO tipo_x_temperatura VALUES (2,3)');
	
	tx.executeSql('CREATE TABLE IF NOT EXISTS tensao_de_isolamento (id INTEGER PRIMARY KEY, nome TEXT NOT NULL, max REAL, id_tipo INTEGER)');
	tx.executeSql('DELETE FROM tensao_de_isolamento');
	tx.executeSql('INSERT INTO tensao_de_isolamento VALUES(1,"0.6kV",1.000,1)');
	tx.executeSql('INSERT INTO tensao_de_isolamento VALUES(2,"450/750V",0.750,1)');
	tx.executeSql('INSERT INTO tensao_de_isolamento VALUES(3,"3.6/6kV",6.000,2)');
	tx.executeSql('INSERT INTO tensao_de_isolamento VALUES(4,"6/10kV",10.000,2)');
	tx.executeSql('INSERT INTO tensao_de_isolamento VALUES(5,"8.7/15kV",15.000,2)');
	tx.executeSql('INSERT INTO tensao_de_isolamento VALUES(6,"12/20kV",20.000,2)');
	tx.executeSql('INSERT INTO tensao_de_isolamento VALUES(7,"15/25kV",25.000,2)');
	tx.executeSql('INSERT INTO tensao_de_isolamento VALUES(8,"20/35kV",35.000,2)');
	
	tx.executeSql('CREATE TABLE IF NOT EXISTS cabos(id INTEGER PRIMARY KEY, nome TEXT NOT NULL, descricao TEXT NOT NULL, imagem TEXT NOT NULL, id_tipo INTEGER)');
	tx.executeSql('DELETE FROM cabos');
	tx.executeSql('INSERT INTO cabos VALUES(1,"Cabo Noflam Antichama BWF Flexível","Construção\
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
	
	tx.executeSql('INSERT INTO cabos VALUES(17,"EP-DRY 105ºC","","",1)');
	tx.executeSql('INSERT INTO cabos VALUES(18,"EP-DRY","","",1)');
	tx.executeSql('INSERT INTO cabos VALUES(19,"FIFEX BF","","",1)');
	
	/*tx.executeSql('INSERT INTO cabos VALUES(1,"NOFLAM FLEX",1)');
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
	tx.executeSql('INSERT INTO cabos VALUES(16,"AFITOX MEP S",2)');*/
	
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

react2("#systemVoltage", "#cableList", myquery2("nivel_de_tensao_do_sistema","tipo_de_produtos","tipo_x_tensao") );
$("#cableList").change(function() { //FREQUENCY
	if(parseInt($("#cableList").val()) > 0)
		$("#frequency").val("60");
	else
		$("#frequency").val("");
});
react2("#cableMaterial","#cableList", myquery2("material_do_condutor","tipo_de_produtos","tipo_x_material"));
react2("#conductorNumber","#systemVoltage", myquery2("numero_de_condutores","nivel_de_tensao_do_sistema","tensao_x_numero"));
react3("#circuitUsage","#cableList","#cableMaterial", myquery3("utilizacao_do_circuito","tipo_x_material_x_utilizacao"));
react3("#system","#cableList","#conductorNumber", myquery3("sistema","tipo_x_condutores_x_sistema"));
react2("#maximumTemperature", "#cableList", myquery2("temperatura_do_condutor","tipo_de_produtos","tipo_x_temperatura"));

react3("#cableConstruction","#cableList","#systemVoltage",myquery3("construcao_do_cabo","tipo_x_tensao_x_construcao"));
react3("#cableFirePerformance","#cableList","#systemVoltage",myquery3("aplicacao_do_cabo","tipo_x_tensao_x_aplicacao"));
react3("#isolationMaterial","#cableList","#systemVoltage",myquery3("material_de_isolacao","tipo_x_tensao_x_isolacao"));

$("#serviceVoltage").change(function(){
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
});

$("#systemVoltage").change(function(){
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
});

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


































