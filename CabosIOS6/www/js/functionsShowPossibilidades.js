function showResultadoCalculo()
{
    var dimensionamento = getDimensionamentoTabelaUtil();
    
    //DADOS DO PROJETO
    $("#dados_projeto_nome").html($("#username").val());
    $("#dados_projeto_empresa").html($("#company").val());
    $("#dados_projeto_nome_projeto").html($("#projectName").val());
    $("#dados_projeto_data").html();
    $("#dados_projeto_hora").html();
    
    //DADOS SELECIONADOS
    //$("#potenciaAparente").val()
    //$("#fixarInformacaoCurto option:selected").text()
    $("#dados_entrada_tipo_produto").html($("#cableList option:selected").text());
    $("#dados_entrada_frequencia").html($("#frequency").val());
    $("#dados_entrada_nivelTensao").html($("#systemVoltage option:selected").text());
    $("#dados_entrada_materialCondutor").html($("#cableMaterial option:selected").text());
    $("#dados_entrada_numeroCondutores").html($("#conductorNumber option:selected").text());
    $("#dados_entrada_tensaoServico_unidadeTensao").html($("#serviceVoltage").val() + ' ' + $("#voltageUnit option:selected").text());
    $("#dados_entrada_tensaoIsolamento").html($("#isolationVoltage option:selected").text());
    //$("#dados_entrada_imagem_cabo").html();
    getImageCabo();
    $("#dados_entrada_utilizacaoCircuito").html($("#circuitUsage option:selected").text());
    $("#dados_entrada_sistema").html($("#system option:selected").text());
    $("#dados_entrada_temperaturaMaximaCondutor").html($("#maximumTemperature option:selected").text());
    $("#dados_entrada_caboSelecionado").html($("#caboSelecionado option:selected").text());
    $("#dados_entrada_possibilidadeInstalacao").html($("#possibilidadeInstalacao option:selected").text());
    $("#dados_entrada_temperaturaArSolo").html($("#temperaturaArSolo option:selected").text());
    $("#dados_entrada_comprimentoCircuito").html($("#comprimentoCircuito").val());
    $("#dados_entrada_quedaTensaoMaxima").html($("#quedaTensaoMaxima").val());
    $("#dados_entrada_fatorPotencia").html($("#fatorPotencia").val());
    $("#dados_entrada_correnteProjeto").html($("#correnteProjeto").val());
    $("#dados_entrada_potenciaAparente").html($("#potenciaAparente").val());
    $("#dados_entrada_secao_fixada").html($("#fixarSecaoCondutor option:selected").text());
    $("#dados_entrada_num_condutores_fixado").html($("#fixarNumeroCabos option:selected").text());
    $("#dados_entrada_corrente_curto_circuito_condutor_fixada").html($("#fixarInformacaoCurto option:selected").text());
    
    //RESULTADOS
    if(calculoExceptionMessage != "")
    {
        $("#resultado_msg_erro").html(calculoExceptionMessage);
        $("#ul_resultado").html("");
    }
    else
    {
        $("#resultado_msg_erro").html("");
        
        $("#dados_resultado_numeroCondutores_secaoNominalCondutor").html($("#conductorNumber").val() + " x " + getSecaoNominalCondutor());
        $("#dados_resultado_numeroCabos").html(numeroCabos);
        $("#dados_resultado_criterioDimensionamento").html(getCriterioDimensionamento());        
        $("#label_resultado_capacidade_total").html("<strong>Capacidade total de condução de corrente (corrente de projeto = " + $("#correnteProjeto").val() + "A):</strong><br>");
        $("#dados_resultado_capacidadeConducaoCorrente").html(getCapacidadeConducaoCorrenteString());
        
        if(getFatorCorrecaoTemperaturaAmbiente()!="1")
        {
            //Fatores de correção utilizados (Temperatura Ambiente):
            document.getElementById("if_calculo_fatorCorrecaoTemperaturaAmbiente").style.display = "";
            document.getElementById("dados_resultado_fatorCorrecaoTemperaturaAmbiente").style.display = "";
            $("#dados_resultado_fatorCorrecaoTemperaturaAmbiente").html(getFatorCorrecaoTemperaturaAmbiente());
        }
        
        if(getFatorCorrecaoAgrupamento()!="1")
        {
            document.getElementById("if_calculo_fatorCorrecaoAgrupamento").style.display = "";
            document.getElementById("dados_resultado_fatorCorrecaoAgrupamento").style.display = "";
            $("#dados_resultado_fatorCorrecaoAgrupamento").html(getFatorCorrecaoAgrupamento());
        }
        
        if(getFatorCorrecaoResistividadeTermica()!="1")
        {
            document.getElementById("if_calculo_fatorCorrecaoResistividadeTermica").style.display = "";
            document.getElementById("dados_resultado_fatorCorrecaoResistividadeTermica").style.display = "";
            $("#dados_resultado_fatorCorrecaoResistividadeTermica").html(getFatorCorrecaoResistividadeTermica());
        }
        
        if(getFatorCorrecaoCanaleta()!="1")
        {
            document.getElementById("if_calculo_fatorCorrecaoCanaleta").style.display = "";
            document.getElementById("dados_resultado_fatorCorrecaoCanaleta").style.display = "";
            $("#dados_resultado_fatorCorrecaoCanaleta").html(getFatorCorrecaoCanaleta());
        }
        
        if(hasInstalacaoFinalProposta())
        {
            document.getElementById("if_calculo_disposicao_instalacao_final_proposta").style.display = "";
            document.getElementById("if_dados_resultado_numeroCircuitos").style.display = "";
            document.getElementById("dados_resultado_numeroCircuitos").style.display = "";
            document.getElementById("if_dados_resultado_numeroCamadasBandejas").style.display = "";
            document.getElementById("dados_resultado_numeroCamadasBandejas").style.display = "";
            $("#dados_resultado_numeroCircuitos").html(getNumeroCircuitosRelatorio());
            $("#dados_resultado_numeroCamadasBandejas").html(getNumeroCamadasBandejasRelatorio());            
        }
        
        $("#dados_resultado_reatanciaCapacitiva").html(getXcReatanciaCapacitiva() + " ohm.km");
        $("#dados_resultado_reatanciaIndutiva").html(getXL() + " ohm.km");
        $("#dados_resultado_resistenciaEletricaCA").html(getResistenciaEletricaCAString() + " ohm.km");
        $("#dados_resultado_reatanciaCapacitiva").html(getNumeroCircuitosRelatorio() + " ohm.km");
        $("#dados_resultado_impedanciaSequenciaPosNeg").html(getImpedancia() + " ohm.km");
        $("#dados_resultado_quedaTensao").html(getQuedaTensaoString() + " %");
        $("#dados_resultado_maximaCorrenteCC").html(getMaximaCorrenteCCString() + " kA");
        $("#dados_resultado_tempoCC").html(getTempoCCString() + " s");
        $("#dados_resultado_integralJouleCondutor").html(getIntegralJouleBlindagemString() + " A&sup2;s");
        
        if(dimensionamento.isMediaTensao())
        {
            document.getElementById("if_dados_resultado_integralJouleBlindagem").style.display = "";
            document.getElementById("dados_resultado_integralJouleBlindagem").style.display = "";
            $("#dados_resultado_integralJouleBlindagem").html(getNumeroCircuitosRelatorio() + " A&sup2;s");
            
            if(hasDimensionamentoEconomico())
            {
                document.getElementById("if_dados_resultado_dimensionamento_economico").style.display = "";
                document.getElementById("if_dados_resultado_dimensionamento_economico_texto").style.display = "";
                document.getElementById("if_dados_resultado_numero_condutores_fase_secao").style.display = "";
                document.getElementById("label_resultado_numeroCabos_dimensionamentoEconomico").style.display = "";
                $("#label_resultado_numeroCabos_dimensionamentoEconomico").html($("#numeroCabos").val() + " x " + getSe());
            }
            else if(hasDimensionamentoEconomicoError())
            {
                document.getElementById("if_dados_resultado_dimensionamento_economico_error").style.display = "";
                document.getElementById("if_dados_resultado_dimensionamento_economico_texto_error").style.display = "";
            }
        }
        
        $("#dados_resultado_alternativo_quedatensao").html("Para esta mesma aplicação, porém com um maior limite térmico no condutor -" + $("#maximumTemperature").val() + "&deg;C, a FICAP recomenda também a sua linha de produtos tipo " + $("#cabosAlternativos").val() + ".");
        $("#dados_resultado_alternativo_quedatensao_else").html("Para esta mesma opção de instalação, a FICAP possui as linhas de cabos " + $("#cabosAlternativos").val() + " com maior capacidade de condução de corrente.");
    }
    
}

function showDeterminacaoCaboNaval()
{
    escondeDivs();
    
    if(isBaixaTensao())
    {
        //a) Quanto à proteção metálica:<br/> Construção do cabo
        document.getElementById("li_naval_protecao_metalica").style.display = "";
    }
    else
    {
        //Material da isolação
        document.getElementById("li_naval_material_isolacao").style.display = "";
    }
    document.getElementById("id_tipoCabo").style.display = "";
    var nivelTensao = $("#systemVoltage").val();
    getTiposCabo(nivelTensao);
    
    if(isBaixaTensao())
    {
        document.getElementById("li_naval_baixa_desempenho_incendio").style.display = "";
        document.getElementById("id_aplicacao").style.display = "";
    }
    var nivelTensao = $("#systemVoltage").val(); //dimensionamento.nivelTensao
    getAplicacoes(nivelTensao);
    
    showPopup("specification-popup");
}

function showInformacaoCurto()
{
    escondeDivs();
    
    //Corrente de Curto-Circuito Trifásica do Sistema
    document.getElementById("li_corrente_curto_circuito").style.display = "";
    //Tempo de Atuação da Proteção na Condição de Curto-Circuito
    document.getElementById("li_tempo_atuacao_curto_circuito").style.display = "";
    
    showPopup("possibilidadeCabos-popup");
}

function showFixarNumeroCabos()
{
    escondeDivs();
    
    //Número de condutores por fase
    document.getElementById("li_numero_condutores_fase").style.display = "";
    document.getElementById("id_numeroCabos").style.display = "";
    $("#numeroCabos").html("");
    $("#numeroCabos").append(new Option("Selecione","0", false, false));
    $("#numeroCabos").append(new Option("1","1", false, false));
    $("#numeroCabos").append(new Option("2","2", false, false));
    $("#numeroCabos").append(new Option("3","3", false, false));
    $("#numeroCabos").append(new Option("4","4", false, false));
    $("#numeroCabos").append(new Option("5","5", false, false));
    $("#numeroCabos").append(new Option("6","6", false, false));
    $("#numeroCabos").append(new Option("7","7", false, false));
    $("#numeroCabos").append(new Option("8","8", false, false));
    $("#numeroCabos").append(new Option("9","9", false, false));
    $("#numeroCabos").append(new Option("10","10", false, false));
    
    showPopup("possibilidadeCabos-popup");
}

function showFixarSecao()
{
    escondeDivs();
    
    //Seção do condutor
    document.getElementById("li_secao_condutor").style.display = "";
    document.getElementById("id_secaoCondutor").style.display = "";
    getSecaoCondutorList();
    
    showPopup("possibilidadeCabos-popup");
}

function showEletrodutoAr()
{
    escondeDivs();
    
    //Posicionamento dos Eletrodutos
    document.getElementById("li_posicionamento_dos_eletrodutos").style.display = "";
    document.getElementById("id_posicionamentoCabos").style.display = "";
    getPosicionamentoEletrodutoAr();
    
    alert("Depois getPosicionamentoEletrodutoAr");
    
    if(isUnipolarEletroduoAr())
    {
        document.getElementById("id_eletroduto_ar_espacado").style.display = "";
    }
    else
    {
        document.getElementById("id_eletroduto_ar_espacado_tripolar").style.display = "";
    }
    
    if(isUnipolarEletroduoAr())
    {
        document.getElementById("id_eletroduto_ar_justapostos").style.display = "";
    }
    else
    {
        document.getElementById("id_eletroduto_ar_justapostos_tripolar").style.display = "";
    }
    
    showPopup("possibilidadeCabos-popup");
}

function showCabosSolo()
{
    escondeDivs();
    
    //Número de circuitos
    document.getElementById("li_numero_circuitos").style.display = "";
    document.getElementById("id_posicaoCabos").style.display = "";
    getPosicoesCircuito();

    if(isUnipolar())
    {
        if(isSeparados())
        {
            document.getElementById("id_Unipolar_Separados_1Circ").style.display = "";
            document.getElementById("id_Unipolar_Separados_2Circ").style.display = "";
            document.getElementById("id_Unipolar_Separados_3Circ").style.display = "";
        }
        else if(isJustapostos())
        {
            document.getElementById("id_Unipolar_Justapostos_1Circ").style.display = "";
            document.getElementById("id_Unipolar_Justapostos_2Circ").style.display = "";
            document.getElementById("id_Unipolar_Justapostos_3Circ").style.display = "";
        }
        else if(isTrifolio())
        {
            document.getElementById("id_Unipolar_Trifolio_1Circ").style.display = "";
            document.getElementById("id_Unipolar_Trifolio_2Circ").style.display = "";
            document.getElementById("id_Unipolar_Trifolio_3Circ").style.display = "";
            document.getElementById("id_Unipolar_Trifolio_4Circ").style.display = "";
        }
    }
    else if(isTripolar())
    {
        if(isSeparados())
        {
            document.getElementById("id_Tripolar_Separados_1Circ").style.display = "";
            document.getElementById("id_Tripolar_Separados_2Circ").style.display = "";
            document.getElementById("id_Tripolar_Separados_3Circ").style.display = "";
            document.getElementById("id_Tripolar_Separados_4Circ").style.display = "";
        }
    }
    
    //A profundidade é de
    document.getElementById("li_profundidade").style.display = "";
    if(isJustapostos() && !isUnipolar())
    {
        //70
        document.getElementById("li_profundidade_70").style.display = "";
    }
    else
    {
        //90
        document.getElementById("li_profundidade_90").style.display = "";
    }
    
    //cm e o espaço entre os cabos é
    document.getElementById("li_cm_espaco_entre_cabos").style.display = "";
    if(isDiretamenteEnterrado() && isTripolar())
    {
        //equivalente a "2d".
        document.getElementById("li_equivalente_2d").style.display = "";
    }
    else if(isJustapostos())
    {
        //nulo.
        document.getElementById("li_nulo").style.display = "";
    }
    else if(isTrifolio())
    {
        document.getElementById("li_equivalente_2d").style.display = "";
    }
    else if(isTripolar())
    {
        //de 20cm.
        document.getElementById("li_de_20cm").style.display = "";
    }
    
    showPopup("possibilidadeCabos-popup");
}

function showCanaleta()
{
    escondeDivs();
    
    //Altura da canaleta (h):
    document.getElementById("li_altura_canaleta").style.display = "";
    document.getElementById("id_alturaCanaleta").style.display = "";
    getAlturas();

    //Largura da canaleta (l):
    document.getElementById("li_largura_canaleta").style.display = "";
    document.getElementById("id_larguraCanaleta").style.display = "";
    getLarguras();
    
    document.getElementById("id_canaleta").style.display = "";
    
    showPopup("possibilidadeCabos-popup");
}

function showBancoDutos()
{
    escondeDivs();
    
    //Número de circuitos
    document.getElementById("li_numero_circuitos").style.display = "";
    document.getElementById("id_formacao_Banco_Dutos").style.display = "";
    getFormacoes();
    
    if(!isTripolar())
    {
        if(isSeparados())
        {
            document.getElementById("id_Unipolar_Linear_2x2").style.display = "";
            document.getElementById("id_Unipolar_Linear_2x3").style.display = "";
            document.getElementById("id_Unipolar_Linear_3x3").style.display = "";
        }
        else
        {
            document.getElementById("id_Unipolar_Trifolio_1_Circuito").style.display = "";
            document.getElementById("id_Unipolar_Trifolio_2x2").style.display = "";
            document.getElementById("id_Unipolar_Trifolio_2x3").style.display = "";
            document.getElementById("id_Unipolar_Trifolio_3x3").style.display = "";            
        }
    }
    else if(isTripolar())
    {
        document.getElementById("id_Tripolar_Trifolio_1_Circuito").style.display = "";
        document.getElementById("id_Tripolar_Trifolio_2x2").style.display = "";
        document.getElementById("id_Tripolar_Trifolio_2x3").style.display = "";
        document.getElementById("id_Tripolar_Trifolio_3x3").style.display = "";
    }
    
    if(!isTripolar() && isSeparados())
    {
        document.getElementById("li_banco_dutos_variaveis_1").style.display = "";
    }
    else
    {
        document.getElementById("li_banco_dutos_variaveis_2").style.display = "";
    }
    
    showPopup("possibilidadeCabos-popup");    
}

function showPossibilidadeAparente()
{
    getLocaisInstalacaoAparente();
    //pagina = "instalacaoAparente.sdf" + params + "&sistema=" + sistema + "&numeroCondutores=" + numeroCondutores;
    
    if(isCabosEnergia())
    {
        if(isAntiChama() || isAfitox750())
        {
            document.getElementById("eletroduto").style.display = "";
        }
        else
        {
            if((!isAntiChama()) || (!isAfitox750()))
            {
                document.getElementById("eletroduto").style.display = "";
                document.getElementById("bandeja_perfurada").style.display = "";
                document.getElementById("leito").style.display = "";
                document.getElementById("bandeja_nao_perfurada").style.display = "";
                document.getElementById("suportes").style.display = "";
                document.getElementById("em_parede").style.display = "";
                document.getElementById("teto").style.display = "";
            }
        }
    }
    else
    {
        document.getElementById("bandeja_perfurada").style.display = "";
        document.getElementById("leito").style.display = "";
        document.getElementById("bandeja_nao_perfurada").style.display = "";
        document.getElementById("suportes").style.display = "";
        document.getElementById("em_parede").style.display = "";
        document.getElementById("teto").style.display = "";
    }
    
    showPopup("localInstalacaoAparente-popup");
    //$("#cableConstruction").focus();
}

function showPossibilidadeEmbutida()
{
    getLocaisInstalacaoEmbutida();
    
    if(isNaval())
    {
        //Eletrocalha Fechada
        document.getElementById("id_eletrocalha_fechada").style.display = "";
        
        //Eletroduto Circular
        document.getElementById("id_eletroduto_circular_naval").style.display = "";
    }
    else
    {
        if(isAntiChama() || isAfitox750())
        {
            //Eletroduto em parede termicamente isolante
            document.getElementById("id_eletroduto_parede_term_isolante_noflam").style.display = "";
            
            //Caixilho de porta ou janela
            document.getElementById("id_caixilho_porta_janela").style.display = "";
            
            if(isNaval())
            {
                //Eletroduto circular embutido
                document.getElementById("li_eletroduto_circular_embutido").style.display = "";
            }
            else
            {
                //Eletroduto circular em alvenaria
                document.getElementById("li_eletroduto_circular_alvenaria").style.display = "";
            }
            document.getElementById("id_eletroduto_circular_noflam").style.display = "";
            
            if(isExibirMoldura())
            {
                //Moldura id_moldura
                document.getElementById("id_moldura").style.display = "";
            }
        }
        
        if(!isAntiChama() && !isAfitox750())
        {
            //Eletroduto em parede termicamente isolante
            document.getElementById("id_eletroduto_parede_term_isolante").style.display = "";
            
            //Caixilho de porta ou janela
            document.getElementById("id_caixilho_porta_janela").style.display = "";
            
            if(isNaval())
            {
                //Eletroduto circular embutido
                document.getElementById("li_eletroduto_circular_embutido").style.display = "";
            }
            else
            {
                //Eletroduto circular em alvenaria
                document.getElementById("li_eletroduto_circular_alvenaria").style.display = "";
            }
            document.getElementById("id_eletroduto_circular").style.display = "";
            
            if(getExibirParedeIsolante())
            {
                //Em parede isolante diretamente id_parede_isolante_diretamente
                document.getElementById("id_parede_isolante_diretamente").style.display = "";
            }
            
            if(isNaval())
            {
                //Embutido diretamente
                document.getElementById("li_embutido_diretamente").style.display = "";
            }
            else
            {
                //Em alvenaria diretamente
                document.getElementById("li_em_alvenaria_diretamente").style.display = "";
            }
            document.getElementById("id_embutida_alvenaria").style.display = "";
            
            if(isExibirMoldura())
            {
                //Moldura
                document.getElementById("id_moldura").style.display = "";
            }
        }
    }
    
    showPopup("localInstalacaoAparente-popup");
    //pagina = "instalacaoEmbutida.sdf" + params + "&numeroCondutores=" + numeroCondutores;
}

function showPossibilidadeSubterranea()
{
    getLocaisInstalacaoSubterranea();
    
    //pagina = "instalacaoSubterranea.sdf" + params;
    if(!isAntiChama() && !isAfitox750())
    {
        //Eletroduto
        document.getElementById("id_eletroduto_subterranea").style.display = "";
        
        //Diretamente enterrados
        document.getElementById("id_diretamente_enterrados").style.display = "";
        
        //Canaleta fechada
        document.getElementById("id_canaleta_fechada").style.display = "";
        
        //Canaleta ventilada
        document.getElementById("id_canaleta_ventilada").style.display = "";
    }
    else
    {
        //Canaleta fechada - else
        document.getElementById("id_canaleta_fechada_noflam").style.display = "";
        
        //Canaleta ventilada - else
        document.getElementById("id_canaleta_ventilada_noflam").style.display = "";
    }
    
    //APRESENTA A DIV COM AS IMAGENS DAS POSSIBILIDADES DE INSTALAÇÃO
    showPopup("localInstalacaoAparente-popup");
}

function showPossibilidadeSuspensa()
{
    getLocaisInstalacaoSuspensa();
    
    //Eletrocalha ou perfilado
    document.getElementById("id_eletrocalha_ou_perfilado").style.display = "";
    
    if(isExibirSuporte())
    {
        if(isExibirIsoladores())
        {
            //Isoladores
            document.getElementById("id_isoladores").style.display = "";
        }
    }
    else
    {
        //Suportes
        document.getElementById("id_suportes").style.display = "";
    }
    
    //APRESENTA A DIV COM AS IMAGENS DAS POSSIBILIDADES DE INSTALAÇÃO
    showPopup("localInstalacaoAparente-popup");
}

function showPossibilidadeEspacoConstrucao()
{
    getLocaisInstalacaoEspacoConstrucao();
    
    if(isAntiChama() || isAfitox750())
    {
        //Em eletroduto (Seção circular)
        document.getElementById("id_em_eletroduto_noflam").style.display = "";
    }
    else
    {
        //Diretamente
        document.getElementById("id_diretamente").style.display = "";
        
        //Em eletroduto (Seção circular)
        document.getElementById("id_em_eletroduto").style.display = "";
    }
    
    //APRESENTA A DIV COM AS IMAGENS DAS POSSIBILIDADES DE INSTALAÇÃO
    showPopup("localInstalacaoAparente-popup");
}

function showPosicionamentoCabos()
{
    escondeDivs();
    
    var numeroCondutores = $("#conductorNumber").val();
    var possibilidadeInstalacao = $("#possibilidadeInstalacao").val();
    var posicionamentoCabo = $("#posicionamentoCabo").val();
    var nivelTensao = $("#systemVoltage").val();
    
    if(isEletrodutoSolo() || isBancoDutos())
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

function showResistividadeTermica()
{
    escondeDivs();
    
    //Resistividade térmica do solo
    document.getElementById("li_resistencia_termica_solo").style.display = "";
    document.getElementById("id_resistividadeTermica").style.display = "";
    getResistividade();
    $('#resistividadeTermica option[value="'+_2_5+'"]').attr({ selected : "selected" });
    
    if(isMetalQuestionResistividade())
    {
        //Eletroduto Metálico ?
        document.getElementById("li_eletrodutoMetalico").style.display = "";
        document.getElementById("id_eletrodutoMetalico").style.display = "";
        
        if(isMetalFixedResistividade())
        {
            $("#eletrodutoMetalico").html("");
            $("#eletrodutoMetalico").append(new Option("Selecione","0", false, false));
            
            $("#eletrodutoMetalico").append(new Option("Não","2", false, false));
            $('#eletrodutoMetalico option[value="2"]').attr({ selected : "selected" });
        }
    }
    
    closePopup("localInstalacaoAparente-popup");
    showPopup("possibilidadeCabos-popup");
}

function showOrientacaoCabo()
{
    escondeDivs();
    
    //Posicionamento dos Cabos
    document.getElementById("li_orientacaoCabo").style.display = "";
    document.getElementById("id_orientacaoCabo").style.display = "";
    getOrientacao();
    
    document.getElementById("id_orientacao_horizontal").style.display = "";
    document.getElementById("id_orientacao_vertical").style.display = "";
    
    closePopup("localInstalacaoAparente-popup");
    showPopup("possibilidadeCabos-popup");
}

function showOpcoesInstalacao()
{
    escondeDivs();
    
    if(isEletrodutoAparenteAr())
    {
        if(isSeparados())
        {
            document.getElementById("id_tripolar_separados_bandeja").style.display = "";
        }
        else if(isJustapostos())
        {
            document.getElementById("id_tripolar_justapostos_bandeja").style.display = "";
        }
    }
    else
    {
        if(isUnipolar())
        {
            if(isSeparados())
            {
                document.getElementById("id_unipolar_separados_bandeja").style.display = "";
            }
            else if(isJustapostos())
            {
                document.getElementById("id_unipolar_justapostos_bandeja").style.display = "";
            }
            else if(isTrifolio())
            {
                document.getElementById("id_unipolar_trifolio_bandeja").style.display = "";
            }
        }
        else if(isTripolar())
        {
            if(isSeparados())
            {
                document.getElementById("id_tripolar_separados_bandeja").style.display = "";
            }
            else if(isJustapostos())
            {
                document.getElementById("id_tripolar_justapostos_bandeja").style.display = "";
            }
        }
    }
    
    document.getElementById("id_orientacaoFatorCorrecao").style.display = "";
    
    //Número de bandejas
    document.getElementById("li_numero_de_bandejas").style.display = "";
    document.getElementById("id_numeroBandejas").style.display = "";
    getNumeroBandejas();
    
    if(isEletrodutoAparenteAr())
    {
        //Número de eletrodutos por bandeja
        document.getElementById("li_eletrodutos_bandeja").style.display = "";
    }
    else
    {
        if(isUnipolar())
        {
            //Número de ternas por bandeja
            document.getElementById("li_ternas_bandeja").style.display = "";
        }
        else
        {
            //Número de cabos por bandeja
            document.getElementById("li_cabos_bandeja").style.display = "";
        }
    }
    document.getElementById("id_numeroTernasBandeja").style.display = "";
    getNumeroTernasBandeja("#numeroTernasBandeja");
    
    if(isExibirVertical())
    {
        if(isEletrodutoAparenteAr())
        {
            if(isSeparados())
            {
                document.getElementById("id_tripolar_separados_vertical").style.display = "";
            }
            else if(isJustapostos())
            {
                document.getElementById("id_tripolar_justapostos_vertical").style.display = "";
            }
        }
        else
        {
            if(isUnipolar())
            {
                if(isSeparados())
                {
                    document.getElementById("id_unipolar_separados_vertical").style.display = "";
                }
                else if(isJustapostos())
                {
                    document.getElementById("id_unipolar_justapostos_vertical").style.display = "";
                }
                else if(isTrifolio())
                {
                    document.getElementById("id_unipolar_trifolio_vertical").style.display = "";
                }
            }
            else if(isTripolar())
            {
                if(isSeparados())
                {
                    document.getElementById("id_tripolar_separados_vertical").style.display = "";
                }
                else if(isJustapostos())
                {
                    document.getElementById("id_tripolar_justapostos_vertical").style.display = "";
                }
            }
        }
        document.getElementById("id_orientacaoFatorCorrecaoVertical").style.display = "";
        
        if(isJustapostos() || isCabosNavais())
        {
            //Número de bandejas
            document.getElementById("li_numero_de_bandejas").style.display = "";
            document.getElementById("id_numeroBandejasVertical").style.display = "";
            getNumeroBandejasVertical();
        }
        
        if(isEletrodutoAparenteAr())
        {
            //Número de eletrodutos por bandeja
            document.getElementById("li_eletrodutos_bandeja").style.display = "";
        }
        else
        {
            if(isUnipolar())
            {
                //Número de ternas por bandeja
                document.getElementById("li_ternas_bandeja_vertical").style.display = "";
            }
            else
            {
                //Número de cabos por bandeja
                document.getElementById("li_cabos_bandeja").style.display = "";
            }
        }
        document.getElementById("id_numeroTernasVertical").style.display = "";
        getNumeroTernasVertical();
    }
    
    if(isExibirSemFator())
    {
        if(isEletrodutoAparenteAr())
        {
            document.getElementById("id_tripolar_separados_semCorrecao").style.display = "";
        }
        else
        {
            if(isUnipolar())
            {
                if(isSeparados())
                {
                    document.getElementById("id_unipolar_separados_semCorrecao").style.display = "";
                }
                else if(isTrifolio())
                {
                    document.getElementById("id_unipolar_trifolio_semCorrecao").style.display = "";
                }
            }
            else if(isTripolar())
            {
                if(isSeparados())
                {
                    document.getElementById("id_tripolar_separados_semCorrecao").style.display = "";
                }
            }
        }
        
        document.getElementById("id_orientacaoFatorCorrecaoSemFator").style.display = "";
    }
    
    closePopup("localInstalacaoAparente-popup");
    showPopup("possibilidadeCabos-popup");
}

function showPossibilidadeCabos()
{
    escondeDivs();
    
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
        
        closePopup("localInstalacaoAparente-popup");
        showPopup("possibilidadeCabos-popup");
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
        
        closePopup("localInstalacaoAparente-popup");
        showPopup("possibilidadeCabos-popup");
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
                $("#eletrodutoMetalico").append(new Option("Sim","1", false, false));
                $('#eletrodutoMetalico option[value="1"]').attr({ selected : "selected" });
            }
            else
            {
                $("#eletrodutoMetalico").append(new Option("Não","2", false, false));
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
        
        closePopup("localInstalacaoAparente-popup");
        showPopup("possibilidadeCabos-popup");
    }
}