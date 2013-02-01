function Tabela39() {
	var numeroTabela = 39;
	var dimensionamento;
	var dao = new Table05DAO();
	
	this.getSecao = function(dimensionamento, secao) {
	    this.dimensionamento = dimensionamento;
	
	    try {
	        var list = this.dao.getBySecao(this.getNomeTabela(), secao);
	
	        if (list.length > 0) {
	            return list[0].getSecao();
	        }
	    } catch (e) {
	        alert("Ocorreu um erro ao pegar os dados da tabela.");
	    }
	
	    return 0;
	}
	
	this.getSecao = function(dimensionamento, corrente, minimaSecao, maximaSecao) {
	    this.dimensionamento = dimensionamento;
	    var secao = 0;
	
	    var tableName = this.getNomeTabela();
	    var numeroCondutores = this.getNumeroCondutoresCarregados();
	    var coluna = this.getNomeColuna();
	
	    var list;
	
	    try {
	        list = this.dao.getByCorrente(tableName, corrente, coluna, numeroCondutores, minimaSecao, maximaSecao);
	    } catch (e) {
	        alert("Erro ao carregar os dados da tabela.");
	    }
	
		if (list.length > 0) {
		    // Pega a menor corrente da lista.
		    var minItem = list[0];
		
		    for (var i in list) {
		        try {
		            var name = "valor" + coluna + "_" + numeroCondutores;
		            var tempValue = list[i][name];
		            var minValue = minItem[name];
		
		            if (tempValue < minValue) {
		                minItem = tempItem;
		            }
		        } catch (e) {
		            alert("Ocorreu um erro ao pegar os dados da tabela.");
		            }
		        }
	        secao = minItem.getSecao();
	    }
		
	    return secao;
	}
	
	this.getCorrente = function(dimensionamento, secao) {
	    this.dimensionamento = dimensionamento;
	    var corrente = 0;
	
	    try {
	        var list = this.dao.getBySecao(this.getNomeTabela(), secao);
	
	        if (list.length > 0) {
	            var name = "valor" + this.getNomeColuna() + "_";
	
	        if (dimensionamento.isDuasFases() && !dimensionamento.isColunaG()) {
	            name += "2";
	        } else if (dimensionamento.isTrifasico() || dimensionamento.isColunaG()) {
	            name += "3";
	        }
	
	        corrente = list[0][name];
	    }
	
		} catch (e) {
		    alert("Ocorreu um erro ao pegar os dados da tabela.");
	    }
	
	    return corrente;
	}
	
	this.getMaiorSecao = function(dimensionamento, secao) {
	    this.dimensionamento = dimensionamento;
	    var secaoEncontrada = 0;
	
	    try {
	        var list = this.dao.getByMaiorSecao(this.getNomeTabela(), secao);
	
	        // Busca a menor se‹o dentre as que vieram do banco.
	        if (list.length > 0) {	
		        var minSecao = Number.MAX_VALUE;
		
		        for (var i in list) {
		            if (list[i].getSecao() < minSecao) {
		                minSecao = list[i].getSecao();
		            }
		        }
		
		        secaoEncontrada = minSecao;
		    }
		} catch (e) {
		    alert("Ocorreu um erro ao pegar os dados da tabela.");
		}
		
	    return secaoEncontrada;
	}
	
	this.getNomeColuna = function() {
	    var coluna = "";
	
		if (this.dimensionamento.isColunaE()) {
		    coluna = "E";
		
		} else if (this.dimensionamento.isColunaF()) {
		    if (this.dimensionamento.isJustaposto() && this.getNumeroCondutoresCarregados() == 3) {
		        coluna = "F_J";
		    } else {
		        coluna = "F";
		    }
		
		} else if (this.dimensionamento.isColunaG()) {
		
		    if (this.dimensionamento.isOrientacaoHorizontal()) {
		        coluna = "G_H";
		    } else if (this.dimensionamento.isOrientacaoVertical()) {
		        coluna = "G_V";
		    }
		
		} else {
		    alert("N‹o foi poss’vel localizar a coluna.");
	    }
	
	    return coluna;
	}
	
	this.getNumeroCondutoresCarregados = function() {
	    var numCondutores = 0;
	
	    if (this.dimensionamento.getLocalInstalacao() == ISOLADORES) {
	        numCondutores = 3;
	    } else if (this.dimensionamento.isDuasFases()) {
	        numCondutores = 2;
	    } else if (this.dimensionamento.isTrifasico()) {
	        numCondutores = 3;
	    }
	
	    return numCondutores;
	}
	
	this.getNomeTabela = function() {
	    var nomeTabela = "";
	
	    if (this.numeroTabela == 38) {
	        if (this.dimensionamento.isCobre()) {
	            nomeTabela = NOME_TABELA[TABELA_38_COBRE];
	        } else if (this.dimensionamento.isAluminio()) {
	            nomeTabela = NOME_TABELA[TABELA_38_ALUMINIO];
	        }
	
	    } else if (this.numeroTabela == 39) {
	        if (this.dimensionamento.isCobre()) {
	            nomeTabela = NOME_TABELA[TABELA_39_COBRE];
	        } else if (this.dimensionamento.isAluminio()) {
	            nomeTabela = NOME_TABELA[TABELA_39_ALUMINIO];
	        }
	    }
	    
	    return nomeTabela;
	}	
}