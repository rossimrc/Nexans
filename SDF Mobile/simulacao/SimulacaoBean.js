/**
 * Constructor description
 * @author Thiago Cavalari
 * @param codigo, original java type Int
 * @param codigoUsuario, original java type Int
 * @param nomeProjeto, original java type String
 * @param descricao, original java type String
 * @param dataProjeto, original java type Date
 * @param status, original java type Int
 * @param savedByUser, original java type boolean
 * @param deleted, original java type boolean
 * @class
 * Class SimulacaoBean
 */
function SimulacaoBean()
{
	this.codigo				= null;
	this.codigoUsuario		= null;
	this.nomeProjeto		= null;
	this.descricao			= null;
	this.dataProjeto		= null;
	this.status				= null;
	this.savedByUser		= null;
	this.deleted			= null;
}

/**
 * Method description
 * @param Not Params
 * @return The codigo value
 */
SimulacaoBean.prototype.getCodigo = function() {
    return this.codigo;
};

/**
 * Method description
 * @param cabo
 * @return {null}
 */
SimulacaoBean.prototype.setCodigo = function(codigo) {
    this.codigo = codigo;
};

/**
 * Method description
 * @param Not Params
 * @return The descricao value
 */
SimulacaoBean.prototype.getDescricao = function() {
    return this.descricao;
};

/**
 * Method description
 * @param descricao
 * @return {null}
 */
SimulacaoBean.prototype.setDescricao = function(descricao) {
    this.descricao = descricao;
};

/**
 * Method description
 * @param Not Params
 * @return The nomeProjeto value
 */
SimulacaoBean.prototype.getNomeProjeto = function() {
    return this.nomeProjeto;
};

/**
 * Method description
 * @param nomeProjeto
 * @return {null}
 */
SimulacaoBean.prototype.setNomeProjeto = function(nomeProjeto) {
    this.nomeProjeto = nomeProjeto;
};

/**
 * Method description
 * @param Not Params
 * @return The nomeProjeto value
 */
SimulacaoBean.prototype.getDataProjeto = function() {
    return this.dataProjeto;
};

/**
 * Method description
 * @param dataProjeto
 * @return {null}
 */
SimulacaoBean.prototype.setDataProjeto = function(dataProjeto) {
    this.dataProjeto = dataProjeto;
};

/**
 * Method description
 * @param Not Params
 * @return The status value
 */
SimulacaoBean.prototype.getStatus = function() {
    return this.status;
};

/**
 * Method description
 * @param status
 * @return {null}
 */
SimulacaoBean.prototype.setStatus = function(status) {
    this.status = status;
};

/**
 * Method description
 * @param Not Params
 * @return The dataProjeto value date formated
 */
SimulacaoBean.prototype.getDateFormat = function() {
	if(this.dataProjeto != null)
	{
		var dateFormated = new Date(this.dataProjeto); 
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
 * @return The dataProjeto value time formated
 */
SimulacaoBean.prototype.getTimeFormat = function() {
	if(this.dataProjeto != null)
	{
		var dateFormated = new Date(this.dataProjeto); 
		//dateFormated.format("HH:mm");
		return dateFormated.getHours() + ":" + dateFormated.getMinutes();
	}
	else
	{
		return "";
	}
};

/**
 * Method description
 * @param Not Params
 * @return The savedByUser value
 */
SimulacaoBean.prototype.isSavedByUser = function() {
    return this.savedByUser;
};

/**
 * Method description
 * @param savedByUser
 * @return {null}
 */
SimulacaoBean.prototype.setSavedByUser = function(savedByUser) {
    this.savedByUser = savedByUser;
};

/**
 * Method description
 * @param Not Params
 * @return The deleted value
 */
SimulacaoBean.prototype.isDeleted = function() {
    return this.deleted;
};

/**
 * Method description
 * @param deleted
 * @return {null}
 */
SimulacaoBean.prototype.setDeleted = function(deleted) {
    this.deleted = deleted;
};

/**
 * Method description
 * @param Not Params
 * @return The codigoUsuario value
 */
SimulacaoBean.prototype.getCodigoUsuario = function() {
    return this.codigoUsuario;
};

/**
 * Method description
 * @param codigoUsuario
 * @return {null}
 */
SimulacaoBean.prototype.setCodigoUsuario = function(codigoUsuario) {
    this.codigoUsuario = codigoUsuario;
};
