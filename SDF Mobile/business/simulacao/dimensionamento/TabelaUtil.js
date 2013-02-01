function TabelaUtil(dimensionamento, produto) {
	this.dimensionamento = dimensionamento;
	this.produto = produto;
	
	this.corrente = 0;
	this.secao = 0;
	
	this.tabela28 = new Tabela28();
    this.tabela29 = new Tabela29();
    this.tabela30 = new Tabela30();
    this.tabela31 = new Tabela31();

    this.tabela36 = new Tabela36();
    this.tabela37 = new Tabela37();
    this.tabela38 = new Tabela38();
    this.tabela39 = new Tabela39();

    this.tabelasCorrenteLinhaNaval = new TabelasCorrenteLinhaNaval();
	
	this.buscarSecaoTabela = function(corrente, minimaSecao, maximaSecao) {
        this.corrente = corrente;
        this.secao = 0;

        var temperatura = this.dimensionamento.getTemperaturaMaximaCondutor();

        if (this.dimensionamento.isCabosEnergia()) {
            if (this.dimensionamento.isBaixaTensao()) {
                if (this.temperatura == 70) {
                    if (this.isTabela36()) {
                    	this.secao = this.tabela36.getSecao(dimensionamento, corrente, minimaSecao, maximaSecao);
                    } else if (this.isTabela38()) {
                    	this.secao = this.tabela38.getSecao(dimensionamento, corrente, minimaSecao, maximaSecao);
                    }
                } else if (this.temperatura == 90) {
                    if (this.isTabela37()) {
                    	this.secao = this.tabela37.getSecao(dimensionamento, corrente, minimaSecao, maximaSecao);
                    } else if (this.isTabela39()) {
                    	this.secao = this.tabela39.getSecao(dimensionamento, corrente, minimaSecao, maximaSecao);
                    }
                }

            } else if (this.dimensionamento.isMediaTensao()) {
                if (this.isTabela28()) {
                	this.secao = this.tabela28.getSecao(dimensionamento, corrente, minimaSecao, maximaSecao);
                } else if (this.isTabela29()) {
                	this.secao = this.tabela29.getSecao(dimensionamento, corrente, minimaSecao, maximaSecao);
                } else if (this.isTabela30()) {
                	this.secao = this.tabela30.getSecao(dimensionamento, corrente, minimaSecao, maximaSecao);
                } else if (isTabela31()) {
                	this.secao = this.tabela31.getSecao(dimensionamento, corrente, minimaSecao, maximaSecao);
                }
            }
        } else if (this.dimensionamento.isCabosNavais()) {
        	this.secao = this.tabelasCorrenteLinhaNaval.getSecao(dimensionamento, corrente, minimaSecao, maximaSecao);
        }

        return this.secao;
    }
	
    this.buscarCorrenteTabela = function(secao) {
        this.secao = secao;
        this.corrente = 0;

        this.temperatura = this.dimensionamento.getTemperaturaMaximaCondutor();

        if (this.dimensionamento.isCabosEnergia()) {
            if (this.dimensionamento.isBaixaTensao()) {
                if (this.temperatura == 70) {
                    if (this.isTabela36()) {
                    	this.corrente = this.tabela36.getCorrente(dimensionamento, secao);
                    } else if (this.isTabela38()) {
                    	this.corrente = this.tabela38.getCorrente(dimensionamento, secao);
                    }
                } else if (this.temperatura == 90) {
                    if (this.isTabela37()) {
                    	this.corrente = this.tabela37.getCorrente(dimensionamento, secao);
                    } else if (this.isTabela39()) {
                    	this.corrente = this.tabela39.getCorrente(dimensionamento, secao);
                    }
                }

            } else if (this.dimensionamento.isMediaTensao()) {
                if (this.isTabela28()) {
                	this.corrente = this.tabela28.getCorrente(dimensionamento, secao);
                } else if (this.isTabela29()) {
                	this.corrente = this.tabela29.getCorrente(dimensionamento, secao);
                } else if (this.isTabela30()) {
                	this.corrente = this.tabela30.getCorrente(dimensionamento, secao);
                } else if (this.isTabela31()) {
                	this.corrente = this.tabela31.getCorrente(dimensionamento, secao);
                }
            }

        } else if (this.dimensionamento.isCabosNavais()) {
        	this.corrente = this.tabelasCorrenteLinhaNaval.getCorrente(dimensionamento, secao);
        }

        if (this.dimensionamento.isCabosNavais() && this.dimensionamento.isMediaTensao()) {
        	this.corrente *= 0.95;
        }

        return this.corrente;
    }

    this.isSecaoPadronizada = function(secao) {
    	this.isPadronizada = false;
    	this.temperatura = this.dimensionamento.getTemperaturaMaximaCondutor();

        this.secao = secao;

        if (this.dimensionamento.isCabosEnergia()) {
            if (this.dimensionamento.isBaixaTensao()) {
                if (this.temperatura == 70) {
                    if (isTabela36()) {
                    	this.secao = this.buscaSecaoTabela36();
                    } else if (this.isTabela38()) {
                    	this.secao = this.buscaSecaoTabela38();
                    }
                } else if (this.temperatura == 90) {
                    if (this.isTabela37()) {
                    	this.secao = this.buscaSecaoTabela37();
                    } else if (this.isTabela39()) {
                    	this.secao = this.buscaSecaoTabela39();
                    }
                }
            } else if (this.dimensionamento.isMediaTensao()) {
                if (this.isTabela28()) {
                	this.secao = this.tabela28.getSecao(dimensionamento, secao);
                } else if (this.isTabela29()) {
                	this.secao = this.tabela29.getSecao(dimensionamento, secao);
                } else if (this.isTabela30()) {
                	this.secao = this.tabela30.getSecao(dimensionamento, secao);
                } else if (this.isTabela31()) {
                	this.secao = this.tabela31.getSecao(dimensionamento, secao);
                }
            }
        } else if (this.dimensionamento.isCabosNavais()) {
        	this.secao = this.tabelasCorrenteLinhaNaval.getSecaoPadronizada(dimensionamento, secao);
        }

        if (this.secao > 0) {
        	this.isPadronizada = true;
        }
        return this.isPadronizada;
    }

    this.buscarSecaoAcima = function(secao) {
    	var oldSecao = secao;
        this.secao = secao;

        var temperatura = this.dimensionamento.getTemperaturaMaximaCondutor();

        if (this.dimensionamento.isCabosEnergia()) {
            if (this.dimensionamento.isBaixaTensao()) {
                if (this.temperatura == 70) {
                    if (this.isTabela36()) {
                    	this.secao = this.buscaMaiorSecaoTabela36();
                    } else if (this.isTabela38()) {
                    	this.secao = this.buscaMaiorSecaoTabela38();
                    }
                } else if (this.temperatura == 90) {
                    if (this.isTabela37()) {
                    	this.secao = this.buscaMaiorSecaoTabela37();
                    } else if (this.isTabela39()) {
                    	this.secao = this.buscaMaiorSecaoTabela39();
                    }
                }
            } else if (this.dimensionamento.isMediaTensao()) {
                if (this.isTabela28()) {
                	this.secao = this.tabela28.getMaiorSecao(dimensionamento, secao);
                } else if (this.isTabela29()) {
                	this.secao = this.tabela29.getMaiorSecao(dimensionamento, secao);
                } else if (this.isTabela30()) {
                	this.secao = this.tabela30.getMaiorSecao(dimensionamento, secao);
                } else if (this.isTabela31()) {
                	this.secao = this.tabela31.getMaiorSecao(dimensionamento, secao);
                }
            }
        } else if (this.dimensionamento.isCabosNavais()) {
        	this.secao = this.tabelasCorrenteLinhaNaval.getMaiorSecao(dimensionamento, secao);
        }

        if (this.oldSecao == secao) {
//            throw new CalculoException("Não foi localizada a tabela necessária para buscar uma seção acima.");
        }

        return secao;
    }

    this.buscaSecaoTabela36 = function() {
        return this.tabela36.getSecao(dimensionamento, secao);
    }

    this.buscaSecaoTabela37 = function() {
        return this.tabela37.getSecao(dimensionamento, secao);
    }

    this.buscaSecaoTabela38 = function() {
        return this.tabela38.getSecao(dimensionamento, secao);
    };

    this.buscaSecaoTabela39 = function() {
        return this.tabela39.getSecao(dimensionamento, secao);
    };

    this.buscaMaiorSecaoTabela36 = function() {
        return this.tabela36.getMaiorSecao(dimensionamento, secao);
    }

    this.buscaMaiorSecaoTabela37 = function() {
        return this.tabela37.getMaiorSecao(dimensionamento, secao);
    }

    this.buscaMaiorSecaoTabela38 = function() {
        return this.tabela38.getMaiorSecao(dimensionamento, secao);
    };

    this.buscaMaiorSecaoTabela39 = function() {
        return this.tabela39.getMaiorSecao(dimensionamento, secao);
    };

    this.isTabela28 = function() {
        return (this.dimensionamento.isCobre() && this.dimensionamento.getTemperaturaMaximaCondutor() == 90);
    }

    this.isTabela29 = function() {
        return (this.dimensionamento.isAluminio() && this.dimensionamento.getTemperaturaMaximaCondutor() == 90);
    }

    this.isTabela30 = function() {
        return (this.dimensionamento.isCobre() && this.dimensionamento.getTemperaturaMaximaCondutor() == 105);
    }

    this.isTabela31 = function() {
        return (this.dimensionamento.isAluminio() && this.dimensionamento.getTemperaturaMaximaCondutor() == 105);
    }

    this.isTabela36 = function() {
        var bResult = false;

        var local = this.dimensionamento.getLocalInstalacao();
        if ((local == ELETRODUTO) || (local == ELETRODUTO)
            || (local == BANDEJA_NAO_PERFURADA) || (local == PAREDES)
            || (local == TETO) || (local == MOLDURA)
            || (local == PAREDE_ISOLANTE) || (local == ALVENARIA)
            || (local == ELETRODUTO_PAREDE) || (local == CAIXILHO_PORTA_PAREDE)
            || (local == ELETRODUTO_CIRCULAR_ALVENARIA) || (local == DIRETAMENTE_ENTERRADOS)
            || (local == CANALETA_FECHADA) || (local == CANALETA_VENTILADA)
            || (local == ELETROCALHA_PERFILADO) || (local == DIRETAMENTE)
            || (local == ELETRODUTO_SECAO_CIRCULAR)
            || (this.dimensionamento.getPossibilidadeInstalacao() == CANALETA_FECHADA_SOLO)) {
            bResult = true;
        }

        return bResult;
    }

    this.isTabela37 = function() {
        return this.isTabela36();
    }

    this.isTabela38 = function() {
        var bResult = false;

        var local = this.dimensionamento.getLocalInstalacao();

        if ((local == BANDEJA_PERFURADA) || (local == LEITO)
            || (local == SUPORTES) || (local == ISOLADORES)) {
            bResult = true;
        }

        return bResult;
    }

    this.isTabela39 = function() {
        return this.isTabela38();
    }

    this.isTabela43 = function() {
        var bResult = false;

        var local = this.dimensionamento.getLocalInstalacao();

        if ((local == BANDEJA_PERFURADA) || (local == LEITO)
            || (local == BANDEJA_NAO_PERFURADA) || (local == SUPORTES)
            || (local == PAREDES || (local == TETO))
            || (local == ALVENARIA)) {
            bResult = true;

        }

        return bResult;
    }

    this.isTabela44 = function() {
        var bResult = false;

        var local = this.dimensionamento.getLocalInstalacao();

        if (local == DIRETAMENTE_ENTERRADOS) {
            bResult = true;
        }

        return bResult;
    }

    this.isTabela45 = function() {
        var bResult = false;

        var local = this.dimensionamento.getLocalInstalacao();
        var possibilidade = this.dimensionamento.getPossibilidadeInstalacao();

        if ((possibilidade == SUBTERRANEA) && (local == ELETRODUTO)) {
            bResult = true;
        }

        return bResult;
    }

    this.getCoeficienteTemperatura = function() {
        var coeficiente = 0;

        if (this.dimensionamento.isCobre()) {
            coeficiente = 0.00393;
        } else if (this.dimensionamento.isAluminio()) {
            coeficiente = 0.00403;
        }

        return coeficiente;
    }

    this.getResistividadeCondutor = function() {
         var resistividade = 0;

        if (this.dimensionamento.isCobre()) {
            resistividade = 0.017241;
        } else if (this.dimensionamento.isAluminio()) {
            resistividade = 0.028264;
        }

        return resistividade;
    }

    this.getTemperaturaOpBlindagem = function() {
        var temperatura = 0;

        if (this.produto.isMaterialIsolacaoEPR()) {
            if (this.dimensionamento.isTemperaturaMaximaCondutor90()) {
                temperatura = 85;
            }
        } else if (this.produto.isMaterialIsolacaoXLPE()) {
            if (this.dimensionamento.isTemperaturaMaximaCondutor90()) {
                temperatura = 80;
            }
        } else if (this.produto.isMaterialIsolacaoPVC()) {
            if (this.dimensionamento.isTemperaturaMaximaCondutor70()) {
                temperatura = 65;
            }
        }

        return temperatura;
    }

    this.setDimensionamento = function(dimensionamento) {
        this.dimensionamento = dimensionamento;
    }

    this.setProduto = function(produto) {
        this.produto = produto;
    }
}