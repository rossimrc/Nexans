
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
    dimensionamento.setDistanciaEntreCabos($("#distanciaEntreCabos").val());
    dimensionamento.setTipoInstalacao($("#tipoInstalacao").val());
    dimensionamento.setOrientacaoFatorCorrecao($("#orientacaoFatorCorrecao").val());
    dimensionamento.setResistividadeTermica($("#resistividadeTermica").val());
    dimensionamento.setNumeroBandejas($("#numeroBandejas").val());
    
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

function getFatorAgrupamentoTabela18Base(numeroTabela, numeroCircuitos,  numeroBandejas)
{
    
    //Table18PKBean pkBean = new Table18PKBean();
    //pkBean.setNomeTabela(Integer.toString(numeroTabela));
    //pkBean.setNumeroBandejas(numeroBandejas);
    
    //Table18Bean bean = getByID(pkBean);
    
    var dimensionamento = getDimensionamentoTabelaUtil();
    var fator = 1;
    
    db.transaction(function(tx){
        tx.executeSql("SELECT * FROM TAB_AUXILIAR_18 WHERE NME_BANCO = ? AND NMR_BANDEJAS = ? ",[nomeTabela,numeroBandejas],function(tx,rs){
             
             if(rs.rows.length >0)
             {
                 switch (numeroCircuitos)
                 {
                     case "1":
                         //fator = bean.getValor1();
                         fator = rs.rows.item(0).VLR_1;
                     break;
                     case "2":
                         //fator = bean.getValor2();
                         fator = rs.rows.item(0).VLR_2;
                     break;
                     case "3":
                         //fator = bean.getValor3();
                         fator = rs.rows.item(0).VLR_3;
                     break;
                     case "4":
                     case "5":
                     case "6":
                         //fator = bean.getValor6();
                         fator = rs.rows.item(0).VLR_6;
                     break;
                     case "7":
                     case "8":
                     case "9":
                         //fator = bean.getValor9();
                         fator = rs.rows.item(0).VLR_9;
                     break;
                 }
             }
             $("#fator").val(fator);
        });
    },errorCB);
    
    //return fator;
}

function bandejaJustapostaTabelaA8(index, numeroCircuitos)
{
    switch(index)
    {
        case "0":
            switch(numeroCircuitos)
        {
            case "1":
                fator = 0.98;
                break;
            case "2":
                fator = 0.91;
                break;
            case "3":
                fator = 0.87;
                break;
        }
            break;
        case "1":
            switch(numeroCircuitos)
        {
            case "1":
                fator = 0.96;
                break;
            case "2":
                fator = 0.87;
                break;
            case "3":
                fator = 0.81;
                break;
        }
            break;
        case "2":
            switch(numeroCircuitos)
        {
            case "1":
                fator = 0.95;
                break;
            case "2":
                fator = 0.85;
                break;
            case "3":
                fator = 0.78;
                break;
        }
            break;
    }
}

function bandejaTrifolioTabelaA8(index, numeroCircuitos)
{
    switch(index)
    {
        case "0":
            switch(numeroCircuitos)
        {
            case "1":
                fator = 1.0;
                break;
            case "2":
                fator = 0.98;
                break;
            case "3":
                fator = 0.96;
                break;
        }
            break;
        case "1":
            switch(numeroCircuitos)
        {
            case "1":
                fator = 0.97;
                break;
            case "2":
                fator = 0.93;
                break;
            case "3":
                fator = 0.89;
                break;
        }
            break;
        case "2":
            switch(numeroCircuitos)
        {
            case "1":
                fator = 0.96;
                break;
            case "2":
                fator = 0.92;
                break;
            case "3":
                fator = 0.86;
                break;
        }
            break;
    }
}

function bandejaVerticalJustapostaTabelaA8(index, numeroCircuitos)
{
    switch(index)
    {
        case "0":
            switch(numeroCircuitos)
            {
                case "1":
                    fator = 0.96;
                    break;
                case "2":
                    fator = 0.86;
                    break;
            }
            break;
        case "1":
            switch(numeroCircuitos)
            {
                case "1":
                    fator = 0.95;
                    break;
                case "2":
                    fator = 0.84;
                    break;
            }
            break;
    }
}

function bandejaVerticalTrifolioTabelaA8(index, numeroCircuitos)
{
    switch(index)
    {
        case "0":
            switch(numeroCircuitos)
            {
                case "1":
                    fator = 1.0;
                    break;
                case "2":
                    fator = 0.91;
                    break;
                case "3":
                    fator = 0.89;
                    break;
            }
            break;
        case "1":
            switch(numeroCircuitos)
            {
                case "1":
                    fator = 1.0;
                    break;
                case "2":
                    fator = 0.90;
                    break;
                case "3":
                    fator = 0.86;
                    break;
            }
            break;
    }
}

function outrosJustapostaTabelaA8(index, numeroCircuitos)
{
    switch(index)
    {
        case "0":
            switch(numeroCircuitos)
            {
                case "1":
                    fator = 1.0;
                    break;
                case "2":
                    fator = 0.97;
                    break;
                case "3":
                    fator = 0.96;
                    break;
            }
            break;
        case "1":
            switch(numeroCircuitos)
            {
                case "1":
                    fator = 0.98;
                    break;
                case "2":
                    fator = 0.93;
                    break;
                case "3":
                    fator = 0.89;
                    break;
            }
            break;
        case "2":
            switch(numeroCircuitos)
            {
                case "1":
                    fator = 0.97;
                    break;
                case "2":
                    fator = 0.90;
                    break;
                case "3":
                    fator = 0.86;
                    break;
            }
            break;
    }
}

function outrosTrifolioTabelaA8(index, numeroCircuitos)
{
    switch(index)
    {
        case "0":
            switch(numeroCircuitos)
            {
                case "1":
                    fator = 1.0;
                    break;
                case "2":
                    fator = 1.0;
                    break;
                case "3":
                    fator = 1.0;
                    break;
            }
            break;
        case "1":
            switch(numeroCircuitos)
            {
                case "1":
                    fator = 0.97;
                    break;
                case "2":
                    fator = 0.95;
                    break;
                case "3":
                    fator = 0.93;
                    break;
            }
            break;
        case "2":
            switch(numeroCircuitos)
            {
                case "1":
                    fator = 0.96;
                    break;
                case "2":
                    fator = 0.94;
                    break;
                case "3":
                    fator = 0.90;
                    break;
            }
            break;
    }
}

function bandejaJustapostaTabelaA7(index, numeroCircuitos)
{
    switch(index)
    {
        case "0":
            switch(numeroCircuitos)
            {
                case "1":
                    fator = 1.0;
                    break;
                case "2":
                    fator = 0.88;
                    break;
                case "3":
                    fator = 0.82;
                    break;
                case "4":
                    fator = 0.79;
                    break;
                case "5":
                    fator = 0.76;
                    break;
                case "6":
                    fator = 0.76;
                    break;
                case "7":
                    fator = 0.73;
                    break;
                case "8":
                    fator = 0.73;
                    break;
                case "9":
                    fator = 0.73;
                    break;
            }
            break;
        case "1":
            switch(numeroCircuitos)
            {
                case "1":
                    fator = 1.0;
                    break;
                case "2":
                    fator = 0.87;
                    break;
                case "3":
                    fator = 0.80;
                    break;
                case "4":
                    fator = 0.77;
                    break;
                case "5":
                    fator = 0.73;
                    break;
                case "6":
                    fator = 0.73;
                    break;
                case "7":
                    fator = 0.68;
                    break;
                case "8":
                    fator = 0.68;
                    break;
                case "9":
                    fator = 0.68;
                    break;
            }
            break;
        case "2":
            switch(numeroCircuitos)
            {
                case "1":
                    fator = 1.0;
                    break;
                case "2":
                    fator = 0.86;
                    break;
                case "3":
                    fator = 0.79;
                    break;
                case "4":
                    fator = 0.76;
                    break;
                case "5":
                    fator = 0.71;
                    break;
                case "6":
                    fator = 0.71;
                    break;
                case "7":
                    fator = 0.66;
                    break;
                case "8":
                    fator = 0.66;
                    break;
                case "9":
                    fator = 0.66;
                    break;
            }
            break;
    }
}

function bandejaEspacadaTabelaA7(index, numeroCircuitos)
{
    switch(index)
    {
        case "0":
            switch(numeroCircuitos)
            {
                case "1":
                    fator = 1.0;
                    break;
                case "2":
                    fator = 1.0;
                    break;
                case "3":
                    fator = 0.98;
                    break;
                case "4":
                    fator = 0.95;
                    break;
                case "5":
                    fator = 0.91;
                    break;
                case "6":
                    fator = 0.91;
                    break;
            }
            break;
        case "1":
            switch(numeroCircuitos)
            {
                case "1":
                    fator = 1.0;
                    break;
                case "2":
                    fator = 0.99;
                    break;
                case "3":
                    fator = 0.96;
                    break;
                case "4":
                    fator = 0.92;
                    break;
                case "5":
                    fator = 0.87;
                    break;
                case "6":
                    fator = 0.87;
                    break;
            }
            break;
        case "2":
            switch(numeroCircuitos)
            {
                case "1":
                    fator = 1.0;
                    break;
                case "2":
                    fator = 0.98;
                    break;
                case "3":
                    fator = 0.95;
                    break;
                case "4":
                    fator = 0.91;
                    break;
                case "5":
                    fator = 0.85;
                    break;
                case "6":
                    fator = 0.85;
                    break;
            }
            break;
    }
}

function bandejaVerticalJustapostaTabelaA7(index, numeroCircuitos)
{
    switch(index)
    {
        case "0":
            switch(numeroCircuitos)
            {
                case "1":
                    fator = 1.0;
                    break;
                case "2":
                    fator = 0.88;
                    break;
                case "3":
                    fator = 0.82;
                    break;
                case "4":
                    fator = 0.78;
                    break;
                case "5":
                    fator = 0.73;
                    break;
                case "6":
                    fator = 0.73;
                    break;
                case "7":
                    fator = 0.72;
                    break;
                case "8":
                    fator = 0.72;
                    break;
                case "9":
                    fator = 0.72;
                    break;
            }
            break;
        case "1":
            switch(numeroCircuitos)
            {
                case "1":
                    fator = 1.0;
                    break;
                case "2":
                    fator = 0.88;
                    break;
                case "3":
                    fator = 0.81;
                    break;
                case "4":
                    fator = 0.76;
                    break;
                case "5":
                    fator = 0.71;
                    break;
                case "6":
                    fator = 0.71;
                    break;
                case "7":
                    fator = 0.70;
                    break;
                case "8":
                    fator = 0.70;
                    break;
                case "9":
                    fator = 0.70;
                    break;
            }
            break;
    }
}

function bandejaVerticalEspacadaTabelaA7(index, numeroCircuitos)
{
    switch(index)
    {
        case "0":
            switch(numeroCircuitos)
            {
                case "1":
                    fator = 1.0;
                    break;
                case "2":
                    fator = 0.91;
                    break;
                case "3":
                    fator = 0.89;
                    break;
                case "4":
                    fator = 0.88;
                    break;
                case "5":
                    fator = 0.87;
                    break;
                case "6":
                    fator = 0.87;
                    break;
            }
            break;
        case "1":
            switch(numeroCircuitos)
            {
                case "1":
                    fator = 1.0;
                    break;
                case "2":
                    fator = 0.91;
                    break;
                case "3":
                    fator = 0.88;
                    break;
                case "4":
                    fator = 0.87;
                    break;
                case "5":
                    fator = 0.85;
                    break;
                case "6":
                    fator = 0.85;
                    break;
            }
            break;
    }
}

function outrosJustapostaTabelaA7(index, numeroCircuitos)
{
    switch(index)
    {
        case "0":
            switch(numeroCircuitos)
            {
                case "1":
                    fator = 1.0;
                    break;
                case "2":
                    fator = 0.87;
                    break;
                case "3":
                    fator = 0.82;
                    break;
                case "4":
                    fator = 0.80;
                    break;
                case "5":
                    fator = 0.79;
                    break;
                case "6":
                    fator = 0.79;
                    break;
                case "7":
                    fator = 0.78;
                    break;
                case "8":
                    fator = 0.78;
                    break;
                case "9":
                    fator = 0.78;
                    break;
            }
            break;
        case "1":
            switch(numeroCircuitos)
            {
                case "1":
                    fator = 1.0;
                    break;
                case "2":
                    fator = 0.86;
                    break;
                case "3":
                    fator = 0.80;
                    break;
                case "4":
                    fator = 0.78;
                    break;
                case "5":
                    fator = 0.76;
                    break;
                case "6":
                    fator = 0.76;
                    break;
                case "7":
                    fator = 0.73;
                    break;
                case "8":
                    fator = 0.73;
                    break;
                case "9":
                    fator = 0.73;
                    break;
            }
            break;
        case "2":
            switch(numeroCircuitos)
            {
                case "1":
                    fator = 1.0;
                    break;
                case "2":
                    fator = 0.85;
                    break;
                case "3":
                    fator = 0.79;
                    break;
                case "4":
                    fator = 0.76;
                    break;
                case "5":
                    fator = 0.73;
                    break;
                case "6":
                    fator = 0.73;
                    break;
                case "7":
                    fator = 0.70;
                    break;
                case "8":
                    fator = 0.70;
                    break;
                case "9":
                    fator = 0.70;
                    break;
            }
            break;
    }
}

function outrosEspacadaTabelaA7(index, numeroCircuitos)
{
    switch(index)
    {
        case "0":
            switch(numeroCircuitos)
            {
                case "1":
                    fator = 1.0;
                    break;
                case "2":
                    fator = 1.0;
                    break;
                case "3":
                    fator = 1.0;
                    break;
                case "4":
                    fator = 1.0;
                    break;
                case "5":
                    fator = 1.0;
                    break;
                case "6":
                    fator = 1.0;
                    break;
            }
            break;
        case "1":
            switch(numeroCircuitos)
            {
                case "1":
                    fator = 1.0;
                    break;
                case "2":
                    fator = 0.99;
                    break;
                case "3":
                    fator = 0.98;
                    break;
                case "4":
                    fator = 0.97;
                    break;
                case "5":
                    fator = 0.96;
                    break;
                case "6":
                    fator = 0.96;
                    break;
            }
            break;
        case "2":
            switch(numeroCircuitos)
            {
                case "1":
                    fator = 1.0;
                    break;
                case "2":
                    fator = 0.98;
                    break;
                case "3":
                    fator = 0.97;
                    break;
                case "4":
                    fator = 0.96;
                    break;
                case "5":
                    fator = 0.93;
                    break;
                case "6":
                    fator = 0.93;
                    break;
            }
            break;
    }
}

