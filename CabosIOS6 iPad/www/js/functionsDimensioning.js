function getImageCabo()
{
    var cabo = $("#caboSelecionado").val();
    var materialCondutor = $("#cableMaterial").val();
    
    if (cabo == AFITOX_06_1KV)
    {
        //caboControl.src = "img/cabos/CaboAfitox06_1kV.jpg";
        //$(".cable-name").html(CABO[AFITOX_06_1KV].description);
        $("#dados_entrada_imagem_cabo").html("<img class='img-cabo' src='img/cabos/CaboAfitox06_1kV.jpg'></img>");
    }
    else if (cabo == AFITOX_750V)
    {
        //caboControl.src = "img/cabos/CaboAfitox750V.jpg";
        //$(".cable-name").html(CABO[AFITOX_750V].description);
        $("#dados_entrada_imagem_cabo").html("<img class='img-cabo' src='img/cabos/CaboAfitox750V.jpg'></img>");
    }
    else if (cabo == EP_DRY)
    {
        //caboControl.src = "img/cabos/CaboEPDRY.jpg";
        //$(".cable-name").html(CABO[EP_DRY].description);
        $("#dados_entrada_imagem_cabo").html("<img class='img-cabo' src='img/cabos/CaboEPDRY.jpg'></img>");
    }
    else if (cabo == EP_DRY_105C)
    {
        //caboControl.src = "img/cabos/CaboEPDRY105.jpg";
        //$(".cable-name").html(CABO[EP_DRY_105C].description);
        $("#dados_entrada_imagem_cabo").html("<img class='img-cabo' src='img/cabos/CaboEPDRY105.jpg'></img>");
    }
    else if (cabo == FITER_FLEX)
    {
        //caboControl.src = "img/cabos/CaboFiterFlex.jpg";
        //$(".cable-name").html(CABO[FITER_FLEX].description);
        $("#dados_entrada_imagem_cabo").html("<img class='img-cabo' src='img/cabos/CaboFiterFlex.jpg'></img>");
    }
    else if (cabo == FIPEX_BF)
    {
        //caboControl.src = "img/cabos/CaboFiperxBF.jpg";
        //$(".cable-name").html(CABO[FIPEX_BF].description);
        $("#dados_entrada_imagem_cabo").html("<img class='img-cabo' src='img/cabos/CaboFiperxBF.jpg'></img>");
    }
    else if (cabo == NOFLAN_ANTICHAMA_BWF_FLEXIVEL)
    {
        //caboControl.src = "img/cabos/CaboNoflamAntichamaBWFFlexivel.jpg";
        //$(".cable-name").html(CABO[NOFLAN_ANTICHAMA_BWF_FLEXIVEL].description);
        $("#dados_entrada_imagem_cabo").html("<img class='img-cabo' src='img/cabos/CaboNoflamAntichamaBWFFlexivel.jpg'></img>");
    }
    else if (cabo == VINIL)
    {
        if (materialCondutor == COBRE)
        {
            //caboControl.src = "img/cabos/CaboVinil.jpg";
            //$(".cable-name").html(CABO[COBRE].description);
            $("#dados_entrada_imagem_cabo").html("<img class='img-cabo' src='img/cabos/CaboVinil.jpg'></img>");
        }
        else
        {
            //caboControl.src = "img/cabos/CaboVinilAluminio.jpg";
            //$(".cable-name").html("Cabo Vinil Aluminios");
            $("#dados_entrada_imagem_cabo").html("<img class='img-cabo' src='img/cabos/CaboVinilAluminio.jpg'></img>");
        }
        
    }
    else if (cabo == VINIL_FLEXIVEL)
    {
        //caboControl.src = "img/cabos/CaboVinilFlexivel.jpg";
        //$(".cable-name").html(CABO[VINIL_FLEXIVEL].description);
        $("#dados_entrada_imagem_cabo").html("<img class='img-cabo' src='img/cabos/CaboVinilFlexivel.jpg'></img>");
    }
    else if (cabo == AFITOX_SM_BC)
    {
        //caboControl.src = "img/cabos/CaboAfitoxSM.jpg";
        //$(".cable-name").html(CABO[AFITOX_SM_BC].description);
        $("#dados_entrada_imagem_cabo").html("<img class='img-cabo' src='img/cabos/CaboAfitoxSM.jpg'></img>");
    }
    else if (cabo == AFITOX_XPBC)
    {
        //caboControl.src = "img/cabos/CaboAfitoxXP_06_1kV.jpg";
        //$(".cable-name").html(CABO[AFITOX_XPBC].description);
        $("#dados_entrada_imagem_cabo").html("<img class='img-cabo' src='img/cabos/CaboAfitoxXP_06_1kV.jpg'></img>");
    }
    else if (cabo == AFITOX_SM_AS)
    {
        //caboControl.src = "img/cabos/CaboAfitoxSM.jpg";
        //$(".cable-name").html(CABO[AFITOX_SM_AS].description);
        $("#dados_entrada_imagem_cabo").html("<img class='img-cabo' src='img/cabos/CaboAfitoxSM.jpg'></img>");
    }
    else if (cabo == AFITOX_XPS)
    {
        //caboControl.src = "img/cabos/CaboAfitoxXP_06_1kV.jpg";
        //$(".cable-name").html(CABO[AFITOX_XPS].description);
        $("#dados_entrada_imagem_cabo").html("<img class='img-cabo' src='img/cabos/CaboAfitoxXP_06_1kV.jpg'></img>");
    }
    else if (cabo == AFITOX_SM)
    {
        //caboControl.src = "img/cabos/CaboAfitoxSM.jpg";
        //$(".cable-name").html(CABO[AFITOX_SM].description);
        $("#dados_entrada_imagem_cabo").html("<img class='img-cabo' src='img/cabos/CaboAfitoxXP_06_1kV.jpg'></img>");
    }
    else if (cabo == AFITOX_XP)
    {
        //caboControl.src = "img/cabos/CaboAfitoxXP_06_1kV.jpg";
        //$(".cable-name").html(CABO[AFITOX_XP].description);
        $("#dados_entrada_imagem_cabo").html("<img class='img-cabo' src='img/cabos/CaboAfitoxXP_06_1kV.jpg'></img>");
    }
    else if (cabo == AFITOX_MXP_BC)
    {
        //caboControl.src = "img/cabos/CaboAfitoxMXP.jpg";
        //$(".cable-name").html(CABO[AFITOX_MXP_BC].description);
        $("#dados_entrada_imagem_cabo").html("<img class='img-cabo' src='img/cabos/CaboAfitoxMXP.jpg'></img>");
    }
    else if (cabo == AFITOX_MXP_S)
    {
        $("#dados_entrada_imagem_cabo").html("<img class='img-cabo' src='img/cabos/CaboAfitoxMXP.jpg'></img>");
    }
    else if (cabo == AFITOX_MEP_BC)
    {
        //caboControl.src = "img/cabos/CaboAfitoxMXP.jpg";
        //$(".cable-name").html(CABO[AFITOX_MEP_BC].description);
        $("#dados_entrada_imagem_cabo").html("<img class='img-cabo' src='img/cabos/CaboAfitoxMXP.jpg'></img>");
    }
    else if (cabo == AFITOX_MEP_S)
    {
        //caboControl.src = "img/cabos/CaboAfitoxMXP.jpg";
        //$(".cable-name").html(CABO[AFITOX_MEP_S].description);
        $("#dados_entrada_imagem_cabo").html("<img class='img-cabo' src='img/cabos/CaboAfitoxMXP.jpg'></img>");
    }
    else
    {
        //caboControl.src = "img/spacer.gif";
        $("#dados_entrada_imagem_cabo").html("<img class='img-cabo' src='img/spacer.gif'></img>");
    }
}

function updateNivelTensao()
{
    var tipoProduto = $("#cableList").val();
    getNiveisTensao(tipoProduto);
    nivelTensaoOnChange();
}

// Unidade de Tensão - Update. isolationVoltage
function updateUnidadeTensao() {
    var tensao = $("#isolationVoltage").val();
    var unidade = $("#unidadeTensao").val();
    
    if (tensao == _450V_750V) {
        $("#unidadeTensao").html("[V]");
    } else {
        $("#unidadeTensao").html("[kV]");
    }
}

// Tensão de isolamento - Update.
function updateTensaoIsolamento()
{    
    var unidade = $("#voltageUnit").val();
    var tensao = $("#serviceVoltage").val();

    if (!isNaN(tensao))
    {
        if (unidade == "1") {
            tensao = tensao / 1000;
        }
    }
    
    var tipoProduto = $("#cableList").val();
    var nivelTensao = $("#systemVoltage").val();
    var caboSelecionado = $("#caboSelecionado").val();
    var tensaoIsolamento = $("#isolationVoltage").val();
    var materialCondutor = $("#cableMaterial").val();
    var numeroCondutores = $("#conductorNumber").val();
    
    getTensaoIsolamento(tipoProduto, nivelTensao, tensao, numeroCondutores, materialCondutor);
    
    // Utilização do circuito - Update.
    getUtilizacaoCircuito(tipoProduto, nivelTensao, materialCondutor);
    
    updateUnidadeTensao();
}

//ALTERAR IMPLEMENTACAO DO METODO
function nivelTensaoOnChange()
{
    /*$("#serviceVoltage").load(function(){
        $("#serviceVoltage").val("");
        $("#voltageUnit").val("0");
        $("#possibilidadeInstalacao").val("0");
    });*/
    
    // Unidade de Tensão - Update. -- OK
    updateUnidadeTensao();
    
    var tipoProduto = $("#cableList").val(); //dimensionamento.tipoProduto
    var nivelTensao = $("#systemVoltage").val(); //dimensionamento.nivelTensao
    var materialCondutor = $("#cableMaterial").val(); //dimensionamento.materialCondutor
    //var tipoCabo = $("#tipoCabo").val(); //dimensionamento.tipoCabo
    //var aplicacao = $("#aplicacao").val(); //dimensionamento.aplicacao
    
    var tipoCabo = $("#cableConstruction").val(); //dimensionamento.tipoCabo
    var aplicacao = $("#cableFirePerformance").val(); //dimensionamento.aplicacao
    
    // Utilização do circuito - Update. -- OK
    getUtilizacaoCircuito(tipoProduto, nivelTensao, materialCondutor);
    
    // Material do condutor - Update. -- OK
    getMaterialCondutor(tipoProduto, nivelTensao);
    
    // Número de condutores - Update. -- OK -- CORRIGIDO
    getNumeroCondutores(tipoProduto, nivelTensao, tipoCabo, aplicacao);
    
    // Tensão de isolamento -- OK
    updateTensaoIsolamento();
    
    // Sistema - Update. -- OK
    updateSistema();
    
    // Reseta temperatura máxima do condutor e cabo selecionado.
    $("#maximumTemperature").val("0");
    
    $("#caboSelecionado").val("0");
    
    // Cabo Selecionado -- OK
    updateCaboSelecionado();
    
    // Temperatura máxima do condutor -- OK
    updateTemperaturaMaximaCondutor();
    
    // Possibilidade de Instalação -- OK
    updatePossibilidadeInstalacao();
    
    // Temperatura ar/solo
    //alert("Antes da Funcao: updateTemperaturaArSolo");
    updateTemperaturaArSolo();
    //alert("Depois da Funcao: updateTemperaturaArSolo");
    
    // Cabos navais
    
    //alert("Antes de updateCabosNavais");
    updateCabosNavais();
    
    /*loading = false;*/
}

// Sistema - Update.
function updateSistema()
{
    var unidade = $("#voltageUnit").val();
    var tensao = $("#serviceVoltage").val();
    var tipoProduto = $("#cableList").val();
    var nivelTensao = $("#systemVoltage").val();
    var caboSelecionado = $("#caboSelecionado").val();
    var tensaoIsolamento = $("#isolationVoltage").val();
    var materialCondutor = $("#cableMaterial").val();
    var numeroCondutores = $("#conductorNumber").val();
    
    getSistema(tipoProduto, nivelTensao, numeroCondutores);
}

// Cabo selecionado - Update.
function updateCaboSelecionado()
{    
    var tipoProduto = $("#cableList").val();
    var nivelTensao = $("#systemVoltage").val();
    var tempMax = $("#maximumTemperature").val();
    var tensaoIsolamento = $("#isolationVoltage").val();
    var materialCondutor = $("#cableMaterial").val();
    var numeroCondutores = $("#conductorNumber").val();
    var utilizacaoCircuito = $("#circuitUsage").val();
    
    //var tipoCabo = $("#tipoCabo").val(); //dimensionamento.tipoCabo
    var tipoCabo = $("#cableConstruction").val(); //dimensionamento.tipoCabo
    
    //var aplicacao = $("#aplicacao").val(); //dimensionamento.aplicacao
    var aplicacao = $("#cableFirePerformance").val(); //dimensionamento.aplicacao
    
    $("#caboSelecionado").html("");
    $("#caboSelecionado").append(new Option("Selecione","0", false, false));
    
    if (tipoProduto == CABOS_ENERGIA)
    {
        getCaboSelecionado(tipoProduto, nivelTensao, tempMax, numeroCondutores, utilizacaoCircuito, tensaoIsolamento, materialCondutor);
        updateImageCabo();
    }
    else
    {
        updateCaboNaval(nivelTensao, numeroCondutores, tipoCabo, aplicacao, null);
    }
}

function getCabosMap()
{
    var arrayCabo  = [];

    for (var key in CABO)
    {
        arrayCabo.push(key);
    }
    
    return arrayCabo;
}

function removeNonUnipolar(dimensionamento, map)
{
    var unipolares = [];
    if (dimensionamento.isCabosEnergia())
    {
        unipolares.push(NOFLAN_ANTICHAMA_BWF_FLEXIVEL);
        unipolares.push(AFITOX_750V);
        unipolares.push(AFITOX_06_1KV);
        unipolares.push(VINIL);
        unipolares.push(VINIL_FLEXIVEL);
        unipolares.push(FITER_FLEX);
    }
    else
    {
        if (dimensionamento.isBaixaTensao())
        {
            unipolares.push(AFITOX_XP);
            unipolares.push(AFITOX_XPBC);
            unipolares.push(AFITOX_XPS);
        }
        else
        {
            unipolares.push(AFITOX_MXP_BC);
            unipolares.push(AFITOX_MEP_BC);
        }
    }
    
    return removeFromMap(unipolares, map);
}

function removeNonBipolar(dimensionamento, map)
{
    var bipolares = [];
    
    if (dimensionamento.isCabosEnergia())
    {
        bipolares.push(VINIL);
        bipolares.push(VINIL_FLEXIVEL);
        bipolares.push(FITER_FLEX);
        bipolares.push(AFITOX_06_1KV);
    }
    else
    {
        if (dimensionamento.isBaixaTensao())
        {
            bipolares.push(AFITOX_XP);
            bipolares.push(AFITOX_XPBC);
            bipolares.push(AFITOX_XPS);
            bipolares.push(AFITOX_SM);
            bipolares.push(AFITOX_SM_BC);
            bipolares.push(AFITOX_SM_AS);
        }
    }
    
    return removeFromMap(bipolares, map);
}

function removeNonTripolar(dimensionamento, map)
{
    var tripolares = [];
    
    if (dimensionamento.isCabosEnergia())
    {
        tripolares.push(AFITOX_06_1KV);
        tripolares.push(VINIL);
        tripolares.push(VINIL_FLEXIVEL);
        tripolares.push(FITER_FLEX);
    }
    else
    {
        if (dimensionamento.isBaixaTensao())
        {
            tripolares.push(AFITOX_XP);
            tripolares.push(AFITOX_XPBC);
            tripolares.push(AFITOX_XPS);
            tripolares.push(AFITOX_SM);
            tripolares.push(AFITOX_SM_BC);
            tripolares.push(AFITOX_SM_AS);
        }
        else
        {
            tripolares.push(AFITOX_MXP_S);
            tripolares.push(AFITOX_MEP_S);
        }
    }
    
    return removeFromMap(tripolares, map);
}

function removeNonTetrapolar(dimensionamento, map)
{
    var tetrapolares = [];
    
    if (dimensionamento.isCabosEnergia())
    {
        tetrapolares.push(AFITOX_06_1KV);
        tetrapolares.push(VINIL);
        tetrapolares.push(VINIL_FLEXIVEL);
        tetrapolares.push(FITER_FLEX);
    }
    else
    {
        if (dimensionamento.isBaixaTensao())
        {
            tetrapolares.push(AFITOX_XP);
            tetrapolares.push(AFITOX_XPBC);
            tetrapolares.push(AFITOX_XPS);
            tetrapolares.push(AFITOX_SM);
            tetrapolares.push(AFITOX_SM_BC);
            tetrapolares.push(AFITOX_SM_AS);
        }
    }
    
    return removeFromMap(tetrapolares, map);
}

function removeNon70C(map)
{
    var tempMax70 = [];
    
    tempMax70.push(NOFLAN_ANTICHAMA_BWF_FLEXIVEL);
    tempMax70.push(AFITOX_750V);
    tempMax70.push(VINIL);
    tempMax70.push(VINIL_FLEXIVEL);
    
    return removeFromMap(tempMax70, map);
}

function removeNon90C(map)
{
    var tempMax90 = [];
    
    tempMax90.push(AFITOX_06_1KV);
    tempMax90.push(FITER_FLEX);
    
    return removeFromMap(tempMax90, map);
}

function removeNonUtil(map)
{
    var utilList = [];
    
    utilList.push(NOFLAN_ANTICHAMA_BWF_FLEXIVEL);
    utilList.push(VINIL_FLEXIVEL);
    utilList.push(FITER_FLEX);
    
    return removeFromMap(utilList, map);
}

function removeNonAluminio(map)
{
    var utilList = [];
    
    utilList.push(VINIL);
        
    return removeFromMap(utilList, map);
}

function removeNon450_750V(map)
{
    var utilList = [];
    
    utilList.push(NOFLAN_ANTICHAMA_BWF_FLEXIVEL);
    utilList.push(AFITOX_750V);
    
    return removeFromMap(utilList, map);
}

function removeNon06_1kV(map)
{
    var utilList = [];
    
    utilList.push(VINIL);
    utilList.push(VINIL_FLEXIVEL);
    utilList.push(FITER_FLEX);
    utilList.push(AFITOX_06_1KV);
    
    return removeFromMap(utilList, map);
}

function removeNonDataBase(map)
{
    /*alert("Antes");
    for(var i=0; i<map.length; i++)
    {
        var value = map[i];
        alert("Valor[" + value + "] - Description[" + CABO[value].description + "]");
    }*/
    
    // Verifica se o cabo existe no banco de dados.
    db.transaction(function(tx){
       var utilList = [];
       
       // Varre todos os cabos do map;
       for(var i=0; i<map.length; i++)
       {
           var familia = map[i];
                   
            tx.executeSql("SELECT * FROM T003_PRODUTOS WHERE NMR_FAMILIA_PRODUTO = ? ",[familia],function(tx,rs){
                if(rs.rows.length>0)
                {
                    /*var lb = document.getElementById("caboSelecionado");

                    for (var i=0;i<lb.length;i++)
                    {
                          alert("Valor: " + lb.options[i].value);
                    }*/
                    $("#caboSelecionado").append(new Option(CABO[rs.rows.item(0).NMR_FAMILIA_PRODUTO].description,rs.rows.item(0).NMR_FAMILIA_PRODUTO, false, false));
                }
            });
        }
    },errorCB);
}

function removeFromMapImprimir(polaridade, map)
{
    var mapAux = [];
    for(var i=0; i<map.length; i++)
    {
        var encontrou = "";
        var value = map[i];
        
        for(var j=0; j<polaridade.length; j++)
        {
            var valueAux = polaridade[j];
            
            if(valueAux == value)
            {
                encontrou = "true";
            }
        }
        
        if(encontrou == "")
        {
            //map = removeA(map, value);
            //map[i] = "";
            
            map.splice(value, 1);
            mapAux[value] = value;
            
            /*map = $.grep(map, function(val, index)
            {
                return val != value;
            });*/
        }
    }
    
    //alert("Tamanho do Array Final: " + map.length);
    
    for(var i=0; i<map.length; i++)
    {
        var value = map[i];
        var retorno = "";
        
        $.each(polaridade, function(index, item)
        {
            //alert("Each, Value[" + value + "], item[" + item + "]");
            if(item == value)
            {
                retorno = "true";
            }
        });
        
        //alert("Resultado Retorno: " + retorno);
        
        if(retorno == "")
        {
            //alert("Inserir");
            $("#caboSelecionado").append(new Option(CABO[value].description,value, false, false));            
        }
    }
}

function removeFromMap(polaridade, map)
{
    var mapAux = [];
    for(var i=0; i<map.length; i++)
    {
        var encontrou = "";
        
        var value = map[i];
        
        var contador = 0;
        
        for(var j=0; j<polaridade.length; j++)
        {
            var valueAux = polaridade[j];
            
            if(valueAux == value)
            {
                encontrou = "true";
            }
        }
        
        if(encontrou == "")
        {
            mapAux.push(value);
            
            map = $.grep(map, function(val, index)
            {
                return val != value;
            });
        }
    }
    
    for(var i=0; i<mapAux.length; i++)
    {
        var value = mapAux[i];
        map.splice(value, 1);
        //alert("Value: " + value);
    }
    
    return map;
}

function getCaboSelecionado(tipoProduto, nivelTensao, temperaturaMaxima, numeroCondutores, utilizacaoCircuito, tensaoIsolamento, materialCondutor)
{
    dimensionamento = new DimensionamentoBean();
    dimensionamento.setTipoProduto(tipoProduto);
    dimensionamento.setNivelTensao(nivelTensao);
    dimensionamento.setNumeroCondutores(numeroCondutores);
    
    var map = [];
    
    //alert("Variaveis: tipoProduto[" + tipoProduto + "], nivelTensao[" + nivelTensao + "], temperaturaMaxima[" + temperaturaMaxima + "]\n, numeroCondutores[" + numeroCondutores + "]" + ", utilizacaoCircuito[" + utilizacaoCircuito + "], tensaoIsolamento[" + tensaoIsolamento + "], materialCondutor[" + materialCondutor + "]");
    
    if (tipoProduto == CABOS_ENERGIA)
    {
        if (nivelTensao == BAIXA)
        {
            var map = getCabosMap();
            
            // Filtrando os cabos pelo numero de condutores
            switch (numeroCondutores)
            {
                case "0":
                    map = removeNonUnipolar(dimensionamento, map);
                    break;                    
                case "1":
                    map = removeNonUnipolar(dimensionamento, map);
                    break;
                case "2":
                    map = removeNonBipolar(dimensionamento, map);
                    break;
                case "3":
                    map = removeNonTripolar(dimensionamento, map);
                    break;
                case "4":
                    map = removeNonTetrapolar(dimensionamento, map);
                    break;
            }
            
            // Filtrando os restantes pela temperatura
            if (temperaturaMaxima == _70C)
            {
                map = removeNon70C(map);
            }
            else if (temperaturaMaxima == _90C)
            {
                map = removeNon90C(map);
            }
            
            // Filtrando o restante pela utilizacao do circuito
            if (utilizacaoCircuito == APLICACOES_ESPECIAIS || utilizacaoCircuito == OUTROS)
            {
                //altert("removeNonUtil");
                map = removeNonUtil(map);
            }
            
            // Filtra o restante pela tens„o de isolamento.
            if (tensaoIsolamento == _450V_750V)
            {
                //alert("Tensao Isolamento");
                map = removeNon450_750V(map);
            }
            else if (tensaoIsolamento == _06KV_1KV)
            {
                 map = removeNon06_1kV(map);
            }
            
            // Filtra o restante pelo material do condutor.
            if (materialCondutor == ALUMINIO)
            {
                map = removeNonAluminio(map);
            }
            
        }
        else if (nivelTensao == MEDIA)
        {
            if (temperaturaMaxima <= 0)
            {
                map.push(EP_DRY_105C);
                map.push(EP_DRY);
                map.push(FIPEX_BF);
            }
            else if (temperaturaMaxima == _90C)
            {
                map.push(EP_DRY);
                map.push(FIPEX_BF);
            }
            else if (temperaturaMaxima == _105C)
            {
                map.push(EP_DRY_105C);
            }
        }
    }
    
    /*for(var i=0; i<map.length; i++)
    {
        var value = map[i];
        alert("Valor: " + value);
    }*/
    
    try
    {
        //alert("Entrou na função try");
        // Remove os cabos que n„o est„o no banco de dados;
        removeNonDataBase(map);
        //IMPLEMENTAR ROTINA PARA INSERIR OS DADOS NA LISTAGEM DENTRO removeNonDataBase
    } catch(err) {
        //alert("Erro: " + err);
    }
}

function updateCaboNaval(nivelTensao, numeroCondutores, tipo, aplicacao, windowHnd)
{
    getCaboSelecionadoNaval(nivelTensao, numeroCondutores, tipo, aplicacao);
    updateImageCabo();
}

function getCaboSelecionadoNaval(nivelTensao, numeroCondutores, tipoCabo, aplicacao)
{
    //alert("Variaveis: nivelTensao[" + nivelTensao + "], numeroCondutores[" + numeroCondutores + "], tipoCabo[" + tipoCabo + ", aplicacao[" + aplicacao + "]");
    
    dimensionamento = new DimensionamentoBean();
    dimensionamento.setTipoProduto(CABOS_NAVAIS);
    dimensionamento.setNivelTensao(nivelTensao);
    dimensionamento.setNumeroCondutores(numeroCondutores);
    
    var map = [];
    
    //alert("Variaveis: nivelTensao[" + nivelTensao + "], numeroCondutores[" + numeroCondutores + "], tipoCabo[" + tipoCabo + "]\n, aplicacao[" + aplicacao + "]");
    
    var map = getCabosMap();
    
    // Filtra somente os de cabos navais.
    removeNonNaval(map);
    
    // Filtrando os cabos pelo numero de condutores
    switch (numeroCondutores) {
        case "0":
            break;
        case "1":
            //alert("Entrou removeNonUnipolar");
            map = removeNonUnipolar(dimensionamento, map);
            //alert("Saiu removeNonUnipolar");
            break;
        case "2":
            map = removeNonBipolar(dimensionamento, map);
            break;
        case "3":
            map = removeNonTripolar(dimensionamento, map);
            break;
        case "4":
            map = removeNonTetrapolar(dimensionamento, map);
            break;
    }
    
    // Filtra os cabos quanto ao tipo de cabo(proteção metálica) ou quanto
    // ao material da isoaoÁ„o.
    if (dimensionamento.isBaixaTensao())
    {
        if (tipoCabo == CABO_NAO_ARMADO)
        {
            map = removeNonNaoArmado(map);
        }
        else if (tipoCabo == CABO_ARMADO_COBRE)
        {
            //alert("Entrou removeNonCobre");
            map = removeNonCobre(map);
            //alert("Saiu removeNonCobre");
        }
        else if (tipoCabo == CABO_ARMADO_ACO)
        {
            map = removeNonAco(map);
        }
    }
    else if (dimensionamento.isMediaTensao())
    {
        if (tipoCabo == ISOLACAO_HF_XLPE)
        {
            map = removeNonHF_XLPE(map);
        }
        else if (tipoCabo == ISOLACAO_HF_HEPR)
        {
            map = removeNonHF_HEPR(map);
        }
    }
    
    // Filtra os cabos de acordo com a aplicaÁ„o(desenpenho sob cond. de
    // incÍndio)
    if (dimensionamento.isBaixaTensao())
    {
        if (aplicacao == DEMAIS_APLICACOES)
        { // 60332-2
            //alert("Entrou removeNon603322");
            map = removeNon603322(map);
            //alert("Saiu removeNon603322");
        }
        else if (aplicacao == SEGURANCA_MAXIMA)
        { // 60331.
            map = removeNon60331(map);
        }
    }
    
    try
    {
        // Remove os cabos que n„o est„o no banco de dados;
        removeNonDataBase(map);
        
    } catch (err) {
        //getLogger().error("RemoveNonDatabase: " + e);
        //map.clear();
    }
}

function removeNonNaval(map)
{
    var list = [];
    
    list.push(AFITOX_XP);
    list.push(AFITOX_XPBC);
    list.push(AFITOX_XPS);
    list.push(AFITOX_SM);
    list.push(AFITOX_SM_BC);
    list.push(AFITOX_SM_AS);
    list.push(AFITOX_MXP_BC);
    list.push(AFITOX_MXP_S);
    list.push(AFITOX_MEP_BC);
    list.push(AFITOX_MEP_S);
    
    return removeFromMap(list, map);
}

function removeNonNaoArmado(map)
{
    var list = [];
    
    list.push(AFITOX_XP);
    list.push(AFITOX_SM);
    
    return removeFromMap(list, map);
}

function removeNonCobre(map)
{
    var list = [];
    
    list.push(AFITOX_XPBC);
    list.push(AFITOX_SM_BC);
    
    return removeFromMap(list, map);
}

function removeNonAco(map)
{
    var list = [];
    
    list.push(AFITOX_XPS);
    list.push(AFITOX_SM_AS);
    
    return removeFromMap(list, map);
}

function removeNonHF_XLPE(map)
{
    var list = [];
    
    list.push(AFITOX_MXP_BC);
    list.push(AFITOX_MXP_S);
    
    return removeFromMap(list, map);
}

function removeNonHF_HEPR(map)
{
    var list = [];
    
    list.push(AFITOX_MEP_BC);
    list.push(AFITOX_MEP_S);
    
    return removeFromMap(list, map);
}

function removeNon603322(map)
{
    var list = [];
    
    list.push(AFITOX_XP);
    list.push(AFITOX_XPBC);
    list.push(AFITOX_XPS);
    
    return removeFromMap(list, map);
}

function removeNon60331(map)
{
    var list = [];
    
    list.push(AFITOX_SM);
    list.push(AFITOX_SM_BC);
    list.push(AFITOX_SM_AS);
    
    return removeFromMap(list, map);
}

function updateTemperaturaMaximaCondutor()
{
    var tipoProduto = $("#cableList").val();
    var nivelTensao = $("#systemVoltage").val();
    var caboSelecionado = $("#caboSelecionado").val();
    var tensaoIsolamento = $("#isolationVoltage").val();
    var materialCondutor = $("#cableMaterial").val();
    
    getTemperaturaMaximaCondutor(tipoProduto, nivelTensao, caboSelecionado, tensaoIsolamento, materialCondutor);
}

function updatePossibilidadeInstalacao()
{
    var tipoProduto = $("#cableList").val();
    var nivelTensao = $("#systemVoltage").val();
    
    getPossibilidadeInstalacao(tipoProduto, nivelTensao);
}

function updateTemperaturaArSolo()
{
    //alert("Entrou na Funcao: updateTemperaturaArSolo");
    
    var tipoProduto = $("#cableList").val();
    var nivelTensao = $("#systemVoltage").val();
    var tempMax = $("#maximumTemperature").val();
    var possibilidade = $("#possibilidadeInstalacao").val(); //dimensionamento.tipoProduto
    
    getTemperaturaArSolo(tipoProduto, tempMax, nivelTensao, possibilidade);
    //alert("Saiu da Funcao: getTemperaturaArSolo");
    
    if (possibilidade != "0")
    {
        var a = (possibilidade == SUBTERRANEA);
        var b = (possibilidade == BANCO_DUTOS_SOLO);
        var d = (possibilidade == DIRETAMENTE_SOLO);
        var e = (possibilidade == ELETRODUTO_SOLO);
        var f = (possibilidade == ELETRODUTO_NAO_METALICO_SOLO);
        var g = (possibilidade == ELETRODUTO_METALICO_SOLO);
        
        if (a || b || d || e || f || g)
        {
            $("#temperaturaArSolo").val(_20C_AS);
            //DWRUtil.setValue("dimensionamento.temperaturaArSolo", <%=TemperaturaArSolo._20C.getValue()%>);
        }
        else
        {
            $("#temperaturaArSolo").val(_30C_AS);
            //DWRUtil.setValue("dimensionamento.temperaturaArSolo", <%=TemperaturaArSolo._30C.getValue()%>);
        }
    }
}

function updateCabosNavais()
{
    var tipoProduto = $("#cableList").val();
    var nivelTensao = $("#systemVoltage").val();
    var caboSelecionado = $("#caboSelecionado").val();
    
    if (loadingNaval)
    {
        loadingNaval = false;
    }
    else
    {
        if (tipoProduto == CABOS_NAVAIS)
        {
            if (nivelTensao > 0)
            {
                showDeterminacaoCaboNaval();
                //showPopup("specification-popup");
                //$("#cableConstruction").focus();
            }
            
            $("specification-popup-btn").show();
        }
        else
        {
            $("specification-popup-btn").hide();
        }
    }
}

function tipoProdutoOnChange()
{
    var freq = $("#frequency").val();
    if (freq == "" || freq == "0.0" || freq == "0" || freq == "0,0")
    {
        //DWRUtil.setValue("dimensionamento.frequencia", "60");
        $("#frequency").val("60");
    }
    
    $("#systemVoltage").val("0");
    
    updateNivelTensao();
    
    updatePossibilidadeInstalacao();
    //resetPossibilidadeInstalacao();
    updateCabosNavais();
}

function resetPossibilidadeInstalacao()
{
    //document.getElementById("div_localInstalacao").style.display = "none";
    closePopup("localInstalacaoAparente-popup");
    
    //DWRUtil.setValue("dimensionamento.localInstalacao", "0");
    $("#localInstalacao").val("");
    
    //IMPLEMENTAR OS CAMPOS DO TIPO HIDDEN CASO NECESSARIO
    //DWRUtil.setValue("dimensionamento.tipoInstalacao", 23);
    $("#tipoInstalacao").val("23");
    //DWRUtil.setValue("dimensionamento.resistividadeTermica", "<%=ResistividadeTermica._2_5.getValue()%>"); 5
    $("#resistividadeTermica").val(_2_5);
    //DWRUtil.setValue("dimensionamento.posicaoCabosSolo", "0");
    $("#posicaoCabosSolo").val("0");
    //DWRUtil.setValue("dimensionamento.formacaoBancoDutos", "0");
    $("#formacaoBancoDutos").val("0");
    //DWRUtil.setValue("dimensionamento.numeroBandejas", "1");
    $("#numeroBandejas").val("1");
    //DWRUtil.setValue("dimensionamento.numeroTernasBandeja", "1");
    $("#numeroTernasBandeja").val("1");
    //DWRUtil.setValue("dimensionamento.numeroBandejasVertical", "1");
    $("#numeroBandejasVertical").val("1");
    //DWRUtil.setValue("dimensionamento.numeroTernasBandejaVertical", "1");
    $("#numeroTernasBandejaVertical").val("1");
    //DWRUtil.setValue("dimensionamento.orientacaoFatorCorrecao", "0");
    $("#orientacaoFatorCorrecao").val("0");
    //DWRUtil.setValue("dimensionamento.quantidadeCamadas", "1");
    $("#quantidadeCamadas").val("1");
    //DWRUtil.setValue("dimensionamento.quantidadeCircuitos", "1");
    $("#quantidadeCircuitos").val("1");
    //DWRUtil.setValue("dimensionamento.eletrodutoMetalico", "0");
    $("#eletrodutoMetalico").val("0");
    //DWRUtil.setValue("dimensionamento.distanciaEntreCabos", "0");
    $("#distanciaEntreCabos").val("0");
    //DWRUtil.setValue("dimensionamento.relacaoCaboDuto", "");
    $("#relacaoCaboDuto").val("");
    //DWRUtil.setValue("dimensionamento.posicionamentoCabo", "0");
    $("#posicionamentoCabo").val("0");
    //DWRUtil.setValue("dimensionamento.orientacaoCabo", "0");
    $("#orientacaoCabo").val("0");
}

function materialCondutorOnChange()
{
    var tipoProduto = $("#cableList").val();
    var nivelTensao = $("#systemVoltage").val();
    var materialCondutor = $("#cableMaterial").val();
    
    $("#circuitUsage").val(0);
    $("#possibilidadeInstalacao").val("0");
    $("#caboSelecionado").val(0);
    $("#maximumTemperature").val(0);
    
    updatePossibilidadeInstalacao();
    updateTemperaturaMaximaCondutor();
    updateCaboSelecionado();
    updateTensaoIsolamento();
    
    // Utilização do circuito - Update.
    getUtilizacaoCircuito(tipoProduto, nivelTensao, materialCondutor);
}

function numeroCondutoresOnChange()
{
    var tipoProduto = $("#cableList").val(); //dimensionamento.tipoProduto
    var nivelTensao = $("#systemVoltage").val(); //dimensionamento.nivelTensao
    var materialCondutor = $("#cableMaterial").val(); //dimensionamento.materialCondutor
    //var tipoCabo = $("#tipoCabo").val(); //dimensionamento.tipoCabo
    //var aplicacao = $("#aplicacao").val(); //dimensionamento.aplicacao
    
    var tipoCabo = $("#cableConstruction").val(); //dimensionamento.tipoCabo
    var aplicacao = $("#cableFirePerformance").val(); //dimensionamento.aplicacao
    
    $("#caboSelecionado").val("0");
    $("#isolationVoltage").val("0");
    $("#maximumTemperature").val("0");
    $("#possibilidadeInstalacao").val("0");
    
    updateSistema();
    updateCaboSelecionado();
    updateTensaoIsolamento();
    updateTemperaturaMaximaCondutor();
    updatePossibilidadeInstalacao();
    
    getNumeroCondutores(tipoProduto, nivelTensao, tipoCabo, aplicacao);
    
    // Utilização do circuito - Update.
    getUtilizacaoCircuito(tipoProduto, nivelTensao, materialCondutor);
}

function tensaoServicoOnChange()
{
    updateTensaoIsolamento();
    
    var tensao = $("#systemVoltage").val();
    var tipoProduto = $("#cableList").val();
    var corrente = $("#correnteProjeto").val();
    var potencia = $("#potenciaAparente").val();
    var uTensao = $("#voltageUnit").val();
    var tensaoServico = $("#serviceVoltage").val();
    var objTensaoServico = document.getElementById('serviceVoltage');
    
    if (corrente != "" && corrente != "0.0" && corrente != "0,0")
    {
        correnteProjetoOnChange();
    }
    else if (potencia != "" && potencia != "0.0" && potencia != "0,0")
    {
        potenciaAparenteOnChange();
    }
    
    if (uTensao != 0)
    {
        if (uTensao == "2")
        {
		  	tensaoServico = tensaoServico * 1000;
        }
        
        if (tipoProduto == CABOS_ENERGIA)
        {
            if (tensao == BAIXA)
            {
		  	 	if (tensaoServico < 1 || tensaoServico > 1000)
                {
		  	 		alert("A Tensão Baixa deve ser entre 1V e 1000V ou 0,001kV e 1kV.");
		  	 		objTensaoServico.value = '';
		  	 		objTensaoServico.focus;
		  	 		return false;
			  	}
            }
            else
            {
			  	if (tensao == MEDIA)
                {
					if (tensaoServico < 1000 || tensaoServico > 35000)
                    {
			  			alert("A Tensão Média deve ser entre 1000V e 35000V ou 1kV e 35kV.");
			  	 		objTensaoServico.value = '';
			  	 		objTensaoServico.focus;
			  	 		return false;
		  			}
                    return true;
		  	 	}
            }
        }
        
        if (tipoProduto == CABOS_NAVAIS)
        {
            if (tensao == BAIXA)
            {
		  	 	if (tensaoServico < 1 || tensaoServico > 1000)
                {
		  	 		alert("A Tensão Baixa deve ser entre 1V e 1000V ou 0,001kV e 1kV.");
		  	 		objTensaoServico.value = '';
		  	 		objTensaoServico.focus;
		  	 		return false;
			  	}
            }
            else
            {
			  	if (tensao == MEDIA || tensao == MEDIA_NAVAL)
                {
					if (tensaoServico < 1000 || tensaoServico > 20000)
                    {
			  			alert("A Tensão Média deve ser entre 1000V e 20000V ou 1kV e 20kV.");
			  	 		objTensaoServico.value = '';
			  	 		objTensaoServico.focus;
			  	 		return false;
		  			}
                    return true;
		  	 	}
            }
        }
        
    }
}

function correnteProjetoOnChange()
{    
    var corrente = $("#correnteProjeto").val();
    var tensao = $("#serviceVoltage").val();
    var unidade = $("#voltageUnit").val();
    
    if (unidade == "")
    {
        alert("Selecione a unidade de tensão.");
        return false;
    }
    
    if ((!isNaN(corrente)) && (!isNaN(tensao)))
    {
        
        if (unidade == "1")
        {
            tensao = tensao / 1000;
        }
        
        var potencia = corrente * tensao * Math.sqrt(3);
        $("#potenciaAparente").val(potencia.toFixed(1));
    }
}

function potenciaAparenteOnChange()
{
    var potencia = $("#potenciaAparente").val();
    var tensao = $("#serviceVoltage").val();
    var unidade = $("#voltageUnit").val();
    
    if (unidade == "")
    {
        alert("Selecione a unidade de tensão.");
        return false;
    }
    
    if ((!isNaN(potencia)) && (!isNaN(tensao)))
    {
        
        if (unidade == "1")
        {
            tensao = tensao / 1000;
        }
        
        var corrente = (potencia / tensao) / Math.sqrt(3);
        $("#correnteProjeto").val(corrente.toFixed(1));
    }
}

function tensaoIsolamentoOnChange()
{
    $("#maximumTemperature").val("0");
    $("#caboSelecionado").val("0");
    
    updateCaboSelecionado();
    updateUnidadeTensao();
    updateTemperaturaMaximaCondutor();
    
    $("#possibilidadeInstalacao").val("0");
    
    updatePossibilidadeInstalacao();
}

function utilizacaoCircuitoOnChange()
{    
    var materialCondutor = $("#cableMaterial").val();
    var utilizacao = $("#circuitUsage").val();
    
    if (utilizacao == SINALIZACAO)
    {
        if (materialCondutor == ALUMINIO)
        {
            if (confirm("Para Círculo de Sinalização a norma NBR 5410 prevê apenas condutores de Cobre. Deseja alterar o material do condutor para Cobre ?"))
            {
                $("#cableMaterial").val(COBRE);
            }
            else
            {
                $("#circuitUsage").val(0);
            }
        }
        
    }
    else if (utilizacao == CONTROLE)
    {
        if (materialCondutor == ALUMINIO)
        {
            if (confirm("Para Circuito de Controle a norma NBR 5410 prevê apenas condutores de Cobre. Deseja alterar o material do condutor para Cobre ?"))
            {
                $("#cableMaterial").val(COBRE);
            }
            else
            {
                $("#circuitUsage").val(0);
            }
        }
    }
    else if (utilizacao == APLICACOES_ESPECIAIS)
    {
        if (materialCondutor == ALUMINIO)
        {
            if (confirm("Para Circuito de extrabaixa tensão para aplicações especiais a norma NBR 5410 prevê apenas condutores de Cobre. Deseja alterar o material do condutor para Cobre ?"))
            {
                $("#cableMaterial").val(COBRE);
            }
            else
            {
                $("#circuitUsage").val(0);
            }
        }
    }
    else if (utilizacao == OUTROS)
    {
        if (materialCondutor == ALUMINIO)
        {
            if (confirm("Para qualquer outra aplicação a norma NBR 5410 prevê apenas condutores de Cobre. Deseja alterar o material do condutor para Cobre ?"))
            {
                $("#cableMaterial").val(COBRE);
            }
            else
            {
                $("#circuitUsage").val(0);
            }
        }
    }
}

function sistemaOnChange()
{
    $("#possibilidadeInstalacao").val("0");
    updatePossibilidadeInstalacao();
}

function caboSelecionadoOnChange()
{
    updateTemperaturaMaximaCondutor();
    updateImageCabo();
    $("#possibilidadeInstalacao").val("0");
    updatePossibilidadeInstalacao();
}

function updateImageCabo()
{
    var caboControl = document["caboImage"];
    //var caboControl = document["page-cabledescription"];
    var cabo = $("#caboSelecionado").val();
    var materialCondutor = $("#cableMaterial").val();
    
    //alert("Cabo: " + cabo + ", materialCondutor: " + materialCondutor);
    
//    $(".cable-name").html(rs.rows.item(0).nome);
//    $(".cable-photo").html("<img class='img-cabo' src='"+rs.rows.item(0).imagem+"'></img>");
//    $(".cable-description").html(rs.rows.item(0).descricao);
    
    if (cabo == AFITOX_06_1KV)
    {
        //caboControl.src = "img/cabos/CaboAfitox06_1kV.jpg";
        //$(".cable-name").html(CABO[AFITOX_06_1KV].description);
        $(".cable-photo").html("<img class='img-cabo' src='img/cabos/CaboAfitox06_1kV.jpg'></img>");
    }
    else if (cabo == AFITOX_750V)
    {
        //caboControl.src = "img/cabos/CaboAfitox750V.jpg";
        //$(".cable-name").html(CABO[AFITOX_750V].description);
        $(".cable-photo").html("<img class='img-cabo' src='img/cabos/CaboAfitox750V.jpg'></img>");
    }
    else if (cabo == EP_DRY)
    {
        //caboControl.src = "img/cabos/CaboEPDRY.jpg";
        //$(".cable-name").html(CABO[EP_DRY].description);
        $(".cable-photo").html("<img class='img-cabo' src='img/cabos/CaboEPDRY.jpg'></img>");
    }
    else if (cabo == EP_DRY_105C)
    {
        //caboControl.src = "img/cabos/CaboEPDRY105.jpg";
        //$(".cable-name").html(CABO[EP_DRY_105C].description);
        $(".cable-photo").html("<img class='img-cabo' src='img/cabos/CaboEPDRY105.jpg'></img>");
    }
    else if (cabo == FITER_FLEX)
    {
        //caboControl.src = "img/cabos/CaboFiterFlex.jpg";
        //$(".cable-name").html(CABO[FITER_FLEX].description);
        $(".cable-photo").html("<img class='img-cabo' src='img/cabos/CaboFiterFlex.jpg'></img>");
    }
    else if (cabo == FIPEX_BF)
    {
        //caboControl.src = "img/cabos/CaboFiperxBF.jpg";
        //$(".cable-name").html(CABO[FIPEX_BF].description);
        $(".cable-photo").html("<img class='img-cabo' src='img/cabos/CaboFiperxBF.jpg'></img>");
    }
    else if (cabo == NOFLAN_ANTICHAMA_BWF_FLEXIVEL)
    {
        //caboControl.src = "img/cabos/CaboNoflamAntichamaBWFFlexivel.jpg";
        //$(".cable-name").html(CABO[NOFLAN_ANTICHAMA_BWF_FLEXIVEL].description);
        $(".cable-photo").html("<img class='img-cabo' src='img/cabos/CaboNoflamAntichamaBWFFlexivel.jpg'></img>");
    }
    else if (cabo == VINIL)
    {
        if (materialCondutor == COBRE)
        {
            //caboControl.src = "img/cabos/CaboVinil.jpg";
            //$(".cable-name").html(CABO[COBRE].description);
            $(".cable-photo").html("<img class='img-cabo' src='img/cabos/CaboVinil.jpg'></img>");
        }
        else
        {
            //caboControl.src = "img/cabos/CaboVinilAluminio.jpg";
            //$(".cable-name").html("Cabo Vinil Aluminios");
            $(".cable-photo").html("<img class='img-cabo' src='img/cabos/CaboVinilAluminio.jpg'></img>");
        }
        
    }
    else if (cabo == VINIL_FLEXIVEL)
    {
        //caboControl.src = "img/cabos/CaboVinilFlexivel.jpg";
        //$(".cable-name").html(CABO[VINIL_FLEXIVEL].description);
        $(".cable-photo").html("<img class='img-cabo' src='img/cabos/CaboVinilFlexivel.jpg'></img>");
    }
    else if (cabo == AFITOX_SM_BC)
    {
        //caboControl.src = "img/cabos/CaboAfitoxSM.jpg";
        //$(".cable-name").html(CABO[AFITOX_SM_BC].description);
        $(".cable-photo").html("<img class='img-cabo' src='img/cabos/CaboAfitoxSM.jpg'></img>");
    }
    else if (cabo == AFITOX_XPBC)
    {
        //caboControl.src = "img/cabos/CaboAfitoxXP_06_1kV.jpg";
        //$(".cable-name").html(CABO[AFITOX_XPBC].description);
        $(".cable-photo").html("<img class='img-cabo' src='img/cabos/CaboAfitoxXP_06_1kV.jpg'></img>");
    }
    else if (cabo == AFITOX_SM_AS)
    {
        //caboControl.src = "img/cabos/CaboAfitoxSM.jpg";
        //$(".cable-name").html(CABO[AFITOX_SM_AS].description);
        $(".cable-photo").html("<img class='img-cabo' src='img/cabos/CaboAfitoxSM.jpg'></img>");
    }
    else if (cabo == AFITOX_XPS)
    {
        //caboControl.src = "img/cabos/CaboAfitoxXP_06_1kV.jpg";
        //$(".cable-name").html(CABO[AFITOX_XPS].description);
        $(".cable-photo").html("<img class='img-cabo' src='img/cabos/CaboAfitoxXP_06_1kV.jpg'></img>");
    }
    else if (cabo == AFITOX_SM)
    {
        //caboControl.src = "img/cabos/CaboAfitoxSM.jpg";
        //$(".cable-name").html(CABO[AFITOX_SM].description);
        $(".cable-photo").html("<img class='img-cabo' src='img/cabos/CaboAfitoxXP_06_1kV.jpg'></img>");
    }
    else if (cabo == AFITOX_XP)
    {
        //caboControl.src = "img/cabos/CaboAfitoxXP_06_1kV.jpg";
        //$(".cable-name").html(CABO[AFITOX_XP].description);
        $(".cable-photo").html("<img class='img-cabo' src='img/cabos/CaboAfitoxXP_06_1kV.jpg'></img>");
    }
    else if (cabo == AFITOX_MXP_BC)
    {
        //caboControl.src = "img/cabos/CaboAfitoxMXP.jpg";
        //$(".cable-name").html(CABO[AFITOX_MXP_BC].description);
        $(".cable-photo").html("<img class='img-cabo' src='img/cabos/CaboAfitoxMXP.jpg'></img>");
    }
    else if (cabo == AFITOX_MXP_S)
    {
        //caboControl.src = "img/cabos/CaboAfitoxMXP.jpg";
        $(".cable-name").html(CABO[AFITOX_MXP_S].description);
        $(".cable-photo").html("<img class='img-cabo' src='img/cabos/CaboAfitoxMXP.jpg'></img>");
        
    }
    else if (cabo == AFITOX_MEP_BC)
    {
        //caboControl.src = "img/cabos/CaboAfitoxMXP.jpg";
        //$(".cable-name").html(CABO[AFITOX_MEP_BC].description);
        $(".cable-photo").html("<img class='img-cabo' src='img/cabos/CaboAfitoxMXP.jpg'></img>");
    }
    else if (cabo == AFITOX_MEP_S)
    {
        //caboControl.src = "img/cabos/CaboAfitoxMXP.jpg";
        //$(".cable-name").html(CABO[AFITOX_MEP_S].description);
        $(".cable-photo").html("<img class='img-cabo' src='img/cabos/CaboAfitoxMXP.jpg'></img>");
    }
    else
    {
        //caboControl.src = "img/spacer.gif";
        $(".cable-photo").html("<img class='img-cabo' src='img/spacer.gif'></img>");
    }
    
    //var caboDesc = document.form.caboDescription;
    //caboDesc.value = getCaboDescription(cabo);
}

function getTiposCabo(nivelTensao)
{
    var tipoCaboNaval = $("#cableConstruction").val();
    
    $("#cableConstruction").html("");
    $("#cableConstruction").append(new Option("Selecione","0", false, false));
    
    if (nivelTensao == BAIXA)
    {
        $("#cableConstruction").append(new Option(CABOSNAVAIS[CABO_ARMADO_COBRE].description,CABO_ARMADO_COBRE, false, false));
        $("#cableConstruction").append(new Option(CABOSNAVAIS[CABO_ARMADO_ACO].description,CABO_ARMADO_ACO, false, false));
        $("#cableConstruction").append(new Option(CABOSNAVAIS[CABO_NAO_ARMADO].description,CABO_NAO_ARMADO, false, false));
    }
    else if (nivelTensao == MEDIA || nivelTensao == MEDIA_NAVAL)
    {
        $("#cableConstruction").append(new Option(CABOSNAVAIS[ISOLACAO_HF_XLPE].description,ISOLACAO_HF_XLPE, false, false));
        $("#cableConstruction").append(new Option(CABOSNAVAIS[ISOLACAO_HF_HEPR].description,ISOLACAO_HF_HEPR, false, false));
    }
    
    $('#cableConstruction option[value="'+tipoCaboNaval+'"]').attr({ selected : "selected" });
}

function getAplicacoes(nivelTensao)
{
    var aplcacao = $("#cableFirePerformance").val();
    
    $("#cableFirePerformance").html("");
    $("#cableFirePerformance").append(new Option("Selecione","0", false, false));
    
    if (nivelTensao == BAIXA)
    {
        $("#cableFirePerformance").append(new Option(CABOSNAVAIS[DEMAIS_APLICACOES].description,DEMAIS_APLICACOES, false, false));
        $("#cableFirePerformance").append(new Option(CABOSNAVAIS[SEGURANCA_MAXIMA].description,SEGURANCA_MAXIMA, false, false));
    }
    
    $('#cableFirePerformance option[value="'+aplcacao+'"]').attr({ selected : "selected" });
}

function escondeDivsSubterranea()
{
    //SUBTERRANEA
    closePopup("id_eletroduto_subterranea");
    closePopup("id_diretamente_enterrados");
    closePopup("id_canaleta_fechada");
    closePopup("id_canaleta_ventilada");
    closePopup("id_canaleta_fechada_noflam");
    closePopup("id_canaleta_ventilada_noflam");
    closePopup("id_unipolar_separado");
    closePopup("id_unipolar_justapostos");
    closePopup("id_unipolar_trifolio");
    closePopup("id_tripolar_separado");
    closePopup("id_tripolar_justapostos");
    closePopup("id_1CaboDuto");
    closePopup("id_3CabosDuto");
    closePopup("id_unipolar_separado_canaleta");
    closePopup("id_unipolar_justapostos_canaleta");
    closePopup("id_unipolar_trifolio_canaleta");
    closePopup("id_tripolar_separado_canaleta");
    closePopup("id_tripolar_justapostos_canaleta");
    closePopup("li_posicionamentoCabosPorDuto");
    closePopup("li_posicionamentoCabos");
    closePopup("id_posicionamentoCabos");
    closePopup("li_relacaoCaboDuto");
    closePopup("id_relacaoCaboDuto");
}

function escondeDivs()
{
    //POSSIBILIDADE CABOS
    closePopup("li_eletrodutoMetalico");
    closePopup("li_eletrodutoMetalico_embutida_naval");
    closePopup("id_eletrodutoMetalico");
    closePopup("li_metalQuestion");
    closePopup("li_unipolar");
    closePopup("li_numeroCircuitos");
    closePopup("li_num_cabos");
    closePopup("li_numeroCircuitos_naval");
    closePopup("numeroCircuitoCamadas");
    closePopup("li_numeroCamadas");
    closePopup("li_numeroCamadas_embutida");
    closePopup("id_numeroCamadas");
    closePopup("li_distancia_eletrodutos");
    closePopup("li_distancia_cabos");
    closePopup("id_distanciaEntreCabos");
    closePopup("li_posicionamentoCabos");
    closePopup("li_posicionamentoCabosPorDuto");
    closePopup("id_posicionamentoCabos");
    closePopup("li_relacaoCaboDuto");
    closePopup("id_relacaoCaboDuto");
    closePopup("li_resistencia_termica_solo");
    closePopup("id_resistividadeTermica");
    closePopup("li_orientacaoCabo");
    closePopup("id_orientacaoCabo");
    closePopup("id_orientacao_horizontal");
    closePopup("id_orientacao_vertical");
    closePopup("id_eletrocalha_ou_perfilado");
    closePopup("id_isoladores");
    closePopup("id_suportes");
    closePopup("id_em_eletroduto_noflam");
    closePopup("id_diretamente");
    closePopup("id_em_eletroduto");
    closePopup("li_posicionamento_dos_eletrodutos");
    closePopup("id_eletroduto_ar_espacado");
    closePopup("id_eletroduto_ar_espacado_tripolar");
    closePopup("id_eletroduto_ar_justapostos");
    closePopup("id_eletroduto_ar_justapostos_tripolar");
    closePopup("id_tripolar_separados_bandeja");
    closePopup("id_tripolar_justapostos_bandeja");
    closePopup("id_unipolar_separados_bandeja");
    closePopup("id_unipolar_justapostos_bandeja");
    closePopup("id_unipolar_trifolio_bandeja");
    closePopup("id_orientacaoFatorCorrecao");
    closePopup("li_numero_de_bandejas");
    closePopup("id_numeroBandejas");
    closePopup("li_eletrodutos_bandeja");
    closePopup("li_ternas_bandeja");
    closePopup("li_cabos_bandeja");
    closePopup("id_numeroTernasBandeja");
    closePopup("id_tripolar_separados_vertical");
    closePopup("id_tripolar_justapostos_vertical");
    closePopup("id_unipolar_separados_vertical");
    closePopup("id_unipolar_justapostos_vertical");
    closePopup("id_unipolar_trifolio_vertical");
    closePopup("id_orientacaoFatorCorrecaoVertical");
    closePopup("id_numeroBandejasVertical");
    closePopup("id_numeroTernasVertical");
    closePopup("id_tripolar_separados_semCorrecao");
    closePopup("id_unipolar_separados_semCorrecao");
    closePopup("id_unipolar_trifolio_semCorrecao");
    closePopup("id_orientacaoFatorCorrecaoSemFator");
    closePopup("li_numero_circuitos");
    closePopup("id_formacao_Banco_Dutos");
    closePopup("id_Unipolar_Linear_2x2");
    closePopup("id_Unipolar_Linear_2x3");
    closePopup("id_Unipolar_Linear_3x3");
    closePopup("id_Unipolar_Trifolio_1_Circuito");
    closePopup("id_Unipolar_Trifolio_2x2");
    closePopup("id_Unipolar_Trifolio_2x3");
    closePopup("id_Unipolar_Trifolio_3x3");
    closePopup("id_Tripolar_Trifolio_1_Circuito");
    closePopup("id_Tripolar_Trifolio_2x2");
    closePopup("id_Tripolar_Trifolio_2x3");
    closePopup("id_Tripolar_Trifolio_3x3");
    closePopup("li_banco_dutos_variaveis_1");
    closePopup("li_banco_dutos_variaveis_2");
    closePopup("li_altura_canaleta");
    closePopup("id_alturaCanaleta");
    closePopup("li_largura_canaleta");
    closePopup("id_larguraCanaleta");
    closePopup("id_canaleta");
    closePopup("id_posicaoCabos");
    closePopup("id_Unipolar_Separados_1Circ");
    closePopup("id_Unipolar_Separados_2Circ");
    closePopup("id_Unipolar_Separados_3Circ");
    closePopup("id_Unipolar_Justapostos_1Circ");
    closePopup("id_Unipolar_Justapostos_2Circ");
    closePopup("id_Unipolar_Justapostos_3Circ");
    closePopup("id_Unipolar_Trifolio_1Circ");
    closePopup("id_Unipolar_Trifolio_2Circ");
    closePopup("id_Unipolar_Trifolio_3Circ");
    closePopup("id_Unipolar_Trifolio_4Circ");
    closePopup("id_Tripolar_Separados_1Circ");
    closePopup("id_Tripolar_Separados_2Circ");
    closePopup("id_Tripolar_Separados_3Circ");
    closePopup("id_Tripolar_Separados_4Circ");
    closePopup("li_profundidade");
    closePopup("li_profundidade_70");
    closePopup("li_profundidade_90");
    closePopup("li_cm_espaco_entre_cabos");
    closePopup("li_equivalente_2d");
    closePopup("li_nulo");
    closePopup("li_de_20cm");
    closePopup("li_secao_condutor");
    closePopup("id_secaoCondutor");
    closePopup("li_numero_condutores_fase");
    closePopup("id_numeroCabos");
    closePopup("li_naval_protecao_metalica");
    closePopup("li_naval_material_isolacao");
    closePopup("id_tipoCabo");
    closePopup("li_naval_baixa_desempenho_incendio");
    closePopup("id_aplicacao");
    /*closePopup("");
    closePopup("");
    closePopup("");
    closePopup("");
    closePopup("");
    /*closePopup("");
    closePopup("");
    closePopup("");
    closePopup("");
    closePopup("");
    closePopup("");
    closePopup("");
    closePopup("");
    closePopup("");
    closePopup("");
    closePopup("");
    closePopup("");
    closePopup("");
    closePopup("");
    closePopup("");
    closePopup("");
    /*closePopup("");*/
    
    //APARENTE
    closePopup("eletroduto-popup");
    closePopup("bandeja_perfurada");
    closePopup("leito");
    closePopup("bandeja_nao_perfurada");
    closePopup("suportes");
    closePopup("em_parede");
    closePopup("teto");
    closePopup("eletroduto");
    
    //EMBUTIDA
    closePopup("id_eletrocalha_fechada");
    closePopup("id_eletroduto_circular_naval");
    closePopup("id_eletroduto_parede_term_isolante_noflam");
    closePopup("id_eletroduto_parede_term_isolante");
    closePopup("id_caixilho_porta_janela");
    closePopup("li_eletroduto_circular_embutido");
    closePopup("li_eletroduto_circular_alvenaria");
    closePopup("id_eletroduto_circular");
    closePopup("id_eletroduto_circular_noflam");
    closePopup("id_caixilho_porta_janela");
    closePopup("li_em_alvenaria_diretamente");
    closePopup("li_embutido_diretamente");
    closePopup("id_embutida_alvenaria");
    
    //SUBTERRANEA
    closePopup("id_eletroduto_subterranea");
    closePopup("id_diretamente_enterrados");
    closePopup("id_canaleta_fechada");
    closePopup("id_canaleta_ventilada");
    closePopup("id_canaleta_fechada_noflam");
    closePopup("id_canaleta_ventilada_noflam");
    closePopup("id_unipolar_separado");
    closePopup("id_unipolar_justapostos");
    closePopup("id_unipolar_trifolio");
    closePopup("id_tripolar_separado");
    closePopup("id_tripolar_justapostos");
    closePopup("id_1CaboDuto");
    closePopup("id_3CabosDuto");
    closePopup("id_unipolar_separado_canaleta");
    closePopup("id_unipolar_justapostos_canaleta");
    closePopup("id_unipolar_trifolio_canaleta");
    closePopup("id_tripolar_separado_canaleta");
    closePopup("id_tripolar_justapostos_canaleta");
    closePopup("li_posicionamentoCabosPorDuto");
    closePopup("li_posicionamentoCabos");
    closePopup("id_posicionamentoCabos");
    closePopup("li_relacaoCaboDuto");
    closePopup("id_relacaoCaboDuto");
    /*closePopup("");
    closePopup("");
    closePopup("");
    closePopup("");*/
}

function possibilidadeInstalacaoOnChange()
{
    updateTemperaturaArSolo();
    
    //alert("Entrou em possibilidadeInstalacaoOnChange");
    
    var possibilidade = $("#possibilidadeInstalacao").val();
    var tensao = $("#systemVoltage").val();
    var pagina = "";
    var numeroCondutores = $("#conductorNumber").val();
    var cabo = $("#caboSelecionado").val();
    var sistema = $("#system").val();
    var localInstalacao = $("#localInstalacao").val();
    var tipoProduto = $("#cableList").val();
    
    escondeDivs();
    
    //showPopup("localInstalacaoAparente-popup");
    //showPopup("localInstalacaoContinuar-popup");
    
    resetPossibilidadeInstalacao();
    
    if (numeroCondutores == "" || numeroCondutores == "0")
    {
        alert("Selecione o número de condutores.");
        $("#possibilidadeInstalacao").val("0");
        return false;
    }
    
    if (cabo == "" || cabo == "0")
    {
        alert("Selecione o cabo.");
        $("#possibilidadeInstalacao").val("0");
        return false;
    }
    
    if (sistema == "" || sistema == "0")
    {
        alert("Selecione o sistema.");
        $("#possibilidadeInstalacao").val("0");
        return false;
    }
    
    var paginaH = 645;
    var paginaW = 620;
    
    var params = "?possibilidadeInstalacao=" + possibilidade + "&caboSelecionado=" + cabo + "&tipoProduto=" + tipoProduto;
    
    if (tensao == BAIXA)
    {
        if (possibilidade == APARENTE) //CONCLUIDO
        {
            showPossibilidadeAparente();
        }
        else if (possibilidade == EMBUTIDA) //CONCLUIDO
        {
            showPossibilidadeEmbutida();
        }
        else if (possibilidade == SUBTERRANEA) //CONCLUIDO
        {
            showPossibilidadeSubterranea();
        }
        else if (possibilidade == SUSPENSA) //CONCLUIDO
        {
            showPossibilidadeSuspensa();
        }
        else if (possibilidade == ESPACO_CONSTRUCAO) //CONCLUIDO
        {
            showPossibilidadeEspacoConstrucao();
        }        
    }
    else if (tensao == MEDIA || tensao == MEDIA_NAVAL)
    {
        /*var url = "posicionamentoCabos.sdf?numeroCondutores=" + numeroCondutores + "&possibilidadeInstalacao=" + possibilidade +
        "&nivelTensao=" + tensao;*/
        
        if (possibilidade == APARENTE) //CONCLUIDO
        {
            //pagina = "instalacaoAparente.sdf" + params + "&sistema=" + sistema + "&numeroCondutores=" + numeroCondutores;
            showPossibilidadeAparente();
        }
        else if (possibilidade == APARENTE_AR) //CONCLUIDO
        {
            showPosicionamentoCabos();
        }
        else if (possibilidade == EMBUTIDA) //CONCLUIDO
        {
            //pagina = "instalacaoEmbutida.sdf" + params + "&numeroCondutores=" + numeroCondutores;
            showPossibilidadeEmbutida();
        }
        else if (possibilidade == ELETRODUTO_APARENTE_AR || possibilidade == ELETRODUTO_NAO_METALICO_APARENTE_AR || possibilidade == ELETRODUTO_METALICO_APARENTE_AR)
        {
            //pagina = "eletrodutoAr.sdf?numeroCondutores=" + numeroCondutores + "&possibilidadeInstalacao=" + possibilidade;
            $("#step_posicionamentoCabo").val("submitEletrodutoAr");
            showEletrodutoAr();
        }
        else if (possibilidade == BANCO_DUTOS_SOLO) //CONCLUIDO
        {
            if (numeroCondutores == NCUNIPOLAR)
            {
                showPosicionamentoCabos();
            }
            else
            {
                //pagina = "bancoDutos.sdf?numeroCondutores=" + numeroCondutores + "&possibilidadeInstalacao=" + possibilidade +
                $("#step_posicionamentoCabo").val("submitBancoDutos");
                showBancoDutos();
            }
            
        }
        else if (possibilidade == CANALETA_FECHADA_SOLO) //CONCLUIDO
        {
            //pagina = "canaleta.sdf?numeroCondutores=" + numeroCondutores + "&possibilidadeInstalacao=" + possibilidade;
            $("#step_posicionamentoCabo").val("submitCanaleta");
            showCanaleta();
        }
        else if (possibilidade == DIRETAMENTE_SOLO)
        {
            if (numeroCondutores == TRIPOLAR)
            {
                //$("#tipoInstalacao").val(FORMACAO_ESPACADA);
                //pagina = "cabosSolo.sdf" + params + "&localInstalacao=" + DWRUtil.getValue("dimensionamento.tipoInstalacao") +
                //"&numeroCondutores=" + numeroCondutores + "&closeWindow=1";
                //cabosSolo.sdf
                $("#step_posicionamentoCabo").val("submitCabosSolo");
                showCabosSolo();
            }
            else
            {
                pagina = url;
            }
            
            paginaW = 688;
            
        }
        else if (possibilidade == ELETRODUTO_SOLO || possibilidade == ELETRODUTO_METALICO_SOLO || possibilidade == ELETRODUTO_NAO_METALICO_SOLO)
        {
            if (numeroCondutores == UNIPOLAR)
            {
                //pagina = url;
                showPosicionamentoCabos();
            }
            else
            {
                $("#tipoInstalacao").val(_3_CABOS);
                //pagina = "possibilidadeCabos.sdf?numeroCondutores=" + numeroCondutores + "&possibilidadeInstalacao=" + possibilidade +
                //"&nivelTensao=" + tensao + "&closeWindow=1";
                showPossibilidadeCabos();
            }
        }
    }
    
    /*if (pagina != "")
    {
        openWindow("dimensionamento/" + pagina, paginaH, paginaW);
    }*/
}

function isUndefinedOrNotZero(elementID) {
	var result = true;
	var element = document.getElementById(elementID);
	if (element != null) {
		result = element.value > 0;
	}
    
	return result;
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
        else if(possibilidade == SUSPENSA)
        {
            var local = $("#localInstalacao").val();
            
            if (local == "0")
            {
                alert("Selecione o local de instalação.");
                return false;
            }
            
            if (local == ISOLADORES)
            {
                $("#step_posicionamentoCabo").val("suspensaOrientacaoCabo");
                //objForm.action = "orientacaoCabo.sdf";
                showOrientacaoCabo();
            }
            else
            {
                $("#step_posicionamentoCabo").val("suspensaPossibilidadeCabos");
                showPossibilidadeCabos();
            }
            
        }
        else if(possibilidade == ESPACO_CONSTRUCAO)
        {
            $("#step_posicionamentoCabo").val("submitFinal");
            showPossibilidadeCabos();
        }
        else if (possibilidade == ELETRODUTO_APARENTE_AR || possibilidade == ELETRODUTO_NAO_METALICO_APARENTE_AR || possibilidade == ELETRODUTO_METALICO_APARENTE_AR)
        {
            //objForm.action = "opcoesInstalacao.sdf";
            showOpcoesInstalacao();
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
                    showPosicionamentoCabos();
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

function submitCabosSolo()
{
    var possibilidade = $("#possibilidadeInstalacao").val();
    
    var posicaoCabos = $("#posicaoCabos").val()
    
    if (posicaoCabos == "" || posicaoCabos == "0")
    {
        alert("Selecione o número de circuitos");
        return false;
    }
    
    if(isJustapostos())
    {
        if (possibilidade == DIRETAMENTE_SOLO)
        {
            $("#distanciaEntreCabos").val(NULA);
        }
    }
    
    $("#quantidadeCircuitos").val(posicaoCabos);

    $("#step_posicionamentoCabo").val("submitFinal");
    showResistividadeTermica();
}

function submitPosicionamentoCabos()
{
    var objPosicionamentoCabo = $("#posicionamentoCabos").val();
    var possibilidadeInstalacao = $("#possibilidadeInstalacao").val();
    var localInstalacao = $("#localInstalacao").val();
    var tipoInstalacao = $("#tipoInstalacao").val();
    
    if (objPosicionamentoCabo == 0)
    {
        if(isEletrodutoSolo() || isBancoDutos())
        {
            alert('Informe o Número de Cabos!');
            return false;
        }
        else
        {
            alert('Informe o Posicionamento do Cabo!');
            return false;
        }
    }
    else
    {
        if(isCabosEnergia())
        {
            var tipoInstalacao = $("#tipoInstalacao").val();
            if(tipoInstalacao == CONDUTORES_ISOLADOS_G || isColunaF())
            {
                closePopup("possibilidadeCabos-popup");
            }
            else
            {
                if(isExibirCabosDuto())
                {
                    showPossibilidadeCabos()
                }
                
                var possibilidadeInstalacao = $("#possibilidadeInstalacao").val();
                
                if ((objPosicionamentoCabo == FORMACAO_ESPACADA) && (possibilidadeInstalacao != BANCO_DUTOS_SOLO)  && (possibilidadeInstalacao != DIRETAMENTE_SOLO)  && (!isEletrodutoSolo())) {
                    
                    var objNivelTensao = $("#systemVoltage").val();
                    if (objNivelTensao == MEDIA)
                    {
                        //objForm.action = 'opcoesInstalacao.sdf?';
                        showOpcoesInstalacao();
                    }
                    else
                    {
                        showOrientacaoCabo();
                        //objForm.action = 'orientacaoCabo.sdf';
                    }
                }
                else if (isEletrodutoSolo())
                {
                    showPossibilidadeCabos();
                }
                else
                {
                    //alert("possibilidadeInstalacao: " + possibilidadeInstalacao + ", localInstalacao: " + localInstalacao);
                    if (possibilidadeInstalacao == APARENTE_AR)
                    {
                        //var url = "opcoesInstalacao.sdf" + params;
                        if (objPosicionamentoCabo == FORMACAO_ESPACADA)
                        {
                            showOpcoesInstalacao();
                        }
                        else if (objPosicionamentoCabo == FORMACAO_JUSTAPOSTA)
                        {
                            showOpcoesInstalacao();
                        }
                        else if (objPosicionamentoCabo == FORMACAO_TRIFOLIO)
                        {
                            showOpcoesInstalacao();
                        }
                    }
                    else if (possibilidadeInstalacao == BANCO_DUTOS_SOLO)
                    {
                        //var url = "bancoDutos.sdf" + params;
                        $("#step_posicionamentoCabo").val("submitBancoDutos");
                        showBancoDutos();
                    }
                    else if (possibilidadeInstalacao == CANALETA_FECHADA_SOLO)
                    {
                        //form.action = "opcoesInstalacao.sdf" + params;
                        showOpcoesInstalacao();
                    }
                    else if (possibilidadeInstalacao == DIRETAMENTE_SOLO)
                    {
                        //var url = "cabosSolo.sdf" + params;
                    }
                    else if (possibilidadeInstalacao == ELETRODUTO_SOLO)
                    {
                        //var url = "resistividadeTermica.sdf" + params;
                        showResistividadeTermica();
                    }
                    else if (tipoInstalacao == CONDUTORES_ISOLADOS_G)
                    {
                        if (localInstalacao == FORMACAO_ESPACADA)
                        {
                            //form.action = url;
                            showOpcoesInstalacao();
                        }
                    }
                }
            }
        }
        else
        {
            var numeroCondutores = $("#conductorNumber").val();
            
            if (objPosicionamentoCabo == FORMACAO_ESPACADA && numeroCondutores == 1)
            {
                //objForm.action = 'orientacaoCabo.sdf';
                showOrientacaoCabo();
            }
            else
            {
                //objForm.action = 'opcoesInstalacao.sdf';
                showOpcoesInstalacao();
            }
        }
    }
}

function submitPossibilidadeCabos()
{
    /*var numeroCondutores = $("#conductorNumber").val();
     var local = $("#localInstalacao").val();
     var possibilidade = $("#possibilidadeInstalacao").val();
     
     var possibilidadeInstalacao = $("#possibilidadeInstalacao").val();
     var posicionamentoCabo = $("#posicionamentoCabo").val();
     var nivelTensao = $("#systemVoltage").val();
     var tensaoIsolamento = $("#isolationVoltage").val();*/
    
    var objNumeroCamadas = document.getElementById('numeroCamadas');
    var objNumeroCircuitos = document.getElementById('numeroCircuitos');
    var eletrodutoMetalico = document.getElementById('eletrodutoMetalico');
    var distanciaEntreCabos = document.getElementById('');
    var posicionamentoCabos = document.getElementById('posicionamentoCabo');
    
    /*if (isUndefinedOrNotZero("numeroCircuitos") != true)
     {
     if(!isUnipolar())
     {
     alert("Selecione a opção de números de cabos multipolar por camada.");
     return false;
     }
     else
     {
     alert("Selecione a opção de número de circuitos.");
     return false;
     }
     }
     
     if (isUndefinedOrNotZero("eletrodutoMetalico") != true)
     {
     alert("Selecione a opção de eletroduto metálico.");
     return false;
     }
     
     alert("isUndefinedOrNotZero numeroCamadas: " + isUndefinedOrNotZero("numeroCamadas"));
     alert("numeroCamadas: " + $("#numeroCamadas").val());
     if (isUndefinedOrNotZero("numeroCamadas") != true)
     {
     alert("Selecione a opção de número de camadas.");
     //return false;
     }
     
     if (objNumeroCircuitos != undefined)
     {
     if(isColunaCEF())
     {
     if ((objNumeroCamadas != undefined))
     {
     if ((objNumeroCamadas.value == 2) && (objNumeroCircuitos.value < 2))
     {
     alert("Para essa modalidade de instalação e número de camadas, o número de circuitos deve ser maior ou igual a 2.");
     return false;
     }
     }
     }
     }
     
     if (isUndefinedOrNotZero("comboRelacaoCaboXDuto") != true)
     {
     alert("Selecione a opção de relação de tamanho Cabo X Duto.");
     return false;
     }
     
     if (isUndefinedOrNotZero("distanciaEntreCabos") != true)
     {
     if (document.getElementById("distanciaEntreCabos").disabled == "")
     {
     if(isEletrodutoSolo() || isEletroduto())
     {
     alert("Selecione a distância entre os eletrodutos.");
     return false;
     }
     else
     {
     alert("Selecione a distância entre os cabos.");
     return false;
     }
     }
     }*/
    
    if(isExibirPosicionamentoCabosSeparadoTrifolio() == true)
    {
        showPosicionamentoCabos();
        //form.action = 'posicionamentoCabos.sdf?' +
    }
    else
    {
        if(isExibirResistividadeTermica() == true)
        {
            $("#step_posicionamentoCabo").val("submitFinal");
            showResistividadeTermica();
            
            //form.action = 'resistividadeTermica.sdf?' +
        }
        else
        {
            alert("Entrou Else isExibirResistividadeTermica");
        }
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

function updatePosicaoCabos(formacao)
{
    $('#posicaoCabos option[value="'+formacao+'"]').attr({ selected : "selected" });    
}

function updateInstalacaoCabo(localInstalacao)
{
    $('#localInstalacao option[value="'+localInstalacao+'"]').attr({ selected : "selected" });
}

function updateFormacaoBancoDutos(formacao)
{
    $('#formacaoBancoDutos option[value="'+formacao+'"]').attr({ selected : "selected" });
}

function updateOrientacaoCabo(orientacao)
{
    $('#orientacaoCabo option[value="'+orientacao+'"]').attr({ selected : "selected" });
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
}

function orientacaoChange(selectedValue)
{
    var numeroBandejas = document.getElementById("numeroBandejas");
    var numeroTernasBandeja = document.getElementById("numeroTernasBandeja");
    var numeroBandejasVertical = document.getElementById("numeroBandejasVertical");
    var numeroTernasBandejaVertical = document.getElementById("numeroTernasBandejaVertical");
    
    if (selectedValue == HORIZONTAL)
    {
        if (numeroBandejas != null)
        {
            numeroBandejas.disabled = false;
        }
        
        if (numeroTernasBandeja != null)
        {
            numeroTernasBandeja.disabled = false;
        }
        
        if (numeroBandejasVertical != null)
        {
            numeroBandejasVertical.disabled = true;
        }
        
        if (numeroTernasBandejaVertical != null)
        {
            numeroTernasBandejaVertical.disabled = true;
        }
        
    }
    else if (selectedValue == VERTICAL)
    {
        if (numeroBandejas != null)
        {
            numeroBandejas.disabled = true;
        }
        
        if (numeroTernasBandeja != null)
        {
            numeroTernasBandeja.disabled = true;
        }
        
        if (numeroBandejasVertical != null)
        {
            numeroBandejasVertical.disabled = false;
        }
        
        if (numeroTernasBandejaVertical != null)
        {
            numeroTernasBandejaVertical.disabled = false;
        }
    }
    else if (selectedValue == SEM_FATOR)
    {
        if (numeroBandejas != null)
        {
            numeroBandejas.disabled = true;
        }
        
        if (numeroTernasBandeja != null)
        {
            numeroTernasBandeja.disabled = true;
        }
        
        if (numeroBandejasVertical != null) {
            numeroBandejasVertical.disabled = true;
        }
        
        if (numeroTernasBandejaVertical != null) {
            numeroTernasBandejaVertical.disabled = true;
        }
    }
}

function checkIsNumber(textBox)
{
    var isValid = true;
    var mikExp = /[$\\@\\\#%\^\&\*\(\)\[\]\+\_\{\}\`\~\=\|]/;
    var regexp = new RegExp("/\d+/g");
    var validChars = "0123456789.";
    
    
    var strPass = textBox.value;
    var strLength = strPass.length;
    var lchar = strPass.charAt((strLength) - 1);
    
    if(validChars.indexOf(lchar) == -1) {
        var tst = strPass.substring(0, (strLength) - 1);
        textBox.value = tst;
        isValid = false;
    }
    return isValid;
}

function validNumber(value)
{
    if (!checkIsNumber(value)) {
        alert("Para representação decimal, utilizar sistema de pontuação (.)");
    }
}

// Informação de Curto-Circuito - On Change.
function informacaoCurtoCircuitoOnChange()
{
    var curto = $("#fixarInformacaoCurto").val();
    
    if (curto == "1")
    {
        //openWindow("dimensionamento/informacaoCurto.sdf", 120, 620);
        $("#step_posicionamentoCabo").val("submitFinal");
        showInformacaoCurto();
    }
    else if (curto == "0")
    {
        $("#correnteCurto").val("0");
        $("#tempoAtuacaoProtecao").val("0");
        
        alert("O sistema irá encontrar a melhor solução para o sistema informado!");
    }
}

// Fixar Número de Cabos - On Change.
function fixarNumeroCabosOnChange()
{
    var fixar = $("#fixarNumeroCabos").val();
    
    if (fixar == "1")
    {
        //openWindow("dimensionamento/fixarNumeroCabos.sdf", 265, 350);
        $("#step_posicionamentoCabo").val("submitFinal");
        showFixarNumeroCabos();
    }
    else if (fixar == "0")
    {
        $("#numeroCabosFixado").val("0");
        alert("O sistema irá encontrar a melhor solução para o sistema informado!");
    }
}

// Fixar Seção - On Change.
function fixarSecaoOnChange()
{
    var fixar = $("#fixarSecaoCondutor").val();
    var cabo = $("#caboSelecionado").val();
    var condutores = $("#conductorNumber").val();
    
    if (cabo <= 0)
    {
        alert("Selecione o cabo.");
        $("#fixarSecaoCondutor").val("0");
        return false;
    }
    
    if (condutores <= 0)
    {
        alert("Selecione o número de condutores.");
        $("#fixarSecaoCondutor").val("0");
        return false;
    }
    
    if (fixar == "1")
    {
        //openWindow("dimensionamento/fixarSecao.sdf?familiaCabo=" + cabo + "&numeroCondutores=" + condutores, 120, 420);
        $("#step_posicionamentoCabo").val("submitFinal");
        showFixarSecao();
    }
    else if (fixar == "0")
    {
        $('#fixarSecaoCondutor option[value="0"]').attr({ selected : "selected" });
        $("#secaoCondutorFixado").val("0");
        alert("O sistema irá encontrar a melhor solução para o sistema informado!");
    }
}

function validar1()
{
    var objCorrenteCurto = document.getElementById('correnteCurto');
    var teste1 = /[0-9]\.[0-9]/;
    var teste2 = /[0-9]\.[0-9]{2}/;
    
	if($("#correnteCurto").val().search(teste1) == -1){
	//if (DWRUtil.getValue("correnteCurto").search(teste1) == -1)
        alert("A corrente de curto-circuito poderá ser composta por até seis números, sendo cinco inteiros e uma casa decimal obrigatória.");
        objCorrenteCurto.focus();
        return false;
    }else if ($("#correnteCurto").val().search(teste2) != -1){
    //else if (DWRUtil.getValue("correnteCurto").search(teste2) != -1)
        alert("A corrente de curto-circuito poderá ser composta por até seis números, sendo cinco inteiros e uma casa decimal obrigatória.");
        objCorrenteCurto.focus();
        return false;
    }
    return true;
}

function validar2()
{
    var objTempoAtuacao = document.getElementById('tempoAtuacao');
    var teste1 = /[0-9]\.[0-9]/;
    var teste2 = /[0-9]\.[0-9]{4}/;
    //if (DWRUtil.getValue("tempoAtuacao").search(teste1) == -1) {
	if($("#tempoAtuacao").val().search(teste1) == -1){
        alert("O tempo de atuação poderá ser composto por até cinco números: dois inteiros e três casas decimais, sendo uma casa decimal obrigatória.");
        objTempoAtuacao.focus();
        return false;
    //} else if (DWRUtil.getValue("tempoAtuacao").search(teste2) != -1) {
	}if($("#tempoAtuacao").val().search(teste2) == -1){
        alert("O tempo de atuação poderá ser composto por até cinco números: dois inteiros e três casas decimais, sendo uma casa decimal obrigatória.");
        objTempoAtuacao.focus();
        return false;
    }
    return true;
}

function submitSelecaoDimensionamento()
{
    calcular();
    showResultadoCalculo();
}