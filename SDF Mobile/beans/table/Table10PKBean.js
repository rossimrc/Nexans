/**
 * Constructor description
 * @author Thiago Cavalari
 * @param nomeTabela, original java type String
 * @param secao, original java type float
 * @class
 * Class Table10PKBean
 */
function Table10PKBean()
{
	this.nomeTabela		= null;
	this.secao			= null;
}

/**
 * Method description
 * @param Not Params
 * @return The nomeTabela value
 */
Table10PKBean.prototype.getNomeTabela = function() {
    return this.nomeTabela;
};

/**
 * Method description
 * @param nomeTabela
 * @return {null}
 */
Table10PKBean.prototype.setNomeTabela = function(nomeTabela) {
    this.nomeTabela = nomeTabela;
};

/**
 * Method description
 * @param Not Params
 * @return The secao value
 */
Table10PKBean.prototype.getSecao = function() {
    return this.secao;
};

/**
 * Method description
 * @param secao
 * @return {null}
 */
Table10PKBean.prototype.setSecao = function(secao) {
    this.secao = secao;
};