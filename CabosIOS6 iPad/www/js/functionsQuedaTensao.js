var dV = 0;
function calcularQuedaTensao(valorSc, i, rca, xL)
{
    //alert("valorSc: " + valorSc + " - i: " + i + " - rca: " + rca + " - xL: " + xL);
    
    //getDebug().logMethodEnter("calcularQuedaTensao");
    var dimensionamento = getDimensionamentoTabelaUtil();
    
    // Fator de potÍncia.
    var cosFi = dimensionamento.getFatorPotencia();
    //alert("cosFi: " + cosFi);
    
    // Comprimento do sistema (Convertido em km).
    var lC = dimensionamento.getComprimentoCircuitoKM();
    //alert("lC: " + lC);
    
    // Tens„o de serviÁo.
    var v = dimensionamento.getTensaoServicoVolts();
    //alert("v: " + v);
    
    if (dimensionamento.isDuasFases())
    {
        calcularBifasico(i, rca, xL, lC, cosFi, v);
    }
    else if (dimensionamento.isTrifasico())
    {
        calcularTrifasico(i, rca, xL, lC, cosFi, v);
    }
    
    //getDebug().logVariable("dV", dV);
    //getDebug().logMethodExit();
}
function calcularBifasico(i, rca, xL, lC, cosFi, v)
{
    dV = (200 * i * lC * ((rca * cosFi) + (xL * getSenFi(cosFi)))) / v;
    //alert("calcularBifasico dV: " + dV);
}

function calcularTrifasico(i, rca, xL, lC, cosFi, v)
{
    dV = (173.2 * i * lC * ((rca * cosFi) + (xL * getSenFi(cosFi)))) / v;
    //alert("calcularTrifasico dV: " + dV);
}

function getSenFi(cosFi)
{
    var senFi = Math.sqrt(1 - Math.pow(cosFi, 2));
    //alert("senFi: " + senFi);
    return senFi;
}

/**
 * @return  the dV
 */
function getDV()
{
    //alert("Queda Tensao: " + dV)
    return dV;
}