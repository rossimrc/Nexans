var s = 0;

function calcularDistanciaEntreCondutores()
{
    //getDebug().logMethodEnter("calcularDistanciaEntreCondutores");
    
    var dimensionamento = getDimensionamentoTabelaUtil();
    
    var numFiosCondutor = arrayProdutoBean["NMR_NUMERO_FIOS_CONDUTOR"];
    var diametroCondutor = arrayProdutoBean["NMR_DIAMETRO_CONDUTOR"];
    
    //var a = produto.getDiametroNomCobertura();
    var a = arrayProdutoBean["NMR_DIAMETRO_NOM_COBERTURA"];
    
    //var b = produto.getDiametroCondutor();
    var b = arrayProdutoBean["NMR_DIAMETRO_CONDUTOR"];
    
    //var c = produto.getEspessuraDaIsolEntreCondutor();
    var c = arrayProdutoBean["NMR_ESPESSURA_ISOL_ENTRE_CONDU"];
    
    //var d = produto.getDiametroNominalVeia();
    var d = arrayProdutoBean["NMR_DIAMETRO_NOMINAL_VEIA"];
    
    //var e = produto.getDiametroNominalIsolacao();
    var d = arrayProdutoBean["NMR_DIAMETRO_NOMINAL_ISOLACAO"];
    
    if (dimensionamento.isBaixaTensao())
    {
        if (dimensionamento.getTensaoIsolamento() == _450V_750V)
        {
            s = e;
        }
        else if (dimensionamento.isDuasFases())
        {
            if (dimensionamento.isUnipolar())
            {
                s = a;
            }
            else {
                s = d;
            }
        }
        else if (!dimensionamento.isUnipolar())
        {
            s = d;
        }
        else if (dimensionamento.isColunaB1())
        {
            s = a;
        }
        else if (dimensionamento.isColunaB2())
        {
            s = a;
        }
        else if (dimensionamento.isColunaF())
        {
            if (dimensionamento.isTrifolio())
            {
                s = a;
            }
            else if (dimensionamento.isDuasFases())
            {
                if (dimensionamento.isJustaposto())
                {
                    s = a;
                }
            }
            else if (dimensionamento.isTrifasico())
            {
                if (dimensionamento.isJustaposto())
                {
                    s = a * 1.26;
                }
            }
        }
        else if (dimensionamento.isColunaE())
        {
            s = d;
        }
        else if (dimensionamento.isColunaC())
        {
            
            if ((dimensionamento.getLocalInstalacao() == PAREDES) || (dimensionamento.getLocalInstalacao() == TETO) || (dimensionamento.getLocalInstalacao() == ALVENARIA))
            {
                s = a;
            }
            else if (dimensionamento.getLocalInstalacao() == BANDEJA_NAO_PERFURADA)
            {
                s = a * 1.26;
            }
        }
        else if (dimensionamento.isColunaA1())
        {
            
            if (dimensionamento.getLocalInstalacao() == MOLDURA)
            {
                s = a * 2.52;
            }
            else
            {
                s = a;
            }
        }
        else if (dimensionamento.isColunaA2())
        {
            s = a;
        }
        else if (dimensionamento.isColunaD())
        {
            s = a;
        }
        else if (dimensionamento.isColunaG())
        {
            s = a * 2.52;
        }
        
    }
    else if (dimensionamento.isMediaTensao())
    {
        
        // FIXME Descobrir como achar o valor de S para mÈdia tens„o e cabos navais.
        if (dimensionamento.isCabosNavais())
        {
            s = a;
        }
        else
        {
            if (dimensionamento.isTripolar())
            {
                s = d;
            }
            else
            {
                s = a;
            }
        }
    }
}

function getSDistanciaEntreCabos()
{
    
    if (s == 0)
    {
        calcularDistanciaEntreCondutores();
    }
    
    return s;
}