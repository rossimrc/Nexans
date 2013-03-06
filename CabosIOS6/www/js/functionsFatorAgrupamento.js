function calcularAgrupamentoFatorAgrupamento(numeroCabos)
{
    var dimensionamento = getDimensionamentoTabelaUtil();
    
    numeroCircuitos = dimensionamento.getNumeroCircuitos(numeroCabos);
    
    alert('numeroCircuitos: ' + numeroCircuitos);

    //numeroBandejas = getNumeroBandejas();
    var numeroBandejas = dimensionamento.getNumeroBandejas();
    
    if (dimensionamento.getOrientacaoFatorCorrecao() > 0)
    {
        while (numeroCircuitos > getNumeroMaximoCircuitosBandejaFatorAgrupamento())
        {
            numeroBandejas++;
            
            if ((dimensionamento.isMediaTensao() && !(dimensionamento.isColunaA() || dimensionamento.isColunaC()))
                || numeroBandejas > getNumeroMaximoBandejas()) {
                
                //alert("Número de cabos por fase e/ou circuitos agrupados, não previstos nas tabelas padronizadas de fatores de agrupamentos das normas NBR 5410, NBR 14039 ou IEC.");
            }
            
            var numeroCircuitosAux = dimensionamento.getNumeroCircuitos(numeroCabos) / numeroBandejas;
            numeroCircuitos = numeroCircuitosAux.toFixed(1);
        }
    }
    else if (numeroCircuitos > getNumeroMaximoCircuitosBandejaFatorAgrupamento())
    {
        //alert("Número de cabos por fase e/ou circuitos agrupados, não previstos nas tabelas padronizadas de fatores de agrupamentos das normas NBR 5410, NBR 14039 ou IEC.");
    }
    
    return numeroCircuitos;
}

function getNumeroMaximoBandejasFatorAgrupamento()
{
    var dimensionamento = getDimensionamentoTabelaUtil();    
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

function getNumeroMaximoCircuitosBandejaFatorAgrupamento()
{
    var max = 0;
    
    var dimensionamento = getDimensionamentoTabelaUtil();
    
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

function getNumeroMaximoCircuitosFatorAgrupamento()
{
    var dimensionamento = getDimensionamentoTabelaUtil();
    
    return getNumeroMaximoBandejas() * getNumeroMaximoCircuitosBandeja();
}