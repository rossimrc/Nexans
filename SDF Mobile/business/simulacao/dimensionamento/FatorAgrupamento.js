function FatorAgrupamento(dimensionamento) {
	this.dimensionamento = dimensionamento;
	this.numeroBandejas = 0;
	this.numeroCircuitos = 0;
	
	this.calcularAgrupamento = function(numeroCabos) {
		this.numeroCircuitos = this.dimensionamento.getNumeroCircuitos(numeroCabos);
		this.numeroBandejas = this.dimensionamento.getNumeroBandejas();

        if (this.dimensionamento.getOrientacaoFatorCorrecao() > 0) {

            while (this.numeroCircuitos > this.getNumeroMaximoCircuitosBandeja()) {
            	this.numeroBandejas++;

                if ((this.dimensionamento.isMediaTensao() && !(this.dimensionamento.isColunaA() || this.dimensionamento.isColunaC())) || this.numeroBandejas > this.getNumeroMaximoBandejas()) {
                	alert("Nœmero de cabos por fase e/ou circuitos agrupados, n‹o previstos nas tabelas padronizadas de fatores de agrupamentos das normas NBR 5410, NBR 14039 ou IEC.", true);
                }

                this.numeroCircuitos = Math.ceil(this.dimensionamento.getNumeroCircuitos(numeroCabos) / this.numeroBandejas);
            }
        } else if (numeroCircuitos > getNumeroMaximoCircuitosBandeja()) {
            alert("Nœmero de cabos por fase e/ou circuitos agrupados, n‹o previstos nas tabelas padronizadas de fatores de agrupamentos das normas NBR 5410, NBR 14039 ou IEC.", true);
        }
	}
	
	this.getNumeroMaximoBandejas = function() {
        var max = 0;

        if (this.dimensionamento.isOrientacaoFatorCorrecaoHorizontal()) {
            if (this.dimensionamento.isCabosEnergia() && !this.dimensionamento.isJustaposto()) {
                max = 6;
            } else {
                max = 3;
            }
        } else {
            if (this.dimensionamento.isEspacado()) {
                max = 6;
            } else {
                max = 2;
            }
        }

        return max;
    }
	
	this.getNumeroMaximoCircuitosBandeja = function() {
        var max = 0;
        
        if (this.dimensionamento.isOrientacaoFatorCorrecaoHorizontal()) {
            if (this.dimensionamento.isCabosEnergia()) {
                if (this.dimensionamento.isUnipolar()) {
                    max = 3;
                } else {
                    max = 9;
                }
            } else {
                if (this.dimensionamento.isColunaF()) {
                    max = 3;
                } else if (this.dimensionamento.isColunaE()) {
                    if (this.dimensionamento.isJustaposto()) {
                        max = 9;
                    } else if (this.dimensionamento.isEspacado()) {
                        max = 6;
                    }
                }
            }
        } else if (this.dimensionamento.isOrientacaoFatorCorrecaoVertical()) {
            if (this.dimensionamento.isCabosEnergia()) {
                if (this.dimensionamento.isEspacado() || this.dimensionamento.isTrifolio()) {
                    if (this.dimensionamento.isUnipolar()) {
                        max = 3;
                    } else {
                        max = 9;
                    }
                } else {
                    if (this.dimensionamento.isUnipolar()) {
                        max = 2;
                    } else {
                        max = 9;
                    }
                }
            } else {
                if (this.dimensionamento.isColunaF()) {
                    max = 3;
                } else if (this.dimensionamento.isColunaE()) {
                    if (this.dimensionamento.isJustaposto()) {
                        max = 9;
                    } else if (this.dimensionamento.isEspacado()) {
                        max = 6;
                    }
                }
            }
        } else if (this.dimensionamento.getPossibilidadeInstalacao() == BANCO_DUTOS_SOLO) {
            if (this.dimensionamento.isTripolar() || (!this.dimensionamento.isTripolar() && !this.dimensionamento.isEspacado())) {
                max = 4;
            } else {
                max = 3;
            }
        } else if (this.dimensionamento.isSubterranea()) {
            if (this.dimensionamento.isEletroduto() || this.dimensionamento.isDiretamenteEnterrados()) {
                max = 6;
            } else {
                max = 20;
            }
        } else if (this.dimensionamento.getPossibilidadeInstalacao() == ESPACO_CONSTRUCAO) {
            max = 6;
        } else if (this.dimensionamento.isEletrodutoSolo()) {
            max = 6;
        } else {
            max = 20;
        }

        return max;
    }
	
	this.getNumeroMaximoCircuitos = function() {
        return this.getNumeroMaximoBandejas() * this.getNumeroMaximoCircuitosBandeja();
    }
	
	this.getNumeroBandejas = function() {
        return this.numeroBandejas;
    }

	this.setNumeroBandejas = function(numeroBandejas) {
        this.numeroBandejas = numeroBandejas;
    }

	this.getNumeroCircuitos = function() {
        return this.numeroCircuitos;
    }

	this.setNumeroCircuitos = function(numeroCircuitos) {
        this.numeroCircuitos = numeroCircuitos;
    }
}