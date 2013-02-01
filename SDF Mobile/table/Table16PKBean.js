/**
 * Constructor description
 * @author Thiago Cavalari
 * @param nomeTabela, original java type String
 * @param temperatura, original java type int
 * @class
 * Class Table16PKBean
 */
function Table16PKBean()
{
	this.nomeTabela			= null;
	this.temperatura		= null;
}

/**
 * Method description
 * @param Not Params
 * @return The nomeTabela value
 */
Table16PKBean.prototype.getNomeTabela = function() {
    return this.nomeTabela;
};

/**
 * Method description
 * @param nomeTabela
 * @return {null}
 */
Table16PKBean.prototype.setNomeTabela = function(nomeTabela) {
    this.nomeTabela = nomeTabela;
};

/**
 * Method description
 * @param Not Params
 * @return The temperatura value
 */
Table16PKBean.prototype.getTemperatura = function() {
    return this.temperatura;
};

/**
 * Method description
 * @param temperatura
 * @return {null}
 */
Table16PKBean.prototype.setTemperatura = function(temperatura) {
    this.temperatura = temperatura;
};