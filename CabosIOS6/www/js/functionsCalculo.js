var criterioDimensionamento = 0;
var gradienteMaximo = 0;
var fatorCanaleta = 0;
var corrente = 0;
var numeroCabos = 0;
var numeroCabosCorrente = 0;
var secaoCorrente = 0;
var calculoExceptionMessage = "";

function selectXML(xmlTabela, campos){
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
                
				//ARRAY CONDICAO NORMAL
				//0 = CAMPO
				//1 = CONDICAO (=, <, >, <=, >=, BETWEEN)
				//2 = VALOR
				//3 = SEGUNDO VALOR CASO BETWEEN
				//NO PARAMETRO PASSAR ASSIM: "COD_PRODUTO,=,4000" OU "COD_PRODUTO,BETWEEN,4000,5000"
				
				//ARRAY CONDICAO OR
				//0 = OR
				//1 = CAMPO
				//2 = CONDICAO (=, <, >, <=, >=, BETWEEN)
				//3 = VALOR
				//4 = SEGUNDO VALOR CASO BETWEEN
				//NO PARAMETRO PASSAR ASSIM: "COD_PRODUTO,=,4000" OU "COD_PRODUTO,BETWEEN,4000,5000"
				
				
				var campoValidado;
				if(arrayCondicao[0] == "OR"){
					campoValidado = actualRow.getElementsByTagName(arrayCondicao[1])[0].textContent;
					switch(arrayCondicao[2]){
						case "=":
							if(campoValidado == arrayCondicao[3]){
								passou = true;
							}
							break;
						case "!=":
							if(campoValidado != arrayCondicao[3]){
								passou = true;
							}
							break;
						case "<":
							if(campoValidado < arrayCondicao[3]){
								passou = true;
							}
							break;
						case "<=":
							if(campoValidado <= arrayCondicao[3]){
								passou = true;
							}
							break;
						case ">":
							if(campoValidado > arrayCondicao[3]){
								passou = true;
							}
							break;
						case ">=":
							if(campoValidado >= arrayCondicao[3]){
								passou = true;
							}
							break;
						case "BETWEEN":
							if(campoValidado >= arrayCondicao[3] && campoValidado <= arrayCondicao[4]){
								passou = true;
							}
							break;
					}
				}else{
					campoValidado = actualRow.getElementsByTagName(arrayCondicao[0])[0].textContent;
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
				}
				
				if(!passou){
					//Valida proximo argumento para OR
					if(j + 1 < arguments.length){
						var proximaCondicao = arguments[j+1];
						var arrayProximaCondicao = proximaCondicao.split(",");
						if(arrayProximaCondicao[0] == "OR"){
							continue;
						}
					}
                    
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
    
        //alert("NME_TIPO_MATERIAL_ISOLACAO: " + tipoMaterialIsolacao);
    
        //init();
    
        //alert("Antes do metodo calcularSecaoNominalCondutores()");
        calcularSecaoNominalCondutores();
    
        calcularReatanciaIndutivaCalculo();
    
        calcularQuedaTensao();
        //alert("FIM - Depois do metodo calcularQuedaTensao()");
    
        calcularCurtoCircuito();
		//alert("FIM 2 - Depois do metodo calcularCurtoCircuito()");
    
        calcularIntegralJouleCondutor(getSC(),getKbb());
		//alert("FIM 3 - Depois do metodo calcularIntegralJouleCondutor()");
    
	
        if (dimensionamento.isMediaTensao()){
			//alert("Entrou calcularIntegralJouleBlindagem()");
            calcularIntegralJouleBlindagem(getSb(), getKbb());
			//alert("FIM 4 - Depois do metodo calcularIntegralJouleBlindagem()");
        }
        
        calcularImpedanciaSequenciaPosNeg(getRca(), getXL());
		//alert("FIM 5 - Depois do metodo calcularImpedanciaSequenciaPosNeg()");
        calcularReatanciaCapacitivaReatanciaCapacitiva();
		//alert("FIM 6 - Depois do metodo calcularReatanciaCapacitiva()");
        
        if (dimensionamento.isMediaTensao() && dimensionamento.isCobre() && dimensionamento.isCabosEnergia()) {
			//alert("Entrou calcularDimensionamentoEconomico()");
            calcularDimensionamentoEconomico(dimensionamento.getCorrenteProjeto(), numeroCabos);
			//alert("FIM 7 - Depois do metodo calcularDimensionamentoEconomico()");
        }
    
        alert("FIM do FIM (CALCULO)");
	
	
    //} catch(err) {
    //    calculoExceptionMessage = "Informamos que para esta condição sugerida, o sistema não encontra resposta.";
        //alert("Erro: " + err);
    //}
}

function calcularSecaoNominalCondutores()
{
    //getCalculoDebug().logMethodEnter("calcularSecaoNominalCondutores");
    
	var dimensionamento = getDimensionamentoTabelaUtil();
	
    //secaoNominal = new SecaoNominalCondutores(dimensionamento, produtoBean);
    
    //alert("Calculo getNumeroCabos():" + getNumeroCabos());
    
    // Efetua o c·lculo pelo critÈrio da corrente.
    calcularCriterioCorrenteSecaoNominal(1, false);
    criterioDimensionamento = 2;
    
    // Efetua o c·lculo pelo critÈrio da queda de tens„o.
	calcularCriterioQuedaTensao();
    //alert("Depois calcularCriterioQuedaTensao");
	
	//DAR UMA OLHADA
    //updateCabo(secaoNominal.getProduto());
    
    // Calcula fator de canaleta.
    if (dimensionamento.isMediaTensao() && (dimensionamento.getPossibilidadeInstalacao() == CANALETA_FECHADA_SOLO))
    {    
        fatorCanaleta = calcularFatorCorrecaoCanaleta(dimensionamento.getCorrenteProjeto(), getRca(), getNumeroCabos());
        var iCanaleta = aplicarFatorCorrecao(dimensionamento.getCorrenteProjeto(), getNumeroCabos(), getSC(), fatorCanaleta);
        
        //alert('Antes do calcularCriterioCorrenteSecaoNominal: ' + calcularCriterioCorrenteSecaoNominal());
        
        while ((iCanaleta > getITabelada()) || (iCanaleta == isNaN)) {
            
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
    
    //alert("Secao Nominal Condutores: " + secaoCorrente);
    
    //alert("Saiu calcularSecaoNominalCondutores");
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
	//var arrayProdutoBean = document.getElementById("arrayProdutoBean");
	if (secao < arrayProdutoBean["SecaoMinima"]) {
		secao = arrayProdutoBean["SecaoMinima"];
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

function getSecaoNominalCondutor()
{
    return getSC();
}

function isCriterioCorrente()
{
    return criterioDimensionamento == "2";
}

function getFatorCorrecaoTemperaturaAmbiente()
{
    var fator = lastFatorTemperatura;
    
    if (isCriterioCorrente())
    {
        fator = getFatorTemperaturaAmbiente();
    }
    
    if(fator == "0")
    {
        return 1;
    }
    else
    {
        return fator;
    }
    //return fator == 0 ? 1 : fator;
}

function isCriterioCurtoCircuito()
{
    return criterioDimensionamento == "1";
}

function isCriterioQuedaTensao()
{
    return criterioDimensionamento == "3";
}

function getCriterioDimensionamento()
{
    var dimensionamento = getDimensionamentoTabelaUtil();
    var criterio = "";
    
    if (isCriterioCurtoCircuito())
    {
        criterio = "Curto Circuito";
    }
    else if (isCriterioQuedaTensao())
    {
        criterio = "Queda de Tensão";
    }
    else if (isCriterioCorrente())
    {
        criterio = "Corrente";
    }
    
    if (dimensionamento.isMediaTensao())
    {
        if (isCriterioCorrente() && (gradienteMaximo == getSecaoNominalCondutor()) && (getNumeroCabos() == 1 || dimensionamento.isNumeroCabosFixada()))
        {
            criterio += " e Gradiente Elétrico Máximo";
        }
    }
    
    return criterio;
}

function getCapacidadeConducaoCorrenteString()
{
    return Math.floor(corrente);
}

function getFatorCorrecaoAgrupamento()
{
    var fator = lastFatorAgrupamento;
    if (isCriterioCorrente())
    {
        fator = getFatorAgrupamento();
    }
    
    if(fator == "0")
    {
        return 1;
    }
    else
    {
        return fator;
    }
    
    //return fator == 0 ? 1 : fator;
}

function getFatorCorrecaoResistividadeTermica()
{
    var fator = lastFatorResistividade;
    if (isCriterioCorrente())
    {
        fator = fatorResistividadeTermica;
    }
    
    if(fator == "0")
    {
        return 1;
    }
    else
    {
        return fator;
    }
    //return fator == 0 ? 1 : fator;
}

function getFatorCorrecaoCanaleta()
{
    if(fatorCanaleta == "0")
    {
        return 1;
    }
    else
    {
        return fatorCanaleta;
    }
    
    //return fatorCanaleta == 0 ? 1 : fatorCanaleta;
}

function hasInstalacaoFinalProposta()
{
    var dimensionamento = getDimensionamentoTabelaUtil();
    var ok = true;
    
    if (dimensionamento.isBaixaTensao())
    {
        if (dimensionamento.isColunaA() || dimensionamento.isColunaB() || dimensionamento.isColunaD() || dimensionamento.isColunaG())
        {
            ok = false;
        }
    }
    
    if (dimensionamento.isMediaTensao())
    {
        if (dimensionamento.isColunaF() || dimensionamento.isColunaG() || dimensionamento.isColunaH() || dimensionamento.isColunaI())
        {
            ok = false;
        }
    }
    
    if (dimensionamento.isCabosNavais())
    {
        if (dimensionamento.isColunaB() || dimensionamento.isColunaC() || dimensionamento.isColunaG())
        {
            ok = false;
        }
    }
    
    return ok;
}

function getNumeroCircuitosRelatorio()
{
    var dimensionamento = getDimensionamentoTabelaUtil();
    var circuitos = 1;
    
    if (getNumeroCircuitos() > 0)
    {
        circuitos = getNumeroCircuitos();
    }
    else if (dimensionamento.getNumeroCircuitos(1) > 1)
    {
        circuitos = getNumeroCircuitos(1);
    }
    
    return circuitos;
}

function getNumeroCamadasBandejasRelatorio()
{
    var dimensionamento = getDimensionamentoTabelaUtil();
    var camadas = 1;
    
    if (dimensionamento.getQuantidadeCamadas() > 1)
    {
        camadas = dimensionamento.getQuantidadeCamadas();
    }
    else if (getNumeroBandejas() > 0)
    {
        camadas = getNumeroBandejas();
    }
    else if (dimensionamento.getNumeroBandejas() > 1)
    {
        camadas = dimensionamento.getNumeroBandejas();
    }
    
    return camadas;
}

function getResistenciaEletricaCAString()
{
    //NumberFormat nf = new DecimalFormat("0.00000", getDecimalLocale());
    return getRca();
}

function getQuedaTensao()
{
    return getDV();
}

function getQuedaTensaoString()
{
    //var value = (getQuedaTensao() * 100);
    //return (value / 100);
	return getQuedaTensao().toFixed(2).toString();
}

function getMaximaCorrenteCCString()
{
    var icc = getIcc();
    return icc.toFixed(2).toString();
}

function getTempoCC()
{  
    var tempo = 0;
    if (getTcc() == 0)
    {
        tempo = 0.3;
    }
    else
    {
        tempo = getTcc();
    }
    
    return tempo;
}

function getTempoCCString()
{
    var tempoaux = getTempoCC();
    return tempoaux.toFixed(2).toString();
}

function getIntegralJouleCondutorString()
{
    var aux = getI2tJouleCondutor();
    return aux.toFixed(2).toString();
}

function getIntegralJouleBlindagemString()
{
    return getI2tJouleBlindagem();
}

function hasDimensionamentoEconomico()
{
    if ((getSe() > 0) && (getSe() > getSecaoNominalCondutor()))
    {
        return true;
    }
    
    return false;
}

function hasDimensionamentoEconomicoError()
{
    if (getOriginalSection() > 0 && getOriginalSection() > getSecaoNominalCondutor())
    {
        return true;
    }
    
    return false;
}