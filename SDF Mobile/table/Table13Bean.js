/**
 * Constructor description
 * @author Thiago Cavalari
 * @param id, original java type Table13PKBean
 * @param numeroCabosBandeja1, original java type double
 * @param numeroCabosBandeja2, original java type double
 * @param numeroCabosBandeja3, original java type double
 * @param numeroCabosBandeja4, original java type double
 * @param numeroCabosBandeja6, original java type double
 * @param numeroCabosBandeja9, original java type double
 * @class
 * Class Table13Bean
 */
function Table13Bean()
{
	this.id			= null;
	this.numeroCabosBandeja1	= null;
	this.numeroCabosBandeja2	= null;
	this.numeroCabosBandeja3	= null;
	this.numeroCabosBandeja4	= null;
	this.numeroCabosBandeja6	= null;
	this.numeroCabosBandeja9	= null;
	
	this.id = new Table13PKBean();
}

/**
 * Method description
 * @param Not Params
 * @return The id value
 */
Table13Bean.prototype.getId = function() {
    return this.id;
};

/**
 * Method description
 * @param id
 * @return {null}
 */
Table13Bean.prototype.setId = function(id) {
    this.id = id;
};

/**
 * Method description
 * @param Not Params
 * @return The numeroCabosBandeja1 value
 */
Table13Bean.prototype.getNumeroCabosBandeja1 = function() {
    return this.numeroCabosBandeja1;
};

/**
 * Method description
 * @param numeroCabosBandeja1
 * @return {null}
 */
Table13Bean.prototype.setNumeroCabosBandeja1 = function(numeroCabosBandeja1) {
    this.numeroCabosBandeja1 = numeroCabosBandeja1;
};

/**
 * Method description
 * @param Not Params
 * @return The numeroCabosBandeja2 value
 */
Table13Bean.prototype.getNumeroCabosBandeja2 = function() {
    return this.numeroCabosBandeja2;
};

/**
 * Method description
 * @param numeroCabosBandeja2
 * @return {null}
 */
Table13Bean.prototype.setNumeroCabosBandeja2 = function(numeroCabosBandeja2) {
    this.numeroCabosBandeja2 = numeroCabosBandeja2;
};

/**
 * Method description
 * @param Not Params
 * @return The numeroCabosBandeja3 value
 */
Table13Bean.prototype.getNumeroCabosBandeja3 = function() {
    return this.numeroCabosBandeja3;
};

/**
 * Method description
 * @param numeroCabosBandeja3
 * @return {null}
 */
Table13Bean.prototype.setNumeroCabosBandeja3 = function(numeroCabosBandeja3) {
    this.numeroCabosBandeja3 = numeroCabosBandeja3;
};

/**
 * Method description
 * @param Not Params
 * @return The numeroCabosBandeja4 value
 */
Table13Bean.prototype.getNumeroCabosBandeja4 = function() {
    return this.numeroCabosBandeja4;
};

/**
 * Method description
 * @param numeroCabosBandeja4
 * @return {null}
 */
Table13Bean.prototype.setNumeroCabosBandeja4 = function(numeroCabosBandeja4) {
    this.numeroCabosBandeja4 = numeroCabosBandeja4;
};

/**
 * Method description
 * @param Not Params
 * @return The numeroCabosBandeja6 value
 */
Table13Bean.prototype.getNumeroCabosBandeja6 = function() {
    return this.numeroCabosBandeja6;
};

/**
 * Method description
 * @param numeroCabosBandeja6
 * @return {null}
 */
Table13Bean.prototype.setNumeroCabosBandeja6 = function(numeroCabosBandeja6) {
    this.numeroCabosBandeja6 = numeroCabosBandeja6;
};

/**
 * Method description
 * @param Not Params
 * @return The numeroCabosBandeja9 value
 */
Table13Bean.prototype.getNumeroCabosBandeja9 = function() {
    return this.numeroCabosBandeja9;
};

/**
 * Method description
 * @param numeroCabosBandeja9
 * @return {null}
 */
Table13Bean.prototype.setNumeroCabosBandeja9 = function(numeroCabosBandeja9) {
    this.numeroCabosBandeja9 = numeroCabosBandeja9;
};

/**
 * Method description
 * @param Not Params
 * @return The instalacao value
 */
Table13Bean.prototype.getInstalacao = function() {
    return this.id.getInstalacao();
};

/**
 * Method description
 * @param instalacao
 * @return {null}
 */
Table13Bean.prototype.setInstalacao = function(instalacao) {
	return this.id.setInstalacao(instalacao);
};

/**
 * Method description
 * @param Not Params
 * @return The numeroBandejas value
 */
Table13Bean.prototype.getNumeroBandejas = function() {
    return this.id.getNumeroBandejas();
};

/**
 * Method description
 * @param numeroBandejas
 * @return {null}
 */
Table13Bean.prototype.setNumeroBandejas = function(numeroBandejas) {
	return this.id.setNumeroBandejas(numeroBandejas);
};