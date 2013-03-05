function DimensionamentoBean() {
    this.codigo = 0;
    this.tipoProduto = 0;
    this.frequencia = 0;
    this.nivelTensao = 0;
    this.unidadeTensao = "";
    this.materialCondutor = 0;
    this.numeroCondutores = 0;
    this.tensaoServico = 0;
    this.tensaoIsolamento = 0;
    this.utilizacaoCircuito = 0;
    this.sistema = 0;
    this.temperaturaMaximaCondutor = 0;
    this.caboSelecionado = 0;
    this.possibilidadeInstalacao = 0;
    this.temperaturaArSolo = 0;
    this.comprimentoCircuito = 0;
    this.quedaTensaoMaxima = 0;
    this.fatorPotencia = 0;
    this.correnteProjeto = 0;
    this.potenciaAparente = 0;
    this.fixarSecaoCondutor = 0;
    this.fixarNumeroCabos = 0;
    this.fixarInformacaoCurto = 0;
    this.localInstalacao = 0;
    this.tipoInstalacao = FORMACAO_JUSTAPOSTA;
    this.eletrodutoMetalico = 0;
    this.secaoCondutorFixado = 0;
    this.numeroCabosFixado = 0;
    this.correnteCurto = 0;
    this.tempoAtuacaoProtecao = 0;
    this.resistividadeTermica = RESISTIVIDADE_TERMICA[2.5];
    this.posicionamentoCabo = 0;
    this.posicaoCabosSolo = 0;
    this.formacaoBancoDutos = 0;
    this.numeroBandejas = 1;
    this.numeroTernasBandeja = 0;
    this.numeroBandejasVertical = 0;
    this.numeroTernasBandejaVertical = 0;
    this.orientacaoFatorCorrecao = 0;
    this.quantidadeCircuitos = 0;
    this.quantidadeCamadas = 1;
    this.sistemaAterramento = 0;
    this.distanciaEntreCabos = 0;
    this.orientacaoCabo = 0;
    this.relacaoCaboDuto = 0;
    this.alturaCanaleta = 0;
    this.larguraCanaleta = 0;
    this.tipoCabo = 0;
    this.aplicacao = 0;
    
    this.isSecaoCondutorFixada = function() {
        return (this.fixarSecaoCondutor == 1);
    }

    this.getTensaoServico = function() {
        return this.tensaoServico;
    }

    this.getTensaoServicoVolts = function() {

        if (this.unidadeTensao == "V") {
            return this.tensaoServico;
        } else {
            return this.tensaoServico * 1000;
        }
    }

    this.getTensaoServiFcokV = function() {

        if (this.unidadeTensao == "V") {
            return this.tensaoServico / 1000;
        } else {
            return this.tensaoServico;
        }
    }

    this.setTensaoServico = function(tensaoServico) {
        this.tensaoServico = tensaoServico;
    }

    this.getFrequencia = function() {
        return this.frequencia;
    }

    this.setFrequencia = function(frequencia) {
        this.frequencia = frequencia;
    }

    this.getNivelTensao = function() {
        return this.nivelTensao;
    }

    this.getNivelTensaoString = function() {
    	var nivel;
    	
        if (this.isCabosNavais() && this.isMediaTensao()) {
            nivel = NIVEL_TENSAO[MEDIA_NAVAL].description;
        } else {
            nivel = NIVEL_TENSAO[this.nivelTensao].description;
        }
        
       return nivel;
    }

    this.isBaixaTensao = function() {
        return (this.nivelTensao == BAIXA);
    }

    this.isMediaTensao = function() {
        return (this.nivelTensao == MEDIA);
    }

    this.setNivelTensao = function(nivelTensao) {
        this.nivelTensao = nivelTensao;
    }

    this.getTipoProduto = function() {
        return this.tipoProduto;
    }

    this.getTipoProdutoString = function() {
        return TIPO_PRODUTO[this.tipoProduto].description;
    }

    this.isCabosEnergia = function() {
        return this.tipoProduto == CABOS_ENERGIA;
    }

    this.isCabosNavais = function() {
        return this.tipoProduto == CABOS_NAVAIS;
    }

    this.setTipoProduto = function(tipoProduto) {
        this.tipoProduto = tipoProduto;
    }

    this.getMaterialCondutor = function() {
        return this.materialCondutor;
    }

    this.getMaterialCondutorString = function() {
        return MATERIAL_CONDUTOR[this.materialCondutor].description;
    }

    this.isCobre = function() {
        return this.materialCondutor == COBRE;
    }

    this.isAluminio = function() {
        return this.materialCondutor == ALUMINIO;
    }

    this.setMaterialCondutor = function(materialCondutor) {
        this.materialCondutor = materialCondutor;
    }

    this.getNumeroCondutores = function() {
        return this.numeroCondutores;
    }

    this.getNumeroCondutoresString = function() {
        return NUMERO_CONDUTORES[this.numeroCondutores].description;
    }

    this.isUnipolar = function() {
        return this.numeroCondutores == NCUNIPOLAR;
    }

    this.isBipolar = function() {
        return this.numeroCondutores == NCBIPOLAR;
    }

    this.isTripolar = function() {
        return this.numeroCondutores == NCTRIPOLAR;
    }

    this.isTetrapolar = function() {
        return this.numeroCondutores == NCTETRAPOLAR;
    }

    this.setNumeroCondutores = function(numeroCondutores) {
        this.numeroCondutores = numeroCondutores;
    }

    this.getCaboSelecionado = function() {
        return this.caboSelecionado;
    }

    this.getCaboSelecionadoString = function() {
        return CABO[this.caboSelecionado].description;
    }

    this.setCaboSelecionado = function(caboSelecionado) {
        this.caboSelecionado = caboSelecionado;
    }

    this.getPossibilidadeInstalacao = function() {
        return this.possibilidadeInstalacao;
    }

    this.getpossibilidadeInstalacaoString = function() {
        return POSSIBILIDADE_INSTALACAO[this.possibilidadeInstalacao].description;
    }

    this.isEnterrado = function() {
    	var a = this.possibilidadeInstalacao == SUBTERRANEA;
    	var b = this.possibilidadeInstalacao == BANCO_DUTOS_SOLO;
    	var d = this.possibilidadeInstalacao == DIRETAMENTE_SOLO;
    	var e = this.possibilidadeInstalacao == ELETRODUTO_SOLO;
    	var f = this.possibilidadeInstalacao == ELETRODUTO_NAO_METALICO_SOLO;
    	var g = this.possibilidadeInstalacao == ELETRODUTO_METALICO_SOLO;

        return (a || b || d || e || f || g);
    }

    this.isEnclausurado = function() {
    	var a = this.possibilidadeInstalacao != APARENTE;
    	var b = this.possibilidadeInstalacao != SUSPENSA;
    	var c = this.localInstalacao == ELETRODUTO;
    	var d = this.localInstalacao == ELETRODUTO_CIRCULAR_ALVENARIA;
    	var e = this.localInstalacao == ELETRODUTO_PAREDE;
    	var f = this.localInstalacao == ELETRODUTO_SECAO_CIRCULAR;
    	var g = this.localInstalacao == MOLDURA;

        return ((a && b) || c || d || e || f || g);
    }

    this.isSubterranea = function() {
        return this.possibilidadeInstalacao == SUBTERRANEA;
    }

    this.isColunaA = function() {
    	var colunaA = false;

        if (this.isCabosEnergia()) {
            if (this.isBaixaTensao()) {
            	var a = this.possibilidadeInstalacao == APARENTE;
            	var b = this.isUnipolar();
            	var c = this.isJustaposto() || this.isTrifolio();
            	var d = this.isTripolar();

                colunaA = (a) && ((b && c) || (d));
            } else if (this.isMediaTensao()) {
            	var a = this.possibilidadeInstalacao == APARENTE_AR;
            	var b = this.isUnipolar() && (this.isJustaposto() || this.isTrifolio());
            	var c = this.isTripolar();

                colunaA = a && (b || c);
            }
        }
        
        return colunaA;
    }

    this.isColunaA1 = function() {
        if (this.isCabosEnergia()) {
        	var a = this.localInstalacao == MOLDURA;
        	var b = this.localInstalacao == PAREDE_ISOLANTE;
        	var c = this.localInstalacao == ELETRODUTO_PAREDE && this.numeroCondutores == NCUNIPOLAR
        	var d = this.localInstalacao == CAIXILHO_PORTA_PAREDE;

            return a || b || c || d;
        }
        return false;
    }

    this.isColunaA2 = function() {
        if (this.isCabosEnergia()) {
            var a = this.localInstalacao == ELETRODUTO_PAREDE && this.numeroCondutores != NCUNIPOLAR;

            return a;
        }
        
        return false;
    }

    this.isColunaB = function() {
        var colunaB = false;

        if (this.isCabosEnergia()) {
            if (this.isBaixaTensao()) {
                var a = this.possibilidadeInstalacao == APARENTE;
                var b = this.isUnipolar();
                var c = this.isEspacado();

                colunaB = a && b && c;

            } else if (this.isMediaTensao()) {
                var a = this.possibilidadeInstalacao == APARENTE_AR;
                var b = this.isUnipolar();
                var c = !(this.isJustaposto() || this.isTrifolio());
                var d = this.isEspacado();

                colunaB = a && b && c && d;
            }
        }
        
        return colunaB;
    }

    this.isColunaB1 = function() {
        if (this.isCabosEnergia()) {
            var a = this.localInstalacao == ELETRODUTO && this.numeroCondutores == NCUNIPOLAR && this.possibilidadeInstalacao == APARENTE;

            var b = this.possibilidadeInstalacao == EMBUTIDA && this.localInstalacao == ELETRODUTO_CIRCULAR_ALVENARIA;

            var c = this.localInstalacao == CANALETA_FECHADA && this.numeroCondutores == NCUNIPOLAR;

            var d = this.localInstalacao == CANALETA_VENTILADA;
            
            var e = this.localInstalacao == ELETROCALHA_PERFILADO && this.numeroCondutores == NCUNIPOLAR;

            var f = this.possibilidadeInstalacao == ESPACO_CONSTRUCAO && this.localInstalacao == DIRETAMENTE && (this.relacaoCaboDuto != _1POINT5V5);

            var g = this.possibilidadeInstalacao == ESPACO_CONSTRUCAO && this.localInstalacao == ELETRODUTO_SECAO_CIRCULAR && this.tensaoIsolamento == _450V_750V && this.relacaoCaboDuto == _VMAIORIGUAL20DE;

            return a || b || c || d || e || f || g;
        } else if (this.isCabosNavais()) {
            return (this.possibilidadeInstalacao == EMBUTIDA && this.isUnipolar());
        }

        return false;
    }

    this.isColunaB2 = function() {
        if (this.isCabosEnergia()) {
            var a = this.localInstalacao == ELETRODUTO && this.numeroCondutores != NCUNIPOLAR && this.possibilidadeInstalacao == APARENTE;

            var c = this.localInstalacao == CANALETA_FECHADA && this.numeroCondutores != NCUNIPOLAR;
            
            var d = this.localInstalacao == ELETROCALHA_PERFILADO && this.numeroCondutores != NCUNIPOLAR;

            var e = this.possibilidadeInstalacao == ESPACO_CONSTRUCAO && this.localInstalacao == DIRETAMENTE && (this.relacaoCaboDuto == _1POINT5V5);

            var f = this.possibilidadeInstalacao == ESPACO_CONSTRUCAO && this.localInstalacao == ELETRODUTO_SECAO_CIRCULAR && (this.tensaoIsolamento != _450V_750V || this.relacaoCaboDuto != _VMAIORIGUAL20DE);

            return a || c || d || e || f;
        } else if (this.isCabosNavais()) {
            return (this.possibilidadeInstalacao == EMBUTIDA && !this.isUnipolar());
        }
        
        return false;
    }

    this.isColunaC = function() {
    	var bResult = false;

        if (this.isCabosEnergia()) {
            if (this.isBaixaTensao()) {
                var a = this.localInstalacao == BANDEJA_NAO_PERFURADA;
                var b = this.localInstalacao == PAREDES;
                var c = this.localInstalacao == TETO;
                var d = this.localInstalacao == ALVENARIA;
                bResult = a || b || c || d;

            } else if (this.isMediaTensao()) {
                if (this.possibilidadeInstalacao == CANALETA_FECHADA_SOLO) {
                    bResult = (this.isUnipolar() && (this.isJustaposto() || this.isTrifolio())) || (this.isTripolar());
                }
            }

        } else if (this.isCabosNavais()) {
            if (this.possibilidadeInstalacao == APARENTE) {
                return this.localInstalacao == BANDEJA_NAO_PERFURADA || this.localInstalacao == PAREDES || this.localInstalacao == TETO;
            }
        }
        
        return bResult;
    }

    this.isColunaD = function() {
        var bResult = false;

        if (this.isCabosEnergia()) {
            if (this.isBaixaTensao()) {
                var a = this.possibilidadeInstalacao == SUBTERRANEA;
                var b = this.localInstalacao == ELETRODUTO;
                var c = this.localInstalacao == DIRETAMENTE_ENTERRADOS;
                bResult = a && (b || c);

            } else if (this.isMediaTensao()) {
                if (this.possibilidadeInstalacao == CANALETA_FECHADA_SOLO) {
                    if (this.isUnipolar() && this.isEspacado()) {
                        bResult = true;
                    }
                }
            }
        }

        return bResult;
    }

    this.isColunaE = function() {
    	var bResult = false;

        if (this.isCabosEnergia()) {
            if (this.isBaixaTensao()) {
                if (this.possibilidadeInstalacao == APARENTE && !this.isUnipolar())
                {
                    if (((this.localInstalacao == BANDEJA_PERFURADA)) || (this.localInstalacao == LEITO) || (this.localInstalacao == SUPORTES))
                    {
                        bResult = true;
                    }
                }
                else if (this.possibilidadeInstalacao == SUSPENSA)
                {
                    if (this.localInstalacao == SUPORTES)
                    {
                        if (!this.isUnipolar() && this.tensaoIsolamento != _450V_750V)
                        {
                            bResult = true;
                        }
                    }
                }

            }
            else if (this.isMediaTensao())
            {
                if (this.possibilidadeInstalacao == ELETRODUTO_APARENTE_AR || this.possibilidadeInstalacao == ELETRODUTO_NAO_METALICO_APARENTE_AR || this.possibilidadeInstalacao == ELETRODUTO_METALICO_APARENTE_AR) {
                    bResult = true;
                }
            }
        } else if (this.isCabosNavais()) {
            if (this.possibilidadeInstalacao == APARENTE && (this.localInstalacao == BANDEJA_PERFURADA || this.localInstalacao == LEITO || this.localInstalacao == SUPORTES)) {
                return !this.isUnipolar();
            }
        }

        return bResult;
    }

    this.isColunaF = function() {
        var bResult = false;

        if (this.isCabosEnergia())
        {
            if (this.isBaixaTensao())
            {
                if (this.possibilidadeInstalacao == APARENTE && this.isUnipolar())
                {
                    if (((this.localInstalacao == BANDEJA_PERFURADA)) || (this.localInstalacao == LEITO) || (this.localInstalacao == SUPORTES))
                    {
                        bResult = true;
                    }
                } else if (this.possibilidadeInstalacao == SUSPENSA) {
                    if (this.localInstalacao == SUPORTES && this.tensaoIsolamento != _450V_750V) {
                        if (this.isUnipolar()) {
                            bResult = true;
                        }
                    }
                }

            } else if (this.isMediaTensao()) {
                if (this.possibilidadeInstalacao == ELETRODUTO_SOLO || this.possibilidadeInstalacao == ELETRODUTO_METALICO_SOLO || this.possibilidadeInstalacao == ELETRODUTO_NAO_METALICO_SOLO) {

                    if ((this.isUnipolar() && (this.isJustaposto() || this.isTrifolio())) || (this.isTripolar())) {
                        bResult = true;
                    }

                } else if (this.possibilidadeInstalacao == BANCO_DUTOS_SOLO) {
                    if ((this.isUnipolar() && this.isTrifolio()) || (this.isTripolar())) {
                        bResult = true;
                    }
                }
            }

        } else if (this.isCabosNavais()) {
            if (this.possibilidadeInstalacao == APARENTE && (this.localInstalacao == BANDEJA_PERFURADA || this.localInstalacao == LEITO || this.localInstalacao == SUPORTES)) {
                return this.isUnipolar() && !this.isEspacado();
            }
        }
        
        return bResult;
    }

    this.isColunaG = function() {
        var bResult = false;

        if (this.isCabosEnergia()) {
            if (this.isBaixaTensao()) {
                bResult = (this.localInstalacao == ISOLADORES);

            } else if (this.isMediaTensao()) {
                if (this.possibilidadeInstalacao == ELETRODUTO_SOLO || this.possibilidadeInstalacao == ELETRODUTO_METALICO_SOLO || this.possibilidadeInstalacao == ELETRODUTO_NAO_METALICO_SOLO) {
                	
                    bResult = (isUnipolar() && isEspacado());
                    
                } else if (this.possibilidadeInstalacao == BANCO_DUTOS_SOLO) {
                    if (this.isUnipolar() || !this.isTrifolio()) {
                        bResult = true;
                    }
                }
            }

        } else if (this.isCabosNavais()) {
            if (this.possibilidadeInstalacao == APARENTE && (this.localInstalacao == BANDEJA_PERFURADA || this.localInstalacao == LEITO || this.localInstalacao == SUPORTES)) {
                return this.isUnipolar() && this.isEspacado();
            }
        }
        
        return bResult;
    }

    this.isColunaH = function() {
        if (this.isCabosEnergia()) {
            if (this.possibilidadeInstalacao == DIRETAMENTE_SOLO) {
                if ((this.isUnipolar() && (this.isJustaposto() || this.isTrifolio())) || (this.isTripolar())) {
                    return true;
                }
            }
        }
        
        return false;
    }

    this.isColunaI = function() {
        if (this.isCabosEnergia()) {
            if (this.possibilidadeInstalacao == DIRETAMENTE_SOLO) {
                return (this.isUnipolar() && this.isEspacado());
            }
        }
        
        return false;
    }

    this.is1Circuito = function() {
        return this.quantidadeCircuitos == UM_CIRCUITO;
    }

    this.is2Circuitos = function() {
        return this.quantidadeCircuitos == DOIS_CIRCUITO;
    }

    this.is3Circuitos = function() {
        return this.quantidadeCircuitos == TRES_CIRCUITO;
    }

    this.is4Circuitos = function() {
        return this.quantidadeCircuitos == QUATRO_CIRCUITO;
    }

    this.isOrientacaoFatorCorrecaoVertical = function() {
        return this.orientacaoFatorCorrecao == VERTICAL;
    }

    this.isOrientacaoFatorCorrecaoHorizontal = function() {
        return this.orientacaoFatorCorrecao == HORIZONTAL;
    }

    this.isSemOrientacaoFatorCorrecao = function() {
    	return this.orientacaoFatorCorrecao == SEM_FATOR;
    }

    this.setPossibilidadeInstalacao = function(possibilidadeInstalacao) {
        this.possibilidadeInstalacao = possibilidadeInstalacao;
    }

    this.getSistema = function() {
        return this.sistema;
    }

    this.getSistemaString = function() {
        return SISTEMA[this.sistema].description;
    }

    this.isDuasFases = function() {
        return ((this.sistema == MONOFASICO_DOIS_CONDUTORES) || (this.sistema == MONOFASICO_TRES_CONDUTORES) || (this.sistema == DUAS_FASES_SEM_NEUTRO));
    }

    this.isTrifasico = function() {
        return ((this.sistema == DUAS_FASES_COM_NEUTRO) || (this.sistema == TRIFASICO_COM_NEUTRO) || (this.sistema == TRIFASICO_SEM_NEUTRO));
    }

    this.getNumeroCircuitos = function(numeroCabos) {
        if ((this.isColunaF() || this.isColunaG()) && this.possibilidadeInstalacao == BANCO_DUTOS_SOLO) {
            return this.formacaoBancoDutos * numeroCabos;
        } else {
            return this.quantidadeCircuitos * numeroCabos;
        }
    }

    this.setSistema = function(sistema) {
        this.sistema = sistema;
    }

    this.getTemperaturaMaximaCondutor = function() {
        return this.temperaturaMaximaCondutor;
    }

    this.isTemperaturaMaximaCondutor70 = function() {
        return this.temperaturaMaximaCondutor == 70;
    }

    this.istemperaturaMaximaCondutor90 = function() {
        return this.temperaturaMaximaCondutor == 90;
    }

    this.setTemperaturaMaximaCondutor = function(temperaturaMaximaCondutor) {
        this.temperaturaMaximaCondutor = temperaturaMaximaCondutor;
    }

    this.getTensaoIsolamento = function() {
        return this.tensaoIsolamento;
    }

    this.getTensaoIsolamentoString = function() {
        return TENSAO_ISOLAMENTO[this.tensaoIsolamento].description;
    }

    this.setTensaoIsolamento = function(tensaoIsolamento) {
        this.tensaoIsolamento = tensaoIsolamento;
    }

    this.getUtilizacaoCircuito = function() {
        return this.utilizacaoCircuito;
    }

    this.getUtilizacaoCircuitoString = function() {
        return UTILIZACAO_CIRCUITO[this.utilizacaoCircuito].description;
    }

    this.setUtilizacaoCircuito = function(utilizacaoCircuito) {
        this.utilizacaoCircuito = utilizacaoCircuito;
    }

    this.getTemperaturaArSolo = function() {
        return this.temperaturaArSolo;
    }

    this.setTemperaturaArSolo = function(temperaturaArSolo) {
        this.temperaturaArSolo = temperaturaArSolo;
    }

    this.getComprimentoCircuito = function() {
        return this.comprimentoCircuito;
    }

    this.getComprimentoCircuitoKM = function() {
        return this.comprimentoCircuito / 1000;
    }

    this.setComprimentoCircuito = function(comprimentoCircuito) {
        this.comprimentoCircuito = comprimentoCircuito;
    }

    this.getCorrenteProjeto = function() {
        return this.correnteProjeto;
    }

    this.setCorrenteProjeto = function(correnteProjeto) {
        this.correnteProjeto = correnteProjeto;
    }

    this.getFatorPotencia = function() {
        return this.fatorPotencia;
    }

    this.setFatorPotencia = function(fatorPotencia) {
        this.fatorPotencia = fatorPotencia;
    }

    this.getPotenciaAparente = function() {
        return this.potenciaAparente;
    }

    this.setPotenciaAparente = function(potenciaAparente) {
        this.potenciaAparente = potenciaAparente;
    }

    this.getQuedaTensaoMaxima = function() {
        return this.quedaTensaoMaxima;
    }

    this.setQuedaTensaoMaxima = function(quedaTensaoMaxima) {
        this.quedaTensaoMaxima = quedaTensaoMaxima;
    }

    this.getLocalInstalacao = function() {
        return this.localInstalacao;
    }

    this.hasLocalInstalacao = function() {
        return this.localInstalacao > 0;
    }

    this.getLocalInstalacaoString = function() {
        return LOCAL_INSTALACAO[this.localInstalacao].description;
    }

    this.setlocalInstalacao = function(localInstalacao) {
        this.localInstalacao = localInstalacao;
    }

    this.getTipoInstalacao = function() {
        return this.tipoInstalacao;
    }

    this.getTipoInstalacaoString = function() {
        return TIPO_INSTALACAO[this.tipoInstalacao].description;
    }

    this.isJustaposto = function() {
        return this.tipoInstalacao == FORMACAO_JUSTAPOSTA;
    }

    this.isTrifolio = function() {
        var a = this.tipoInstalacao == FORMACAO_TRIFOLIO;
        var b = this.isUnipolar() && (this.localInstalacao == ELETRODUTO_SECAO_CIRCULAR);

        return a || b;
    }

    this.isEspacado = function() {
        return this.tipoInstalacao == FORMACAO_ESPACADA;
    }

    this.setTipoInstalacao = function(tipoInstalacao) {
        this.tipoInstalacao = tipoInstalacao;
    }

    this.getUnidadeTensao = function() {
        return this.unidadeTensao;
    }

    this.setUnidadeTensao = function(unidadeTensao) {
        this.unidadeTensao = unidadeTensao;
    }

    this.getQuantidadeCamadas = function() {
        return this.quantidadeCamadas;
    }

    this.setQuantidadeCamadas = function(quantidadeCamadas) {
        this.quantidadeCamadas = quantidadeCamadas;
    }

    this.getQuantidadeCircuitos = function() {
    	return this.quantidadeCircuitos;
    }

    this.setQuantidadeCircuitos = function(quantidadeCircuitos) {
        this.quantidadeCircuitos = quantidadeCircuitos;
    }

    this.getFixarInformacaoCurto = function() {
        return this.fixarInformacaoCurto;
    }

    this.getFixarInformacaoCurtoString = function() {
        return this.fixarInformacaoCurto == 0 ? "N‹o" : "Sim";
    }

    this.isInformacaoCurtoCircuitoFixada = function() {
        return this.fixarInformacaoCurto == 1;
    }
    
    this.setFixarInformacaoCurto = function(fixarInformacaoCurto) {
        this.fixarInformacaoCurto = fixarInformacaoCurto;
    }

    this.getFixarNumeroCabos = function() {
        return this.fixarNumeroCabos;
    }

    this.getFixarNumeroCabosString = function() {
        return this.fixarNumeroCabos == 0 ? "N‹o" : "Sim";
    }

    this.isNumeroCabosFixada = function() {
        return this.fixarNumeroCabos == 1;
    }

    this.setFixarNumeroCabos = function(fixarNumeroCabos) {
        this.fixarNumeroCabos = fixarNumeroCabos;
    }

    this.getFixarSecaoCondutor = function() {
        return this.fixarSecaoCondutor;
    }

    this.getFixarSecaoCondutorString = function() {
        return this.fixarSecaoCondutor == 0 ? "N‹o" : "Sim";
    }

    this.setFixarSecaoCondutor = function(fixarSecaoCondutor) {
        this.fixarSecaoCondutor = fixarSecaoCondutor;
    }

    this.getCorrenteCurto = function() {
        return this.correnteCurto;
    }

    this.setCorrenteCurto = function(correnteCurto) {
        this.correnteCurto = correnteCurto;
    }

    this.getEletrodutoMetalico = function() {
        return this.eletrodutoMetalico;
    }

    this.getEletrodutoMetalicoString = function() {
        return this.eletrodutoMetalico == 0 ? "N‹o" : "Sim";
    }

    this.isEletrodutoMetal = function() {
    	return (this.getEletrodutoMetalico() == 1);
    }
    this.setEletrodutoMetalico = function(eletrodutoMetalico) {
        this.eletrodutoMetalico = eletrodutoMetalico;
    }

    this.getFormacaoBancoDutos = function() {
        return this.formacaoBancoDutos;
    }

    this.getFormacaoBancoDutosString = function() {
        return BANCO_DUTOS[this.formacaoBancoDutos].description;
    }

    this.setFormacaoBancoDutos = function(formacaoBancoDutos) {
        this.formacaoBancoDutos = formacaoBancoDutos;
    }

    this.getNumeroBandejas = function() {
        return this.numeroBandejas;
    }

    this.setNumeroBandejas = function(numeroBandejas) {
        this.numeroBandejas = numeroBandejas;
    }

    this.getNumeroBandejasVertical = function() {
        return this.numeroBandejasVertical;
    }

    this.setNumeroBandejasVertical = function(numeroBandejasVertical) {
        this.numeroBandejasVertical = numeroBandejasVertical;
    }

    this.getNumeroCabosFixado = function() {
        return this.numeroCabosFixado;
    }

    this.setNumeroCabosFixado = function(numeroCabosFixado) {
        this.numeroCabosFixado = numeroCabosFixado;
    }

    this.getNumeroTernasBandeja = function() {
        return this.numeroTernasBandeja;
    }

    this.setNumeroTernasBandeja = function(numeroTernasBandeja) {
        this.numeroTernasBandeja = numeroTernasBandeja;
    }

    this.getNumeroTernasBandejaVertical = function() {
        return this.numeroTernasBandejaVertical;
    }

    this.setNumeroTernasBandejaVertical = function(numeroTernasBandejaVertical) {
        this.numeroTernasBandejaVertical = numeroTernasBandejaVertical;
    }

    this.getPosicaoCabosSolo = function() {
        return this.quantidadeCircuitos;
    }

    this.getPosicaoCabosSoloString = function() {
        return POSICAO_CABOS[this.quantidadeCircuitos].description;
    }

    this.setPosicaoCabosSolo = function(posicaoCabosSolo) {
        this.quantidadeCircuitos = posicaoCabosSolo;
    }

    this.getResistividadeTermica = function() {
        return this.resistividadeTermica;
    }

    this.setResistividadeTermica = function(resistividadeTermica) {
        this.resistividadeTermica = resistividadeTermica;
    }

    this.getSecaoCondutorFixado = function() {
        return this.secaoCondutorFixado;
    }

    this.setSecaoCondutorFixado = function(secaoCondutorFixado) {
        this.secaoCondutorFixado = secaoCondutorFixado;
    }

    this.getOrientacaoFatorCorrecao = function() {
        return this.orientacaoFatorCorrecao;
    }

    this.getOrientacaoFatorCorrecaoString = function() {
        return ORIENTACAO_FATOR_CORRECAO[this.orientacaoFatorCorrecao].description;
    }

    this.setOrientacaoFatorCorrecao = function(orientacaoFatorCorrecao) {
        this.orientacaoFatorCorrecao = orientacaoFatorCorrecao;
    }

    this.getTempoAtuacaoProtecao = function() {
        return this.tempoAtuacaoProtecao;
    }

    this.setTempoAtuacaoProtecao = function(tempoAtuacaoProtecao) {
        this.tempoAtuacaoProtecao = tempoAtuacaoProtecao;
    }

    this.setTempoAtuacaoProtecao = function() {
        return this.codigo;
    }

    this.setCodigo = function(codigo) {
        this.codigo = codigo;
    }

    this.getPosicionamentoCabo = function() {
        return this.posicionamentoCabo;
    }

    this.getPosicionamentoCaboString = function() {
        return LOCAL_INSTALACAO[this.posicionamentoCabo].description;
    }

    this.setPosicionamentoCabo = function(posicionamentoCabo) {
        this.posicionamentoCabo = posicionamentoCabo;
    }

    this.getSistemaAterramento = function() {
        return this.sistemaAterramento;
    }

    this.setSistemaAterramento = function(sistemaAterramento) {
        this.sistemaAterramento = sistemaAterramento;
    }

    this.isMultiAterrado = function() {
        return this.isMediaTensao();
    }

    this.isEletroduto = function() {
        return (this.localInstalacao == ELETRODUTO || this.localInstalacao == ELETRODUTO_CIRCULAR_ALVENARIA || this.localInstalacao == ELETRODUTO_PAREDE || this.localInstalacao == ELETRODUTO_SECAO_CIRCULAR);
    }

    this.isDiretamenteEnterrados = function() {
        return (this.localInstalacao == DIRETAMENTE_ENTERRADOS || this.localInstalacao == DIRETAMENTE);
    }

    this.isEletrodutoSolo = function() {
        var a = this.possibilidadeInstalacao == ELETRODUTO_SOLO;
        var b = this.possibilidadeInstalacao == ELETRODUTO_METALICO_SOLO;
        var c = this.possibilidadeInstalacao == ELETRODUTO_NAO_METALICO_SOLO;
        
        return (a || b || c);
    }

    this.getDistanciaEntreCabos = function() {
        return this.distanciaEntreCabos;
    }

    this.setDistanciaEntreCabos = function(distanciaEntreCabos) {
        this.distanciaEntreCabos = distanciaEntreCabos;
    }

    this.getorientacaoCabo = function() {
        return this.orientacaoCabo;
    }

    this.getOrietacaoCaboString = function() {
        return ORIENTACAO_CABO[this.orientacaoCabo].description;
    }

    this.isOrientacaoHorizontal = function() {
        return this.orientacaoCabo == HORIZONTAL;
    }

    this.isOrientacaoVertical = function() {
        return this.orientacaoCabo == VERTICAL;
    }

    this.setorientacaoCabo = function(orientacaoCabo) {
        this.orientacaoCabo = orientacaoCabo;
    }

    this.getRelacaoCaboDuto = function() {
        return this.relacaoCaboDuto;
    }

    this.getRelacaoCaboDutoString = function() {
        return RELACAO_CABO_DUTO[this.relacaoCaboDuto].description;
    }

    this.setRelacaoCaboDuto = function(relacaoCaboDuto) {
        this.relacaoCaboDuto = relacaoCaboDuto;
    }

    this.getAlturaCanaleta = function() {
        return this.alturaCanaleta;
    }

    this.setAlturaCanaleta = function(alturaCanaleta) {
        this.alturaCanaleta = alturaCanaleta;
    }

    this.getLarguraCanaleta = function() {
        return this.larguraCanaleta;
    }

    this.setLarguraCanaleta = function(larguraCanaleta) {
        this.larguraCanaleta = larguraCanaleta;
    }

    this.getAplicacao = function() {
        return this.aplicacao;
    }

    this.setAplicacao = function(aplicacao) {
        this.aplicacao = aplicacao;
    }

    this.getTipoCabo = function() {
        return this.tipoCabo;
    }

    this.setTipoCabo = function(tipoCabo) {
        this.tipoCabo = tipoCabo;
    }
}

d = new DimensionamentoBean();