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
    
    var fator = 1;
    
    dimensionamento = new DimensionamentoBean();
    dimensionamento.setTipoProduto($("#cableList").val());
    dimensionamento.setNivelTensao($("#systemVoltage").val());
    dimensionamento.setNumeroCondutores($("#conductorNumber").val());
    dimensionamento.setPossibilidadeInstalacao($("#possibilidadeInstalacao").val());
    dimensionamento.setlocalInstalacao($("#localInstalacao").val());
    
    // Recupera a temperatura ambiente ao ar/solo.
    var temperaturaAmbiente = dimensionamento.getTemperaturaArSolo();
    
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
                    
                    fator = getFatorCorrecao(temperaturaAmbiente);
                }
                
            } else {
                if (temperaturaAmbiente != 30) {
                    getDebug().logVariable("Tabela", "tabela40");
                    fator = tabela40.getFatorCorrecaoAmbiente(temperaturaAmbiente, produto.getTipoMaterialIsolacao());
                }
            }
            
        } else if (dimensionamento.isMediaTensao()) {
            Tabela32 tabela32 = new Tabela32();
            
            if (dimensionamento.isEnterrado()) {
                if (temperaturaAmbiente != 20) {
                    getDebug().logVariable("Tabela", "tabela32");
                    fator = tabela32.getFatorCorrecaoSolo(temperaturaAmbiente, produto.getTipoMaterialIsolacao(),
                                                          dimensionamento.getTemperaturaMaximaCondutor());
                }
            } else if (temperaturaAmbiente != 30) {
                getDebug().logVariable("Tabela", "tabela32");
                fator = tabela32.getFatorCorrecaoAmbiente(temperaturaAmbiente, produto.getTipoMaterialIsolacao(),
                                                          dimensionamento.getTemperaturaMaximaCondutor());
            }
        }
    } else if (dimensionamento.isCabosNavais()) {
        if (temperaturaAmbiente != 45) {
            Table01 table01 = new Table01();
            getDebug().logVariable("Tabela", "table01");
            fator = table01.getFator(dimensionamento.getTemperaturaMaximaCondutor(), temperaturaAmbiente);
        }
    }
    
    getDebug().logVariable("fator", fator);
    getDebug().logMethodExit();
    return fator;
}

function getFatorCorrecao(temperatura, materialIsolacao, nomeTabela)
{
    
    var fator = 1;
    
    db.transaction(function(tx){
        tx.executeSql("SELECT * FROM TAB_AUXILIAR_07 WHERE NME_TABELA = ? AND VLR_TEMPERATURA = ? ",[nomeTabela,temperatura],function(tx,rs){
                     
              var arrayNumeroCondutores = new Array();
              
              if(rs.rows.length >0)
              {
                  if (materialIsolacao.equals(ProdutoBean.TIPO_MATERIAL_ISOLACAO_EPR)
                      || materialIsolacao.equals(ProdutoBean.TIPO_MATERIAL_ISOLACAO_XLPE)
                      || materialIsolacao.equals(ProdutoBean.TIPO_MATERIAL_ISOLACAO_XLP)) {
              
                      fator = rs.rows.item(0).VLR_EPR_XLPE;
                  }
                  else if (materialIsolacao.equals(ProdutoBean.TIPO_MATERIAL_ISOLACAO_PVC))
                  {
                      fator = rs.rows.item(0).VLR_PVC
                  }
              }
                      
              $("#fator").val(fator);
         });
    },errorCB);
    
    return fator;
}