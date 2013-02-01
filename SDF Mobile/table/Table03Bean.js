/**
 * Constructor description
 * @author Thiago Cavalari
 * @param id, original java type Table03PKBean
 * @param valor30Graus, original java type int
 * @param valor40Graus, original java type int
 * @class
 * Class Table03Bean
 */
function Table03Bean()
{
	this.id					= null;
	this.valor30Graus		= null;
	this.valor40Graus		= null;
	
	this.id = new Table03PKBean();
}

/**
 * Method description
 * @param Not Params
 * @return The Table03PKBean value
 */
Table03Bean.prototype.getId = function() {
    return this.id;
};

/**
 * Method description
 * @param id
 * @return {null}
 */
Table03Bean.prototype.setId = function(id) {
    this.id = id;
};

/**
 * Method description
 * @param Not Params
 * @return The getCodigoNorma value
 */
Table03Bean.prototype.getCodigoNorma = function() {
    return this.id.getCodigoNorma();
};

/**
 * Method description
 * @param codigoNorma
 * @return {null}
 */
Table03Bean.prototype.setCodigoNorma = function(codigoNorma) {
    this.id.setCodigoNorma(codigoNorma);
};

/**
 * Method description
 * @param Not Params
 * @return The nomeTabela value
 */
Table03Bean.prototype.getNomeTabela = function() {
    return this.id.getNomeTabela();
};

/**
 * Method description
 * @param nomeTabela
 * @return {null}
 */
Table03Bean.prototype.setNomeTabela = function(nomeTabela) {
	return this.id.setNomeTabela(nomeTabela);
};

/**
 * Method description
 * @param Not Params
 * @return The id value
 */
Table03Bean.prototype.getSecao = function() {
    return this.id.getSecao();
};

/**
 * Method description
 * @param secao
 * @return {null}
 */
Table03Bean.prototype.setSecao = function(secao) {
    this.id.setSecao(secao);
};

/**
 * Method description
 * @param Not Params
 * @return The valor30Graus value
 */
Table03Bean.prototype.getValor30Graus = function() {
    return this.valor30Graus;
};

/**
 * Method description
 * @param valor30Graus
 * @return {null}
 */
Table03Bean.prototype.setValor30Graus = function(valor30Graus) {
    this.valor30Graus = valor30Graus;
};

/**
 * Method description
 * @param Not Params
 * @return The valor40Graus value
 */
Table03Bean.prototype.getValor40Graus = function() {
    return this.valor40Graus;
};

/**
 * Method description
 * @param valor30Graus
 * @return {null}
 */
Table03Bean.prototype.setValor40Graus = function(valor40Graus) {
    this.valor40Graus = valor40Graus;
};