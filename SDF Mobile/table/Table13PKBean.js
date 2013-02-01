/**
 * Constructor description
 * @author Thiago Cavalari
 * @param numeroBandejas, original java type int
 * @param instalacao, original java type String
 * @class
 * Class Table13PKBean
 */
function Table13PKBean()
{
	this.numeroBandejas		= null;
	this.instalacao			= null;
}

/**
 * Method description
 * @param Not Params
 * @return The instalacao value
 */
Table13PKBean.prototype.getInstalacao = function() {
    return this.instalacao;
};

/**
 * Method description
 * @param instalacao
 * @return {null}
 */
Table13PKBean.prototype.setInstalacao = function(instalacao) {
    this.instalacao = instalacao;
};

/**
 * Method description
 * @param Not Params
 * @return The numeroBandejas value
 */
Table13PKBean.prototype.getNumeroBandejas = function() {
    return this.numeroBandejas;
};

/**
 * Method description
 * @param numeroBandejas
 * @return {null}
 */
Table13PKBean.prototype.setNumeroBandejas = function(numeroBandejas) {
    this.numeroBandejas = numeroBandejas;
};