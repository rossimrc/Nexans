var impedancia = "";


function calcularImpedanciaSequenciaPosNeg(rca, xL) {
	//NumberFormat nf = new DecimalFormat("0.00000", new DecimalFormatSymbols(Locale.ENGLISH));
	//impedancia = nf.format(rca) + " + j " + nf.format(xL);

	impedancia = rca.toFixed(5).toString() + " + j " + xL.toFixed(5).toString()
	
}

function getImpedancia(){
	return impedancia;
}