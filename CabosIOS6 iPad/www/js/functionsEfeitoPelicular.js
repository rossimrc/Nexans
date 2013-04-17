var xs = 0;
var ys = 0;

function calcularEfeitoPelicular(dimensionamento, rcc){
	
	var f = dimensionamento.getFrequencia();
	var ks = 1;
	
	// Calcula Xs.
	xs = (8 * Math.PI * f * ks * Math.pow(10, -4)) / rcc;
	
	// Calcula Ys.
	ys = Math.pow(xs, 2) / (192 + (0.8 * Math.pow(xs, 2)));
}

function getXs(){
	return xs;
}

function getYs(){
	return ys;
}