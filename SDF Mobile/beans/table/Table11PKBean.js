/**
 * Constructor description
 * @author Thiago Cavalari
 * @param numeroBandejas, original java type int
 * @param instalacao, original java type String
 * @class
 * Class Table11PKBean
 */
function Table11PKBean()
{
	this.numeroBandejas		= null;
	this.instalacao			= null;
}

/**
 * Method description
 * @param Not Params
 * @return The instalacao value
 */
Table11PKBean.prototype.getInstalacao = function() {
    return this.instalacao;
};

/**
 * Method description
 * @param instalacao
 * @return {null}
 */
Table11PKBean.prototype.setInstalacao = function(instalacao) {
    this.instalacao = instalacao;
};

/**
 * Method description
 * @param Not Params
 * @return The numeroBandejas value
 */
Table11PKBean.prototype.getNumeroBandejas = function() {
    return this.numeroBandejas;
};

/**
 * Method description
 * @param numeroBandejas
 * @return {null}
 */
Table11PKBean.prototype.setNumeroBandejas = function(numeroBandejas) {
    this.numeroBandejas = numeroBandejas;
};