var icc = 0;
var kcc = 0;
var kbb = 0;
var sc = 0;
var tcc = 0;
var icb = 0;
var tcb = 0;
var sb = 0;

function calcularCriterioCurto(scAux)
{
    var dimensionamento = getDimensionamentoTabelaUtil();
    sc = scAux;
    
    calcularCriterioCurtoCondutor();
    
    if (dimensionamento.isMediaTensao())
    {
        calcularCriterioCurtoBlindagem();
    }
}

function calcularCriterioCurtoCondutor()
{
    var dimensionamento = getDimensionamentoTabelaUtil();
    
    // Verifica se o usu·rio tem informaÁıes de curto circuito.
    if (dimensionamento.isInformacaoCurtoCircuitoFixada())
    {
        calcularComInformacaoCurtoCondutor();
    }
    else
    {
        //alert("Entrou else");
        calcularSemInformacaoCurtoCondutor();
    }
}

function calcularComInformacaoCurtoCondutor()
{
    //getDebug().logMethodEnter("calcularComInformacaoCurtoCondutor");
    var dimensionamento = getDimensionamentoTabelaUtil();
    
    tcc = dimensionamento.getTempoAtuacaoProtecao();
    icc = dimensionamento.getCorrenteCurto();
    
    // Calcula o kcc e o Sc.
    kcc = getKc() * Math.sqrt(Math.log((getTetafc() + getBetac()) / (getTeta0c() + getBetac())) / Math.LN10);
    sc = (icc * Math.sqrt(tcc)) / kcc;
    
//    TabelaUtil tabelaUtil = new TabelaUtil();
//    tabelaUtil.setDimensionamento(dimensionamento);
//    tabelaUtil.setProduto(produto);
//    
//    sc = tabelaUtil.buscarSecaoAcima(sc);
    
    sc = buscarSecaoAcimaTabelaUtil(sc);
    
    if (sc == 0)
    {
        alert("Não foi possível identificar na linha de cabos padronizados um cabo com a seção determinada pelo critério de curto-circuito.");
    }
    
    if (dimensionamento.isSecaoCondutorFixada())
    {
        if (sc > dimensionamento.getSecaoCondutorFixado())
        {
            alert("A seção fixada não atende ao critério de curto-circuito do projeto.");
        }
        else
        {
            sc = dimensionamento.getSecaoCondutorFixado();
        }
    }
    
//    getDebug().logVariable("tcc", tcc);
//    getDebug().logVariable("icc", icc);
//    getDebug().logVariable("kcc", kcc);
//    getDebug().logVariable("sc", sc);
//    getDebug().logMethodExit();
}

function calcularSemInformacaoCurtoCondutor()
{
    //getDebug().logMethodEnter("calcularSemInformacaoCurtoCondutor");
    
    // Calcula o kcc e o Icc.
    kcc = getKc() * Math.sqrt(Math.log((getTetafc() + getBetac()) / (getTeta0c() + getBetac())) / Math.LN10);
    //alert("calcularSemInformacaoCurtoCondutor kcc: " + kcc)
    
    icc = kcc * (sc / Math.sqrt(getTccDefault()));
    //getDebug().logVariable("kcc", kcc);
    //getDebug().logVariable("icc", icc);
    
    //getDebug().logMethodExit();
}

function calcularCriterioCurtoBlindagem()
{
    //getDebug().logMethodEnter("calcularCriterioCurtoBlindagem");
    var dimensionamento = getDimensionamentoTabelaUtil();
    
    if (dimensionamento.isInformacaoCurtoCircuitoFixada())
    {
        calcularComInformacaoCurtoBlindagem();
    }
    else
    {
        calcularSemInformacaoCurtoBlindagem();
    }
    //getDebug().logMethodExit();
}

function calcularComInformacaoCurtoBlindagem()
{
    //getDebug().logMethodEnter("calcularComInformacaoCurtoBlindagem");
    // FIXME retirar Icb e tcb do local correto (provavelmente o usu·rio vai informar).
    //icb = DadosEscalares.getIcbDefault();
    //tcb = DadosEscalares.getTcbDefault();
    
    var dimensionamento = getDimensionamentoTabelaUtil();
    
    icb = dimensionamento.getCorrenteCurto();
    tcb = dimensionamento.getTempoAtuacaoProtecao();
    
    kbb = getKb() * Math.sqrt(Math.log((getTetafb() + getBetab()) / (getTeta0b() + getBetab())) / Math.LN10);
    //sb = (icb * Math.sqrt(tcb)) / kbb;
    sb = getSbDefault();
    
//    getDebug().logVariable("icb", kcc);
//    getDebug().logVariable("tcb", icc);
//    getDebug().logVariable("kbb", kcc);
//    getDebug().logVariable("sb", icc);
//    getDebug().logMethodExit();
}

function calcularSemInformacaoCurtoBlindagem()
{
    //getDebug().logMethodEnter("calcularSemInformacaoCurtoBlindagem");
    icb = getIcbDefault();
    tcb = getTcbDefault();
    sb = getSbDefault();
    kbb = getKb() * Math.sqrt(Math.log((getTetafb() + getBetab()) / (getTeta0b() + getBetab())) / Math.LN10);
    
//    getDebug().logVariable("icb", kcc);
//    getDebug().logVariable("tcb", icc);
//    getDebug().logVariable("sb", icc);
//    getDebug().logMethodExit();
}

function getTetafc()
{
    var fc = 250;
    
    return fc;
}

function getTeta0c()
{
    var dimensionamento = getDimensionamentoTabelaUtil();
    var temp = 0;
    
    if (dimensionamento.getCaboSelecionado() == EP_DRY || dimensionamento.getCaboSelecionado() == FIPEX_BF)
    {
        temp = 90;
    }
    else if (dimensionamento.getCaboSelecionado() == EP_DRY_105C)
    {
        temp = 105;
    }
    
    return temp;
}

function getBetac()
{
    var dimensionamento = getDimensionamentoTabelaUtil();
    var beta = 0;
    
    if (dimensionamento.isCobre())
    {
        beta = getBetaCCobre();
    }
    else if (dimensionamento.isAluminio())
    {
        beta = getBetaCAluminio();
    }
    
    return beta;
}

function getKc()
{
    var dimensionamento = getDimensionamentoTabelaUtil();
    var kc = 0;
    
    if (dimensionamento.isCobre())
    {
        kc = getKcCobre();
    }
    else if (dimensionamento.isAluminio())
    {
        kc = getKcAluminio();
    }
    
    return kc;
}

function getKb()
{
    var dimensionamento = getDimensionamentoTabelaUtil();
    var kb = 0;
    
    if (dimensionamento.isCobre())
    {
        kb = getKbCobre();
    }
    else if (dimensionamento.isAluminio())
    {
        kb = getKbAluminio();
    }
    
    return kb;
}

function getBetab()
{
    var dimensionamento = getDimensionamentoTabelaUtil();
    var beta = 0;
    
    if (dimensionamento.isCobre())
    {
        beta = getBetaBCobre();
    }
    
    return beta;
}

/**
 * @return  the icb
 */
function getIcb()
{
    return icb;
}

/**
 * @return  the icc
 */
function getIcc()
{
    return icc;
}

/**
 * @return  the sb
 */
function getSb()
{
    return sb;
}

/**
 * @return  the sc
 */
function getSc()
{
    return sc;
}

/**
 * @return  the tcb
 */
function getTcb()
{
    return tcb;
}

/**
 * @return  the tcc
 */
function getTcc()
{
    return tcc;
}

/**
 * @return
 */
function getKcc()
{
    return kcc;
}

/**
 * @return the kbb
 */
function getKbb()
{
    //alert("kbb: " + kbb);
    return kbb;
}

/**
 * @param kbb the kbb to set
 */
function setKbb(Auxkbb)
{
    kbb = Auxkbb;
}