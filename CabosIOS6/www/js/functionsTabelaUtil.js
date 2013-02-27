
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
    dimensionamento.setTensaoIsolamento($("#isolationVoltage").val());
    dimensionamento.setFrequencia($("#frequency").val());

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
					corrente = getCorrenteTable04Base("36", dimensionamento, secao);
				}else if(isTabela38(dimensionamento)){
					alert("tabela38");
					corrente = getCorrenteTable05Base("38", dimensionamento, secao);
				}
			}else if(temperatura == _90C){
				if(isTabela37(dimensionamento)){
					alert("tabela37");
					corrente = getCorrenteTable04Base("37", dimensionamento, secao);
				}else if(isTabela39(dimensionamento)){
					alert("tabela39");
					corrente = getCorrenteTable05Base("39", dimensionamento, secao);
				}
			}
		}else if(dimensionamento.isMediaTensao()){
			if (isTabela28(dimensionamento)) {
				alert("tabela28");
				corrente = getCorrenteTable10Base("28", dimensionamento, secao);
			} else if (isTabela29(dimensionamento)) {
				alert("tabela29");
				corrente = getCorrenteTable10Base("29", dimensionamento, secao);
			} else if (isTabela30(dimensionamento)) {
				alert("tabela30");
				corrente = getCorrenteTable10Base("30", dimensionamento, secao);
			} else if (isTabela31(dimensionamento)) {
				alert("tabela31");
				corrente = getCorrenteTable10Base("31", dimensionamento, secao);
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



function getCorrenteTable04Base(numeroTabela, dimensionamento, secao){
	var corrente = 0;
	$("#corrente").val(corrente);
	
	var nomeTabela = getNomeTabelaTable04Base(numeroTabela);
	
	db.transaction(function(tx){
				   tx.executeSql("SELECT * FROM TAB_AUXILIAR_04 WHERE NME_TABELA = ? AND NMR_SECAO = ?",[nomeTabela, secao],function(tx,rs){
					
			if(rs.rows.length >0){
								 
				var name = "VLR_" + getNomeColunaTable04Base(dimensionamento) + getNumeroCondutoresCarregadosTable04Base(dimensionamento);
				
				 switch(name){
					case "VLR_A1_2":
						corrente = rs.rows.item(0).VLR_A1_2;
						break;
					case "VLR_A1_3":
						corrente = rs.rows.item(0).VLR_A1_3;
						break;
					case "VLR_A2_2":
						corrente = rs.rows.item(0).VLR_A2_2;
						break;
					case "VLR_A2_3":
						corrente = rs.rows.item(0).VLR_A2_3;
						break;
					case "VLR_B1_2":
						corrente = rs.rows.item(0).VLR_B1_2;
						break;
					case "VLR_B1_3":
						corrente = rs.rows.item(0).VLR_B1_3;
						break;
					case "VLR_B2_2":
						corrente = rs.rows.item(0).VLR_B2_2;
						break;
					case "VLR_B2_3":
						corrente = rs.rows.item(0).VLR_B2_3;
						break;
					case "VLR_C_2":
						corrente = rs.rows.item(0).VLR_C_2;
						break;
					case "VLR_C_3":
						corrente = rs.rows.item(0).VLR_C_3;
						break;
					case "VLR_D_2":
						corrente = rs.rows.item(0).VLR_D_2;
						break;
					case "VLR_D_3":
						corrente = rs.rows.item(0).VLR_D_3;
						break;
				 }
			}
			 
			$("#corrente").val(corrente);
		});
				   
	},errorCB);
	
	return $("#corrente").val();
	
}

function getNumeroCondutoresCarregadosTable04Base(dimensionamento){
	var numCondutores = "0";
	
	if (dimensionamento.isDuasFases()) {
		numCondutores = "2";
	} else if (dimensionamento.isTrifasico()) {
		numCondutores = "3";
	}
	
	return numCondutores;
	
}

function getNomeColunaTable04Base(dimensionamento){
	var coluna = "";
	if (dimensionamento.isColunaA1()) {
		coluna = "A1";
	} else if (dimensionamento.isColunaA2()) {
		coluna = "A2";
	} else if (dimensionamento.isColunaB1()) {
		coluna = "B1";
	} else if (dimensionamento.isColunaB2()) {
		coluna = "B2";
	} else if (dimensionamento.isColunaC()) {
		coluna = "C";
	} else if (dimensionamento.isColunaD()) {
		coluna = "D";
	}
		
	return coluna;
}

function getNomeTabelaTable04Base(numeroTabela){
	var nomeTabela = "";
	
	if (numeroTabela == 36) {
		if (dimensionamento.isCobre()) {
			nomeTabela = "36_02";
		} else if (dimensionamento.isAluminio()) {
			nomeTabela = "36_01";
		}
		
	} else if (numeroTabela == 37) {
		if (dimensionamento.isCobre()) {
			nomeTabela = "37_02";
		} else if (dimensionamento.isAluminio()) {
			nomeTabela = "37_01";
		}
		
	}
	
	return nomeTabela;
}

function getCorrenteTable05Base(numeroTabela, dimensionamento, secao){
	var corrente = 0;
	$("#corrente").val(corrente);
	
	var nomeTabela = getNomeTabelaTable05Base(numeroTabela);
	
	db.transaction(function(tx){
				   tx.executeSql("SELECT * FROM TAB_AUXILIAR_05 WHERE NME_TABELA = ? AND NMR_SECAO = ?",[nomeTabela, secao],function(tx,rs){
						
								 
			if(rs.rows.length >0){
								 
				var name = "VLR_" + getNomeColunaTable05Base(dimensionamento) + "_";
				
				if (dimensionamento.isDuasFases() && !dimensionamento.isColunaG()) {
					name += "2";
				} else if (dimensionamento.isTrifasico() || dimensionamento.isColunaG()) {
					name += "3";
				}
				
				switch(name){
					case "VLR_E_2":
						corrente = rs.rows.item(0).VLR_E_2;
						break;
					case "VLR_E_3":
						corrente = rs.rows.item(0).VLR_E_3;
						break;
					case "VLR_F_2":
						corrente = rs.rows.item(0).VLR_F_2;
						break;
					case "VLR_F_3":
						corrente = rs.rows.item(0).VLR_F_3;
						break;
					case "VLR_F_J_3":
						corrente = rs.rows.item(0).VLR_F_J_3;
						break;
					case "VLR_G_H_3":
						corrente = rs.rows.item(0).VLR_G_H_3;
						break;
					case "VLR_G_V_3":
						corrente = rs.rows.item(0).VLR_G_V_3;
						break;
				 }

			}
								 
			$("#corrente").val(corrente);
		});
				   
	},errorCB);
	
	return $("#corrente").val();
				   
	
}

function getNomeColunaTable05Base(dimensionamento){
	var coluna = "";
	
	if (dimensionamento.isColunaE()) {
		coluna = "E";
		
	} else if (dimensionamento.isColunaF()) {
		if (dimensionamento.isJustaposto() && getNumeroCondutoresCarregadosTable05Base(dimensionamento) == 3) {
			coluna = "F_J";
		} else {
			coluna = "F";
		}
		
	} else if (dimensionamento.isColunaG()) {
		
		if (dimensionamento.isOrientacaoHorizontal()) {
			coluna = "G_H";
		} else if (dimensionamento.isOrientacaoVertical()) {
			coluna = "G_V";
		}
		
	}
	
	return coluna;
}

function getNumeroCondutoresCarregadosTable05Base(dimensionamento){
	var numCondutores = 0;
	
	if (dimensionamento.getLocalInstalacao() == ISOLADORES) {
		numCondutores = 3;
	} else if (dimensionamento.isDuasFases()) {
		numCondutores = 2;
	} else if (dimensionamento.isTrifasico()) {
		numCondutores = 3;
	}
	
	return numCondutores;
}

function getNomeTabelaTable05Base(numeroTabela){
	var nomeTabela = "";
	
	if (numeroTabela == 38) {
		if (dimensionamento.isCobre()) {
			nomeTabela = "38_02";
		} else if (dimensionamento.isAluminio()) {
			nomeTabela = "38_01";
		}
		
	} else if (numeroTabela == 39) {
		if (dimensionamento.isCobre()) {
			nomeTabela = "39_02";
		} else if (dimensionamento.isAluminio()) {
			nomeTabela = "39_01";
		}
	}
	
	return nomeTabela;
}

function getCorrenteTable10Base(numeroTabela, dimensionamento, secao){
	
	var corrente = 0;
	$("#corrente").val(corrente);
	
	var nomeTabela = getNomeTabelaTable10Base(numeroTabela, dimensionamento.getTensaoIsolamento());
	
	db.transaction(function(tx){
		tx.executeSql("SELECT * FROM TAB_AUXILIAR_10 WHERE NME_TABELA = ?",[nomeTabela],function(tx,rs){
					 
			if(rs.rows.length >0){
				
				  if (dimensionamento.isColunaA()) {
					corrente = rs.rows.item(0).VLR_A;
				  } else if (dimensionamento.isColunaB()) {
					corrente = rs.rows.item(0).VLR_B;
				  } else if (dimensionamento.isColunaC()) {
					corrente = rs.rows.item(0).VLR_C;
				  } else if (dimensionamento.isColunaD()) {
					corrente = rs.rows.item(0).VLR_D;
				  } else if (dimensionamento.isColunaE()) {
					corrente = rs.rows.item(0).VLR_E;
				  } else if (dimensionamento.isColunaF()) {
					corrente = rs.rows.item(0).VLR_F;
				  } else if (dimensionamento.isColunaG()) {
					corrente = rs.rows.item(0).VLR_G;
				  } else if (dimensionamento.isColunaH()) {
					corrente = rs.rows.item(0).VLR_H;
				  } else if (dimensionamento.isColunaI()) {
					corrente = rs.rows.item(0).VLR_I;
				  }
			}
			$("#corrente").val(corrente);
		});
	},errorCB);

	return $("#corrente").val();
}

private String getNomeTabelaTable10Base(numeroTabela, tensaoIsolamento) {
	var tabela = numeroTabela + "_0";
	
	if (tensaoIsolamento <= _8_7KV_15KV) {
		tabela += "2";
	} else {
		tabela += "1";
	}
	
	return tabela;
}


function getCorrenteLinhaNaval(dimensionamento, secao){
	var corrente = 0;
	$("#corrente").val(corrente);
	
	var nomeTabela = getNomeTabelaLinhaNaval(dimensionamento.getTemperaturaMaximaCondutor());
	
	db.transaction(function(tx){
				   tx.executeSql("SELECT * FROM TAB_AUXILIAR_02 WHERE NME_TABELA = ?",[nomeTabela],function(tx,rs){
					
			if(rs.rows.length >0){
								 
				if (dimensionamento.isColunaB1()) {
					if (dimensionamento.isDuasFases()) {
						corrente = rs.rows.item(0).VLR_B1_2;
					} else if (dimensionamento.isTrifasico()) {
						corrente = rs.rows.item(0).VLR_B1_3;
					}
				} else if (dimensionamento.isColunaB2()) {
					if (dimensionamento.isDuasFases()) {
						corrente = rs.rows.item(0).VLR_B2_2;
					} else if (dimensionamento.isTrifasico()) {
						corrente = rs.rows.item(0).VLR_B2_3;
					}
				} else if (dimensionamento.isColunaC()) {
					if (dimensionamento.isDuasFases()) {
						corrente = rs.rows.item(0).VLR_C_2;
					} else if (dimensionamento.isTrifasico()) {
						corrente = rs.rows.item(0).VLR_C_3;
					}
				} else if (dimensionamento.isColunaE()) {
					if (dimensionamento.isDuasFases()) {
						corrente = rs.rows.item(0).VLR_E_2;
					} else if (dimensionamento.isTrifasico()) {
						corrente = rs.rows.item(0).VLR_E_3;
					}
				} else if (dimensionamento.isColunaF()) {
					if (dimensionamento.isDuasFases()) {
						corrente = rs.rows.item(0).VLR_F_2;
					} else if (dimensionamento.isTrifasico()) {
						if (dimensionamento.isTrifolio()) {
							corrente = rs.rows.item(0).VLR_F_3;
						} else {
							corrente = rs.rows.item(0).VLR_F_3T;
						}
					}
				}
								 
			}
			
			$("#corrente").val(corrente);
		});
				   
	}, errorCB);
	
	return $("#corrente").val();
}

function getNomeTabelaLinhaNaval(temperaturaCondutor) {
	var name = "";
	
	if (temperaturaCondutor == _60C) {
		name = "1";
	} else if (temperaturaCondutor == _70C) {
		name = "2";
	} else if (temperaturaCondutor == _85C) {
		name = "3";
	} else if (temperaturaCondutor == _90C) {
		name = "4";
	} else if (temperaturaCondutor == _95C) {
		name = "5";
	}

	return name;
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

function buscarSecaoAcimaTabelaUtil(secao){	
	var oldSecao = secao;
	//var secao = secao;
	
	var dimensionamento = getDimensionamentoTabelaUtil();
	var temperatura = dimensionamento.getTemperaturaMaximaCondutor();
	
	if (dimensionamento.isCabosEnergia()) {
		if (dimensionamento.isBaixaTensao()) {
			if (temperatura == _70C) {
				if (isTabela36(dimensionamento)) {
					//getDebug().logVariable("Tabela", "tabela36");
					secao = getMaiorSecaoTable04Base("36", dimensionamento, secao);
				} else if (isTabela38(dimensionamento)) {
					//getDebug().logVariable("Tabela", "tabela38");
					secao = getMaiorSecaoTable05Base("38", dimensionamento, secao);
				}
			} else if (temperatura == _90C) {
				if (isTabela37(dimensionamento)) {
					//getDebug().logVariable("Tabela", "tabela37");
					secao = getMaiorSecaoTable04Base("37", dimensionamento, secao);
				} else if (isTabela39(dimensionamento)) {
					//getDebug().logVariable("Tabela", "tabela39");
					secao = getMaiorSecaoTable05Base("39", dimensionamento, secao);
				}
			}
		} else if (dimensionamento.isMediaTensao()) {
			if (isTabela28(dimensionamento)) {
				//getDebug().logVariable("Tabela", "tabela28");
				secao = getMaiorSecaoTable10Base("28", dimensionamento, secao);
			} else if (isTabela29(dimensionamento)) {
				//getDebug().logVariable("Tabela", "tabela29");
				secao = getMaiorSecaoTable10Base("29", dimensionamento, secao);
			} else if (isTabela30(dimensionamento)) {
				//getDebug().logVariable("Tabela", "tabela30");
				secao = getMaiorSecaoTable10Base("30", dimensionamento, secao);
			} else if (isTabela31(dimensionamento)) {
				//getDebug().logVariable("Tabela", "tabela31");
				secao = getMaiorSecaoTable10Base("31", dimensionamento, secao);
			}
		}
	} else if (dimensionamento.isCabosNavais()) {
		secao = getMaiorSecaoLinhaNaval(dimensionamento, secao);
	}
	
	if (oldSecao == secao) {
		//ERRO
		//throw new CalculoException("N„o foi localizada a tabela necess·ria para buscar uma seÁ„o acima.");
	}
	
	//getDebug().logVariable("secao", secao);
	//getDebug().logMethodExit();
	return secao;
}

function getMaiorSecaoTable04Base(numeroTabela, dimensionamento, secao){
	var secaoEncontrada = 0;
	$("#sessao").val(secaoEncontrada);
	
	var nomeTabela = getNomeTabelaTable04Base(numeroTabela);
	
	db.transaction(function(tx){
				   tx.executeSql("SELECT * FROM TAB_AUXILIAR_04 WHERE NME_TABELA = ? AND NMR_SECAO = ?",[nomeTabela, secao],function(tx,rs){
								 
			if(rs.rows.length >0){
				var minSecao = Number.MAX_VALUE;
								 
				for(var i = 0; i < rs.rows.length; i++){
					if (rs.rows.item(i)["NMR_SECAO"] < minSecao) {
						minSecao = rs.rows.item(i)["NMR_SECAO"];
					}
				}
								 
				secaoEncontrada = minSecao;
			}
			
			$("#sessao").val(secaoEncontrada);
		});
	}, errorCB);
	
	return $("#sessao").val();
	
}

function getMaiorSecaoTable05Base(numeroTabela, dimensionamento, secao){
	var secaoEncontrada = 0;
	$("#sessao").val(secaoEncontrada);
	
	var nomeTabela = getNomeTabelaTable05Base(numeroTabela);
	
	db.transaction(function(tx){
		tx.executeSql("SELECT * FROM TAB_AUXILIAR_05 WHERE NME_TABELA = ? AND NMR_SECAO = ?",[nomeTabela, secao],function(tx,rs){
								 
			if(rs.rows.length >0){
				var minSecao = Number.MAX_VALUE;
								 
				for(var i = 0; i < rs.rows.length; i++){
					if (rs.rows.item(i)["NMR_SECAO"] < minSecao) {
						minSecao = rs.rows.item(i)["NMR_SECAO"];
					}
				}
								 
				secaoEncontrada = minSecao;
			}
								 
			$("#sessao").val(secaoEncontrada);
		});
	}, errorCB);
	
	return $("#sessao").val();
	
}

function getMaiorSecaoTable10Base(numeroTabela, dimensionamento, secao){
	var secaoEncontrada = 0;
	$("#sessao").val(secaoEncontrada);
	
	var nomeTabela = getNomeTabelaTable10Base(numeroTabela, dimensionamento.getTensaoIsolamento());
	
	db.transaction(function(tx){
		tx.executeSql("SELECT * FROM TAB_AUXILIAR_10 WHERE NME_TABELA = ? AND NMR_SECAO = ?",[nomeTabela, secao],function(tx,rs){
								 
			if(rs.rows.length >0){
				var minSecao = Number.MAX_VALUE;
								 
				for(var i = 0; i < rs.rows.length; i++){
					if (rs.rows.item(i)["NMR_SECAO"] < minSecao) {
						minSecao = rs.rows.item(i)["NMR_SECAO"];
					}
				}
								 
				secaoEncontrada = minSecao;
			}
								 
			$("#sessao").val(secaoEncontrada);
		});
	}, errorCB);
	
	return $("#sessao").val();
	
}

function getMaiorSecaoLinhaNaval(dimensionamento, secao){
	var secaoEncontrada = 0;
	$("#sessao").val(secaoEncontrada);
	
	var nomeTabela = getNomeTabelaLinhaNaval(dimensionamento.getTemperaturaMaximaCondutor());
	
	db.transaction(function(tx){
		tx.executeSql("SELECT * FROM TAB_AUXILIAR_02 WHERE NME_TABELA = ? AND NMR_SECAO = ?",[nomeTabela, secao],function(tx,rs){
								 
			if(rs.rows.length >0){
				var minSecao = Number.MAX_VALUE;
								 
				for(var i = 0; i < rs.rows.length; i++){
					if (rs.rows.item(i)["NMR_SECAO"] < minSecao) {
					  minSecao = rs.rows.item(i)["NMR_SECAO"];
					}
				}
								 
				secaoEncontrada = minSecao;
			}
								 
			$("#sessao").val(secaoEncontrada);
		});
	}, errorCB);
	
	return $("#sessao").val();
	
}



function buscarSecaoTabelaUtil(corrente, minimaSecao, maximaSecao){
	
	var dimensionamento = getDimensionamentoTabelaUtil();
	secao = 0;
	temperatura = dimensionamento.getTemperaturaMaximaCondutor();
	
	if (dimensionamento.isCabosEnergia()) {
		if (dimensionamento.isBaixaTensao()) {
			if (temperatura == _70C) {
				if (isTabela36(dimensionamento)) {
					//getDebug().logVariable("Tabela", "tabela36");
					secao = getSecaoTable04Base("36", dimensionamento, corrente, minimaSecao, maximaSecao);
				} else if (isTabela38(dimensionamento)) {
					//getDebug().logVariable("Tabela", "tabela38");
					secao = getSecaoTable05Base("37", dimensionamento, corrente, minimaSecao, maximaSecao);
				}
			} else if (temperatura == _90C) {
				if (isTabela37(dimensionamento)) {
					//getDebug().logVariable("Tabela", "tabela37");
					secao = getSecaoTable04Base("38", dimensionamento, corrente, minimaSecao, maximaSecao);
				} else if (isTabela39(dimensionamento)) {
					//getDebug().logVariable("Tabela", "tabela39");
					secao = getSecaoTable05Base("39", dimensionamento, corrente, minimaSecao, maximaSecao);
				}
			}
			
		} else if (dimensionamento.isMediaTensao()) {
			if (isTabela28(dimensionamento)) {
				//getDebug().logVariable("Tabela", "tabela28");
				secao = getSecaoTable10Base("28", dimensionamento, corrente, minimaSecao, maximaSecao);
			} else if (isTabela29(dimensionamento)) {
				//getDebug().logVariable("Tabela", "tabela29");
				secao = getSecaoTable10Base("29",dimensionamento, corrente, minimaSecao, maximaSecao);
			} else if (isTabela30(dimensionamento)) {
				//getDebug().logVariable("Tabela", "tabela30");
				secao = getSecaoTable10Base("30",dimensionamento, corrente, minimaSecao, maximaSecao);
			} else if (isTabela31(dimensionamento)) {
				//getDebug().logVariable("Tabela", "tabela31");
				secao = getSecaoTable10Base("31",dimensionamento, corrente, minimaSecao, maximaSecao);
			}
		}
	} else if (dimensionamento.isCabosNavais()) {
		secao = getSessaoLinhaNaval(dimensionamento, corrente, minimaSecao, maximaSecao);
	}
	
	return secao;
}

function getSecaoTable04Base(numeroTabela, dimensionamento, corrente, minimaSecao, maximaSecao){
	var sessao = 0;
	$("#sessao").val(sessao);
	
	var nomeTabela = getNomeTabelaTable04Base(numeroTabela);
	var numCondutores = getNumeroCondutoresCarregadosTable04Base(dimensionamento);
	var coluna = getNomeColunaTable04Base(dimensionamento);
	
	var fieldName = "VLR_" + coluna + "_" + numCondutores;
	
	db.transaction(function(tx){
		tx.executeSql("SELECT * FROM TAB_AUXILIAR_04 WHERE NME_TABELA = ? OR " + fieldName + " > ? AND (NMR_SECAO BETWEEN ? AND ?)",
					  [nomeTabela, corrente, minimaSecao, maximaSecao],function(tx,rs){
								 
			if(rs.rows.length >0){
								 
				var minRow = rs.rows.item(0);
				var minItem = minRow[fieldName];
				
				for(var i = 0; i < rs.rows.length; i++){
					var tempRow = rs.rows.item(i);
					var tempItem = tempRow[fieldName];
								 
					if(tempItem < minItem){
						minRow = tempRow;
					}
				}
								 
				$("#sessao").val(minRow[NMR_SECAO]);
			}
								 
		});
	}, errorCB);
	
	
	return $("#sessao").val();
}

function getSecaoTable05Base(numeroTabela, dimensionamento, corrente, minimaSecao, maximaSecao){
	var sessao = 0;
	$("#sessao").val(sessao);
	
	var nomeTabela = getNomeTabelaTable05Base(numeroTabela);
	var numCondutores = getNumeroCondutoresCarregadosTable05Base(dimensionamento);
	var coluna = getNomeColunaTable05Base(dimensionamento);
	
	var fieldName = "VLR_" + coluna + "_" + numCondutores;
	
	db.transaction(function(tx){
		tx.executeSql("SELECT * FROM TAB_AUXILIAR_05 WHERE NME_TABELA = ? OR " + fieldName + " > ? AND (NMR_SECAO BETWEEN ? AND ?)",
					  [nomeTabela, corrente, minimaSecao, maximaSecao],function(tx,rs){
								 
			if(rs.rows.length >0){
								 
				var minRow = rs.rows.item(0);
				var minItem = minRow[fieldName];
					  
				for(var i = 0; i < rs.rows.length; i++){
					var tempRow = rs.rows.item(i);
					var tempItem = tempRow[fieldName];
					  
					if(tempItem < minItem){
						minRow = tempRow;
					}
				}
					  
				$("#sessao").val(minRow[NMR_SECAO]);
			}
								 
		});
	}, errorCB);
	
	
	return $("#sessao").val();
}

function getSecaoTable10Base(numeroTabela, dimensionamento, corrente, minimaSecao, maximaSecao){
	var sessao = 0;
	$("#sessao").val(sessao);
	
	var nomeTabela = getNomeTabelaTable10Base(numeroTabela, dimensionamento.getTensaoIsolamento());
	var coluna = "VLR_" + getNomeColunaTable10Base(dimensionamento);
	
	db.transaction(function(tx){
		tx.executeSql("SELECT * FROM TAB_AUXILIAR_10 WHERE NME_TABELA = ? AND " + coluna + " > ? AND (NMR_SECAO BETWEEN ? AND ?)",
					  [nomeTabela, corrente, minimaSecao, maximaSecao],function(tx,rs){
								 
			if(rs.rows.length >0){
				sessao = rs.rows.item(0).NMR_SECAO;
			}
			
			$("#sessao").val(sessao);
		});
	}, errorCB);

	
	return $("#sessao").val();
}

function getNomeColunaTable10Base(dimensionamento) {
	var coluna = "";
	
	if (dimensionamento.isColunaA()) {
		coluna = "A";
	} else if (dimensionamento.isColunaB()) {
		coluna = "B";
	} else if (dimensionamento.isColunaC()) {
		coluna = "C";
	} else if (dimensionamento.isColunaD()) {
		coluna = "D";
	} else if (dimensionamento.isColunaE()) {
		coluna = "E";
	} else if (dimensionamento.isColunaF()) {
		coluna = "F";
	} else if (dimensionamento.isColunaG()) {
		coluna = "G";
	} else if (dimensionamento.isColunaH()) {
		coluna = "H";
	} else if (dimensionamento.isColunaI()) {
		coluna = "I";
	}
	
	return coluna;
}

function getSessaoLinhaNaval(dimensionamento, corrente, minimaSecao, maximaSecao){
	var sessao = 0;
	$("#sessao").val(sessao);
	
	var nomeTabela = getNomeTabelaLinhaNaval(dimensionamento.getTemperaturaMaximaCondutor());
	var coluna = "VLR_" + getNomeColunaLinhaNaval(dimensionamento);
	
	db.transaction(function(tx){
		tx.executeSql("SELECT * FROM TAB_AUXILIAR_02 WHERE NME_TABELA = ? AND " + coluna + " > ? AND (NMR_SECAO BETWEEN ? AND ?)",
					  [nomeTabela, corrente, minimaSecao, maximaSecao],function(tx,rs){
								 
			if(rs.rows.length >0){
				sessao = rs.rows.item(0).NMR_SECAO;
			}
								 
			$("#sessao").val(sessao);
		});
	}, errorCB);

	
	
	return $("#sessao").val();
}

function getNomeColunaLinhaNaval(dimensionamento) {
	var coluna = "";
	
	if (dimensionamento.isColunaB1()) {
		coluna = "B1";
	} else if (dimensionamento.isColunaB2()) {
		coluna = "B2";
	} else if (dimensionamento.isColunaC()) {
		coluna = "C";
	} else if (dimensionamento.isColunaE()) {
		coluna = "E";
	} else if (dimensionamento.isColunaF()) {
		coluna = "F";
	}
	
	if (dimensionamento.isDuasFases()) {
		coluna += "_2";
	} else if (dimensionamento.isTrifasico()) {
		if (dimensionamento.isTrifolio()) {
			coluna += "_3T";
		} else {
			coluna += "_3";
		}
	}
	return coluna;
}
