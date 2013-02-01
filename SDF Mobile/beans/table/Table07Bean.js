/**
 * Constructor description
 * @author Thiago Cavalari
 * @param id, original java type Table07PKBean
 * @param pvc, original java type double
 * @param eprXLPE, original java type double
 * @class
 * Class Table07Bean
 */
function Table07Bean()
{
	this.id			= null;
	this.pvc		= null;
	this.eprXLPE	= null;
	
	this.id = new Table07PKBean();
}

/**
 * Method description
 * @param Not Params
 * @return The nomeTabela value
 */
Table07Bean.prototype.getNomeTabela = function() {
    return this.id.getNomeTabela();
};

/**
 * Method description
 * @param nomeTabela
 * @return {null}
 */
Table07Bean.prototype.setNomeTabela = function(nomeTabela) {
	return this.id.setNomeTabela(nomeTabela);
};

/**
 * Method description
 * @param Not Params
 * @return The eprXLPE value
 */
Table07Bean.prototype.getEprXLPE = function() {
    return this.eprXLPE;
};

/**
 * Method description
 * @param Not Params
 * @return The id value
 */
Table07Bean.prototype.getId = function() {
    return this.id;
};

/**
 * Method description
 * @param Not Params
 * @return The pvc value
 */
Table07Bean.prototype.getPvc = function() {
    return this.pvc;
};

/**
 * Method description
 * @param Not Params
 * @return The temperatura value
 */
Table07Bean.prototype.getTemperatura = function() {
    return this.id.getTemperatura();
};

/**
 * Method description
 * @param Not Params
 * @return The tipoTemperatura value
 */
Table07Bean.prototype.getTipoTemperatura = function() {
    return this.id.getTipoTemperatura();
};

/**
 * Method description
 * @param eprXLPE
 * @return {null}
 */
Table07Bean.prototype.setEprXLPE = function(eprXLPE) {
    this.eprXLPE = eprXLPE;
};

/**
 * Method description
 * @param id
 * @return {null}
 */
Table07Bean.prototype.setId = function(id) {
    this.id = id;
};

/**
 * Method description
 * @param pvc
 * @return {null}
 */
Table07Bean.prototype.setPvc = function(pvc) {
    this.pvc = pvc;
};

/**
 * Method description
 * @param temperatura
 * @return {null}
 */
Table07Bean.prototype.setTemperatura = function(temperatura) {
	return this.id.setTemperatura(temperatura);
};

/**
 * Method description
 * @param temperatura
 * @return {null}
 */
Table07Bean.prototype.setTipoTemperatura = function(tipoTemperatura) {
	return this.id.setTipoTemperatura(tipoTemperatura);
};