/**
 * Constructor description
 * @author Thiago Cavalari
 * @param id, original java type Table11PKBean
 * @param circuitosTrifasicos1, original java type int
 * @param circuitosTrifasicos2, original java type double
 * @param circuitosTrifasicos3, original java type double
 * @class
 * Class Table11Bean
 */
function Table11Bean()
{
	this.id						= null;
	this.circuitosTrifasicos1	= null;
	this.circuitosTrifasicos2	= null;
	this.circuitosTrifasicos3	= null;
	
	this.id = new Table11PKBean();
}

/**
 * Method description
 * @param Not Params
 * @return The circuitosTrifasicos1 value
 */
Table11Bean.prototype.getCircuitosTrifasicos1 = function() {
    return this.circuitosTrifasicos1;
};

/**
 * Method description
 * @param circuitosTrifasicos1
 * @return {null}
 */
Table11Bean.prototype.setCircuitosTrifasicos1 = function(circuitosTrifasicos1) {
    this.circuitosTrifasicos1 = circuitosTrifasicos1;
};

/**
 * Method description
 * @param Not Params
 * @return The circuitosTrifasicos2 value
 */
Table11Bean.prototype.getCircuitosTrifasicos2 = function() {
    return this.circuitosTrifasicos2;
};

/**
 * Method description
 * @param circuitosTrifasicos2
 * @return {null}
 */
Table11Bean.prototype.setCircuitosTrifasicos2 = function(circuitosTrifasicos2) {
    this.circuitosTrifasicos2 = circuitosTrifasicos2;
};

/**
 * Method description
 * @param Not Params
 * @return The circuitosTrifasicos3 value
 */
Table11Bean.prototype.getCircuitosTrifasicos3 = function() {
    return this.circuitosTrifasicos3;
};

/**
 * Method description
 * @param circuitosTrifasicos3
 * @return {null}
 */
Table11Bean.prototype.setCircuitosTrifasicos3 = function(circuitosTrifasicos3) {
    this.circuitosTrifasicos3 = circuitosTrifasicos3;
};

/**
 * Method description
 * @param Not Params
 * @return The id.instalacao value
 */
Table11Bean.prototype.getInstalacao = function() {
    return this.id.getInstalacao();
};

/**
 * Method description
 * @param id.instalacao
 * @return {null}
 */
Table11Bean.prototype.setInstalacao = function(instalacao) {
	return this.id.setInstalacao(instalacao);
};

/**
 * Method description
 * @param Not Params
 * @return The id.numeroBandejas value
 */
Table11Bean.prototype.getNumeroBandejas = function() {
    return this.id.getNumeroBandejas();
};

/**
 * Method description
 * @param id.numeroBandejas
 * @return {null}
 */
Table11Bean.prototype.setNumeroBandejas = function(numeroBandejas) {
	return this.id.setNumeroBandejas(numeroBandejas);
};

/**
 * Method description
 * @param Not Params
 * @return The id value
 */
Table11Bean.prototype.getId = function() {
    return this.id;
};

/**
 * Method description
 * @param id
 * @return {null}
 */
Table11Bean.prototype.setId = function(id) {
    this.id = id;
};