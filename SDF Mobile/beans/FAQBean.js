/**
 * Constructor description
 * @author Thiago Cavalari
 * @param codigo, original java type Int
 * @param pergunta, original java type String
 * @param resposta, original java type String
 * @class
 * Class FAQBean
 */
function FAQBean()
{
	this.codigo		= null;
	this.pergunta	= null;
	this.resposta	= null;
}

/**
 * Method description
 * @param Not Params
 * @return The codigo value
 */
FAQBean.prototype.getCodigo = function() {
    return this.codigo;
};

/**
 * Method description
 * @param codigo
 * @return {null}
 */
FAQBean.prototype.setCodigo = function(codigo) {
    this.codigo = codigo;
};

/**
 * Method description
 * @param Not Params
 * @return The pergunta value
 */
FAQBean.prototype.getPergunta = function() {
    return this.pergunta;
};

/**
 * Method description
 * @param pergunta
 * @return {null}
 */
FAQBean.prototype.setPergunta = function(pergunta) {
    this.pergunta = pergunta;
};

/**
 * Method description
 * @param Not Params
 * @return The resposta value
 */
FAQBean.prototype.getResposta = function() {
    return this.resposta;
};

/**
 * Method description
 * @param resposta
 * @return {null}
 */
FAQBean.prototype.setResposta = function(resposta) {
    this.resposta = resposta;
};