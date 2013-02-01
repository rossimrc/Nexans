/**
 * Constructor description
 * @author Thiago Cavalari
 * @param db, original java type database
 * @class
 * Class Table07DAO
 */
function Table07DAO(database)
{
	this.db = database;
}

Table07DAO.prototype = new Table07Bean();

/**
 * Method description
 * @param String tableName
 * @return The array Table07Bean
 */
Table07DAO.prototype.getByTableName = function(tableName) {
		
	var filtro = "";
	
	//alert('tableName: ' + tableName);
	
	filtro = filtro + "NME_TABELA='" + tableName + "'";

	this.db.transaction(function (transaction) {
		
	    var query="SELECT * FROM TAB_AUXILIAR_07 WHERE " + filtro +";";
	    //alert("Query: " + query);
		
        transaction.executeSql(query, [],
                function (transaction, resultSet) {
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
 * @param int temperatura
 * @return The array Table07Bean
 */
Table07DAO.prototype.getByTemperatura = function(tableName, temperatura) {
		
	var filtro = "";
	
	filtro = filtro + "NME_TABELA='" + tableName + "'";
	filtro = filtro + " AND VLR_TEMPERATURA='" + temperatura + "'";

	this.db.transaction(function (transaction) {
		
	    var query="SELECT * FROM TAB_AUXILIAR_07 WHERE " + filtro +";";
	    //alert("Query: " + query);
		
        transaction.executeSql(query, [],
                function (transaction, resultSet) {
                        /*for (var i=0; i<resultSet.rows.length; i++) {

                                var row = resultSet.rows.item(i);
                                alert("NME_TABELA:" + row['NME_TABELA'] + " - VLR_TEMPERATURA: " + row['VLR_TEMPERATURA']  + " - TPO_TEMPERATURA: " + row['TPO_TEMPERATURA']);
                        }*/
                        
                      return resultSet.rows;
                });
    	});	
};