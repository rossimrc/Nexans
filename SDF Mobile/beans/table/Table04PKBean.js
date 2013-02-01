/**
 * Constructor description
 * @author Thiago Cavalari
 * @param secao, original java type double
 * @param nomeTabela, original java type String
 * @class
 * Class Table04PKBean
 */
function Table04PKBean()
{
	this.secao			= null;
	this.nomeTabela		= null;
}

/**
 * Method description
 * @param Not Params
 * @return The secao value
 */
Table04PKBean.prototype.getSecao = function() {
    return this.secao;
};

/**
 * Method description
 * @param secao
 * @return {null}
 */
Table04PKBean.prototype.setSecao = function(secao) {
    this.secao = secao;
};

/**
 * Method description
 * @param Not Params
 * @return The nomeTabela value
 */
Table04PKBean.prototype.getNomeTabela = function() {
    return this.nomeTabela;
};

/**
 * Method description
 * @param nomeTabela
 * @return {null}
 */
Table04PKBean.prototype.setNomeTabela = function(nomeTabela) {
    this.nomeTabela = nomeTabela;
};