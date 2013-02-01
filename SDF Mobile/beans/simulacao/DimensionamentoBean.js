/*****************
 * ENUM-LIKE JSON
 *****************/

RESISTIVIDADE_TERMICA = {
	1	: {value : 1, description : "1 K.m/W"},
    1.5	: {value : 2, description : "1,5 K.m/W"},
    2	: {value : 3, description : "2 K.m/W"},
    3	: {value : 4, description : "3 K.m/W"},
    2.5	: {value : 5, description : "2,5 K.m/W"}
};

/////////////////////
BAIXA = 1;
MEDIA = 2;
MEDIA_NAVAL = 3;
/////////////////////
NIVEL_TENSAO = {
	1 : {description : "Baixa Tensão até 1kV"},
    2 : {description : "Média Tensão de 1kV até 35kV"},
    3 : {description : "Média Tensão de 1kV até 20kV"}
};

/////////////////////
CABOS_ENERGIA = 1;
CABOS_NAVAIS = 2;
/////////////////////
TIPO_PRODUTO = {
	1 : {description : "Cabos de Potência"},
	2 : {description : "Cabos Navais (Offshore)"}
};

/////////////////////
COBRE = 1;
ALUMINIO = 2;
/////////////////////
MATERIAL_CONDUTOR = {
	1 : {description : "Cobre"},
	2 : {description : "Alumínio"}
};

/////////////////////
UNIPOLAR = 1;
BIPOLAR = 2;
TRIPOLAR = 3;
TETRAPOLAR = 4;
/////////////////////
NUMERO_CONDUTORES = {
	1 : {description : "Unipolar - Um condutor"},
	2 : {description : "Bipolar - Dois condutores"},
	3 : {description : "Tripolar - Três condutores"},
	4 : {description : "Tetrapolar - Quatro condutores"}
};

/////////////////////
APARENTE = 1;
EMBUTIDA = 2;
ESPACO_CONSTRUCAO = 3;
SUBTERRANEA = 4;
SUSPENSA = 5;
APARENTE_AR = 6;
BANCO_DUTOS_SOLO = 7;
CANALETA_FECHADA_SOLO = 8;
DIRETAMENTE_SOLO = 9;
ELETRODUTO_APARENTE_AR = 10;
ELETRODUTO_SOLO = 11;
ELETRODUTO_NAO_METALICO_APARENTE_AR = 12;
ELETRODUTO_METALICO_APARENTE_AR = 13;
ELETRODUTO_NAO_METALICO_SOLO = 14;
ELETRODUTO_METALICO_SOLO = 15;
/////////////////////
POSSIBILIDADE_INSTALACAO = {
	1	: {description : "Aparente"},
	2	: {description : "Embutida"},
	3	: {description : "Espaço de construção"},
	4	: {description : "Subterrânea"},
	5	: {description : "Suspensa"},
	6	: {description : "Aparente ao Ar (Bandeja - Sem exposição solar)"},
	7	: {description : "Banco de dutos no Solo"},
	8	: {description : "Canaleta fechada no Solo"},
	9	: {description : "Diretamente enterrado no Solo"},
	10	: {description : "Eletroduto aparente ao Ar (Bandeja - Sem exposição solar)"},
	11	: {description : "Eletroduto no Solo"},
	12	: {description : "Eletroduto não metálico aparente ao ar (Sem exposição solar)"},
	13	: {description : "Eletroduto metálico aparente ao ar (Sem exposição solar)"},
	14	: {description : "Eletroduto não metálico no solo"},
	15	: {description : "Eletroduto metálico no solo"}
};

/////////////////////
NOFLAN_ANTICHAMA_BWF_FLEXIVEL = 370;
AFITOX_750V = 1020;
AFITOX_06_1KV = 2020;
VINIL = 390;
VINIL_FLEXIVEL = 400;
FITER_FLEX = 340;
EP_DRY = 230;
FIPEX_BF = 300;
EP_DRY_105C = 220;
AFITOX_SM_BC = 150;
AFITOX_XPBC = 200;
AFITOX_SM_AS = 140;
AFITOX_XPS = 210;
AFITOX_SM = 130;
AFITOX_XP = 190;
AFITOX_MXP_BC = 110;
AFITOX_MXP_S = 120;
AFITOX_MEP_BC = 70;
AFITOX_MEP_S = 80;
/////////////////////
CABO = {
	370		: {description : "Noflam Antichama BWF Flexível"},
    1020	: {description : "Afitox-F 750V"},
    2020	: {description : "Afitox-F 0,6/1kV"},
    390		: {description : "Vinil"},
    400		: {description : "Vinil Flexível"},
    340 	: {description : "Fiter Flex"},
    230 	: {description : "EP-DRY"},
    300 	: {description : "FIPEX BF"},
    220		: {description : "EP-DRY 105ºC"},
    150		: {description : "Afitox SM BC"},
    200 	: {description : "Afitox XPBC"},
    140 	: {description : "Afitox SM AS"},
    210 	: {description : "Afitox XPS"},
    130 	: {description : "Afitox SM"},
    190 	: {description : "Afitox XP"},
    110 	: {description : "Afitox MXP BC"},
    120		: {description : "Afitox MXP S"},
    70		: {description : "Afitox MEP BC"},
    80		: {description : "Afitox MEP S"}
}

/////////////////////
ELETRODUTO = 1;
BANDEJA_PERFURADA = 2;
LEITO = 3;
BANDEJA_NAO_PERFURADA = 4;
SUPORTES = 5;
PAREDES = 6;
MOLDURA = 7;
PAREDE_ISOLANTE = 8;
ALVENARIA = 9;
ELETRODUTO_PAREDE = 10;
CAIXILHO_PORTA_PAREDE = 11;
ELETRODUTO_CIRCULAR_ALVENARIA = 12;
DIRETAMENTE_ENTERRADOS = 13;
CANALETA_FECHADA = 14;
CANALETA_VENTILADA = 15;
ELETROCALHA_PERFILADO = 16;
ISOLADORES = 17;
DIRETAMENTE = 18;
ELETRODUTO_SECAO_CIRCULAR = 19;
ELETROCALHA_FECHADA_OU_ELETRODUTO = 1;
TETO = 23;
/////////////////////
LOCAL_INSTALACAO = {
	1	: {description : "Eletroduto"},
    2	: {description : "Bandeja Perfurada"},
    3	: {description : "Leito  : {Escada para Cabos}"},
    4	: {description : "Bandeja não perfurada  : {Prateleira}"},
    5	: {description : "Suportes"},
    6	: {description : "Em paredes"},
    7	: {description : "Moldura"},
    8	: {description : "Em parede isolante diretamente"},
    9	: {description : "Em alvenaria diretamente"},
    10	: {description : "Eletroduto em parede termicamente isolante"},
    11	: {description : "Caixilho de porta ou janela"},
    12	: {description : "Eletroduto circular em alvenaria"},
    13	: {description : "Diretamente enterrados"},
    14	: {description : "Canaleta fechada"},
    15	: {description : "Canaleta ventilada"},
    16	: {description : "Eletrocalha ou perfilado"},
    17	: {description : "Isoladores"},
    18	: {description : "Diretamente"},
    19	: {description : "Em eletroduto  : {Seção circular}"},
    1	: {description : "Eletrocalha fechada ou Eletroduto"},
    23	: {description : "Teto  : {Fixação Direta}"}
};

/////////////////////
CABOS_UNIPOLARES_B1 = 1;
CABOS_UNIPOLARES_B1 = 2;
CABOS_UNIPOLARES_F = 3;
CABOS_MULTIPOLARES_E = 4;
CABOS_UNIPOLARES_C = 5;
CABOS_MULTIPOLARES_C = 6;
CABOS_MULTIPOLARES_A1 = 7;
CABOS_UNIPOLARES_A1 = 8;
CABOS_MULTIPOLARES_A2 = 9;
CABOS_UNIPOLARES_D = 10;
CABOS_MULTIPOLARES_D = 11;
CABOS_MULTIPOLARES_B1 = 12;
CONDUTORES_ISOLADOS_G = 13;
CABOS_UNIPOLARES_B1_B2 = 14;
CABOS_MULTIPOLARES_B1_B2 = 15;
CABOS_UNIPOLARES_B2_B1 = 16;
CABOS_MULTIPOLARES_B2_B1 = 17;
CONDUTORES_ISOLADOS_B1 = 18;
CONDUTORES_ISOLADOS_A1 = 19;
CONDUTORES_ISOLADOS_B2_B1 = 20;
FORMACAO_LINEAR = 21;
FORMACAO_TRIFOLIO = 22;
FORMACAO_JUSTAPOSTA = 23;
FORMACAO_ESPACADA = 24;
FORMACAO_HORIZONTAL = 25;
FORMACAO_VERTICAL = 26;
INSTALACAO_BANDEJAS = 27;
INSTALACAO_VERTICAL = 28;
SEM_FATOR_CORRECAO = 29;
_1_CABO = 24;
_3_CABOS = 22;
/////////////////////
TIPO_INSTALACAO = {
	1	: {description : "Cabos unipolares"},
	2	: {description : "Cabos multipolares"},
	3	: {description : "Cabos unipolares"},
	4	: {description : "Cabos multipolares"},
	5	: {description : "Cabos unipolares"},
	6	: {description : "Cabos multipolares"},
	7	: {description : "Cabos multipolares"},
	8	: {description : "Cabos unipolares"},
	9	: {description : "Cabos multipolares"},
	10	: {description : "Cabos unipolares"},
	11	: {description : "Cabos multipolares"},
	12	: {description : "Cabos multipolares"},
	13	: {description : "Condutores isolados"},
	14	: {description : "Cabos unipolares"},
	15	: {description : "Cabos multipolares"},
	16	: {description : "Cabos unipolares"},
	17	: {description : "Cabos multipolares"},
	18	: {description : "Condutores isolados"},
	19	: {description : "Condutores isolados"},
	20	: {description : "Condutores isolados"},
	21	: {description : "Formação espaçada"},
	22	: {description : "Trifólio"},
	23	: {description : "Plano justapostos"},
	24	: {description : "Formação Espaçada"},
	25	: {description : "Formação Horizontal"},
	26	: {description : "Formação Vertical"},
	27	: {description : "Instalação em Bandejas"},
	28	: {description : "Instalação Vertical"},
	29	: {description : "Não precisa aplicar fator de correção"},
	24	: {description : "Um cabo por duto"},
	22	: {description : "Três cabos por duto"}
};


/////////////////////
HORIZONTAL = 1;
VERTICAL = 2;
/////////////////////
ORIENTACAO_CABO = {
	1 : {description : "Formação Horizontal"},
	2 : {description : "Formação Vertical"}
};

/////////////////////
UM_CIRCUITO = 1;
DOIS_CIRCUITO = 2;
TRES_CIRCUITO = 3;
QUATRO_CIRCUITO = 4;
SEIS_CIRCUITO = 6;
NOVE_CIRCUITO = 9;
TRES_CABOS_UNIPOLARES_ENCOSTADOS = 10;
TRES_CABOS_UNIPOLARES_AFASTADOS = 11;
/////////////////////
POSICAO_CABOS = {
	1	: {description : "1 circuito"},
    2	: {description : "2 circuitos"},
    3	: {description : "3 circuitos"},
    4	: {description : "4 circuitos"},
    6	: {description : "6 circuitos"},
    9	: {description : "9 circuitos"},	
    10	: {description : "3 cabos unipolares em plano encostados ou em trifolio ou um cabo tripolar  : {método H}"},
    11	: {description : "3 cabos unipolares em plano afastados de no mínimo um diâmetro."}
};

TEMPERATURA_MAXIMA = {
    35	: {description : "35ºC"},
    40	: {description : "40ºC"},
    45	: {description : "45ºC"},
    50	: {description : "50ºC"},
    55	: {description : "55ºC"},
    60	: {description : "60ºC"},
    65	: {description : "65ºC"},
    70	: {description : "70ºC"},
    75	: {description : "75ºC"},
    80	: {description : "80ºC"},
    85	: {description : "85ºC"},
    90	: {description : "90ºC"},
    95	: {description : "95ºC"},
    105	: {description : "105ºC"}	
};

/////////////////////
SEM_FATOR = 1;
HORIZONTAL = 2;
VERTICAL = 3;
/////////////////////
ORIENTACAO_FATOR_CORRECAO = {
	1 : {description : "Não necessita aplicar fator de correção"},
    2 : {description : "Instalação horizontal"},
    3 : {description : "Instalacao vertical"}
};

/////////////////////
_1POINT5V20 = 1;
_VMAIORIGUAL20DE = 2;
_1POINT5V5 = 3;
_5V50 = 4;
/////////////////////
RELACAO_CABO_DUTO = {
	1 : {description : "1,5De <= V < 20De"},
	2 : {description : "V => 20De"},
	3 : {description : "1,5De <= V < 5De"},
	4 : {description : "5De <= V < 50De"}
};

/////////////////////
_450V_750V = 1;
_06KV_1KV = 2;
_3_6KV_6KV = 3;
_6KV_10KV = 4;
_8_7KV_15KV = 5;
_12KV_20KV = 6;
_15KV_25KV = 7;
_20KV_35KV = 8;
/////////////////////
TENSAO_ISOLAMENTO = {
	1 : {description : "450/750V"},
	2 : {description : "0.6/1kV"},
	3 : {description : "3.6/6kV"},
	4 : {description : "6/10kV"},
	5 : {description : "8.7/15kV"},
	6 : {description : "12/20kV"},
	7 : {description : "15/25kV"},
	8 : {description : "20/35kV"}
}

/////////////////////
MONOFASICO_DOIS_CONDUTORES = 1;
MONOFASICO_TRES_CONDUTORES = 2;
DUAS_FASES_SEM_NEUTRO = 3;
DUAS_FASES_COM_NEUTRO = 4;
TRIFASICO_SEM_NEUTRO = 5;
TRIFASICO_COM_NEUTRO = 6;
/////////////////////
SISTEMA = {
    1 : {description : "Monofásico a dois condutores"},
    2 : {description : "Monofásico a três condutores"},
    3 : {description : "Duas fases sem neutro"},
    4 : {description : "Duas fases com neutro"},
    5 : {description : "Trifásico sem neutro"},
    6 : {description : "Trifásico com neutro"}
}

/////////////////////
ILUMINACAO = 1;
FORCA = 2;
SINALIZACAO = 3;
CONTROLE = 4;
APLICACOES_ESPECIAIS = 5;
OUTROS = 6;
/////////////////////
UTILIZACAO_CIRCUITO = {
    1 : {description : "Circuito de Iluminação"},
    2 : {description : "Circuito de Força"},
    3 : {description : "Circuito de Sinalização"},
    4 : {description : "Circuito de Controle"},
    5 : {description : "Circuito de extrabaixa tensão para aplicações especiais"},
    6 : {description : "Para qualquer outra aplicação"}
}

/////////////////////
_2X2 = 1;
_2X3 = 2;
_3X3 = 3;
_3X4 = 4;
/////////////////////
BANCO_DUTOS = {
	1 : {description : "1 Circuito"},
	2 : {description : "2 Circuitos"},
	3 : {description : "3 Circuitos"},
	4 : {description : "4 Circuitos"}
}

//-----------------------------------------------------------------------------------------------------------//
function DimensionamentoBean() {
    this.codigo = 0;
    this.tipoProduto = 0;
    this.frequencia = 0;
    this.nivelTensao = 0;
    this.unidadeTensao = "";
    this.materialCondutor = 0;
    this.numeroCondutores = 0;
    this.tensaoServico = 0;
    this.tensaoIsolamento = 0;
    this.utilizacaoCircuito = 0;
    this.sistema = 0;
    this.temperaturaMaximaCondutor = 0;
    this.caboSelecionado = 0;
    this.possibilidadeInstalacao = 0;
    this.temperaturaArSolo = 0;
    this.comprimentoCircuito = 0;
    this.quedaTensaoMaxima = 0;
    this.fatorPotencia = 0;
    this.correnteProjeto = 0;
    this.potenciaAparente = 0;
    this.fixarSecaoCondutor = 0;
    this.fixarNumeroCabos = 0;
    this.fixarInformacaoCurto = 0;
    this.localInstalacao = 0;
    this.tipoInstalacao = FORMACAO_JUSTAPOSTA;
    this.eletrodutoMetalico = 0;
    this.secaoCondutorFixado = 0;
    this.numeroCabosFixado = 0;
    this.correnteCurto = 0;
    this.tempoAtuacaoProtecao = 0;
    this.resistividadeTermica = RESISTIVIDADE_TERMICA[2.5];
    this.posicionamentoCabo = 0;
    this.posicaoCabosSolo = 0;
    this.formacaoBancoDutos = 0;
    this.numeroBandejas = 1;
    this.numeroTernasBandeja = 0;
    this.numeroBandejasVertical = 0;
    this.numeroTernasBandejaVertical = 0;
    this.orientacaoFatorCorrecao = 0;
    this.quantidadeCircuitos = 0;
    this.quantidadeCamadas = 1;
    this.sistemaAterramento = 0;
    this.distanciaEntreCabos = 0;
    this.orientacaoCabo = 0;
    this.relacaoCaboDuto = 0;
    this.alturaCanaleta = 0;
    this.larguraCanaleta = 0;
    this.tipoCabo = 0;
    this.aplicacao = 0;
    
    this.isSecaoCondutorFixada = function() {
        return (this.fixarSecaoCondutor == 1);
    }

    this.getTensaoServico = function() {
        return this.tensaoServico;
    }

    this.getTensaoServicoVolts = function() {

        if (this.unidadeTensao == "V") {
            return this.tensaoServico;
        } else {
            return this.tensaoServico * 1000;
        }
    }

    this.getTensaoServiFcokV = function() {

        if (this.unidadeTensao == "V") {
            return this.tensaoServico / 1000;
        } else {
            return this.tensaoServico;
        }
    }

    this.setTensaoServico = function(tensaoServico) {
        this.tensaoServico = tensaoServico;
    }

    this.getFrequencia = function() {
        return frequencia;
    }

    this.setFrequencia = function(frequencia) {
        this.frequencia = frequencia;
    }

    this.getNivelTensao = function() {
        return this.nivelTensao;
    }

    this.getNivelTensaoString = function() {
    	var nivel;
    	
        if (this.isCabosNavais() && this.isMediaTensao()) {
            nivel = NIVEL_TENSAO[MEDIA_NAVAL].description;
        } else {
            nivel = NIVEL_TENSAO[this.nivelTensao].description;
        }
        
       return nivel;
    }

    this.isBaixaTensao = function() {
        return (this.nivelTensao == BAIXA);
    }

    this.isMediaTensao = function() {
        return (this.nivelTensao == MEDIA);
    }

    this.setNivelTensao = function(nivelTensao) {
        this.nivelTensao = nivelTensao;
    }

    this.getTipoProduto = function() {
        return this.tipoProduto;
    }

    this.getTipoProdutoString = function() {
        return TIPO_PRODUTO[this.tipoProduto].description;
    }

    this.isCabosEnergia = function() {
        return this.tipoProduto == CABOS_ENERGIA;
    }

    this.isCabosNavais = function() {
        return this.tipoProduto == CABOS_NAVAIS;
    }

    this.setTipoProduto = function(tipoProduto) {
        this.tipoProduto = tipoProduto;
    }

    this.getMaterialCondutor = function() {
        return this.materialCondutor;
    }

    this.getMaterialCondutorString = function() {
        return MATERIAL_CONDUTOR[this.materialCondutor].description;
    }

    this.isCobre = function() {
        return this.materialCondutor == COBRE;
    }

    this.isAluminio = function() {
        return this.materialCondutor == ALUMINIO;
    }

    this.setMaterialCondutor = function(materialCondutor) {
        this.materialCondutor = materialCondutor;
    }

    this.getNumeroCondutores = function() {
        return this.numeroCondutores;
    }

    this.getNumeroCondutoresString = function() {
        return NUMERO_CONDUTORES[this.numeroCondutores].description;
    }

    this.isUnipolar = function() {
        return this.numeroCondutores == UNIPOLAR;
    }

    this.isBipolar = function() {
        return this.numeroCondutores == BIPOLAR;
    }

    this.isTripolar = function() {
        return this.numeroCondutores == TRIPOLAR;
    }

    this.isTetrapolar = function() {
        return this.numeroCondutores == TETRAPOLAR;
    }

    this.setNumeroCondutores = function(numeroCondutores) {
        this.numeroCondutores = numeroCondutores;
    }

    this.getCaboSelecionado = function() {
        return this.caboSelecionado;
    }

    this.getCaboSelecionadoString = function() {
        return CABO[this.caboSelecionado].description;
    }

    this.setCaboSelecionado = function(caboSelecionado) {
        this.caboSelecionado = caboSelecionado;
    }

    this.getPossibilidadeInstalacao = function() {
        return this.possibilidadeInstalacao;
    }

    this.getpossibilidadeInstalacaoString = function() {
        return POSSIBILIDADE_INSTALACAO[this.possibilidadeInstalacao].description;
    }

    this.isEnterrado = function() {
    	var a = this.possibilidadeInstalacao == SUBTERRANEA;
    	var b = this.possibilidadeInstalacao == BANCO_DUTOS_SOLO;
    	var d = this.possibilidadeInstalacao == DIRETAMENTE_SOLO;
    	var e = this.possibilidadeInstalacao == ELETRODUTO_SOLO;
    	var f = this.possibilidadeInstalacao == ELETRODUTO_NAO_METALICO_SOLO;
    	var g = this.possibilidadeInstalacao == ELETRODUTO_METALICO_SOLO;

        return (a || b || d || e || f || g);
    }

    this.isEnclausurado = function() {
    	var a = this.possibilidadeInstalacao != APARENTE;
    	var b = this.possibilidadeInstalacao != SUSPENSA;
    	var c = this.localInstalacao == ELETRODUTO;
    	var d = this.localInstalacao == ELETRODUTO_CIRCULAR_ALVENARIA;
    	var e = this.localInstalacao == ELETRODUTO_PAREDE;
    	var f = this.localInstalacao == ELETRODUTO_SECAO_CIRCULAR;
    	var g = this.localInstalacao == MOLDURA;

        return ((a && b) || c || d || e || f || g);
    }

    this.isSubterranea = function() {
        return this.possibilidadeInstalacao == SUBTERRANEA;
    }

    this.isColunaA = function() {
    	var colunaA = false;

        if (this.isCabosEnergia()) {
            if (this.isBaixaTensao()) {
            	var a = this.possibilidadeInstalacao == APARENTE;
            	var b = this.isUnipolar();
            	var c = this.isJustaposto() || this.isTrifolio();
            	var d = this.isTripolar();

                colunaA = (a) && ((b && c) || (d));
            } else if (this.isMediaTensao()) {
            	var a = this.possibilidadeInstalacao == APARENTE_AR;
            	var b = this.isUnipolar() && (this.isJustaposto() || this.isTrifolio());
            	var c = this.isTripolar();

                colunaA = a && (b || c);
            }
        }
        
        return colunaA;
    }

    this.isColunaA1 = function() {
        if (this.isCabosEnergia()) {
        	var a = this.localInstalacao == MOLDURA;
        	var b = this.localInstalacao == PAREDE_ISOLANTE;
        	var c = this.localInstalacao == ELETRODUTO_PAREDE && this.numeroCondutores == UNIPOLAR
        	var d = this.localInstalacao == CAIXILHO_PORTA_PAREDE;

            return a || b || c || d;
        }
        return false;
    }

    this.isColunaA2 = function() {
        if (this.isCabosEnergia()) {
            var a = this.localInstalacao == ELETRODUTO_PAREDE && this.numeroCondutores != UNIPOLAR;

            return a;
        }
        
        return false;
    }

    this.isColunaB = function() {
        var colunaB = false;

        if (this.isCabosEnergia()) {
            if (this.isBaixaTensao()) {
                var a = this.possibilidadeInstalacao == APARENTE;
                var b = this.isUnipolar();
                var c = this.isEspacado();

                colunaB = a && b && c;

            } else if (this.isMediaTensao()) {
                var a = this.possibilidadeInstalacao == APARENTE_AR;
                var b = this.isUnipolar();
                var c = !(this.isJustaposto() || this.isTrifolio());
                var d = this.isEspacado();

                colunaB = a && b && c && d;
            }
        }
        
        return colunaB;
    }

    this.isColunaB1 = function() {
        if (this.isCabosEnergia()) {
            var a = this.localInstalacao == ELETRODUTO && this.numeroCondutores == UNIPOLAR && this.possibilidadeInstalacao == APARENTE;

            var b = this.possibilidadeInstalacao == EMBUTIDA && this.localInstalacao == ELETRODUTO_CIRCULAR_ALVENARIA;

            var c = this.localInstalacao == CANALETA_FECHADA && this.numeroCondutores == UNIPOLAR;

            var d = this.localInstalacao == CANALETA_VENTILADA;
            
            var e = this.localInstalacao == ELETROCALHA_PERFILADO && this.numeroCondutores == UNIPOLAR;

            var f = this.possibilidadeInstalacao == ESPACO_CONSTRUCAO && this.localInstalacao == DIRETAMENTE && (this.relacaoCaboDuto != _1POINT5V5);

            var g = this.possibilidadeInstalacao == ESPACO_CONSTRUCAO && this.localInstalacao == ELETRODUTO_SECAO_CIRCULAR && this.tensaoIsolamento == _450V_750V && this.relacaoCaboDuto == _VMAIORIGUAL20DE;

            return a || b || c || d || e || f || g;
        } else if (this.isCabosNavais()) {
            return (this.possibilidadeInstalacao == EMBUTIDA && this.isUnipolar());
        }

        return false;
    }

    this.isColunaB2 = function() {
        if (this.isCabosEnergia()) {
            var a = this.localInstalacao == ELETRODUTO && this.numeroCondutores != UNIPOLAR && this.possibilidadeInstalacao == APARENTE;

            var c = this.localInstalacao == CANALETA_FECHADA && this.numeroCondutores != UNIPOLAR;
            
            var d = this.localInstalacao == ELETROCALHA_PERFILADO && this.numeroCondutores != UNIPOLAR;

            var e = this.possibilidadeInstalacao == ESPACO_CONSTRUCAO && this.localInstalacao == DIRETAMENTE && (this.relacaoCaboDuto == _1POINT5V5);

            var f = this.possibilidadeInstalacao == ESPACO_CONSTRUCAO && this.localInstalacao == ELETRODUTO_SECAO_CIRCULAR && (this.tensaoIsolamento != _450V_750V || this.relacaoCaboDuto != _VMAIORIGUAL20DE);

            return a || c || d || e || f;
        } else if (this.isCabosNavais()) {
            return (this.possibilidadeInstalacao == EMBUTIDA && !this.isUnipolar());
        }
        
        return false;
    }

    this.isColunaC = function() {
    	var bResult = false;

        if (this.isCabosEnergia()) {
            if (this.isBaixaTensao()) {
                var a = this.localInstalacao == BANDEJA_NAO_PERFURADA;
                var b = this.localInstalacao == PAREDES;
                var c = this.localInstalacao == TETO;
                var d = this.localInstalacao == ALVENARIA;
                bResult = a || b || c || d;

            } else if (this.isMediaTensao()) {
                if (this.possibilidadeInstalacao == CANALETA_FECHADA_SOLO) {
                    bResult = (this.isUnipolar() && (this.isJustaposto() || this.isTrifolio())) || (this.isTripolar());
                }
            }

        } else if (this.isCabosNavais()) {
            if (this.possibilidadeInstalacao == APARENTE) {
                return this.localInstalacao == BANDEJA_NAO_PERFURADA || this.localInstalacao == PAREDES || this.localInstalacao == TETO;
            }
        }
        
        return bResult;
    }

    this.isColunaD = function() {
        var bResult = false;

        if (this.isCabosEnergia()) {
            if (this.isBaixaTensao()) {
                var a = this.possibilidadeInstalacao == SUBTERRANEA;
                var b = this.localInstalacao == ELETRODUTO;
                var c = this.localInstalacao == DIRETAMENTE_ENTERRADOS;
                bResult = a && (b || c);

            } else if (this.isMediaTensao()) {
                if (this.possibilidadeInstalacao == CANALETA_FECHADA_SOLO) {
                    if (this.isUnipolar() && this.isEspacado()) {
                        bResult = true;
                    }
                }
            }
        }

        return bResult;
    }

    this.isColunaE = function() {
    	var bResult = false;

        if (this.isCabosEnergia()) {
            if (this.isBaixaTensao()) {
                if (this.possibilidadeInstalacao == APARENTE && !this.isUnipolar()) {
                    if (((this.localInstalacao == BANDEJA_PERFURADA)) || (this.localInstalacao == LEITO) || (this.localInstalacao == SUPORTES)) {
                        bResult = true;
                    }
                } else if (this.possibilidadeInstalacao == SUSPENSA) {
                    if (this.localInstalacao == SUPORTES) {
                        if (!this.isUnipolar() && this.tensaoIsolamento != _450V_750V) {
                            bResult = true;
                        }
                    }
                }

            } else if (this.isMediaTensao()) {
                if (this.possibilidadeInstalacao == ELETRODUTO_APARENTE_AR || this.possibilidadeInstalacao == ELETRODUTO_NAO_METALICO_APARENTE_AR || this.possibilidadeInstalacao == ELETRODUTO_METALICO_APARENTE_AR) {
                    bResult = true;
                }
            }
        } else if (this.isCabosNavais()) {
            if (this.possibilidadeInstalacao == APARENTE && (this.localInstalacao == BANDEJA_PERFURADA || this.localInstalacao == LEITO || this.localInstalacao == SUPORTES)) {
                return !this.isUnipolar();
            }
        }

        return bResult;
    }

    this.isColunaF = function() {
        var bResult = false;

        if (this.isCabosEnergia()) {
            if (this.isBaixaTensao()) {
                if (this.possibilidadeInstalacao == APARENTE && this.isUnipolar()) {
                    if (((this.localInstalacao == BANDEJA_PERFURADA)) || (this.localInstalacao == LEITO) || (this.localInstalacao == SUPORTES)) {
                        bResult = true;
                    }
                } else if (this.possibilidadeInstalacao == SUSPENSA) {
                    if (this.localInstalacao == SUPORTES && this.tensaoIsolamento != _450V_750V) {
                        if (this.isUnipolar()) {
                            bResult = true;
                        }
                    }
                }

            } else if (this.isMediaTensao()) {
                if (this.possibilidadeInstalacao == ELETRODUTO_SOLO || this.possibilidadeInstalacao == ELETRODUTO_METALICO_SOLO || this.possibilidadeInstalacao == ELETRODUTO_NAO_METALICO_SOLO) {

                    if ((this.isUnipolar() && (this.isJustaposto() || this.isTrifolio())) || (this.isTripolar())) {
                        bResult = true;
                    }

                } else if (this.possibilidadeInstalacao == BANCO_DUTOS_SOLO) {
                    if ((this.isUnipolar() && this.isTrifolio()) || (this.isTripolar())) {
                        bResult = true;
                    }
                }
            }

        } else if (this.isCabosNavais()) {
            if (this.possibilidadeInstalacao == APARENTE && (this.localInstalacao == BANDEJA_PERFURADA || this.localInstalacao == LEITO || this.localInstalacao == SUPORTES)) {
                return this.isUnipolar() && !this.isEspacado();
            }
        }
        
        return bResult;
    }

    this.isColunaG = function() {
        var bResult = false;

        if (this.isCabosEnergia()) {
            if (this.isBaixaTensao()) {
                bResult = (this.localInstalacao == ISOLADORES);

            } else if (this.isMediaTensao()) {
                if (this.possibilidadeInstalacao == ELETRODUTO_SOLO || this.possibilidadeInstalacao == ELETRODUTO_METALICO_SOLO || this.possibilidadeInstalacao == ELETRODUTO_NAO_METALICO_SOLO) {
                	
                    bResult = (isUnipolar() && isEspacado());
                    
                } else if (this.possibilidadeInstalacao == BANCO_DUTOS_SOLO) {
                    if (this.isUnipolar() || !this.isTrifolio()) {
                        bResult = true;
                    }
                }
            }

        } else if (this.isCabosNavais()) {
            if (this.possibilidadeInstalacao == APARENTE && (this.localInstalacao == BANDEJA_PERFURADA || this.localInstalacao == LEITO || this.localInstalacao == SUPORTES)) {
                return this.isUnipolar() && this.isEspacado();
            }
        }
        
        return bResult;
    }

    this.isColunaH = function() {
        if (this.isCabosEnergia()) {
            if (this.possibilidadeInstalacao == DIRETAMENTE_SOLO) {
                if ((this.isUnipolar() && (this.isJustaposto() || this.isTrifolio())) || (this.isTripolar())) {
                    return true;
                }
            }
        }
        
        return false;
    }

    this.isColunaI = function() {
        if (this.isCabosEnergia()) {
            if (this.possibilidadeInstalacao == DIRETAMENTE_SOLO) {
                return (this.isUnipolar() && this.isEspacado());
            }
        }
        
        return false;
    }

    this.is1Circuito = function() {
        return this.quantidadeCircuitos == UM_CIRCUITO;
    }

    this.is2Circuitos = function() {
        return this.quantidadeCircuitos == DOIS_CIRCUITO;
    }

    this.is3Circuitos = function() {
        return this.quantidadeCircuitos == TRES_CIRCUITO;
    }

    this.is4Circuitos = function() {
        return this.quantidadeCircuitos == QUATRO_CIRCUITO;
    }

    this.isOrientacaoFatorCorrecaoVertical = function() {
        return this.orientacaoFatorCorrecao == VERTICAL;
    }

    this.isOrientacaoFatorCorrecaoHorizontal = function() {
        return this.orientacaoFatorCorrecao == HORIZONTAL;
    }

    this.isSemOrientacaoFatorCorrecao = function() {
    	return this.orientacaoFatorCorrecao == SEM_FATOR;
    }

    this.setPossibilidadeInstalacao = function(possibilidadeInstalacao) {
        this.possibilidadeInstalacao = possibilidadeInstalacao;
    }

    this.getSistema = function() {
        return this.sistema;
    }

    this.getSistemaString = function() {
        return SISTEMA[this.sistema].description;
    }

    this.isDuasFases = function() {
        return ((this.sistema == MONOFASICO_DOIS_CONDUTORES) || (this.sistema == MONOFASICO_TRES_CONDUTORES) || (this.sistema == DUAS_FASES_SEM_NEUTRO));
    }

    this.isTrifasico = function() {
        return ((this.sistema == DUAS_FASES_COM_NEUTRO) || (this.sistema == TRIFASICO_COM_NEUTRO) || (this.sistema == TRIFASICO_SEM_NEUTRO));
    }

    this.getNumeroCircuitos = function(numeroCabos) {
        if ((this.isColunaF() || this.isColunaG()) && this.possibilidadeInstalacao == BANCO_DUTOS_SOLO) {
            return this.formacaoBancoDutos * this.numeroCabos;
        } else {
            return this.quantidadeCircuitos * this.numeroCabos;
        }
    }

    this.setSistema = function(sistema) {
        this.sistema = sistema;
    }

    this.getTemperaturaMaximaCondutor = function() {
        return this.temperaturaMaximaCondutor;
    }

    this.isTemperaturaMaximaCondutor70 = function() {
        return this.temperaturaMaximaCondutor == 70;
    }

    this.istemperaturaMaximaCondutor90 = function() {
        return this.temperaturaMaximaCondutor == 90;
    }

    this.setTemperaturaMaximaCondutor = function(temperaturaMaximaCondutor) {
        this.temperaturaMaximaCondutor = temperaturaMaximaCondutor;
    }

    this.getTensaoIsolamento = function() {
        return this.tensaoIsolamento;
    }

    this.getTensaoIsolamentoString = function() {
        return TENSAO_ISOLAMENTO[this.tensaoIsolamento].description;
    }

    this.setTensaoIsolamento = function(tensaoIsolamento) {
        this.tensaoIsolamento = tensaoIsolamento;
    }

    this.getUtilizacaoCircuito = function() {
        return this.utilizacaoCircuito;
    }

    this.getUtilizacaoCircuitoString = function() {
        return UTILIZACAO_CIRCUITO[this.utilizacaoCircuito].description;
    }

    this.setUtilizacaoCircuito = function(utilizacaoCircuito) {
        this.utilizacaoCircuito = utilizacaoCircuito;
    }

    this.getTemperaturaArSolo = function() {
        return this.temperaturaArSolo;
    }

    this.setTemperaturaArSolo = function(temperaturaArSolo) {
        this.temperaturaArSolo = temperaturaArSolo;
    }

    this.getComprimentoCircuito = function() {
        return this.comprimentoCircuito;
    }

    this.getComprimentoCircuitoKM = function() {
        return this.comprimentoCircuito / 1000;
    }

    this.setComprimentoCircuito = function(comprimentoCircuito) {
        this.comprimentoCircuito = comprimentoCircuito;
    }

    this.getCorrenteProjeto = function() {
        return this.correnteProjeto;
    }

    this.setCorrenteProjeto = function(correnteProjeto) {
        this.correnteProjeto = correnteProjeto;
    }

    this.getFatorPotencia = function() {
        return this.fatorPotencia;
    }

    this.setFatorPotencia = function(fatorPotencia) {
        this.fatorPotencia = fatorPotencia;
    }

    this.getPotenciaAparente = function() {
        return this.potenciaAparente;
    }

    this.setPotenciaAparente = function(potenciaAparente) {
        this.potenciaAparente = potenciaAparente;
    }

    this.getQuedaTensaoMaxima = function() {
        return this.quedaTensaoMaxima;
    }

    this.setQuedaTensaoMaxima = function(quedaTensaoMaxima) {
        this.quedaTensaoMaxima = quedaTensaoMaxima;
    }

    this.getLocalInstalacao = function() {
        return this.localInstalacao;
    }

    this.hasLocalInstalacao = function() {
        return this.localInstalacao > 0;
    }

    this.getLocalInstalacaoString = function() {
        return LOCAL_INSTALACAO[this.localInstalacao].description;
    }

    this.setlocalInstalacao = function(localInstalacao) {
        this.localInstalacao = localInstalacao;
    }

    this.getTipoInstalacao = function() {
        return this.tipoInstalacao;
    }

    this.getTipoInstalacaoString = function() {
        return TIPO_INSTALACAO[this.tipoInstalacao].description;
    }

    this.isJustaposto = function() {
        return this.tipoInstalacao == FORMACAO_JUSTAPOSTA;
    }

    this.isTrifolio = function() {
        var a = this.tipoInstalacao == FORMACAO_TRIFOLIO;
        var b = this.isUnipolar() && (this.localInstalacao == ELETRODUTO_SECAO_CIRCULAR);

        return a || b;
    }

    this.isEspacado = function() {
        return this.tipoInstalacao == FORMACAO_ESPACADA;
    }

    this.setTipoInstalacao = function(tipoInstalacao) {
        this.tipoInstalacao = tipoInstalacao;
    }

    this.getUnidadeTensao = function() {
        return this.unidadeTensao;
    }

    this.setUnidadeTensao = function(unidadeTensao) {
        this.unidadeTensao = unidadeTensao;
    }

    this.getQuantidadeCamadas = function() {
        return this.quantidadeCamadas;
    }

    this.setQuantidadeCamadas = function(quantidadeCamadas) {
        this.quantidadeCamadas = quantidadeCamadas;
    }

    this.getQuantidadeCircuitos = function() {
    	return this.quantidadeCircuitos;
    }

    this.setQuantidadeCircuitos = function(quantidadeCircuitos) {
        this.quantidadeCircuitos = quantidadeCircuitos;
    }

    this.getFixarInformacaoCurto = function() {
        return this.fixarInformacaoCurto;
    }

    this.getFixarInformacaoCurtoString = function() {
        return this.fixarInformacaoCurto == 0 ? "Não" : "Sim";
    }

    this.isInformacaoCurtoCircuitoFixada = function() {
        return this.fixarInformacaoCurto == 1;
    }
    
    this.setFixarInformacaoCurto = function(fixarInformacaoCurto) {
        this.fixarInformacaoCurto = fixarInformacaoCurto;
    }

    this.getFixarNumeroCabos = function() {
        return this.fixarNumeroCabos;
    }

    this.getFixarNumeroCabosString = function() {
        return this.fixarNumeroCabos == 0 ? "Não" : "Sim";
    }

    this.isNumeroCabosFixada = function() {
        return this.fixarNumeroCabos == 1;
    }

    this.setFixarNumeroCabos = function(fixarNumeroCabos) {
        this.fixarNumeroCabos = fixarNumeroCabos;
    }

    this.getFixarSecaoCondutor = function() {
        return this.fixarSecaoCondutor;
    }

    this.getFixarSecaoCondutorString = function() {
        return this.fixarSecaoCondutor == 0 ? "Não" : "Sim";
    }

    this.setFixarSecaoCondutor = function(fixarSecaoCondutor) {
        this.fixarSecaoCondutor = fixarSecaoCondutor;
    }

    this.getCorrenteCurto = function() {
        return this.correnteCurto;
    }

    this.setCorrenteCurto = function(correnteCurto) {
        this.correnteCurto = correnteCurto;
    }

    this.getEletrodutoMetalico = function() {
        return this.eletrodutoMetalico;
    }

    this.getEletrodutoMetalicoString = function() {
        return this.eletrodutoMetalico == 0 ? "Não" : "Sim";
    }

    this.isEletrodutoMetal = function() {
    	return (this.getEletrodutoMetalico() == 1);
    }
    this.setEletrodutoMetalico = function(eletrodutoMetalico) {
        this.eletrodutoMetalico = eletrodutoMetalico;
    }

    this.getFormacaoBancoDutos = function() {
        return this.formacaoBancoDutos;
    }

    this.getFormacaoBancoDutosString = function() {
        return BANCO_DUTOS[this.formacaoBancoDutos].description;
    }

    this.setFormacaoBancoDutos = function(formacaoBancoDutos) {
        this.formacaoBancoDutos = formacaoBancoDutos;
    }

    this.getNumeroBandejas = function() {
        return this.numeroBandejas;
    }

    this.setNumeroBandejas = function(numeroBandejas) {
        this.numeroBandejas = numeroBandejas;
    }

    this.getNumeroBandejasVertical = function() {
        return this.numeroBandejasVertical;
    }

    this.setNumeroBandejasVertical = function(numeroBandejasVertical) {
        this.numeroBandejasVertical = numeroBandejasVertical;
    }

    this.getNumeroCabosFixado = function() {
        return this.numeroCabosFixado;
    }

    this.setNumeroCabosFixado = function(numeroCabosFixado) {
        this.numeroCabosFixado = numeroCabosFixado;
    }

    this.getNumeroTernasBandeja = function() {
        return this.numeroTernasBandeja;
    }

    this.setNumeroTernasBandeja = function(numeroTernasBandeja) {
        this.numeroTernasBandeja = numeroTernasBandeja;
    }

    this.getNumeroTernasBandejaVertical = function() {
        return this.numeroTernasBandejaVertical;
    }

    this.setNumeroTernasBandejaVertical = function(numeroTernasBandejaVertical) {
        this.numeroTernasBandejaVertical = numeroTernasBandejaVertical;
    }

    this.getPosicaoCabosSolo = function() {
        return this.quantidadeCircuitos;
    }

    this.getPosicaoCabosSoloString = function() {
        return POSICAO_CABOS[this.quantidadeCircuitos].description;
    }

    this.setPosicaoCabosSolo = function(posicaoCabosSolo) {
        this.quantidadeCircuitos = posicaoCabosSolo;
    }

    this.getResistividadeTermica = function() {
        return this.resistividadeTermica;
    }

    this.setResistividadeTermica = function(resistividadeTermica) {
        this.resistividadeTermica = resistividadeTermica;
    }

    this.getSecaoCondutorFixado = function() {
        return this.secaoCondutorFixado;
    }

    this.setSecaoCondutorFixado = function(secaoCondutorFixado) {
        this.secaoCondutorFixado = secaoCondutorFixado;
    }

    this.getOrientacaoFatorCorrecao = function() {
        return this.orientacaoFatorCorrecao;
    }

    this.getOrientacaoFatorCorrecaoString = function() {
        return ORIENTACAO_FATOR_CORRECAO[this.orientacaoFatorCorrecao].description;
    }

    this.setOrientacaoFatorCorrecao = function(orientacaoFatorCorrecao) {
        this.orientacaoFatorCorrecao = orientacaoFatorCorrecao;
    }

    this.getTempoAtuacaoProtecao = function() {
        return this.tempoAtuacaoProtecao;
    }

    this.setTempoAtuacaoProtecao = function(tempoAtuacaoProtecao) {
        this.tempoAtuacaoProtecao = tempoAtuacaoProtecao;
    }

    this.setTempoAtuacaoProtecao = function() {
        return this.codigo;
    }

    this.setCodigo = function(codigo) {
        this.codigo = codigo;
    }

    this.getPosicionamentoCabo = function() {
        return this.posicionamentoCabo;
    }

    this.getPosicionamentoCaboString = function() {
        return LOCAL_INSTALACAO[this.posicionamentoCabo].description;
    }

    this.setPosicionamentoCabo = function(posicionamentoCabo) {
        this.posicionamentoCabo = posicionamentoCabo;
    }

    this.getSistemaAterramento = function() {
        return this.sistemaAterramento;
    }

    this.setSistemaAterramento = function(sistemaAterramento) {
        this.sistemaAterramento = sistemaAterramento;
    }

    this.isMultiAterrado = function() {
        return this.isMediaTensao();
    }

    this.isEletroduto = function() {
        return (this.localInstalacao == ELETRODUTO || this.localInstalacao == ELETRODUTO_CIRCULAR_ALVENARIA || this.localInstalacao == ELETRODUTO_PAREDE || this.localInstalacao == ELETRODUTO_SECAO_CIRCULAR);
    }

    this.isDiretamenteEnterrados = function() {
        return (this.localInstalacao == DIRETAMENTE_ENTERRADOS || this.localInstalacao == DIRETAMENTE);
    }

    this.isEletrodutoSolo = function() {
        var a = this.possibilidadeInstalacao == ELETRODUTO_SOLO;
        var b = this.possibilidadeInstalacao == ELETRODUTO_METALICO_SOLO;
        var c = this.possibilidadeInstalacao == ELETRODUTO_NAO_METALICO_SOLO;
        
        return (a || b || c);
    }

    this.getDistanciaEntreCabos = function() {
        return this.distanciaEntreCabos;
    }

    this.setDistanciaEntreCabos = function(distanciaEntreCabos) {
        this.distanciaEntreCabos = distanciaEntreCabos;
    }

    this.getorientacaoCabo = function() {
        return this.orientacaoCabo;
    }

    this.getOrietacaoCaboString = function() {
        return ORIENTACAO_CABO[this.orientacaoCabo].description;
    }

    this.isOrientacaoHorizontal = function() {
        return this.orientacaoCabo == HORIZONTAL;
    }

    this.isOrientacaoVertical = function() {
        return this.orientacaoCabo == VERTICAL;
    }

    this.setorientacaoCabo = function(orientacaoCabo) {
        this.orientacaoCabo = orientacaoCabo;
    }

    this.getRelacaoCaboDuto = function() {
        return this.relacaoCaboDuto;
    }

    this.getRelacaoCaboDutoString = function() {
        return RELACAO_CABO_DUTO[this.relacaoCaboDuto].description;
    }

    this.setRelacaoCaboDuto = function(relacaoCaboDuto) {
        this.relacaoCaboDuto = relacaoCaboDuto;
    }

    this.getAlturaCanaleta = function() {
        return this.alturaCanaleta;
    }

    this.setAlturaCanaleta = function(alturaCanaleta) {
        this.alturaCanaleta = alturaCanaleta;
    }

    this.getLarguraCanaleta = function() {
        return this.larguraCanaleta;
    }

    this.setLarguraCanaleta = function(larguraCanaleta) {
        this.larguraCanaleta = larguraCanaleta;
    }

    this.getAplicacao = function() {
        return this.aplicacao;
    }

    this.setAplicacao = function(aplicacao) {
        this.aplicacao = aplicacao;
    }

    this.getTipoCabo = function() {
        return this.tipoCabo;
    }

    this.setTipoCabo = function(tipoCabo) {
        this.tipoCabo = tipoCabo;
    }
}

d = new DimensionamentoBean();