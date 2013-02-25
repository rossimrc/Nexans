function aplicarFatorCorrecao(corrente, numeroCabos, secaoCondutor)
{
    calcularAgrupamento(numeroCabos);
    var numCircuitos = getNumeroCircuitos();
    
    setLastFatorResistividade(getFatorCorrecaoResistividade());
    lastFatorTemperatura = getFatorCorrecaoTemperatura();
    
    if (numCircuitos > 0)
    {
        lastFatorAgrupamento = getFatorCorrecaoAgrupamento(numCircuitos, fatorAgrupamento.getNumeroBandejas());
    }
    else
    {
        lastFatorAgrupamento = 1;
    }
    
    return corrente / (getLastFatorResistividade() * lastFatorTemperatura * lastFatorAgrupamento * numeroCabos);
}

function aplicarFatorCorrecao(corrente, numeroCabos, secaoCondutor, fatorCanaleta)
{
    calcularAgrupamento(numeroCabos);
    var numCircuitos = getNumeroCircuitos();
    
    setLastFatorResistividade(getFatorCorrecaoResistividade());
    lastFatorTemperatura = getFatorCorrecaoTemperatura();
    
    if (numCircuitos > 0)
    {
        lastFatorAgrupamento = getFatorCorrecaoAgrupamento(numCircuitos, fatorAgrupamento.getNumeroBandejas());
    }
    else
    {
        lastFatorAgrupamento = 1;
    }
    
    return corrente / (getLastFatorResistividade() * lastFatorTemperatura * lastFatorAgrupamento * numeroCabos * fatorCanaleta);
}

function calcularMaximaCorrenteConducao(corrente, numeroCabos)
{
    var numeroCircuitos = calcularAgrupamento(numeroCabos);
    var numCircuitos = $("#numeroCircuitos").val();
    
    lastFatorResistividade = getFatorCorrecaoResistividade();
    lastFatorTemperatura = getFatorCorrecaoTemperatura();
    lastFatorAgrupamento = 1;
    
    if (numCircuitos > 0)
    {
        lastFatorAgrupamento = getFatorCorrecaoAgrupamento(numCircuitos, fatorAgrupamento.getNumeroBandejas());
    }
    
    return corrente * lastFatorResistividade * lastFatorTemperatura * numeroCabos * lastFatorAgrupamento;
}

function calcularMaximaCorrenteConducao(corrente, numeroCabos, fatorCanaleta)
{
    var numeroCircuitos = calcularAgrupamento(numeroCabos);
    var numCircuitos = $("#numeroCircuitos").val();
    
    lastFatorResistividade = getFatorCorrecaoResistividade();
    lastFatorTemperatura = getFatorCorrecaoTemperatura();
    lastFatorAgrupamento = 1;
    
    if (numCircuitos > 0)
    {
        lastFatorAgrupamento = getFatorCorrecaoAgrupamento(numCircuitos, fatorAgrupamento.getNumeroBandejas());
    }
    
    return corrente * lastFatorResistividade * lastFatorTemperatura * numeroCabos * lastFatorAgrupamento * fatorCanaleta;
}

function getFatorCorrecaoTemperatura()
{
    alert("getFatorCorrecaoTemperatura");
    
    var arrayProdutoBean = document.getElementById("arrayProdutoBean");
    var tipoMaterialIsolacao = arrayProdutoBean.options["NME_TIPO_MATERIAL_ISOLACAO"].value;
    
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
                    //***PAREI AQUI*** tentando achar o campo e o valor tipoMaterialIsolacao
                    
                    fator = getFatorCorrecaoTabela40(temperaturaAmbiente, tipoMaterialIsolacao, "40_02");
                }
            }
            else
            {
                if (temperaturaAmbiente != 30)
                {
                    //getDebug().logVariable("Tabela", "tabela40");
                    //fator = tabela40.getFatorCorrecaoAmbiente(temperaturaAmbiente, produto.getTipoMaterialIsolacao()); TABELA_40_AMBIENTE
                    fator = getFatorCorrecaoTabela40(temperaturaAmbiente, tipoMaterialIsolacao, "40_01");
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
                    fator = getFatorCorrecaoTabela32("32_02", temperaturaAmbiente, tipoMaterialIsolacao, temperaturaMaximaCondutor);
                }
            }
            else if (temperaturaAmbiente != "30")
            {
                //getDebug().logVariable("Tabela", "tabela32");
                //fator = tabela32.getFatorCorrecaoAmbiente(temperaturaAmbiente, tipoMaterialIsolacao, temperaturaMaximaCondutor); //TABELA_32_AMBIENTE "32_01"
                fator = getFatorCorrecaoTabela32("32_01", temperaturaAmbiente, tipoMaterialIsolacao, temperaturaMaximaCondutor);
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
            fator = getFatorTable01(temperaturaMaximaCondutor, temperaturaAmbiente);
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
                fator = getFatorAgrupamentoTabela42(numeroCircuitos);
                
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
                        fator = getFatorAgrupamentoTabela43(numeroCircuitos);
                        //*** PAREI AQUI ***
                    }
                    
                } else if (dimensionamento.isColunaD()) {
                    if (numeroCircuitos >= 2) {
                        
                        if (dimensionamento.getLocalInstalacao() == LocalInstalacao.DIRETAMENTE_ENTERRADOS.getValue()) {
                            Tabela44 tabela44 = new Tabela44();
                            getDebug().logVariable("Tabela", "tabela44");
                            fator = tabela44.getFatorAgrupamento(dimensionamento, numeroCircuitos);
                        } else if (dimensionamento.getLocalInstalacao() == LocalInstalacao.ELETRODUTO.getValue()) {
                            Tabela45 tabela45 = new Tabela45();
                            getDebug().logVariable("Tabela", "tabela45");
                            fator = tabela45.getFatorAgrupamento(dimensionamento, numeroCircuitos);
                        }
                    }
                }
            }
        } else if (dimensionamento.isMediaTensao()) {
            if (dimensionamento.isEnterrado()) {
                if (dimensionamento.isColunaH() || dimensionamento.isColunaI()) {
                    if (dimensionamento.isEspacado() || dimensionamento.isTrifolio() || dimensionamento.isTripolar()) {
                        Tabela38Media tabela38 = new Tabela38Media();
                        fator = tabela38.getFatorAgrupamento(dimensionamento, numeroCircuitos, secao);
                    } else {
                        if (numeroCircuitos > 1) {
                            fator = new Tabela44().getFatorAgrupamento(dimensionamento, numeroCircuitos);
                        }
                    }
                } else if (dimensionamento.isColunaF() || dimensionamento.isColunaG()) {
                    if (dimensionamento.getPossibilidadeInstalacao() == PossibilidadeInstalacao.BANCO_DUTOS_SOLO.getValue()) {
                        Tabela37NBR14039 tabela37 = new Tabela37NBR14039();
                        fator = tabela37.getFatorAgrupamento(dimensionamento, secao, numeroCircuitos);
                    } else {
                        // Eletroduto no solo.
                        if (numeroCircuitos > 1) {
                            fator = new Tabela45().getFatorAgrupamento(dimensionamento, numeroCircuitos);
                        }
                    }
                }
            } else {
                if (dimensionamento.isColunaC() || dimensionamento.isColunaD()) {
                    if (dimensionamento.isColunaD()) {
                        fator = new Tabela34().getFatorAgrupamento(dimensionamento, numeroCircuitos, numeroBandejas);
                    } else {
                        if (dimensionamento.isTripolar()) {
                            fator = new Tabela36NBR14039().getFatorAgrupamento(dimensionamento, numeroCircuitos, numeroBandejas);
                        } else if (dimensionamento.isTrifolio()) {
                            fator = new Tabela35().getFatorAgrupamento(dimensionamento, numeroCircuitos, numeroBandejas);
                        } else {
                            fator = new TabelaA8().getFatorAgrupamento(dimensionamento, numeroCircuitos, numeroBandejas);
                        }
                    }
                    
                } else if (dimensionamento.isColunaB()) {
                    Tabela34 tabela34 = new Tabela34();
                    fator = tabela34.getFatorAgrupamento(dimensionamento, numeroCircuitos, numeroBandejas);
                    
                } else if (dimensionamento.isColunaA() && dimensionamento.isUnipolar()) {
                    if (dimensionamento.isTrifolio()) {
                        Tabela35 tabela35 = new Tabela35();
                        fator = tabela35.getFatorAgrupamento(dimensionamento, numeroCircuitos, numeroBandejas);
                    } else {
                        fator = new TabelaA8().getFatorAgrupamento(dimensionamento, numeroCircuitos, numeroBandejas);
                    }
                    
                } else {
                    if (dimensionamento.isEspacado()) {
                        Tabela36NBR14039 tabela36 = new Tabela36NBR14039();
                        fator = tabela36.getFatorAgrupamento(dimensionamento, numeroCircuitos, numeroBandejas);
                    } else {
                        fator = new TabelaA7().getFatorAgrupamento(dimensionamento, numeroCircuitos, numeroBandejas);
                    }
                }
            }
            
        }
    } else if (dimensionamento.isCabosNavais()) {
        fator = getFatorAgrupamentoNaval(numeroCircuitos, numeroBandejas);
    }
    
    lastFatorAgrupamento = fator;
    
    getDebug().logVariable("fator", fator);
    getDebug().logMethodExit();
    return fator;
}

function getFatorAgrupamentoTabela42(numeroCircuitos)
{
    
    var fator = 0;
    
    //Table15Bean bean = getByID(getFormaAgrupamento(dimensionamento));
    
    db.transaction(function(tx){
        tx.executeSql("SELECT * FROM TAB_AUXILIAR_15 WHERE NME_FORMA_AGRUPAMENTO = ? ",[numeroCircuitos],function(tx,rs){
         
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