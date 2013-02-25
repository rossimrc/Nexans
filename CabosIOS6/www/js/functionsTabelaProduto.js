function getCaboDimensionamentoCalculo()
{
    
	var filtro = "";
    
    var tipoProduto = $("#cableList").val();
    var nivelTensao = $("#systemVoltage").val();
    var caboSelecionado = $("#caboSelecionado").val();
    var tensaoIsolamento = $("#isolationVoltage").val();
    var materialCondutor = $("#cableMaterial").val();
    var numeroCondutores = $("#conductorNumber").val();
	
	filtro = filtro + "NMR_FAMILIA_PRODUTO='" + getFamilia(caboSelecionado) + "'";
	filtro = filtro + " AND NMR_NUMERO_CONDUTORES_FASE='" + numeroCondutores + "'";
	filtro = filtro + " AND NME_TENSAO_PRODUTO='" + tensaoIsolamento() + "'";
	
	var aluminio = "AL";
	//MATERIAL_CONDUTOR[ALUMINIO].description
	//alert('Static: ' + ALUMINIO);
	
	if(materialCondutor == ALUMINIO)
	{
		filtro = filtro + " AND NME_MATERIAL_CONDUTOR_FASE='" + aluminio + "'";
	}
	else
	{
		filtro = filtro + " AND NME_MATERIAL_CONDUTOR_FASE!='" + aluminio + "'";
	}
	
	if(secaoCabo > 0)
	{
		filtro = filtro + " AND NME_SECAO_CONDUTOR_FASE='" + secaoCabotoFixed(0) + "'";
	}
    
	this.db.transaction(function (transaction) {
                        
        var query="SELECT * FROM T003_PRODUTOS WHERE " + filtro +";";
        alert("Query: " + query);
        
        tx.executeSql(query,[],function(tx,rs){
           var minSecao = Number.MAX_VALUE;
           var maxSecao = 0;
           
           //var ProdutoBean = new ProdutoBean();
           
           if(rs.rows.length > 0)
           {
               for(i = 0; i < rs.rows.length; i++)
               {
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
               }
                      
                for(var nome_campo in rs.rows.item(0))
                {
                    $("#arrayProdutoBean").append(new Option(rs.rows.item(0)[nome_campo],nome_campo, false, false));
                }
                      
                $("#arrayProdutoBean").append(new Option(maxSecao,"SecaoMaxima", false, false));
                $("#arrayProdutoBean").append(new Option(minSecao,"SecaoMinima", false, false));
                      
                var arrayProdutoBean = document.getElementById("arrayProdutoBean");
                var tipoMaterialIsolacao = arrayProdutoBean.options["NME_TIPO_MATERIAL_ISOLACAO"].value;
                      
                alert("tipoMaterialIsolacao: " + tipoMaterialIsolacao);
                      
               //produto.setT003_PRODUTOS(resultSet.rows.item(0));
               //produto.setSecaoMaxima(maxSecao);
               //produto.setSecaoMinima(minSecao);
           }                       
       });
    });
}

function getFamilia(cabo)
{
	//alert('Teste: ' + parseInt(cabo)%1000);
    if(parseInt(cabo)<1000)
    {
    	return cabo;
    }
    else
    {
    	return parseInt(cabo)%1000;
    }
}

function getTensaoIsolamentoDesc(tensaoIsolamento)
{
    var tensaoIsolamento = $("#isolationVoltage").val();
    var desc = "";
    
    if (tensaoIsolamento == _450V_750V)
    {
        desc = "450/750";
    }
    else if (tensaoIsolamento == _06KV_1KV)
    {
        desc = "0.6/1";
    }
    else if (tensaoIsolamento == _3_6KV_6KV)
    {
        desc = "3.6/6";
    }
    else if (tensaoIsolamento == _6KV_10KV)
    {
        desc = "6/10";
    }
    else if (tensaoIsolamento == _8_7KV_15KV)
    {
        desc = "8.7/15";
    }
    else if (tensaoIsolamento == _12KV_20KV)
    {
        desc = "12/20";
    }
    else if (tensaoIsolamento == _15KV_25KV)
    {
        desc = "15/25";
    }
    else if (tensaoIsolamento == _20KV_35KV)
    {
        desc = "20/35";
    }
    
    return desc;
}