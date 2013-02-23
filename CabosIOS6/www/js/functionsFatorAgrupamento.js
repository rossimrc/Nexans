function calcularAgrupamento(numeroCabos)
{
    dimensionamento = new DimensionamentoBean();
    dimensionamento.setTipoProduto($("#cableList").val());
    dimensionamento.setNivelTensao($("#systemVoltage").val());
    dimensionamento.setNumeroCondutores($("#conductorNumber").val());
    dimensionamento.setPossibilidadeInstalacao($("#possibilidadeInstalacao").val());
    dimensionamento.setlocalInstalacao($("#localInstalacao").val());
    
    numeroCircuitos = dimensionamento.getNumeroCircuitos(numeroCabos);
    numeroBandejas = getNumeroBandejas();
    
    if (getOrientacaoFatorCorrecao() > 0)
    {
        while (numeroCircuitos > getNumeroMaximoCircuitosBandeja())
        {
            numeroBandejas++;
            
            if ((dimensionamento.isMediaTensao() && !(dimensionamento.isColunaA() || dimensionamento.isColunaC()))
                || numeroBandejas > getNumeroMaximoBandejas()) {
                
                alert("Número de cabos por fase e/ou circuitos agrupados, não previstos nas tabelas padronizadas de fatores de agrupamentos das normas NBR 5410, NBR 14039 ou IEC.");
            }
            
            var numeroCircuitosAux = dimensionamento.getNumeroCircuitos(numeroCabos) / numeroBandejas;
            numeroCircuitos = numeroCircuitosAux.toFixed(1);
        }
    }
    else if (numeroCircuitos > getNumeroMaximoCircuitosBandeja())
    {
        alert("Número de cabos por fase e/ou circuitos agrupados, não previstos nas tabelas padronizadas de fatores de agrupamentos das normas NBR 5410, NBR 14039 ou IEC.");
    }
    
    return numeroCircuitos;
}

function getNumeroMaximoBandejas()
{
    dimensionamento = new DimensionamentoBean();
    dimensionamento.setTipoProduto($("#cableList").val());
    dimensionamento.setNivelTensao($("#systemVoltage").val());
    dimensionamento.setNumeroCondutores($("#conductorNumber").val());
    dimensionamento.setPossibilidadeInstalacao($("#possibilidadeInstalacao").val());
    dimensionamento.setlocalInstalacao($("#localInstalacao").val());
    
    var max = 0;
    
    if (dimensionamento.isOrientacaoFatorCorrecaoHorizontal())
    {
        if (dimensionamento.isCabosEnergia() && !dimensionamento.isJustaposto())
        {
            max = 6;
        }
        else
        {
            max = 3;
        }
    }
    else
    {
        if (dimensionamento.isEspacado())
        {
            max = 6;
        }
        else
        {
            max = 2;
        }
    }
    
    return max;
}

function getNumeroMaximoCircuitosBandeja()
{
    var max = 0;
    
    dimensionamento = new DimensionamentoBean();
    dimensionamento.setTipoProduto($("#cableList").val());
    dimensionamento.setNivelTensao($("#systemVoltage").val());
    dimensionamento.setNumeroCondutores($("#conductorNumber").val());
    dimensionamento.setPossibilidadeInstalacao($("#possibilidadeInstalacao").val());
    dimensionamento.setlocalInstalacao($("#localInstalacao").val());
    
    if (dimensionamento.isOrientacaoFatorCorrecaoHorizontal())
    {
        if (dimensionamento.isCabosEnergia())
        {
            if (dimensionamento.isUnipolar())
            {
                max = 3;
            }
            else
            {
                max = 9;
            }
        }
        else
        {
            if (dimensionamento.isColunaF())
            {
                max = 3;
            }
            else if (dimensionamento.isColunaE())
            {
                if (dimensionamento.isJustaposto())
                {
                    max = 9;
                }
                else if (dimensionamento.isEspacado())
                {
                    max = 6;
                }
            }
        }
    }
    else if (dimensionamento.isOrientacaoFatorCorrecaoVertical())
    {
        if (dimensionamento.isCabosEnergia())
        {
            if (dimensionamento.isEspacado() || dimensionamento.isTrifolio()) {
                if (dimensionamento.isUnipolar()) {
                    max = 3;
                } else {
                    max = 9;
                }
            } else {
                if (dimensionamento.isUnipolar()) {
                    max = 2;
                } else {
                    max = 9;
                }
            }
        } else {
            if (dimensionamento.isColunaF())
            {
                max = 3;
            }
            else if (dimensionamento.isColunaE())
            {
                if (dimensionamento.isJustaposto())
                {
                    max = 9;
                }
                else if (dimensionamento.isEspacado())
                {
                    max = 6;
                }
            }
        }
    } else if (dimensionamento.getPossibilidadeInstalacao() == BANCO_DUTOS_SOLO)
    {
        if (dimensionamento.isTripolar() || (!dimensionamento.isTripolar() && !dimensionamento.isEspacado()))
        {
            max = 4;
        }
        else
        {
            max = 3;
        }
    }
    else if (dimensionamento.isSubterranea())
    {
        if (dimensionamento.isEletroduto() || dimensionamento.isDiretamenteEnterrados())
        {
            max = 6;
        }
        else
        {
            max = 20;
        }
    }
    else if (dimensionamento.getPossibilidadeInstalacao() == ESPACO_CONSTRUCAO)
    {
        max = 6;
    }
    else if (dimensionamento.isEletrodutoSolo())
    {
        max = 6;
    } else {
        max = 20;
    }
    
    return max;
}

function getNumeroMaximoCircuitos()
{
    dimensionamento = new DimensionamentoBean();
    dimensionamento.setTipoProduto($("#cableList").val());
    dimensionamento.setNivelTensao($("#systemVoltage").val());
    dimensionamento.setNumeroCondutores($("#conductorNumber").val());
    dimensionamento.setPossibilidadeInstalacao($("#possibilidadeInstalacao").val());
    dimensionamento.setlocalInstalacao($("#localInstalacao").val());
    
    return getNumeroMaximoBandejas() * getNumeroMaximoCircuitosBandeja();
}