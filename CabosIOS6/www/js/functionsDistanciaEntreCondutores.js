var s = 0;

function calcularDistanciaEntreCondutores()
{
    //getDebug().logMethodEnter("calcularDistanciaEntreCondutores");
    
    var dimensionamento = getDimensionamentoTabelaUtil();
    
    var arrayProdutoBean = document.getElementById("arrayProdutoBean");
    var numFiosCondutor = arrayProdutoBean.options["NMR_NUMERO_FIOS_CONDUTOR"].value;
    var diametroCondutor = arrayProdutoBean.options["NMR_DIAMETRO_CONDUTOR"].value;
    
    //var a = produto.getDiametroNomCobertura();
    var a = arrayProdutoBean.options["NMR_DIAMETRO_NOM_COBERTURA"].value;
    
    //var b = produto.getDiametroCondutor();
    var b = arrayProdutoBean.options["NMR_DIAMETRO_CONDUTOR"].value;
    
    //var c = produto.getEspessuraDaIsolEntreCondutor();
    var c = arrayProdutoBean.options["NMR_ESPESSURA_ISOL_ENTRE_CONDU"].value;
    
    //var d = produto.getDiametroNominalVeia();
    var d = arrayProdutoBean.options["NMR_DIAMETRO_NOMINAL_VEIA"].value;
    
    //var e = produto.getDiametroNominalIsolacao();
    var d = arrayProdutoBean.options["NMR_DIAMETRO_NOMINAL_ISOLACAO"].value;
    
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
            
            if (dimensionamento.getLocalInstalacao() == MOLDURA))
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
    
//    if (getDebug().isEnabled()) {
//        getDebug().logVariable("a", a);
//        getDebug().logVariable("b", b);
//        getDebug().logVariable("c", c);
//        getDebug().logVariable("s", s);
//    }
//    
//    getDebug().logMethodExit();
}

function getSDistanciaEntreCabos()
{
    
    if (s == 0)
    {
        calcularDistanciaEntreCondutores();
    }
    
    return s;
}