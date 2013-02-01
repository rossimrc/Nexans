/**
 * Constructor description
 * @author Thiago Cavalari
 * @param db, original java type database
 * @class
 * Class Table05DAO
 */
function Table05DAO(database)
{
	this.db = database;
}

Table05DAO.prototype = new Table05Bean();

/**
 * Method description
 * @param String tableName
 * @return The array Table02Bean
 */
Table05DAO.prototype.getByTableName = function(tableName) {
		
	var filtro = "";
	
	//alert('tableName: ' + tableName);
	
	filtro = filtro + "NME_TABELA='" + tableName + "'";

	this.db.transaction(function (transaction) {
		
	    var query="SELECT * FROM TAB_AUXILIAR_05 WHERE " + filtro +";";
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
 * @param String tableName
 * @param double corrente
 * @param String nomeColuna
 * @param int numeroCondutores
 * @param double minimaSecao
 * @param double maximaSecao
 * @return The array Table02Bean
 */
Table05DAO.prototype.getByCorrente = function(tableName, corrente, nomeColuna, numeroCondutores, minimaSecao, maximaSecao) {
		
	var auxColuna = "VLR_" + nomeColuna.toUpperCase() + "_" + numeroCondutores;
	
	var filtro = "";
	
	filtro = filtro + "NME_TABELA='" + tableName + "'";
	filtro = filtro + " AND (" + auxColuna + "=" + corrente + " OR " + auxColuna + ">" + corrente + ")";
	filtro = filtro + " AND (NMR_SECAO between '" + minimaSecao + "' AND '" + maximaSecao + "')";

	this.db.transaction(function (transaction) {
		
	    var query="SELECT * FROM TAB_AUXILIAR_05 WHERE " + filtro +";";
	    alert("Query: " + query);
		
        transaction.executeSql(query, [],
                function (transaction, resultSet) {
				
                        /*for (var i=0; i<resultSet.rows.length; i++) {
                                var row = resultSet.rows.item(i);
                                alert("Tabela:" + row['NME_TABELA'] + " - Secao: " + row['NMR_SECAO']  + " - VLR_A1_2: " + row['VLR_A1_2']);
                        }*/
                        
                      return resultSet.rows;
                });
    	});	
};

/**
 * Method description
 * @param String tableName
 * @param double secao
 */
Table05DAO.prototype.getBySecao = function(tableName, secao) {
	
	var filtro = "";
	
	filtro = filtro + "NME_TABELA='" + tableName + "'";
	filtro = filtro + " AND NMR_SECAO='" + secao + "'";

	this.db.transaction(function (transaction) {
		
	    var query="SELECT * FROM TAB_AUXILIAR_05 WHERE " + filtro +";";
		
        transaction.executeSql(query, [],
                function (transaction, resultSet) {
				
						return resultSet.rows;				
                });
    	});
};

/**
 * Method description
 * @param String tableName
 * @param double secaoMinima
 */
Table05DAO.prototype.getByMaiorSecao = function(tableName, secaoMinima) {
	
	var filtro = "";
	
	filtro = filtro + "NME_TABELA='" + tableName + "'";
	filtro = filtro + " AND NMR_SECAO>" + secaoMinima;

	this.db.transaction(function (transaction) {
		
	    var query="SELECT * FROM TAB_AUXILIAR_05 WHERE " + filtro +";";
		
        transaction.executeSql(query, [],
                function (transaction, resultSet) {

						return resultSet.rows;				
                });
    	});
};