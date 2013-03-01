var lastFatorAgrupamento = "";
var lastFatorResistividade = "";
var lastFatorTemperatura = "";

//function aplicarFatorCorrecao(corrente, numeroCabos, secaoCondutor)
//{
//    calcularAgrupamento(numeroCabos);
//    var numCircuitos = getNumeroCircuitos();
//    
//    setLastFatorResistividade(getFatorCorrecaoResistividade());
//    lastFatorTemperatura = getFatorCorrecaoTemperatura();
//    
//    if (numCircuitos > 0)
//    {
//        lastFatorAgrupamento = getFatorCorrecaoAgrupamento(numCircuitos, fatorAgrupamento.getNumeroBandejas());
//    }
//    else
//    {
//        lastFatorAgrupamento = 1;
//    }
//    
//    return corrente / (getLastFatorResistividade() * lastFatorTemperatura * lastFatorAgrupamento * numeroCabos);
//}

function aplicarFatorCorrecao(corrente, numeroCabos, secaoCondutor, fatorCanaleta)
{
    var numCircuitos = calcularAgrupamentoFatorAgrupamento(numeroCabos);
    //var numCircuitos = getNumeroCircuitos();
    
    lastFatorResistividade = getFatorCorrecaoResistividade();
    lastFatorTemperatura = getFatorCorrecaoTemperatura();
    
    if (numCircuitos > 0)
    {
        lastFatorAgrupamento = getFatorCorrecaoAgrupamento(numCircuitos, dimensionamento.getNumeroBandejas());
    }
    else
    {
        lastFatorAgrupamento = 1;
    }
    
    return corrente / (lastFatorResistividade * lastFatorTemperatura * lastFatorAgrupamento * numeroCabos * fatorCanaleta);
}

function calcularMaximaCorrenteConducao(corrente, numeroCabos)
{
    var numeroCircuitos = calcularAgrupamentoFatorAgrupamento(numeroCabos);
    var numCircuitos = $("#numeroCircuitos").val();
    
//    lastFatorResistividade = getFatorCorrecaoResistividade();
//    lastFatorTemperatura = getFatorCorrecaoTemperatura();
//    lastFatorAgrupamento = 1;
    
    if (numCircuitos > 0)
    {
        lastFatorAgrupamento = getFatorCorrecaoAgrupamento(numCircuitos, dimensionamento.getNumeroBandejas());
    }
    
    return corrente * lastFatorResistividade * lastFatorTemperatura * numeroCabos * lastFatorAgrupamento;
}

function calcularMaximaCorrenteConducao(corrente, numeroCabos, fatorCanaleta)
{
    var numeroCircuitos = calcularAgrupamentoFatorAgrupamento(numeroCabos);
    var numCircuitos = $("#numeroCircuitos").val();
    
//    lastFatorResistividade = getFatorCorrecaoResistividade();
//    lastFatorTemperatura = getFatorCorrecaoTemperatura();
//    lastFatorAgrupamento = 1;
    
    if (numCircuitos > 0)
    {
        lastFatorAgrupamento = getFatorCorrecaoAgrupamento(numCircuitos, dimensionamento.getNumeroBandejas());
    }
    
    return corrente * lastFatorResistividade * lastFatorTemperatura * numeroCabos * lastFatorAgrupamento * fatorCanaleta;
}

function getFatorCorrecaoTemperatura()
{
    alert("getFatorCorrecaoTemperatura");
    
    var arrayProdutoBean = document.getElementById("arrayProdutoBean");
    var tipoMaterialIsolacao = arrayProdutoBean.options["NME_TIPO_MATERIAL_ISOLACAO"].text;
    
    var fator = 1;
    
    dimensionamento = new DimensionamentoBean();
    dimensionamento.setTipoProduto($("#cableList").val());
    dimensionamento.setNivelTensao($("#systemVoltage").val());
    dimensionamento.setNumeroCondutores($("#conductorNumber").val());
    dimensionamento.setPossibilidadeInstalacao($("#possibilidadeInstalacao").val());
    dimensionamento.setlocalInstalacao($("#localInstalacao").val());
    
    // Recupera a temperatura ambiente ao ar/solo.
    var temperaturaMaximaCondutor = $("#maximumTemperature").val();
    //var temperaturaAmbiente = dimensionamento.getTemperaturaArSolo();
    var temperaturaAmbiente = $("#temperaturaArSolo").val();
    
    if (dimensionamento.isCabosEnergia())
    {
        if (dimensionamento.isBaixaTensao())
        {
            //Tabela40 tabela40 = new Tabela40();
            
            // Verifica se a instalaÁ„o È no solo ou ambiente.
            if (dimensionamento.getPossibilidadeInstalacao() == SUBTERRANEA)
            {
                if (temperaturaAmbiente != 20)
                {
                    //var tipoMaterialIsolacao =
                    //fator = getFatorCorrecaoSolo(temperaturaAmbiente, produto.getTipoMaterialIsolacao()); TABELA_40_SOLO
                    
                    getFatorCorrecaoTabela40(temperaturaAmbiente, tipoMaterialIsolacao, "40_02");
                    fator = $("#fator").val();
                }
            }
            else
            {
                if (temperaturaAmbiente != 30)
                {
                    //getDebug().logVariable("Tabela", "tabela40");
                    //fator = tabela40.getFatorCorrecaoAmbiente(temperaturaAmbiente, produto.getTipoMaterialIsolacao()); TABELA_40_AMBIENTE
                    getFatorCorrecaoTabela40(temperaturaAmbiente, tipoMaterialIsolacao, "40_01");
                    fator = $("#fator").val();
                }
            }
            
        }
        else if (dimensionamento.isMediaTensao())
        {
            //Tabela32 tabela32 = new Tabela32();
            
            if (dimensionamento.isEnterrado())
            {
                if (temperaturaAmbiente != "20")
                {
                    //getDebug().logVariable("Tabela", "tabela32");
                    //fator = tabela32.getFatorCorrecaoSolo(temperaturaAmbiente, tipoMaterialIsolacao, temperaturaMaximaCondutor); //TABELA_32_SOLO "32_02"
                    getFatorCorrecaoTabela32("32_02", temperaturaAmbiente, tipoMaterialIsolacao, temperaturaMaximaCondutor);
                    fator = $("#fator").val();
                }
            }
            else if (temperaturaAmbiente != "30")
            {
                //getDebug().logVariable("Tabela", "tabela32");
                //fator = tabela32.getFatorCorrecaoAmbiente(temperaturaAmbiente, tipoMaterialIsolacao, temperaturaMaximaCondutor); //TABELA_32_AMBIENTE "32_01"
                getFatorCorrecaoTabela32("32_01", temperaturaAmbiente, tipoMaterialIsolacao, temperaturaMaximaCondutor);
                fator = $("#fator").val();
            }
        }
    }
    else if (dimensionamento.isCabosNavais())
    {
        if (temperaturaAmbiente != "45")
        {
            //Table01 table01 = new Table01();
            //getDebug().logVariable("Tabela", "table01");
            //fator = table01.getFator(dimensionamento.getTemperaturaMaximaCondutor(), temperaturaAmbiente);
            getFatorTable01(temperaturaMaximaCondutor, temperaturaAmbiente);
            fator = $("#fator").val();
        }
    }
    
    //getDebug().logVariable("fator", fator);
    //getDebug().logMethodExit();
    //return fator;
    $("#fator").val(fator);
}

function getFatorCorrecaoTabela40(temperatura, materialIsolacao, nomeTabela)
{
    var fator = 1;
    
    db.transaction(function(tx){
        tx.executeSql("SELECT * FROM TAB_AUXILIAR_07 WHERE NME_TABELA = ? AND VLR_TEMPERATURA = ? ",[nomeTabela,temperatura],function(tx,rs){
              
              if(rs.rows.length >0)
              {
                  if (materialIsolacao == "EPR" || materialIsolacao == "XLPE" || materialIsolacao == "XLP")
                  {
                      fator = rs.rows.item(0).VLR_EPR_XLPE;
                  }
                  else if (materialIsolacao == "PVC")
                  {
                      fator = rs.rows.item(0).VLR_PVC
                  }
              }
                      
              $("#fator").val(fator);
         });
    },errorCB);
}

function getFatorCorrecaoTabela32(tableName, temperaturaAmbiente, tipoMaterialIsolacao, temperaturaCondutor)
{
    var fator = 0;
    
    /*Table16PKBean pkBean = new Table16PKBean();
    pkBean.setNomeTabela(tableName);
    pkBean.setTemperatura(temperaturaAmbiente);
    
    Table16Bean bean = getByID(pkBean);*/
    
    db.transaction(function(tx){
        tx.executeSql("SELECT * FROM TAB_AUXILIAR_16 WHERE NME_TABELA = ? AND NMR_TEMPERATURA = ? ",[tableName,temperatura],function(tx,rs){
             
             if(rs.rows.length >0)
             {
                if (tipoMaterialIsolacao == "EPR" && temperaturaCondutor == _105C)
                {
                    fator = rs.rows.item(0).NMR_EPR_105;
                    //bean.getValorEPR105();
                }
                else
                {
                    fator = rs.rows.item(0).NMR_EPR_XLPE;
                    //bean.getValorEPRXLPE();
                }
             }
             
             $("#fator").val(fator);
        });
    },errorCB);
}

function getFatorTable01(temperaturaCondutor, temperaturaAmbiente)
{
    
    var fator = 0;
    
    //id = NMR_GRAUS
    //Table01Bean bean = getByID(temperaturaCondutor);
    db.transaction(function(tx){
        tx.executeSql("SELECT * FROM TAB_AUXILIAR_01 WHERE NMR_GRAUS = ? ",[temperaturaCondutor],function(tx,rs){
                     
            if(rs.rows.length >0)
            {
                if (temperaturaAmbiente == _35C)
                {
                    //fator = bean.getValor35Graus();
                    fator = rs.rows.item(0).VLR_30_GRAUS;
                }
                else if (temperaturaAmbiente == _40C)
                {
                    //fator = bean.getValor40Graus();
                    fator = rs.rows.item(0).VLR_40_GRAUS;
                }
                else if (temperaturaAmbiente == _45C)
                {
                    //fator = bean.getValor45Graus();
                    fator = rs.rows.item(0).VLR_45_GRAUS;
                }
                else if (temperaturaAmbiente == _50C)
                {
                    //fator = bean.getValor50Graus();
                    fator = rs.rows.item(0).VLR_50_GRAUS;
                }
                else if (temperaturaAmbiente == _55C)
                {
                    //fator = bean.getValor55Graus();
                    fator = rs.rows.item(0).VLR_55_GRAUS;
                }
                else if (temperaturaAmbiente == _60C)
                {
                    //fator = bean.getValor60Graus();
                    fator = rs.rows.item(0).VLR_60_GRAUS;
                }
                else if (temperaturaAmbiente == _65C)
                {
                    //fator = bean.getValor65Graus();
                    fator = rs.rows.item(0).VLR_65_GRAUS;
                }
                else if (temperaturaAmbiente == _70C)
                {
                    //fator = bean.getValor70Graus();
                    fator = rs.rows.item(0).VLR_70_GRAUS;
                }
                else if (temperaturaAmbiente == _75C)
                {
                    //fator = bean.getValor75Graus();
                    fator = rs.rows.item(0).valor75Graus;
                }
                else if (temperaturaAmbiente == _80C)
                {
                    //fator = bean.getValor80Graus();
                    fator = rs.rows.item(0).VLR_80_GRAUS;
                }
                else if (temperaturaAmbiente == _85C)
                {
                    //fator = bean.getValor85Graus();
                    fator = rs.rows.item(0).VLR_85_GRAUS;
                }
            }
            $("#fator").val(fator);
        });
    },errorCB);
}

function getFatorCorrecaoAgrupamento(numeroCircuitos, numeroBandejas)
{
    var arrayProdutoBean = document.getElementById("arrayProdutoBean");
    var tipoMaterialIsolacao = arrayProdutoBean.options["NME_TIPO_MATERIAL_ISOLACAO"].value;
    var numeroCircuitos = $("#numeroCircuitos").val();
    
    var fator = 1;
    
    dimensionamento = new DimensionamentoBean();
    dimensionamento.setTipoProduto($("#cableList").val());
    dimensionamento.setNivelTensao($("#systemVoltage").val());
    dimensionamento.setNumeroCondutores($("#conductorNumber").val());
    dimensionamento.setPossibilidadeInstalacao($("#possibilidadeInstalacao").val());
    dimensionamento.setlocalInstalacao($("#localInstalacao").val());
    dimensionamento.setQuantidadeCamadas($("#quantidadeCamadas").val());
    
    // Recupera a temperatura ambiente ao ar/solo.
    var temperaturaMaximaCondutor = $("#maximumTemperature").val();
    //var temperaturaAmbiente = dimensionamento.getTemperaturaArSolo();
    var temperaturaAmbiente = $("#temperaturaArSolo").val();
    
    //getDebug().logMethodEnter("getFatorCorrecaoAgrupamento");
    var fator = 1;
    
    if (dimensionamento.isCabosEnergia())
    {
        if (dimensionamento.isBaixaTensao())
        {
            if (dimensionamento.getQuantidadeCamadas() == 1 && !dimensionamento.isColunaD())
            {
                //Tabela42 tabela42 = new Tabela42();
                //getDebug().logVariable("Tabela", "tabela42");
                //fator = tabela42.getFatorAgrupamento(dimensionamento, numeroCircuitos);
                getFatorAgrupamentoTabela42(numeroCircuitos);
                fator = $("#fator").val();
                
            }
            else
            {
                if (dimensionamento.isColunaC() || dimensionamento.isColunaE() || dimensionamento.isColunaF())
                {
                    //Tabela43 tabela43 = new Tabela43();
                    //getDebug().logVariable("Tabela", "tabela43");
                    
                    if (numeroCircuitos > 1 && dimensionamento.getQuantidadeCamadas() > 1)
                    {
                        //fator = tabela43.getFatorAgrupamento(dimensionamento, numeroCircuitos);
                        getFatorAgrupamentoTabela43(numeroCircuitos);
                        fator = $("#fator").val();
                    }
                    
                }
                else if (dimensionamento.isColunaD())
                {
                    if (numeroCircuitos >= 2)
                    {
                        
                        if (dimensionamento.getLocalInstalacao() == DIRETAMENTE_ENTERRADOS)
                        {
                            //Tabela44 tabela44 = new Tabela44();
                            //getDebug().logVariable("Tabela", "tabela44");
                            //fator = tabela44.getFatorAgrupamento(dimensionamento, numeroCircuitos);
                            getFatorAgrupamentoTabela44(numeroCircuitos);
                            fator = $("#fator").val();
                        }
                        else if (dimensionamento.getLocalInstalacao() == ELETRODUTO)
                        {
                            //Tabela45 tabela45 = new Tabela45();
                            //getDebug().logVariable("Tabela", "tabela45");
                            //fator = tabela45.getFatorAgrupamento(dimensionamento, numeroCircuitos);
                            getFatorAgrupamentoTabela45(numeroCircuitos);
                            fator = $("#fator").val();
                        }
                    }
                }
            }
        }
        else if (dimensionamento.isMediaTensao())
        {
            if (dimensionamento.isEnterrado())
            {
                if (dimensionamento.isColunaH() || dimensionamento.isColunaI())
                {
                    if (dimensionamento.isEspacado() || dimensionamento.isTrifolio() || dimensionamento.isTripolar())
                    {
                        //Tabela38Media tabela38 = new Tabela38Media();
                        //fator = tabela38.getFatorAgrupamento(dimensionamento, numeroCircuitos, secao);
                        getFatorAgrupamentoTabela38(numeroCircuitos, secao);
                        fator = $("#fator").val();
                    }
                    else
                    {
                        if (numeroCircuitos > 1)
                        {
                            //fator = new Tabela44().getFatorAgrupamento(dimensionamento, numeroCircuitos);
                            getFatorAgrupamentoTabela44(numeroCircuitos);
                            fator = $("#fator").val();
                        }
                    }
                }
                else if (dimensionamento.isColunaF() || dimensionamento.isColunaG())
                {
                    if (dimensionamento.getPossibilidadeInstalacao() == BANCO_DUTOS_SOLO)
                    {
                        //Tabela37NBR14039 tabela37 = new Tabela37NBR14039();
                        //fator = tabela37.getFatorAgrupamento(dimensionamento, secao, numeroCircuitos);
                        getFatorAgrupamentoTabela37(secao, numeroCircuitos);
                        fator = $("#fator").val();
                    }
                    else {
                        // Eletroduto no solo.
                        if (numeroCircuitos > 1)
                        {
                            //fator = new Tabela45().getFatorAgrupamento(dimensionamento, numeroCircuitos);
                            getFatorAgrupamentoTabela45(numeroCircuitos);
                            fator = $("#fator").val();
                        }
                    }
                }
            }
            else
            {
                if (dimensionamento.isColunaC() || dimensionamento.isColunaD())
                {
                    if (dimensionamento.isColunaD())
                    {
                        //fator = new Tabela34().getFatorAgrupamento(dimensionamento, numeroCircuitos, numeroBandejas);
                        getFatorAgrupamentoTabela34(numeroCircuitos, numeroBandejas);
                        fator = $("#fator").val();
                    }
                    else
                    {
                        if (dimensionamento.isTripolar())
                        {
                            //fator = new Tabela36NBR14039().getFatorAgrupamento(dimensionamento, numeroCircuitos, numeroBandejas);
                            getFatorAgrupamentoTabela36(numeroCircuitos, numeroBandejas);
                            fator = $("#fator").val();
                        }
                        else if (dimensionamento.isTrifolio())
                        {
                            //fator = new Tabela35().getFatorAgrupamento(dimensionamento, numeroCircuitos, numeroBandejas);
                            getFatorAgrupamentoTabela35(numeroCircuitos, numeroBandejas);
                            fator = $("#fator").val();
                        }
                        else
                        {
                            //fator = new TabelaA8().getFatorAgrupamento(dimensionamento, numeroCircuitos, numeroBandejas);
                            getFatorAgrupamentoTabelaA8(numeroCircuitos,numeroBandejas);
                            fator = $("#fator").val();
                        }
                    }
                    
                }
                else if (dimensionamento.isColunaB())
                {
                    //Tabela34 tabela34 = new Tabela34();
                    //fator = tabela34.getFatorAgrupamento(dimensionamento, numeroCircuitos, numeroBandejas);
                    
                    getFatorAgrupamentoTabela34(numeroCircuitos, numeroBandejas);
                    fator = $("#fator").val();
                }
                else if (dimensionamento.isColunaA() && dimensionamento.isUnipolar())
                {
                    if (dimensionamento.isTrifolio())
                    {
                        //Tabela35 tabela35 = new Tabela35();
                        //fator = getFatorAgrupamento(dimensionamento, numeroCircuitos, numeroBandejas);
                        
                        getFatorAgrupamentoTabela35(numeroCircuitos, numeroBandejas);
                        fator = $("#fator").val();
                    }
                    else
                    {
                        //fator = new TabelaA8().getFatorAgrupamento(dimensionamento, numeroCircuitos, numeroBandejas);
                        
                        getFatorAgrupamentoTabelaA8(numeroCircuitos,numeroBandejas);
                        fator = $("#fator").val();
                    }
                }
                else
                {
                    if (dimensionamento.isEspacado())
                    {
                        //Tabela36NBR14039 tabela36 = new Tabela36NBR14039();
                        //fator = tabela36.getFatorAgrupamento(dimensionamento, numeroCircuitos, numeroBandejas);
                        
                        getFatorAgrupamentoTabela36(numeroCircuitos, numeroBandejas);
                        fator = $("#fator").val();
                    }
                    else
                    {
                        //fator = new TabelaA7().getFatorAgrupamento(dimensionamento, numeroCircuitos, numeroBandejas);
                        getFatorAgrupamentoTabelaA7(numeroCircuitos, numeroBandejas);
                        fator = $("#fator").val();
                    }
                }
            }
        }
    }
    else if (dimensionamento.isCabosNavais())
    {
        //fator = getFatorAgrupamentoNavalFatorCorrecao(numeroCircuitos, numeroBandejas);
        getFatorAgrupamentoNavalFatorCorrecao(numeroCircuitos, numeroBandejas);
        fator = $("#fator").val();
    }
    
    lastFatorAgrupamento = fator;
    
    //getDebug().logVariable("fator", fator);
    //getDebug().logMethodExit();
    $("#fator").val(fator);
    return fator;
}

function calcularFatorCorrecaoCanaleta(correnteCorrigida, rca, numeroCabos)
{
    var dimensionamento = getDimensionamentoTabelaUtil();
    var fator = 1;
    
    if (dimensionamento.getNumeroCircuitos(numeroCabos) > 1)
    {
        var nCond = 3;
        
        var oc = dimensionamento.getTemperaturaMaximaCondutor();
        var oa = dimensionamento.getTemperaturaArSolo(); // Temperatura
        // ambiente.
        var perimetro = (2 * dimensionamento.getAlturaCanaleta()) + dimensionamento.getLarguraCanaleta();
        var w = rca * Math.pow(correnteCorrigida, 2) * dimensionamento.getNumeroCircuitos(nCond);
        
        if (dimensionamento.isMediaTensao())
        {
            w = w * 1.02;
        }
        
        var dt = Math.floor((w / (3 * perimetro)) * Math.pow(10, -3));
        fator = Math.sqrt((oc - oa - dt) / (oc - oa));
    }
    
    fator = Math.floor(fator * 100) / 100;
    
    return fator;
}

function getFatorCorrecaoResistividade()
{
    
    //getDebug().logMethodEnter("getFatorCorrecaoResistividade");
    var dimensionamento = getDimensionamentoTabelaUtil();
    var fator = 1;
    
    if (dimensionamento.isCabosEnergia())
    {
        if (dimensionamento.getResistividadeTermica() > 0 && dimensionamento.getResistividadeTermica() != _2_5)
        {
            if (dimensionamento.isBaixaTensao())
            {
                //Tabela41 tabela41 = new Tabela41();
                //getDebug().logVariable("Tabela", "tabela41");
                //fator = tabela41.getFatorCorrecao(dimensionamento.getResistividadeTermica());
                
                fator = getFatorCorrecaoTabela41(dimensionamento.getResistividadeTermica());
            }
            else if (dimensionamento.isMediaTensao())
            {
                //Tabela33 tabela33 = new Tabela33();
                //getDebug().logVariable("Tabela", "tabela33");
                //fator = tabela33.getFatorCorrecao(dimensionamento);
                fator = getFatorCorrecaoTabela33();
            }
        }
    }
    
    //getDebug().logVariable("fator", fator);
    //getDebug().logMethodExit();
    return fator;
}

function getFatorCorrecaoTabela33()
{
    var dimensionamento = getDimensionamentoTabelaUtil();
    var fator = 0;
    var metodo = "";
    
    if (dimensionamento.isColunaF() || dimensionamento.isColunaG())
    {
        metodo = "F e G";
    }
    else if (dimensionamento.isColunaH() || dimensionamento.isColunaI())
    {
        metodo = "H e I";
    }
    
    //Table17Bean bean = getByID(metodo);
    db.transaction(function(tx){
        tx.executeSql("SELECT * FROM TAB_AUXILIAR_17 WHERE NME_RESISTIVIDADE = ? ",[metodo],function(tx,rs){

            if(rs.rows.length >0)
            {
                if (dimensionamento.getResistividadeTermica() == _1)
                {
                    //fator = bean.getValor1();
                      fator = rs.rows.item(0).VLR_1;
                }
                else if (dimensionamento.getResistividadeTermica() == _1_5)
                {
                    //fator = bean.getValor15();
                      fator = rs.rows.item(0).VLR_1_5;
                }
                else if (dimensionamento.getResistividadeTermica() == _2)
                {
                    //fator = bean.getValor2();
                      fator = rs.rows.item(0).VLR_2;
                }
                else if (dimensionamento.getResistividadeTermica() == _3)
                {
                    //fator = bean.getValor3();
                      fator = rs.rows.item(0).VLR_3;
                }
            }
            //return fator;
            $("#fator").val(fator);
        });
    },errorCB);
    
    return $("#fator").val();
}

function getFatorCorrecaoTabela41(resistividadeTermica)
{
    var fator = 0;
    
//    List<Table06Bean> list;
//    try {
//        list = dao.getByResistividade(getResistividade(resistividadeTermica));
//        
//    } catch (SDFDAOException e) {
//        getLogger().error(e);
//        throw new SDFBusinessException("Erro ao carregar os dados.", e);
//    }
//    
//    if (list.size() > 0) {
//        fator = list.get(0).getFatorCorrecao();
//    }
    var resistividade = getResistividadeTabela41(resistividadeTermica);
    
    db.transaction(function(tx){
        tx.executeSql("SELECT * FROM TAB_AUXILIAR_06 WHERE VLR_RESISTIVIDADE_TERMICA = ? ",[resistividade],function(tx,rs){

            if(rs.rows.length >0)
            {
                fator = rs.rows.item(0).VLR_FATOR_CORRECAO;
            }
    
            //return fator;
            $("#fator").val(fator);
        });
    },errorCB);
    
    return $("#fator").val();
}

function getResistividadeTabela41(opcao)
{
    var resistividade = 0;
    
    if (opcao == _1)
    {
        resistividade = "1";
    }
    else if (opcao == _1_5)
    {
        resistividade = "1.5f";
    }
    else if (opcao == _2)
    {
        resistividade = "2";
    }
    else if (opcao == _3)
    {
        resistividade = "3";
    }
    else if (opcao == _2_5)
    {
        resistividade = "2.5f";
    }
    
    return resistividade;
}

function getFatorAgrupamentoNavalFatorCorrecao(numeroCircuitos, numeroBandejas)
{
    var dimensionamento = getDimensionamentoTabelaUtil();
    var fator = 1;
    
    if (numeroBandejas == 1)
    {
        //getDebug().logVariable("Tabela", "table12");
        //fator = new Table12().getFatorCorrecao(dimensionamento, numeroCircuitos);
        getFatorCorrecaoTable12(numeroCircuitos);
        fator = $("#fator").val();
    }
    else if (!dimensionamento.isUnipolar())
    {
        if (dimensionamento.isColunaE())
        {
            //getDebug().logVariable("Tabela", "table13");
            fator = new Table13().getFatorCorrecao(dimensionamento, numeroCircuitos, numeroBandejas);
        }
        else if (dimensionamento.isColunaF()) {
            getDebug().logVariable("Tabela", "table11");
            fator = new Table11().getFatorCorrecao(dimensionamento, numeroCircuitos, numeroBandejas);
        }
    }
    
    return fator;
}

function getFatorCorrecaoTable13(numeroCircuitos, numeroBandejas)
{
    var dimensionamento = getDimensionamentoTabelaUtil();
    var fator = 1;
    
    //Table13PKBean pkBean = new Table13PKBean();
    //pkBean.setInstalacao(getFormaInstalacao(dimensionamento));
    //pkBean.setNumeroBandejas(numeroBandejas);
    var forma = getFormaInstalacaoTable13();
    
    //Table13Bean bean = getByID(pkBean);
    
    db.transaction(function(tx){
        tx.executeSql("SELECT * FROM TAB_AUXILIAR_13 WHERE NME_INSTALACAO = ? AND NMR_BANDEJAS = ? ",[forma,numeroBandejas],function(tx,rs){

            if(rs.rows.length >0)
            {
                switch (numeroCircuitos) {
                    case "1":
                        //fator = bean.getNumeroCabosBandeja1();
                          fator = rs.rows.item(0).NMR_CABOS_BANDEJA_1;
                        break;
                    case "2":
                        //fator = bean.getNumeroCabosBandeja2();
                          fator = rs.rows.item(0).NMR_CABOS_BANDEJA_2;
                        break;
                    case "3":
                        //fator = bean.getNumeroCabosBandeja3();
                          fator = rs.rows.item(0).NMR_CABOS_BANDEJA_3;
                        break;
                    case "4":
                        //fator = bean.getNumeroCabosBandeja4();
                          fator = rs.rows.item(0).NMR_CABOS_BANDEJA_4;
                        break;
                    case "5":
                    case "6":
                        //fator = bean.getNumeroCabosBandeja6();
                          fator = rs.rows.item(0).NMR_CABOS_BANDEJA_6;
                        break;
                    case "7":
                    case "8":
                    case "9":
                        //fator = bean.getNumeroCabosBandeja9();
                          fator = rs.rows.item(0).NMR_CABOS_BANDEJA_9;
                        break;
                }
            }
            //return fator;
            $("#fator").val(fator);
        });
    },errorCB);
}

function getFormaInstalacaoTable13()
{
    var dimensionamento = getDimensionamentoTabelaUtil();
    var forma = "";
    
    if (dimensionamento.getLocalInstalacao() == BANDEJA_PERFURADA)
    {
        if (dimensionamento.isOrientacaoHorizontal())
        {
            if (dimensionamento.isJustaposto())
            {
                forma = "Bandeja perfurada na horizontal com cabos multipolares justapostos";
            }
            else if (dimensionamento.isEspacado())
            {
                forma = "Bandeja perfurada na horizontal com cabos multipolares espaçados de 1De";
            }
        }
        else
        {
            if (dimensionamento.isJustaposto())
            {
                forma = "Bandeja perfurada na vertical com cabos multipolares justapostos";
            }
            else if (dimensionamento.isEspacado()) {
                forma = "Bandeja perfurada na vertical com cabos multipolares espaçados de 1De";
            }
        }
    }
    else if (dimensionamento.getLocalInstalacao() == PAREDES || dimensionamento.getLocalInstalacao() == ALVENARIA || dimensionamento.getLocalInstalacao() == LEITO || dimensionamento.getLocalInstalacao() == BANDEJA_NAO_PERFURADA) {
        
        if (dimensionamento.isOrientacaoHorizontal())
        {
            if (dimensionamento.isJustaposto())
            {
                forma = "Camada sobre paredes/Prateleira/Piso/Leitos/Bandeja não perfurada/ na horizontal com cabos multipolares justapostos";
            }
            else if (dimensionamento.isEspacado())
            {
                forma = "Camada sobre paredes/Prateleira/Piso/Leitos/Bandeja não perfurada/ na horizontal com cabos multipolares espaçados de 1De";
            }
        }
    }
    
    return forma;
}

function getFatorCorrecaoTable12(numeroCircuitos)
{
    var dimensionamento = getDimensionamentoTabelaUtil();
    var fator = 1;
    var forma = getFormaAgrupamentoTable12();
    //Table12Bean bean = getByID(getFormaAgrupamento(dimensionamento));
    
    db.transaction(function(tx){
        tx.executeSql("SELECT * FROM TAB_AUXILIAR_12 WHERE NME_FORMA_AGRUPAMENTO = ? ",[forma],function(tx,rs){

            if(rs.rows.length >0)
            {
                switch (numeroCircuitos) {
                    case "1":
                        fator = rs.rows.item(0).NMR_CIRCUITO_1;
                        break;
                    case "2":
                        fator = rs.rows.item(0).NMR_CIRCUITO_2;
                        break;
                    case "3":
                        fator = rs.rows.item(0).NMR_CIRCUITO_3;
                        break;
                    case "4":
                        fator = rs.rows.item(0).NMR_CIRCUITO_4;
                        break;
                    case "5":
                        fator = rs.rows.item(0).NMR_CIRCUITO_5;
                        break;
                    case "6":
                            fator = rs.rows.item(0).NMR_CIRCUITO_6;
                        break;
                    case "7":
                          fator = rs.rows.item(0).NMR_CIRCUITO_7;
                        break;
                    case "8":
                          fator = rs.rows.item(0).NMR_CIRCUITO_8;
                        break;
                    case "9":
                    case "10":
                    case "11":
                          fator = rs.rows.item(0).NMR_CIRCUITO_9;
                        break;
                    case "12":
                    case "13":
                    case "14":
                    case "15":
                        //fator = bean.getNumeroCircuito12();
                          fator = rs.rows.item(0).NMR_CIRCUITO_12;
                        break;
                    case "16":
                    case "17":
                    case "18":
                    case "19":
                        //fator = bean.getNumeroCircuito16();
                          fator = rs.rows.item(0).NMR_CIRCUITO_16;
                        break;
                    default:
                        //fator = bean.getNumeroCircuito20();
                          fator = rs.rows.item(0).NMR_CIRCUITO_20;
                        break;
                }
            }
                
            //return fator;
            $("#fator").val(fator);
        });
    },errorCB);
}

function getFormaAgrupamentoTable12()
{
    var dimensionamento = getDimensionamentoTabelaUtil();
    var forma = "";
    
    if (dimensionamento.isColunaC())
    {
        if (dimensionamento.getLocalInstalacao() == BANDEJA_NAO_PERFURADA || dimensionamento.getLocalInstalacao() == PAREDES || dimensionamento.getLocalInstalacao() == ALVENARIA) {
            forma = "Camada única sobre parede, piso, ou em bandeja não perfurada ou prateleira";            
        }
        else if (dimensionamento.getLocalInstalacao() == TETO)
        {
            forma = "Camada única no teto";
        }
    }
    else if (dimensionamento.isColunaE() || dimensionamento.isColunaF())
    {
        if (dimensionamento.getLocalInstalacao() == BANDEJA_PERFURADA)
        {
            forma = "Camada única em bandeja perfurada";
            
        }
        else if (dimensionamento.getLocalInstalacao() == LEITO)
        {
            forma = "Camada única sobre leito, suporte etc .";
        }
    }
    
    if (forma=="")
    {
        forma = "Em feixe: ao ar livre ou sobre superficie; embutidos; em condutos fechado";
    }
    
    return forma;
}

function getFatorAgrupamentoTabela42(numeroCircuitos)
{
    
    var fator = 0;
    var forma  = getFormaAgrupamentoTabela42();
    
    //Table15Bean bean = getByID(getFormaAgrupamento(dimensionamento));
    
    db.transaction(function(tx){
        tx.executeSql("SELECT * FROM TAB_AUXILIAR_15 WHERE NME_FORMA_AGRUPAMENTO = ? ",[forma],function(tx,rs){
         
             if(rs.rows.length >0)
             {
                switch (numeroCircuitos) {
                    case "1":
                        //fator = bean.getValorCircuito1();
                          fator = rs.rows.item(0).NMR_CIRCUITO_1;
                        break;
                    case "2":
                        //fator = bean.getValorCircuito2();
                          fator = rs.rows.item(0).NMR_CIRCUITO_2;
                        break;
                    case "3":
                        //fator = bean.getValorCircuito3();
                          fator = rs.rows.item(0).NMR_CIRCUITO_3;
                        break;
                    case "4":
                        //fator = bean.getValorCircuito4();
                          fator = rs.rows.item(0).NMR_CIRCUITO_4;
                        break;
                    case "5":
                        //fator = bean.getValorCircuito5();
                          fator = rs.rows.item(0).NMR_CIRCUITO_5;
                        break;
                    case "6":
                        //fator = bean.getValorCircuito6();
                          fator = rs.rows.item(0).NMR_CIRCUITO_6;
                        break;
                    case "7":
                        //fator = bean.getValorCircuito7();
                          fator = rs.rows.item(0).NMR_CIRCUITO_7;
                        break;
                    case "8":
                        //fator = bean.getValorCircuito8();
                          fator = rs.rows.item(0).NMR_CIRCUITO_8;
                        break;
                    case "9":
                    case "10":
                    case "11":
                        //fator = bean.getValorCircuito911();
                          fator = rs.rows.item(0).NMR_CIRCUITO_9_11;
                        break;
                    case "12":
                    case "13":
                    case "14":
                    case "15":
                        //fator = bean.getValorCircuito1215();
                          fator = rs.rows.item(0).NMR_CIRCUITO_12_15;
                        break;
                    case "16":
                    case "17":
                    case "18":
                    case "19":
                        //fator = bean.getValorCircuito1619();
                          fator = rs.rows.item(0).NMR_CIRCUITO_16_19;
                        break;
                    default:
                        //fator = bean.getValorCircuito20();
                          fator = rs.rows.item(0).NMR_CIRCUITO_20_MAIS;
                        break;
                }
            }
            $("#fator").val(fator);
        });
    },errorCB);
    //return fator;
}

function getFormaAgrupamentoTabela42()
{
    var dimensionamento = getDimensionamentoTabelaUtil();
    var forma = "";
    
    if (dimensionamento.isColunaC())
    {
        if ((dimensionamento.getLocalInstalacao() == BANDEJA_NAO_PERFURADA || dimensionamento.getLocalInstalacao() == PAREDES || dimensionamento.getLocalInstalacao() == ALVENARIA) && dimensionamento.getPossibilidadeInstalacao() != EMBUTIDA)
        {
            forma = "Camada única sobre parede, piso, ou em bandeja não perfurada ou prateleira";
            
        }
        else if (dimensionamento.getLocalInstalacao() == TETO)
        {
            forma = "Camada única no teto";
        }
        
    }
    else if (dimensionamento.isColunaE() || dimensionamento.isColunaF())
    {
        if (dimensionamento.getLocalInstalacao() == BANDEJA_PERFURADA)
        {
            forma = "Camada única em bandeja perfurada";
            
        }
        else if (dimensionamento.getLocalInstalacao() == LEITO || dimensionamento.getLocalInstalacao() == SUPORTES)
        {
            forma = "Camada única sobre leito suporte etc.";
        }
    }
    
    if (forma=="")
    {
        forma = "Em feixe : ao ar livre ou sobre supefície ; embutidos em conduto fechado";
    }
    
    return forma;
}

function getFatorAgrupamentoTabela43(numeroCircuitos)
{
    var fator = 0;
    
    var quantidadeCamadas = $("#numeroCamadas").val();
    $("#quantidadeCamadas").val(camadas);
    
    //Table14Bean bean = getByID(getNumeroCamadas(dimensionamento.getQuantidadeCamadas()));
    db.transaction(function(tx){
        tx.executeSql("SELECT * FROM TAB_AUXILIAR_14 WHERE NMR_CONDUTORES = ? ",[quantidadeCamadas],function(tx,rs){

            if(rs.rows.length >0)
            {
                switch (numeroCircuitos)
                {
                    case "2":
                        //fator = bean.getValor2();
                          fator = rs.rows.item(0).NMR_VALOR_2;
                        break;
                    case "3":
                        //fator = bean.getValor3();
                          fator = rs.rows.item(0).NMR_VALOR_3;
                        break;
                    case "4":
                    case "5":
                        //fator = bean.getValor45();
                          fator = rs.rows.item(0).NMR_VALOR_4_5;
                        break;
                    case "6":
                    case "7":
                    case "8":
                        //fator = bean.getValor68();
                          fator = rs.rows.item(0).NMR_VALOR_6_8;
                        break;
                    default:
                        if (numeroCircuitos >= 9)
                        {
                            //fator = bean.getValor9();
                            fator = rs.rows.item(0).NMR_VALOR_9_MAIS;
                        }
                        break;
                }

                //return fator;
                      
            }
            $("#fator").val(fator);
        });
    },errorCB);
}

function getFatorAgrupamentoTabela44(numeroCircuitos)
{
	var dimensionamento = getDimensionamentoTabelaUtil();
	
	var corrente = 0;
	var temperatura = dimensionamento.getTemperaturaMaximaCondutor();
    
    var fator = 0;
        
    db.transaction(function(tx){
        tx.executeSql("SELECT * FROM TAB_AUXILIAR_08 WHERE NMR_CIRCUITO = ? ",[numeroCircuitos],function(tx,rs){

            if(rs.rows.length >0)
            {
                if (dimensionamento.getDistanciaEntreCabos() == NULA)
                {
                    //fator = bean.getNula();
                    fator = rs.rows.item(0).VLR_NULA;
                }
                else if (dimensionamento.getDistanciaEntreCabos() == UM_DIAMETRO)
                {
                    //fator = bean.getUmDiametroCabo();
                    fator = rs.rows.item(0).VLR_UM_DIAMETRO_CABO;
                    
                }
                else if (dimensionamento.getDistanciaEntreCabos() == _0_125M)
                {
                    //fator = bean.getValor_0125();
                    fator = rs.rows.item(0).VLR_0125;
                }
                else if (dimensionamento.getDistanciaEntreCabos() == _0_25M)
                {
                    //fator = bean.getValor_025();
                    fator = rs.rows.item(0).VLR_025;
                }
                else if (dimensionamento.getDistanciaEntreCabos() == _0_5M)
                {
                    //fator = bean.getValor_05();
                    fator = rs.rows.item(0).VLR_05;
                }
                else
                {
                    //fator = bean.getNula();
                    fator = rs.rows.item(0).VLR_NULA;
                }
            }
            $("#fator").val(fator);
        });
    },errorCB);
}

function getFatorAgrupamentoTabela45(numeroCircuitos)
{
    var dimensionamento = getDimensionamentoTabelaUtil();
    var fator = 0;
    
    //String nomeTabela = NomeTabela.TABELA_45_MULTIPOLAR.getName(); "45_01"
    var nomeTabela = "45_01";
    
    if (dimensionamento.getTipoInstalacao() == _1_CABO)
    {
        nomeTabela = "45_02";
    }
    
    //List<Table09Bean> list = dao.getByNumeroCircuitos(numeroCircuitos, nomeTabela);
    db.transaction(function(tx){
        tx.executeSql("SELECT * FROM TAB_AUXILIAR_09 WHERE NME_TABELA = ? AND NMR_CABOS = ? ",[nomeTabela, numeroCircuitos],function(tx,rs){
                 
            if(rs.rows.length >0)
            {
                if (dimensionamento.getDistanciaEntreCabos() == NULA)
                {
                    //fator = list.get(0).getNula();
                    fator = rs.rows.item(0).VLR_NULA;
                }
                else if (dimensionamento.getDistanciaEntreCabos() == UM_DIAMETRO)
                {
                    //fator = list.get(0).getValor_1();
                    fator = rs.rows.item(0).VLR_1;
                }
                else if (dimensionamento.getDistanciaEntreCabos() == _0_25M)
                {
                    //fator = list.get(0).getValor_025();
                    fator = rs.rows.item(0).VLR_025;
                }
                else if (dimensionamento.getDistanciaEntreCabos() == _0_5M)
                {
                    //fator = list.get(0).getValor_05();
                    fator = rs.rows.item(0).VLR_05;
                }
                else
                {
                    //fator = list.get(0).getNula();
                    fator = rs.rows.item(0).VLR_NULA;
                }
            }
    
            //return fator;
            $("#fator").val(fator);
        });
    },errorCB);
}

function getFatorAgrupamentoTabela38(numeroCircuitos, secao)
{
    var dimensionamento = getDimensionamentoTabelaUtil();
    var fator = 1;
    
    if (dimensionamento.isUnipolar() && dimensionamento.isEspacado())
    {
        if (dimensionamento.is1Circuito())
        {
            fator = 1;
        } else if (numeroCircuitos == 2)
        {
            if (secao <= 95)
            {
                fator = 0.87;
            } else
            {
                fator = 0.85;
            }
        } else if (dimensionamento.is3Circuitos())
        {
            if (secao <= 95)
            {
                fator = 0.80;
            }
            else
            {
                fator = 0.78;
            }
        }
    }
    else if ((dimensionamento.isUnipolar() && dimensionamento.isTrifolio()) || (dimensionamento.isTripolar()))
    {
        if (dimensionamento.is2Circuitos())
        {
            if (secao <= 95)
            {
                fator = 0.86;
            } else
            {
                fator = 0.83;
            }
        } else if (dimensionamento.is3Circuitos()) {
            if (secao <= 95) {
                fator = 0.79;
            } else {
                fator = 0.76;
            }
        } else if (dimensionamento.is4Circuitos()) {
            if (secao < 95) {
                fator = 0.71;
            } else {
                fator = 0.67;
            }
        } else if (dimensionamento.is1Circuito()) {
            fator = 1;
        }
    }
    //return fator;
    $("#fator").val(fator);
}

function getNomeBancoTabela37(secaoCondutor)
{
    var dimensionamento = getDimensionamentoTabelaUtil();
    var nome = "";
    
    if (dimensionamento.isUnipolar() && dimensionamento.isEspacado()) {
        if (secaoCondutor <= 95)
        {
            nome = "até 95mm≤ G";
        }
        else
        {
            nome = "acima 95mm≤ G";
        }
    }
    else
    {
        
        if (secaoCondutor <= 95)
        {
            nome = "até 95mm≤ F";
        }
        else
        {
            nome = "acima 95mm≤ F";
        }
    }
    
    return nome;
}

function getFatorAgrupamentoTabela37(secaoCondutor, numeroCircuitos)
{
    //Table19Bean bean = getByID(getNomeBanco(dimensionamento, secaoCondutor));
    var nomeTabela = getNomeBancoTabela37(secaoCondutor);
    var dimensionamento = getDimensionamentoTabelaUtil();
    
    var fator = 1;

    db.transaction(function(tx){
        tx.executeSql("SELECT * FROM TAB_AUXILIAR_19 WHERE NME_BANCO = ? ",[nomeTabela],function(tx,rs){

            if(rs.rows.length >0)
            {
                if (numeroCircuitos == _2X2)
                {
                    fator = 1;
                }
                else if (dimensionamento.getTipoInstalacao() == _1_CABO)
                {
                    if (numeroCircuitos == _2X3)
                    {
                        //fator = bean.getValor23();
                        fator = rs.rows.item(0).VLR_2X3;
                    }
                    else if (numeroCircuitos == _3X3)
                    {
                        //fator = bean.getValor33();
                        fator = rs.rows.item(0).VLR_3X3;
                    }
                }
                else
                {
                    if (numeroCircuitos == _2X3)
                    {
                        //fator = bean.getValor22();
                        fator = rs.rows.item(0).VLR_2X2;
                    }
                    else if (numeroCircuitos == _3X3)
                    {
                        //fator = bean.getValor23();
                        fator = rs.rows.item(0).VLR_2X3;
                    }
                    else if (numeroCircuitos == _3X4)
                    {
                        //fator = bean.getValor33();
                        fator = rs.rows.item(0).VLR_3X3;
                    }
                }
            }
    
            //return fator;
            $("#fator").val(fator);
        });
    },errorCB);
}

function getFatorAgrupamentoTabela34(numeroCircuitos, numeroBandejas)
{
    var fator = 1;
    var dimensionamento = getDimensionamentoTabelaUtil();
    
    if (dimensionamento.isOrientacaoFatorCorrecaoHorizontal())
    {
        getFatorAgrupamentoTabela18Base("34", numeroCircuitos, numeroBandejas);
        fator = $("#fator").val();
    }
    else if (dimensionamento.isOrientacaoFatorCorrecaoVertical())
    {
        switch(numeroCircuitos)
        {
            case "1":
                fator = 0.94;
                break;
            case "2":
                fator = 0.91;
                break;
            case "3":
                fator = 0.89;
                break;
        }
    }
    
    $("#fator").val(fator);
}

function getFatorAgrupamentoTabela36(numeroCabos, numeroBandejas)
{
    var dimensionamento = getDimensionamentoTabelaUtil();
    var fator = 1;
    
    if (dimensionamento.isOrientacaoFatorCorrecaoHorizontal())
    {
        //fator = super.getFatorAgrupamento(numeroCabos, numeroBandejas);
        getFatorAgrupamentoTabela18Base("36", numeroCabos, numeroBandejas);
        fator = $("#fator").val();
    }
    else if (dimensionamento.isOrientacaoFatorCorrecaoVertical())
    {
        switch(numeroCabos)
        {
            case "1":
                fator = 1;
                break;
            case "2":
                fator = 0.91;
                break;
            case "3":
                fator = 0.89;
                break;
            case "4":
            case "5":
            case "6":
                fator = 0.87;
                break;
            case "7":
            case "8":
            case "9":
                fator = 0.87;
                break;
        }
    }
    
    //return fator;
    $("#fator").val(fator);
}

function getFatorAgrupamentoTabela35(numeroCircuitos, numeroBandejas)
{
    var dimensionamento = getDimensionamentoTabelaUtil();
    var fator = 1;
    
    if (dimensionamento.isOrientacaoFatorCorrecaoHorizontal())
    {
        //fator = super.getFatorAgrupamento(numeroCircuitos, numeroBandejas);
        getFatorAgrupamentoTabela18Base("35", numeroCabos, numeroBandejas);
        fator = $("#fator").val();
    }
    else if (dimensionamento.isOrientacaoFatorCorrecaoVertical())
    {
        switch(numeroCircuitos)
        {
            case "1":
                fator = 1;
                break;
            case "2":
                fator = 0.93;
                break;
            case "3":
                fator = 0.90;
                break;
        }
    }
    
    //return fator;
    $("#fator").val(fator);
}

function getFatorAgrupamentoTabelaA8(numeroCircuitos, numeroBandejas)
{
    var dimensionamento = getDimensionamentoTabelaUtil();
    var fator = 1;
    
    if (dimensionamento.getLocalInstalacao() == BANDEJA_PERFURADA)
    {
        
        if (dimensionamento.isOrientacaoFatorCorrecaoVertical())
        {
            fator = getFatorBandejaPerfuradaVerticalTabelaA8(numeroCircuitos, numeroBandejas);
        }
        else
        {
            fator = getFatorBandejaPerfuradaTabelaA8(numeroCircuitos, numeroBandejas);
        }
    }
    else
    {
        fator = getFatorOutrosTabelaA8(numeroCircuitos, numeroBandejas);
    }
    //return fator;
    $("#fator").val(fator);
}

function getFatorBandejaPerfuradaTabelaA8(numeroCircuitos, numeroBandejas)
{
    var dimensionamento = getDimensionamentoTabelaUtil();
    var fator = 1;
    
    var index = numeroBandejas - 1;
    
    if (dimensionamento.isJustaposto())
    {
        //fator = bandejaJustaposta.get(index).get(numeroCircuitos);
        fator = bandejaJustapostaTabelaA8(index,numeroCircuitos)
    }
    else if (dimensionamento.isEspacado())
    {
        //fator = bandejaTrifolio.get(index).get(numeroCircuitos);
        fator = bandejaTrifolioTabelaA8(index,numeroCircuitos);
    }
    
    return fator;
}

function getFatorBandejaPerfuradaVerticalTabelaA8(numeroCircuitos, numeroBandejas)
{
    var dimensionamento = getDimensionamentoTabelaUtil();
    var fator = 1;
    
    var index = numeroBandejas - 1;
    
    if (dimensionamento.isJustaposto())
    {
        //fator = bandejaVerticalJustaposta.get(index).get(numeroCircuitos);
        fator = bandejaVerticalJustapostaTabelaA8(index,numeroCircuitos);
    }
    else if (dimensionamento.isEspacado()) {
        //fator = bandejaVerticalTrifolio.get(index).get(numeroCircuitos);
        fator = bandejaVerticalTrifolioTabelaA8(index,numeroCircuitos);
    }
    
    return fator;
}

function getFatorOutrosTabelaA8(numeroCircuitos, numeroBandejas)
{
    var dimensionamento = getDimensionamentoTabelaUtil();
    var fator = 1;
    
    var index = numeroBandejas - 1;
    
    if (dimensionamento.isJustaposto())
    {
        //fator = outrosJustaposta.get(index).get(numeroCircuitos);
        fator = outrosJustapostaTabelaA8(index,numeroCircuitos);
    }
    else if (dimensionamento.isEspacado())
    {
        //fator = outrosTrifolio.get(index).get(numeroCircuitos);
        fator = outrosTrifolioTabelaA8(index,numeroCircuitos);
    }
    
    return fator;
}

function getFatorAgrupamentoTabelaA7(numeroCircuitos, numeroBandejas)
{
    var dimensionamento = getDimensionamentoTabelaUtil();
    var fator = 1;
    
    if (dimensionamento.getLocalInstalacao() == BANDEJA_PERFURADA)
    {
        if (dimensionamento.isOrientacaoVertical())
        {
            fator = getFatorBandejaPerfuradaVerticalTabelaA7(numeroCircuitos, numeroBandejas);
        }
        else
        {
            fator = getFatorBandejaPerfuradaTabelaA7(numeroCircuitos, numeroBandejas);
        }
    }
    else
    {
        fator = getFatorOutrosTabelaA7(numeroCircuitos, numeroBandejas);
    }
    //return fator;
    $("#fator").val(fator);
}

function getFatorBandejaPerfuradaTabelaA7(numeroCircuitos, numeroBandejas)
{
    var dimensionamento = getDimensionamentoTabelaUtil();
    var fator = 1;
    
    var index = numeroBandejas - 1;
    
    if (dimensionamento.isJustaposto())
    {
        //fator = bandejaJustaposta.get(index).get(numeroCircuitos);
        fator = bandejaJustapostaTabelaA7(index,numeroCircuitos);
    }
    else if (dimensionamento.isEspacado())
    {
        //fator = bandejaEspacada.get(index).get(numeroCircuitos);
        fator = bandejaEspacadaTabelaA7(index, numeroCircuitos);
    }
    
    return fator;
}

function getFatorBandejaPerfuradaVerticalTabelaA7(umeroCircuitos, numeroBandejas)
{
    var dimensionamento = getDimensionamentoTabelaUtil();
    var fator = 1;
    
    var index = numeroBandejas - 1;
    
    if (dimensionamento.isJustaposto())
    {
        //fator = bandejaVerticalJustaposta.get(index).get(numeroCircuitos);
        fator = bandejaVerticalJustapostaTabelaA7(index,numeroCircuitos);
    }
    else if (dimensionamento.isEspacado())
    {
        //fator = bandejaVerticalEspacada.get(index).get(numeroCircuitos);
        fator = bandejaVerticalEspacadaTabelaA7(index,numeroCircuitos);
    }
    
    return fator;
}

function getFatorOutrosTabelaA7(numeroCircuitos, numeroBandejas)
{
    var dimensionamento = getDimensionamentoTabelaUtil();
    var fator = 1;
    
    var index = numeroBandejas - 1;
    
    if (dimensionamento.isJustaposto())
    {
        //fator = outrosJustaposta.get(index).get(numeroCircuitos);
        fator = outrosJustapostaTabelaA7(index,numeroCircuitos);
    }
    else if (dimensionamento.isEspacado())
    {
        //fator = outrosEspacada.get(index).get(numeroCircuitos);
        fator = outrosEspacadaTabelaA7(index,numeroCircuitos);
    }
    
    return fator;
}