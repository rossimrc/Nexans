/**
 * Constructor description
 * @author Thiago Cavalari
 * @class
 * Class SimulacaoDAO
 */
function SimulacaoDAO(database)
{
	this.db = database;
}

SimulacaoDAO.prototype = new SimulacaoBean();

/**
 * Method description
 * @param int codigoUser
 * @return The array SimulacaoBean
 */
SimulacaoDAO.prototype.getByUser = function(codigoUser) {
		
	var filtro = "";
	
	alert('Cod_user: ' + codigoUser);
	
	filtro = filtro + "IND_EXCLUIDA=false";
	filtro = filtro + " AND COD_USUARIO='" + codigoUser + "'";
	filtro = filtro + " AND IND_SALVO_PELO_USUARIO=true";

	this.db.transaction(function (transaction) {
		
	    var query="SELECT * FROM T008_SIMULACOES WHERE " + filtro +";";
	    //var query="SELECT * FROM T008_SIMULACOES;";
	    //alert("Query: " + query);
		
        transaction.executeSql(query, [],
                function (transaction, resultSet) {

                        var string = "";
                        
                        /*for (var i=0; i<resultSet.rows.length; i++) {

                                var row = resultSet.rows.item(i);
                                alert("IND_EXCLUIDA:" + row['IND_EXCLUIDA'] + " - NME_PROJETO: " + row['NME_PROJETO']  + " - COD_USUARIO: " + row['COD_USUARIO']);
                        }*/
                        
                      return resultSet.rows;
                });
    	});	
};

/**
 * Method description
 * @param 
 * @return The array SimulacaoBean
 */
SimulacaoDAO.prototype.getAllSavedByUser = function() {
		
	var filtro = "";
	
	filtro = filtro + "IND_SALVO_PELO_USUARIO=true";
	filtro = filtro + " AND IND_EXCLUIDA=false";

	this.db.transaction(function (transaction) {
		
	    var query="SELECT * FROM T008_SIMULACOES WHERE " + filtro +";";
	    //var query="SELECT * FROM T008_SIMULACOES;";
	    //alert("Query: " + query);
		
        transaction.executeSql(query, [],
                function (transaction, resultSet) {

                        var string = "";
                        
                        /*for (var i=0; i<resultSet.rows.length; i++) {

                                var row = resultSet.rows.item(i);
                                alert("IND_EXCLUIDA:" + row['IND_EXCLUIDA'] + " - NME_PROJETO: " + row['NME_PROJETO']  + " - COD_USUARIO: " + row['COD_USUARIO']);
                        }*/
                        
                      return resultSet.rows;
                });
    	});	
};

/**
 * Method description
 * @param int codigoUser
 * @return The array SimulacaoBean
 */
SimulacaoDAO.prototype.getIncompleteByUser = function(codigoUser) {
		
	var filtro = "";
	
	alert('Cod_user: ' + codigoUser);
	
	filtro = filtro + "IND_EXCLUIDA=false";
	filtro = filtro + " AND COD_USUARIO='" + codigoUser + "'";
	filtro = filtro + " AND IND_SALVO_PELO_USUARIO=false";

	this.db.transaction(function (transaction) {
		
	    var query="SELECT * FROM T008_SIMULACOES WHERE " + filtro +";";
	    //var query="SELECT * FROM T008_SIMULACOES;";
	    //alert("Query: " + query);
		
        transaction.executeSql(query, [],
                function (transaction, resultSet) {

                        var string = "";
                        
                        /*for (var i=0; i<resultSet.rows.length; i++) {

                                var row = resultSet.rows.item(i);
                                alert("IND_EXCLUIDA:" + row['IND_EXCLUIDA'] + " - NME_PROJETO: " + row['NME_PROJETO']  + " - COD_USUARIO: " + row['COD_USUARIO']);
                        }*/
                        
                      return resultSet.rows;
                });
    	});	
};

/**
 * Method description
 * @param 
 * @return The array SimulacaoBean
 */
SimulacaoDAO.prototype.getAllDeleted = function() {
		
	var filtro = "";
	
	filtro = filtro + "IND_SALVO_PELO_USUARIO=true";
	filtro = filtro + " AND IND_EXCLUIDA=true";

	this.db.transaction(function (transaction) {
		
	    var query="SELECT * FROM T008_SIMULACOES WHERE " + filtro +";";
	    //var query="SELECT * FROM T008_SIMULACOES;";
	    //alert("Query: " + query);
		
        transaction.executeSql(query, [],
                function (transaction, resultSet) {

                        var string = "";
                        
                        /*for (var i=0; i<resultSet.rows.length; i++) {

                                var row = resultSet.rows.item(i);
                                alert("IND_EXCLUIDA:" + row['IND_EXCLUIDA'] + " - NME_PROJETO: " + row['NME_PROJETO']  + " - COD_USUARIO: " + row['COD_USUARIO']);
                        }*/
                        
                      return resultSet.rows;
                });
    	});	
};

/**
 * Method description
 * @param int codigoUser
 * @return The array SimulacaoBean
 */
SimulacaoDAO.prototype.getAllForUser = function(codigoUser) {
		
	var filtro = "";
	
	alert('Cod_user: ' + codigoUser);
	
	filtro = filtro + "COD_USUARIO='" + codigoUser + "'";
	filtro = filtro + " AND IND_SALVO_PELO_USUARIO=true";

	this.db.transaction(function (transaction) {
		
	    var query="SELECT * FROM T008_SIMULACOES WHERE " + filtro +";";
	    //var query="SELECT * FROM T008_SIMULACOES;";
	    //alert("Query: " + query);
		
        transaction.executeSql(query, [],
                function (transaction, resultSet) {

                        var string = "";
                        
                        /*for (var i=0; i<resultSet.rows.length; i++) {

                                var row = resultSet.rows.item(i);
                                alert("IND_EXCLUIDA:" + row['IND_EXCLUIDA'] + " - NME_PROJETO: " + row['NME_PROJETO']  + " - COD_USUARIO: " + row['COD_USUARIO']);
                        }*/
                        
                      return resultSet.rows;
                });
    	});	
};

/**
 * Method description
 * @param int codUser
 * @return The array SimulacaoBean
 */
SimulacaoDAO.prototype.deleteUserSimulacoes = function(codUser) {
		
	var filtro = "";
	
	alert('Cod_user: ' + codigoUser);
	
	filtro = filtro + "COD_USUARIO='" + codigoUser + "'";

	this.db.transaction(function (transaction) {
		
	    var query="DELETE FROM T008_SIMULACOES WHERE " + filtro +";";
	    //alert("Query: " + query);
		
        transaction.executeSql(query, [],
                function (transaction, resultSet) {
                        
                      return true;
                });
    	});	
};

/**
 * Method description
 * @param SimulacaoBean bean
 * @return void
 */
SimulacaoDAO.prototype.deleteSimulacoes = function(bean) {
	
	var filtro = "";
	
	alert('Cod_user: ' + codigoUser);
	
	filtro = filtro + "COD_SIMULACAO='" + bean.getCodigo() + "'";
	filtro = filtro + " AND COD_USUARIO='" + bean.getCodigoUsuario() + "'";
	filtro = filtro + " AND NME_PROJETO='" + bean.getNomeProjeto() + "'";

	this.db.transaction(function (transaction) {
		
	    var query="DELETE FROM T008_SIMULACOES WHERE " + filtro +";";
	    //alert("Query: " + query);
		
        transaction.executeSql(query, [],
                function (transaction, resultSet) {
                        
                      return true;
                });
    	});
};