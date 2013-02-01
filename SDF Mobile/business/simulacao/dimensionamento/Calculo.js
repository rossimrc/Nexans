function Calculo() {
	this.CRITERIO_DIMENSIONAMENTO_CURTO_CIRCUITO 	= 1;
	this.CRITERIO_DIMENSIONAMENTO_CORRENTE 			= 2;
	this.CRITERIO_DIMENSIONAMENTO_QUEDA_TENSAO		= 3;
	
	this.gradienteMaximo = 0;
	this.dimensionamento = new DimensionamentoBean();
	
	this.secaoNominal = new SecaoNominalCondutores(); //developing this
}