/**
 * Constructor description
 * @author Thiago Cavalari
 * @param db, original java type database
 * @param dao, original java type Table02DAO
 * @class
 * Class Table02
 */
function Table02(database)
{
	this.db = database;
	this.dao = new Table02DAO(this.db);
}

Table02.prototype = new Table02DAO(this.db);

/**
 * Method description
 * @return The array Table02Bean
 */
Table02.prototype.getAll = function() {
		
	this.db.transaction(function (transaction) {
		
	    var query="SELECT * FROM TAB_AUXILIAR_02;";
	    //alert("Query: " + query);
		
        transaction.executeSql(query, [],
                function (transaction, resultSet) {

                        var string = "";
                        
                        /*for (var i=0; i<resultSet.rows.length; i++) {

                                var row = resultSet.rows.item(i);
                                alert("NME_TABELA:" + row['NME_TABELA'] + " - NMR_SECAO: " + row['NMR_SECAO']  + " - VLR_B1_2: " + row['VLR_B1_2']);
                        }*/
                        
                      return resultSet.rows;
                });
    	});	
};

/**
 * Method description
 * @param Table02PKBean pkBean
 * @return The array Table02Bean
 */
Table02.prototype.getByID = function(pkBean) {
		
	var filtro = "";
	
	filtro = filtro + "NME_TABELA='" + pkBean.getNomeTabela() + "'";
	if(pkBean.getSecao()!="")
	{
		filtro = filtro + " AND NMR_SECAO='" + pkBean.getSecao() + "'";
	}
	
	this.db.transaction(function (transaction) {
		
	    var query="SELECT * FROM TAB_AUXILIAR_02 WHERE " + filtro +";";
	    //alert("Query: " + query);
		
        transaction.executeSql(query, [],
                function (transaction, resultSet) {

                        //var string = "";
                        
						//return resultSet.rows;
				
                        /*for (var i=0; i<resultSet.rows.length; i++) {

                                var row = resultSet.rows.item(i);
                                alert("Tabela:" + row['NME_TABELA'] + " - Secao: " + row['NMR_SECAO']  + " - VLR_A: " + row['VLR_A']);
                                
                                //alert('Alias test: Name: '+row['name']+' ('+row['tbl_a_id']+') Color: '+row['color']+' ('+row['tbl_b_id']+')');
                                // string = string + "ID: "+row['id']+" A_ID: "+row['tbl_a_id']+" B_ID: "+row['tbl_b_id']+"\n";
                        }*/
                        
                      return resultSet.rows;
                });
    	});	
};

/**
 * Method description
 * @return The array Table02Bean
 */
Table02.prototype.getSecao = function(tableName, dimensionamento, corrente, minimaSecao, maximaSecao) {
	
	var secao = 0;
	
	try
	{
		var results = this.getByCorrente(tableName, this.getNomeColuna(dimensionamento), corrente, minimaSecao, maximaSecao);
		
		alert('Nome Objeto: ' + results);
		
		var Objeto_real = localStorage[results];
		var Objeto_json = JSON.parse(Objeto_real);
		
		secao = Objeto_real;
	}
	catch(err)
	{
		alert("Erro ao buscar registro da tabela." + err);
	}
	
	return secao;
};

/**
 * Method description
 * @param String tableName
 * @param double secaoMinima
 * @return The array Table02Bean
 */
Table02.prototype.getMaiorSecao = function(tableName, secaoMinima) {
	
	return this.getByMaiorSecao(tableName, secaoMinima);
};

/**
 * Method description
 * @param DimensionamentoBean dimensionamento
 * @return coluna
 */
Table02.prototype.getNomeColuna = function(dimensionamento) {
	
	var coluna = "";
	
	if(dimensionamento.isColunaB1())
	{
		coluna = "B1"; 
	}
	else if(dimensionamento.isColunaB2())
	{
		coluna = "B2";
	}
	else if (dimensionamento.isColunaC())
	{
		coluna = "C";
	}
	else if (dimensionamento.isColunaE())
	{
		coluna = "E";
	}
	else if (dimensionamento.isColunaF())
	{
		coluna = "F";	
	}
	
	if(dimensionamento.isDuasFases())
	{
		coluna = coluna + "_2";
	}
	else if(dimensionamento.isTrifasico())
	{
		if(imensionamento.isTrifolio())
		{
			coluna = coluna + "_3T";
		}
		else
		{
			coluna = coluna + "_3";
		}
	}
	
	return coluna;
};
