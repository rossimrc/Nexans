/**
 * Constructor description
 * @author Thiago Cavalari
 * @param id, original java type Table06PKBean
 * @class
 * Class Table06Bean
 */
function Table06Bean()
{
	this.id	= null;
	
	this.id = new Table06PKBean();
}

/**
 * Method description
 * @param Not Params
 * @return The id value
 */
Table06Bean.prototype.getId = function() {
    return this.id;
};

/**
 * Method description
 * @param Not Params
 * @return The id value
 */
Table06Bean.prototype.getFatorCorrecao = function() {
    return this.id.getFatorCorrecao();
};

/**
 * Method description
 * @param Not Params
 * @return The id value
 */
Table06Bean.prototype.getResistTermica = function() {
    return this.id.getResistTermica();
};

/**
 * Method description
 * @param id
 * @return {null}
 */
Table06Bean.prototype.setId = function(id) {
    this.id = id;
};

/**
 * Method description
 * @param fatorCorrecao
 * @return {null}
 */
Table06Bean.prototype.setFatorCorrecao = function(fatorCorrecao) {
	return this.id.setFatorCorrecao(fatorCorrecao);
};

/**
 * Method description
 * @param resistTermica
 * @return {null}
 */
Table06Bean.prototype.setResistTermica = function(resistTermica) {
	return this.id.setResistTermica(resistTermica);
};