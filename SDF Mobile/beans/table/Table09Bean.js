/**
 * Constructor description
 * @author Thiago Cavalari
 * @param id, original java type Table09PKBean
 * @param nula, original java type double
 * @param valor_025, original java type double
 * @param valor_05, original java type double
 * @param valor_1, original java type double
 * @class
 * Class Table09Bean
 */
function Table09Bean()
{
	this.id				= null;
	this.nula			= null;
	this.valor_025		= null;
	this.valor_05		= null;
	this.valor_1		= null;
	
	this.id = new Table09PKBean();
}

/**
 * Method description
 * @param Not Params
 * @return The id value
 */
Table09Bean.prototype.getId = function() {
    return this.id;
};

/**
 * Method description
 * @param id
 * @return {null}
 */
Table09Bean.prototype.setId = function(id) {
    this.id = id;
};

/**
 * Method description
 * @param Not Params
 * @return The nomeTabela value
 */
Table09Bean.prototype.getNomeTabela = function() {
    return this.id.getNomeTabela();
};

/**
 * Method description
 * @param Not Params
 * @return The nula value
 */
Table09Bean.prototype.getNula = function() {
    return this.nula;
};

/**
 * Method description
 * @param Not Params
 * @return The numeroCabos value
 */
Table09Bean.prototype.getNumeroCabos = function() {
	return this.id.getNumeroCabos();
};

/**
 * Method description
 * @param Not Params
 * @return The tipoCabos value
 */
Table09Bean.prototype.getTipoCabos = function() {
	return this.id.getTipoCabos();
};

/**
 * Method description
 * @param Not Params
 * @return The valor_025 value
 */
Table09Bean.prototype.getValor_025 = function() {
    return this.valor_025;
};

/**
 * Method description
 * @param Not Params
 * @return The valor_05 value
 */
Table09Bean.prototype.getValor_05 = function() {
    return this.valor_05;
};

/**
 * Method description
 * @param Not Params
 * @return The valor_1 value
 */
Table09Bean.prototype.getValor_1 = function() {
    return this.valor_1;
};

/**
 * Method description
 * @param nomeTabela
 * @return {null}
 */
Table09Bean.prototype.setNomeTabela = function(nomeTabela) {
	return this.id.setNomeTabela(nomeTabela);
};

/**
 * Method description
 * @param nula
 * @return {null}
 */
Table09Bean.prototype.setNula = function(nula) {
    this.nula = nula;
};

/**
 * Method description
 * @param numeroCabos
 * @return {null}
 */
Table09Bean.prototype.setNumeroCabos = function(numeroCabos) {
	return this.id.setNumeroCabos(numeroCabos);
};

/**
 * Method description
 * @param tipoCabos
 * @return {null}
 */
Table09Bean.prototype.setTipoCabos = function(tipoCabos) {
	return this.id.setTipoCabos(tipoCabos);
};

/**
 * Method description
 * @param valor_025
 * @return {null}
 */
Table09Bean.prototype.setValor_025 = function(valor_025) {
    this.valor_025 = valor_025;
};

/**
 * Method description
 * @param valor_05
 * @return {null}
 */
Table09Bean.prototype.setValor_05 = function(valor_05) {
    this.valor_05 = valor_05;
};

/**
 * Method description
 * @param valor_1
 * @return {null}
 */
Table09Bean.prototype.setValor_1 = function(valor_1) {
    this.valor_1 = valor_1;
};