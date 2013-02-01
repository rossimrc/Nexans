/**
 * Constructor description
 * @author Thiago Cavalari
 * @param nome, original java type String
 * @param nomeEmpresa, original java type String
 * @param dataLog, original java type Date
 * @param descricao, original java type String
 * @param horaLog, original java type Time
 * @class
 * Class LogPontualSearchBean
 */
function LogPontualSearchBean()
{
	this.nome			= null;
	this.nomeEmpresa	= null;
	this.dataLog		= null;
	this.descricao		= null;
	this.horaLog		= null;
}

/**
 * Method description
 * @param Not Params
 * @return The dataLog value
 */
LogPontualSearchBean.prototype.getDataLog = function() {
    return this.dataLog;
};

/**
 * Method description
 * @param dataLog
 * @return {null}
 */
LogPontualSearchBean.prototype.setDataLog = function(dataLog) {
    this.dataLog = dataLog;
};

/**
 * Method description
 * @param Not Params
 * @return The dataLog value date formated
 */
LogPontualSearchBean.prototype.getDataLogString = function() {
	if(this.dataLog != null)
	{
		var dateFormated = new Date(this.dataLog); 
		return (dateFormated.getDate()) + "/" + (dateFormated.getMonth() + 1) + "/" + dateFormated.getFullYear();
	}
	else
	{
		return "";
	}
};

/**
 * Method description
 * @param Not Params
 * @return The descricao value
 */
LogPontualSearchBean.prototype.getDescricao = function() {
    return this.descricao;
};

/**
 * Method description
 * @param descricao
 * @return {null}
 */
LogPontualSearchBean.prototype.setDescricao = function(descricao) {
    this.descricao = descricao;
};

/**
 * Method description
 * @param Not Params
 * @return The nome value
 */
LogPontualSearchBean.prototype.getNome = function() {
    return this.nome;
};

/**
 * Method description
 * @param nome
 * @return {null}
 */
LogPontualSearchBean.prototype.setNome = function(nome) {
    this.nome = nome;
};

/**
 * Method description
 * @param Not Params
 * @return The nomeEmpresa value
 */
LogPontualSearchBean.prototype.getNomeEmpresa = function() {
    return this.nomeEmpresa;
};

/**
 * Method description
 * @param nomeEmpresa
 * @return {null}
 */
LogPontualSearchBean.prototype.setNomeEmpresa = function(nomeEmpresa) {
    this.nomeEmpresa = nomeEmpresa;
};

/**
 * Method description
 * @param Not Params
 * @return The horaLog value
 */
LogPontualSearchBean.prototype.getHoraLog = function() {
    return this.horaLog;
};

/**
 * Method description
 * @param horaLog
 * @return {null}
 */
LogPontualSearchBean.prototype.setHoraLog = function(horaLog) {
    this.horaLog = horaLog;
};