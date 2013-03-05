var xc = 0;

// Capacitância.
var c = 0;

/**
 * Calcula a reatância capacitiva (Xc).
 */
function calcularReatanciaCapacitivaReatanciaCapacitiva()
{
    //getDebug().logMethodEnter("calcularReatanciaCapacitiva");
    var dimensionamento = getDimensionamentoTabelaUtil();
    
    // Frequência do sistema.
    var f = dimensionamento.getFrequencia();
    
    // Capacitância.
    calcularCapacitanciaReatanciaCapacitiva();
    
    // Calcula a reatância capacitiva.
    xc = Math.pow(10, 6) / (2 * Math.PI * f * c);
    
    //getDebug().logVariable("xc", xc);
    //getDebug().logMethodExit();
}

function calcularCapacitanciaReatanciaCapacitiva()
{
    //getDebug().logMethodEnter("calcularCapacitancia");
    
    var e = getConstanteDieletricaReatanciaCapacitiva();
    var t = getTReatanciaCapacitiva();
    var ddi = getDdiReatanciaCapacitiva();
    
    c = e / (18 * Math.log(((2 * t) / ddi) + 1));
    
    //        if (getDebug().isEnabled()) {
    //            getDebug().logVariable("e", e);
    //            getDebug().logVariable("t", t);
    //            getDebug().logVariable("ddi", ddi);
    //            getDebug().logVariable("c", c);
    //        }
    //        getDebug().logMethodExit();
}

function getConstanteDieletricaReatanciaCapacitiva()
{
    
    var e = 0;
    
    if (isMaterialIsolacaoEPR())
    {
        e = 3;
    }
    else if (isMaterialIsolacaoPVC())
    {
        e = 8;
    }
    else if (isMaterialIsolacaoPE())
    {
        e = 2.3;
    }
    else if (isMaterialIsolacaoXLPE())
    {
        e = 2.5;
    }
    
    return e;
}

function getDdiReatanciaCapacitiva()
{
    var dimensionamento = getDimensionamentoTabelaUtil();
    //var arrayProdutoBean = document.getElementById("arrayProdutoBean");
    
    //var diametroCondutor = produto.getDiametroCondutor();
    var diametroCondutor = arrayProdutoBean["NMR_DIAMETRO_CONDUTOR"];
    
    var espessura1Semi = 0;
    
    if (dimensionamento.isMediaTensao())
    {
        //espessura1Semi = produto.getEspessuraNom1SemiCond();
        espessura1Semi = arrayProdutoBean["MMR_ESPESSURA_NOM_1A_SEMI_COND"];
    }
    
    return diametroCondutor + (espessura1Semi * 2);
}

function getTReatanciaCapacitiva()
{
    //var arrayProdutoBean = document.getElementById("arrayProdutoBean");
    var espessuraNominalIsolacao = arrayProdutoBean["NMR_ESPESSURA_NOMINAL_ISOLACAO"];
    
    //return produto.getEspessuraNominalIsolacao();
    return espessuraNominalIsolacao;
}

/**
 * @return  Reatância Capacitiva.
 */
function getXcReatanciaCapacitiva()
{
    return xc;
}