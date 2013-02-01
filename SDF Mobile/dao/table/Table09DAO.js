/**
 * Constructor description
 * @author Thiago Cavalari
 * @param db, original java type database
 * @class
 * Class Table09DAO
 */
function Table09DAO(database)
{
	this.db = database;
}

Table09DAO.prototype = new Table09Bean();

/**
 * Method description
 * @param String tableName
 * @return The array Table02Bean
 */
Table09DAO.prototype.getByTableName = function(tableName) {
		
	var filtro = "";
	
	//alert('tableName: ' + tableName);
	
	filtro = filtro + "NME_TABELA='" + tableName + "'";

	this.db.transaction(function (transaction) {
		
	    var query="SELECT * FROM TAB_AUXILIAR_09 WHERE " + filtro +";";
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
 * @param int quantidadeCabos
 * @param String tableName
 * @return The array Table09Bean
 */
Table09DAO.prototype.getByNumeroCircuitos = function(quantidadeCabos, tableName) {
		
	var filtro = "";
	
	filtro = filtro + "NME_TABELA='" + tableName + "'";
	filtro = filtro + " AND NMR_CABOS='" + quantidadeCabos + "'";

	this.db.transaction(function (transaction) {
		
	    var query="SELECT * FROM TAB_AUXILIAR_09 WHERE " + filtro +";";
		
        transaction.executeSql(query, [],
                function (transaction, resultSet) {
                        /*for (var i=0; i<resultSet.rows.length; i++) {

                                var row = resultSet.rows.item(i);
                                alert("NME_TABELA:" + row['NME_TABELA'] + " - NMR_CABOS: " + row['NMR_CABOS']  + " - TPO_CABOS: " + row['TPO_CABOS']);
                        }*/
                        
                      return resultSet.rows;
                });
    	});	
};