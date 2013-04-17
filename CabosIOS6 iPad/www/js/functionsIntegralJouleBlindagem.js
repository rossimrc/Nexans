var i2tJouleBlindagem = 0;

function calcularIntegralJouleBlindagem(sC, kcc){
	i2tJouleBlindagem = Math.pow(sC * kcc * 1000, 2);
}

function getI2tJouleBlindagem(){
	return i2tJouleBlindagem;
}