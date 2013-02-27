// Tempo de duraÁ„o do curto circuito no condutor (s).
TCC = 0.3;

// Corrente de curto circuito na blindagem (A).
ICB = 1360;

// Tempo de curto circuito na blindagem (s).
TCB = 0.3;

// SeÁ„o da blindagem (mm2);
SB = 6;

// Contante tÈrmica do cabo analisando o condutor (∫C).
KC_COBRE = 0.34;
KC_ALUMINIO = 0.23;

// Contante tÈrmica do cabo analisando a blindagem (∫C).
KB_COBRE = 0.34;
KB_ALUMINIO = 0.23;

// Temperatura absoluta para resistÍncia nula analisando o condutor (∫C).
BETA_C_COBRE = 234.5;
BETA_C_ALUMINIO = 228.1;

// Temperatura absoluta para resistÍncia nula analisando a blindagem (∫C).
BETA_B_COBRE = 234.5;

function getTccDefault() {
    return TCC;
}

/**
 * @return Corrente de curto circuito na blindagem (A).
 */
function getIcbDefault()
{
    return ICB;
}

/**
 * @return Tempo de curto circuito na blindagem (s).
 */
function getTcbDefault()
{
    return TCB;
}

/**
 * @return SeÁ„o da blindagem (mm2);
 */
function getSbDefault()
{
    return SB;
}

/**
 * @return Contante tÈrmica do cabo analisando o condutor (∫C).
 */
function double getKcCobre()
{
    return KC_COBRE;
}

/**
 * @return Contante tÈrmica do cabo analisando o condutor (∫C).
 */
function getKcAluminio()
{
    return KC_ALUMINIO;
}

/**
 * @return Contante tÈrmica do cabo analisando a blindagem (∫C).
 */
function getKbCobre()
{
    return KB_COBRE;
}

function getKbAluminio()
{
    return KB_ALUMINIO;
}

/**
 * @return Temperatura absoluta para resistÍncia nula analisando o condutor (∫C).
 */
function getBetaCAluminio()
{
    return BETA_C_ALUMINIO;
}

/**
 * @return Temperatura absoluta para resistÍncia nula analisando o condutor (∫C).
 */
function getBetaCCobre()
{
    return BETA_C_COBRE;
}

/**
 * @return Temperatura absoluta para resistÍncia nula analisando a blindagem (∫C).
 */
function getBetaBCobre()
{
    return BETA_B_COBRE;
}

function getTetafb()
{
    return 200;
}

function getTeta0b()
{
    var dimensionamento = getDimensionamentoTabelaUtil();
    var value = 0;
    
    if (dimensionamento.getCaboSelecionado() == EP_DRY || dimensionamento.getCaboSelecionado() == Cabo.FIPEX_BF)
    {
        if (dimensionamento.getTensaoIsolamento() <= _15KV_25KV)
        {
            value = 85;
        }
        else
        {
            value = 80;
        }
    }
    else if (dimensionamento.getCaboSelecionado() == EP_DRY_105C || dimensionamento.getCaboSelecionado() == FIPEX_BF)
    {
        if (dimensionamento.getTensaoIsolamento() <= _15KV_25KV)
        {
            value = 100;
        }
        else
        {
            value = 95;
        }
    }
    
    return value;
}