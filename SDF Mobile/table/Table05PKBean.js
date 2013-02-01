/**
 * Constructor description
 * @author Thiago Cavalari
 * @param secao, original java type double
 * @param nomeTabela, original java type String
 * @class
 * Class Table05PKBean
 */
function Table05PKBean()
{
	this.secao			= null;
	this.nomeTabela		= null;
}

/**
 * Method description
 * @param Not Params
 * @return The secao value
 */
Table05PKBean.prototype.getSecao = function() {
    return this.secao;
};

/**
 * Method description
 * @param secao
 * @return {null}
 */
Table05PKBean.prototype.setSecao = function(secao) {
    this.secao = secao;
};

/**
 * Method description
 * @param Not Params
 * @return The nomeTabela value
 */
Table05PKBean.prototype.getNomeTabela = function() {
    return this.nomeTabela;
};

/**
 * Method description
 * @param nomeTabela
 * @return {null}
 */
Table05PKBean.prototype.setNomeTabela = function(nomeTabela) {
    this.nomeTabela = nomeTabela;
};