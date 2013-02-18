
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

function updateInstalacaoCabo(localInstalacao)
{
    $('#localInstalacao option[value="'+localInstalacao+'"]').attr({ selected : "selected" });
}

function updatePosicionamentoCabo(localInstalacao)
{
    $('#posicionamentoCabos option[value="'+localInstalacao+'"]').attr({ selected : "selected" });
    
    //$("#posicionamentoCabos").val(localInstalacao); -- posicionamentoCabos
    
    var possibilidadeInstalacao = $("#possibilidadeInstalacao").val();
    var numeroCondutores = $("#conductorNumber").val();
    var tipoInstalacao = $("#tipoInstalacao").val();
    
    var params = "?localInstalacao=" + localInstalacao +
    "&numeroCondutores=" + numeroCondutores +
    "&possibilidadeInstalacao=" + possibilidadeInstalacao;
    
    //var objForm = document.getElementById('form');
    
    if (possibilidadeInstalacao == APARENTE_AR)
    {
        //var url = "opcoesInstalacao.sdf" + params;
        if (localInstalacao == FORMACAO_ESPACADA)
        {
            //form.action = url;
        }
        else if (localInstalacao == FORMACAO_JUSTAPOSTA)
        {
            //form.action = url;
        }
        else if (localInstalacao == FORMACAO_TRIFOLIO)
        {
            //form.action = url;
        }
        
    }
    else if (possibilidadeInstalacao == BANCO_DUTOS_SOLO)
    {
        //var url = "bancoDutos.sdf" + params;
        //form.action = url;
    }
    else if (possibilidadeInstalacao == CANALETA_FECHADA_SOLO)
    {
        //form.action = "opcoesInstalacao.sdf" + params;
    }
    else if (possibilidadeInstalacao == DIRETAMENTE_SOLO)
    {
        //var url = "cabosSolo.sdf" + params;
        //form.action = url;
    }
    else if (possibilidadeInstalacao == ELETRODUTO_SOLO)
    {
        //var url = "resistividadeTermica.sdf" + params;
        //form.action = url;
    }
    else if (tipoInstalacao == CONDUTORES_ISOLADOS_G)
    {
        if (localInstalacao == FORMACAO_ESPACADA)
        {
            //form.action = url;
        }
    }
}

function updateNumeroCamadas()
{
    var camadas = $("#numeroCamadas").val();
    $("#quantidadeCamadas").val(camadas);
}

function isMetalQuestion()
{
    var possibilidadeInstalacao = $("#possibilidadeInstalacao").val();
    var localInstalacao = $("#localInstalacao").val();
    var nivelTensao = $("#systemVoltage").val();
    var numeroCondutores = $("#conductorNumber").val();
    var posicionamentoCabo = $("#posicionamentoCabo").val();
    
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

function isSubterranea()
{
    var possibilidadeInstalacao = $("#possibilidadeInstalacao").val();
    return (possibilidadeInstalacao == SUBTERRANEA);
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
            else if (numeroCondutores == NumeroCondutores.UNIPOLAR.getValue())
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
    var posicionamentoCabo = $("#posicionamentoCabo").val();
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

function updateNumeroCircuitos()
{
    var circuitos = $("#numeroCircuitos").val();
    $("#quantidadeCircuitos").val(circuitos);
    
    if(isSubterranea() && isDiretamenteEnterradosOuEletroduto() || isEletrodutoSolo())
    {
        var distanciaEntreCabos = $("#distanciaEntreCabos").val(circuitos);
        
        if (circuitos == 1)
        {
            document.getElementById("distanciaEntreCabos").disabled = "disabled";
        }
        else
        {
            document.getElementById("distanciaEntreCabos").disabled = "";
        }
    }
}

function submitPossibilidadeInstalacao()
{
    var numeroCondutores = $("#conductorNumber").val();
    var local = $("#localInstalacao").val();
    var possibilidade = $("#possibilidadeInstalacao").val();
    
    var possibilidadeInstalacao = $("#possibilidadeInstalacao").val();
    var posicionamentoCabo = $("#posicionamentoCabo").val();
    var nivelTensao = $("#systemVoltage").val();
    var tensaoIsolamento = $("#isolationVoltage").val();
    
    if (local == "0")
    {
        alert("Selecione o local de instalação.");
        return;
    }
    else
    {
        if(possibilidade == SUBTERRANEA)
        {
            if (nivelTensao == BAIXA && numeroCondutores == NCUNIPOLAR &&  tensaoIsolamento == _06KV_1KV && local == ELETRODUTO)
            {
                $("#step_posicionamentoCabo").val("posicionamentoCabosSubterranea");
                showPosicionamentoCabos();
            }
            else
            {
                showPossibilidadeCabos();
            }
        }
        else
        {
            if(isCabosEnergia())
            {
                showPossibilidadeCabos();
                //show possibilidadeCabos
            }
            else
            {
                if ((local == BANDEJA_PERFURADA || local == LEITO || local == SUPORTES) && (numeroCondutores == 1 || numeroCondutores == 3))
                {
                    //showPosicionamentoCabos();
                }
                else
                {
                    showPossibilidadeCabos();
                    //show possibilidadeCabos
                }
            }
        }
    }
}

/*function submitPossibilidadeCabos()
{
    var objNumeroCamadas = document.getElementById('numeroCamadas');
    var objNumeroCircuitos = document.getElementById('numeroCircuitos');
    var eletrodutoMetalico = document.getElementById('eletrodutoMetalico');
    var distanciaEntreCabos = document.getElementById('');
    var posicionamentoCabos = document.getElementById('posicionamentoCabos');
    
    if (!isUndefinedOrNotZero("numeroCircuitos")) {
        <ww:if test="!unipolar">
            alert("Selecione a opção de números de cabos multipolar por camada.");
        return false;
        </ww:if>
            <ww:else>
            	alert("Selecione a opção de número de circuitos.");
        return false;
        </ww:else>
            }
    
    if (!isUndefinedOrNotZero("eletrodutoMetalico")) {
        alert("Selecione a opção de eletroduto metálico.");
        return false;
    }
    
    if (!isUndefinedOrNotZero("numeroCamadas")) {
        alert("Selecione a opção de número de camadas.");
        return false;
    }
    
    if (objNumeroCircuitos != undefined) {
        <ww:if test="colunaCEF">
            if ((objNumeroCamadas != undefined)) {
                if ((objNumeroCamadas.value == 2) && (objNumeroCircuitos.value < 2)) {
                    alert("Para essa modalidade de instalação e número de camadas, o número de circuitos deve ser maior ou igual a 2.");
                    return false;
                }
            }
        </ww:if>
            }
    
    if (!isUndefinedOrNotZero("comboRelacaoCaboXDuto")) {
        alert("Selecione a opção de relação de tamanho Cabo X Duto.");
        return false;
    }
    
    if (!isUndefinedOrNotZero("distanciaEntreCabos")) {
        if (document.getElementById("distanciaEntreCabos").disabled == "") {
            <ww:if test="eletrodutoSolo || eletroduto">
                alert("Selecione a distância entre os eletrodutos.");
            return false;
            </ww:if>
	            <ww:else>
		            alert("Selecione a distância entre os cabos.");
            return false;
            </ww:else>
                }
    }
    
    <ww:if test="exibirPosicionamentoCabosSeparadoTrifolio">
        form.action = 'posicionamentoCabos.sdf?' +
        'sistema=' + <ww:property value="sistema" /> +
        '&possibilidadeInstalacao=' + <ww:property value="possibilidadeInstalacao" /> +
        '&localInstalacao=' + <ww:property value="localInstalacao" /> +
        '&numeroCondutores=' + <ww:property value="numeroCondutores" /> +
        '&caboEscolhido=' + <ww:property value="caboEscolhido" /> +
        '&tipoProduto=' + <ww:property value="tipoProduto" /> +
        '&nivelTensao=' + <ww:property value="nivelTensao" />;
    form.submit();
    </ww:if>
        <ww:else>
            <ww:if test="exibirResistividadeTermica">
                form.action = 'resistividadeTermica.sdf?' +
                'sistema=' + <ww:property value="sistema" /> +
                '&possibilidadeInstalacao=' + <ww:property value="possibilidadeInstalacao" /> +
                '&localInstalacao=' + <ww:property value="localInstalacao" /> +
                '&numeroCondutores=' + <ww:property value="numeroCondutores" /> +
                '&caboEscolhido=' + <ww:property value="caboEscolhido" /> +
                '&tipoProduto=' + <ww:property value="tipoProduto" /> +
                '&nivelTensao=' + <ww:property value="nivelTensao" />;
    form.submit();
    </ww:if>
        <ww:else>
            
            opener.windowCloseHandler();
    window.close();
    </ww:else>
        </ww:else>
}*/

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

function showPosicionamentoCabos()
{
    escondeDivs();
    
    var numeroCondutores = $("#conductorNumber").val();
    var possibilidadeInstalacao = $("#possibilidadeInstalacao").val();
    var posicionamentoCabo = $("#posicionamentoCabo").val();
    var nivelTensao = $("#systemVoltage").val();
    
    if(isEletrodutoSolo || isBancoDutos())
    {
        document.getElementById("li_posicionamentoCabosPorDuto").style.display = "";
        document.getElementById("id_posicionamentoCabos").style.display = "";
    }
    else
    {
        document.getElementById("li_posicionamentoCabos").style.display = "";
        document.getElementById("id_posicionamentoCabos").style.display = "";
    }
    getPosicionamentoList();
    
    //aqui
    if(isAparente())
    {
        if(isUnipolar())
        {
            if(isShowEspacado())
            {
                document.getElementById("id_unipolar_separado").style.display = "";
            }
            
            document.getElementById("id_unipolar_justapostos").style.display = "";
            
            if(isTrifasico())
            {
                document.getElementById("id_unipolar_trifolio").style.display = "";
            }
        }
        else if(isTripolar())
        {
            if(isShowEspacado())
            {
                document.getElementById("id_tripolar_separado").style.display = "";
            }
            document.getElementById("id_tripolar_justapostos").style.display = "";
        }
    }
    else if(isAparenteAr())
    {
        if(isUnipolar())
        {
            document.getElementById("id_unipolar_separado").style.display = "";
            document.getElementById("id_unipolar_justapostos").style.display = "";
            document.getElementById("id_unipolar_trifolio").style.display = "";
        }
        else if(isTripolar())
        {
            document.getElementById("id_tripolar_separado").style.display = "";
            document.getElementById("id_tripolar_justapostos").style.display = "";            
        }
        
    }
    else if(isBancoDutos())
    {
        document.getElementById("id_1CaboDuto").style.display = "";
        document.getElementById("id_3CabosDuto").style.display = "";
    }
    else if(isCanaletaFechada())
    {
        if(isUnipolar())
        {
            document.getElementById("id_unipolar_separado_canaleta").style.display = "";
            document.getElementById("id_unipolar_justapostos_canaleta").style.display = "";
            document.getElementById("id_unipolar_trifolio_canaleta").style.display = "";
        }
        else if(isTripolar())
        {
            document.getElementById("id_tripolar_separado_canaleta").style.display = "";
            document.getElementById("id_tripolar_justapostos_canaleta").style.display = "";
        }
    }
    else if(isDiretamenteEnterrado())
    {
        if(isUnipolar())
        {
            document.getElementById("id_unipolar_separado").style.display = "";
            document.getElementById("id_unipolar_justapostos").style.display = "";
            document.getElementById("id_unipolar_trifolio").style.display = "";
        }
        else if(isTripolar())
        {
            document.getElementById("id_unipolar_separado").style.display = "";
        }
    }
    else if(isEletrodutoSolo())
    {
        if(!isEletrodutoMetalico())
        {
            document.getElementById("id_1CaboDuto").style.display = "";
        }
        document.getElementById("id_3CabosDuto").style.display = "";
    }
    else if(isSuspensa && isSuportes())
    {
        if(isUnipolar())
        {
            if(isShowEspacado())
            {
                document.getElementById("id_unipolar_separado").style.display = "";
            }
            
            document.getElementById("id_unipolar_justapostos").style.display = "";
            
            if(isTrifasico())
            {
                document.getElementById("id_unipolar_trifolio").style.display = "";
            }
        }
        else if(isTripolar())
        {
            if(isShowEspacado())
            {
                document.getElementById("id_tripolar_separado").style.display = "";
            }
            
            document.getElementById("id_tripolar_justapostos").style.display = "";
        }
    }
    else if(isColunaG())
    {
        document.getElementById("id_unipolar_separado").style.display = "";
        document.getElementById("id_unipolar_justapostos").style.display = "";
    }
    else if(isColunaF())
    {
        document.getElementById("id_unipolar_justapostos").style.display = "";
        document.getElementById("id_unipolar_trifolio").style.display = "";
    }
    else if(isExibirCabosDuto())
    {
        document.getElementById("id_1CaboDuto").style.display = "";
        document.getElementById("id_3CabosDuto").style.display = "";
    }
    
    closePopup("localInstalacaoAparente-popup");
    showPopup("possibilidadeCabos-popup");
}

function showPossibilidadeCabos()
{
    escondeDivs();    
    
    alert("Entrou showPossibilidadeCabos");
    var numeroCondutores = $("#conductorNumber").val();
    var possibilidadeInstalacao = $("#possibilidadeInstalacao").val();
    var posicionamentoCabo = $("#posicionamentoCabo").val();
    var nivelTensao = $("#systemVoltage").val();
    
    if(isAparente())
    {
        if(!isCabosNavais())
        {
            if(isMetalQuestion())
            {
                //alert("Eletroduto Metálico ? / NUMERO DE CIRCUITOS POR CAMADA");
                //Eletroduto Metálico ?
                //NUMERO DE CIRCUITOS POR CAMADA
                document.getElementById("li_eletrodutoMetalico").style.display = "";
                document.getElementById("id_eletrodutoMetalico").style.display = "";

                document.getElementById("li_metalQuestion").style.display = ""; 
                document.getElementById("numeroCircuitoCamadas").style.display = "";
                
                $("#numeroCircuitos").html("");
                $("#numeroCircuitos").append(new Option("Selecione","0", false, false));
                $("#numeroCircuitos").append(new Option("1","1", false, false));
                $("#numeroCircuitos").append(new Option("2","2", false, false));
                $("#numeroCircuitos").append(new Option("3","3", false, false));
                $("#numeroCircuitos").append(new Option("4","4", false, false));
                $("#numeroCircuitos").append(new Option("5","5", false, false));
                $("#numeroCircuitos").append(new Option("6","6", false, false));
                $("#numeroCircuitos").append(new Option("7","7", false, false));
                $("#numeroCircuitos").append(new Option("8","8", false, false));
                $("#numeroCircuitos").append(new Option("9","9", false, false));
                $("#numeroCircuitos").append(new Option("10","10", false, false));
                $("#numeroCircuitos").append(new Option("11","11", false, false));
                $("#numeroCircuitos").append(new Option("12","12", false, false));
                $("#numeroCircuitos").append(new Option("13","13", false, false));
                $("#numeroCircuitos").append(new Option("14","14", false, false));
                $("#numeroCircuitos").append(new Option("15","15", false, false));
                $("#numeroCircuitos").append(new Option("16","16", false, false));
                $("#numeroCircuitos").append(new Option("17","17", false, false));
                $("#numeroCircuitos").append(new Option("18","18", false, false));
                $("#numeroCircuitos").append(new Option("19","19", false, false));
                $("#numeroCircuitos").append(new Option("20","20", false, false));
            }
            else if(isUnipolar())
            {
                //alert("NUMERO DE CIRCUITOS POR CAMADA");
                //NUMERO DE CIRCUITOS POR CAMADA
                document.getElementById("li_unipolar").style.display = "";                
                document.getElementById("numeroCircuitoCamadas").style.display = "";
                
                $("#numeroCircuitos").html("");
                $("#numeroCircuitos").append(new Option("Selecione","0", false, false));
                $("#numeroCircuitos").append(new Option("1","1", false, false));
                $("#numeroCircuitos").append(new Option("2","2", false, false));
                $("#numeroCircuitos").append(new Option("3","3", false, false));
                $("#numeroCircuitos").append(new Option("4","4", false, false));
                $("#numeroCircuitos").append(new Option("5","5", false, false));
                $("#numeroCircuitos").append(new Option("6","6", false, false));
                $("#numeroCircuitos").append(new Option("7","7", false, false));
                $("#numeroCircuitos").append(new Option("8","8", false, false));
                $("#numeroCircuitos").append(new Option("9","9", false, false));
                $("#numeroCircuitos").append(new Option("10","10", false, false));
                $("#numeroCircuitos").append(new Option("11","11", false, false));
                $("#numeroCircuitos").append(new Option("12","12", false, false));
                $("#numeroCircuitos").append(new Option("13","13", false, false));
                $("#numeroCircuitos").append(new Option("14","14", false, false));
                $("#numeroCircuitos").append(new Option("15","15", false, false));
                $("#numeroCircuitos").append(new Option("16","16", false, false));
                $("#numeroCircuitos").append(new Option("17","17", false, false));
                $("#numeroCircuitos").append(new Option("18","18", false, false));
                $("#numeroCircuitos").append(new Option("19","19", false, false));
                $("#numeroCircuitos").append(new Option("20","20", false, false));
            }
            else
            {
                //alert("NUMERO DE CIRCUITOS POR CAMADA");
                //NUMERO DE CIRCUITOS POR CAMADA
                document.getElementById("li_num_cabos").style.display = "";                
                document.getElementById("numeroCircuitoCamadas").style.display = "";
                
                $("#numeroCircuitos").html("");
                $("#numeroCircuitos").append(new Option("Selecione","0", false, false));
                $("#numeroCircuitos").append(new Option("1","1", false, false));
                $("#numeroCircuitos").append(new Option("2","2", false, false));
                $("#numeroCircuitos").append(new Option("3","3", false, false));
                $("#numeroCircuitos").append(new Option("4","4", false, false));
                $("#numeroCircuitos").append(new Option("5","5", false, false));
                $("#numeroCircuitos").append(new Option("6","6", false, false));
                $("#numeroCircuitos").append(new Option("7","7", false, false));
                $("#numeroCircuitos").append(new Option("8","8", false, false));
                $("#numeroCircuitos").append(new Option("9","9", false, false));
                $("#numeroCircuitos").append(new Option("10","10", false, false));
                $("#numeroCircuitos").append(new Option("11","11", false, false));
                $("#numeroCircuitos").append(new Option("12","12", false, false));
                $("#numeroCircuitos").append(new Option("13","13", false, false));
                $("#numeroCircuitos").append(new Option("14","14", false, false));
                $("#numeroCircuitos").append(new Option("15","15", false, false));
                $("#numeroCircuitos").append(new Option("16","16", false, false));
                $("#numeroCircuitos").append(new Option("17","17", false, false));
                $("#numeroCircuitos").append(new Option("18","18", false, false));
                $("#numeroCircuitos").append(new Option("19","19", false, false));
                $("#numeroCircuitos").append(new Option("20","20", false, false));
            }

            if(isColunaCEF())
            {
                //Informe o número de camadas
                if(isEletrodutoOrMoldura())
                {
                    //alert("Informe o número de camadas: isEletrodutoOrMoldura");
                    document.getElementById("li_numeroCamadas").style.display = "";                    
                    document.getElementById("id_numeroCamadas").style.display = "";
                    
                    $("#numeroCamadas").html("");
                    $("#numeroCamadas").append(new Option("Selecione","0", false, false));
                    $("#numeroCamadas").append(new Option("1","1", false, false));
                    $('#numeroCamadas option[value="1"]').attr({ selected : "selected" });
                }
                else
                {
                    //alert("Informe o número de camadas: isEletrodutoOrMoldura else");
                    document.getElementById("li_numeroCamadas").style.display = "";                    
                    document.getElementById("id_numeroCamadas").style.display = "";
                    
                    $("#numeroCamadas").html("");
                    $("#numeroCamadas").append(new Option("Selecione","0", false, false));
                    $("#numeroCamadas").append(new Option("1","1", false, false));
                    $("#numeroCamadas").append(new Option("2","2", false, false));
                    $("#numeroCamadas").append(new Option("3","3", false, false));
                    $("#numeroCamadas").append(new Option("4","4", false, false));
                    $("#numeroCamadas").append(new Option("5","5", false, false));
                    $("#numeroCamadas").append(new Option("6","6", false, false));
                    $("#numeroCamadas").append(new Option("7","7", false, false));
                    $("#numeroCamadas").append(new Option("8","8", false, false));
                    $("#numeroCamadas").append(new Option("9","9", false, false));
                }
            }
        }
        else //CABOS NAVAIS
        {
            //alert("Número de circuitos ou cabos multipolares agrupados em feixe");
            //Número de circuitos ou cabos multipolares agrupados em feixe
            document.getElementById("li_numeroCircuitos_naval").style.display = "";            
            document.getElementById("numeroCircuitoCamadas").style.display = "";
            
            $("#numeroCircuitos").html("");
            $("#numeroCircuitos").append(new Option("Selecione","0", false, false));
            $("#numeroCircuitos").append(new Option("1","1", false, false));
            $("#numeroCircuitos").append(new Option("2","2", false, false));
            $("#numeroCircuitos").append(new Option("3","3", false, false));
            $("#numeroCircuitos").append(new Option("4","4", false, false));
            $("#numeroCircuitos").append(new Option("5","5", false, false));
            $("#numeroCircuitos").append(new Option("6","6", false, false));
            $("#numeroCircuitos").append(new Option("7","7", false, false));
            $("#numeroCircuitos").append(new Option("8","8", false, false));
            $("#numeroCircuitos").append(new Option("9","9", false, false));
            $("#numeroCircuitos").append(new Option("10","10", false, false));
            $("#numeroCircuitos").append(new Option("11","11", false, false));
            $("#numeroCircuitos").append(new Option("12","12", false, false));
            $("#numeroCircuitos").append(new Option("13","13", false, false));
            $("#numeroCircuitos").append(new Option("14","14", false, false));
            $("#numeroCircuitos").append(new Option("15","15", false, false));
            $("#numeroCircuitos").append(new Option("16","16", false, false));
            $("#numeroCircuitos").append(new Option("17","17", false, false));
            $("#numeroCircuitos").append(new Option("18","18", false, false));
            $("#numeroCircuitos").append(new Option("19","19", false, false));
            $("#numeroCircuitos").append(new Option("20","20", false, false));
        }
        
        closePopup("localInstalacaoAparente-popup");
        showPopup("possibilidadeCabos-popup");
    }
    
    if(isEmbutida())
    {
        if(isMetalQuestion())
        {
            if(isCabosNavais())
            {
                //Eletroduto ou Eletrocalha Metálica?
                document.getElementById("li_eletrodutoMetalico_embutida_naval").style.display = "";                
                document.getElementById("id_eletrodutoMetalico").style.display = "";
            }
            else
            {
                //Eletroduto Metálico ?
                document.getElementById("li_eletrodutoMetalico").style.display = "";                                
                document.getElementById("id_eletrodutoMetalico").style.display = "";
            }
        }
        
        //Informar número de circuitos ou cabos multipolares agrupados em feixe ou dentro do eletroduto
        document.getElementById("li_metalQuestion").style.display = "";
        document.getElementById("numeroCircuitoCamadas").style.display = "";
        
        $("#numeroCircuitos").html("");
        $("#numeroCircuitos").append(new Option("Selecione","0", false, false));
        $("#numeroCircuitos").append(new Option("1","1", false, false));
        $("#numeroCircuitos").append(new Option("2","2", false, false));
        $("#numeroCircuitos").append(new Option("3","3", false, false));
        $("#numeroCircuitos").append(new Option("4","4", false, false));
        $("#numeroCircuitos").append(new Option("5","5", false, false));
        $("#numeroCircuitos").append(new Option("6","6", false, false));
        $("#numeroCircuitos").append(new Option("7","7", false, false));
        $("#numeroCircuitos").append(new Option("8","8", false, false));
        $("#numeroCircuitos").append(new Option("9","9", false, false));
        $("#numeroCircuitos").append(new Option("10","10", false, false));
        $("#numeroCircuitos").append(new Option("11","11", false, false));
        $("#numeroCircuitos").append(new Option("12","12", false, false));
        $("#numeroCircuitos").append(new Option("13","13", false, false));
        $("#numeroCircuitos").append(new Option("14","14", false, false));
        $("#numeroCircuitos").append(new Option("15","15", false, false));
        $("#numeroCircuitos").append(new Option("16","16", false, false));
        $("#numeroCircuitos").append(new Option("17","17", false, false));
        $("#numeroCircuitos").append(new Option("18","18", false, false));
        $("#numeroCircuitos").append(new Option("19","19", false, false));
        $("#numeroCircuitos").append(new Option("20","20", false, false));
        
        if(isCabosEnergia())
        {
            //Número de eletrodutos
            document.getElementById("li_numeroCamadas_embutida").style.display = "";            
            document.getElementById("id_numeroCamadas").style.display = "";

            if(!isAlvenaria())
            {
                alert("Saiu isAlvenaria");
                $("#numeroCamadas").html("");
                $("#numeroCamadas").append(new Option("Selecione","0", false, false));
                $("#numeroCamadas").append(new Option("1","1", false, false));
                $('#numeroCamadas option[value="1"]').attr({ selected : "selected" });
            }
            else
            {
                $("#numeroCamadas").html("");
                $("#numeroCamadas").append(new Option("Selecione","0", false, false));
                $("#numeroCamadas").append(new Option("1","1", false, false));
                $("#numeroCamadas").append(new Option("2","2", false, false));
                $("#numeroCamadas").append(new Option("3","3", false, false));
                $("#numeroCamadas").append(new Option("4","4", false, false));
                $("#numeroCamadas").append(new Option("5","5", false, false));
                $("#numeroCamadas").append(new Option("6","6", false, false));
                $("#numeroCamadas").append(new Option("7","7", false, false));
                $("#numeroCamadas").append(new Option("8","8", false, false));
                $("#numeroCamadas").append(new Option("9","9", false, false));
            }
        }
        
        closePopup("localInstalacaoAparente-popup");
        showPopup("possibilidadeCabos-popup");
    }
    
    if(isSubterranea())
    {
        if(isEletroduto())
        {
            if(isMetalQuestion())
            {
                //Eletroduto Metálico ?
                document.getElementById("li_eletrodutoMetalico").style.display = "";
                document.getElementById("id_eletrodutoMetalico").style.display = "";
            }
        }
        
        if(isDiretamenteEnterradosOuEletroduto())
        {
            if(isEletroduto())
            {
                //Informar número de circuitos ou cabos multipolares agrupados em feixe ou dentro do eletroduto
                document.getElementById("li_metalQuestion").style.display = "";
            }
            else
            {
                //Informe o número de circuitos
                document.getElementById("li_numeroCircuitos").style.display = "";
            }
            document.getElementById("numeroCircuitoCamadas").style.display = "";
            
            $("#numeroCircuitos").html("");
            $("#numeroCircuitos").append(new Option("Selecione","0", false, false));
            $("#numeroCircuitos").append(new Option("1","1", false, false));
            $("#numeroCircuitos").append(new Option("2","2", false, false));
            $("#numeroCircuitos").append(new Option("3","3", false, false));
            $("#numeroCircuitos").append(new Option("4","4", false, false));
            $("#numeroCircuitos").append(new Option("5","5", false, false));
            $("#numeroCircuitos").append(new Option("6","6", false, false));
            
            
            if(isEletroduto())
            {
                //Informe a distância entre eletrodutos
                document.getElementById("li_distancia_eletrodutos").style.display = "";
            }
            else
            {
                //Informe a distância entre os cabos
                document.getElementById("li_distancia_cabos").style.display = "";
            }
            
            document.getElementById("id_distanciaEntreCabos").style.display = "";
            getComboDistanciaEntreCabos();
        }
        else
        {
            //Informar número de circuitos ou cabos multipolares agrupados em feixe ou dentro do eletroduto
            document.getElementById("li_metalQuestion").style.display = "";
            document.getElementById("numeroCircuitoCamadas").style.display = "";
            
            $("#numeroCircuitos").html("");
            $("#numeroCircuitos").append(new Option("Selecione","0", false, false));
            $("#numeroCircuitos").append(new Option("1","1", false, false));
            $("#numeroCircuitos").append(new Option("2","2", false, false));
            $("#numeroCircuitos").append(new Option("3","3", false, false));
            $("#numeroCircuitos").append(new Option("4","4", false, false));
            $("#numeroCircuitos").append(new Option("5","5", false, false));
            $("#numeroCircuitos").append(new Option("6","6", false, false));
            $("#numeroCircuitos").append(new Option("7","7", false, false));
            $("#numeroCircuitos").append(new Option("8","8", false, false));
            $("#numeroCircuitos").append(new Option("9","9", false, false));
            $("#numeroCircuitos").append(new Option("10","10", false, false));
            $("#numeroCircuitos").append(new Option("11","11", false, false));
            $("#numeroCircuitos").append(new Option("12","12", false, false));
            $("#numeroCircuitos").append(new Option("13","13", false, false));
            $("#numeroCircuitos").append(new Option("14","14", false, false));
            $("#numeroCircuitos").append(new Option("15","15", false, false));
            $("#numeroCircuitos").append(new Option("16","16", false, false));
            $("#numeroCircuitos").append(new Option("17","17", false, false));
            $("#numeroCircuitos").append(new Option("18","18", false, false));
            $("#numeroCircuitos").append(new Option("19","19", false, false));
            $("#numeroCircuitos").append(new Option("20","20", false, false));
            
            if(isColunaCEF())
            {
                if(isCanaletaVentida())
                {
                    //Número de eletrodutos
                    document.getElementById("li_numeroCamadas_embutida").style.display = "";
                }
                else
                {
                    //Informe o número de camadas
                    document.getElementById("li_numeroCamadas").style.display = "";
                }
                document.getElementById("id_numeroCamadas").style.display = "";
                
                $("#numeroCamadas").html("");
                $("#numeroCamadas").append(new Option("Selecione","0", false, false));
                $("#numeroCamadas").append(new Option("1","1", false, false));
                $('#numeroCamadas option[value="1"]').attr({ selected : "selected" });
            }
            
            if(isExibirPosicionamentoCabosSeparadoTrifolio())
            {
                document.getElementById("li_posicionamentoCabos").style.display = "";
                document.getElementById("id_posicionamentoCabos").style.display = "";
                getPosicionamentoSeparadosTrifolio();
            }
            
            if(isExibirPosicionamentoCabosSeparadoJustapostos())
            {
                document.getElementById("li_posicionamentoCabos").style.display = "";
                document.getElementById("id_posicionamentoCabos").style.display = "";
                getPosicionamentoJustapostaSeparada();
            }
        }
        
        closePopup("localInstalacaoAparente-popup");
        showPopup("possibilidadeCabos-popup");
    }
    
    if(isSuspensa())
    {
        //PAREI EM <ww:if test="suspensa">
        //INSERIR ROTINA PARA ESCONDER TODOS OS CAMPOS TODA VEZ QUE VOLTA PARA SELEÇÃO DE TIPO
        if(isEletroduto())
        {
            if(isMetalQuestion())
            {
                //Eletroduto Metálico ?
                document.getElementById("li_eletrodutoMetalico").style.display = "";
                document.getElementById("id_eletrodutoMetalico").style.display = "";
            }
        }
        
        if(isSuportes())
        {
            //Informe o número de camadas
            document.getElementById("li_numeroCamadas").style.display = "";
            document.getElementById("id_numeroCamadas").style.display = "";
            
            $("#numeroCamadas").html("");
            $("#numeroCamadas").append(new Option("Selecione","0", false, false));
            $("#numeroCamadas").append(new Option("1","1", false, false));
            $("#numeroCamadas").append(new Option("2","2", false, false));
            $("#numeroCamadas").append(new Option("3","3", false, false));
            $("#numeroCamadas").append(new Option("4","4", false, false));
            $("#numeroCamadas").append(new Option("5","5", false, false));
            $("#numeroCamadas").append(new Option("6","6", false, false));
            $("#numeroCamadas").append(new Option("7","7", false, false));
            $("#numeroCamadas").append(new Option("8","8", false, false));
            $("#numeroCamadas").append(new Option("9","9", false, false));
        }
        
        if(isUnipolar())
        {
            //Informe o número de circuitos por camada
            document.getElementById("li_unipolar").style.display = "";
        }
        else
        {
            //Informe o número de cabos multipolar por camada
            document.getElementById("li_num_cabos").style.display = "";            
        }
        document.getElementById("numeroCircuitoCamadas").style.display = "";
        
        $("#numeroCircuitos").html("");
        $("#numeroCircuitos").append(new Option("Selecione","0", false, false));
        $("#numeroCircuitos").append(new Option("1","1", false, false));
        $("#numeroCircuitos").append(new Option("2","2", false, false));
        $("#numeroCircuitos").append(new Option("3","3", false, false));
        $("#numeroCircuitos").append(new Option("4","4", false, false));
        $("#numeroCircuitos").append(new Option("5","5", false, false));
        $("#numeroCircuitos").append(new Option("6","6", false, false));
        $("#numeroCircuitos").append(new Option("7","7", false, false));
        $("#numeroCircuitos").append(new Option("8","8", false, false));
        $("#numeroCircuitos").append(new Option("9","9", false, false));
        $("#numeroCircuitos").append(new Option("10","10", false, false));
        $("#numeroCircuitos").append(new Option("11","11", false, false));
        $("#numeroCircuitos").append(new Option("12","12", false, false));
        $("#numeroCircuitos").append(new Option("13","13", false, false));
        $("#numeroCircuitos").append(new Option("14","14", false, false));
        $("#numeroCircuitos").append(new Option("15","15", false, false));
        $("#numeroCircuitos").append(new Option("16","16", false, false));
        $("#numeroCircuitos").append(new Option("17","17", false, false));
        $("#numeroCircuitos").append(new Option("18","18", false, false));
        $("#numeroCircuitos").append(new Option("19","19", false, false));
        $("#numeroCircuitos").append(new Option("20","20", false, false));
        
    }
    
    if(isEspacoConstrucao())
    {
        if(isMetalQuestion())
        {
            //Eletroduto Metálico?
            document.getElementById("li_eletrodutoMetalico").style.display = "";
            document.getElementById("id_eletrodutoMetalico").style.display = "";            
        }
        
        if(isUnipolar())
        {
            //Informe o número de circuitos
            document.getElementById("li_numeroCircuitos").style.display = "";
        }
        else
        {
            //Informe o número de circuitos ou cabos multipolares agrupados em feixe ou dentro do eletroduto
            document.getElementById("li_metalQuestion").style.display = "";
        }
        document.getElementById("numeroCircuitoCamadas").style.display = "";
        
        $("#numeroCircuitos").html("");
        $("#numeroCircuitos").append(new Option("Selecione","0", false, false));
        $("#numeroCircuitos").append(new Option("1","1", false, false));
        $("#numeroCircuitos").append(new Option("2","2", false, false));
        $("#numeroCircuitos").append(new Option("3","3", false, false));
        $("#numeroCircuitos").append(new Option("4","4", false, false));
        $("#numeroCircuitos").append(new Option("5","5", false, false));
        $("#numeroCircuitos").append(new Option("6","6", false, false));
        
        if(isColunaCEF())
        {
            document.getElementById("li_numeroCamadas").style.display = "";
            document.getElementById("id_numeroCamadas").style.display = "";
            
            $("#numeroCamadas").html("");
            $("#numeroCamadas").append(new Option("Selecione","0", false, false));
            $("#numeroCamadas").append(new Option("1","1", false, false));
            $('#numeroCamadas option[value="1"]').attr({ selected : "selected" });
        }
        
        if(isAntiChama() || isAfitox750() || isDiretamente())
        {
            //relacaoCaboDuto
            //Relação de tamanho Cabo X Duto?
 
            document.getElementById("li_relacaoCaboDuto").style.display = "";
            document.getElementById("id_relacaoCaboDuto").style.display = "";
            getComboRelacaoCaboXDuto();
        }
    }
    
    if(isEletrodutoSolo())
    {
        if(isMetalFixed())
        {
            //Eletroduto Metálico?
            document.getElementById("li_eletrodutoMetalico").style.display = "";
            document.getElementById("id_eletrodutoMetalico").style.display = "";
            
            $("#eletrodutoMetalico").html("");
            $("#eletrodutoMetalico").append(new Option("Selecione","0", false, false));
            
            if(isEletrodutoMetalico())
            {
                $("#eletrodutoMetalico").append(new Option("1","1", false, false));
                $('#eletrodutoMetalico option[value="1"]').attr({ selected : "selected" }); 
            }
            else
            {
                $("#eletrodutoMetalico").append(new Option("2","2", false, false));
                $('#eletrodutoMetalico option[value="2"]').attr({ selected : "selected" }); 
            }
        }
        else
        {
            //Eletroduto Metálico ? -- SEM CONDICIONAL
            document.getElementById("li_eletrodutoMetalico").style.display = "";
            document.getElementById("id_eletrodutoMetalico").style.display = "";
        }
        
        //Informe o número de circuitos
        document.getElementById("li_numeroCircuitos").style.display = "";
        document.getElementById("numeroCircuitoCamadas").style.display = "";
        
        $("#numeroCircuitos").html("");
        $("#numeroCircuitos").append(new Option("Selecione","0", false, false));
        $("#numeroCircuitos").append(new Option("1","1", false, false));
        $("#numeroCircuitos").append(new Option("2","2", false, false));
        $("#numeroCircuitos").append(new Option("3","3", false, false));
        $("#numeroCircuitos").append(new Option("4","4", false, false));
        $("#numeroCircuitos").append(new Option("5","5", false, false));
        $("#numeroCircuitos").append(new Option("6","6", false, false));
        
        if(isEletrodutoSolo() || isEletroduto())
        {
            //Informe a distância entre os eletrodutos
            document.getElementById("li_distancia_eletrodutos").style.display = "";
        }
        else
        {
            //Informe a distância entre os cabos
            document.getElementById("li_distancia_cabos").style.display = "";
        }
        document.getElementById("id_distanciaEntreCabos").style.display = "";
        getComboDistanciaEntreCabos();
    }
}