var criterioDimensionamento = 0;
var gradienteMaximo = 0;
var fatorCanaleta = 0;
var corrente = 0;
var numeroCabos = 0;
var numeroCabosCorrente = 0;
var secaoCorrente = 0;


/*var xmlT003_PRODUTOS = "<T003_PRODUTOS>";
xmlT003_PRODUTOS += "<produto>";
xmlT003_PRODUTOS += "<TPO_REGISTRO>D</TPO_REGISTRO>";
xmlT003_PRODUTOS += "<COD_PRODUTO>47025</COD_PRODUTO>";
xmlT003_PRODUTOS += "<SEQ_REGISTRO_TIPO>310</SEQ_REGISTRO_TIPO>";
xmlT003_PRODUTOS += "<DSC_PRODUTO>AFITOX XP 3X95 MM2 0.6/1 KV</DSC_PRODUTO>";
xmlT003_PRODUTOS += "<NMR_FAMILIA_PRODUTO>190</NMR_FAMILIA_PRODUTO>";
xmlT003_PRODUTOS += "<DTA_ALTERACAO>2007-05-04</DTA_ALTERACAO>";
xmlT003_PRODUTOS += "<NME_FORMATO_CABO>R</NME_FORMATO_CABO>";
xmlT003_PRODUTOS += "<NME_TENSAO_PRODUTO>0.6/12</NME_TENSAO_PRODUTO>";
xmlT003_PRODUTOS += "<NME_UNIDADE_TENSAO_PRODUTO>KV</NME_UNIDADE_TENSAO_PRODUTO>";
xmlT003_PRODUTOS += "<NMR_NUMERO_CONDUTORES_FASE>3</NMR_NUMERO_CONDUTORES_FASE>";
xmlT003_PRODUTOS += "<NME_SECAO_CONDUTOR_FASE>95</NME_SECAO_CONDUTOR_FASE>";
xmlT003_PRODUTOS += "<NME_UND_SECAO_CONDUTOR_FASE>MM2</NME_UND_SECAO_CONDUTOR_FASE>";
xmlT003_PRODUTOS += "</produto>";
xmlT003_PRODUTOS += "<produto>";
xmlT003_PRODUTOS += "<TPO_REGISTRO>D</TPO_REGISTRO>";
xmlT003_PRODUTOS += "<COD_PRODUTO>47027</COD_PRODUTO>";
xmlT003_PRODUTOS += "<SEQ_REGISTRO_TIPO>311</SEQ_REGISTRO_TIPO>";
xmlT003_PRODUTOS += "<DSC_PRODUTO>AFITOX XP 2X70 MM2 0.6/1 KV</DSC_PRODUTO>";
xmlT003_PRODUTOS += "<NMR_FAMILIA_PRODUTO>190</NMR_FAMILIA_PRODUTO>";
xmlT003_PRODUTOS += "<DTA_ALTERACAO>2007-05-04</DTA_ALTERACAO>";
xmlT003_PRODUTOS += "<NME_FORMATO_CABO>R</NME_FORMATO_CABO>";
xmlT003_PRODUTOS += "<NME_TENSAO_PRODUTO>0.6/1</NME_TENSAO_PRODUTO>";
xmlT003_PRODUTOS += "<NME_UNIDADE_TENSAO_PRODUTO>KV</NME_UNIDADE_TENSAO_PRODUTO>";
xmlT003_PRODUTOS += "<NMR_NUMERO_CONDUTORES_FASE>2</NMR_NUMERO_CONDUTORES_FASE>";
xmlT003_PRODUTOS += "<NME_SECAO_CONDUTOR_FASE>70</NME_SECAO_CONDUTOR_FASE>";
xmlT003_PRODUTOS += "<NME_UND_SECAO_CONDUTOR_FASE>MM2</NME_UND_SECAO_CONDUTOR_FASE>";
xmlT003_PRODUTOS += "</produto>";
xmlT003_PRODUTOS += "<produto>";
xmlT003_PRODUTOS += "<TPO_REGISTRO>D</TPO_REGISTRO>";
xmlT003_PRODUTOS += "<COD_PRODUTO>37119</COD_PRODUTO>";
xmlT003_PRODUTOS += "<SEQ_REGISTRO_TIPO>312</SEQ_REGISTRO_TIPO>";
xmlT003_PRODUTOS += "<DSC_PRODUTO>AFITOX XP 1X50 MM2 0.6/1 KV</DSC_PRODUTO>";
xmlT003_PRODUTOS += "<NMR_FAMILIA_PRODUTO>190</NMR_FAMILIA_PRODUTO>";
xmlT003_PRODUTOS += "<DTA_ALTERACAO>2007-05-04</DTA_ALTERACAO>";
xmlT003_PRODUTOS += "<NME_FORMATO_CABO>R</NME_FORMATO_CABO>";
xmlT003_PRODUTOS += "<NME_TENSAO_PRODUTO>0.6/1</NME_TENSAO_PRODUTO>";
xmlT003_PRODUTOS += "<NME_UNIDADE_TENSAO_PRODUTO>KV</NME_UNIDADE_TENSAO_PRODUTO>";
xmlT003_PRODUTOS += "<NMR_NUMERO_CONDUTORES_FASE>1</NMR_NUMERO_CONDUTORES_FASE>";
xmlT003_PRODUTOS += "<NME_SECAO_CONDUTOR_FASE>50</NME_SECAO_CONDUTOR_FASE>";
xmlT003_PRODUTOS += "<NME_UND_SECAO_CONDUTOR_FASE>MM2</NME_UND_SECAO_CONDUTOR_FASE>";
xmlT003_PRODUTOS += "</produto>";
xmlT003_PRODUTOS += "</T003_PRODUTOS>";*/

function selectXML(xmlTabela, campos)
{
    alert("Campos selectXML: " + campos);
    
	//PARSING XML
	var xmlData = parseXML(xmlTabela);
	var rows = xmlData.getElementsByTagName("produto");
	
	var result = new Array();
	campos = (campos == "" || campos == undefined) ? "*" : campos;
	
	var i, j;
	for(i = 0; i < rows.length; i++){
		var obj = new Object();
		var actualRow = rows[i];
		var fields = actualRow.childNodes;
		
		if(arguments.length > 2){ //SE POSSUI MAIS DE DOIS PARAMETROS EXISTEM CONDIÇÕES
            
			var passou = true;
			for(j = 2; j < arguments.length; j++){
				var condicao = arguments[j];
				var arrayCondicao = condicao.split(",");
                
				//ARRAY CONDICAO
				//0 = CAMPO
				//1 = CONDICAO (=, <, >, <=, >=, BETWEEN)
				//2 = VALOR
				//3 = SEGUNDO VALOR CASO BETWEEN
				//NO PARAMETRO PASSAR ASSIM: "COD_PRODUTO,=,4000" OU "COD_PRODUTO,BETWEEN,4000,5000"
				
				var campoValidado = actualRow.getElementsByTagName(arrayCondicao[0])[0].textContent;
				switch(arrayCondicao[1]){
					case "=":
						if(campoValidado != arrayCondicao[2]){
							passou = false;
						}
						break;
                    case "!=":
                        if(campoValidado == arrayCondicao[2]){
                            passou = false;
                        }
                        break;
					case "<":
						if(campoValidado >= arrayCondicao[2]){
							passou = false;
						}
						break;
					case "<=":
						if(campoValidado > arrayCondicao[2]){
							passou = false;
						}
						break;
					case ">":
						if(campoValidado <= arrayCondicao[2]){
							passou = false;
						}
						break;
					case ">=":
						if(campoValidado < arrayCondicao[2]){
							passou = false;
						}
						break;
					case "BETWEEN":
						if(campoValidado < arrayCondicao[2] || campoValidado > arrayCondicao[3]){
							passou = false;
						}
						break;
				}
				
				if(!passou){
					break;
				}
			}
			
			if(!passou){
				continue;
			}
		}
		
		if(campos == "*"){ //BUSCAR TODOS OS CAMPOS
			for(j = 0; j < fields.length; j++){
				var fieldName = fields[j].nodeName;
				var fieldValue = fields[j].textContent;
				
				obj[fieldName] = fieldValue;
			}
			
		}else if(campos.search(",") != -1){ //BUSCAR MAIS DE UM CAMPO, MAS NAO TODOS
			var arrayCampos = campos.split(",");
			for(j = 0; j < arrayCampos.length; j++){
				var campoAtual = arrayCampos[j];
				var fieldValue = actualRow.getElementsByTagName(campoAtual)[0].textContent;
				obj[campoAtual] = fieldValue;
			}
			
		}else{ //BUSCAR 1 CAMPO
			var fieldValue = actualRow.getElementsByTagName(campos)[0].textContent;
			obj[campos] = fieldValue;
		}
		
		result.push(obj);
		
	}
	
	return result;
}

function parseXML(xmlString){
	var xmlData = "";
	if (window.DOMParser){
		parser = new DOMParser();
		xmlData = parser.parseFromString(xmlString,"text/xml");
	}else{ // Internet Explorer
		xmlData = new ActiveXObject("Microsoft.XMLDOM");
		xmlData.async = false;
		xmlData.loadXML(xmlString);
	}
	
	return xmlData;
}

function calcular()
{
    
    alert("Entrou calcular()");
    var fatorCanaleta = 1;
    //try {
		
		var dimensionamento = getDimensionamentoTabelaUtil();
    
        getCaboDimensionamentoCalculo(0);
    
        //var arrayProdutoBean = document.getElementById("arrayProdutoBean");
        //$('#arrayProdutoBean option[value="DSC_PRODUTO"]').attr({ selected : "selected" });
        //var tipoMaterialIsolacao = $("#arrayProdutoBean").text();
        var tipoMaterialIsolacao = arrayProdutoBean["NME_TIPO_MATERIAL_ISOLACAO"];
    
        alert("NME_TIPO_MATERIAL_ISOLACAO: " + tipoMaterialIsolacao);
    
        //init();
    
        alert("Antes do metodo calcularSecaoNominalCondutores()");
        //calcularSecaoNominalCondutores();
        alert("Depois do metodo calcularSecaoNominalCondutores()");
    
        //calcularReatanciaIndutiva();
        /*calcularReatanciaIndutivaCalculo();
        
        calcularQuedaTensao();
        calcularCurtoCircuito();
        calcularIntegralJouleCondutor(getSC(),getKbb());
        
        if (dimensionamento.isMediaTensao()){
            calcularIntegralJouleBlindagem(getSb(), getKbb());
        }
        
        calcularImpedanciaSequenciaPosNeg(getRca(), getXL());
        calcularReatanciaCapacitiva();
        
        if (dimensionamento.isMediaTensao() && dimensionamento.isCobre() && dimensionamento.isCabosEnergia()) {
            calcularDimensionamentoEconomico(dimensionamento.getCorrenteProjeto(), numeroCabos);
        }*/
        
    //} catch(err) {
    //    alert("Erro: " + err);
    //}
}

function calcularSecaoNominalCondutores()
{
	
    //getCalculoDebug().logMethodEnter("calcularSecaoNominalCondutores");
    alert("calcularSecaoNominalCondutores");
    
	var dimensionamento = getDimensionamentoTabelaUtil();
	
    //secaoNominal = new SecaoNominalCondutores(dimensionamento, produtoBean);
    
    // Efetua o c·lculo pelo critÈrio da corrente.
    calcularCriterioCorrenteSecaoNominal(1, false);
    criterioDimensionamento = 2;
    
    // Efetua o c·lculo pelo critÈrio da queda de tens„o.
	calcularCriterioQuedaTensao();
    
	
	//DAR UMA OLHADA
    //updateCabo(secaoNominal.getProduto());
    
    // Calcula fator de canaleta.
    if (dimensionamento.isMediaTensao() &&
        (dimensionamento.getPossibilidadeInstalacao() == CANALETA_FECHADA_SOLO)) {
        
        fatorCanaleta = calcularFatorCorrecaoCanaleta(dimensionamento.getCorrenteProjeto(), getRca(), getNumeroCabos());
        var iCanaleta = aplicarFatorCorrecao(dimensionamento.getCorrenteProjeto(), getNumeroCabos(), getSC(), fatorCanaleta);
        
        while ((iCanaleta > getITabelada()) || (iCanaleta == Number.NaN)) {
            
            calcularCriterioCorrenteSecaoNominal(getNumeroCabos(), true);
            
            // Efetua o c·lculo pelo critÈrio da queda de tens„o.
            calcularCriterioQuedaTensao();
            
            fatorCanaleta = calcularFatorCorrecaoCanaleta(dimensionamento.getCorrenteProjeto(),getRca(), getNumeroCabos());
            iCanaleta = aplicarFatorCorrecao(dimensionamento.getCorrenteProjeto(), getNumeroCabos(), secaoCorrente, fatorCanaleta);
        }
		
        setI(calcularMaximaCorrenteConducao(getITabelada(), getNumeroCabos(), fatorCanaleta));
    }
    
    corrente = getI();
    numeroCabosCorrente = getNumeroCabos();
    secaoCorrente = getSC();
}

function calcularReatanciaIndutivaCalculo()
{
    //reatanciaIndutiva = new ReatanciaIndutiva(dimensionamento, produtoBean);
    //distanciaEntreCondutores = new DistanciaEntreCondutores(dimensionamento, produtoBean);
    
    var s = getSDistanciaEntreCabos();
    var rp = getRp();
    var dp = getDp();
    var xpp = getXpp();
    
    calcularReatanciaIndutiva(s, rp, dp, xpp);
}

function getSecaoMinimaCalculo(dimensionamento) {
	
	var secao = 0;
	
	if (dimensionamento.getUtilizacaoCircuito() == FORCA) {
		if (dimensionamento.isCobre()) {
			secao = 2.5;
		} else {
			secao = 16;
		}
		
	} else if (dimensionamento.getUtilizacaoCircuito() == ILUMINACAO) {
		if (dimensionamento.isCobre()) {
			secao = 1.5;
		} else {
			secao = 16;
		}
		
	} else if (dimensionamento.getUtilizacaoCircuito() == SINALIZACAO
			   || dimensionamento.getUtilizacaoCircuito() == CONTROLE) {
		if (dimensionamento.isCobre()) {
			secao = 0.5;
		}
		
	} else if (dimensionamento.getUtilizacaoCircuito() == APLICACOES_ESPECIAIS
			   || dimensionamento.getUtilizacaoCircuito() == OUTROS) {
		if (dimensionamento.isCobre()) {
			secao = 0.75;
		}
		
	}
	
	if (dimensionamento.isBaixaTensao()) {
		if (dimensionamento.getTensaoIsolamento() == _3_6KV_6KV
			|| dimensionamento.getTensaoIsolamento() == _6KV_10KV) {
			secao = 16;
		} else if (dimensionamento.getTensaoIsolamento() == _8_7KV_15KV) {
			secao = 25;
		} else if (dimensionamento.getTensaoIsolamento() == _12KV_20KV
				   || dimensionamento.getTensaoIsolamento() == _15KV_25KV) {
			secao = 35;
		} else if (dimensionamento.getTensaoIsolamento() == _20KV_35KV) {
			secao = 50;
		}
	} else {
		if (dimensionamento.getCaboSelecionado() == EP_DRY ||
			dimensionamento.getCaboSelecionado() == EP_DRY_105C) {
			secao = 16;
		} else if (dimensionamento.getCaboSelecionado() == FIPEX_BF) {
			if (dimensionamento.getTensaoIsolamento() == _3_6KV_6KV) {
				secao = 10;
			} else if (dimensionamento.getTensaoIsolamento() == _6KV_10KV) {
				secao = 16;
			} else if (dimensionamento.getTensaoIsolamento() == _8_7KV_15KV) {
				secao = 25;
			} else if (dimensionamento.getTensaoIsolamento() == _12KV_20KV) {
				secao = 35;
			}
		}
	}
	
	gradienteMaximo = secao;
	var arrayProdutoBean = document.getElementById("arrayProdutoBean");
	if (secao < arrayProdutoBean.options["SecaoMinima"].value) {
		secao = arrayProdutoBean.options["SecaoMinima"].value;
	}
	
	return secao;
}

function calcularCurtoCircuito(){
	
	calcularCriterioCurto(getSC());
	
	if (getSc() > getSC()) {
		setSC(getSc());
		corrente = getIcc();
		
		//fatorCorrecao.setSecao(secaoNominal.getSC());
		corrente = calcularMaximaCorrenteConducao(buscarCorrenteTabela(getSC()), numeroCabos, fatorCanaleta);
		criterioDimensionamento = 1;
	}
}
