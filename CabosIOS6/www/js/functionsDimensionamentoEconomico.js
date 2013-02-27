var se = 0;
var originalSection = 0;
var numeroCabosDimensionamento = 0;

function calcularDimensionamentoEconomico(corrente, numeroCabos){
	
	var dimensionamento = getDimensionamentoTabelaUtil();
	
	// Constantes definidas nos c·lculos de mÈdia, enviada pelo Leandro.
	var h = 8760;
	var n = 10;
	var e = 0.2; // Alterado dia 27/04/2007 - ApÛs solicitaÁ„o do M·rio.
	
	var g = 550; //new TableAuxiliarDimensionamento05().getGLinha(dimensionamento);
	
	var cn = 0.997666309;
	var ch = 0.028420361;
	
	//se = (corrente / (ch * cn)) * Math.sqrt(e / g);
	
	originalSection = (corrente / numeroCabos) * 0.67;
	se = getSecaoPadronizada(originalSection);
}

function getSecaoPadronizada(sE){
	
	var secaoPadronizada = sE;
	
	if (!isSecaoPadronizada(sE)) {
		secaoPadronizada = buscarSecaoAcimaTabelaUtil(se);
		
		var arrayProdutoBean = document.getElementById("arrayProdutoBean");
		if (secaoPadronizada > arrayProdutoBean.options["SecaoMaxima"].value) {
			secaoPadronizada = 0;
		}
	}
	
	return secaoPadronizada;
}


function getSe(){
	return se;
}

function getOriginalSection(){
	return originalSection;
}