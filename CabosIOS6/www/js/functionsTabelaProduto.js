TIPO_MATERIAL_ISOLACAO_PE = "PE";
TIPO_MATERIAL_ISOLACAO_EPR = "EPR";
TIPO_MATERIAL_ISOLACAO_PVC = "PVC";
TIPO_MATERIAL_ISOLACAO_XLP = "XLP";
TIPO_MATERIAL_ISOLACAO_XLPE = "XLPE";


/**
 * Verifica se o material da isolaÁ„o È EPR.
 * @return valor booleano
 */
function isMaterialIsolacaoEPR()
{
    var arrayProdutoBean = document.getElementById("arrayProdutoBean");
    var tipoMaterialIsolacao = arrayProdutoBean.options["NME_TIPO_MATERIAL_ISOLACAO"].value;
    
    return tipoMaterialIsolacao == TIPO_MATERIAL_ISOLACAO_EPR;
}

/**
 * Verifica se o material da isolaÁ„o È XLPE.
 * @return valor booleano
 */
function isMaterialIsolacaoXLPE()
{
    var arrayProdutoBean = document.getElementById("arrayProdutoBean");
    var tipoMaterialIsolacao = arrayProdutoBean.options["NME_TIPO_MATERIAL_ISOLACAO"].value;
    
    return tipoMaterialIsolacao == TIPO_MATERIAL_ISOLACAO_XLPE || tipoMaterialIsolacao == TIPO_MATERIAL_ISOLACAO_XLP;
}

/**
 * Verifica se o material da isolaÁ„o È PVC.
 * @return valor booleano
 */
function isMaterialIsolacaoPVC()
{
    var arrayProdutoBean = document.getElementById("arrayProdutoBean");
    var tipoMaterialIsolacao = arrayProdutoBean.options["NME_TIPO_MATERIAL_ISOLACAO"].value;
    
    return tipoMaterialIsolacao == TIPO_MATERIAL_ISOLACAO_PVC;
}

/**
 * Verifica se o material da isolaÁ„o È XLP.
 * @return valor booleano
 */
function isMaterialIsolacaoXLP()
{
    var arrayProdutoBean = document.getElementById("arrayProdutoBean");
    var tipoMaterialIsolacao = arrayProdutoBean.options["NME_TIPO_MATERIAL_ISOLACAO"].value;
    
    return tipoMaterialIsolacao ==  TIPO_MATERIAL_ISOLACAO_XLP;
}

/**
 * Verifica se o material da isolaÁ„o È PE.
 * @return valor booleano
 */
function isMaterialIsolacaoPE()
{
    var arrayProdutoBean = document.getElementById("arrayProdutoBean");
    var tipoMaterialIsolacao = arrayProdutoBean.options["NME_TIPO_MATERIAL_ISOLACAO"].value;
    
    return tipoMaterialIsolacao == TIPO_MATERIAL_ISOLACAO_PE;
}

function getSecaoCondutorFaseDouble()
{
    if (!secaoCondutorFase.trim().equals("")) {
        return Double.parseDouble(secaoCondutorFase);
    } else {
        return 0;
    }
}

function getCaboDimensionamentoCalculo(secaoCabo)
{
    var tipoProduto = $("#cableList").val();
    var nivelTensao = $("#systemVoltage").val();
    var caboSelecionado = $("#caboSelecionado").val();
    var tensaoIsolamento = $("#isolationVoltage").val();
    var materialCondutor = $("#cableMaterial").val();
    var numeroCondutores = $("#conductorNumber").val();
	
    var filtro = "";
    
	//filtro = filtro + "NMR_FAMILIA_PRODUTO='" + getFamilia(caboSelecionado) + "'";
	//filtro = filtro + " AND NMR_NUMERO_CONDUTORES_FASE='" + numeroCondutores + "'";
	//filtro = filtro + " AND NME_TENSAO_PRODUTO='" + getTensaoIsolamentoDesc(tensaoIsolamento) + "'";
    
	
	var aluminio = "AL";
	//MATERIAL_CONDUTOR[ALUMINIO].description
	//alert('Static: ' + ALUMINIO);
	
	if(materialCondutor == ALUMINIO)
	{
		//filtro = filtro + " AND NME_MATERIAL_CONDUTOR_FASE='" + aluminio + "'";
        filtro = filtro + '"NME_MATERIAL_CONDUTOR_FASE,=,'+ aluminio + '"';
	}
	else
	{
		//filtro = filtro + " AND NME_MATERIAL_CONDUTOR_FASE!='" + aluminio + "'";
        filtro = filtro + '"NME_MATERIAL_CONDUTOR_FASE,!=,'+ aluminio + '"';
	}
	
	if(secaoCabo > 0)
	{
		//filtro = filtro + " AND NME_SECAO_CONDUTOR_FASE='" + secaoCabo.toFixed(0) + "'";
        filtro = filtro + '"NME_SECAO_CONDUTOR_FASE,=,'+ secaoCabo.toFixed(0) + '"';
	}
    
    filtro = '"NMR_FAMILIA_PRODUTO,=,'+getFamilia(caboSelecionado)+'","NMR_NUMERO_CONDUTORES_FASE,=,'+numeroCondutores+'","NME_TENSAO_PRODUTO,=,'+getTensaoIsolamentoDesc(tensaoIsolamento)+'"';    
    
    alert("Filtro: " + filtro);    

    var minSecao = Number.MAX_VALUE;
    var maxSecao = 0;
    
    //var array5 = selectXML(xmlT003_PRODUTO, "*", filtro);
    
    /*var array5 = selectXML(xmlT003_PRODUTO, "*", "NME_MATERIAL_CONDUTOR_FASE,!=,"+aluminio, "NMR_FAMILIA_PRODUTO,=,"+getFamilia(caboSelecionado),"NMR_NUMERO_CONDUTORES_FASE,=,"+numeroCondutores,"NME_TENSAO_PRODUTO,=,"+getTensaoIsolamentoDesc(tensaoIsolamento));*/
    
    var array5 = selectXML(xmlT003_PRODUTO, "*", "NMR_FAMILIA_PRODUTO,=,"+getFamilia(caboSelecionado),"NMR_NUMERO_CONDUTORES_FASE,=,"+numeroCondutores,"NME_TENSAO_PRODUTO,=,"+getTensaoIsolamentoDesc(tensaoIsolamento));
    
    //var array5 = selectXML(xmlT003_PRODUTO, "*", "NME_TENSAO_PRODUTO,=,"+getTensaoIsolamentoDesc(tensaoIsolamento));
    
    alert("Tamanho Array: " + array5.length)
    
    for(var count = 0; count < array5.length; count++)
    {
        //alert(array5[count]["COD_PRODUTO"]);
        
        secaoCondutorFase = array5[count]["NME_SECAO_CONDUTOR_FASE"];
        //VERIFICA MENOR
        if(secaoCondutorFase < minSecao)
        {
            minSecao = secaoCondutorFase;
        }
        
        //VERIFICA A MAIOR
        if(secaoCondutorFase > maxSecao)
        {
            maxSecao = secaoCondutorFase;
        }
    }
    
    for(var nome_campo in array5[0])
    {
        if(nome_campo == "DSC_PRODUTO")
        {
            alert("Nome campo: " + nome_campo + " - Valor: " + array5[0][nome_campo]);
        }
        
        arrayProdutoBean[nome_campo] = array5[0][nome_campo];
        //$("#arrayProdutoBean").append(new Option(array5[0][nome_campo],nome_campo, false, false));
    }
    
    //$("#arrayProdutoBean").append(new Option(maxSecao,"SecaoMaxima", false, false));
    arrayProdutoBean["SecaoMaxima"] = maxSecao;
    
    //$("#arrayProdutoBean").append(new Option(minSecao,"SecaoMinima", false, false));
    arrayProdutoBean["SecaoMinima"] = minSecao;
    
    
    //alert("Filtro: " + filtro);
//    db.transaction(function(tx){
//                   
//        var query="SELECT * FROM T003_PRODUTOS WHERE " + filtro +";";
//        alert("Query: " + query);
//        
//        tx.executeSql(query,[],function(tx,rs){
//           var minSecao = Number.MAX_VALUE;
//           var maxSecao = 0;
//           
//           //var ProdutoBean = new ProdutoBean();
//                      
//           if(rs.rows.length > 0)
//           {
//               for(i = 0; i < rs.rows.length; i++)
//               {
//                   secaoCondutorFase = rs.rows.item(i)["NME_SECAO_CONDUTOR_FASE"];
//                   //VERIFICA MENOR
//                   if(secaoCondutorFase < minSecao)
//                   {
//                       minSecao = secaoCondutorFase;
//                   }
//                   
//                   //VERIFICA A MAIOR
//                   if(secaoCondutorFase > maxSecao)
//                   {
//                       maxSecao = secaoCondutorFase;
//                   }
//               }
//                      
//                for(var nome_campo in rs.rows.item(0))
//                {
//                      if(nome_campo == "NME_TIPO_MATERIAL_ISOLACAO")
//                      {
//                          alert("Nome campo: " + nome_campo + " - Valor: " + rs.rows.item(0)[nome_campo]);
//                      }
//                      
//                    $("#arrayProdutoBean").append(new Option(rs.rows.item(0)[nome_campo],nome_campo, false, false));
//                }
//                      
//                $("#arrayProdutoBean").append(new Option(maxSecao,"SecaoMaxima", false, false));
//                $("#arrayProdutoBean").append(new Option(minSecao,"SecaoMinima", false, false));
//                      
//                //var arrayProdutoBean = document.getElementById("arrayProdutoBean");
//                //var tipoMaterialIsolacao = arrayProdutoBean.options['NME_TIPO_MATERIAL_ISOLACAO'].text;
//                      
//                //alert("tipoMaterialIsolacao: " + tipoMaterialIsolacao);
//                      
//               //produto.setT003_PRODUTOS(resultSet.rows.item(0));
//               //produto.setSecaoMaxima(maxSecao);
//               //produto.setSecaoMinima(minSecao);
//           }                       
//       });
//    });
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