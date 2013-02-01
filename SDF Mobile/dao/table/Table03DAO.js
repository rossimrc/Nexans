/**
 * Constructor description
 * @author Thiago Cavalari
 * @param db, original java type database
 * @class
 * Class Table03DAO
 */
function Table03DAO(database)
{
	this.db = database;
}

Table03DAO.prototype = new Table03Bean();

/**
 * Method description
 * @param String tableName
 * @return The array Table03Bean
 */
Table03DAO.prototype.getByTableName = function(tableName) {
		
	var filtro = "";
	
	//alert('tableName: ' + tableName);
	
	filtro = filtro + "NME_TABELA='" + tableName + "'";

	this.db.transaction(function (transaction) {
		
	    var query="SELECT * FROM TAB_AUXILIAR_03 WHERE " + filtro +";";
	    //alert("Query: " + query);
		
        transaction.executeSql(query, [],
                function (transaction, resultSet) {

                      return resultSet.rows;
                });
    	});	
};