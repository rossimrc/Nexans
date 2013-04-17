var xp = 0;
var yp = 0;


function calcularEfeitoProximidade(dimensionamento, s, rcc)
{
	
	// Diametro do condutor.
	var dc = arrayProdutoBean["NMR_DIAMETRO_CONDUTOR"];
	
	if (dimensionamento.isDuasFases()) {
		
		// Calcula o efeito da funÁ„o de BESSEL utilizado no c·lculo do efeito proximidade.
		xp = ((8 * Math.PI * dimensionamento.getFrequencia() * 1) / rcc) * Math.pow(10, -4);
		
		// Calcula o fator de efeito proximidade.
		var a = (Math.pow(xp, 2)) / (192 + (0.8 * Math.pow(xp, 2)));
		var b = Math.pow(dc / s, 2) * 2.9;
		yp = a * b;
		
	} else if (dimensionamento.isTrifasico()) {
		
		// Calcula o efeito da funÁ„o de BESSEL utilizado no c·lculo do efeito proximidade.
		xp = (8 * Math.PI * dimensionamento.getFrequencia() * 1 * Math.pow(10, -4)) / rcc;
		
		// Calcula o fator de efeito proximidade.
		var a = Math.pow(xp, 2) / (192 + (0.8 * Math.pow(xp, 2)));
		var b = Math.pow(dc / s, 2);
		var c = 0.312 * Math.pow(dc / s, 2);
		var d = 1.18 / ((Math.pow(xp, 2) / (192 + (0.8 * Math.pow(xp, 2))) + 0.27));
		
		yp = a * b * (c + d);
		
	}
	
}

function getXp(){
	return xp;
}

function getYp(){
	return yp;
}