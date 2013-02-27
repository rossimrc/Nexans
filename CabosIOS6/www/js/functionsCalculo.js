var criterioDimensionamento = 0;
var gradienteMaximo = 0;
var fatorCanaleta = 0;
var corrente = 0;
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
        //calcularCurtoCircuito();
        calcularIntegralJouleCondutor(getSC(),getKbb());
        
        if (dimensionamento.isMediaTensao()){
            calcularIntegralJouleBlindagem(getSb(), getKbb());
        }
        
        /*calcularImpedanciaSequenciaPosNeg();
        calcularReatanciaCapacitiva();
        
        if (dimensionamento.isMediaTensao() && dimensionamento.isCobre() && dimensionamento.isCabosEnergia()) {
            calcularDimensionamentoEconomico();
        }*/
        
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
            iCanaleta = fatorCorrecao.aplicarFatorCorrecao(dimensionamento.getCorrenteProjeto(), getNumeroCabos(), secaoCorrente, fatorCanaleta);
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
