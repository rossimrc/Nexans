/**
 * Constructor description
 * @author Thiago Cavalari
 * @param nomeTabela, original java type String
 * @param numeroBandejas, original java type int
 * @class
 * Class Table18PKBean
 */
function Table18PKBean()
{
	this.nomeTabela			= null;
	this.numeroBandejas		= null;
}

/**
 * Method description
 * @param Not Params
 * @return The nomeTabela value
 */
Table18PKBean.prototype.getNomeTabela = function() {
    return this.nomeTabela;
};

/**
 * Method description
 * @param nomeTabela
 * @return {null}
 */
Table18PKBean.prototype.setNomeTabela = function(nomeTabela) {
    this.nomeTabela = nomeTabela;
};

/**
 * Method description
 * @param Not Params
 * @return The numeroBandejas value
 */
Table18PKBean.prototype.getNumeroBandejas = function() {
    return this.numeroBandejas;
};

/**
 * Method description
 * @param numeroBandejas
 * @return {null}
 */
Table18PKBean.prototype.setNumeroBandejas = function(numeroBandejas) {
    this.numeroBandejas = numeroBandejas;
};