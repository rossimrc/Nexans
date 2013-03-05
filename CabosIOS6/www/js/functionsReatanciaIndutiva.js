var xL = 0;
var dXL = 0;
var xLCorrigido = 0;
var lLCorrigido = 0;

function calcularReatanciaIndutiva(s, rp, dp, xpp)
{
    //getDebug().logMethodEnter("calcularReatanciaIndutiva");
    
    // Calcula a indut‚ncia (LL).
    //var lL = calcularIndutancia(s, rp, dp, xpp);
    var lL = calcularIndutanciaReatanciaIndutiva(s, rp, dp, xpp);
    
    xL = 0;
    
    if (dimensionamento.isBaixaTensao() || (dimensionamento.isMediaTensao() && !dimensionamento.isMultiAterrado()))
    {
        xL = ((2 * Math.PI * dimensionamento.getFrequencia()) / Math.pow(10, 3)) * lL;
    }
    else if (dimensionamento.isMediaTensao() && dimensionamento.isMultiAterrado())
    {    
        var f = dimensionamento.getFrequencia();
        
        // Calcula XL, Delta XL e XL Corrigido.
        xL = ((2 * Math.PI * f) / Math.pow(10, 3)) * lL;
        
        if (rp > 0)
        {
            dXL = (xpp / (Math.pow(rp / xpp, 2) + 1));
        }
        
        xL = xL - dXL;
    }
    
//    if (getDebug().isEnabled()) {
//        getDebug().logVariable("lL", lL);
//        getDebug().logVariable("dXL", dXL);
//        getDebug().logVariable("xL", xL);
//    }
//    getDebug().logMethodExit();
}

function calcularIndutanciaReatanciaIndutiva(s, rp, dp, xpp)
{
    //getDebug().logMethodEnter("calcularIndutancia");
    var dimensionamento = getDimensionamentoTabelaUtil();
    
    //var arrayProdutoBean = document.getElementById("arrayProdutoBean");
    var numFiosCondutor = arrayProdutoBean["NMR_NUMERO_FIOS_CONDUTOR"];
    var diametroCondutor = arrayProdutoBean["NMR_DIAMETRO_CONDUTOR"];
    
    // Indut‚ncia (LL).
    var lL = 0;
    
    // Raio mÈdio geomÈtrico condutor
    var rmg = getRMGReatanciaIndutiva(numFiosCondutor) * (diametroCondutor / 2);
    
    // Verifica o sistema È aterrado em um ˙nico ponto ou se È baixa tens„o.
    if (dimensionamento.isBaixaTensao() || (dimensionamento.isMediaTensao() && !dimensionamento.isMultiAterrado()))
    {
        lL = 0.2 * Math.log(s / rmg);
    }
    else if (dimensionamento.isMediaTensao() && dimensionamento.isMultiAterrado())
    {
        // Calcula o LL, M, Delta LL e LL Corrigido.
        lL = 0.2 * Math.log(s / rmg);
        m = 0.2 * Math.log((2 * s) / dp);
        var dLL = m / (Math.pow(rp / xpp, 2) + 1);
        lLCorrigido = lL - dLL;
    }
    
//    if (getDebug().isEnabled()) {
//        getDebug().logVariable("rmg", rmg);
//        getDebug().logVariable("m", m);
//        getDebug().logVariable("lLCorrigido", lLCorrigido);
//        getDebug().logVariable("lL", lL);
//    }
//    getDebug().logMethodExit();
    return lL;
}

function getRMGReatanciaIndutiva(numeroFiosCondutor)
{
    var tipoCondutor = arrayProdutoBean["NME_TIPO_CONDUTOR"];
    
    // Verifica se o condutor È compactado.
    if (tipoCondutor=="R")
    {
        return 0.779;
    }
    
    switch (numeroFiosCondutor)
    {
        case "7":
            return "0.726";
        case "19":
            return "0.758";
        case "37":
            return "0.768";
        case "61":
            return "0.772";
        case "91":
            return "0.774";
        case "127":
            return "0.776";
        default:
            return "0.779";
    }
}

function getXL()
{
    return xL;
}

/**
 * @return  the dXL
 */
function getDXL()
{
    return dXL;
}

/**
 * @return  the xLCorrigido
 */
function getXLCorrigido()
{
    return xLCorrigido;
}

/**
 * @return  the lLCorrigido
 */
function getLLCorrigido()
{
    return lLCorrigido;
}