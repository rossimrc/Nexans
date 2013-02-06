/**
 * Constructor description
 * @author Thiago Cavalari
 * @param db, original java type database
 * @class
 * Class Table02DAO
 */
function Table02DAO(database)
{
	this.db = database;
}

Table02DAO.prototype = new Table02Bean();

/**
 * Method description
 * @param String tableName
 * @return The array Table02Bean
 */
Table02DAO.prototype.getByTableName = function(tableName) {
		
	var filtro = "";
	
	//alert('tableName: ' + tableName);
	
	filtro = filtro + "NME_TABELA='" + tableName + "'";

	this.db.transaction(function (transaction) {
		
	    var query="SELECT * FROM TAB_AUXILIAR_02 WHERE " + filtro +";";
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
 * @param String coluna
 * @param float corrente
 * @param double minimaSecao
 * @param double maximaSecao
 * @return The array Table02Bean
 */
Table02DAO.prototype.getByCorrente = function(tableName, coluna, corrente, minimaSecao, maximaSecao) {
		
	var auxColuna = "VLR_" + coluna.toUpperCase();
	
	var filtro = "";
	
	var result = [];
		
	filtro = filtro + "NME_TABELA='" + tableName + "'";
	filtro = filtro + " AND " + auxColuna + ">" + corrente;
	filtro = filtro + " AND (NMR_SECAO between '" + minimaSecao + "' AND '" + maximaSecao + "')";

	this.db.transaction(function (transaction) {
		
	    //var query="SELECT * FROM TAB_AUXILIAR_02 WHERE " + filtro +";";
	    var query="SELECT * FROM TAB_AUXILIAR_02;";
		
	    transaction.executeSql(query, [],
                function (transaction, resultSet) {
                        var string = "";
                        
						//return resultSet.rows;
				
                        for (var i=0; i<resultSet.rows.length; i++) {

                                var row = resultSet.rows.item(i);
                                /*result[i] = {
                                		NME_TABELA: row['NME_TABELA'],
                                        NMR_SECAO: row['NMR_SECAO'],
                                        VLR_B1_2: row['VLR_B1_2'],
                                        VLR_B1_3: row['VLR_B1_3'],
                                        VLR_B2_2: row['VLR_B2_2'],
                                        VLR_B2_3: row['VLR_B2_3'],
                                        VLR_C_2: row['VLR_C_2'],
                                        VLR_C_3: row['VLR_C_3'],
                                        VLR_E_2: row['VLR_E_2'],
                                        VLR_E_3: row['VLR_E_3'],
                                        VLR_F_2: row['VLR_F_2'],
                                        VLR_F_3T: row['VLR_F_3T'],
                                        VLR_F_3: row['VLR_F_3'],
                                        VLR_G_H: row['VLR_G_H'],
                                        VLR_G_V: row['VLR_G_V']
                                };*/
                                
                                result[i] = resultSet.rows.item(i);
                        }
                        localStorage.removeItem('resultTable02DAOGetByCorrente');
                        
                        localStorage.setItem('resultTable02DAOGetByCorrente', JSON.stringify(result));
                });
    	});
	
	return "resultTable02DAOGetByCorrente";
};

/**
 * Method description
 * @param String tableName
 * @param double secaoMinima
 */
Table02DAO.prototype.getByMaiorSecao = function(tableName, secaoMinima) {
	
	var filtro = "";
	
	filtro = filtro + "NME_TABELA='" + tableName + "'";
	filtro = filtro + " AND NMR_SECAO>" + secaoMinima;

	this.db.transaction(function (transaction) {
		
	    var query="SELECT * FROM TAB_AUXILIAR_02 WHERE " + filtro +";";
		
        transaction.executeSql(query, [],
                function (transaction, resultSet) {

						return resultSet.rows;				
                });
    	});
};

/**
 * Method description
 * @param String tableName
 * @param double secao
 */
Table02DAO.prototype.getBySecao = function(tableName, secao) {
	
	var filtro = "";
	
	filtro = filtro + "NME_TABELA='" + tableName + "'";
	filtro = filtro + " AND NMR_SECAO='" + secao + "'";

	this.db.transaction(function (transaction) {
		
	    var query="SELECT * FROM TAB_AUXILIAR_02 WHERE " + filtro +";";
		
        transaction.executeSql(query, [],
                function (transaction, resultSet) {
				
						return resultSet.rows;				
                });
    	});
};