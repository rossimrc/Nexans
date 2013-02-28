var criterioDimensionamento = 0;
var gradienteMaximo = 0;
var fatorCanaleta = 0;
var corrente = 0;
var numeroCabos = 0;
var numeroCabosCorrente = 0;
var secaoCorrente = 0;

function calcular()
{
    var fatorCanaleta = 1;
    try {
		
		var dimensionamento = getDimensionamentoTabelaUtil();
		
        getCaboDimensionamentoCalculo();
        //init();
        
        calcularSecaoNominalCondutores();
        
        //calcularReatanciaIndutiva();
        calcularReatanciaIndutivaCalculo();
        
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
        }
        
    } catch(err) {
        alert("Erro: " + err);
    }
	
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
    
    updateCabo();
    
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

function calcularQuedaTensao(){
	
	var dimensionamento = getDimensionamentoTabelaUtil();
	var arrayProdutoBean = document.getElementById("arrayProdutoBean");
	
	numeroCabos = getNumeroCabos()
	var numeroMaximoCabos = 20;
	
	if (dimensionamento.getFixarNumeroCabos() > 0) {
		numeroMaximoCabos = dimensionamento.getNumeroCabosFixado();
		numeroCabos = dimensionamento.getNumeroCabosFixado();
	}
	
	var correnteQueda = dimensionamento.getCorrenteProjeto() / numeroCabos;
	
	//quedaTensao = new QuedaTensao(dimensionamento);
	
	// Calcula a queda de tens„o.
	calculoQuedaTensao(getSC(), correnteQueda, getRca(), getXL());
	//quedaTensao.calcularQuedaTensao(secaoNominal.getSC(), correnteQueda, secaoNominal.getRca(), reatanciaIndutiva.getXL());
	
	var correnteFator = aplicarFatorCorrecao(dimensionamento.getCorrenteProjeto(), numeroCabos, getSC());
	var novaCorrenteFator = -1;
	
	while (correnteFator != novaCorrenteFator) {
		
		// Verifica se a queda de tens„o calculada È maior que a especificada pelo usu·rio.
		while ((getDV() > dimensionamento.getQuedaTensaoMaxima()) && (numeroCabos <= numeroMaximoCabos)) {
			//getCalculoDebug().logMessage("Executando loop enquanto dV maior que " + dimensionamento.getQuedaTensaoMaxima());
			
			var sC = getSC();
			
			// Tenta buscar uma seÁ„o maior que a atual para o cabo.
			// Verifica se a secao atual È a m·xima suportada pelo cabo.
			if (sC >= arrayProdutoBean.options["SecaoMaxima"].value || dimensionamento.isSecaoCondutorFixada()) {
				
				numeroCabos++;
				correnteQueda = dimensionamento.getCorrenteProjeto() / numeroCabos;
				
				if (!dimensionamento.isSecaoCondutorFixada()) {
					
					// Adicionado o fator de correÁ„o por conta do fluxograma.
					//fatorCorrecao.setSecao(sC);
					correnteFator = aplicarFatorCorrecao(dimensionamento.getCorrenteProjeto(), numeroCabos, sC);
					sC = buscarSecaoTabelaUtil(correnteFator, getSecaoMinima(), arrayProdutoBean.options["SecaoMaxima"].value);
				}
			} else {
				
				// Busca uma seÁ„o maior que a atual.
				sC = buscarSecaoAcimaTabelaUtil(secaoNominal.getSC());
				
				// Verifica se a seÁ„o n„o foi encontrada ou se n„o È suportada pelo cabo.
				if (sC <= 0 || sC > arrayProdutoBean.options["SecaoMaxima"].value) {
					
					// Divide a corrente corrigida por divisor e busca a seÁ„o correspondente na tabela.
					numeroCabos++;
					correnteQueda = dimensionamento.getCorrenteProjeto() / numeroCabos;
					
					//fatorCorrecao.setSecao(sC);
					correnteFator = aplicarFatorCorrecao(dimensionamento.getCorrenteProjeto(), numeroCabos, sC);
					sC = buscarSecaoTabelaUtil(correnteFator, getSecaoMinima(), arrayProdutoBean.options["SecaoMaxima"].value);
				}
			}
			setSC(sC);
			
			updateCabo(sC);
			
			calcularCriterioQuedaTensao();
			calcularReatanciaIndutivaCalculo();
			
			calcularQuedaTensao(getSC(), correnteQueda, getRca(), getXL());
			//getCalculoDebug().logVariable("dV", quedaTensao.getDV());
		}
		
		// Busca o fator de correÁ„o novamente.
		//fatorCorrecao.setSecao(secaoNominal.getSC());
		novaCorrenteFator = aplicarFatorCorrecao(dimensionamento.getCorrenteProjeto(), numeroCabos, getSC());
	}
	
	
	// Verifica se o n˙mero m·ximo de cabos foi ultrapassado.
	if (numeroCabos > numeroMaximoCabos)
		alert("ERRO");
		//throw new CalculoException("N„o foi possÌvel encontrar a seÁ„o do condutor. Foi atingido o limite de " + numeroMaximoCabos
		//						   + " condutor(es).");
	
	//fatorCorrecao.setSecao(secaoNominal.getSC());
	correnteQueda = calcularMaximaCorrenteConducao(buscarCorrenteTabela(getSC()), numeroCabos, fatorCanaleta);
	
	if (correnteQueda > corrente) {
		criterioDimensionamento = 3;
		corrente = correnteQueda;
	} else {
		numeroCabos = numeroCabosCorrente;
		setSC(secaoCorrente);
	}
	//getCalculoDebug().logMethodExit();


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

function updateCabo(secao = ""){
	var arrayProdutoBean = document.getElementById("arrayProdutoBean");
	var minSecao = getSecaoMinima();
	var maxSecao = arrayProdutoBean.options["SecaoMaxima"].value;
	
	if(secao != ""){
		getCaboDimensionamentoCalculo();
	}
	
	arrayProdutoBean.options["SecaoMinima"].value = minSecao;
	arrayProdutoBean.options["SecaoMaxima"].value = maxSecao;
	
	//produtoBean = new Produto().getCabo(dimensionamento, secao);
	//produtoBean.setSecaoMinima(minSecao);
	//produtoBean.setSecaoMaxima(maxSecao);
	
	//fatorCorrecao.setProduto(produtoBean);
}

function getFatorCorrecaoTemperaturaAmbiente() {
	var fator = lastFatorTemperatura;
	
	if (isCriterioCorrente()) {
		fator = getFatorTemperaturaAmbiente();
	}
	return fator == 0 ? 1 : fator;
}

function getFatorCorrecaoAgrupamento() {
	var fator = lastFatorAgrupamento;
	if (isCriterioCorrente()) {
		fator = getFatorAgrupamento();
	}
	
	return fator == 0 ? 1 : fator;
}

function getFatorCorrecaoResistividadeTermica() {
	var fator = lastFatorResistividade;
	if (isCriterioCorrente()) {
		fator = getFatorResistividadeTermica();
	}
	return fator == 0 ? 1 : fator;
}

function getFatorCorrecaoCanaleta() {
	return fatorCanaleta == 0 ? 1 : fatorCanaleta;
}

function getDimensionamentoEconomico() {
	return getSe();
}

function hasDimensionamentoEconomico() {
	if (getSe() > 0 && getSe() > getSecaoNominalCondutor()) {
		return true;
	}
	
	return false;
}

function hasDimensionamentoEconomicoError() {
	if (getOriginalSection() > 0 && getOriginalSection() > getSecaoNominalCondutor()) {
		return true;
	}
	
	return false;
}

function getSecaoNominalCondutor() {
	return getSC();
}

function getReatanciaCapacitiva() {
	return getXc();
}

function getReatanciaIndutiva() {
	return getXL();
}

function getResistenciaEletricaCA() {
	return getRca();
}

function getImpedanciaSequenciaPosNeg() {
	return getImpedancia();
}


function getQuedaTensao() {
	return getDV();
}

function getMaximaCorrenteCC() {
	return getIcc();
}

function getTempoCC() {
	var tempo = 0;
	if (getTcc() == 0) {
		tempo = 0.3D;
	} else {
		tempo = getTcc();
	}
	
	return tempo;
}

function getIntegralJouleCondutor() {
	return getI2tJouleCondutor();
}


function getIntegralJouleBlindagem() {
	return getI2tJouleBlindagem();
}


function getCriterioDimensionamento() {
	var criterio = "";
	var dimensionamento = getDimensionamentoTabelaUtil();
	
	if (isCriterioCurtoCircuito()) {
		criterio = "Curto Circuito";
	} else if (isCriterioQuedaTensao()) {
		criterio = "Queda de Tens„o";
	} else if (isCriterioCorrente()) {
		criterio = "Corrente";
	}
	
	if (dimensionamento.isMediaTensao()) {
		if (isCriterioCorrente() && (gradienteMaximo == getSecaoNominalCondutor())
			&& (getNumeroCabos() == 1 || dimensionamento.isNumeroCabosFixada())) {
			criterio += " e Gradiente ElÈtrico M·ximo";
		}
	}
	
	return criterio;
}

function getNumeroCircuitos() {
	return getNumeroCircuitos();
}

function getNumeroBandejas() {
	return getNumeroBandejas();
}

function isCriterioCurtoCircuito() {
	return criterioDimensionamento == 1;
}

function isCriterioQuedaTensao() {
	return criterioDimensionamento == 3;
}

function isCriterioCorrente() {
	return criterioDimensionamento == 2;
}
