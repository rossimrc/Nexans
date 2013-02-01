/**
 * Constructor description
 * @author Thiago Cavalari
 * @param id, original java type Table18PKBean
 * @param valor1, original java type double
 * @param valor2, original java type double
 * @param valor3, original java type double
 * @param valor6, original java type double
 * @param valor9, original java type double
 * @class
 * Class Table18Bean
 */
function Table18Bean()
{
	this.id			= null;
	this.valor1		= null;
	this.valor2		= null;
	this.valor3		= null;
	this.valor6		= null;
	this.valor9		= null;
	
	this.id = new Table18PKBean();
}

/**
 * Method description
 * @param Not Params
 * @return The nomeTabela value
 */
Table18Bean.prototype.getNomeTabela = function() {
    return this.id.getNomeTabela();
};

/**
 * Method description
 * @param nomeTabela
 * @return {null}
 */
Table18Bean.prototype.setNomeTabela = function(nomeTabela) {
	return this.id.setNomeTabela(nomeTabela);
};

/**
 * Method description
 * @param Not Params
 * @return The numeroBandejas value
 */
Table18Bean.prototype.getNumeroBandejas = function() {
    return this.id.getNumeroBandejas();
};

/**
 * Method description
 * @param numeroBandejas
 * @return {null}
 */
Table18Bean.prototype.setNumeroBandejas = function(numeroBandejas) {
	return this.id.setNumeroBandejas(numeroBandejas);
};

/**
 * Method description
 * @param Not Params
 * @return The id value
 */
Table18Bean.prototype.getId = function() {
    return this.id;
};

/**
 * Method description
 * @param id
 * @return {null}
 */
Table18Bean.prototype.setId = function(id) {
    this.id = id;
};

/**
 * Method description
 * @param Not Params
 * @return The valor1 value
 */
Table18Bean.prototype.getValor1 = function() {
    return this.valor1;
};

/**
 * Method description
 * @param valor1
 * @return {null}
 */
Table18Bean.prototype.setValor1 = function(valor1) {
    this.valor1 = valor1;
};

/**
 * Method description
 * @param Not Params
 * @return The valor2 value
 */
Table18Bean.prototype.getValor2 = function() {
    return this.valor2;
};

/**
 * Method description
 * @param valor2
 * @return {null}
 */
Table18Bean.prototype.setValor2 = function(valor2) {
    this.valor2 = valor2;
};

/**
 * Method description
 * @param Not Params
 * @return The valor3 value
 */
Table18Bean.prototype.getValor3 = function() {
    return this.valor3;
};

/**
 * Method description
 * @param valor3
 * @return {null}
 */
Table18Bean.prototype.setValor3 = function(valor3) {
    this.valor3 = valor3;
};

/**
 * Method description
 * @param Not Params
 * @return The valor6 value
 */
Table18Bean.prototype.getValor6 = function() {
    return this.valor6;
};

/**
 * Method description
 * @param valor6
 * @return {null}
 */
Table18Bean.prototype.setValor6 = function(valor6) {
    this.valor6 = valor6;
};

/**
 * Method description
 * @param Not Params
 * @return The valor9 value
 */
Table18Bean.prototype.getValor9 = function() {
    return this.valor9;
};

/**
 * Method description
 * @param valor9
 * @return {null}
 */
Table18Bean.prototype.setValor9 = function(valor9) {
    this.valor9 = valor9;
};