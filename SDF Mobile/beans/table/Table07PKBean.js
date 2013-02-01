/**
 * Constructor description
 * @author Thiago Cavalari
 * @param nomeTabela, original java type String
 * @param tipoTemperatura, original java type char
 * @param temperatura, original java type int
 * @class
 * Class Table07PKBean
 */
function Table07PKBean()
{
	this.nomeTabela				= null;
	this.tipoTemperatura		= null;
	this.nomeTtemperaturaabela	= null;
}

/**
 * Method description
 * @param Not Params
 * @return The temperatura value
 */
Table07PKBean.prototype.getTemperatura = function() {
    return this.temperatura;
};

/**
 * Method description
 * @param Not Params
 * @return The tipoTemperatura value
 */
Table07PKBean.prototype.getTipoTemperatura = function() {
    return this.tipoTemperatura;
};

/**
 * Method description
 * @param Not Params
 * @return The nomeTabela value
 */
Table07PKBean.prototype.getNomeTabela = function() {
    return this.nomeTabela;
};

/**
 * Method description
 * @param temperatura
 * @return {null}
 */
Table07PKBean.prototype.setTemperatura = function(temperatura) {
    this.temperatura = temperatura;
};

/**
 * Method description
 * @param tipoTemperatura
 * @return {null}
 */
Table07PKBean.prototype.setTipoTemperatura = function(tipoTemperatura) {
    this.tipoTemperatura = tipoTemperatura;
};

/**
 * Method description
 * @param nomeTabela
 * @return {null}
 */
Table07PKBean.prototype.setNomeTabela = function(nomeTabela) {
    this.nomeTabela = nomeTabela;
};