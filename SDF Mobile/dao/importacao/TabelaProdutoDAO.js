/**
 * Constructor description
 * @author Thiago Cavalari
 * @class
 * Class TabelaProdutoDAO
 */
function TabelaProdutoDAO(database)
{
	this.db = database;
}

TabelaProdutoDAO.prototype = new ProdutoBean();

/**
 * Method description
 * @param cabo
 * @return The cabo value
 */
TabelaProdutoDAO.prototype.getFamilia = function(cabo) {
	//alert('Teste: ' + parseInt(cabo)%1000);
    if(parseInt(cabo)<1000)
    {
    	return cabo;
    }
    else
    {
    	return parseInt(cabo)%1000;
    }
};

/**
 * Method description
 * @param int codigoFamilia
 * @return The ProdutoBean value
 */
TabelaProdutoDAO.prototype.getByFamilia = function(codigoFamilia) {
		
	var filtro = "";
	
	filtro = filtro + "NMR_FAMILIA_PRODUTO='" + this.getFamilia(codigoFamilia) + "'";

	this.db.transaction(function (transaction) {
		
	    var query="SELECT * FROM T003_PRODUTOS WHERE " + filtro +";";
	    alert("Query: " + query);
		
        transaction.executeSql(query, [],
                function (transaction, resultSet) {
                      var string = "";
                        
                      var row = resultSet.rows.item(0);
                      alert("Tabela:" + row['NMR_FAMILIA_PRODUTO']);
				                        
                      return row;
                });
    	});	
};

/**
 * Method description
 * @param DimensionamentoBean bean
 * @param double secaoCabo
 * @return The ProdutoBean value
 */
TabelaProdutoDAO.prototype.getCabo = function(bean, secaoCabo) {
		
	var filtro = "";
	
	filtro = filtro + "NMR_FAMILIA_PRODUTO='" + this.getFamilia(bean.getCaboSelecionado()) + "'";
	filtro = filtro + " AND NMR_NUMERO_CONDUTORES_FASE='" + this.getFamilia(bean.getNumeroCondutores()) + "'";
	filtro = filtro + " AND NME_TENSAO_PRODUTO='" + this.getFamilia(bean.getTensaoIsolamento()) + "'";
	
	var aluminio = "AL";
	//MATERIAL_CONDUTOR[ALUMINIO].description
	//alert('Static: ' + ALUMINIO);
	
	if(bean.getMaterialCondutor() == ALUMINIO)
	{
		filtro = filtro + " AND NME_MATERIAL_CONDUTOR_FASE='" + aluminio + "'";
	}
	else
	{
		filtro = filtro + " AND NME_MATERIAL_CONDUTOR_FASE!='" + aluminio + "'";
	}
	
	if(secaoCabo > 0)
	{
		filtro = filtro + " AND NME_SECAO_CONDUTOR_FASE='" + secaoCabo + "'";
	}

	this.db.transaction(function (transaction) {
		
	    var query="SELECT * FROM T003_PRODUTOS WHERE " + filtro +";";
	    alert("Query: " + query);
	    
        transaction.executeSql(query, [],
                function (transaction, resultSet) {
                    var minSecao = Number.MAX_VALUE;
                    var maxSecao = 0;
                    
                    var ProdutoBean = new ProdutoBean();                  
			
                    if(resultSet.rows.length > 0)
                    {
                        for (var i=0; i<resultSet.rows.length; i++) {

                        		ProdutoBean.setSecaoCondutorFase(secaoCondutorFase);
                                var row = resultSet.rows.item(i);                                
                                ProdutoBean.setSecaoCondutorFase(row['NME_UND_SECAO_CONDUTOR_FASE']);
                                
                                //VERIFICA MENOR
                                if(ProdutoBean.getSecaoCondutorFaseDouble() < minSecao)
                                {
                                	minSecao = ProdutoBean.getSecaoCondutorFaseDouble();
                                }
                                
                                //VERIFICA A MAIOR
                                if(ProdutoBean.getSecaoCondutorFaseDouble() > maxSecao)
                                {
                                	maxSecao = ProdutoBean.getSecaoCondutorFaseDouble();
                                }
                                
                                alert("Tabela:" + row['NME_TABELA'] + " - Secao: " + row['NMR_SECAO']  + " - VLR_A: " + row['VLR_A']);
                                
                        }
                        
                        produto.setT003_PRODUTOS(resultSet.rows.item(0));
                        produto.setSecaoMaxima(maxSecao);
                        produto.setSecaoMinima(minSecao);
                        
                    }                       
                });	    
    	});
	
	return produto;
};

/**
 * Method description
 * @param int tensaoIsolamento
 * @return The ProdutoBean value
 */
TabelaProdutoDAO.prototype.getTensaoIsolamentoDesc = function(tensaoIsolamento) {
	var desc = "";
	
	if(tensaoIsolamento == TensaoIsolamento._450V_750V.value)
	{
		desc = "450/750";
	}
	else if(tensaoIsolamento == TensaoIsolamento._06KV_1KV.value)
	{
		desc = "0.6/1";
	}
	else if(tensaoIsolamento == TensaoIsolamento._3_6KV_6KV.value)
	{
		desc = "3.6/6";
	}
	else if(tensaoIsolamento == TensaoIsolamento._6KV_10KV.value)
	{
		desc = "6/10";
	}
	else if(tensaoIsolamento == TensaoIsolamento._8_7KV_15KV.value)
	{
		desc = "8.7/15";
	}	
	else if(tensaoIsolamento == TensaoIsolamento._12KV_20KV.value)
	{
		desc = "12/20";
	}
	else if(tensaoIsolamento == TensaoIsolamento._15KV_25KV.value)
	{
		desc = "15/25";
	}
	else if(tensaoIsolamento == TensaoIsolamento._20KV_35KV.value)
	{
		desc = "20/35";
	}
	
	if(desc == "")
	{
		return "A tensão de isolamento é inválida ou inexistente: " + tensaoIsolamento;
	}
	
	return desc;
};