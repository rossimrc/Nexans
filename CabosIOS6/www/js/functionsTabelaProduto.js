function getFamilia(cabo)
{
	//alert('Teste: ' + parseInt(cabo)%1000);
    if(parseInt(cabo)<1000)
    {
    	return cabo;
    }
    else
    {
    	return parseInt(cabo)%1000;
    }
}

function getTensaoIsolamentoDesc(tensaoIsolamento)
{
    var tensaoIsolamento = $("#isolationVoltage").val();
    var desc = "";
    
    if (tensaoIsolamento == _450V_750V)
    {
        desc = "450/750";
    }
    else if (tensaoIsolamento == _06KV_1KV)
    {
        desc = "0.6/1";
    }
    else if (tensaoIsolamento == _3_6KV_6KV)
    {
        desc = "3.6/6";
    }
    else if (tensaoIsolamento == _6KV_10KV)
    {
        desc = "6/10";
    }
    else if (tensaoIsolamento == _8_7KV_15KV)
    {
        desc = "8.7/15";
    }
    else if (tensaoIsolamento == _12KV_20KV)
    {
        desc = "12/20";
    }
    else if (tensaoIsolamento == _15KV_25KV)
    {
        desc = "15/25";
    }
    else if (tensaoIsolamento == _20KV_35KV)
    {
        desc = "20/35";
    }
    
    return desc;
}