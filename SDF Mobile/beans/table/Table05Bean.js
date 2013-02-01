/**
 * Constructor description
 * @author Thiago Cavalari
 * @param id, original java type Table05PKBean
 * @param tipoIsolacao, original java type String
 * @param matCondutor, original java type String
 * @param temperCondutor, original java type int
 * @param temperCondutor, original java type int
 * @param temperAmbiente, original java type int
 * @param valorE_2, original java type float
 * @param valorE_3, original java type float
 * @param valorF_2, original java type float
 * @param valorF_3, original java type float
 * @param valorF_J_3, original java type float
 * @param valorG_H_3, original java type float
 * @param valorG_V_3, original java type float
 * @class
 * Class Table05Bean
 */
function Table05Bean()
{
	this.id					= null;
	this.tipoIsolacao		= null;
	this.matCondutor		= null;
	this.temperCondutor		= null;
	this.temperAmbiente		= null;
	this.valorE_2			= null;
	this.valorE_3			= null;
	this.valorF_2			= null;
	this.valorF_3			= null;
	this.valorF_J_3			= null;
	this.valorG_H_3			= null;
	this.valorG_V_3			= null;	
	
	this.id = new Table05PKBean();
}

/**
 * Method description
 * @param Not Params
 * @return The nomeTabela value
 */
Table05Bean.prototype.getNomeTabela = function() {
    return this.id.getNomeTabela();
};

/**
 * Method description
 * @param Not Params
 * @return The secao value
 */
Table05Bean.prototype.getSecao = function() {
    return this.id.getSecao();
};

/**
 * Method description
 * @param Not Params
 * @return The id value
 */
Table05Bean.prototype.getId = function() {
    return this.id;
};

/**
 * Method description
 * @param Not Params
 * @return The matCondutor value
 */
Table05Bean.prototype.getMatCondutor = function() {
    return this.matCondutor;
};

/**
 * Method description
 * @param Not Params
 * @return The temperAmbiente value
 */
Table05Bean.prototype.getTemperAmbiente = function() {
    return this.temperAmbiente;
};

/**
 * Method description
 * @param Not Params
 * @return The temperCondutor value
 */
Table05Bean.prototype.getTemperCondutor = function() {
    return this.temperCondutor;
};

/**
 * Method description
 * @param Not Params
 * @return The tipoIsolacao value
 */
Table05Bean.prototype.getTipoIsolacao = function() {
    return this.tipoIsolacao;
};

/**
 * Method description
 * @param Not Params
 * @return The valorE_2 value
 */
Table05Bean.prototype.getValorE_2 = function() {
    return this.valorE_2;
};

/**
 * Method description
 * @param Not Params
 * @return The valorE_3 value
 */
Table05Bean.prototype.getValorE_3 = function() {
    return this.valorE_3;
};

/**
 * Method description
 * @param Not Params
 * @return The valorF_2 value
 */
Table05Bean.prototype.getValorF_2 = function() {
    return this.valorF_2;
};

/**
 * Method description
 * @param Not Params
 * @return The valorF_3 value
 */
Table05Bean.prototype.getValorF_3 = function() {
    return this.valorF_3;
};

/**
 * Method description
 * @param Not Params
 * @return The valorF_J_3 value
 */
Table05Bean.prototype.getValorF_J_3 = function() {
    return this.valorF_J_3;
};

/**
 * Method description
 * @param Not Params
 * @return The valorG_H_3 value
 */
Table05Bean.prototype.getValorG_H_3 = function() {
    return this.valorG_H_3;
};

/**
 * Method description
 * @param Not Params
 * @return The valorG_V_3 value
 */
Table05Bean.prototype.getValorG_V_3 = function() {
    return this.valorG_V_3;
};

/**
 * Method description
 * @param id
 * @return {null}
 */
Table05Bean.prototype.setId = function(id) {
    this.id = id;
};

/**
 * Method description
 * @param nomeTabela
 * @return {null}
 */
Table05Bean.prototype.setNomeTabela = function(nomeTabela) {
	return this.id.setNomeTabela(nomeTabela);
};

/**
 * Method description
 * @param secao
 * @return {null}
 */
Table05Bean.prototype.setSecao = function(secao) {
    this.id.setSecao(secao);
};

/**
 * Method description
 * @param matCondutor
 * @return {null}
 */
Table05Bean.prototype.setMatCondutor = function(matCondutor) {
    this.matCondutor = matCondutor;
};

/**
 * Method description
 * @param temperAmbiente
 * @return {null}
 */
Table05Bean.prototype.setTemperAmbiente = function(temperAmbiente) {
    this.temperAmbiente = temperAmbiente;
};

/**
 * Method description
 * @param temperCondutor
 * @return {null}
 */
Table05Bean.prototype.setTemperCondutor = function(temperCondutor) {
    this.temperCondutor = temperCondutor;
};

/**
 * Method description
 * @param tipoIsolacao
 * @return {null}
 */
Table05Bean.prototype.setTipoIsolacao = function(tipoIsolacao) {
    this.tipoIsolacao = tipoIsolacao;
};

/**
 * Method description
 * @param valorE_2
 * @return {null}
 */
Table05Bean.prototype.setValorE_2 = function(valorE_2) {
    this.valorE_2 = valorE_2;
};

/**
 * Method description
 * @param valorE_3
 * @return {null}
 */
Table05Bean.prototype.setValorE_3 = function(valorE_3) {
    this.valorE_3 = valorE_3;
};

/**
 * Method description
 * @param valorE_3
 * @return {null}
 */
Table05Bean.prototype.setValorF_2 = function(valorF_2) {
    this.valorF_2 = valorF_2;
};

/**
 * Method description
 * @param valorF_3
 * @return {null}
 */
Table05Bean.prototype.setValorF_3 = function(valorF_3) {
    this.valorF_3 = valorF_3;
};

/**
 * Method description
 * @param valorF_J_3
 * @return {null}
 */
Table05Bean.prototype.setValorF_J_3 = function(valorF_J_3) {
    this.valorF_J_3 = valorF_J_3;
};

/**
 * Method description
 * @param valorG_H_3
 * @return {null}
 */
Table05Bean.prototype.setValorG_H_3 = function(valorG_H_3) {
    this.valorG_H_3 = valorG_H_3;
};

/**
 * Method description
 * @param valorG_V_3
 * @return {null}
 */
Table05Bean.prototype.setValorG_V_3 = function(valorG_V_3) {
    this.valorG_V_3 = valorG_V_3;
};