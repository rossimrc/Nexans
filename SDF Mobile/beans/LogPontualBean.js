/**
 * Constructor description
 * @author Thiago Cavalari
 * @param codigo, original java type Int
 * @param codigoUsuario, original java type Int
 * @param dataLog, original java type Date
 * @param descricao, original java type String
 * @param horaLog, original java type Time
 * @class
 * Class LogPontualBean
 */
function LogPontualBean()
{
	this.codigo			= null;
	this.codigoUsuario	= null;
	this.dataLog		= null;
	this.descricao		= null;
	this.horaLog		= null;
}

/**
 * Method description
 * @param Not Params
 * @return The dataLog value
 */
LogPontualBean.prototype.getDataLog = function() {
    return this.dataLog;
};

/**
 * Method description
 * @param dataLog
 * @return {null}
 */
LogPontualBean.prototype.setDataLog = function(dataLog) {
    this.dataLog = dataLog;
};

/**
 * Method description
 * @param Not Params
 * @return The descricao value
 */
LogPontualBean.prototype.getDescricao = function() {
    return this.descricao;
};

/**
 * Method description
 * @param descricao
 * @return {null}
 */
LogPontualBean.prototype.setDescricao = function(descricao) {
    this.descricao = descricao;
};

/**
 * Method description
 * @param Not Params
 * @return The codigoUsuario value
 */
LogPontualBean.prototype.getCodigoUsuario = function() {
    return this.codigoUsuario;
};

/**
 * Method description
 * @param codigoUsuario
 * @return {null}
 */
LogPontualBean.prototype.setCodigoUsuario = function(codigoUsuario) {
    this.codigoUsuario = codigoUsuario;
};

/**
 * Method description
 * @param Not Params
 * @return The codigo value
 */
LogPontualBean.prototype.getCodigo = function() {
    return this.codigo;
};

/**
 * Method description
 * @param codigo
 * @return {null}
 */
LogPontualBean.prototype.setCodigo = function(codigo) {
    this.codigo = codigo;
};

/**
 * Method description
 * @param Not Params
 * @return The horaLog value
 */
LogPontualBean.prototype.getHoraLog = function() {
    return this.horaLog;
};

/**
 * Method description
 * @param codigo
 * @return {null}
 */
LogPontualBean.prototype.setHoraLog = function(horaLog) {
    this.horaLog = horaLog;
};