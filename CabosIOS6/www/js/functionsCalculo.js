function calcular()
{
    var fatorCanaleta = 1;
    try {
        getCaboDimensionamentoCalculo();
        //init();
        
        calcularSecaoNominalCondutores();
        /*calcularReatanciaIndutiva();
        calcularQuedaTensao();
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
    secaoNominal.calcularCriterioCorrente();
    
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

function calcularCriterioCorrente(numCabos, aumentarSecao)
{
    
    alert("calcularCriterioCorrente");
    
    var numeroMaximoCabos = NUMERO_MAXIMO_CABOS;
    
    numeroCabos = numCabos;
    
    var fixar = $("#fixarNumeroCabos").val();
    
    if (fixar > 0)
    {
        numeroMaximoCabos = $("#numeroCabosFixado").val();
        numeroCabos = $("#numeroCabosFixado").val();
    }
    
    if (isSecaoCondutorFixada())
    {
        sC = $("#secaoCondutorFixado").val();
    }
    
    // Aplica os fatores de correÁ„o a corrente.
    //fatorCorrecao.setSecao(sC);
    i = -1;
    var novaCorrente = fatorCorrecao.aplicarFatorCorrecao(dimensionamento.getCorrenteProjeto(), numeroCabos, sC);
    
    while (i != novaCorrente) {
        i = novaCorrente;
        
        // Verifica se a seÁ„o do condutor foi fixada.
        if (dimensionamento.isSecaoCondutorFixada()) {
            sC = dimensionamento.getSecaoCondutorFixado();
            double corrente = tabelaUtil.buscarCorrenteTabela(dimensionamento.getSecaoCondutorFixado());
            
            if (aumentarSecao) {
                numeroCabos++;
                fatorCorrecao.setSecao(sC);
                i = fatorCorrecao.aplicarFatorCorrecao(dimensionamento.getCorrenteProjeto(), numeroCabos, sC);
            }
            
            while (i > corrente && numeroCabos <= numeroMaximoCabos) {
                numeroCabos++;
                getDebug().logVariable("numeroCabos", numeroCabos);
                
                fatorCorrecao.setSecao(sC);
                i = fatorCorrecao.aplicarFatorCorrecao(dimensionamento.getCorrenteProjeto(), numeroCabos, sC);
                
                corrente = tabelaUtil.buscarCorrenteTabela(dimensionamento.getSecaoCondutorFixado());
                getDebug().logVariable("i", corrente);
            }
            
        } else {
            if (aumentarSecao) {
                sC = tabelaUtil.buscarSecaoAcima(sC); // Verificar se È maior que a m·xima.
                if (sC > produto.getSecaoMaxima()) {
                    sC = 0;
                }
            } else {
                sC = tabelaUtil.buscarSecaoTabela(i, getSecaoMinima(), produto.getSecaoMaxima());
            }
            getDebug().logVariable("sC", sC);
            
            // Se a seÁ„o n„o for encontrada, incrementa o numero de cabos e
            // aplica-se novamente os fatores de correÁ„o.
            while (sC == 0 && numeroCabos <= numeroMaximoCabos) {
                
                // Incrementa o n˙mero de cabos.
                numeroCabos++;
                getDebug().logVariable("numeroCabos", numeroCabos);
                
                // Aplica os fatores de correÁ„o a corrente.
                fatorCorrecao.setSecao(sC);
                i = fatorCorrecao.aplicarFatorCorrecao(dimensionamento.getCorrenteProjeto(), numeroCabos, sC);
                getDebug().logVariable("Aplicando fator de correÁ„o: i", i);
                
                sC = tabelaUtil.buscarSecaoTabela(i, getSecaoMinima(), produto.getSecaoMaxima());
                getDebug().logVariable("sC", sC);
            }
        }
        
        // Busca o fator de correÁ„o novamente.
        fatorCorrecao.setSecao(sC);
        novaCorrente = fatorCorrecao.aplicarFatorCorrecao(dimensionamento.getCorrenteProjeto(), numeroCabos, sC);
    }
    
    // Busca a corrente para a seÁ„o encontrada e aplica os fatores de correÁ„o.
    iTabelada = tabelaUtil.buscarCorrenteTabela(sC);
    fatorCorrecao.setSecao(sC);
    i = fatorCorrecao.calcularMaximaCorrenteConducao(iTabelada, numeroCabos);
    getDebug().logVariable("i", i);
    
    // Verifica se o n˙mero m·ximo de cabos foi ultrapassado.
    if (numeroCabos > numeroMaximoCabos) {
        throw new CalculoException("N„o foi possÌvel encontrar a seÁ„o do condutor. Foi atingido o limite de " + numeroMaximoCabos
                                   + " condutor(es).");
        
    } else if (dimensionamento.getCorrenteProjeto() > i) {
        throw new CalculoException("A corrente de projeto È maior que a corrente calculada.");
    }
    
    fatorResistividadeTermica = fatorCorrecao.getLastFatorCorrecaoResistividade();
    fatorTemperaturaAmbiente = fatorCorrecao.getLastFatorCorrecaoTemperatura();
    fatorAgrupamento = fatorCorrecao.getLastFatorCorrecaoAgrupamento();
    
    getDebug().logMethodExit();
}