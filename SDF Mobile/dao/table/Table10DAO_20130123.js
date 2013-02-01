/**
 * Constructor description
 * @author Thiago Cavalari
 * @param numeroCondutores, original java type String
 * @param valor2, original java type double
 * @param valor3, original java type double
 * @param valor45, original java type double
 * @param valor68, original java type double
 * @param valor9, original java type double
 * @class
 * Class Table10DAO
 */
function Table10DAO(database)
{
	this.db = database;
}

Table10DAO.prototype = new Table10Bean();

/**
 * Method description
 * @param String tableName
 * @param String coluna
 * @param int corrente
 * @param double minimaSecao
 * @param double maximaSecao
 * @return The numeroCondutores value
 */
Table10DAO.prototype.getByCorrente = function(tableName, coluna, corrente, minimaSecao, maximaSecao) {
	
	alert(this.db);
    
	//this.db.transaction(function (tx) {
	//    tx.executeSql('SELECT * FROM foo', [], function (tx, results) {
	//    	  var len = results.rows.length, i;
	//    	  for (i = 0; i < len; i++) {
	//    	    alert(results.rows.item(i).text);
	//    	  }
	//    	});
	//	});
	
	var auxColuna = "VLR_" + coluna.toUpperCase();
	
	var filtro = "";
	
	filtro = filtro + "NME_TABELA='" + tableName + "'";
	filtro = filtro + " AND " + auxColuna + ">" + corrente;
	//filtro = filtro + "AND (id.secao>=" + minimaSecao + " AND id.secao<=" + maximaSecao + ")";
	filtro = filtro + " AND (NMR_SECAO between '" + minimaSecao + "' AND '" + maximaSecao + "')";

    //var query="SELECT * FROM Table10Bean, Table10PKBean as id WHERE " + filtro +";";
    
    //alert("Query: " + query);	
	
	this.db.transaction(function (transaction) {
		
	    var query="SELECT * FROM TAB_AUXILIAR_10 WHERE " + filtro +";";
	    //alert("Query: " + query);
		
        transaction.executeSql(query, [],

                function (transaction, resultSet) {

                        var string = "";
				
						return resultSet.rows;
				
                        /*for (var i=0; i<resultSet.rows.length; i++) {

                                var row = resultSet.rows.item(i);
                                alert("Row:" + row['NME_TABELA']);
                                //alert('Alias test: Name: '+row['name']+' ('+row['tbl_a_id']+') Color: '+row['color']+' ('+row['tbl_b_id']+')');
                                // string = string + "ID: "+row['id']+" A_ID: "+row['tbl_a_id']+" B_ID: "+row['tbl_b_id']+"\n";
                        }*/
                });
    	});	
};

/**
 * Method description
 * @param String tableName
 * @param double secao
 */
Table10DAO.prototype.getBySecao = function(tableName, secao) {
	
	var filtro = "";
	
	filtro = filtro + "NME_TABELA='" + tableName + "'";
	filtro = filtro + " AND NMR_SECAO>" + secao;

    //var query="SELECT * FROM Table10Bean as tb10, Table10PKBean as id WHERE " + filtro +";";
    
    //alert("Query: " + query);	
	
	this.db.transaction(function (transaction) {
		
	    var query="SELECT * FROM TAB_AUXILIAR_10 WHERE " + filtro +";";
	    alert("Query: " + query);
		
        transaction.executeSql(query, [],

                function (transaction, resultSet) {

                        var string = "";
				
						return resultSet.rows;
				
                        /*for (var i=0; i<resultSet.rows.length; i++) {

                                var row = resultSet.rows.item(i);
                                alert("Row:" + row);
                                //alert('Alias test: Name: '+row['name']+' ('+row['tbl_a_id']+') Color: '+row['color']+' ('+row['tbl_b_id']+')');
                                // string = string + "ID: "+row['id']+" A_ID: "+row['tbl_a_id']+" B_ID: "+row['tbl_b_id']+"\n";
                        }*/
                }, errorHandler);
    	}, transactionErrorCallback);
};

/**
 * Method description
 * @param String tableName
 * @param double secaoMinima
 */
Table10DAO.prototype.getByMaiorSecao = function(tableName, secaoMinima) {
	
	var filtro = "";
	
	filtro = filtro + "NME_TABELA='" + tableName + "'";
	filtro = filtro + " AND NMR_SECAO>" + secaoMinima;

	this.db.transaction(function (transaction) {
		
	    var query="SELECT * FROM TAB_AUXILIAR_10 WHERE " + filtro +";";
	    alert("Query: " + query);
		
        transaction.executeSql(query, [],

                function (transaction, resultSet) {

                        var string = "";
				
						return resultSet.rows;
				
                }, errorHandler);
    	}, transactionErrorCallback);
};