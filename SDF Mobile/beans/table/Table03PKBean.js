/**
 * Constructor description
 * @author Thiago Cavalari
 * @param secao, original java type int
 * @param codigoNorma, original java type String
 * @param nomeTabela, original java type String
 * @class
 * Class Table03PKBean
 */
function Table03PKBean()
{
	this.secao			= null;
	this.codigoNorma	= null;
	this.nomeTabela		= null;
}

/**
 * Method description
 * @param Not Params
 * @return The secao value
 */
Table03PKBean.prototype.getSecao = function() {
    return this.secao;
};

/**
 * Method description
 * @param secao
 * @return {null}
 */
Table03PKBean.prototype.setSecao = function(secao) {
    this.secao = secao;
};

/**
 * Method description
 * @param Not Params
 * @return The codigoNorma value
 */
Table03PKBean.prototype.getCodigoNorma = function() {
    return this.codigoNorma;
};

/**
 * Method description
 * @param codigoNorma
 * @return {null}
 */
Table03PKBean.prototype.setCodigoNorma = function(codigoNorma) {
    this.codigoNorma = codigoNorma;
};

/**
 * Method description
 * @param Not Params
 * @return The nomeTabela value
 */
Table03PKBean.prototype.getNomeTabela = function() {
    return this.nomeTabela;
};

/**
 * Method description
 * @param nomeTabela
 * @return {null}
 */
Table03PKBean.prototype.setNomeTabela = function(nomeTabela) {
    this.nomeTabela = nomeTabela;
};