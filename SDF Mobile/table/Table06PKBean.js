/**
 * Constructor description
 * @author Thiago Cavalari
 * @param fatorCorrecao, original java type float
 * @param resistTermica, original java type float
 * @class
 * Class Table06PKBean
 */
function Table06PKBean()
{
	this.fatorCorrecao		= null;
	this.resistTermica		= null;
}

/**
 * Method description
 * @param Not Params
 * @return The fatorCorrecao value
 */
Table06PKBean.prototype.getFatorCorrecao = function() {
    return this.fatorCorrecao;
};

/**
 * Method description
 * @param fatorCorrecao
 * @return {null}
 */
Table06PKBean.prototype.setFatorCorrecao = function(fatorCorrecao) {
    this.fatorCorrecao = fatorCorrecao;
};

/**
 * Method description
 * @param Not Params
 * @return The resistTermica value
 */
Table06PKBean.prototype.getResistTermica = function() {
    return this.resistTermica;
};

/**
 * Method description
 * @param resistTermica
 * @return {null}
 */
Table06PKBean.prototype.setResistTermica = function(resistTermica) {
    this.resistTermica = resistTermica;
};