/**
 * Constructor description
 * @author Thiago Cavalari
 * @class
 * Class DimensionamentoDAO
 */
function DimensionamentoDAO(database)
{
	this.db = database;
}

DimensionamentoDAO.prototype = new DimensionamentoBean();