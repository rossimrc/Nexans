var i2tJouleCondutor = 0;

function calcularIntegralJouleCondutor(sC, kcc){
	i2tJouleCondutor = Math.pow(sC * kcc * 1000, 2);
}

function getI2tJouleCondutor(){
	return i2tJouleCondutor;
}