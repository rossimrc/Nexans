var rp = 0;
var dp = 0;
var rca = 0;
var rcaCorrigido = 0;
var rcc = 0;
var xpp = 0;
var i = 0;
var sC = 0;
var numeroCabos = 0;
var fatorAgrupamento = 0;
var fatorResistividadeTermica = 0;
var fatorTemperaturaAmbiente = 0;
var iTabelada = 0;


function calcularCriterioCorrenteSecaoNominal(numCabos, aumentarSecao){
    alert("calcularCriterioCorrenteSecaoNominal");
    
	var arrayProdutoBean = document.getElementById("arrayProdutoBean");
    //var tipoMaterialIsolacao = arrayProdutoBean.options["NME_TIPO_MATERIAL_ISOLACAO"].value;
	
    var numeroMaximoCabos = NUMERO_MAXIMO_CABOS;
    numeroCabos = numCabos;
	
    var fixar = $("#fixarNumeroCabos").val();
    if (fixar > 0){
        numeroMaximoCabos = $("#numeroCabosFixado").val();
        numeroCabos = $("#numeroCabosFixado").val();
    }
    
    if (isSecaoCondutorFixada()){
        sC = $("#secaoCondutorFixado").val();
    }
    
    // Aplica os fatores de correÁ„o a corrente.
    //fatorCorrecao.setSecao(sC);
    i = -1;
    var novaCorrente = aplicarFatorCorrecao($("#correnteProjeto").val(), numeroCabos, sC);
    
    while (i != novaCorrente) {
        i = novaCorrente;
        
        // Verifica se a seÁ„o do condutor foi fixada.
        if (isSecaoCondutorFixada()) {
            sC = $("#secaoCondutorFixado").val();
			var corrente = buscarCorrenteTabela(sC);
            
			//////////////
			
            if (aumentarSecao) {
                numeroCabos++;
                //fatorCorrecao.setSecao(sC);
                i = aplicarFatorCorrecao($("#correnteProjeto").val(), numeroCabos, sC, 1);
            }
            
            while (i > corrente && numeroCabos <= numeroMaximoCabos) {
                numeroCabos++;
                
                //fatorCorrecao.setSecao(sC);
                i = aplicarFatorCorrecao($("#correnteProjeto").val(), numeroCabos, sC, 1);
                
                corrente = buscarCorrenteTabela($("#secaoCondutorFixado").val());
                //getDebug().logVariable("i", corrente);
            }
            
        } else {
            if (aumentarSecao) {
                sC = buscarSecaoAcimaTabelaUtil(sC); // Verificar se È maior que a m·xima.
                if (sC > arrayProdutoBean.options["SecaoMaxima"].value) {
                    sC = 0;
                }
            } else {
                sC = buscarSecaoTabelaUtil(i, getSecaoMinima(), arrayProdutoBean.options["SecaoMaxima"].value);
            }
            //getDebug().logVariable("sC", sC);
            
            // Se a seÁ„o n„o for encontrada, incrementa o numero de cabos e
            // aplica-se novamente os fatores de correÁ„o.
            while (sC == 0 && numeroCabos <= numeroMaximoCabos) {
                
                // Incrementa o n˙mero de cabos.
                numeroCabos++;
                //getDebug().logVariable("numeroCabos", numeroCabos);
                
                // Aplica os fatores de correÁ„o a corrente.
                //fatorCorrecao.setSecao(sC);
                i = aplicarFatorCorrecao($("#correnteProjeto").val(), numeroCabos, sC, 1);
                //getDebug().logVariable("Aplicando fator de correÁ„o: i", i);
                
                sC = buscarSecaoTabelaUtil(i, getSecaoMinima(), arrayProdutoBean.options["SecaoMaxima"].value);
                //getDebug().logVariable("sC", sC);
            }
        }
        
        // Busca o fator de correÁ„o novamente.
        //fatorCorrecao.setSecao(sC);
        novaCorrente = aplicarFatorCorrecao($("#correnteProjeto").val(), numeroCabos, sC, 1);
    }
    
    // Busca a corrente para a seÁ„o encontrada e aplica os fatores de correÁ„o.
    iTabelada = buscarCorrenteTabela(sC);
    //fatorCorrecao.setSecao(sC);
    i = calcularMaximaCorrenteConducao(iTabelada, numeroCabos);
    //getDebug().logVariable("i", i);
    
    // Verifica se o n˙mero m·ximo de cabos foi ultrapassado.
    if (numeroCabos > numeroMaximoCabos) {
        /*throw new CalculoException("N„o foi possÌvel encontrar a seÁ„o do condutor. Foi atingido o limite de " + numeroMaximoCabos
                                   + " condutor(es).");
        */
    } else if ($("#correnteProjeto").val() > i) {
       // throw new CalculoException("A corrente de projeto È maior que a corrente calculada.");
    }
    
	
    fatorResistividadeTermica = lastFatorResistividade;
    fatorTemperaturaAmbiente = lastFatorTemperatura;
    fatorAgrupamento = lastFatorAgrupamento;
    
    //getDebug().logMethodExit();
}

function getSecaoMinimaSecaoNominal(){
	var secao = 0;
	var dimensionamento = getDimensionamentoTabelaUtil();
	
	if (dimensionamento.getUtilizacaoCircuito() == UtilizacaoCircuito.FORCA.getValue()) {
		if (dimensionamento.isCobre()) {
			secao = 2.5;
		} else {
			secao = 16;
		}
	} else if (dimensionamento.getUtilizacaoCircuito() == UtilizacaoCircuito.ILUMINACAO.getValue()) {
		if (dimensionamento.isCobre()) {
			secao = 1.5;
		} else {
			secao = 16;
		}
	} else if (dimensionamento.getUtilizacaoCircuito() == UtilizacaoCircuito.SINALIZACAO.getValue()
			   || dimensionamento.getUtilizacaoCircuito() == UtilizacaoCircuito.CONTROLE.getValue()) {
		if (dimensionamento.isCobre()) {
			secao = 0.5;
		}
	} else if (dimensionamento.getUtilizacaoCircuito() == UtilizacaoCircuito.APLICACOES_ESPECIAIS.getValue()
			   || dimensionamento.getUtilizacaoCircuito() == UtilizacaoCircuito.OUTROS.getValue()) {
		if (dimensionamento.isCobre()) {
			secao = 0.75;
		}
	}
	
	if (dimensionamento.isBaixaTensao()) {
		if (dimensionamento.getTensaoIsolamento() == TensaoIsolamento._3_6KV_6KV.getValue()
			|| dimensionamento.getTensaoIsolamento() == TensaoIsolamento._6KV_10KV.getValue()) {
			secao = 16;
		} else if (dimensionamento.getTensaoIsolamento() == TensaoIsolamento._8_7KV_15KV.getValue()) {
			secao = 25;
		} else if (dimensionamento.getTensaoIsolamento() == TensaoIsolamento._12KV_20KV.getValue()
				   || dimensionamento.getTensaoIsolamento() == TensaoIsolamento._15KV_25KV.getValue()) {
			secao = 35;
		} else if (dimensionamento.getTensaoIsolamento() == TensaoIsolamento._20KV_35KV.getValue()) {
			secao = 50;
		}
		
		if (secao < produto.getSecaoMinima()) {
			secao = arrayProdutoBean.options["SecaoMinima"].value;
		}
	} else {
		if (dimensionamento.getCaboSelecionado() == Cabo.EP_DRY.getValue() ||
			dimensionamento.getCaboSelecionado() == Cabo.EP_DRY_105C.getValue()) {
			secao = 16;
		} else if (dimensionamento.getCaboSelecionado() == Cabo.FIPEX_BF.getValue()) {
			if (dimensionamento.getTensaoIsolamento() == TensaoIsolamento._3_6KV_6KV.getValue()) {
				secao = 10;
			} else if (dimensionamento.getTensaoIsolamento() == TensaoIsolamento._6KV_10KV.getValue()) {
				secao = 16;
			} else if (dimensionamento.getTensaoIsolamento() == TensaoIsolamento._8_7KV_15KV.getValue()) {
				secao = 25;
			} else if (dimensionamento.getTensaoIsolamento() == TensaoIsolamento._12KV_20KV.getValue()) {
				secao = 35;
			}
		}
	}
	
	return secao;
}

function calcularCriterioQuedaTensao(){
	dimensionamento = getDimensionamentoTabelaUtil();
	
	/*if (sC > 0) {
		produto = new Produto().getCabo(dimensionamento, sC);
		fatorCorrecao.setProduto(produto);
	}*/
	
	// Calcula o Rcc.
	rcc = calcularRcc(dimensionamento);
	
	// Calcula o Rca.
	rca = calcularRca(dimensionamento, rcc);	
}

function calcularRca(dimensionamento, valorRcc){
	rcc = valorRcc;
	
	calcularEfeitoPelicular(dimensionamento, rcc);
	calcularEfeitoProximidade(dimensionamento, getSDistanciaEntreCabos(), rcc);
	
	// Verifica se o sistema È aterrado em um ˙nico ponto (MÈdia Tens„o) ou
	// Baixa Tens„o.
	if (dimensionamento.isBaixaTensao() || (dimensionamento.isMediaTensao() && !dimensionamento.isMultiAterrado())) {
		
		if (dimensionamento.isEletrodutoMetal()) {
			rca = rcc * (1 + ((getYs() + getYp()) * 1.7));
		} else {
			rca = rcc * (1 + getYs() + getYp());
		}
		
		// Calcula a resistencia da blindagem.
		// calcularResistenciaBlindagem();
		
	} else if (dimensionamento.isMediaTensao() && dimensionamento.isMultiAterrado()) {
		// Calcula a resistencia da blindagem.
		calcularResistenciaBlindagem(dimensionamento);
		
		// Calcula a resistencia elÈtrica em CA corrigida.
		calcularResistenciaEletricaCA(getYs(), getYp());
	}
	
	return rca;
}

function calcularRcc(dimensionamento){
	// Temperatura m·xima do condutor (Oc).
	var oc = dimensionamento.getTemperaturaMaximaCondutor();
	
	// Resistencia elÈtrica do condutor a 20 graus (Rcc20∫C).
	var arrayProdutoBean = document.getElementById("arrayProdutoBean");
	var rcc20C = produto.arrayProdutoBean.options["NMR_RESISTENCIA_ELETRICA_COND"].value;
	
	// Coeficiente de temperatura do condutor a 20 graus (ac20∫C)
	var ac20C = getCoeficienteTemperaturaTabelaUtil(dimensionamento);
	
	// Obs.: A pedido do Leandro da Ficap, a fÛrmula abaixo n„o possui mais
	// o 10 elevado ao cubo.
	rcc = rcc20C * (1 + (ac20C * (oc - 20)));
	
	return rcc;
}

function calcularResistenciaBlindagem(dimensionamento){
	var arrayProdutoBean = document.getElementById("arrayProdutoBean");
	
	// N˙mero fios da proteÁ„o met·lica.
	var np = produto.arrayProdutoBean.options["NMR_NUMERO_FIOS_BLINDAGEM"].value;
	
	// Espessura da blindagem ou capa met·lica.
	var ts = produto.arrayProdutoBean.options["NMR_DIAMETRO_FIOS_BLINDAGEM"].value;
	
	// Passo do fio.
	var p = produto.arrayProdutoBean.options["NMR_PASSO_BLINDAGEM"].value;
	
	// Diametro medio da blindagem.
	dp = produto.arrayProdutoBean.options["NMR_DIAMETRO_MEDIO_BLINDAGEM"].value;
	
	// Coeficiente de temperatura.
	var ap20C = getCoeficienteTemperaturaTabelaUtil(dimensionamento);
	
	// Resistividade do condutor.
	var pp20C = getResistividadeCondutorTabelaUtil(dimensionamento);
	
	// Temperatura de operaÁ„o da blindagem.
	var op = getTemperaturaOpBlindagemTabelaUtil(dimensionamento);
	
	// Calcula Fp.
	var fp = Math.sqrt(1 + Math.pow(((Math.PI * dp) / p), 2));
	
	// Calcula Sp.
	var sp = (Math.PI * np * Math.pow(ts, 2)) / (4 * fp);
	
	// Calcula rp.
	rp = ((pp20C * (1 + ap20C * (op - 20))) / sp) * Math.pow(10, 3);
	
}

function calcularResistenciaEletricaCA(dimensionamento, ys, yp){
	var f = dimensionamento.getFrequencia();
	var s = getSDistanciaEntreCabos();
	
	var drca = 0;
	
	// Verifica se o eletroduto È met·lico.
	if (dimensionamento.isEletrodutoMetal()) {
		rca = rcc * (1 + ((ys + yp) * 1.7));
	} else {
		rca = rcc * (1 + ys + yp);
	}
	
	// Calcula o xpp, Delta Rca e Rca corrigido.
	xpp = (4 * Math.PI * f * Math.pow(10, -4)) * (Math.log((2 * s) / dp));
	drca = rp * (1 / (Math.pow(rp / xpp, 2) + 1));
	
	if (drca > 0) {
		rca = rca + drca;
	}
}


function getRp() {
	return rp;
}

function getDp() {
	return dp;
}

function getRca() {
	return rca;
}

function getRcaCorrigido() {
	return rcaCorrigido;
}

function getRcc() {
	return rcc;
}

function getXpp() {
	return xpp;
}

function getSC() {
	return sC;
}

function setSC(v) {
	sC = v;
}

function getI() {
	return i;
}

function setI(v) {
	i = v;
}

function getNumeroCabos() {
	return numeroCabos;
}

function setNumeroCabos(v) {
	numeroCabos = v;
}

function getFatorAgrupamento() {
	return fatorAgrupamento;
}

function getFatorResistividadeTermica() {
	return fatorResistividadeTermica;
}

function getFatorTemperaturaAmbiente() {
	return fatorTemperaturaAmbiente;
}

//public ProdutoBean getProduto() {
//	return produto;
//}

function getITabelada() {
	return iTabelada;
}

function setITabelada(tabelada) {
	iTabelada = tabelada;
}
