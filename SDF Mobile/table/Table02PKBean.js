/**
 * Constructor description
 * @author Thiago Cavalari
 * @param secao, original java type float
 * @param nomeTabela, original java type String
 * @class
 * Class Table02PKBean
 */
function Table02PKBean()
{
	this.secao			= null;
	this.nomeTabela		= null;
}

/**
 * Method description
 * @param Not Params
 * @return The nomeTabela value
 */
Table02PKBean.prototype.getNomeTabela = function() {
    return this.nomeTabela;
};

/**
 * Method description
 * @param nomeTabela
 * @return {null}
 */
Table02PKBean.prototype.setNomeTabela = function(nomeTabela) {
    this.nomeTabela = nomeTabela;
};

/**
 * Method description
 * @param Not Params
 * @return The secao value
 */
Table02PKBean.prototype.getSecao = function() {
    return this.secao;
};

/**
 * Method description
 * @param secao
 * @return {null}
 */
Table02PKBean.prototype.setSecao = function(secao) {
    this.secao = secao;
};