/**
 * Observacoes
 * Precisa criar o enum TIPO_OPERACAO_LOG, original Dimensionamento.getDescription(TipoOperacaoLog.class, tipoOperacao);
 */

/**
 * Constructor description
 * @author Thiago Cavalari
 * @param codigoLog, original java type int
 * @param codigoUsuario, original java type int
 * @param dataLog, original java type Date
 * 
 * @param tipoOperacao, original java type int
 * 
 * @param codigo, original java type int
 * @param tipoProduto, original java type int
 * @param frequencia, original java type double
 * @param nivelTensao, original java type int
 * @param unidadeTensao, original java type String
 * @param materialCondutor, original java type int
 * @param numeroCondutores, original java type int
 * @param tensaoServico, original java type double
 * @param tensaoIsolamento, original java type int
 * @param utilizacaoCircuito, original java type int
 * @param sistema, original java type int
 * @param temperaturaMaximaCondutor, original java type int
 * @param caboSelecionado, original java type int
 * @param possibilidadeInstalacao, original java type int
 * @param temperaturaArSolo, original java type int
 * @param comprimentoCircuito, original java type double
 * @param quedaTensaoMaxima, original java type double
 * @param fatorPotencia, original java type double
 * @param correnteProjeto, original java type double
 * @param potenciaAparente, original java type double
 * @param fixarSecaoCondutor, original java type int
 * @param fixarNumeroCabos, original java type int
 * @param fixarInformacaoCurto, original java type int
 * @param localInstalacao, original java type int
 * @param tipoInstalacao, original java type int
 * @param eletrodutoMetalico, original java type int
 * @param secaoCondutorFixado, original java type double
 * @param numeroCabosFixado, original java type int
 * @param correnteCurto, original java type double
 * @param tempoAtuacaoProtecao, original java type double
 * @param resistividadeTermica, original java type int
 * @param posicionamentoCabo, original java type int
 * @param posicaoCabosSolo, original java type int
 * @param formacaoBancoDutos, original java type int
 * @param numeroBandejas, original java type int
 * @param numeroTernasBandeja, original java type int
 * @param numeroBandejasVertical, original java type int
 * @param numeroTernasBandejaVertical, original java type int
 * @param orientacaoFatorCorrecao, original java type int
 * @param quantidadeCircuitos, original java type int
 * @param quantidadeCamadas, original java type int
 * @param sistemaAterramento, original java type int
 * @param distanciaEntreCabos, original java type int
 * @param orientacaoCabo, original java type int
 * @param relacaoCaboDuto, original java type int
 * @param alturaCanaleta, original java type double
 * @param larguraCanaleta, original java type double
 * @param tipoCabo, original java type int
 * @param aplicacao, original java type int
 * @class
 * Class LogSimulacoesBean
 */
function LogSimulacoesBean()
{
    // Relativos ao log
    this.codigoLog 		= null;
    this.codigoUsuario	= null;
    this.dataLog		= null;

    // Descreve o tipo de Operação realizada
    this.tipoOperacao	= null;

    // Relativos a simulacao
    this.codigo						= null;
    this.tipoProduto				= null;
    this.frequencia					= null;
    this.nivelTensao				= null;
    this.unidadeTensao				= null;
    this.materialCondutor			= null;
    this.numeroCondutores			= null;
    this.tensaoServico				= null;
    this.tensaoIsolamento			= null;
    this.utilizacaoCircuito			= null;
    this.sistema					= null;
    this.temperaturaMaximaCondutor	= null;
    this.caboSelecionado			= null;
    this.possibilidadeInstalacao	= null;
    this.temperaturaArSolo			= null;
    this.comprimentoCircuito		= null;
    this.quedaTensaoMaxima			= null;
    this.fatorPotencia				= null;
    this.correnteProjeto			= null;
    this.potenciaAparente			= null;
    this.fixarSecaoCondutor			= null;
    this.fixarNumeroCabos			= null;
    this.fixarInformacaoCurto		= null;
    this.localInstalacao			= null;
    this.tipoInstalacao				= null;
    this.eletrodutoMetalico			= null;
    this.secaoCondutorFixado		= null;
    this.numeroCabosFixado			= null;
    this.correnteCurto				= null;
    this.tempoAtuacaoProtecao		= null;
    this.resistividadeTermica		= null;
    this.posicionamentoCabo			= null;
    this.posicaoCabosSolo			= null;
    this.formacaoBancoDutos			= null;
    this.numeroBandejas				= null;
    this.numeroTernasBandeja		= null;
    this.numeroBandejasVertical		= null;
    this.numeroTernasBandejaVertical	= null;
    this.orientacaoFatorCorrecao		= null;
    this.quantidadeCircuitos			= null;
    this.quantidadeCamadas				= null;
    this.sistemaAterramento				= null;
    this.distanciaEntreCabos			= null;
    this.orientacaoCabo					= null;
    this.relacaoCaboDuto				= null;
    this.alturaCanaleta					= null;
    this.larguraCanaleta				= null;
    this.tipoCabo						= null;
    this.aplicacao						= null;

    //LogSimulacoesBean.NAO_ESPECIFICADO = "Não Especificado!";
    
    this.quantidadeCamadas = 1;
    this.quantidadeCircuitos = 1;
    this.numeroBandejas = 1;

    // TODO Verificar se o tipo de instalação padrão realmente é justaposta.
    this.tipoInstalacao = FORMACAO_JUSTAPOSTA;
    this.unidadeTensao = "";    
}

LogSimulacoesBean.NAO_ESPECIFICADO = 1;

/**
 * Method description
 * @param Not Params
 * @return The description TIPO_OPERACAO_LOG
 */
LogSimulacoesBean.prototype.getTipoOperacaoString = function() {
    return TIPO_OPERACAO_LOG[this.tipoCabo].description;
};

/**
 * Method description
 * @param Not Params
 * @return The user name
 */
LogSimulacoesBean.prototype.getNome = function() {
    return new User().getByCodigo(this.codigoUsuario).getNome();
};

/**
 * Method description
 * @param Not Params
 * @return The user name
 */
LogSimulacoesBean.prototype.getNomeEmpresa = function() {
    return new User().getByCodigo(this.codigoUsuario).getNomeEmpresa();
};

/**
 * Method description
 * @param Not Params
 * @return The fixarSecaoCondutor value
 */
LogSimulacoesBean.prototype.isSecaoCondutorFixada = function() {
    if(this.fixarSecaoCondutor == "1")
    {
    	return true;
    }
    else
    {
    	return false;
    }
};

/**
 * Method description
 * @param Not Params
 * @return The tensaoServico value
 */
LogSimulacoesBean.prototype.getTensaoServico = function() {
	return this.tensaoServico;
};

/**
 * Method description
 * @param Not Params
 * @return Returns the tensaoServico.
 */
LogSimulacoesBean.prototype.getTensaoServicoVolts = function() {
	if(this.unidadeTensao == "v")
	{
		return this.tensaoServico;
	}
	else
	{
		return this.tensaoServico * 1000;
	}
};

/**
 * Method description
 * @param Not Params
 * @return Retorna a tensão de serviço em kV.
 */
LogSimulacoesBean.prototype.getTensaoServiFcokV = function() {
	if(this.unidadeTensao == "v")
	{
		return this.tensaoServico / 1000;
	}
	else
	{
		return this.tensaoServico;
	}
};

/**
 * Method description
 * @param tensaoServico  The tensaoServico to set.
 * @return {null}
 */
LogSimulacoesBean.prototype.setTensaoServico = function(tensaoServico) {
    this.tensaoServico = tensaoServico;
};

/**
 * Method description
 * @param Not Params
 * @return The frequencia value
 */
LogSimulacoesBean.prototype.getFrequencia = function() {
    return this.frequencia;
};

/**
 * Method description
 * @param The frequencia to set.
 * @return {null}
 */
LogSimulacoesBean.prototype.setFrequencia = function(frequencia) {
    this.frequencia = frequencia;
};

/**
 * Method description
 * @param Not Params
 * @return The nivelTensao value
 */
LogSimulacoesBean.prototype.getNivelTensao = function() {
    return this.nivelTensao;
};

/**
 * Method description
 * @param Not Params
 * @return The description TIPO_OPERACAO_LOG
 */
LogSimulacoesBean.prototype.getNivelTensaoString = function() {
    alert('Nivel Tensao: ' + this.nivelTensao);
	if(this.nivelTensao == null)
    {
		alert(LogSimulacoesBean.NAO_ESPECIFICADO);
    	return LogSimulacoesBean.NAO_ESPECIFICADO;
    }
    else
    {
    	var result = NIVEL_TENSAO[this.nivelTensao].description;
    	return result;
    }
};















/**
 * Method description
 * @param Not Params
 * @return The tipoInstalacao value
 */
LogSimulacoesBean.prototype.getTipoInstalacao = function() {
    return this.tipoInstalacao;
};

/**
 * Method description
 * @param tipoInstalacao
 * @return {null}
 */
LogSimulacoesBean.prototype.setTipoInstalacao = function(tipoInstalacao) {
    this.tipoInstalacao = tipoInstalacao;
};