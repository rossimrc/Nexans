/**
 * Constructor description
 * @author Thiago Cavalari
 * @param db, original java type database
 * @class
 * Class Table06DAO
 */
function Table06DAO(database)
{
	this.db = database;
}

Table06DAO.prototype = new Table06Bean();

/**
 * Method description
 * @param float resistividade
 * @return The array Table02Bean
 */
Table06DAO.prototype.getByResistividade = function(resistividade) {
		
	var filtro = "";
	
	//alert('tableName: ' + tableName);
	
	filtro = filtro + "VLR_RESISTIVIDADE_TERMICA='" + resistividade + "'";

	this.db.transaction(function (transaction) {
		
	    var query="SELECT * FROM TAB_AUXILIAR_06 WHERE " + filtro +";";
		
        transaction.executeSql(query, [],
                function (transaction, resultSet) {
                        /*for (var i=0; i<resultSet.rows.length; i++) {

                                var row = resultSet.rows.item(i);
                                alert("VLR_RESISTIVIDADE_TERMICA:" + row['VLR_RESISTIVIDADE_TERMICA'] + " - VLR_FATOR_CORRECAO: " + row['VLR_FATOR_CORRECAO']);
                        }*/
                        
                      return resultSet.rows;
                });
    	});	
};