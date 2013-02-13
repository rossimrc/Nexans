/*function getTemperaturaMaximaCondutor(tipoProduto, nivelTensao, caboSelecionado, tensaoIsolamento, materialCondutor)
{
    $("#maximumTemperature").html("");
    $("#maximumTemperature").append(new Option("Selecione","0", false, false));
    
    
    //alert("Entrou na funcao");
    //alert("tipoProduto: " + tipoProduto + " - nivelTensao: " + nivelTensao + " - caboSelecionado: " + caboSelecionado + " - tensaoIsolamento: " + tensaoIsolamento + " - materialCondutor: " + materialCondutor);
    if(tipoProduto == CABOS_ENERGIA)
    {
        if(nivelTensao == BAIXA)
        {
            if(materialCondutor == ALUMINIO)
            {
                $("#maximumTemperature").append(new Option("70º","70", false, false));
            }
            else
            {
                if ((tensaoIsolamento == _450V_750V) || (caboSelecionado == AFITOX_750V) || (caboSelecionado == NOFLAN_ANTICHAMA_BWF_FLEXIVEL) || (caboSelecionado == VINIL) || (caboSelecionado == VINIL_FLEXIVEL) )
                {
                    $("#maximumTemperature").append(new Option("70º","70", false, false));
                }
                else if( (caboSelecionado == AFITOX_06_1KV) || (caboSelecionado == FITER_FLEX) )
                {
                    $("#maximumTemperature").append(new Option("90º","90", false, false));
                }
                else
                {
                    $("#maximumTemperature").append(new Option("70º","70", false, false));
                    $("#maximumTemperature").append(new Option("90º","90", false, false));
                }
            }
        }
        else if(nivelTensao == MEDIA)
        {
            if(caboSelecionado == EP_DRY_105C)
            {
                $("#maximumTemperature").append(new Option("105º","105", false, false));
            }
            else if(caboSelecionado == "0")
            {
                $("#maximumTemperature").append(new Option("90º","90", false, false));
                $("#maximumTemperature").append(new Option("105º","105", false, false));
            }
            else
            {
                $("#maximumTemperature").append(new Option("90º","90", false, false));
            }
            
        }
    }
    else if(tipoProduto == CABOS_NAVAIS)
    {
        $("#maximumTemperature").append(new Option("70º","70", false, false));
        $("#maximumTemperature").append(new Option("85º","85", false, false));
        $("#maximumTemperature").append(new Option("90º","90", false, false));
    }
    //alert("Saiu da funcao");
}*/

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

function updatePossibilidadeInstalacao()
{
    var tipoProduto = $("#cableList").val();
    var nivelTensao = $("#systemVoltage").val();
    
    getPossibilidadeInstalacao(tipoProduto, nivelTensao);
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
                showPopup("specification-popup");
                $("#cableConstruction").focus();
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
    $("#localInstalacao").val("");
    
    //DWRUtil.setValue("dimensionamento.localInstalacao", "0");
    $("#localInstalacao").val("");
    
    //IMPLEMENTAR OS CAMPOS DO TIPO HIDDEN CASO NECESSARIO
    /*DWRUtil.setValue("dimensionamento.tipoInstalacao", 23);
    DWRUtil.setValue("dimensionamento.resistividadeTermica", "<%=ResistividadeTermica._2_5.getValue()%>");
    DWRUtil.setValue("dimensionamento.posicaoCabosSolo", "0");
    DWRUtil.setValue("dimensionamento.formacaoBancoDutos", "0");
    DWRUtil.setValue("dimensionamento.numeroBandejas", "1");
    DWRUtil.setValue("dimensionamento.numeroTernasBandeja", "1");
    DWRUtil.setValue("dimensionamento.numeroBandejasVertical", "1");
    DWRUtil.setValue("dimensionamento.numeroTernasBandejaVertical", "1");
    DWRUtil.setValue("dimensionamento.orientacaoFatorCorrecao", "0");
    DWRUtil.setValue("dimensionamento.quantidadeCamadas", "1");
    DWRUtil.setValue("dimensionamento.quantidadeCircuitos", "1");
    DWRUtil.setValue("dimensionamento.eletrodutoMetalico", "0");
    DWRUtil.setValue("dimensionamento.distanciaEntreCabos", "0");
    DWRUtil.setValue("dimensionamento.relacaoCaboDuto", "");
    DWRUtil.setValue("dimensionamento.posicionamentoCabo", "0");
    DWRUtil.setValue("dimensionamento.orientacaoCabo", "0");*/
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
        if (uTensao == "kV")
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
			  	if (tensao == MEDIA)
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
    alert("Entrou correnteProjetoOnChange");
    
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
        
        if (unidade == "V")
        {
            tensao = tensao / 1000;
        }
        
        var potencia = corrente * tensao * Math.sqrt(3);
        $("#potenciaAparente").val(potencia.toFixed(1));
    }
        alert("Saiu correnteProjetoOnChange");
}

function potenciaAparenteOnChange()
{
    alert("Entrou potenciaAparenteOnChange");
    
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
        
        if (unidade == "V")
        {
            tensao = tensao / 1000;
        }
        
        var corrente = (potencia / tensao) / Math.sqrt(3);
        $("#correnteProjeto").val(corrente.toFixed(1));
    }
    
    alert("Saiu potenciaAparenteOnChange");
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
        $(".cable-photo").html("<img class='img-cabo' src='img/cabos/CaboAfitox06_1kV.jpg'></img>");
    }
    else if (cabo == AFITOX_750V)
    {
        //caboControl.src = "img/cabos/CaboAfitox750V.jpg";
        $(".cable-photo").html("<img class='img-cabo' src='img/cabos/CaboAfitox750V.jpg'></img>");
    }
    else if (cabo == EP_DRY)
    {
        //caboControl.src = "img/cabos/CaboEPDRY.jpg";
        $(".cable-photo").html("<img class='img-cabo' src='img/cabos/CaboEPDRY.jpg'></img>");
    }
    else if (cabo == EP_DRY_105C)
    {
        //caboControl.src = "img/cabos/CaboEPDRY105.jpg";
        $(".cable-photo").html("<img class='img-cabo' src='img/cabos/CaboEPDRY105'></img>");
    }
    else if (cabo == FITER_FLEX)
    {
        //caboControl.src = "img/cabos/CaboFiterFlex.jpg";
        $(".cable-photo").html("<img class='img-cabo' src='img/cabos/CaboFiterFlex.jpg'></img>");
    }
    else if (cabo == FIPEX_BF)
    {
        //caboControl.src = "img/cabos/CaboFiperxBF.jpg";
        $(".cable-photo").html("<img class='img-cabo' src='img/cabos/CaboFiperxBF.jpg'></img>");
    }
    else if (cabo == NOFLAN_ANTICHAMA_BWF_FLEXIVEL)
    {
        //caboControl.src = "img/cabos/CaboNoflamAntichamaBWFFlexivel.jpg";
        $(".cable-photo").html("<img class='img-cabo' src='img/cabos/CaboNoflamAntichamaBWFFlexivel.jpg'></img>");
    }
    else if (cabo == VINIL)
    {
        if (materialCondutor == COBRE)
        {
            //caboControl.src = "img/cabos/CaboVinil.jpg";
            $(".cable-photo").html("<img class='img-cabo' src='img/cabos/CaboVinil.jpg'></img>");
        }
        else
        {
            //caboControl.src = "img/cabos/CaboVinilAluminio.jpg";
            $(".cable-photo").html("<img class='img-cabo' src='img/cabos/CaboVinilAluminio.jpg'></img>");
        }
        
    }
    else if (cabo == VINIL_FLEXIVEL)
    {
        //caboControl.src = "img/cabos/CaboVinilFlexivel.jpg";
        $(".cable-photo").html("<img class='img-cabo' src='img/cabos/CaboVinilFlexivel.jpg'></img>");
    }
    else if (cabo == AFITOX_SM_BC)
    {
        //caboControl.src = "img/cabos/CaboAfitoxSM.jpg";
        $(".cable-photo").html("<img class='img-cabo' src='img/cabos/CaboAfitoxSM.jpg'></img>");
    }
    else if (cabo == AFITOX_XPBC)
    {
        //caboControl.src = "img/cabos/CaboAfitoxXP_06_1kV.jpg";
        $(".cable-photo").html("<img class='img-cabo' src='img/cabos/CaboAfitoxXP_06_1kV.jpg'></img>");
    }
    else if (cabo == AFITOX_SM_AS)
    {
        //caboControl.src = "img/cabos/CaboAfitoxSM.jpg";
        $(".cable-photo").html("<img class='img-cabo' src='img/cabos/CaboAfitoxSM.jpg'></img>");
    }
    else if (cabo == AFITOX_XPS)
    {
        //caboControl.src = "img/cabos/CaboAfitoxXP_06_1kV.jpg";
        $(".cable-photo").html("<img class='img-cabo' src='img/cabos/CaboAfitoxXP_06_1kV.jpg'></img>");
    }
    else if (cabo == AFITOX_SM)
    {
        //caboControl.src = "img/cabos/CaboAfitoxSM.jpg";
        $(".cable-photo").html("<img class='img-cabo' src='img/cabos/CaboAfitoxXP_06_1kV.jpg'></img>");
    }
    else if (cabo == AFITOX_XP)
    {
        //caboControl.src = "img/cabos/CaboAfitoxXP_06_1kV.jpg";
        $(".cable-photo").html("<img class='img-cabo' src='img/cabos/CaboAfitoxXP_06_1kV.jpg'></img>");
    }
    else if (cabo == AFITOX_MXP_BC)
    {
        //caboControl.src = "img/cabos/CaboAfitoxMXP.jpg";
        $(".cable-photo").html("<img class='img-cabo' src='img/cabos/CaboAfitoxMXP.jpg'></img>");
    }
    else if (cabo == AFITOX_MXP_S)
    {
        //caboControl.src = "img/cabos/CaboAfitoxMXP.jpg";
        $(".cable-photo").html("<img class='img-cabo' src='img/cabos/CaboAfitoxMXP.jpg'></img>");
        
    }
    else if (cabo == AFITOX_MEP_BC)
    {
        //caboControl.src = "img/cabos/CaboAfitoxMXP.jpg";
        $(".cable-photo").html("<img class='img-cabo' src='img/cabos/CaboAfitoxMXP.jpg'></img>");
    }
    else if (cabo == AFITOX_MEP_S)
    {
        //caboControl.src = "img/cabos/CaboAfitoxMXP.jpg";
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
    else if (nivelTensao == MEDIA)
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

function possibilidadeInstalacaoOnChange()
{
    updateTemperaturaArSolo();
    
    alert("Entrou em possibilidadeInstalacaoOnChange");
    
    var possibilidade = $("#possibilidadeInstalacao").val();
    var tensao = $("#systemVoltage").val();
    var pagina = "";
    var numeroCondutores = $("#conductorNumber").val();
    var cabo = $("#caboSelecionado").val();
    var sistema = $("#system").val();
    var localInstalacao = $("#localInstalacao").val();
    var tipoProduto = $("#cableList").val();
    
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
        if (possibilidade == APARENTE)
        {
            //pagina = "instalacaoAparente.sdf" + params + "&sistema=" + sistema + "&numeroCondutores=" + numeroCondutores;
            showPopup("localInstalacaoAparente-popup");
            //$("#cableConstruction").focus();
        }
        else if (possibilidade == EMBUTIDA)
        {
            //pagina = "instalacaoEmbutida.sdf" + params + "&numeroCondutores=" + numeroCondutores;
        }
        else if (possibilidade == SUBTERRANEA)
        {
            //pagina = "instalacaoSubterranea.sdf" + params;
        }
        else if (possibilidade == SUSPENSA)
        {
            //pagina = "instalacaoSuspensa.sdf" + params + "&sistema=" + sistema;
        }
        else if (possibilidade == ESPACO_CONSTRUCAO)
        {
            //pagina = "instalacaoEspacoConstrucao.sdf" + params;
        }
        
    }
    /*else if (tensao == MEDIA)
    {
        var url = "posicionamentoCabos.sdf?numeroCondutores=" + numeroCondutores + "&possibilidadeInstalacao=" + possibilidade +
        "&nivelTensao=" + tensao;
        
        if (possibilidade == APARENTE)
        {
            pagina = "instalacaoAparente.sdf" + params + "&sistema=" + sistema + "&numeroCondutores=" + numeroCondutores;
        }
        else if (possibilidade == APARENTE_AR)
        {
            pagina = "posicionamentoCabos.sdf?numeroCondutores=" + numeroCondutores + "&possibilidadeInstalacao=" + <%=PossibilidadeInstalacao.APARENTE_AR.getValue()%>;
        }
        else if (possibilidade == EMBUTIDA)
        {
            pagina = "instalacaoEmbutida.sdf" + params + "&numeroCondutores=" + numeroCondutores;
        }
        else if (possibilidade == ELETRODUTO_APARENTE_AR || possibilidade == ELETRODUTO_NAO_METALICO_APARENTE_AR || possibilidade == ELETRODUTO_METALICO_APARENTE_AR)
        {
            pagina = "eletrodutoAr.sdf?numeroCondutores=" + numeroCondutores + "&possibilidadeInstalacao=" + possibilidade;;
            
        }
        else if (possibilidade == BANCO_DUTOS_SOLO)
        {
            if (numeroCondutores == UNIPOLAR)
            {
                pagina = url;
            } else
            {
                $("#tipoInstalacao").val(_1_CABO);
                var tipoInstalacao = $("#tipoInstalacao").val();
                pagina = "bancoDutos.sdf?numeroCondutores=" + numeroCondutores + "&possibilidadeInstalacao=" + possibilidade +
                "&localInstalacao=" + tipoInstalacao;
            }
            
        }
        else if (possibilidade == CANALETA_FECHADA_SOLO)
        {
            pagina = "canaleta.sdf?numeroCondutores=" + numeroCondutores + "&possibilidadeInstalacao=" + possibilidade;
        }
        else if (possibilidade == DIRETAMENTE_SOLO)
        {
            if (numeroCondutores == TRIPOLAR)
            {
                $("#tipoInstalacao").val(FORMACAO_ESPACADA);
                pagina = "cabosSolo.sdf" + params + "&localInstalacao=" + DWRUtil.getValue("dimensionamento.tipoInstalacao") +
                "&numeroCondutores=" + numeroCondutores + "&closeWindow=1";
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
                pagina = url;
            }
            else
            {
                $("#tipoInstalacao").val(_3_CABOS);
                pagina = "possibilidadeCabos.sdf?numeroCondutores=" + numeroCondutores + "&possibilidadeInstalacao=" + possibilidade +
                "&nivelTensao=" + tensao + "&closeWindow=1";
            }
        }
    }
    
    if (pagina != "")
    {
        openWindow("dimensionamento/" + pagina, paginaH, paginaW);
    }*/
}

function getLocaisInstalacao()
{
    dimensionamento = new DimensionamentoBean();
    dimensionamento.setTipoProduto($("#cableList").val());
    dimensionamento.setNivelTensao($("#systemVoltage").val());
    dimensionamento.setNumeroCondutores($("#conductorNumber").val());
    
    $("#locaisInstalacao").html("");
    $("#locaisInstalacao").append(new Option("Selecione","0", false, false));

    if (dimensionamento.isCabosEnergia())
    {
        addItem(LocalInstalacao.ELETRODUTO);
        
        if ((caboSelecionado != NOFLAN_ANTICHAMA_BWF_FLEXIVEL) && (caboSelecionado != AFITOX_750V))
        {
            $("#locaisInstalacao").append(new Option(LOCAL_INSTALACAO[BANDEJA_PERFURADA].description,BANDEJA_PERFURADA, false, false));
            $("#locaisInstalacao").append(new Option(LOCAL_INSTALACAO[LEITO].description,LEITO, false, false));
            $("#locaisInstalacao").append(new Option(LOCAL_INSTALACAO[BANDEJA_NAO_PERFURADA].description,BANDEJA_NAO_PERFURADA, false, false));
            $("#locaisInstalacao").append(new Option(LOCAL_INSTALACAO[SUPORTES].description,SUPORTES, false, false));
            $("#locaisInstalacao").append(new Option(LOCAL_INSTALACAO[PAREDES].description,PAREDES, false, false));
            $("#locaisInstalacao").append(new Option(LOCAL_INSTALACAO[TETO].description,TETO, false, false));
        }
    }
    else
    {
        $("#locaisInstalacao").append(new Option(LOCAL_INSTALACAO[BANDEJA_PERFURADA].description,BANDEJA_PERFURADA, false, false));
        $("#locaisInstalacao").append(new Option(LOCAL_INSTALACAO[LEITO].description,LEITO, false, false));
        $("#locaisInstalacao").append(new Option(LOCAL_INSTALACAO[BANDEJA_NAO_PERFURADA].description,BANDEJA_NAO_PERFURADA, false, false));
        $("#locaisInstalacao").append(new Option(LOCAL_INSTALACAO[SUPORTES].description,SUPORTES, false, false));
        $("#locaisInstalacao").append(new Option(LOCAL_INSTALACAO[PAREDES].description,PAREDES, false, false));
        $("#locaisInstalacao").append(new Option(LOCAL_INSTALACAO[TETO].description,TETO, false, false));
    }
}