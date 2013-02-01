TABELA_36_ALUMINIO = "36_01";
TABELA_36_COBRE = "36_02";

TABELA_37_ALUMINIO = "37_01";
TABELA_37_COBRE = "37_02";

NOME_TABELA = {
	TABELA_36_ALUMINIO : "Tabela 36 - PVC Alum’nio 30c 20c",
	TABELA_36_COBRE : "Tabela 36 - PVC Cobre 30c 20c",
	
	TABELA_37_ALUMINIO : "Tabela 37 - EPR XLPE Alum’nio 30c 20c",
	TABELA_37_COBRE : "Tabela 37 - EPR XLPE Cobre 30c 20c"
}

function Tabela36() {
	this.numeroTabela = 36;
    this.dimensionamento = null;
    this.dao = new Table04DAO();

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
            list = this.dao.getBySecao(this.getNomeTabela(), secao);

            if (list.length > 0) {
                var name = "valor" + getNomeColuna() + "_" + getNumeroCondutoresCarregados();
                corrente = list[0][name];
            }
        } catch (e) {
            alert("Ocorreu um erro ao pegar os dados da tabela.");
        }

        return corrente;
    }

    this.getSecao = function(dimensionamento, secao) {
        this.dimensionamento = dimensionamento;

        try {
            list = this.dao.getBySecao(this.getNomeTabela(), secao);

            if (list.length > 0) {
                return list[0].getSecao();
            }
        } catch (e) {
            alert("Ocorreu um erro ao pegar os dados da tabela.");
        }

        return 0;
    }

    this.getMaiorSecao = function(dimensionamento, secao) {
        this.dimensionamento = dimensionamento;
        var secaoEncontrada = 0;

        try {
            list = this.dao.getByMaiorSecao(this.getNomeTabela(), secao);

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

        if (this.dimensionamento.isColunaA1()) {
            coluna = "A1";
        } else if (this.dimensionamento.isColunaA2()) {
            coluna = "A2";
        } else if (this.dimensionamento.isColunaB1()) {
            coluna = "B1";
        } else if (this.dimensionamento.isColunaB2()) {
            coluna = "B2";
        } else if (this.dimensionamento.isColunaC()) {
            coluna = "C";
        } else if (this.dimensionamento.isColunaD()) {
            coluna = "D";
        } else {
            alert("N‹o foi poss’vel localizar a coluna.");
        }

        return coluna;
    }

    this.getNumeroCondutoresCarregados = function() {
        var numCondutores = 0;

        if (this.dimensionamento.isDuasFases()) {
            numCondutores = 2;
        } else if (this.dimensionamento.isTrifasico()) {
            numCondutores = 3;
        }

        return numCondutores;
    }

    this.getNomeTabela = function() {
        var nomeTabela = "";

        if (this.numeroTabela == 36) {
            if (this.dimensionamento.isCobre()) {
                nomeTabela = NOME_TABELA[TABELA_36_COBRE];
            } else if (this.dimensionamento.isAluminio()) {
                nomeTabela = NOME_TABELA[TABELA_36_ALUMINIO];
            }
        } else if (this.numeroTabela == 37) {
            if (this.dimensionamento.isCobre()) {
                nomeTabela = NOME_TABELA[TABELA_37_COBRE];
            } else if (this.dimensionamento.isAluminio()) {
                nomeTabela = NOME_TABELA[TABELA_37_ALUMINIO];
            }
        }

        return nomeTabela;
    }
}