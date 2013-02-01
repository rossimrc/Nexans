/**
 * Constructor description
 * @author Thiago Cavalari
 * @param id, original java type Table10PKBean
 * @param valorA, original java type int
 * @param valorB, original java type int
 * @param valorC, original java type int
 * @param valorD, original java type int
 * @param valorE, original java type int
 * @param valorF, original java type int
 * @param valorG, original java type int
 * @param valorH, original java type int
 * @param valorI, original java type int
 * @class
 * Class Table10Bean
 */
function Table10Bean()
{
	this.id			= null;
	this.valorA		= null;
	this.valorB		= null;
	this.valorC		= null;
	this.valorD		= null;
	this.valorE		= null;
	this.valorF		= null;
	this.valorG		= null;
	this.valorH		= null;
	this.valorI		= null;
	
	this.id = new Table10PKBean();
}

/**
 * Method description
 * @param Not Params
 * @return The nomeTabela value
 */
Table10Bean.prototype.getNomeTabela = function() {
    return this.id.getNomeTabela();
};

/**
 * Method description
 * @param Not Params
 * @return The secao value
 */
Table10Bean.prototype.getSecao = function() {
    return this.id.getSecao();
};

/**
 * Method description
 * @param nomeTabela
 * @return {null}
 */
Table10Bean.prototype.setNomeTabela = function(nomeTabela) {
	return this.id.setNomeTabela(nomeTabela);
};

/**
 * Method description
 * @param nomeTabela
 * @return {null}
 */
Table10Bean.prototype.setSecao = function(secao) {
	return this.id.setSecao(secao);
};

/**
 * Method description
 * @param Not Params
 * @return The id value
 */
Table10Bean.prototype.getId = function() {
    return this.id;
};

/**
 * Method description
 * @param id
 * @return {null}
 */
Table10Bean.prototype.setId = function(id) {
    this.id = id;
};

/**
 * Method description
 * @param Not Params
 * @return The valorA value
 */
Table10Bean.prototype.getValorA = function() {
    return this.valorA;
};

/**
 * Method description
 * @param valorA
 * @return {null}
 */
Table10Bean.prototype.setValorA = function(valorA) {
    this.valorA = valorA;
};

/**
 * Method description
 * @param Not Params
 * @return The valorB value
 */
Table10Bean.prototype.getValorB = function() {
    return this.valorB;
};

/**
 * Method description
 * @param valorB
 * @return {null}
 */
Table10Bean.prototype.setValorB = function(valorB) {
    this.valorB = valorB;
};

/**
 * Method description
 * @param Not Params
 * @return The valorC value
 */
Table10Bean.prototype.getValorC = function() {
    return this.valorC;
};

/**
 * Method description
 * @param valorC
 * @return {null}
 */
Table10Bean.prototype.setValorC = function(valorC) {
    this.valorC = valorC;
};

/**
 * Method description
 * @param Not Params
 * @return The valorD value
 */
Table10Bean.prototype.getValorD = function() {
    return this.valorD;
};

/**
 * Method description
 * @param valorD
 * @return {null}
 */
Table10Bean.prototype.setValorD = function(valorD) {
    this.valorD = valorD;
};

/**
 * Method description
 * @param Not Params
 * @return The valorE value
 */
Table10Bean.prototype.getValorE = function() {
    return this.valorE;
};

/**
 * Method description
 * @param valorE
 * @return {null}
 */
Table10Bean.prototype.setValorE = function(valorE) {
    this.valorE = valorE;
};

/**
 * Method description
 * @param Not Params
 * @return The valorF value
 */
Table10Bean.prototype.getValorF = function() {
    return this.valorF;
};

/**
 * Method description
 * @param valorF
 * @return {null}
 */
Table10Bean.prototype.setValorF = function(valorF) {
    this.valorF = valorF;
};

/**
 * Method description
 * @param Not Params
 * @return The valorG value
 */
Table10Bean.prototype.getValorG = function() {
    return this.valorG;
};

/**
 * Method description
 * @param valorG
 * @return {null}
 */
Table10Bean.prototype.setValorG = function(valorG) {
    this.valorG = valorG;
};

/**
 * Method description
 * @param Not Params
 * @return The valorH value
 */
Table10Bean.prototype.getValorH = function() {
    return this.valorH;
};

/**
 * Method description
 * @param valorH
 * @return {null}
 */
Table10Bean.prototype.setValorH = function(valorH) {
    this.valorH = valorH;
};

/**
 * Method description
 * @param Not Params
 * @return The valorI value
 */
Table10Bean.prototype.getValorI = function() {
    return this.valorI;
};

/**
 * Method description
 * @param valorI
 * @return {null}
 */
Table10Bean.prototype.setValorI = function(valorI) {
    this.valorI = valorI;
};