function Tabela31() {
	this.tableNumber = 31;
	this.dao = new Table10DAO();
	
    this.getCorrente = function(dimensionamento, secao) {
        var corrente = 0;

        var pkBean = new Table10PKBean();
        pkBean.setNomeTabela(this.getNomeTabela(dimensionamento.getTensaoIsolamento()));
        pkBean.setSecao(secao);

        var bean = getByID(pkBean);

        if (bean != null) {

            if (dimensionamento.isColunaA()) {
                corrente = bean.getValorA();
            } else if (dimensionamento.isColunaB()) {
                corrente = bean.getValorB();
            } else if (dimensionamento.isColunaC()) {
                corrente = bean.getValorC();
            } else if (dimensionamento.isColunaD()) {
                corrente = bean.getValorD();
            } else if (dimensionamento.isColunaE()) {
                corrente = bean.getValorE();
            } else if (dimensionamento.isColunaF()) {
                corrente = bean.getValorF();
            } else if (dimensionamento.isColunaG()) {
                corrente = bean.getValorG();
            } else if (dimensionamento.isColunaH()) {
                corrente = bean.getValorH();
            } else if (dimensionamento.isColunaI()) {
                corrente = bean.getValorI();
            }
        }

        return corrente;
    }

    this.getMaiorSecao = function(dimensionamento, secao) {
        var secaoEncontrada = 0;

        try {
            var list = this.dao.getByMaiorSecao(this.getNomeTabela(dimensionamento.getTensaoIsolamento()), secao);

            // Busca a menor se‹o dentre as que vieram do banco.
            if (list.length > 0) {
                var minSecao = Number.MAX_VALUE;
                
                for(var i in list) {
                	if(list[i] < minSecao) minSecao = list[i];
                }
                
                secaoEncontrada = minSecao;
            }

        } catch (e) {
            alert("Ocorreu um erro ao pegar os dados da tabela.");
        }

        return secaoEncontrada;
    }

    this.getSecao = function(dimensionamento, secao) {
        try {
            list = this.dao.getBySecao(this.getNomeTabela(dimensionamento.getTensaoIsolamento()), secao);
            
            if (list.length > 0) {
                return list[0].getSecao();
            }

        } catch (e) {
            alert("Ocorreu um erro ao pegar os dados da tabela.");
        }

        return 0;
    }

    this.getSecao = function(dimensionamento, corrente, minimaSecao, maximaSecao) {
        var secao = 0;

        var tabela = this.getNomeTabela(dimensionamento.getTensaoIsolamento());

        try {
            list = this.dao.getByCorrente(tabela, this.getNomeColuna(dimensionamento), Math.ceil(corrente), minimaSecao, maximaSecao);

            if (list.length > 0) {
                secao = list[0].getSecao();
            }

        } catch (e) {
            alert(e);
        }

        return secao;
    }

    this.getNomeTabela = function(tensaoIsolamento) {
        var tabela = this.tableNumber + "_0";

        if (tensaoIsolamento <= _8_7KV_15KV) {
            tabela += "2";
        } else {
            tabela += "1";
        }

        return tabela;
    }

    this.getNomeColuna = function(dimensionamento) {
        var coluna = "";

        if (dimensionamento.isColunaA()) {
            coluna = "A";
        } else if (dimensionamento.isColunaB()) {
            coluna = "B";
        } else if (dimensionamento.isColunaC()) {
            coluna = "C";
        } else if (dimensionamento.isColunaD()) {
            coluna = "D";
        } else if (dimensionamento.isColunaE()) {
            coluna = "E";
        } else if (dimensionamento.isColunaF()) {
            coluna = "F";
        } else if (dimensionamento.isColunaG()) {
            coluna = "G";
        } else if (dimensionamento.isColunaH()) {
            coluna = "H";
        } else if (dimensionamento.isColunaI()) {
            coluna = "I";
        }

        return coluna;
    }
    
    this.getAll = function() {
	    var list = null;
	
	    try {
	        list = dao.getAll();
	    } catch (e) {
	        alert(e + " Erro ao carregar os dados da tabela.");
	    }
	
	    return list;
    }

	this.save = function(bean){
	    try {
	        dao.saveOrUpdate(bean);
	    } catch (e) {
	    	alert(e + " Erro ao carregar os dados da tabela.");
	    }

	}
	
	this.getByID = function(pkBean){
	    var bean = null;
	
	    try {
	        bean = dao.getByID(pkBean);
	    } catch (e) {
	    	alert(e + " Erro ao carregar os dados da tabela.");
	    }
	
	    return bean;
	}
	
	this.delete = function(bean){
	    try {
	        dao.delete(bean);
	    } catch (e) {
	    	alert(e + " Erro ao carregar os dados da tabela.");
	    }

	}
}