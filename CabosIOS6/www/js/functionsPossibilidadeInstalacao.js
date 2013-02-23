function getSecaoCondutorList()
{
    getCabo();
}

function getCabo()
{
	var filtro = "";
    
    var tipoProduto = $("#cableList").val();
    var nivelTensao = $("#systemVoltage").val();
    var caboSelecionado = $("#caboSelecionado").val();
    var tensaoIsolamento = $("#isolationVoltage").val();
    var materialCondutor = $("#cableMaterial").val();
    var numeroCondutores = $("#conductorNumber").val();
	
	//familia = getFamilia(caboSelecionado) + "'";
    
    db.transaction(function(tx){
        tx.executeSql("SELECT * FROM T003_PRODUTOS WHERE NMR_FAMILIA_PRODUTO = ? AND NMR_NUMERO_CONDUTORES_FASE = ? order by COD_PRODUTO ",[getFamilia(caboSelecionado),numeroCondutores],function(tx,rs){
            
            var arrayNumeroCondutores = new Array();
            for(i = 0; i < rs.rows.length; i++)
            {
                arrayNumeroCondutores[i] = rs.rows.item(i).NME_SECAO_CONDUTOR_FASE;
            }
                
            arrayNumeroCondutores.sort(function(a,b){return a-b});
                      
            for(i=0; i<arrayNumeroCondutores.length; i++)
            {
                var lb = document.getElementById("secaoCondutor");
                var existe = "";

                for (var j=0;j<lb.length;j++)
                {
                    var valorSelect = lb.options[j].value;
                      
                    //if(valorSelect == rs.rows.item(i).NME_SECAO_CONDUTOR_FASE)
                    if(valorSelect == arrayNumeroCondutores[i])
                    {
                        existe = "true";
                    }
                }
                
                if(existe == "")
                {
                    //$("#secaoCondutor").append(new Option(rs.rows.item(i).NME_SECAO_CONDUTOR_FASE,rs.rows.item(i).NME_SECAO_CONDUTOR_FASE, false, false));
                    $("#secaoCondutor").append(new Option(arrayNumeroCondutores[i],arrayNumeroCondutores[i], false, false));
                }
            }
        });
    },errorCB);
}

function getPosicoesCircuito()
{
    $("#posicaoCabos").html("");
    $("#posicaoCabos").append(new Option("Selecione","0", false, false));
    
    $("#posicaoCabos").append(new Option(POSICAO_CABOS[UM_CIRCUITO].description,UM_CIRCUITO, false, false));
    $("#posicaoCabos").append(new Option(POSICAO_CABOS[DOIS_CIRCUITO].description,DOIS_CIRCUITO, false, false));
    $("#posicaoCabos").append(new Option(POSICAO_CABOS[TRES_CIRCUITO].description,TRES_CIRCUITO, false, false));
    
    if ((isUnipolar() && isTrifolio()) || (isTripolar()))
    {
        $("#posicaoCabos").append(new Option(POSICAO_CABOS[QUATRO_CIRCUITO].description,QUATRO_CIRCUITO, false, false));
    }
}

function getLarguras()
{
    $("#larguraCanaleta").html("");
    $("#larguraCanaleta").append(new Option("Selecione","0", false, false));

    $("#larguraCanaleta").append(new Option("0,50m","0.5", false, false));
    $("#larguraCanaleta").append(new Option("0,70m","0.7", false, false));
    $("#larguraCanaleta").append(new Option("1,00m","1.0", false, false));
    $("#larguraCanaleta").append(new Option("1,20m","1.2", false, false));
    $("#larguraCanaleta").append(new Option("1,60m","1.6", false, false));
}

function getAlturas()
{
    $("#alturaCanaleta").html("");
    $("#alturaCanaleta").append(new Option("Selecione","0", false, false));
    
    $("#alturaCanaleta").append(new Option("0,50m","0.5", false, false));
    $("#alturaCanaleta").append(new Option("0,90m","0.9", false, false));
    $("#alturaCanaleta").append(new Option("1,20m","1.2", false, false));
    $("#alturaCanaleta").append(new Option("1,60m","1.6", false, false)); 
}

function getFormacoes()
{
    $("#formacaoBancoDutos").html("");
    $("#formacaoBancoDutos").append(new Option("Selecione","0", false, false));
    
    $("#formacaoBancoDutos").append(new Option(BANCO_DUTOS[_2X2].description,_2X2, false, false));
    $("#formacaoBancoDutos").append(new Option(BANCO_DUTOS[_2X3].description,_2X3, false, false));
    $("#formacaoBancoDutos").append(new Option(BANCO_DUTOS[_3X3].description,_3X3, false, false));
        
    if (isTripolar() || (!isTripolar() && !isSeparados()))
    {
        $("#formacaoBancoDutos").append(new Option(BANCO_DUTOS[_3X4].description,_3X4, false, false));
    }
}

function getPosicionamentoEletrodutoAr()
{
    $("#posicionamentoCabos").html("");
    $("#posicionamentoCabos").append(new Option("Selecione","0", false, false));
    
    $("#posicionamentoCabos").append(new Option(TIPO_INSTALACAO[FORMACAO_ESPACADA].description,FORMACAO_ESPACADA, false, false));
    $("#posicionamentoCabos").append(new Option(TIPO_INSTALACAO[FORMACAO_JUSTAPOSTA].description,FORMACAO_JUSTAPOSTA, false, false));
}

function getLocaisInstalacaoAparente()
{
    dimensionamento = new DimensionamentoBean();
    dimensionamento.setTipoProduto($("#cableList").val());
    dimensionamento.setNivelTensao($("#systemVoltage").val());
    dimensionamento.setNumeroCondutores($("#conductorNumber").val());
    
    $("#localInstalacao").html("");
    $("#localInstalacao").append(new Option("Selecione","0", false, false));
    
    if (dimensionamento.isCabosEnergia())
    {
        $("#localInstalacao").append(new Option(LOCAL_INSTALACAO[ELETRODUTO].description,ELETRODUTO, false, false));
        
        if ((caboSelecionado != NOFLAN_ANTICHAMA_BWF_FLEXIVEL) && (caboSelecionado != AFITOX_750V))
        {
            $("#localInstalacao").append(new Option(LOCAL_INSTALACAO[BANDEJA_PERFURADA].description,BANDEJA_PERFURADA, false, false));
            $("#localInstalacao").append(new Option(LOCAL_INSTALACAO[LEITO].description,LEITO, false, false));
            $("#localInstalacao").append(new Option(LOCAL_INSTALACAO[BANDEJA_NAO_PERFURADA].description,BANDEJA_NAO_PERFURADA, false, false));
            $("#localInstalacao").append(new Option(LOCAL_INSTALACAO[SUPORTES].description,SUPORTES, false, false));
            $("#localInstalacao").append(new Option(LOCAL_INSTALACAO[PAREDES].description,PAREDES, false, false));
            $("#localInstalacao").append(new Option(LOCAL_INSTALACAO[TETO].description,TETO, false, false));
        }
    }
    else
    {
        $("#localInstalacao").append(new Option(LOCAL_INSTALACAO[BANDEJA_PERFURADA].description,BANDEJA_PERFURADA, false, false));
        $("#localInstalacao").append(new Option(LOCAL_INSTALACAO[LEITO].description,LEITO, false, false));
        $("#localInstalacao").append(new Option(LOCAL_INSTALACAO[BANDEJA_NAO_PERFURADA].description,BANDEJA_NAO_PERFURADA, false, false));
        $("#localInstalacao").append(new Option(LOCAL_INSTALACAO[SUPORTES].description,SUPORTES, false, false));
        $("#localInstalacao").append(new Option(LOCAL_INSTALACAO[PAREDES].description,PAREDES, false, false));
        $("#localInstalacao").append(new Option(LOCAL_INSTALACAO[TETO].description,TETO, false, false));
    }
}

function getLocaisInstalacaoEmbutida()
{
    var caboSelecionado = $("#caboSelecionado").val();
    
    $("#localInstalacao").html("");
    $("#localInstalacao").append(new Option("Selecione","0", false, false));
    
    if (isNaval())
    {
        $("#localInstalacao").append(new Option(LOCAL_INSTALACAO[ELETROCALHA_FECHADA_OU_ELETRODUTO].description,ELETROCALHA_FECHADA_OU_ELETRODUTO, false, false));
    }
    else
    {
        $("#localInstalacao").append(new Option(LOCAL_INSTALACAO[ELETRODUTO_PAREDE].description,ELETRODUTO_PAREDE, false, false));
        $("#localInstalacao").append(new Option(LOCAL_INSTALACAO[CAIXILHO_PORTA_PAREDE].description,CAIXILHO_PORTA_PAREDE, false, false));
        $("#localInstalacao").append(new Option(LOCAL_INSTALACAO[ELETRODUTO_CIRCULAR_ALVENARIA].description,ELETRODUTO_CIRCULAR_ALVENARIA, false, false));
                
        if ((caboSelecionado != NOFLAN_ANTICHAMA_BWF_FLEXIVEL) && (caboSelecionado != AFITOX_750V))
        {
            
            if (getExibirParedeIsolante())
            {
                $("#localInstalacao").append(new Option(LOCAL_INSTALACAO[PAREDE_ISOLANTE].description,PAREDE_ISOLANTE, false, false));
            }
            $("#localInstalacao").append(new Option(LOCAL_INSTALACAO[ALVENARIA].description,ALVENARIA, false, false));
        }
        
        if (isExibirMoldura())
        {
            $("#localInstalacao").append(new Option(LOCAL_INSTALACAO[MOLDURA].description,MOLDURA, false, false));
        }
    }
}

function getLocaisInstalacaoSubterranea()
{
    var caboSelecionado = $("#caboSelecionado").val();
    
    $("#localInstalacao").html("");
    $("#localInstalacao").append(new Option("Selecione","0", false, false));
    
    if ((caboSelecionado != NOFLAN_ANTICHAMA_BWF_FLEXIVEL) && (caboSelecionado != AFITOX_750V))
    {
        $("#localInstalacao").append(new Option(LOCAL_INSTALACAO[ELETRODUTO].description,ELETRODUTO, false, false));
        $("#localInstalacao").append(new Option(LOCAL_INSTALACAO[DIRETAMENTE_ENTERRADOS].description,DIRETAMENTE_ENTERRADOS, false, false));
    }
    
    $("#localInstalacao").append(new Option(LOCAL_INSTALACAO[CANALETA_FECHADA].description,CANALETA_FECHADA, false, false));
    $("#localInstalacao").append(new Option(LOCAL_INSTALACAO[CANALETA_VENTILADA].description,CANALETA_VENTILADA, false, false));
}

function getLocaisInstalacaoSuspensa()
{
    $("#localInstalacao").html("");
    $("#localInstalacao").append(new Option("Selecione","0", false, false));
    
    // TODO Pq o nome do mÈtodo È exibir suporte se ele exibe os isoladores ?
    if (isExibirSuporte())
    {
        $("#localInstalacao").append(new Option(LOCAL_INSTALACAO[ELETROCALHA_PERFILADO].description,ELETROCALHA_PERFILADO, false, false));
        
        if (isExibirIsoladores())
        {
            $("#localInstalacao").append(new Option(LOCAL_INSTALACAO[ISOLADORES].description,ISOLADORES, false, false));
        }
    }
    else
    {
        $("#localInstalacao").append(new Option(LOCAL_INSTALACAO[ELETROCALHA_PERFILADO].description,ELETROCALHA_PERFILADO, false, false));
        $("#localInstalacao").append(new Option(LOCAL_INSTALACAO[SUPORTES].description,SUPORTES, false, false));
    }
}

function getLocaisInstalacaoEspacoConstrucao()
{
    var caboSelecionado = $("#caboSelecionado").val();
    
    $("#localInstalacao").html("");
    $("#localInstalacao").append(new Option("Selecione","0", false, false));
    
    if ((caboSelecionado != NOFLAN_ANTICHAMA_BWF_FLEXIVEL) && (caboSelecionado != AFITOX_750V))
    {
        $("#localInstalacao").append(new Option(LOCAL_INSTALACAO[DIRETAMENTE].description,DIRETAMENTE, false, false));
    }
    
    $("#localInstalacao").append(new Option(LOCAL_INSTALACAO[ELETRODUTO_SECAO_CIRCULAR].description,ELETRODUTO_SECAO_CIRCULAR, false, false));
}

function updateNumeroCamadas()
{
    var camadas = $("#numeroCamadas").val();
    $("#quantidadeCamadas").val(camadas);
}

function isMetalQuestionResistividade()
{
    var possibilidadeInstalacao = $("#possibilidadeInstalacao").val();
    
    if (possibilidadeInstalacao == BANCO_DUTOS_SOLO)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function isMetalQuestion()
{
    var possibilidadeInstalacao = $("#possibilidadeInstalacao").val();
    var localInstalacao = $("#localInstalacao").val();
    var nivelTensao = $("#systemVoltage").val();
    var numeroCondutores = $("#conductorNumber").val();
    var posicionamentoCabo = $("#posicionamentoCabos").val();
    
    var a = localInstalacao == ELETRODUTO_PAREDE;
    var b = localInstalacao == ELETRODUTO_CIRCULAR_ALVENARIA;
    var c = localInstalacao == ELETRODUTO;
    var d = localInstalacao == ELETRODUTO_SECAO_CIRCULAR;
    var e = possibilidadeInstalacao == ELETRODUTO_METALICO_SOLO;
    var f = possibilidadeInstalacao == ELETRODUTO_NAO_METALICO_SOLO;
    var g = possibilidadeInstalacao == ELETRODUTO_SOLO;
    
    var h = numeroCondutores != NCUNIPOLAR;
    var i = isTresCabosDuto(posicionamentoCabo);
    
    if (nivelTensao == BAIXA)
    {
        return (a || b || c || d || e || f || g);
    }
    else
    {
        return (a || b || c || d || e || f || g) && (h || i);
    }
}

function isTresCabosDuto(posicionamentoCabo)
{
    return posicionamentoCabo == _3_CABOS;
}

function isCabosEnergia()
{
    var tipoProduto = $("#cableList").val();
    
    return tipoProduto == CABOS_ENERGIA;
}

function isAntiChama()
{
    var caboSelecionado = $("#caboSelecionado").val();    
    
    return (caboSelecionado == NOFLAN_ANTICHAMA_BWF_FLEXIVEL);
}

function isAfitox750()
{
    var caboSelecionado = $("#caboSelecionado").val();
    
    return (caboSelecionado == AFITOX_750V);
}

function isAparente()
{
    var possibilidadeInstalacao = $("#possibilidadeInstalacao").val();
    return (possibilidadeInstalacao == APARENTE);
}

function isCabosNavais()
{
    var tipoProduto = $("#cableList").val();
    return tipoProduto == CABOS_NAVAIS;
}

function isUnipolar()
{
    var numeroCondutores = $("#conductorNumber").val();
    return numeroCondutores == NCUNIPOLAR;
}

function isColunaCEF()
{
    dimensionamento = new DimensionamentoBean();
    dimensionamento.setTipoProduto($("#cableList").val());
    dimensionamento.setNivelTensao($("#systemVoltage").val());
    dimensionamento.setNumeroCondutores($("#conductorNumber").val());
    dimensionamento.setPossibilidadeInstalacao($("#possibilidadeInstalacao").val());
    dimensionamento.setlocalInstalacao($("#localInstalacao").val());
    
    var isC = dimensionamento.isColunaC();
    var isE = dimensionamento.isColunaE();
    var isF = dimensionamento.isColunaF();
    
    return (isC || isE || isF);
}

function isEletroduto()
{
    var localInstalacao = $("#localInstalacao").val();
    
    return (localInstalacao == ELETRODUTO || localInstalacao == ELETRODUTO_CIRCULAR_ALVENARIA || localInstalacao == ELETRODUTO_PAREDE || localInstalacao == ELETRODUTO_SECAO_CIRCULAR);
}

function isMoldura()
{
    var localInstalacao = $("#localInstalacao").val();    
    
    return localInstalacao == MOLDURA;
}

function isEletrodutoOrMoldura()
{
    return isEletroduto() || isMoldura();
}

function isSubterranea()
{
    var possibilidadeInstalacao = $("#possibilidadeInstalacao").val();    
    return (possibilidadeInstalacao == SUBTERRANEA);
}

function isDiretamente()
{
    var localInstalacao = $("#localInstalacao").val();            
    return (localInstalacao == DIRETAMENTE);
}

function isDiretamenteEnterrados()
{
    var localInstalacao = $("#localInstalacao").val();        
    return (localInstalacao == DIRETAMENTE_ENTERRADOS || isDiretamente());
}

function isDiretamenteEnterradosOuEletroduto()
{
    return (isEletroduto() || isDiretamenteEnterrados());
}

function isEletrodutoSolo()
{
    var possibilidadeInstalacao = $("#possibilidadeInstalacao").val();    
    
    var a = possibilidadeInstalacao == ELETRODUTO_SOLO;
    var b = possibilidadeInstalacao == ELETRODUTO_METALICO_SOLO;
    var c = possibilidadeInstalacao == ELETRODUTO_NAO_METALICO_SOLO;
    return (a || b || c);
}

function isEmbutida()
{
    var possibilidadeInstalacao = $("#possibilidadeInstalacao").val();
    return (possibilidadeInstalacao == EMBUTIDA);
}

function isAlvenaria()
{
    var localInstalacao = $("#localInstalacao").val();            
    return (localInstalacao == ALVENARIA);
}

function isSuspensa()
{
    var possibilidadeInstalacao = $("#possibilidadeInstalacao").val();    
    return (possibilidadeInstalacao == SUSPENSA);
}

function isCanaletaVentida()
{
    var localInstalacao = $("#localInstalacao").val();
    return (localInstalacao == CANALETA_VENTILADA);
}

function isSuportes()
{
    var localInstalacao = $("#localInstalacao").val();                    
    return localInstalacao == SUPORTES;
}

function isExibirPosicionamentoCabosSeparadoTrifolio()
{
    var bResult = true;
    
    var possibilidadeInstalacao = $("#possibilidadeInstalacao").val();
    
    dimensionamentoBean = new DimensionamentoBean();
    dimensionamentoBean.setTipoProduto($("#cableList").val());
    dimensionamentoBean.setNivelTensao($("#systemVoltage").val());
    dimensionamentoBean.setNumeroCondutores($("#conductorNumber").val());
    dimensionamentoBean.setPossibilidadeInstalacao($("#possibilidadeInstalacao").val());
    dimensionamentoBean.setlocalInstalacao($("#localInstalacao").val());
    
    var condition1 = (dimensionamentoBean.getSistema() == MONOFASICO_DOIS_CONDUTORES);
    var condition2 = (dimensionamentoBean.getSistema() == MONOFASICO_TRES_CONDUTORES);
    var condition3 = (dimensionamentoBean.getSistema() == DUAS_FASES_SEM_NEUTRO);
    
    if ((dimensionamentoBean.isColunaG() || (dimensionamentoBean.isColunaF()) && (condition1 || condition2 || condition3)) || dimensionamentoBean.isColunaE())
    {
        bResult = false;
    }
    
    if ((possibilidadeInstalacao != SUSPENSA) || (possibilidadeInstalacao == SUSPENSA && localInstalacao == ELETROCALHA_PERFILADO))
    {
        bResult = false;
    }
    
    return bResult;
}

function isExibirPosicionamentoCabosSeparadoJustapostos()
{
    dimensionamentoBean = new DimensionamentoBean();
    dimensionamentoBean.setTipoProduto($("#cableList").val());
    dimensionamentoBean.setNivelTensao($("#systemVoltage").val());
    dimensionamentoBean.setNumeroCondutores($("#conductorNumber").val());
    dimensionamentoBean.setPossibilidadeInstalacao($("#possibilidadeInstalacao").val());
    dimensionamentoBean.setlocalInstalacao($("#localInstalacao").val());
    
    // Instancia um objeto DimensionamentoBean e seta apenas o "local de
    // insalaÁ„o"
    // apenas para testar se este local de instalaÁ„o faz parte do tipo de
    // instalaÁ„o desej·vel.
    return dimensionamentoBean.isColunaG();
}

function isEspacoConstrucao()
{
    var possibilidadeInstalacao = $("#possibilidadeInstalacao").val();
    return (possibilidadeInstalacao == ESPACO_CONSTRUCAO);
}

function isMetalFixedResistividade()
{
    var tipoInstalacao = $("#tipoInstalacao").val();
    var numeroCondutores = $("#conductorNumber").val();
    
    if (tipoInstalacao == _1_CABO && numeroCondutores == 1 )
    {
        return true;
    }
    else
    {
        return false;
    }
}

function isMetalFixed()
{
    var possibilidadeInstalacao = $("#possibilidadeInstalacao").val();
    
    var a = possibilidadeInstalacao == ELETRODUTO_METALICO_SOLO;
    var b = possibilidadeInstalacao == ELETRODUTO_NAO_METALICO_SOLO;
    
    return a || b;
}

function isEletrodutoMetalico()
{
    var possibilidadeInstalacao = $("#possibilidadeInstalacao").val();    
    return possibilidadeInstalacao == ELETRODUTO_METALICO_SOLO;
}

function isNaval()
{
    var tipoProduto = $("#cableList").val();    
    return tipoProduto == CABOS_NAVAIS;
}

function isExibirMoldura()
{
    var caboSelecionado = $("#caboSelecionado").val();        
    
    var a = caboSelecionado == AFITOX_750V;
    var b = caboSelecionado == NOFLAN_ANTICHAMA_BWF_FLEXIVEL;
    
    return a || b;
}

function getExibirParedeIsolante()
{
    var numeroCondutores = $("#conductorNumber").val();
    return numeroCondutores > 1;
}

function getPosicionamentoSeparadosTrifolio()
{
    $("#posicionamentoCabos").html("");
    $("#posicionamentoCabos").append(new Option("Selecione","0", false, false));
    
    $("#posicionamentoCabos").append(new Option(TIPO_INSTALACAO[FORMACAO_TRIFOLIO].description,FORMACAO_TRIFOLIO, false, false));
    $("#posicionamentoCabos").append(new Option(TIPO_INSTALACAO[FORMACAO_JUSTAPOSTA].description,FORMACAO_JUSTAPOSTA, false, false));
    $("#posicionamentoCabos").append(new Option(TIPO_INSTALACAO[FORMACAO_ESPACADA].description,FORMACAO_ESPACADA, false, false));
}

function isShowEspacado()
{
    var bResult = true;
    var tipoProduto = $("#cableList").val();
    var possibilidadeInstalacao = $("#possibilidadeInstalacao").val();
    var localInstalacao = $("#localInstalacao").val();
    var nivelTensao = $("#systemVoltage").val();
    var sistema = $("#system").val();
    
    dimensionamentoBean = new DimensionamentoBean();
    dimensionamentoBean.setTipoProduto($("#cableList").val());
    dimensionamentoBean.setNivelTensao($("#systemVoltage").val());
    dimensionamentoBean.setNumeroCondutores($("#conductorNumber").val());
    dimensionamentoBean.setPossibilidadeInstalacao($("#possibilidadeInstalacao").val());
    dimensionamentoBean.setlocalInstalacao($("#localInstalacao").val());
    
    if (tipoProduto == CABOS_ENERGIA)
    {
        if (nivelTensao == BAIXA)
        {
            var condition0 = ((possibilidadeInstalacao == SUSPENSA) && (localInstalacao == SUPORTES));
            
            var condition1 = (condition0 || dimensionamentoBean.isColunaF()) && (sistema == DUAS_FASES_COM_NEUTRO);
            var condition2 = (condition0 || dimensionamentoBean.isColunaF()) && (sistema == TRIFASICO_COM_NEUTRO);
            var condition3 = (condition0 || dimensionamentoBean.isColunaF()) && (sistema == TRIFASICO_SEM_NEUTRO);
            
            if (condition1 || condition2 || condition3)
            {
                bResult = false;
            }
        }
    }
    
    return bResult;
}

function isExibirCabosDuto()
{
    var nivelTensao = $("#systemVoltage").val();
    var numeroCondutores = $("#conductorNumber").val();
    var tensaoIsolamento = $("#isolationVoltage").val();
    var localInstalacao = $("#localInstalacao").val();
    var possibilidadeInstalacao = $("#possibilidadeInstalacao").val();
    
    return ((nivelTensao == BAIXA && numeroCondutores == NCUNIPOLAR && tensaoIsolamento == _06KV_1KV && localInstalacao == ELETRODUTO && possibilidadeInstalacao == SUBTERRANEA));
}

function isTrifasico()
{
    var sistema = $("#system").val();
    return (sistema == TRIFASICO_COM_NEUTRO || sistema == TRIFASICO_SEM_NEUTRO || sistema == DUAS_FASES_COM_NEUTRO);
}

function isTripolar()
{
    var numeroCondutores = $("#conductorNumber").val();
    return (numeroCondutores == NCTRIPOLAR);
}

function isAparenteAr()
{
    var possibilidadeInstalacao = $("#possibilidadeInstalacao").val();
    return (possibilidadeInstalacao == APARENTE_AR);
}

function isBancoDutos()
{
    var possibilidadeInstalacao = $("#possibilidadeInstalacao").val();    
    return (possibilidadeInstalacao == BANCO_DUTOS_SOLO);
}

function isExibirResistividadeTermica()
{
    return ((isSubterranea() && isDiretamenteEnterrados()) || (isEletroduto() && isSubterranea()));
}

function isCanaletaFechada()
{
    var possibilidadeInstalacao = $("#possibilidadeInstalacao").val();
    return (possibilidadeInstalacao == CANALETA_FECHADA_SOLO);
}

function isDiretamenteEnterrado()
{
    var possibilidadeInstalacao = $("#possibilidadeInstalacao").val();
    return (possibilidadeInstalacao == DIRETAMENTE_SOLO);
}

function isColunaG()
{
    var possibilidadeInstalacao = $("#possibilidadeInstalacao").val();
    
    dimensionamentoBean = new DimensionamentoBean();
    dimensionamentoBean.setTipoProduto($("#cableList").val());
    dimensionamentoBean.setNivelTensao($("#systemVoltage").val());
    dimensionamentoBean.setNumeroCondutores($("#conductorNumber").val());
    dimensionamentoBean.setPossibilidadeInstalacao($("#possibilidadeInstalacao").val());
    dimensionamentoBean.setlocalInstalacao($("#localInstalacao").val());
    
    return dimensionamentoBean.isColunaG();
}

function isColunaF()
{
    var possibilidadeInstalacao = $("#possibilidadeInstalacao").val();
    
    dimensionamentoBean = new DimensionamentoBean();
    dimensionamentoBean.setTipoProduto($("#cableList").val());
    dimensionamentoBean.setNivelTensao($("#systemVoltage").val());
    dimensionamentoBean.setNumeroCondutores($("#conductorNumber").val());
    dimensionamentoBean.setPossibilidadeInstalacao($("#possibilidadeInstalacao").val());
    dimensionamentoBean.setlocalInstalacao($("#localInstalacao").val());
    
    return dimensionamentoBean.isColunaF();
}

function getPosicionamentoList()
{
    var nivelTensao = $("#systemVoltage").val();
    var numeroCondutores = $("#conductorNumber").val();
    var tensaoIsolamento = $("#isolationVoltage").val();
    var localInstalacao = $("#localInstalacao").val();
    var possibilidadeInstalacao = $("#possibilidadeInstalacao").val();
    
    $("#posicionamentoCabos").html("");
    $("#posicionamentoCabos").append(new Option("Selecione","0", false, false));
    
    dimensionamentoBean = new DimensionamentoBean();
    dimensionamentoBean.setTipoProduto($("#cableList").val());
    dimensionamentoBean.setNivelTensao($("#systemVoltage").val());
    dimensionamentoBean.setNumeroCondutores($("#conductorNumber").val());
    dimensionamentoBean.setPossibilidadeInstalacao($("#possibilidadeInstalacao").val());
    dimensionamentoBean.setlocalInstalacao($("#localInstalacao").val());
    
    if (isCabosEnergia())
    {
        if (nivelTensao == BAIXA)
        {
            if (dimensionamentoBean.isColunaG())
            {
                $("#posicionamentoCabos").append(new Option(TIPO_INSTALACAO[FORMACAO_ESPACADA].description,FORMACAO_ESPACADA, false, false));
                $("#posicionamentoCabos").append(new Option(TIPO_INSTALACAO[FORMACAO_JUSTAPOSTA].description,FORMACAO_JUSTAPOSTA, false, false));
            }
            else if (isShowEspacado())
            {
                $("#posicionamentoCabos").append(new Option(TIPO_INSTALACAO[FORMACAO_ESPACADA].description,FORMACAO_ESPACADA, false, false));
            }
            
            if (isExibirCabosDuto())
            {
                $("#posicionamentoCabos").append(new Option(TIPO_INSTALACAO[_1_CABO].description,_1_CABO, false, false));
                $("#posicionamentoCabos").append(new Option(TIPO_INSTALACAO[_3_CABOS].description,_3_CABOS, false, false));
            }
            else
            {
                $("#posicionamentoCabos").append(new Option(TIPO_INSTALACAO[FORMACAO_JUSTAPOSTA].description,FORMACAO_JUSTAPOSTA, false, false));
                $("#posicionamentoCabos").append(new Option(TIPO_INSTALACAO[FORMACAO_TRIFOLIO].description,FORMACAO_TRIFOLIO, false, false));

            }
        }
        else
        {
            if (possibilidadeInstalacao == BANCO_DUTOS_SOLO || isEletrodutoSolo())
            {    
                if (!isEletrodutoMetalico())
                {
                    $("#posicionamentoCabos").append(new Option(TIPO_INSTALACAO[_1_CABO].description,_1_CABO, false, false));
                }
                $("#posicionamentoCabos").append(new Option(TIPO_INSTALACAO[_3_CABOS].description,_3_CABOS, false, false));
            }
            else if (numeroCondutores == NCUNIPOLAR)
            {
                $("#posicionamentoCabos").append(new Option(TIPO_INSTALACAO[FORMACAO_ESPACADA].description,FORMACAO_ESPACADA, false, false));
                
                if (possibilidadeInstalacao == APARENTE_AR || possibilidadeInstalacao == DIRETAMENTE_SOLO || possibilidadeInstalacao == CANALETA_FECHADA_SOLO)
                {
                    $("#posicionamentoCabos").append(new Option(TIPO_INSTALACAO[FORMACAO_JUSTAPOSTA].description,FORMACAO_JUSTAPOSTA, false, false));
                }
                
                $("#posicionamentoCabos").append(new Option(TIPO_INSTALACAO[FORMACAO_TRIFOLIO].description,FORMACAO_TRIFOLIO, false, false));
                
            }
            else if (numeroCondutores == NCTRIPOLAR)
            {
                if (possibilidadeInstalacao == DIRETAMENTE_SOLO)
                {
                    $("#posicionamentoCabos").append(new Option(TIPO_INSTALACAO[FORMACAO_ESPACADA].description,FORMACAO_ESPACADA, false, false));
                }
                else
                {
                    $("#posicionamentoCabos").append(new Option(TIPO_INSTALACAO[FORMACAO_ESPACADA].description,FORMACAO_ESPACADA, false, false));
                    $("#posicionamentoCabos").append(new Option(TIPO_INSTALACAO[FORMACAO_JUSTAPOSTA].description,FORMACAO_JUSTAPOSTA, false, false));
                }
                
            }
            else if (tipoInstalacao == CONDUTORES_ISOLADOS_G)
            {
                $("#posicionamentoCabos").append(new Option(TIPO_INSTALACAO[FORMACAO_ESPACADA].description,FORMACAO_ESPACADA, false, false));
                $("#posicionamentoCabos").append(new Option(TIPO_INSTALACAO[FORMACAO_JUSTAPOSTA].description,FORMACAO_JUSTAPOSTA, false, false));
            }
        }
    }
    else
    {
        $("#posicionamentoCabos").append(new Option(TIPO_INSTALACAO[FORMACAO_ESPACADA].description,FORMACAO_ESPACADA, false, false));
        $("#posicionamentoCabos").append(new Option(TIPO_INSTALACAO[FORMACAO_JUSTAPOSTA].description,FORMACAO_JUSTAPOSTA, false, false));
        
        if (isTrifasico() && !isTripolar())
        {
            $("#posicionamentoCabos").append(new Option(TIPO_INSTALACAO[FORMACAO_TRIFOLIO].description,FORMACAO_TRIFOLIO, false, false));
        }
    }
}

function getPosicionamentoJustapostaSeparada()
{
    $("#posicionamentoCabos").html("");
    $("#posicionamentoCabos").append(new Option("Selecione","0", false, false));
    
    $("#posicionamentoCabos").append(new Option(TIPO_INSTALACAO[FORMACAO_TRIFOLIO].description,FORMACAO_TRIFOLIO, false, false));
    $("#posicionamentoCabos").append(new Option(TIPO_INSTALACAO[FORMACAO_JUSTAPOSTA].description,FORMACAO_JUSTAPOSTA, false, false));
    $("#posicionamentoCabos").append(new Option(TIPO_INSTALACAO[FORMACAO_ESPACADA].description,FORMACAO_ESPACADA, false, false));
}

function getComboDistanciaEntreCabos()
{
    var numeroCondutores = $("#conductorNumber").val();
    var possibilidadeInstalacao = $("#possibilidadeInstalacao").val();
    var posicionamentoCabo = $("#posicionamentoCabos").val();
    var nivelTensao = $("#systemVoltage").val();
    
    $("#distanciaEntreCabos").html("");
    $("#distanciaEntreCabos").append(new Option("Selecione","0", false, false));
    
    if (isEletrodutoSolo() && nivelTensao == MEDIA)
    {
        $("#distanciaEntreCabos").append(new Option(DISTANCIA_CABOS[NULA].description,NULA, false, false));
        $("#distanciaEntreCabos").append(new Option(DISTANCIA_CABOS[_0_25M].description,_0_25M, false, false));
        $("#distanciaEntreCabos").append(new Option(DISTANCIA_CABOS[_0_5M].description,_0_5M, false, false));
        $("#distanciaEntreCabos").append(new Option(DISTANCIA_CABOS[_1M].description,_1M, false, false));
    }
    else if (isSubterranea() && isEletroduto())
    {
        $("#distanciaEntreCabos").append(new Option(DISTANCIA_CABOS[NULA].description,NULA, false, false));
        $("#distanciaEntreCabos").append(new Option(DISTANCIA_CABOS[_0_25M].description,_0_25M, false, false));
        $("#distanciaEntreCabos").append(new Option(DISTANCIA_CABOS[_0_5M].description,_0_5M, false, false));
        $("#distanciaEntreCabos").append(new Option(DISTANCIA_CABOS[_1M].description,_1M, false, false));
    }
    else
    {
        $("#distanciaEntreCabos").append(new Option(DISTANCIA_CABOS[NULA].description,NULA, false, false));
        
        if (isDiretamenteEnterrados())
        {
            $("#distanciaEntreCabos").append(new Option(DISTANCIA_CABOS[UM_DIAMETRO].description,UM_DIAMETRO, false, false));
            $("#distanciaEntreCabos").append(new Option(DISTANCIA_CABOS[_0_125M].description,_0_125M, false, false));
        }
        else
        {
            $("#distanciaEntreCabos").append(new Option(DISTANCIA_CABOS[_1M].description,_1M, false, false));
        }
        
        $("#distanciaEntreCabos").append(new Option(DISTANCIA_CABOS[_0_25M].description,_0_25M, false, false));
        if (isDiretamenteEnterrados())
        {
            $("#distanciaEntreCabos").append(new Option(DISTANCIA_CABOS[_0_5M].description,_0_5M, false, false));
        }
        else
        {
            $("#distanciaEntreCabos").append(new Option(DISTANCIA_CABOS[MAIOR_0_5M].description,MAIOR_0_5M, false, false));
        }
    }
}

function getComboRelacaoCaboXDuto()
{
    //relacaoCaboDuto
    //Collection col = new ArrayList();
    
    var localInstalacao = $("#localInstalacao").val();
    
    $("#relacaoCaboDuto").html("");
    $("#relacaoCaboDuto").append(new Option("Selecione","0", false, false));
    
    if (localInstalacao == DIRETAMENTE)
    {
        $("#relacaoCaboDuto").append(new Option(RELACAO_CABO_DUTO[_1POINT5V5].description,_1POINT5V5, false, false));
        $("#relacaoCaboDuto").append(new Option(RELACAO_CABO_DUTO[_5V50].description,_5V50, false, false));
    }
    else if (localInstalacao == ELETRODUTO_SECAO_CIRCULAR)
    {
        $("#relacaoCaboDuto").append(new Option(RELACAO_CABO_DUTO[_1POINT5V20].description,_1POINT5V20, false, false));
        $("#relacaoCaboDuto").append(new Option(RELACAO_CABO_DUTO[_VMAIORIGUAL20DE].description,_VMAIORIGUAL20DE, false, false));
    }
}

function getNiveisTensao(tipoProduto)
{
    $("#systemVoltage").html("");
    $("#systemVoltage").append(new Option("Selecione","0", false, false));
    
    if (tipoProduto == CABOS_NAVAIS)
    {
        $("#systemVoltage").append(new Option(NIVEL_TENSAO[BAIXA].description,BAIXA, false, false));
        $("#systemVoltage").append(new Option(NIVEL_TENSAO[MEDIA_NAVAL].description,MEDIA_NAVAL, false, false));
    } else if (tipoProduto == CABOS_ENERGIA) {
        $("#systemVoltage").append(new Option(NIVEL_TENSAO[BAIXA].description,BAIXA, false, false));
        $("#systemVoltage").append(new Option(NIVEL_TENSAO[MEDIA].description,MEDIA, false, false));
    }
}

function getUtilizacaoCircuito(tipoProduto, nivelTensao, materialCondutor)
{
    $("#circuitUsage").html("");
    $("#circuitUsage").append(new Option("Selecione","0", false, false));
    
    if (tipoProduto == CABOS_ENERGIA)
    {
        if (nivelTensao == BAIXA)
        {
            if (materialCondutor == ALUMINIO)
            {
                $("#circuitUsage").append(new Option(UTILIZACAO_CIRCUITO[ILUMINACAO].description,ILUMINACAO, false, false));
                $("#circuitUsage").append(new Option(UTILIZACAO_CIRCUITO[FORCA].description,FORCA, false, false));
            }
            else
            {
                $("#circuitUsage").append(new Option(UTILIZACAO_CIRCUITO[ILUMINACAO].description,ILUMINACAO, false, false));
                $("#circuitUsage").append(new Option(UTILIZACAO_CIRCUITO[FORCA].description,FORCA, false, false));
                $("#circuitUsage").append(new Option(UTILIZACAO_CIRCUITO[SINALIZACAO].description,SINALIZACAO, false, false));
                $("#circuitUsage").append(new Option(UTILIZACAO_CIRCUITO[CONTROLE].description,CONTROLE, false, false));
                $("#circuitUsage").append(new Option(UTILIZACAO_CIRCUITO[APLICACOES_ESPECIAIS].description,APLICACOES_ESPECIAIS, false, false));
                $("#circuitUsage").append(new Option(UTILIZACAO_CIRCUITO[OUTROS].description,OUTROS, false, false));
            }
        }
        else if (nivelTensao == MEDIA)
        {
            $("#circuitUsage").append(new Option(UTILIZACAO_CIRCUITO[FORCA].description,FORCA, false, false));
        }
    }
    else if (tipoProduto == CABOS_NAVAIS)
    {
        $("#circuitUsage").append(new Option(UTILIZACAO_CIRCUITO[FORCA].description,FORCA, false, false));
    }
}

function getMaterialCondutor(tipoProduto, nivelTensao)
{
    $("#cableMaterial").html("");
    $("#cableMaterial").append(new Option("Selecione","0", false, false));
    
    //TIPO_PRODUTO
    if (tipoProduto == CABOS_ENERGIA)
    {
        if (nivelTensao == BAIXA)
        {
            $("#cableMaterial").append(new Option(MATERIAL_CONDUTOR[COBRE].description,COBRE, false, false));
            $("#cableMaterial").append(new Option(MATERIAL_CONDUTOR[ALUMINIO].description,ALUMINIO, false, false));
        }
        else if (nivelTensao == MEDIA)
        {
            $("#cableMaterial").append(new Option(MATERIAL_CONDUTOR[COBRE].description,COBRE, false, false));
            $("#cableMaterial").append(new Option(MATERIAL_CONDUTOR[ALUMINIO].description,ALUMINIO, false, false));
        }
        
    } else if (tipoProduto == CABOS_NAVAIS) {
        $("#cableMaterial").append(new Option(MATERIAL_CONDUTOR[COBRE].description,COBRE, false, false));
    }
}

function getNumeroCondutores(tipoProduto, nivelTensao, tipoCabo, aplicacao)
{
    //alert("tipoProduto: " + tipoProduto + ", nivelTensao: " + nivelTensao + ", tipoCabo: " + tipoCabo + ", aplicacao: " + aplicacao);
    var numeroCondutor = $("#conductorNumber").val();
    
    $("#conductorNumber").html("");
    $("#conductorNumber").append(new Option("Selecione","0", false, false));
    
    if (tipoProduto == CABOS_NAVAIS)
    {
        if (nivelTensao == BAIXA)
        {
            if ((tipoCabo == CABO_ARMADO_ACO) || (aplicacao == SEGURANCA_MAXIMA))
            {
                $("#conductorNumber").append(new Option(NUMERO_CONDUTORES[NCBIPOLAR].description,NCBIPOLAR, false, false));
                $("#conductorNumber").append(new Option(NUMERO_CONDUTORES[NCTRIPOLAR].description,NCTRIPOLAR, false, false));
                $("#conductorNumber").append(new Option(NUMERO_CONDUTORES[NCTETRAPOLAR].description,NCTETRAPOLAR, false, false));
            }
            else
            {
                $("#conductorNumber").append(new Option(NUMERO_CONDUTORES[NCUNIPOLAR].description,NCUNIPOLAR, false, false));
                $("#conductorNumber").append(new Option(NUMERO_CONDUTORES[NCBIPOLAR].description,NCBIPOLAR, false, false));
                $("#conductorNumber").append(new Option(NUMERO_CONDUTORES[NCTRIPOLAR].description,NCTRIPOLAR, false, false));
                $("#conductorNumber").append(new Option(NUMERO_CONDUTORES[NCTETRAPOLAR].description,NCTETRAPOLAR, false, false));
            }
        }
        else
        {
            $("#conductorNumber").append(new Option(NUMERO_CONDUTORES[NCUNIPOLAR].description,NCUNIPOLAR, false, false));
            $("#conductorNumber").append(new Option(NUMERO_CONDUTORES[NCTRIPOLAR].description,NCTRIPOLAR, false, false));
        }
    }
    else if (tipoProduto == CABOS_ENERGIA)
    {
        if (nivelTensao == BAIXA)
        {
            $("#conductorNumber").append(new Option(NUMERO_CONDUTORES[NCUNIPOLAR].description,NCUNIPOLAR, false, false));
            $("#conductorNumber").append(new Option(NUMERO_CONDUTORES[NCBIPOLAR].description,NCBIPOLAR, false, false));
            $("#conductorNumber").append(new Option(NUMERO_CONDUTORES[NCTRIPOLAR].description,NCTRIPOLAR, false, false));
            $("#conductorNumber").append(new Option(NUMERO_CONDUTORES[NCTETRAPOLAR].description,NCTETRAPOLAR, false, false));
        }
        else if (nivelTensao == MEDIA)
        {
            $("#conductorNumber").append(new Option(NUMERO_CONDUTORES[NCUNIPOLAR].description,NCUNIPOLAR, false, false));
            $("#conductorNumber").append(new Option(NUMERO_CONDUTORES[NCTRIPOLAR].description,NCTRIPOLAR, false, false));
        }
    }
    
    $('#conductorNumber option[value="'+numeroCondutor+'"]').attr({ selected : "selected" });
}

function getTensaoIsolamento(tipoProduto, nivelTensao, tensaoServico, numeroCondutores, materialCondutor)
{
    //alert("tipoProduto: " + tipoProduto + ", nivelTensao: " + nivelTensao + ", tensaoServico: " + tensaoServico + ", numeroCondutores: " + numeroCondutores + ", materialCondutor : " + materialCondutor);
    
    $("#isolationVoltage").html("");
    $("#isolationVoltage").append(new Option("Selecione","0", false, false));
    
    if (tipoProduto == CABOS_ENERGIA)
    {
        if (nivelTensao == BAIXA)
        {
            if (tensaoServico >= 0.001 && tensaoServico <= 0.750)
            {
                if (materialCondutor != ALUMINIO && numeroCondutores == NCUNIPOLAR)
                {
                    $("#isolationVoltage").append(new Option(TENSAO_ISOLAMENTO[_450V_750V].description,_450V_750V, false, false));
                }
                $("#isolationVoltage").append(new Option(TENSAO_ISOLAMENTO[_06KV_1KV].description,_06KV_1KV, false, false));
            }
            else if ( (tensaoServico > 0.6 && tensaoServico <= 1) || (numeroCondutores == NCTRIPOLAR) || (materialCondutor == ALUMINIO) )
            {
                $("#isolationVoltage").append(new Option(TENSAO_ISOLAMENTO[_06KV_1KV].description,_06KV_1KV, false, false));
            }
            
        }
        else if (nivelTensao == MEDIA)
        {
            if (tensaoServico >= 1 && tensaoServico <= 6)
            {
                $("#isolationVoltage").append(new Option(TENSAO_ISOLAMENTO[_3_6KV_6KV].description,_3_6KV_6KV, false, false));
                $("#isolationVoltage").append(new Option(TENSAO_ISOLAMENTO[_6KV_10KV].description,_6KV_10KV, false, false));
                $("#isolationVoltage").append(new Option(TENSAO_ISOLAMENTO[_8_7KV_15KV].description,_8_7KV_15KV, false, false));
                $("#isolationVoltage").append(new Option(TENSAO_ISOLAMENTO[_12KV_20KV].description,_12KV_20KV, false, false));
                $("#isolationVoltage").append(new Option(TENSAO_ISOLAMENTO[_15KV_25KV].description,_15KV_25KV, false, false));
                $("#isolationVoltage").append(new Option(TENSAO_ISOLAMENTO[_20KV_35KV].description,_20KV_35KV, false, false));
            }
            else if (tensaoServico > 6 && tensaoServico <= 10)
            {
                $("#isolationVoltage").append(new Option(TENSAO_ISOLAMENTO[_6KV_10KV].description,_6KV_10KV, false, false));
                $("#isolationVoltage").append(new Option(TENSAO_ISOLAMENTO[_8_7KV_15KV].description,_8_7KV_15KV, false, false));
                $("#isolationVoltage").append(new Option(TENSAO_ISOLAMENTO[_12KV_20KV].description,_12KV_20KV, false, false));
                $("#isolationVoltage").append(new Option(TENSAO_ISOLAMENTO[_15KV_25KV].description,_15KV_25KV, false, false));
                $("#isolationVoltage").append(new Option(TENSAO_ISOLAMENTO[_20KV_35KV].description,_20KV_35KV, false, false));
            }
            else if (tensaoServico > 10 && tensaoServico <= 15)
            {
                $("#isolationVoltage").append(new Option(TENSAO_ISOLAMENTO[_8_7KV_15KV].description,_8_7KV_15KV, false, false));
                $("#isolationVoltage").append(new Option(TENSAO_ISOLAMENTO[_12KV_20KV].description,_12KV_20KV, false, false));
                $("#isolationVoltage").append(new Option(TENSAO_ISOLAMENTO[_15KV_25KV].description,_15KV_25KV, false, false));
                $("#isolationVoltage").append(new Option(TENSAO_ISOLAMENTO[_20KV_35KV].description,_20KV_35KV, false, false));
            }
            else if (tensaoServico > 15 && tensaoServico <= 20)
            {
                $("#isolationVoltage").append(new Option(TENSAO_ISOLAMENTO[_12KV_20KV].description,_12KV_20KV, false, false));
                $("#isolationVoltage").append(new Option(TENSAO_ISOLAMENTO[_15KV_25KV].description,_15KV_25KV, false, false));
                $("#isolationVoltage").append(new Option(TENSAO_ISOLAMENTO[_20KV_35KV].description,_20KV_35KV, false, false));
            }
            else if (tensaoServico > 20 && tensaoServico <= 25)
            {
                $("#isolationVoltage").append(new Option(TENSAO_ISOLAMENTO[_15KV_25KV].description,_15KV_25KV, false, false));
                $("#isolationVoltage").append(new Option(TENSAO_ISOLAMENTO[_20KV_35KV].description,_20KV_35KV, false, false));
            }
            else if (tensaoServico > 25 && tensaoServico <= 35)
            {
                $("#isolationVoltage").append(new Option(TENSAO_ISOLAMENTO[_20KV_35KV].description,_20KV_35KV, false, false));
            }
        }
    }
    else if (tipoProduto == CABOS_NAVAIS)
    {
        if (nivelTensao == BAIXA)
        {
            $("#isolationVoltage").append(new Option(TENSAO_ISOLAMENTO[_06KV_1KV].description,_06KV_1KV, false, false));
        }
        else if (nivelTensao == MEDIA)
        {
            if (tensaoServico >= 1 && tensaoServico <= 6)
            {
                $("#isolationVoltage").append(new Option(TENSAO_ISOLAMENTO[_3_6KV_6KV].description,_3_6KV_6KV, false, false));
                $("#isolationVoltage").append(new Option(TENSAO_ISOLAMENTO[_6KV_10KV].description,_6KV_10KV, false, false));
                $("#isolationVoltage").append(new Option(TENSAO_ISOLAMENTO[_8_7KV_15KV].description,_8_7KV_15KV, false, false));
                $("#isolationVoltage").append(new Option(TENSAO_ISOLAMENTO[_12KV_20KV].description,_12KV_20KV, false, false));
            }
            else if (tensaoServico > 6 && tensaoServico <= 10)
            {
                $("#isolationVoltage").append(new Option(TENSAO_ISOLAMENTO[_6KV_10KV].description,_6KV_10KV, false, false));
                $("#isolationVoltage").append(new Option(TENSAO_ISOLAMENTO[_8_7KV_15KV].description,_8_7KV_15KV, false, false));
                $("#isolationVoltage").append(new Option(TENSAO_ISOLAMENTO[_12KV_20KV].description,_12KV_20KV, false, false));
            }
            else if (tensaoServico > 10 && tensaoServico <= 15)
            {
                $("#isolationVoltage").append(new Option(TENSAO_ISOLAMENTO[_8_7KV_15KV].description,_8_7KV_15KV, false, false));
                $("#isolationVoltage").append(new Option(TENSAO_ISOLAMENTO[_12KV_20KV].description,_12KV_20KV, false, false));
            }
            else if (tensaoServico > 15 && tensaoServico <= 20)
            {
                $("#isolationVoltage").append(new Option(TENSAO_ISOLAMENTO[_12KV_20KV].description,_12KV_20KV, false, false));
            }
        }
    }
}

function getSistema(tipoProduto, nivelTensao, numeroCondutores)
{
    $("#system").html("");
    $("#system").append(new Option("Selecione","0", false, false));
    
    if (tipoProduto == CABOS_ENERGIA)
    {
        if (nivelTensao == BAIXA)
        {
            if (numeroCondutores == NCUNIPOLAR)
            {
                $("#system").append(new Option(SISTEMA[MONOFASICO_DOIS_CONDUTORES].description,MONOFASICO_DOIS_CONDUTORES, false, false));
                $("#system").append(new Option(SISTEMA[MONOFASICO_TRES_CONDUTORES].description,MONOFASICO_TRES_CONDUTORES, false, false));
                $("#system").append(new Option(SISTEMA[DUAS_FASES_COM_NEUTRO].description,DUAS_FASES_COM_NEUTRO, false, false));
                $("#system").append(new Option(SISTEMA[DUAS_FASES_SEM_NEUTRO].description,DUAS_FASES_SEM_NEUTRO, false, false));
                $("#system").append(new Option(SISTEMA[TRIFASICO_SEM_NEUTRO].description,TRIFASICO_SEM_NEUTRO, false, false));
                $("#system").append(new Option(SISTEMA[TRIFASICO_COM_NEUTRO].description,TRIFASICO_COM_NEUTRO, false, false));
            }
            else if (numeroCondutores == NCBIPOLAR)
            {
                $("#system").append(new Option(SISTEMA[MONOFASICO_DOIS_CONDUTORES].description,MONOFASICO_DOIS_CONDUTORES, false, false));
                $("#system").append(new Option(SISTEMA[DUAS_FASES_SEM_NEUTRO].description,DUAS_FASES_SEM_NEUTRO, false, false));
            }
            else if (numeroCondutores == NCTRIPOLAR)
            {
                $("#system").append(new Option(SISTEMA[MONOFASICO_TRES_CONDUTORES].description,MONOFASICO_TRES_CONDUTORES, false, false));
                $("#system").append(new Option(SISTEMA[DUAS_FASES_COM_NEUTRO].description,DUAS_FASES_COM_NEUTRO, false, false));
                $("#system").append(new Option(SISTEMA[TRIFASICO_SEM_NEUTRO].description,TRIFASICO_SEM_NEUTRO, false, false));
            }
            else if (numeroCondutores == NCTETRAPOLAR)
            {
                $("#system").append(new Option(SISTEMA[TRIFASICO_COM_NEUTRO].description,TRIFASICO_COM_NEUTRO, false, false));
            }
        }
        else if (nivelTensao == MEDIA)
        {
            $("#system").append(new Option(SISTEMA[TRIFASICO_COM_NEUTRO].description,TRIFASICO_COM_NEUTRO, false, false));
            $("#system").append(new Option(SISTEMA[TRIFASICO_SEM_NEUTRO].description,TRIFASICO_SEM_NEUTRO, false, false));
        }
    }
    else
    {
        if (nivelTensao == BAIXA)
        {
            if (numeroCondutores == 1)
            {
                $("#system").append(new Option(SISTEMA[MONOFASICO_DOIS_CONDUTORES].description,MONOFASICO_DOIS_CONDUTORES, false, false));
                $("#system").append(new Option(SISTEMA[MONOFASICO_TRES_CONDUTORES].description,MONOFASICO_TRES_CONDUTORES, false, false));
                $("#system").append(new Option(SISTEMA[DUAS_FASES_COM_NEUTRO].description,DUAS_FASES_COM_NEUTRO, false, false));
                $("#system").append(new Option(SISTEMA[DUAS_FASES_SEM_NEUTRO].description,DUAS_FASES_SEM_NEUTRO, false, false));
                $("#system").append(new Option(SISTEMA[TRIFASICO_SEM_NEUTRO].description,TRIFASICO_SEM_NEUTRO, false, false));
                $("#system").append(new Option(SISTEMA[TRIFASICO_COM_NEUTRO].description,TRIFASICO_COM_NEUTRO, false, false));
            }
            else if (numeroCondutores == 2)
            {
                $("#system").append(new Option(SISTEMA[MONOFASICO_DOIS_CONDUTORES].description,MONOFASICO_DOIS_CONDUTORES, false, false));
                $("#system").append(new Option(SISTEMA[DUAS_FASES_SEM_NEUTRO].description,DUAS_FASES_SEM_NEUTRO, false, false));
            }
            else if (numeroCondutores == 3)
            {
                $("#system").append(new Option(SISTEMA[MONOFASICO_TRES_CONDUTORES].description,MONOFASICO_TRES_CONDUTORES, false, false));
                $("#system").append(new Option(SISTEMA[DUAS_FASES_COM_NEUTRO].description,DUAS_FASES_COM_NEUTRO, false, false));
                $("#system").append(new Option(SISTEMA[TRIFASICO_SEM_NEUTRO].description,TRIFASICO_SEM_NEUTRO, false, false));
            }
            else if (numeroCondutores == 4)
            {
                $("#system").append(new Option(SISTEMA[TRIFASICO_COM_NEUTRO].description,TRIFASICO_COM_NEUTRO, false, false));
            }
        }
        else
        {
            if (numeroCondutores == 1 || numeroCondutores == 3)
            {
                $("#system").append(new Option(SISTEMA[TRIFASICO_SEM_NEUTRO].description,TRIFASICO_SEM_NEUTRO, false, false));
            }
        }
    }
}

function getTemperaturaMaximaCondutor(tipoProduto, nivelTensao, caboEscolhido, tensaoIsolamento, materialCondutor)
{
    var valorTemperatura = $("#maximumTemperature").val();
    
    $("#maximumTemperature").html("");
    $("#maximumTemperature").append(new Option("Selecione","0", false, false));
    
    //alert("Entrou da funcao: getTemperaturaMaximaCondutor");
    if (tipoProduto == CABOS_ENERGIA)
    {
        if (nivelTensao == BAIXA)
        {
            if (materialCondutor == ALUMINIO)
            {
                $("#maximumTemperature").append(new Option(TEMPERATURAMAXIMA[_70C].description,_70C, false, false));
            }
            else
            {
                if ((tensaoIsolamento == _450V_750V) || (caboEscolhido == AFITOX_750V) || (caboEscolhido == NOFLAN_ANTICHAMA_BWF_FLEXIVEL) || (caboEscolhido == VINIL) || (caboEscolhido == VINIL_FLEXIVEL) ) {
                    $("#maximumTemperature").append(new Option(TEMPERATURAMAXIMA[_70C].description,_70C, false, false));
                }
                else if ( (caboEscolhido == AFITOX_06_1KV) || (caboEscolhido == FITER_FLEX) )
                {
                    $("#maximumTemperature").append(new Option(TEMPERATURAMAXIMA[_90C].description,_90C, false, false));
                }
                else
                {
                    $("#maximumTemperature").append(new Option(TEMPERATURAMAXIMA[_70C].description,_70C, false, false));
                    $("#maximumTemperature").append(new Option(TEMPERATURAMAXIMA[_90C].description,_90C, false, false));
                }
            }
        }
        else if (nivelTensao == MEDIA)
        {
            if (caboEscolhido == EP_DRY_105C)
            {
                $("#maximumTemperature").append(new Option(TEMPERATURAMAXIMA[_105C].description,_105C, false, false));
            }
            else if (caboEscolhido == 0)
            {
                $("#maximumTemperature").append(new Option(TEMPERATURAMAXIMA[_90C].description,_90C, false, false));
                $("#maximumTemperature").append(new Option(TEMPERATURAMAXIMA[_105C].description,_105C, false, false));
            }
            else
            {
                $("#maximumTemperature").append(new Option(TEMPERATURAMAXIMA[_90C].description,_90C, false, false));
            }
        }
        
    }
    else if (tipoProduto == CABOS_NAVAIS)
    {
        $("#maximumTemperature").append(new Option(TEMPERATURAMAXIMA[_70C].description,_70C, false, false));
        $("#maximumTemperature").append(new Option(TEMPERATURAMAXIMA[_85C].description,_85C, false, false));
        $("#maximumTemperature").append(new Option(TEMPERATURAMAXIMA[_90C].description,_90C, false, false));
    }
    
    $('#maximumTemperature option[value="'+valorTemperatura+'"]').attr({ selected : "selected" });
    //alert("Saiu da funcao: getTemperaturaMaximaCondutor");
}

function getPossibilidadeInstalacao(tipoProduto, nivelTensao)
{
    $("#possibilidadeInstalacao").html("");
    $("#possibilidadeInstalacao").append(new Option("Selecione","0", false, false));
    
    if (tipoProduto == CABOS_ENERGIA)
    {
        if (nivelTensao == BAIXA)
        {
            $("#possibilidadeInstalacao").append(new Option(POSSIBILIDADE_INSTALACAO[APARENTE].description,APARENTE, false, false));
            $("#possibilidadeInstalacao").append(new Option(POSSIBILIDADE_INSTALACAO[EMBUTIDA].description,EMBUTIDA, false, false));
            $("#possibilidadeInstalacao").append(new Option(POSSIBILIDADE_INSTALACAO[ESPACO_CONSTRUCAO].description,ESPACO_CONSTRUCAO, false, false));
            $("#possibilidadeInstalacao").append(new Option(POSSIBILIDADE_INSTALACAO[SUBTERRANEA].description,SUBTERRANEA, false, false));
            $("#possibilidadeInstalacao").append(new Option(POSSIBILIDADE_INSTALACAO[SUSPENSA].description,SUSPENSA, false, false));
        }
        else if (nivelTensao == MEDIA)
        {
            $("#possibilidadeInstalacao").append(new Option(POSSIBILIDADE_INSTALACAO[APARENTE_AR].description,APARENTE_AR, false, false));
            $("#possibilidadeInstalacao").append(new Option(POSSIBILIDADE_INSTALACAO[BANCO_DUTOS_SOLO].description,BANCO_DUTOS_SOLO, false, false));
            $("#possibilidadeInstalacao").append(new Option(POSSIBILIDADE_INSTALACAO[CANALETA_FECHADA_SOLO].description,CANALETA_FECHADA_SOLO, false, false));
            $("#possibilidadeInstalacao").append(new Option(POSSIBILIDADE_INSTALACAO[DIRETAMENTE_SOLO].description,DIRETAMENTE_SOLO, false, false));
            $("#possibilidadeInstalacao").append(new Option(POSSIBILIDADE_INSTALACAO[ELETRODUTO_NAO_METALICO_APARENTE_AR].description,ELETRODUTO_NAO_METALICO_APARENTE_AR, false, false));
            $("#possibilidadeInstalacao").append(new Option(POSSIBILIDADE_INSTALACAO[ELETRODUTO_METALICO_APARENTE_AR].description,ELETRODUTO_METALICO_APARENTE_AR, false, false));
            $("#possibilidadeInstalacao").append(new Option(POSSIBILIDADE_INSTALACAO[ELETRODUTO_NAO_METALICO_SOLO].description,ELETRODUTO_NAO_METALICO_SOLO, false, false));
            $("#possibilidadeInstalacao").append(new Option(POSSIBILIDADE_INSTALACAO[ELETRODUTO_METALICO_SOLO].description,ELETRODUTO_METALICO_SOLO, false, false));
        }
        
    }
    else if (tipoProduto == CABOS_NAVAIS)
    {
        $("#possibilidadeInstalacao").append(new Option(POSSIBILIDADE_INSTALACAO[APARENTE].description,APARENTE, false, false));
        $("#possibilidadeInstalacao").append(new Option(POSSIBILIDADE_INSTALACAO[EMBUTIDA].description,EMBUTIDA, false, false));
    }
    
    //alert("Saiu da funcao: getPossibilidadeInstalacao");
}

function getTemperaturaArSolo(tipoProduto, temperaturaCondutor, nivelTensao, instalacao)
{
    $("#temperaturaArSolo").html("");
    $("#temperaturaArSolo").append(new Option("Selecione","0", false, false));
    
    if (tipoProduto == CABOS_ENERGIA)
    {
        $("#temperaturaArSolo").append(new Option(TEMPERATURA_AR_SOLO[_10C_AS].description,_10C_AS, false, false));
        $("#temperaturaArSolo").append(new Option(TEMPERATURA_AR_SOLO[_15C_AS].description,_15C_AS, false, false));
        $("#temperaturaArSolo").append(new Option(TEMPERATURA_AR_SOLO[_20C_AS].description,_20C_AS, false, false));
        $("#temperaturaArSolo").append(new Option(TEMPERATURA_AR_SOLO[_25C_AS].description,_25C_AS, false, false));
        $("#temperaturaArSolo").append(new Option(TEMPERATURA_AR_SOLO[_30C_AS].description,_30C_AS, false, false));
        $("#temperaturaArSolo").append(new Option(TEMPERATURA_AR_SOLO[_35C_AS].description,_35C_AS, false, false));
        $("#temperaturaArSolo").append(new Option(TEMPERATURA_AR_SOLO[_40C_AS].description,_40C_AS, false, false));
        $("#temperaturaArSolo").append(new Option(TEMPERATURA_AR_SOLO[_45C_AS].description,_45C_AS, false, false));
        $("#temperaturaArSolo").append(new Option(TEMPERATURA_AR_SOLO[_50C_AS].description,_50C_AS, false, false));
        $("#temperaturaArSolo").append(new Option(TEMPERATURA_AR_SOLO[_55C_AS].description,_55C_AS, false, false));
        $("#temperaturaArSolo").append(new Option(TEMPERATURA_AR_SOLO[_60C_AS].description,_60C_AS, false, false));
        $("#temperaturaArSolo").append(new Option(TEMPERATURA_AR_SOLO[_65C_AS].description,_65C_AS, false, false));
        $("#temperaturaArSolo").append(new Option(TEMPERATURA_AR_SOLO[_70C_AS].description,_70C_AS, false, false));
        $("#temperaturaArSolo").append(new Option(TEMPERATURA_AR_SOLO[_75C_AS].description,_75C_AS, false, false));
        $("#temperaturaArSolo").append(new Option(TEMPERATURA_AR_SOLO[_80C_AS].description,_80C_AS, false, false));
        $("#temperaturaArSolo").append(new Option(TEMPERATURA_AR_SOLO[_85C_AS].description,_85C_AS, false, false));
    }
    else if (tipoProduto == CABOS_NAVAIS)
    {
        $("#temperaturaArSolo").append(new Option(TEMPERATURA_AR_SOLO[_35C_AS].description,_35C_AS, false, false));
        $("#temperaturaArSolo").append(new Option(TEMPERATURA_AR_SOLO[_40C_AS].description,_40C_AS, false, false));
        $("#temperaturaArSolo").append(new Option(TEMPERATURA_AR_SOLO[_45C_AS].description,_45C_AS, false, false));
        $("#temperaturaArSolo").append(new Option(TEMPERATURA_AR_SOLO[_50C_AS].description,_50C_AS, false, false));
        $("#temperaturaArSolo").append(new Option(TEMPERATURA_AR_SOLO[_55C_AS].description,_55C_AS, false, false));
    }
}

function getResistividade()
{
    $("#resistividadeTermica").html("");
    $("#resistividadeTermica").append(new Option("Selecione","0", false, false));
    
    $("#resistividadeTermica").append(new Option(RESISTIVIDADE_TERMICA[_1].description,_1, false, false));
    $("#resistividadeTermica").append(new Option(RESISTIVIDADE_TERMICA[_1_5].description,_1_5, false, false));
    $("#resistividadeTermica").append(new Option(RESISTIVIDADE_TERMICA[_2].description,_2, false, false));
    $("#resistividadeTermica").append(new Option(RESISTIVIDADE_TERMICA[_2_5].description,_2_5, false, false));
    $("#resistividadeTermica").append(new Option(RESISTIVIDADE_TERMICA[_3].description,_3, false, false));
}

function isExibirSuporte()
{
    var caboSelecionado = $("#caboSelecionado").val();
    
    var a = caboSelecionado == AFITOX_750V;
    var b = caboSelecionado == NOFLAN_ANTICHAMA_BWF_FLEXIVEL;
    
    return a || b;
}

function isExibirIsoladores()
{
    return true;
}

function getOrientacao()
{
    $("#orientacaoCabo").html("");
    $("#orientacaoCabo").append(new Option("Selecione","0", false, false));
    
    $("#orientacaoCabo").append(new Option(ORIENTACAO_CABO[OCHORIZONTAL].description,OCHORIZONTAL, false, false));
    $("#orientacaoCabo").append(new Option(ORIENTACAO_CABO[OCVERTICAL].description,OCVERTICAL, false, false));
}

function isUnipolarEletroduoAr()
{
    var numeroCondutores = $("#conductorNumber").val();
    return numeroCondutores == 1;
}

function isEletrodutoAparenteAr()
{
    var possibilidadeInstalacao = $("#possibilidadeInstalacao").val();
    
    return possibilidadeInstalacao == ELETRODUTO_METALICO_APARENTE_AR || possibilidadeInstalacao == ELETRODUTO_NAO_METALICO_APARENTE_AR;
}

function isSeparados()
{
    var posicionamentoCabo = $("#posicionamentoCabos").val();
    return (posicionamentoCabo == FORMACAO_ESPACADA);
}

function isJustapostos()
{
    var posicionamentoCabo = $("#posicionamentoCabos").val();
    return (posicionamentoCabo == FORMACAO_JUSTAPOSTA);
}

function isTrifolio()
{
    var posicionamentoCabo = $("#posicionamentoCabos").val();
    return (posicionamentoCabo == FORMACAO_TRIFOLIO);
}

function getNumeroBandejasVertical()
{
    var posicionamentoCabo = $("#posicionamentoCabos").val();
    
    dimensionamento = new DimensionamentoBean();
    dimensionamento.setTipoProduto($("#cableList").val());
    dimensionamento.setNivelTensao($("#systemVoltage").val());
    dimensionamento.setNumeroCondutores($("#conductorNumber").val());
    dimensionamento.setPossibilidadeInstalacao($("#possibilidadeInstalacao").val());
    dimensionamento.setlocalInstalacao($("#localInstalacao").val());
    
    $("#numeroBandejasVertical").html("");
    $("#numeroBandejasVertical").append(new Option("Selecione","0", false, false));
    
    if (!isCabosNavais())
    {
        if (posicionamentoCabo == FORMACAO_ESPACADA)
        {
            return getNumeroBandejas();
            
        }
        else if (posicionamentoCabo == FORMACAO_JUSTAPOSTA)
        {
            $("#numeroBandejasVertical").append(new Option("1","1", false, false));
            $("#numeroBandejasVertical").append(new Option("2","2", false, false));
        }
    }
    else
    {
        if (dimensionamento.isColunaF())
        {
            $("#numeroBandejasVertical").append(new Option("1","1", false, false));
            $("#numeroBandejasVertical").append(new Option("2","2", false, false));
        }
        else if (dimensionamento.isColunaE())
        {
            if (isJustapostos() || isSeparados())
            {
                $("#numeroBandejasVertical").append(new Option("1","1", false, false));
                $("#numeroBandejasVertical").append(new Option("2","2", false, false));
            }
        }
    }
}

function getNumeroTernasBandeja(id)
{
    var posicionamentoCabo = $("#posicionamentoCabos").val();
    var numeroCondutores = $("#conductorNumber").val();
    
    dimensionamento = new DimensionamentoBean();
    dimensionamento.setTipoProduto($("#cableList").val());
    dimensionamento.setNivelTensao($("#systemVoltage").val());
    dimensionamento.setNumeroCondutores($("#conductorNumber").val());
    dimensionamento.setPossibilidadeInstalacao($("#possibilidadeInstalacao").val());
    dimensionamento.setlocalInstalacao($("#localInstalacao").val());
    
    $(id).html("");
    $(id).append(new Option("Selecione","0", false, false));
    
    if (!isCabosNavais())
    {
        if (isEletrodutoAparenteAr())
        {
            $(id).append(new Option("1","1", false, false));
            $(id).append(new Option("2","2", false, false));
            $(id).append(new Option("3","3", false, false));
            
            if (isJustapostos())
            {
                $(id).append(new Option("4","4", false, false));
            }
            
            $(id).append(new Option("6","6", false, false));
            $(id).append(new Option("9","9", false, false));
        }
        else if (numeroCondutores == NCUNIPOLAR)
        {
            $(id).append(new Option("1","1", false, false));
            $(id).append(new Option("2","2", false, false));
            $(id).append(new Option("3","3", false, false));
        }
        else if (numeroCondutores == NCTRIPOLAR)
        {
            $(id).append(new Option("1","1", false, false));
            $(id).append(new Option("2","2", false, false));
            $(id).append(new Option("3","3", false, false));
            $(id).append(new Option("6","6", false, false));
            $(id).append(new Option("9","9", false, false));
        }
    }
    else
    {
        if (dimensionamento.isColunaF())
        {
            $(id).append(new Option("1","1", false, false));
            $(id).append(new Option("2","2", false, false));
            $(id).append(new Option("3","3", false, false));
        }
        else if (isColunaE())
        {
            if (isJustapostos())
            {
                $(id).append(new Option("1","1", false, false));
                $(id).append(new Option("2","2", false, false));
                $(id).append(new Option("3","3", false, false));
                $(id).append(new Option("4","4", false, false));
                $(id).append(new Option("6","6", false, false));
                $(id).append(new Option("9","9", false, false));
            }
            else if (isSeparados())
            {
                $(id).append(new Option("1","1", false, false));
                $(id).append(new Option("2","2", false, false));
                $(id).append(new Option("3","3", false, false));
                $(id).append(new Option("4","4", false, false));
                $(id).append(new Option("6","6", false, false));
            }
        }
    }
}

function getNumeroTernasVertical()
{
    var posicionamentoCabo = $("#posicionamentoCabos").val();
    var numeroCondutores = $("#conductorNumber").val();
    
    dimensionamento = new DimensionamentoBean();
    dimensionamento.setTipoProduto($("#cableList").val());
    dimensionamento.setNivelTensao($("#systemVoltage").val());
    dimensionamento.setNumeroCondutores($("#conductorNumber").val());
    dimensionamento.setPossibilidadeInstalacao($("#possibilidadeInstalacao").val());
    dimensionamento.setlocalInstalacao($("#localInstalacao").val());
    
    $("#numeroTernasBandejaVertical").html("");
    $("#numeroTernasBandejaVertical").append(new Option("Selecione","0", false, false));
    
    if (!isCabosNavais())
    {
        if (posicionamentoCabo == FORMACAO_ESPACADA || posicionamentoCabo == FORMACAO_TRIFOLIO)
        {
            return getNumeroTernasBandeja("#numeroTernasBandejaVertical");
        }
        else if (posicionamentoCabo == FORMACAO_JUSTAPOSTA)
        {
            
            if (isEletrodutoAparenteAr())
            {
                $("#numeroTernasBandejaVertical").append(new Option("1","1", false, false));
                $("#numeroTernasBandejaVertical").append(new Option("2","2", false, false));
                $("#numeroTernasBandejaVertical").append(new Option("3","3", false, false));
                
                if (isJustapostos())
                {
                    $("#numeroTernasBandejaVertical").append(new Option("4","4", false, false));
                }
                
                $("#numeroTernasBandejaVertical").append(new Option("6","6", false, false));
                $("#numeroTernasBandejaVertical").append(new Option("9","9", false, false));
            }
            else if (numeroCondutores == NCUNIPOLAR)
            {
                $("#numeroTernasBandejaVertical").append(new Option("1","1", false, false));
                $("#numeroTernasBandejaVertical").append(new Option("2","2", false, false));
            }
            else if (numeroCondutores == NCTRIPOLAR)
            {
                $("#numeroTernasBandejaVertical").append(new Option("1","1", false, false));
                $("#numeroTernasBandejaVertical").append(new Option("2","2", false, false));
                $("#numeroTernasBandejaVertical").append(new Option("3","3", false, false));
                $("#numeroTernasBandejaVertical").append(new Option("6","6", false, false));
                $("#numeroTernasBandejaVertical").append(new Option("9","9", false, false));
            }
        }
    }
    else
    {
        if (dimensionamento.isColunaF())
        {
            $("#numeroTernasBandejaVertical").append(new Option("1","1", false, false));
            $("#numeroTernasBandejaVertical").append(new Option("2","2", false, false));
            $("#numeroTernasBandejaVertical").append(new Option("3","3", false, false));
        }
        else if (dimensionamento.isColunaE())
        {
            if (isJustapostos())
            {
                $("#numeroTernasBandejaVertical").append(new Option("1","1", false, false));
                $("#numeroTernasBandejaVertical").append(new Option("2","2", false, false));
                $("#numeroTernasBandejaVertical").append(new Option("3","3", false, false));
                $("#numeroTernasBandejaVertical").append(new Option("4","4", false, false));
                $("#numeroTernasBandejaVertical").append(new Option("6","6", false, false));
                $("#numeroTernasBandejaVertical").append(new Option("9","9", false, false));
            }
            else if (isSeparados())
            {
                $("#numeroTernasBandejaVertical").append(new Option("1","1", false, false));
                $("#numeroTernasBandejaVertical").append(new Option("2","2", false, false));
                $("#numeroTernasBandejaVertical").append(new Option("3","3", false, false));
                $("#numeroTernasBandejaVertical").append(new Option("4","4", false, false));
                $("#numeroTernasBandejaVertical").append(new Option("6","6", false, false));
            }
        }
    }
}

function getNumeroBandejas()
{
    var posicionamentoCabo = $("#posicionamentoCabos").val();

    dimensionamento = new DimensionamentoBean();
    dimensionamento.setTipoProduto($("#cableList").val());
    dimensionamento.setNivelTensao($("#systemVoltage").val());
    dimensionamento.setNumeroCondutores($("#conductorNumber").val());
    dimensionamento.setPossibilidadeInstalacao($("#possibilidadeInstalacao").val());
    dimensionamento.setlocalInstalacao($("#localInstalacao").val());
    
    
    $("#numeroBandejas").html("");
    $("#numeroBandejas").append(new Option("Selecione","0", false, false));
    
    if (!isCabosNavais())
    {
        if (posicionamentoCabo == FORMACAO_ESPACADA || posicionamentoCabo == FORMACAO_TRIFOLIO)
        {
            $("#numeroBandejas").append(new Option("1","1", false, false));
            $("#numeroBandejas").append(new Option("2","2", false, false));
            $("#numeroBandejas").append(new Option("3","3", false, false));
            $("#numeroBandejas").append(new Option("6","6", false, false));
        }
        else if (posicionamentoCabo == FORMACAO_JUSTAPOSTA)
        {
            $("#numeroBandejas").append(new Option("1","1", false, false));
            $("#numeroBandejas").append(new Option("2","2", false, false));
            $("#numeroBandejas").append(new Option("3","3", false, false));
        }
    }
    else
    {
        if (dimensionamento.isColunaF())
        {
            $("#numeroBandejas").append(new Option("1","1", false, false));
            $("#numeroBandejas").append(new Option("2","2", false, false));
            $("#numeroBandejas").append(new Option("3","3", false, false));
        }
        else if (dimensionamento.isColunaE())
        {
            if (isJustapostos() || isSeparados())
            {
                $("#numeroBandejas").append(new Option("1","1", false, false));
                $("#numeroBandejas").append(new Option("2","2", false, false));
                $("#numeroBandejas").append(new Option("3","3", false, false));
            }
        }
    }
}

function isExibirVertical()
{
    var localInstalacao = $("#localInstalacao").val();
    
    dimensionamento = new DimensionamentoBean();
    dimensionamento.setTipoProduto($("#cableList").val());
    dimensionamento.setNivelTensao($("#systemVoltage").val());
    dimensionamento.setNumeroCondutores($("#conductorNumber").val());
    dimensionamento.setPossibilidadeInstalacao($("#possibilidadeInstalacao").val());
    dimensionamento.setlocalInstalacao($("#localInstalacao").val());
    
    var a = dimensionamento.isCabosNavais();
    var b = localInstalacao != BANDEJA_PERFURADA;
    var c = dimensionamento.isColunaF() || dimensionamento.isColunaE();
    
    return !(a && b && c);
}

function isExibirSemFator()
{
    return !isCabosNavais() && !isJustapostos();
}

function isSecaoCondutorFixada()
{
    var fixarSecaoCondutor = $("#fixarSecaoCondutor").val();
    return (fixarSecaoCondutor == 1);
}

function getNumeroCircuitos(numeroCabos)
{
    var possibilidadeInstalacao = $("#possibilidadeInstalacao").val();
    var formacaoBancoDutos = $("#formacaoBancoDutos").val();
    var numeroCabos = $("#numeroCabos").val();
    var quantidadeCircuitos = $("#quantidadeCircuitos").val();
    
    if ((isColunaF() || isColunaG()) && possibilidadeInstalacao == BANCO_DUTOS_SOLO)
    {
        return formacaoBancoDutos * numeroCabos;
    }
    else
    {
        return quantidadeCircuitos * numeroCabos;
    }
}

function getOrientacaoFatorCorrecao()
{
    var orientacaoFatorCorrecao = $("#orientacaoFatorCorrecao").val();
    return orientacaoFatorCorrecao;
}