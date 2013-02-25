function calcular()
{
    var fatorCanaleta = 1;
    try {
        getCaboDimensionamentoCalculo();
        //init();
        
        calcularSecaoNominalCondutores();
        calcularReatanciaIndutiva();
        /*calcularQuedaTensao();
        calcularCurtoCircuito();
        calcularIntegralJouleCondutor();
        
        if (dimensionamento.isMediaTensao()) {
            calcularIntegralJouleBlindagem();
        }
        
        calcularImpedanciaSequenciaPosNeg();
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
    
    //secaoNominal = new SecaoNominalCondutores(dimensionamento, produtoBean);
    
    // Efetua o c·lculo pelo critÈrio da corrente.
    calcularCriterioCorrenteSecaoNominal(1, false);
    
    criterioDimensionamento = CRITERIO_DIMENSIONAMENTO_CORRENTE;
    
    // Efetua o c·lculo pelo critÈrio da queda de tens„o.
    secaoNominal.calcularCriterioQuedaTensao();
    
    updateCabo(secaoNominal.getProduto());
    
    // Calcula fator de canaleta.
    if (dimensionamento.isMediaTensao() &&
        (dimensionamento.getPossibilidadeInstalacao() == PossibilidadeInstalacao.CANALETA_FECHADA_SOLO.getValue())) {
        
        fatorCanaleta = fatorCorrecao.calcularFatorCorrecaoCanaleta(dimensionamento, dimensionamento.getCorrenteProjeto(),
                                                                    secaoNominal.getRca(), secaoNominal.getNumeroCabos());
        
        double iCanaleta = fatorCorrecao.aplicarFatorCorrecao(dimensionamento.getCorrenteProjeto(), secaoNominal.getNumeroCabos(),
                                                              secaoNominal.getSC(), fatorCanaleta);
        
        while ((iCanaleta > secaoNominal.getITabelada()) || (iCanaleta == Double.NaN)) {
            
            secaoNominal.calcularCriterioCorrente(secaoNominal.getNumeroCabos(), true);
            
            // Efetua o c·lculo pelo critÈrio da queda de tens„o.
            secaoNominal.calcularCriterioQuedaTensao();
            
            fatorCanaleta = fatorCorrecao.calcularFatorCorrecaoCanaleta(dimensionamento, dimensionamento.getCorrenteProjeto(),
                                                                        secaoNominal.getRca(), secaoNominal.getNumeroCabos());
            
            iCanaleta = fatorCorrecao.aplicarFatorCorrecao(dimensionamento.getCorrenteProjeto(), secaoNominal.getNumeroCabos(),
                                                           secaoCorrente, fatorCanaleta);
        }
        secaoNominal.setI(fatorCorrecao.calcularMaximaCorrenteConducao(secaoNominal.getITabelada(), secaoNominal.getNumeroCabos(),
                                                                       fatorCanaleta));
    }
    
    corrente = secaoNominal.getI();
    numeroCabosCorrente = secaoNominal.getNumeroCabos();
    secaoCorrente = secaoNominal.getSC();
    
    getCalculoDebug().logVariable("i", corrente);
    getCalculoDebug().logMethodExit();
}

function calcularReatanciaIndutiva(){
	alert("calcularReatanciaIndutiva");
	
	
	
}
