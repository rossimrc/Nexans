/**
 * Constructor description
 * @author Thiago Cavalari
 * @class
 * Class ProdutoBean
 */
function ProdutoBean()
{
	this.tipoRegistro					= null;
	this.secaoMinima					= null;
	this.secaoMaxima					= null;
	this.sequencia						= null;
	this.codigoProduto					= null;
	this.descricaoProduto				= null;
	this.familiaProduto					= null;
	this.dataAlteracao					= null;
	this.formatoCabo					= null;
	this.descFormatoCabo				= null;
	this.tensaoProduto					= null;
	this.unidadeTensaoProduto			= null;
	this.numCondutoresFase				= null;
	this.secaoCondutorFase				= null;
	this.unidSecaoCondutorFase			= null;
	this.materialCondutorFase			= null;
	this.descMaterialCondutorFase		= null;
	this.numCondutoresNeutro			= null;
	this.secaoCondutorNeutro			= null;
	this.unidSecaoCondutorNeutro		= null;
	this.materialCondutorNeutro			= null;
	this.descMaterialCondutorNeutro		= null;
	this.numCondutoresMsg				= null;
	this.secaoCondutorMsg				= null;
	this.unidSecaoCondutorMsg			= null;
	this.materialCondutorMsg			= null;
	this.descMaterialCondutorMsg		= null;
	this.tipoBloqCondutor				= null;
	this.descTipoBloqCondutor			= null;
	this.tipoCondutor					= null;
	this.descTipoCondutor				= null;
	this.diametroFioCondutor			= null;
	this.numFiosCondutor				= null;
	this.diametroCondutor				= null;
	this.resistEletricaCondutor			= null;
	this.espessuraNom1SemiCond			= null;
	this.tipoMaterialIsolacao			= null;
	this.descTipoMaterialIsolacao		= null;
	this.diametroNominalIsolacao		= null;
	this.espessuraNominalIsolacao		= null;
	this.espessuraDaIsolEntreCondutor	= null;
	this.resistenciaIsolacao			= null;
	this.espessuraNom2SemiCond			= null;
	
	this.diametroNominalVeia			= null;
	this.materialBlindagem				= null;
	this.descMaterialBlindagem			= null;
	this.numFiosBlindagem				= null;
	this.diametroFioBlindagem			= null;
	this.passoBlindagem					= null;
	this.fatorPasso						= null;
	this.diametroMedioBlindagem			= null;
	this.diametroNomBlindagem			= null;
	this.espessuraNominalCapaChumbo		= null;
	this.diametroMedioCapaChumbo		= null;
	this.diametroNomCapaChumbo			= null;
	this.materialCobertura				= null;
	this.descMaterialCobertura			= null;
	this.espessuraNominalCobertura		= null;
	this.diametroSobCobertura			= null;
	this.diametroMedioCobertura			= null;
	this.diametroNomCobertura			= null;
	this.diametroExternoCobertura		= null;
}

ProdutoBean.TIPO_MATERIAL_ISOLACAO_PE = "PE";
ProdutoBean.TIPO_MATERIAL_ISOLACAO_EPR = "EPR";
ProdutoBean.TIPO_MATERIAL_ISOLACAO_PVC = "PVC";
ProdutoBean.TIPO_MATERIAL_ISOLACAO_XLP = "XLP";
ProdutoBean.TIPO_MATERIAL_ISOLACAO_XLPE = "XLPE";

/**
 * Method description
 * @param String line
 * @return The line value
 */
ProdutoBean.prototype.setT003_PRODUTOS = function(row) {
			
	this.tipoRegistro = row['TPO_REGISTRO'];
	this.sequencia = row['SEQ_REGISTRO_TIPO'];
	this.codigoProduto = row['COD_PRODUTO'];
	this.descricaoProduto = row['DSC_PRODUTO'];
	this.familiaProduto = row['NMR_FAMILIA_PRODUTO'];
	this.dataAlteracao = row['DTA_ALTERACAO'];
	this.formatoCabo = row['NME_FORMATO_CABO'];
	this.descFormatoCabo = row['DSC_TEXTO_FORMATO_CABO'];
	this.tensaoProduto = row['NME_TENSAO_PRODUTO'];
	this.unidadeTensaoProduto = row['NME_UNIDADE_TENSAO_PRODUTO'];
	this.numCondutoresFase = row['NMR_NUMERO_CONDUTORES_FASE'];
	this.secaoCondutorFase = row['NME_SECAO_CONDUTOR_FASE'];
	this.unidSecaoCondutorFase = row['NME_UND_SECAO_CONDUTOR_FASE'];
	this.materialCondutorFase = row['NME_MATERIAL_CONDUTOR_FASE'];
	this.descMaterialCondutorFase = row['DSC_TEXTO_MATERIAL_COND_FASE'];
	this.numCondutoresNeutro = row['NMR_NUMERO_CONDUTORES_NEUTRO'];
	this.secaoCondutorNeutro = row['NME_SECAO_CONDUTOR_NEUTRO'];
	this.unidSecaoCondutorNeutro = row['NME_UND_SECAO_CONDUTOR_NEUTRO'];
	this.materialCondutorNeutro = row['NME_MATERIAL_CONDUTOR_NEUTRO'];
	this.descMaterialCondutorNeutro = row['DSC_TEXTO_MATERIAL_COND_NEUTRO'];
	this.numCondutoresMsg = row['NMR_NUMERO_CONDUTORES_MSG'];
	this.secaoCondutorMsg = row['NME_SECAO_CONDUTOR_MSG'];
	this.unidSecaoCondutorMsg = row['NME_UND_SECAO_CONDUTOR_MSG'];
	this.materialCondutorMsg = row['NME_MATERIAL_CONDUTOR_MSG'];
	this.descMaterialCondutorMsg = row['DSC_TEXTO_MATERIAL_COND_MSG'];
	this.tipoBloqCondutor = row['DSC_TEXTO_BLOQUEIO'];
	this.descTipoBloqCondutor = row['DSC_TEXTO_BLOQUEIO'];
	this.tipoCondutor = row['NME_TIPO_CONDUTOR'];
	this.descTipoCondutor = row['DSC_TEXTO_TIPO_CONDUTOR'];
	this.diametroFioCondutor = row['NMR_DIAMETRO_FIO_COND'];
	this.numFiosCondutor = row['NMR_NUMERO_FIOS_CONDUTOR'];
	this.diametroCondutor = row['NMR_DIAMETRO_CONDUTOR'];
	this.resistEletricaCondutor = row['NMR_RESISTENCIA_ELETRICA_COND'];
	this.espessuraNom1SemiCond = row['MMR_ESPESSURA_NOM_1A_SEMI_COND'];
	this.tipoMaterialIsolacao = row['NME_TIPO_MATERIAL_ISOLACAO'];
	this.descTipoMaterialIsolacao = row['DSC_TEXTO_TIPO_MAT_ISOLACAO'];
	this.diametroNominalIsolacao = row['NMR_DIAMETRO_NOMINAL_ISOLACAO'];
	this.espessuraNominalIsolacao = row['NMR_ESPESSURA_NOMINAL_ISOLACAO'];
	this.espessuraDaIsolEntreCondutor = row['NMR_ESPESSURA_ISOL_ENTRE_CONDU'];
	this.resistenciaIsolacao = row['NMR_RESISTENCIA_ISOLACAO'];
	this.espessuraNom2SemiCond = row['NMR_ESPESSURA_NOM_2A_SEMI_COND'];
	this.diametroNominalVeia = row['NMR_DIAMETRO_NOMINAL_VEIA'];
	this.materialBlindagem = row['NME_MATERIAL_BLINDAGEM'];
	this.descMaterialBlindagem = row['DSC_TEXTO_MATERIAL_BLINDAGEM'];
	this.numFiosBlindagem = row['NMR_NUMERO_FIOS_BLINDAGEM'];
	this.diametroFioBlindagem = row['NMR_DIAMETRO_FIOS_BLINDAGEM'];
	this.passoBlindagem = row['NMR_PASSO_BLINDAGEM'];
	this.fatorPasso = row['NMR_FATOR_PASSO'];
	this.diametroMedioBlindagem = row['NMR_DIAMETRO_MEDIO_BLINDAGEM'];
	this.diametroNomBlindagem = row['NMR_DIAMETRO_NOM_BLINDAGEM'];
	this.espessuraNominalCapaChumbo = row['NMR_ESPESSURA_NOMINAL_CAPA_CHU'];
	this.diametroMedioCapaChumbo = row['NMR_DIAMETRO_MEDIO_CAPA_CHUMBO'];
	this.diametroNomCapaChumbo = row['NMR_DIAMETRO_NOM_CAPA_CHUMBO'];
	this.materialCobertura = row['NME_MATERIAL_DA_COBERTURA'];
	this.descMaterialCobertura = row['DSC_TEXTO_MATERIAL_COBERTURA'];
	this.espessuraNominalCobertura = row['NMR_ESPESSURA_NOMINAL_COBERTUR'];
	this.diametroSobCobertura = row['NMR_DIAMETRO_SOB_COBERTURA'];
	this.diametroMedioCobertura = row['NMR_DIAMETRO_MEDIO_COBERTURA'];
	this.diametroNomCobertura = row['NMR_DIAMETRO_NOM_COBERTURA'];
	this.diametroExternoCobertura = row['NMR_DIAMETRO_EXTERNO_COBERTURA'];
};

/**
 * Method description
 * @param String line
 * @return The numeroCondutores value
 */
ProdutoBean.prototype.read = function(line) {
		
	var fields = line.split("@");
	/*for(pos in fields) {
		t.executeSql(statements[j]);
	}*/
	
	this.tipoRegistro = fields[pos++];
	this.sequencia = fields[pos++];
	this.codigoProduto = fields[pos++];
	this.descricaoProduto = fields[pos++];
	this.familiaProduto = fields[pos++];
	this.dataAlteracao = fields[pos++];
	this.formatoCabo = fields[pos++];
	this.descFormatoCabo = fields[pos++];
	this.tensaoProduto = fields[pos++];
	this.unidadeTensaoProduto = fields[pos++];
	this.numCondutoresFase = fields[pos++];
	this.secaoCondutorFase = fields[pos++];
	this.unidSecaoCondutorFase = fields[pos++];
	this.materialCondutorFase = fields[pos++];
	this.descMaterialCondutorFase = fields[pos++];
	this.numCondutoresNeutro = fields[pos++];
	this.secaoCondutorNeutro = fields[pos++];
	this.unidSecaoCondutorNeutro = fields[pos++];
	this.materialCondutorNeutro = fields[pos++];
	this.descMaterialCondutorNeutro = fields[pos++];
	this.numCondutoresMsg = fields[pos++];
	this.secaoCondutorMsg = fields[pos++];
	this.unidSecaoCondutorMsg = fields[pos++];
	this.materialCondutorMsg = fields[pos++];
	this.descMaterialCondutorMsg = fields[pos++];
	this.tipoBloqCondutor = fields[pos++];
	this.descTipoBloqCondutor = fields[pos++];
	this.tipoCondutor = fields[pos++];
	this.descTipoCondutor = fields[pos++];
	this.diametroFioCondutor = fields[pos++];
	this.numFiosCondutor = fields[pos++];
	this.diametroCondutor = fields[pos++];
	this.resistEletricaCondutor = fields[pos++];
	this.espessuraNom1SemiCond = fields[pos++];
	this.tipoMaterialIsolacao = fields[pos++];
	this.descTipoMaterialIsolacao = fields[pos++];
	this.diametroNominalIsolacao = fields[pos++];
	this.espessuraNominalIsolacao = fields[pos++];
	this.espessuraDaIsolEntreCondutor = fields[pos++];
	this.resistenciaIsolacao = fields[pos++];
	this.espessuraNom2SemiCond = fields[pos++];
	this.diametroNominalVeia = fields[pos++];
	this.materialBlindagem = fields[pos++];
	this.descMaterialBlindagem = fields[pos++];
	this.numFiosBlindagem = fields[pos++];
	this.diametroFioBlindagem = fields[pos++];
	this.passoBlindagem = fields[pos++];
	this.fatorPasso = fields[pos++];
	this.diametroMedioBlindagem = fields[pos++];
	this.diametroNomBlindagem = fields[pos++];
	this.espessuraNominalCapaChumbo = fields[pos++];
	this.diametroMedioCapaChumbo = fields[pos++];
	this.diametroNomCapaChumbo = fields[pos++];
	this.materialCobertura = fields[pos++];
	this.descMaterialCobertura = fields[pos++];
	this.espessuraNominalCobertura = fields[pos++];
	this.diametroSobCobertura = fields[pos++];
	this.diametroMedioCobertura = fields[pos++];
	this.diametroNomCobertura = fields[pos++];
	this.diametroExternoCobertura = fields[pos++];
};

/**
 * Method description
 * @param Not Params
 * @return boolean value
 */
ProdutoBean.prototype.isMaterialIsolacaoEPR = function() {
    if(this.tipoMaterialIsolacao == ProdutoBean.TIPO_MATERIAL_ISOLACAO_EPR)
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
 * @return boolean value
 */
ProdutoBean.prototype.isMaterialIsolacaoXLPE = function() {
    if((this.tipoMaterialIsolacao == ProdutoBean.TIPO_MATERIAL_ISOLACAO_XLPE) || (this.tipoMaterialIsolacao == ProdutoBean.TIPO_MATERIAL_ISOLACAO_XLP))
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
 * @return boolean value
 */
ProdutoBean.prototype.isMaterialIsolacaoPVC = function() {
    if(this.tipoMaterialIsolacao == ProdutoBean.TIPO_MATERIAL_ISOLACAO_PVC)
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
 * @return boolean value
 */
ProdutoBean.prototype.isMaterialIsolacaoXLP = function() {
    if(this.tipoMaterialIsolacao == ProdutoBean.TIPO_MATERIAL_ISOLACAO_XLP)
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
 * @return boolean value
 */
ProdutoBean.prototype.isMaterialIsolacaoPE = function() {
    if(this.tipoMaterialIsolacao == ProdutoBean.TIPO_MATERIAL_ISOLACAO_PE)
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
 * @return The codigoProduto value
 */
ProdutoBean.prototype.getCodigoProduto = function() {
    return this.codigoProduto;
};

/**
 * Method description
 * @param Not Params
 * @return The descricaoProduto value
 */
ProdutoBean.prototype.getDescricaoProduto = function() {
    return this.descricaoProduto;
};

/**
 * Method description
 * @param Not Params
 * @return The diametroCondutor value
 */
ProdutoBean.prototype.getDiametroCondutor = function() {
    return this.diametroCondutor;
};

/**
 * Method description
 * @param Not Params
 * @return The diametroExternoCobertura value
 */
ProdutoBean.prototype.getDiametroExternoCobertura = function() {
    return this.diametroExternoCobertura;
};

/**
 * Method description
 * @param Not Params
 * @return The diametroFioBlindagem value
 */
ProdutoBean.prototype.getDiametroFioBlindagem = function() {
    return this.diametroFioBlindagem;
};

/**
 * Method description
 * @param Not Params
 * @return The diametroFioCondutor value
 */
ProdutoBean.prototype.getDiametroFioCondutor = function() {
    return this.diametroFioCondutor;
};

/**
 * Method description
 * @param Not Params
 * @return The diametroMedioBlindagem value
 */
ProdutoBean.prototype.getDiametroMedioBlindagem = function() {
    return this.diametroMedioBlindagem;
};

/**
 * Method description
 * @param Not Params
 * @return The diametroMedioCapaChumbo value
 */
ProdutoBean.prototype.getDiametroMedioCapaChumbo = function() {
    return this.diametroMedioCapaChumbo;
};

/**
 * Method description
 * @param Not Params
 * @return The diametroMedioCobertura value
 */
ProdutoBean.prototype.getDiametroMedioCobertura = function() {
    return this.diametroMedioCobertura;
};

/**
 * Method description
 * @param Not Params
 * @return The diametroNomBlindagem value
 */
ProdutoBean.prototype.getDiametroNomBlindagem = function() {
    return this.diametroNomBlindagem;
};

/**
 * Method description
 * @param Not Params
 * @return The diametroNomCapaChumbo value
 */
ProdutoBean.prototype.getDiametroNomCapaChumbo = function() {
    return this.diametroNomCapaChumbo;
};

/**
 * Method description
 * @param Not Params
 * @return The diametroNomCobertura value
 */
ProdutoBean.prototype.getDiametroNomCobertura = function() {
    return this.diametroNomCobertura;
};

/**
 * Method description
 * @param Not Params
 * @return The diametroNominalIsolacao value
 */
ProdutoBean.prototype.getDiametroNominalIsolacao = function() {
    return this.diametroNominalIsolacao;
};

/**
 * Method description
 * @param Not Params
 * @return The diametroSobCobertura value
 */
ProdutoBean.prototype.getDiametroSobCobertura = function() {
    return this.diametroSobCobertura;
};

/**
 * Method description
 * @param Not Params
 * @return The espessuraDaIsolEntreCondutor value
 */
ProdutoBean.prototype.getEspessuraDaIsolEntreCondutor = function() {
    return this.espessuraDaIsolEntreCondutor;
};

/**
 * Method description
 * @param Not Params
 * @return The espessuraNom1SemiCond value
 */
ProdutoBean.prototype.getEspessuraNom1SemiCond = function() {
    return this.espessuraNom1SemiCond;
};

/**
 * Method description
 * @param Not Params
 * @return The espessuraNom2SemiCond value
 */
ProdutoBean.prototype.getEspessuraNom2SemiCond = function() {
    return this.espessuraNom2SemiCond;
};

/**
 * Method description
 * @param Not Params
 * @return The espessuraNominalCapaChumbo value
 */
ProdutoBean.prototype.getEspessuraNominalCapaChumbo = function() {
    return this.espessuraNominalCapaChumbo;
};

/**
 * Method description
 * @param Not Params
 * @return The espessuraNominalCobertura value
 */
ProdutoBean.prototype.getEspessuraNominalCobertura = function() {
    return this.espessuraNominalCobertura;
};

/**
 * Method description
 * @param Not Params
 * @return The espessuraNominalIsolacao value
 */
ProdutoBean.prototype.getEspessuraNominalIsolacao = function() {
    return this.espessuraNominalIsolacao;
};

/**
 * Method description
 * @param Not Params
 * @return The familiaProduto value
 */
ProdutoBean.prototype.getFamiliaProduto = function() {
    return this.familiaProduto;
};

/**
 * Method description
 * @param Not Params
 * @return The fatorPasso value
 */
ProdutoBean.prototype.getFatorPasso = function() {
    return this.fatorPasso;
};

/**
 * Method description
 * @param Not Params
 * @return The formatoCabo value
 */
ProdutoBean.prototype.getFormatoCabo = function() {
    return this.formatoCabo;
};

/**
 * Method description
 * @param Not Params
 * @return The materialBlindagem value
 */
ProdutoBean.prototype.getMaterialBlindagem = function() {
    return this.materialBlindagem;
};

/**
 * Method description
 * @param Not Params
 * @return The materialCobertura value
 */
ProdutoBean.prototype.getMaterialCobertura = function() {
    return this.materialCobertura;
};

/**
 * Method description
 * @param Not Params
 * @return The materialCondutorFase value
 */
ProdutoBean.prototype.getMaterialCondutorFase = function() {
    return this.materialCondutorFase;
};

/**
 * Method description
 * @param Not Params
 * @return The materialCondutorMsg value
 */
ProdutoBean.prototype.getMaterialCondutorMsg = function() {
    return this.materialCondutorMsg;
};

/**
 * Method description
 * @param Not Params
 * @return The materialCondutorNeutro value
 */
ProdutoBean.prototype.getMaterialCondutorNeutro = function() {
    return this.materialCondutorNeutro;
};

/**
 * Method description
 * @param Not Params
 * @return The numCondutoresFase value
 */
ProdutoBean.prototype.getNumCondutoresFase = function() {
    return this.numCondutoresFase;
};

/**
 * Method description
 * @param Not Params
 * @return The numCondutoresMsg value
 */
ProdutoBean.prototype.getNumCondutoresMsg = function() {
    return this.numCondutoresMsg;
};

/**
 * Method description
 * @param Not Params
 * @return The numCondutoresNeutro value
 */
ProdutoBean.prototype.getNumCondutoresNeutro = function() {
    return this.numCondutoresNeutro;
};

/**
 * Method description
 * @param Not Params
 * @return The numFiosBlindagem value
 */
ProdutoBean.prototype.getNumFiosBlindagem = function() {
    return this.numFiosBlindagem;
};

/**
 * Method description
 * @param Not Params
 * @return The numFiosCondutor value
 */
ProdutoBean.prototype.getNumFiosCondutor = function() {
    return this.numFiosCondutor;
};

/**
 * Method description
 * @param Not Params
 * @return The passoBlindagem value
 */
ProdutoBean.prototype.getPassoBlindagem = function() {
    return this.passoBlindagem;
};

/**
 * Method description
 * @param Not Params
 * @return The resistEletricaCondutor value
 */
ProdutoBean.prototype.getResistEletricaCondutor = function() {
    return this.resistEletricaCondutor;
};

/**
 * Method description
 * @param Not Params
 * @return The resistenciaIsolacao value
 */
ProdutoBean.prototype.getResistenciaIsolacao = function() {
    return this.resistenciaIsolacao;
};

/**
 * Method description
 * @param Not Params
 * @return The secaoCondutorFase value
 */
ProdutoBean.prototype.getSecaoCondutorFase = function() {
    return this.secaoCondutorFase;
};

/**
 * Method description
 * @param Not Params
 * @return boolean value
 */
ProdutoBean.prototype.getSecaoCondutorFaseDouble = function() {
    if(this.secaoCondutorFase.trim() != "")
    {
    	return this.secaoCondutorFase;
    }
    else
    {
    	return 0;
    }
};

/**
 * Method description
 * @param Not Params
 * @return The secaoCondutorMsg value
 */
ProdutoBean.prototype.getSecaoCondutorMsg = function() {
    return this.secaoCondutorMsg;
};

/**
 * Method description
 * @param Not Params
 * @return The secaoCondutorNeutro value
 */
ProdutoBean.prototype.getSecaoCondutorNeutro = function() {
    return this.secaoCondutorNeutro;
};

/**
 * Method description
 * @param Not Params
 * @return The sequencia value
 */
ProdutoBean.prototype.getSequencia = function() {
    return this.sequencia;
};

/**
 * Method description
 * @param Not Params
 * @return The tensaoProduto value
 */
ProdutoBean.prototype.getTensaoProduto = function() {
    return this.tensaoProduto;
};

/**
 * Method description
 * @param Not Params
 * @return The tipoBloqCondutor value
 */
ProdutoBean.prototype.getTipoBloqCondutor = function() {
    return this.tipoBloqCondutor;
};

/**
 * Method description
 * @param Not Params
 * @return The tipoCondutor value
 */
ProdutoBean.prototype.getTipoCondutor = function() {
    return this.tipoCondutor;
};

/**
 * Method description
 * @param Not Params
 * @return The tipoMaterialIsolacao value
 */
ProdutoBean.prototype.getTipoMaterialIsolacao = function() {
    return this.tipoMaterialIsolacao;
};

/**
 * Method description
 * @param Not Params
 * @return The unidadeTensaoProduto value
 */
ProdutoBean.prototype.getUnidadeTensaoProduto = function() {
    return this.unidadeTensaoProduto;
};

/**
 * Method description
 * @param Not Params
 * @return The unidSecaoCondutorFase value
 */
ProdutoBean.prototype.getUnidSecaoCondutorFase = function() {
    return this.unidSecaoCondutorFase;
};

/**
 * Method description
 * @param Not Params
 * @return The unidSecaoCondutorMsg value
 */
ProdutoBean.prototype.getUnidSecaoCondutorMsg = function() {
    return this.unidSecaoCondutorMsg;
};

/**
 * Method description
 * @param Not Params
 * @return The unidSecaoCondutorNeutro value
 */
ProdutoBean.prototype.getUnidSecaoCondutorNeutro = function() {
    return this.unidSecaoCondutorNeutro;
};

/**
 * Method description
 * @param Not Params
 * @return The dataAlteracao value
 */
ProdutoBean.prototype.getDataAlteracao = function() {
    return this.dataAlteracao;
};

/**
 * Method description
 * @param Not Params
 * @return The dataAlteracao value
 */
ProdutoBean.prototype.getDataAlteracao = function() {
    return this.dataAlteracao;
};

/**
 * Method description
 * @param codigoProduto
 * @return {null}
 */
ProdutoBean.prototype.setCodigoProduto = function(codigoProduto) {
    this.codigoProduto = codigoProduto;
};

/**
 * Method description
 * @param codigoProduto
 * @return {null}
 */
ProdutoBean.prototype.setDataAlteracao = function(dataAlteracao) {
    this.dataAlteracao = dataAlteracao;
};

/**
 * Method description
 * @param descricaoProduto
 * @return {null}
 */
ProdutoBean.prototype.setDescricaoProduto = function(descricaoProduto) {
    this.descricaoProduto = descricaoProduto;
};

/**
 * Method description
 * @param diametroCondutor
 * @return {null}
 */
ProdutoBean.prototype.setDiametroCondutor = function(diametroCondutor) {
    this.diametroCondutor = diametroCondutor;
};

/**
 * Method description
 * @param diametroCondutor
 * @return {null}
 */
ProdutoBean.prototype.setDiametroExternoCobertura = function(diametroExternoCobertura) {
    this.diametroExternoCobertura = diametroExternoCobertura;
};

/**
 * Method description
 * @param diametroFioBlindagem
 * @return {null}
 */
ProdutoBean.prototype.setDiametroFioBlindagem = function(diametroFioBlindagem) {
    this.diametroFioBlindagem = diametroFioBlindagem;
};

/**
 * Method description
 * @param diametroFioCondutor
 * @return {null}
 */
ProdutoBean.prototype.setDiametroFioCondutor = function(diametroFioCondutor) {
    this.diametroFioCondutor = diametroFioCondutor;
};

/**
 * Method description
 * @param diametroMedioBlindagem
 * @return {null}
 */
ProdutoBean.prototype.setDiametroMedioBlindagem = function(diametroMedioBlindagem) {
    this.diametroMedioBlindagem = diametroMedioBlindagem;
};

/**
 * Method description
 * @param diametroMedioCapaChumbo
 * @return {null}
 */
ProdutoBean.prototype.setDiametroMedioCapaChumbo = function(diametroMedioCapaChumbo) {
    this.diametroMedioCapaChumbo = diametroMedioCapaChumbo;
};

/**
 * Method description
 * @param diametroMedioCobertura
 * @return {null}
 */
ProdutoBean.prototype.setDiametroMedioCobertura = function(diametroMedioCobertura) {
    this.diametroMedioCobertura = diametroMedioCobertura;
};

/**
 * Method description
 * @param diametroNomBlindagem
 * @return {null}
 */
ProdutoBean.prototype.setDiametroNomBlindagem = function(diametroNomBlindagem) {
    this.diametroNomBlindagem = diametroNomBlindagem;
};

/**
 * Method description
 * @param diametroNomCapaChumbo
 * @return {null}
 */
ProdutoBean.prototype.setDiametroNomCapaChumbo = function(diametroNomCapaChumbo) {
    this.diametroNomCapaChumbo = diametroNomCapaChumbo;
};

/**
 * Method description
 * @param diametroNomCobertura
 * @return {null}
 */
ProdutoBean.prototype.setDiametroNomCobertura = function(diametroNomCobertura) {
    this.diametroNomCobertura = diametroNomCobertura;
};

/**
 * Method description
 * @param diametroNominalIsolacao
 * @return {null}
 */
ProdutoBean.prototype.setDiametroNominalIsolacao = function(diametroNominalIsolacao) {
    this.diametroNominalIsolacao = diametroNominalIsolacao;
};

/**
 * Method description
 * @param diametroSobCobertura
 * @return {null}
 */
ProdutoBean.prototype.setDiametroSobCobertura = function(diametroSobCobertura) {
    this.diametroSobCobertura = diametroSobCobertura;
};

/**
 * Method description
 * @param espessuraDaIsolEntreCondutor
 * @return {null}
 */
ProdutoBean.prototype.setEspessuraDaIsolEntreCondutor = function(espessuraDaIsolEntreCondutor) {
    this.espessuraDaIsolEntreCondutor = espessuraDaIsolEntreCondutor;
};

/**
 * Method description
 * @param espessuraNom1SemiCond
 * @return {null}
 */
ProdutoBean.prototype.setEspessuraNom1SemiCond = function(espessuraNom1SemiCond) {
    this.espessuraNom1SemiCond = espessuraNom1SemiCond;
};

/**
 * Method description
 * @param espessuraNom2SemiCond
 * @return {null}
 */
ProdutoBean.prototype.setEspessuraNom2SemiCond = function(espessuraNom2SemiCond) {
    this.espessuraNom2SemiCond = espessuraNom2SemiCond;
};

/**
 * Method description
 * @param espessuraNominalCapaChumbo
 * @return {null}
 */
ProdutoBean.prototype.setEspessuraNominalCapaChumbo = function(espessuraNominalCapaChumbo) {
    this.espessuraNominalCapaChumbo = espessuraNominalCapaChumbo;
};

/**
 * Method description
 * @param espessuraNominalCobertura
 * @return {null}
 */
ProdutoBean.prototype.setEspessuraNominalCobertura = function(espessuraNominalCobertura) {
    this.espessuraNominalCobertura = espessuraNominalCobertura;
};

/**
 * Method description
 * @param espessuraNominalIsolacao
 * @return {null}
 */
ProdutoBean.prototype.setEspessuraNominalIsolacao = function(espessuraNominalIsolacao) {
    this.espessuraNominalIsolacao = espessuraNominalIsolacao;
};

/**
 * Method description
 * @param espessuraNominalIsolacao
 * @return {null}
 */
ProdutoBean.prototype.setEspessuraNominalIsolacao = function(espessuraNominalIsolacao) {
    this.espessuraNominalIsolacao = espessuraNominalIsolacao;
};

/**
 * Method description
 * @param familiaProduto
 * @return {null}
 */
ProdutoBean.prototype.setFamiliaProduto = function(familiaProduto) {
    this.familiaProduto = familiaProduto;
};

/**
 * Method description
 * @param fatorPasso
 * @return {null}
 */
ProdutoBean.prototype.setFatorPasso = function(fatorPasso) {
    this.fatorPasso = fatorPasso;
};

/**
 * Method description
 * @param formatoCabo
 * @return {null}
 */
ProdutoBean.prototype.setFormatoCabo = function(formatoCabo) {
    this.formatoCabo = formatoCabo;
};

/**
 * Method description
 * @param formatoCabo
 * @return {null}
 */
ProdutoBean.prototype.setMaterialBlindagem = function(materialBlindagem) {
    this.materialBlindagem = materialBlindagem;
};

/**
 * Method description
 * @param materialCobertura
 * @return {null}
 */
ProdutoBean.prototype.setMaterialCobertura = function(materialCobertura) {
    this.materialCobertura = materialCobertura;
};

/**
 * Method description
 * @param materialCondutorFase
 * @return {null}
 */
ProdutoBean.prototype.setMaterialCondutorFase = function(materialCondutorFase) {
    this.materialCondutorFase = materialCondutorFase;
};

/**
 * Method description
 * @param materialCondutorMsg
 * @return {null}
 */
ProdutoBean.prototype.setMaterialCondutorMsg = function(materialCondutorMsg) {
    this.materialCondutorMsg = materialCondutorMsg;
};

/**
 * Method description
 * @param materialCondutorNeutro
 * @return {null}
 */
ProdutoBean.prototype.setMaterialCondutorNeutro = function(materialCondutorNeutro) {
    this.materialCondutorNeutro = materialCondutorNeutro;
};

/**
 * Method description
 * @param numCondutoresFase
 * @return {null}
 */
ProdutoBean.prototype.setNumCondutoresFase = function(numCondutoresFase) {
    this.numCondutoresFase = numCondutoresFase;
};

/**
 * Method description
 * @param numCondutoresMsg
 * @return {null}
 */
ProdutoBean.prototype.setNumCondutoresMsg = function(numCondutoresMsg) {
    this.numCondutoresMsg = numCondutoresMsg;
};

/**
 * Method description
 * @param numCondutoresNeutro
 * @return {null}
 */
ProdutoBean.prototype.setNumCondutoresNeutro = function(numCondutoresNeutro) {
    this.numCondutoresNeutro = numCondutoresNeutro;
};

/**
 * Method description
 * @param numFiosBlindagem
 * @return {null}
 */
ProdutoBean.prototype.setNumFiosBlindagem = function(numFiosBlindagem) {
    this.numFiosBlindagem = numFiosBlindagem;
};

/**
 * Method description
 * @param numFiosCondutor
 * @return {null}
 */
ProdutoBean.prototype.setNumFiosCondutor = function(numFiosCondutor) {
    this.numFiosCondutor = numFiosCondutor;
};

/**
 * Method description
 * @param passoBlindagem
 * @return {null}
 */
ProdutoBean.prototype.setPassoBlindagem = function(passoBlindagem) {
    this.passoBlindagem = passoBlindagem;
};

/**
 * Method description
 * @param resistEletricaCondutor
 * @return {null}
 */
ProdutoBean.prototype.setResistEletricaCondutor = function(resistEletricaCondutor) {
    this.resistEletricaCondutor = resistEletricaCondutor;
};

/**
 * Method description
 * @param resistenciaIsolacao
 * @return {null}
 */
ProdutoBean.prototype.setResistenciaIsolacao = function(resistenciaIsolacao) {
    this.resistenciaIsolacao = resistenciaIsolacao;
};

/**
 * Method description
 * @param secaoCondutorFase
 * @return {null}
 */
ProdutoBean.prototype.setSecaoCondutorFase = function(secaoCondutorFase) {
    this.secaoCondutorFase = secaoCondutorFase;
};

/**
 * Method description
 * @param secaoCondutorMsg
 * @return {null}
 */
ProdutoBean.prototype.setSecaoCondutorMsg = function(secaoCondutorMsg) {
    this.secaoCondutorMsg = secaoCondutorMsg;
};

/**
 * Method description
 * @param secaoCondutorNeutro
 * @return {null}
 */
ProdutoBean.prototype.setSecaoCondutorNeutro = function(secaoCondutorNeutro) {
    this.secaoCondutorNeutro = secaoCondutorNeutro;
};

/**
 * Method description
 * @param sequencia
 * @return {null}
 */
ProdutoBean.prototype.setSequencia = function(sequencia) {
    this.sequencia = sequencia;
};

/**
 * Method description
 * @param tensaoProduto
 * @return {null}
 */
ProdutoBean.prototype.setTensaoProduto = function(tensaoProduto) {
    this.tensaoProduto = tensaoProduto;
};

/**
 * Method description
 * @param tipoBloqCondutor
 * @return {null}
 */
ProdutoBean.prototype.setTipoBloqCondutor = function(tipoBloqCondutor) {
    this.tipoBloqCondutor = tipoBloqCondutor;
};

/**
 * Method description
 * @param tipoCondutor
 * @return {null}
 */
ProdutoBean.prototype.setTipoCondutor = function(tipoCondutor) {
    this.tipoCondutor = tipoCondutor;
};

/**
 * Method description
 * @param tipoMaterialIsolacao
 * @return {null}
 */
ProdutoBean.prototype.setTipoMaterialIsolacao = function(tipoMaterialIsolacao) {
    this.tipoMaterialIsolacao = tipoMaterialIsolacao;
};

/**
 * Method description
 * @param unidadeTensaoProduto
 * @return {null}
 */
ProdutoBean.prototype.setUnidadeTensaoProduto = function(unidadeTensaoProduto) {
    this.unidadeTensaoProduto = unidadeTensaoProduto;
};

/**
 * Method description
 * @param unidSecaoCondutorFase
 * @return {null}
 */
ProdutoBean.prototype.setUnidSecaoCondutorFase = function(unidSecaoCondutorFase) {
    this.unidSecaoCondutorFase = unidSecaoCondutorFase;
};

/**
 * Method description
 * @param unidSecaoCondutorMsg
 * @return {null}
 */
ProdutoBean.prototype.setUnidSecaoCondutorMsg = function(unidSecaoCondutorMsg) {
    this.unidSecaoCondutorMsg = unidSecaoCondutorMsg;
};

/**
 * Method description
 * @param unidSecaoCondutorNeutro
 * @return {null}
 */
ProdutoBean.prototype.setUnidSecaoCondutorNeutro = function(unidSecaoCondutorNeutro) {
    this.unidSecaoCondutorNeutro = unidSecaoCondutorNeutro;
};

/**
 * Method description
 * @param tipoRegistro
 * @return {null}
 */
ProdutoBean.prototype.setTipoRegistro = function(tipoRegistro) {
    this.tipoRegistro = tipoRegistro;
};

/**
 * Method description
 * @param Not Params
 * @return The descFormatoCabo value
 */
ProdutoBean.prototype.getDescFormatoCabo = function() {
    return this.descFormatoCabo;
};

/**
 * Method description
 * @param descFormatoCabo
 * @return {null}
 */
ProdutoBean.prototype.setDescFormatoCabo = function(descFormatoCabo) {
    this.descFormatoCabo = descFormatoCabo;
};

/**
 * Method description
 * @param Not Params
 * @return The descMaterialBlindagem value
 */
ProdutoBean.prototype.getDescMaterialBlindagem = function() {
    return this.descMaterialBlindagem;
};

/**
 * Method description
 * @param descMaterialBlindagem
 * @return {null}
 */
ProdutoBean.prototype.setDescMaterialBlindagem = function(descMaterialBlindagem) {
    this.descMaterialBlindagem = descMaterialBlindagem;
};

/**
 * Method description
 * @param Not Params
 * @return The descMaterialCobertura value
 */
ProdutoBean.prototype.getDescMaterialCobertura = function() {
    return this.descMaterialCobertura;
};

/**
 * Method description
 * @param descMaterialCobertura
 * @return {null}
 */
ProdutoBean.prototype.setDescMaterialCobertura = function(descMaterialCobertura) {
    this.descMaterialCobertura = descMaterialCobertura;
};

/**
 * Method description
 * @param Not Params
 * @return The descMaterialCondutorFase value
 */
ProdutoBean.prototype.getDescMaterialCondutorFase = function() {
    return this.descMaterialCondutorFase;
};

/**
 * Method description
 * @param descMaterialCondutorFase
 * @return {null}
 */
ProdutoBean.prototype.setDescMaterialCondutorFase = function(descMaterialCondutorFase) {
    this.descMaterialCondutorFase = descMaterialCondutorFase;
};

/**
 * Method description
 * @param Not Params
 * @return The descMaterialCondutorMsg value
 */
ProdutoBean.prototype.getDescMaterialCondutorMsg = function() {
    return this.descMaterialCondutorMsg;
};

/**
 * Method description
 * @param descMaterialCondutorMsg
 * @return {null}
 */
ProdutoBean.prototype.setDescMaterialCondutorMsg = function(descMaterialCondutorMsg) {
    this.descMaterialCondutorMsg = descMaterialCondutorMsg;
};

/**
 * Method description
 * @param Not Params
 * @return The descMaterialCondutorNeutro value
 */
ProdutoBean.prototype.getDescMaterialCondutorNeutro = function() {
    return this.descMaterialCondutorNeutro;
};

/**
 * Method description
 * @param descMaterialCondutorNeutro
 * @return {null}
 */
ProdutoBean.prototype.setDescMaterialCondutorNeutro = function(descMaterialCondutorNeutro) {
    this.descMaterialCondutorNeutro = descMaterialCondutorNeutro;
};

/**
 * Method description
 * @param Not Params
 * @return The descTipoBloqCondutor value
 */
ProdutoBean.prototype.getDescTipoBloqCondutor = function() {
    return this.descTipoBloqCondutor;
};

/**
 * Method description
 * @param descTipoBloqCondutor
 * @return {null}
 */
ProdutoBean.prototype.setDescTipoBloqCondutor = function(descTipoBloqCondutor) {
    this.descTipoBloqCondutor = descTipoBloqCondutor;
};

/**
 * Method description
 * @param Not Params
 * @return The descTipoCondutor value
 */
ProdutoBean.prototype.getDescTipoCondutor = function() {
    return this.descTipoCondutor;
};

/**
 * Method description
 * @param descTipoCondutor
 * @return {null}
 */
ProdutoBean.prototype.setDescTipoCondutor = function(descTipoCondutor) {
    this.descTipoCondutor = descTipoCondutor;
};

/**
 * Method description
 * @param Not Params
 * @return The descTipoMaterialIsolacao value
 */
ProdutoBean.prototype.getDescTipoMaterialIsolacao = function() {
    return this.descTipoMaterialIsolacao;
};

/**
 * Method description
 * @param descTipoMaterialIsolacao
 * @return {null}
 */
ProdutoBean.prototype.setDescTipoMaterialIsolacao = function(descTipoMaterialIsolacao) {
    this.descTipoMaterialIsolacao = descTipoMaterialIsolacao;
};

/**
 * Method description
 * @param Not Params
 * @return The secaoMaxima value
 */
ProdutoBean.prototype.getSecaoMaxima = function() {
    return this.secaoMaxima;
};

/**
 * Method description
 * @param descTipoMaterialIsolacao
 * @return {null}
 */
ProdutoBean.prototype.setSecaoMaxima = function(secaoMaxima) {
    this.secaoMaxima = secaoMaxima;
};

/**
 * Method description
 * @param Not Params
 * @return The secaoMinima value
 */
ProdutoBean.prototype.getSecaoMinima = function() {
    return this.secaoMinima;
};

/**
 * Method description
 * @param secaoMinima
 * @return {null}
 */
ProdutoBean.prototype.setSecaoMinima = function(secaoMinima) {
    this.secaoMinima = secaoMinima;
};

/**
 * Method description
 * @param Not Params
 * @return The diametroNominalVeia value
 */
ProdutoBean.prototype.getDiametroNominalVeia = function() {
    return this.diametroNominalVeia;
};

/**
 * Method description
 * @param diametroNominalVeia
 * @return {null}
 */
ProdutoBean.prototype.setDiametroNominalVeia = function(diametroNominalVeia) {
    this.diametroNominalVeia = diametroNominalVeia;
};