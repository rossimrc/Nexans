function calcularQuedaTensao(valorSc, i, rca, xL)
{
    //getDebug().logMethodEnter("calcularQuedaTensao");
    var dimensionamento = getDimensionamentoTabelaUtil();
    
    // Fator de potÍncia.
    var cosFi = dimensionamento.getFatorPotencia();
    
    // Comprimento do sistema (Convertido em km).
    var lC = dimensionamento.getComprimentoCircuitoKM();
    
    // Tens„o de serviÁo.
    var v = dimensionamento.getTensaoServicoVolts();
    
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