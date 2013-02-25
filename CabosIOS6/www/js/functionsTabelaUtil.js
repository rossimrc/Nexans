
function getDimensionamentoTabelaUtil()
{
    alert("getDimensionamentoTabelaUtil");
    
    var arrayProdutoBean = document.getElementById("arrayProdutoBean");
    
    var fator = 1;
    
	dimensionamento = new DimensionamentoBean();
    dimensionamento.setTipoProduto($("#cableList").val());
    dimensionamento.setNivelTensao($("#systemVoltage").val());
    dimensionamento.setNumeroCondutores($("#conductorNumber").val());
    dimensionamento.setPossibilidadeInstalacao($("#possibilidadeInstalacao").val());
    dimensionamento.setlocalInstalacao($("#localInstalacao").val());
    dimensionamento.setDistanciaEntreCabos($("#distanciaEntreCabos").val())
    
    // Recupera a temperatura ambiente ao ar/solo.
    dimensionamento.setTemperaturaMaximaCondutor($("#maximumTemperature").val());
	dimensionamento.setTemperaturaArSolo($("#temperaturaArSolo").val());
    
	return dimensionamento;
}


function buscarCorrenteTabela(secao){
	
	alert("buscarCorrenteTabela");
	var dimensionamento = getDimensionamentoTabelaUtil();
	
	var corrente = 0;
	var temperatura = dimensionamento.getTemperaturaMaximaCondutor();
	
	if(dimensionamento.isCabosEnergia()){
		if(dimensionamento.isBaixaTensao()){
			if(temperatura == _70C){
				if(isTabela36(dimensionamento)){
					alert("tabela36");
					corrente = getCorrenteTabela36(dimensionamento, secao);
				}else if(isTabela38(dimensionamento)){
					alert("tabela38");
					corrente = getCorrenteTabela38(dimensionamento, secao);
				}
			}else if(temperatura == _90C){
				if(isTabela37(dimensionamento)){
					alert("tabela37");
					corrente = getCorrenteTabela37(dimensionamento, secao);
				}else if(isTabela39(dimensionamento)){
					alert("tabela39");
					corrente = getCorrenteTabela39(dimensionamento, secao);
				}
			}
		}else if(dimensionamento.isMediaTensao()){
			if (isTabela28(dimensionamento)) {
				alert("tabela28");
				corrente = getCorrenteTabela28(dimensionamento, secao);
			} else if (isTabela29(dimensionamento)) {
				alert("tabela29");
				corrente = getCorrenteTabela29(dimensionamento, secao);
			} else if (isTabela30(dimensionamento)) {
				alert("tabela30");
				corrente = getCorrenteTabela30(dimensionamento, secao);
			} else if (isTabela31(dimensionamento)) {
				alert("tabela31");
				corrente = getCorrenteTabela31(dimensionamento, secao);
			}
		}
		
	}else if(dimensionamento.isCabosNavais()){
		corrente = getCorrenteLinhaNaval();
	}
	
	if(dimensionamento.isCabosNavais() && dimensionamento.isMediaTensao()){
		corrente *= 0.95;
	}
	
	return corrente;
}

function isTabela28(dimensionamento) {
	return (dimensionamento.isCobre() && dimensionamento.getTemperaturaMaximaCondutor() == _90C);
}

function isTabela29(dimensionamento) {
	return (dimensionamento.isAluminio() && dimensionamento.getTemperaturaMaximaCondutor() == _90C);
}

function isTabela30(dimensionamento) {
	return (dimensionamento.isCobre() && dimensionamento.getTemperaturaMaximaCondutor() == _105C);
}

function isTabela31(dimensionamento) {
	return (dimensionamento.isAluminio() && dimensionamento.getTemperaturaMaximaCondutor() == _105C);
}

function isTabela36(dimensionamento){
	var result = false;
	var local = dimensionamento.getLocalInstalacao();
	
	if ((local == ELETRODUTO) || (local == BANDEJA_NAO_PERFURADA) || (local == PAREDES) || (local == TETO) || (local == MOLDURA) || (local == PAREDE_ISOLANTE) || (local == ALVENARIA)
	 || (local == ELETRODUTO_PAREDE) || (local == CAIXILHO_PORTA_PAREDE) || (local == ELETRODUTO_CIRCULAR_ALVENARIA) || (local == DIRETAMENTE_ENTERRADOS)
	 || (local == CANALETA_FECHADA) || (local == CANALETA_VENTILADA) || (local == ELETROCALHA_PERFILADO) || (local == DIRETAMENTE) || (local == ELETRODUTO_SECAO_CIRCULAR)
	 || (dimensionamento.getPossibilidadeInstalacao() == CANALETA_FECHADA_SOLO)) {
		result = true;
	}
	
	return result;
}

function isTabela37(dimensionamento){
	return isTabela36(dimensionamento);
}

function isTabela38(dimensionamento){
	var result = false;
	var local = dimensionamento.getLocalInstalacao();
	
	if ((local == BANDEJA_PERFURADA) || (local ==LEITO) || (local == SUPORTES) || (local == ISOLADORES)) {
		result = true;
	}
	
	return result;
}

function isTabela39(dimensionamento){
	return isTabela38(dimensionamento);
}



function getCorrenteTabela28(dimensionamento, secao){

		
}

function getCorrenteTabela29(dimensionamento, secao){
	
	
}

function getCorrenteTabela30(dimensionamento, secao){
	
	
}

function getCorrenteTabela31(dimensionamento, secao){
	
	
}

function getCorrenteTabela36(dimensionamento, secao){
	
	
}

function getCorrenteTabela37(dimensionamento, secao){
	
	
}

function getCorrenteTabela38(dimensionamento, secao){
	
	
}

function getCorrenteTabela39(dimensionamento, secao){
	
	
}

function getCorrenteLinhaNaval(dimensionamento, secao){
	
}


function getCorrenteTable10Base(dimensionamento, secao){
	
	corrente = 0;
	
	
	
	
	
}



