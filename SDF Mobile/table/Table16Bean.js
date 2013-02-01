/**
 * Constructor description
 * @author Thiago Cavalari
 * @param id, original java type Table16PKBean
 * @param valorEPRXLPE, original java type double
 * @param valorEPR105, original java type double
 * @class
 * Class Table16Bean
 */
function Table16Bean()
{
	this.id			= null;
	this.valorEPRXLPE		= null;
	this.valorEPR105	= null;
	
	this.id = new Table16PKBean();
}

/**
 * Method description
 * @param Not Params
 * @return The nomeTabela value
 */
Table16Bean.prototype.getNomeTabela = function() {
    return this.id.getNomeTabela();
};

/**
 * Method description
 * @param nomeTabela
 * @return {null}
 */
Table16Bean.prototype.setNomeTabela = function(nomeTabela) {
	return this.id.setNomeTabela(nomeTabela);
};

/**
 * Method description
 * @param Not Params
 * @return The temperatura value
 */
Table16Bean.prototype.getTemperatura = function() {
    return this.id.getTemperatura();
};

/**
 * Method description
 * @param temperatura
 * @return {null}
 */
Table16Bean.prototype.setTemperatura = function(temperatura) {
	return this.id.setTemperatura(temperatura);
};

/**
 * Method description
 * @param Not Params
 * @return The id value
 */
Table16Bean.prototype.getId = function() {
    return this.id;
};

/**
 * Method description
 * @param id
 * @return {null}
 */
Table16Bean.prototype.setId = function(id) {
    this.id = id;
};

/**
 * Method description
 * @param Not Params
 * @return The valorEPR105 value
 */
Table16Bean.prototype.getValorEPR105 = function() {
    return this.valorEPR105;
};

/**
 * Method description
 * @param valorEPR105
 * @return {null}
 */
Table16Bean.prototype.setValorEPR105 = function(valorEPR105) {
    this.valorEPR105 = valorEPR105;
};

/**
 * Method description
 * @param Not Params
 * @return The valorEPRXLPE value
 */
Table16Bean.prototype.getValorEPRXLPE = function() {
    return this.valorEPRXLPE;
};

/**
 * Method description
 * @param valorEPRXLPE
 * @return {null}
 */
Table16Bean.prototype.setValorEPRXLPE = function(valorEPRXLPE) {
    this.valorEPRXLPE = valorEPRXLPE;
};