/**
 * Constructor description
 * @author Thiago Cavalari
 * @param id, original java type Table04PKBean
 * @param tipoIsolacao, original java type String
 * @param matCondutor, original java type String
 * @param temperCondutor, original java type int
 * @param temperAr, original java type int
 * @param temperSolo, original java type int
 * @param valorA1_2, original java type float
 * @param valorA1_3, original java type float
 * @param valorA2_2, original java type float
 * @param valorA2_3, original java type float
 * @param valorB1_2, original java type float
 * @param valorB1_3, original java type float
 * @param valorB2_2, original java type float
 * @param valorB2_3, original java type float
 * @param valorC_2, original java type float
 * @param valorC_3, original java type float
 * @param valorD_2, original java type float
 * @param valorD_3, original java type float
 * @param var, original java type float
 * @param var, original java type float
 * @param var, original java type float
 * @class
 * Class Table04Bean
 */
function Table04Bean()
{
	this.id					= null;
	this.tipoIsolacao		= null;
	this.matCondutor		= null;
	this.temperCondutor		= null;
	this.temperAr			= null;
	this.temperSolo			= null;
	this.valorA1_2			= null;
	this.valorA1_3			= null;
	this.valorA2_2			= null;
	this.valorA2_3			= null;
	this.valorB1_2			= null;
	this.valorB1_3			= null;
	this.valorB2_2			= null;
	this.valorB2_3			= null;
	this.valorC_2			= null;
	this.valorC_3			= null;
	this.valorD_2			= null;
	this.varvalorD_3		= null;	
	
	this.id = new Table04PKBean();
}

/**
 * Method description
 * @param Not Params
 * @return The id value
 */
Table04Bean.prototype.getId = function() {
    return this.id;
};

/**
 * Method description
 * @param Not Params
 * @return The nomeTabela value
 */
Table04Bean.prototype.getNomeTabela = function() {
    return this.id.getNomeTabela();
};

/**
 * Method description
 * @param Not Params
 * @return The secao value
 */
Table04Bean.prototype.getSecao = function() {
    return this.id.getSecao();
};

/**
 * Method description
 * @param Not Params
 * @return The matCondutor value
 */
Table04Bean.prototype.getMatCondutor = function() {
    return this.matCondutor;
};

/**
 * Method description
 * @param Not Params
 * @return The temperAr value
 */
Table04Bean.prototype.getTemperAr = function() {
    return this.temperAr;
};

/**
 * Method description
 * @param Not Params
 * @return The temperCondutor value
 */
Table04Bean.prototype.getTemperCondutor = function() {
    return this.temperCondutor;
};

/**
 * Method description
 * @param Not Params
 * @return The temperSolo value
 */
Table04Bean.prototype.getTemperSolo = function() {
    return this.temperSolo;
};

/**
 * Method description
 * @param Not Params
 * @return The tipoIsolacao value
 */
Table04Bean.prototype.getTipoIsolacao = function() {
    return this.tipoIsolacao;
};

/**
 * Method description
 * @param Not Params
 * @return The valorA1_2 value
 */
Table04Bean.prototype.getValorA1_2 = function() {
    return this.valorA1_2;
};

/**
 * Method description
 * @param Not Params
 * @return The valorA1_3 value
 */
Table04Bean.prototype.getValorA1_3 = function() {
    return this.valorA1_3;
};

/**
 * Method description
 * @param Not Params
 * @return The valorA2_2 value
 */
Table04Bean.prototype.getValorA2_2 = function() {
    return this.valorA2_2;
};

/**
 * Method description
 * @param Not Params
 * @return The valorA2_3 value
 */
Table04Bean.prototype.getValorA2_3 = function() {
    return this.valorA2_3;
};

/**
 * Method description
 * @param Not Params
 * @return The valorB1_2 value
 */
Table04Bean.prototype.getValorB1_2 = function() {
    return this.valorB1_2;
};

/**
 * Method description
 * @param Not Params
 * @return The valorB1_3 value
 */
Table04Bean.prototype.getValorB1_3 = function() {
    return this.valorB1_3;
};

/**
 * Method description
 * @param Not Params
 * @return The valorB2_2 value
 */
Table04Bean.prototype.getValorB2_2 = function() {
    return this.valorB2_2;
};

/**
 * Method description
 * @param Not Params
 * @return The valorB2_3 value
 */
Table04Bean.prototype.getValorB2_3 = function() {
    return this.valorB2_3;
};

/**
 * Method description
 * @param Not Params
 * @return The valorC_2 value
 */
Table04Bean.prototype.getValorC_2 = function() {
    return this.valorC_2;
};

/**
 * Method description
 * @param Not Params
 * @return The valorC_3 value
 */
Table04Bean.prototype.getValorC_3 = function() {
    return this.valorC_3;
};

/**
 * Method description
 * @param Not Params
 * @return The valorD_2 value
 */
Table04Bean.prototype.getValorD_2 = function() {
    return this.valorD_2;
};

/**
 * Method description
 * @param Not Params
 * @return The valorD_2 value
 */
Table04Bean.prototype.getValorD_2 = function() {
    return this.valorD_2;
};

/**
 * Method description
 * @param Not Params
 * @return The valorD_3 value
 */
Table04Bean.prototype.getValorD_3 = function() {
    return this.valorD_3;
};

/**
 * Method description
 * @param id
 * @return {null}
 */
Table04Bean.prototype.setId = function(id) {
    this.id = id;
};

/**
 * Method description
 * @param nomeTabela
 * @return {null}
 */
Table04Bean.prototype.setNomeTabela = function(nomeTabela) {
	return this.id.setNomeTabela(nomeTabela);
};

/**
 * Method description
 * @param secao
 * @return {null}
 */
Table04Bean.prototype.setSecao = function(secao) {
    this.id.setSecao(secao);
};

/**
 * Method description
 * @param matCondutor
 * @return {null}
 */
Table04Bean.prototype.setMatCondutor = function(matCondutor) {
    this.matCondutor = matCondutor;
};

/**
 * Method description
 * @param temperAr
 * @return {null}
 */
Table04Bean.prototype.setTemperAr = function(temperAr) {
    this.temperAr = temperAr;
};

/**
 * Method description
 * @param temperCondutor
 * @return {null}
 */
Table04Bean.prototype.setTemperCondutor = function(temperCondutor) {
    this.temperCondutor = temperCondutor;
};

/**
 * Method description
 * @param temperSolo
 * @return {null}
 */
Table04Bean.prototype.setTemperSolo = function(temperSolo) {
    this.temperSolo = temperSolo;
};

/**
 * Method description
 * @param tipoIsolacao
 * @return {null}
 */
Table04Bean.prototype.setTipoIsolacao = function(tipoIsolacao) {
    this.tipoIsolacao = tipoIsolacao;
};

/**
 * Method description
 * @param valorA1_2
 * @return {null}
 */
Table04Bean.prototype.setValorA1_2 = function(valorA1_2) {
    this.valorA1_2 = valorA1_2;
};

/**
 * Method description
 * @param valorA1_3
 * @return {null}
 */
Table04Bean.prototype.setValorA1_3 = function(valorA1_3) {
    this.valorA1_3 = valorA1_3;
};

/**
 * Method description
 * @param valorA2_2
 * @return {null}
 */
Table04Bean.prototype.setValorA2_2 = function(valorA2_2) {
    this.valorA2_2 = valorA2_2;
};

/**
 * Method description
 * @param valorA2_3
 * @return {null}
 */
Table04Bean.prototype.setValorA2_3 = function(valorA2_3) {
    this.valorA2_3 = valorA2_3;
};

/**
 * Method description
 * @param valorB1_2
 * @return {null}
 */
Table04Bean.prototype.setValorB1_2 = function(valorB1_2) {
    this.valorB1_2 = valorB1_2;
};

/**
 * Method description
 * @param valorB1_3
 * @return {null}
 */
Table04Bean.prototype.setValorB1_3 = function(valorB1_3) {
    this.valorB1_3 = valorB1_3;
};

/**
 * Method description
 * @param valorB2_2
 * @return {null}
 */
Table04Bean.prototype.setValorB2_2 = function(valorB2_2) {
    this.valorB2_2 = valorB2_2;
};

/**
 * Method description
 * @param valorB2_3
 * @return {null}
 */
Table04Bean.prototype.setValorB2_3 = function(valorB2_3) {
    this.valorB2_3 = valorB2_3;
};

/**
 * Method description
 * @param valorC_2
 * @return {null}
 */
Table04Bean.prototype.setValorC_2 = function(valorC_2) {
    this.valorC_2 = valorC_2;
};

/**
 * Method description
 * @param valorC_3
 * @return {null}
 */
Table04Bean.prototype.setValorC_3 = function(valorC_3) {
    this.valorC_3 = valorC_3;
};

/**
 * Method description
 * @param valorD_2
 * @return {null}
 */
Table04Bean.prototype.setValorD_2 = function(valorD_2) {
    this.valorD_2 = valorD_2;
};

/**
 * Method description
 * @param valorD_3
 * @return {null}
 */
Table04Bean.prototype.setValorD_3 = function(valorD_2) {
    this.valorD_3 = valorD_3;
};