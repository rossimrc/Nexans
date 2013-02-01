/**
 * Constructor description
 * @author Thiago Cavalari
 * @param nomeTabela, original java type String
 * @param tipoCabos, original java type char
 * @param numeroCabos, original java type int
 * @class
 * Class Table09PKBean
 */
function Table09PKBean()
{
	this.nomeTabela		= null;
	this.tipoCabos		= null;
	this.numeroCabos	= null;
}

/**
 * Method description
 * @param Not Params
 * @return The nomeTabela value
 */
Table09PKBean.prototype.getNomeTabela = function() {
    return this.nomeTabela;
};

/**
 * Method description
 * @param Not Params
 * @return The numeroCabos value
 */
Table09PKBean.prototype.getNumeroCabos = function() {
    return this.numeroCabos;
};

/**
 * Method description
 * @param Not Params
 * @return The tipoCabos value
 */
Table09PKBean.prototype.getTipoCabos = function() {
    return this.tipoCabos;
};

/**
 * Method description
 * @param nomeTabela
 * @return {null}
 */
Table09PKBean.prototype.setNomeTabela = function(nomeTabela) {
    this.nomeTabela = nomeTabela;
};

/**
 * Method description
 * @param numeroCabos
 * @return {null}
 */
Table09PKBean.prototype.setNumeroCabos = function(numeroCabos) {
    this.numeroCabos = numeroCabos;
};

/**
 * Method description
 * @param tipoCabos
 * @return {null}
 */
Table09PKBean.prototype.setTipoCabos = function(tipoCabos) {
    this.tipoCabos = tipoCabos;
};
