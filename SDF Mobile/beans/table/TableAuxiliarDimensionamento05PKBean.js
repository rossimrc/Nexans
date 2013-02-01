/**
 * Constructor description
 * @author Thiago Cavalari
 * @param nomeCabo, original java type double
 * @param tipoMaterialCondutor, original java type String
 * @class
 * Class Table04PKBean
 */
function TableAuxiliarDimensionamento05PKBean()
{
	this.nomeCabo				= null;
	this.tipoMaterialCondutor	= null;
}

/**
 * Method description
 * @param Not Params
 * @return The nomeCabo value
 */
TableAuxiliarDimensionamento05PKBean.prototype.getNomeCabo = function() {
    return this.nomeCabo;
};

/**
 * Method description
 * @param nomeCabo
 * @return {null}
 */
TableAuxiliarDimensionamento05PKBean.prototype.setNomeCabo = function(nomeCabo) {
    this.nomeCabo = nomeCabo;
};

/**
 * Method description
 * @param Not Params
 * @return The tipoMaterialCondutor value
 */
TableAuxiliarDimensionamento05PKBean.prototype.getTipoMaterialCondutor = function() {
    return this.tipoMaterialCondutor;
};

/**
 * Method description
 * @param tipoMaterialCondutor
 * @return {null}
 */
TableAuxiliarDimensionamento05PKBean.prototype.setTipoMaterialCondutor = function(tipoMaterialCondutor) {
    this.tipoMaterialCondutor = tipoMaterialCondutor;
};