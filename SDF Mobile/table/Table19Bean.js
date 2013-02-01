/**
 * Constructor description
 * @author Thiago Cavalari
 * @param nomeBanco, original java type String
 * @param valor22, original java type double
 * @param valor23, original java type double
 * @param valor33, original java type double
 * @class
 * Class Table19Bean
 */
function Table19Bean()
{
	this.nomeBanco		= null;
	this.valor22		= null;
	this.valor23		= null;
	this.valor33		= null;
}


/**
 * Method description
 * @param Not Params
 * @return The nomeBanco value
 */
Table19Bean.prototype.getNomeBanco = function() {
    return this.nomeBanco;
};

/**
 * Method description
 * @param Not Params
 * @return The valor22 value
 */
Table19Bean.prototype.getValor22 = function() {
    return this.valor22;
};

/**
 * Method description
 * @param Not Params
 * @return The valor23 value
 */
Table19Bean.prototype.getValor23 = function() {
    return this.valor23;
};

/**
 * Method description
 * @param Not Params
 * @return The valor33 value
 */
Table19Bean.prototype.getValor33 = function() {
    return this.valor33;
};

/**
 * Method description
 * @param nomeBanco
 * @return {null}
 */
Table19Bean.prototype.setNomeBanco = function(nomeBanco) {
    this.nomeBanco = nomeBanco;
};

/**
 * Method description
 * @param valor22
 * @return {null}
 */
Table19Bean.prototype.setValor22 = function(valor22) {
    this.valor22 = valor22;
};

/**
 * Method description
 * @param valor23
 * @return {null}
 */
Table19Bean.prototype.setValor23 = function(valor23) {
    this.valor23 = valor23;
};

/**
 * Method description
 * @param valor33
 * @return {null}
 */
Table19Bean.prototype.setValor33 = function(valor33) {
    this.valor33 = valor33;
};