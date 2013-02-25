
function calcularCriterioCorrenteSecaoNominal(numCabos, aumentarSecao){
    alert("calcularCriterioCorrenteSecaoNominal");
    
    var numeroMaximoCabos = NUMERO_MAXIMO_CABOS;
    var numeroCabos = numCabos;
    
    var fixar = $("#fixarNumeroCabos").val();
    if (fixar > 0){
        numeroMaximoCabos = $("#numeroCabosFixado").val();
        numeroCabos = $("#numeroCabosFixado").val();
    }
    
	var sC;
    if (isSecaoCondutorFixada()){
        sC = $("#secaoCondutorFixado").val();
    }
    
    // Aplica os fatores de correÁ„o a corrente.
    //fatorCorrecao.setSecao(sC);
    var i = -1;
    var novaCorrente = aplicarFatorCorrecao($("#correnteProjeto").val(), numeroCabos, sC);
    
    while (i != novaCorrente) {
        i = novaCorrente;
        
        // Verifica se a seÁ„o do condutor foi fixada.
        if (isSecaoCondutorFixada()) {
            sC = $("#secaoCondutorFixado").val();
			var corrente = buscarCorrenteTabela(sC);
            
			
			//ESTOU AQUI////////////////////////////////////////////////////////////////
			
			/////////////////////////////////////////////////////////////
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

