/**
 * Constructor description
 * @author Thiago Cavalari
 * @param cabo, original java type String
 * @param localInstalacao, original java type String
 * @param secao, original java type double
 * @param numeroCabosFase, original java type int
 * @class
 * Class CaboAlternativoBean
 */
function CaboAlternativoBean(cabo, localInstalacao, secao, numeroCabosFase)
{
	this.cabo				= cabo;
	this.localInstalacao	= localInstalacao;
	this.secao				= secao;
	this.numeroCabosFase	= numeroCabosFase;
}

/**
 * Method description
 * @param Not Params
 * @return {string} The cabo value
 */
CaboAlternativoBean.prototype.getCabo = function() {
    return this.cabo;
};

/**
 * Method description
 * @param cabo
 * @return {string} The cabo value
 */
//CaboAlternativoBean.prototype.setCabo = function(cabo) {
//    return this.cabo = cabo;
//};

/**
 * Method description
 * @param Not Params
 * @return {string} The localInstalacao value
 */
CaboAlternativoBean.prototype.getLocalInstalacao = function() {
    return this.localInstalacao;
};

/**
 * Method description
 * @param Not Params
 * @return {string} The secao value
 */
CaboAlternativoBean.prototype.getSecao = function() {
    return this.secao;
};

/**
 * Method description
 * @param Not Params
 * @return {string} The numeroCabosFase value
 */
CaboAlternativoBean.prototype.getNumeroCabosFase = function() {
    return this.numeroCabosFase;
};
