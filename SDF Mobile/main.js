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
	1 : {description : "Baixa Tens‹o atŽ 1kV"},
    2 : {description : "MŽdia Tens‹o de 1kV atŽ 35kV"},
    3 : {description : "MŽdia Tens‹o de 1kV atŽ 20kV"}
};

/////////////////////
CABOS_ENERGIA = 1;
CABOS_NAVAIS = 2;
/////////////////////
TIPO_PRODUTO = {
	1 : {description : "Cabos de Potncia"},
	2 : {description : "Cabos Navais (Offshore)"}
};

/////////////////////
COBRE = 1;
ALUMINIO = 2;
/////////////////////
MATERIAL_CONDUTOR = {
	1 : {description : "Cobre"},
	2 : {description : "Alum’nio"}
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
	3 : {description : "Tripolar - Trs condutores"},
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
	3	: {description : "Espao de constru‹o"},
	4	: {description : "Subterr‰nea"},
	5	: {description : "Suspensa"},
	6	: {description : "Aparente ao Ar (Bandeja - Sem exposi‹o solar)"},
	7	: {description : "Banco de dutos no Solo"},
	8	: {description : "Canaleta fechada no Solo"},
	9	: {description : "Diretamente enterrado no Solo"},
	10	: {description : "Eletroduto aparente ao Ar (Bandeja - Sem exposi‹o solar)"},
	11	: {description : "Eletroduto no Solo"},
	12	: {description : "Eletroduto n‹o met‡lico aparente ao ar (Sem exposi‹o solar)"},
	13	: {description : "Eletroduto met‡lico aparente ao ar (Sem exposi‹o solar)"},
	14	: {description : "Eletroduto n‹o met‡lico no solo"},
	15	: {description : "Eletroduto met‡lico no solo"}
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
	370		: {description : "Noflam Antichama BWF Flex’vel"},
    1020	: {description : "Afitox-F 750V"},
    2020	: {description : "Afitox-F 0,6/1kV"},
    390		: {description : "Vinil"},
    400		: {description : "Vinil Flex’vel"},
    340 	: {description : "Fiter Flex"},
    230 	: {description : "EP-DRY"},
    300 	: {description : "FIPEX BF"},
    220		: {description : "EP-DRY 105¼C"},
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
localInstalacao = {
	1	: {description : "Eletroduto"},
    2	: {description : "Bandeja Perfurada"},
    3	: {description : "Leito  : {Escada para Cabos}"},
    4	: {description : "Bandeja n‹o perfurada  : {Prateleira}"},
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
    19	: {description : "Em eletroduto  : {Se‹o circular}"},
    1	: {description : "Eletrocalha fechada ou Eletroduto"},
    23	: {description : "Teto  : {Fixa‹o Direta}"}
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
	21	: {description : "Forma‹o espaada"},
	22	: {description : "Trif—lio"},
	23	: {description : "Plano justapostos"},
	24	: {description : "Forma‹o Espaada"},
	25	: {description : "Forma‹o Horizontal"},
	26	: {description : "Forma‹o Vertical"},
	27	: {description : "Instala‹o em Bandejas"},
	28	: {description : "Instala‹o Vertical"},
	29	: {description : "N‹o precisa aplicar fator de corre‹o"},
	24	: {description : "Um cabo por duto"},
	22	: {description : "Trs cabos por duto"}
};


/////////////////////
HORIZONTAL = 1;
VERTICAL = 2;
/////////////////////
ORIENTACAO_CABO = {
	1 : {description : "Forma‹o Horizontal"},
	2 : {description : "Forma‹o Vertical"}
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
    10	: {description : "3 cabos unipolares em plano encostados ou em trifolio ou um cabo tripolar  : {mŽtodo H}"},
    11	: {description : "3 cabos unipolares em plano afastados de no m’nimo um di‰metro."}
};

TEMPERATURA_MAXIMA = {
    35	: {description : "35¼C"},
    40	: {description : "40¼C"},
    45	: {description : "45¼C"},
    50	: {description : "50¼C"},
    55	: {description : "55¼C"},
    60	: {description : "60¼C"},
    65	: {description : "65¼C"},
    70	: {description : "70¼C"},
    75	: {description : "75¼C"},
    80	: {description : "80¼C"},
    85	: {description : "85¼C"},
    90	: {description : "90¼C"},
    95	: {description : "95¼C"},
    105	: {description : "105¼C"}	
};

/////////////////////
SEM_FATOR = 1;
HORIZONTAL = 2;
VERTICAL = 3;
/////////////////////
ORIENTACAO_FATOR_CORRECAO = {
	1 : {description : "N‹o necessita aplicar fator de corre‹o"},
    2 : {description : "Instala‹o horizontal"},
    3 : {description : "Instalacao vertical"}
}

//-----------------------------------------------------------------------------------------------------------//

function Calculo() {
	this.CRITERIO_DIMENSIONAMENTO_CURTO_CIRCUITO 	= 1;
	this.CRITERIO_DIMENSIONAMENTO_CORRENTE 			= 2;
	this.CRITERIO_DIMENSIONAMENTO_QUEDA_TENSAO		= 3;
	
	this.gradienteMaximo = 0;
	this.fatorCanaleta = 1;
	
	this.calcular = function() {
		
	};
}

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
        if (isCabosEnergia()) {
            a = localInstalacao == localInstalacao.ELETRODUTO.value && numeroCondutores == numeroCondutores.UNIPOLAR.value
                    && possibilidadeInstalacao == possibilidadeInstalacao.APARENTE.value;

            b = possibilidadeInstalacao == possibilidadeInstalacao.EMBUTIDA.value
                    && localInstalacao == localInstalacao.ELETRODUTO_CIRCULAR_ALVENARIA.value;

            c = localInstalacao == localInstalacao.CANALETA_FECHADA.value && numeroCondutores == numeroCondutores.UNIPOLAR.value;

            d = localInstalacao == localInstalacao.CANALETA_VENTILADA.value;
            e = localInstalacao == localInstalacao.ELETROCALHA_PERFILADO.value
                    && numeroCondutores == numeroCondutores.UNIPOLAR.value;

            f = possibilidadeInstalacao == possibilidadeInstalacao.ESPACO_CONSTRUCAO.value &&
                    localInstalacao == localInstalacao.DIRETAMENTE.value &&
                    (relacaoCaboDuto != RelacaoCaboXDuto._1POINT5V5.value);

            g = possibilidadeInstalacao == possibilidadeInstalacao.ESPACO_CONSTRUCAO.value &&
                localInstalacao == localInstalacao.ELETRODUTO_SECAO_CIRCULAR.value &&
                tensaoIsolamento == TensaoIsolamento._450V_750V.value &&
                relacaoCaboDuto == RelacaoCaboXDuto._VMAIORIGUAL20DE.value;

            return a || b || c || d || e || f || g;

        } else if (isCabosNavais()) {
            return (possibilidadeInstalacao == possibilidadeInstalacao.EMBUTIDA.value && isUnipolar());
        }

        return false;
    }

    this.isColunaB2 = function() {
        if (isCabosEnergia()) {
            a = localInstalacao == localInstalacao.ELETRODUTO.value && numeroCondutores != numeroCondutores.UNIPOLAR.value
                    && possibilidadeInstalacao == possibilidadeInstalacao.APARENTE.value;

            c = localInstalacao == localInstalacao.CANALETA_FECHADA.value && numeroCondutores != numeroCondutores.UNIPOLAR.value;
            d = localInstalacao == localInstalacao.ELETROCALHA_PERFILADO.value
                    && numeroCondutores != numeroCondutores.UNIPOLAR.value;

            e = possibilidadeInstalacao == possibilidadeInstalacao.ESPACO_CONSTRUCAO.value &&
                localInstalacao == localInstalacao.DIRETAMENTE.value &&
                (relacaoCaboDuto == RelacaoCaboXDuto._1POINT5V5.value);

            f = possibilidadeInstalacao == possibilidadeInstalacao.ESPACO_CONSTRUCAO.value &&
                localInstalacao == localInstalacao.ELETRODUTO_SECAO_CIRCULAR.value &&
                (tensaoIsolamento != TensaoIsolamento._450V_750V.value ||
                relacaoCaboDuto != RelacaoCaboXDuto._VMAIORIGUAL20DE.value);


            return a || c || d || e || f;

        } else if (isCabosNavais()) {
            return (possibilidadeInstalacao == possibilidadeInstalacao.EMBUTIDA.value && !isUnipolar());
        }
        return false;
    }

    this.isColunaC = function() {
        bResult = false;

        if (isCabosEnergia()) {
            if (isBaixaTensao()) {
                a = localInstalacao == localInstalacao.BANDEJA_NAO_PERFURADA.value;
                b = localInstalacao == localInstalacao.PAREDES.value;
                c = localInstalacao == localInstalacao.TETO.value;
                d = localInstalacao == localInstalacao.ALVENARIA.value;
                bResult = a || b || c || d;

            } else if (isMediaTensao()) {
                if (possibilidadeInstalacao == possibilidadeInstalacao.CANALETA_FECHADA_SOLO.value) {
                    bResult = (isUnipolar() && (isJustaposto() || isTrifolio())) || (isTripolar());
                }
            }

        } else if (isCabosNavais()) {
            if (possibilidadeInstalacao == possibilidadeInstalacao.APARENTE.value) {
                return localInstalacao == localInstalacao.BANDEJA_NAO_PERFURADA.value ||
                    localInstalacao == localInstalacao.PAREDES.value ||
                    localInstalacao == localInstalacao.TETO.value;
            }
        }
        return bResult;
    }

    this.isColunaD = function() {
        bResult = false;

        if (isCabosEnergia()) {
            if (isBaixaTensao()) {
                a = possibilidadeInstalacao == possibilidadeInstalacao.SUBTERRANEA.value;
                b = localInstalacao == localInstalacao.ELETRODUTO.value;
                c = localInstalacao == localInstalacao.DIRETAMENTE_ENTERRADOS.value;
                bResult = a && (b || c);

            } else if (isMediaTensao()) {
                if (possibilidadeInstalacao == possibilidadeInstalacao.CANALETA_FECHADA_SOLO.value) {
                    if (isUnipolar() && isEspacado()) {
                        bResult = true;
                    }
                }
            }
        }

        return bResult;
    }

    this.isColunaE = function() {
        bResult = false;

        if (isCabosEnergia()) {
            if (isBaixaTensao()) {
                if (possibilidadeInstalacao == possibilidadeInstalacao.APARENTE.value && !isUnipolar()) {
                    if (((localInstalacao == localInstalacao.BANDEJA_PERFURADA.value)) ||
                            (localInstalacao == localInstalacao.LEITO.value) ||
                            (localInstalacao == localInstalacao.SUPORTES.value)) {
                        bResult = true;
                    }
                } else if (possibilidadeInstalacao == possibilidadeInstalacao.SUSPENSA.value) {
                    if (localInstalacao == localInstalacao.SUPORTES.value) {
                        if (!isUnipolar() && tensaoIsolamento != TensaoIsolamento._450V_750V.value) {
                            bResult = true;
                        }
                    }
                }

            } else if (isMediaTensao()) {
                if (possibilidadeInstalacao == possibilidadeInstalacao.ELETRODUTO_APARENTE_AR.value
                        || possibilidadeInstalacao == possibilidadeInstalacao.ELETRODUTO_NAO_METALICO_APARENTE_AR.value
                        || possibilidadeInstalacao == possibilidadeInstalacao.ELETRODUTO_METALICO_APARENTE_AR.value) {
                    bResult = true;

                }
            }
        } else if (isCabosNavais()) {
            if (possibilidadeInstalacao == possibilidadeInstalacao.APARENTE.value
                    && (localInstalacao == localInstalacao.BANDEJA_PERFURADA.value ||
                            localInstalacao == localInstalacao.LEITO.value ||
                            localInstalacao == localInstalacao.SUPORTES.value)) {
                return !isUnipolar();
            }
        }

        return bResult;
    }

    this.isColunaF = function() {
        bResult = false;

        if (isCabosEnergia()) {
            if (isBaixaTensao()) {
                if (possibilidadeInstalacao == possibilidadeInstalacao.APARENTE.value && isUnipolar()) {
                    if (((localInstalacao == localInstalacao.BANDEJA_PERFURADA.value)) || (localInstalacao == localInstalacao.LEITO.value)
                            || (localInstalacao == localInstalacao.SUPORTES.value)) {
                        bResult = true;
                    }
                } else if (possibilidadeInstalacao == possibilidadeInstalacao.SUSPENSA.value) {
                    if (localInstalacao == localInstalacao.SUPORTES.value && tensaoIsolamento != TensaoIsolamento._450V_750V.value) {
                        if (isUnipolar()) {
                            bResult = true;
                        }
                    }
                }

            } else if (isMediaTensao()) {
                if (possibilidadeInstalacao == possibilidadeInstalacao.ELETRODUTO_SOLO.value
                        || possibilidadeInstalacao == possibilidadeInstalacao.ELETRODUTO_METALICO_SOLO.value
                        || possibilidadeInstalacao == possibilidadeInstalacao.ELETRODUTO_NAO_METALICO_SOLO.value) {

                    if ((isUnipolar() && (isJustaposto() || isTrifolio())) || (isTripolar())) {
                        bResult = true;
                    }

                } else if (possibilidadeInstalacao == possibilidadeInstalacao.BANCO_DUTOS_SOLO.value) {
                    if ((isUnipolar() && isTrifolio()) || (isTripolar())) {
                        bResult = true;
                    }
                }
            }

        } else if (isCabosNavais()) {
            if (possibilidadeInstalacao == possibilidadeInstalacao.APARENTE.value &&
                    (localInstalacao == localInstalacao.BANDEJA_PERFURADA.value ||
                     localInstalacao == localInstalacao.LEITO.value ||
                     localInstalacao == localInstalacao.SUPORTES.value)) {
                return isUnipolar() && !isEspacado();
            }
        }
        return bResult;
    }

    this.isColunaG = function() {
        bResult = false;

        if (isCabosEnergia()) {
            if (isBaixaTensao()) {
                bResult = (localInstalacao == localInstalacao.ISOLADORES.value);

            } else if (isMediaTensao()) {
                if (possibilidadeInstalacao == possibilidadeInstalacao.ELETRODUTO_SOLO.value
                        || possibilidadeInstalacao == possibilidadeInstalacao.ELETRODUTO_METALICO_SOLO.value
                        || possibilidadeInstalacao == possibilidadeInstalacao.ELETRODUTO_NAO_METALICO_SOLO.value) {

                    bResult = (isUnipolar() && isEspacado());

                } else if (possibilidadeInstalacao == possibilidadeInstalacao.BANCO_DUTOS_SOLO.value) {
                    if (isUnipolar() || !isTrifolio()) {
                        bResult = true;
                    }
                }
            }

        } else if (isCabosNavais()) {
            if (possibilidadeInstalacao == possibilidadeInstalacao.APARENTE.value &&
                    (localInstalacao == localInstalacao.BANDEJA_PERFURADA.value ||
                     localInstalacao == localInstalacao.LEITO.value ||
                     localInstalacao == localInstalacao.SUPORTES.value)) {

                return isUnipolar() && isEspacado();
            }
        }
        return bResult;
    }

    this.isColunaH = function() {

        if (isCabosEnergia()) {
            if (possibilidadeInstalacao == possibilidadeInstalacao.DIRETAMENTE_SOLO.value) {
                if ((isUnipolar() && (isJustaposto() || isTrifolio())) || (isTripolar())) {
                    return true;
                }
            }
        }
        return false;
    }

    this.isColunaI = function() {

        if (isCabosEnergia()) {
            if (possibilidadeInstalacao == possibilidadeInstalacao.DIRETAMENTE_SOLO.value) {
                return (isUnipolar() && isEspacado());
            }
        }
        return false;
    }

    this.is1Circuito = function() {
        return this.quantidadeCircuitos == posicaoCabos.UM_CIRCUITO.value;
    }

    this.is2Circuitos = function() {
        return this.quantidadeCircuitos == posicaoCabos.DOIS_CIRCUITO.value;
    }

    this.is3Circuitos = function() {
        return this.quantidadeCircuitos == posicaoCabos.TRES_CIRCUITO.value;
    }

    this.is4Circuitos = function() {
        return this.quantidadeCircuitos == posicaoCabos.QUATRO_CIRCUITO.value;
    }

    this.isOrientacaoFatorCorrecaoVertical = function() {
        return orientacaoFatorCorrecao == orientacaoFatorCorrecao.VERTICAL.value;
    }

    this.isOrientacaoFatorCorrecaoHorizontal = function() {
        return orientacaoFatorCorrecao == orientacaoFatorCorrecao.HORIZONTAL.value;
    }

    this.isSemOrientacaoFatorCorrecao = function() {
        return orientacaoFatorCorrecao == orientacaoFatorCorrecao.SEM_FATOR.value;
    }

    this.setpossibilidadeInstalacao = function(possibilidadeInstalacao) {
        this.possibilidadeInstalacao = possibilidadeInstalacao;
    }

    this.getSistema = function() {
        return sistema;
    }

    this.getSistemaString = function() {
        return Dimensionamento.getDescription(Sistema.class, sistema);
    }

    this.isDuasFases = function() {
        return ((sistema == Sistema.MONOFASICO_DOIS_CONDUTORES.value) || (sistema == Sistema.MONOFASICO_TRES_CONDUTORES.value) || (sistema == Sistema.DUAS_FASES_SEM_NEUTRO
                .value));
    }

    this.isTrifasico = function() {
        return ((sistema == Sistema.DUAS_FASES_COM_NEUTRO.value) || (sistema == Sistema.TRIFASICO_COM_NEUTRO.value) || (sistema == Sistema.TRIFASICO_SEM_NEUTRO
                .value));
    }

    this.getNumeroCircuitos = function(numeroCabos) {
        if ((isColunaF() || isColunaG()) && possibilidadeInstalacao == possibilidadeInstalacao.BANCO_DUTOS_SOLO.value) {
            return formacaoBancoDutos * numeroCabos;
        } else {
            return quantidadeCircuitos * numeroCabos;
        }
    }

    this.setSistema = function(sistema) {
        this.sistema = sistema;
    }

    this.gettemperaturaMaximaCondutor = function() {
        return temperaturaMaximaCondutor;
    }

    this.istemperaturaMaximaCondutor70 = function() {
        return temperaturaMaximaCondutor == temperaturaMaxima._70C.value;
    }

    this.istemperaturaMaximaCondutor90 = function() {
        return temperaturaMaximaCondutor == temperaturaMaxima._90C.value;
    }

    this.settemperaturaMaximaCondutor = function(temperaturaMaximaCondutor) {
        this.temperaturaMaximaCondutor = temperaturaMaximaCondutor;
    }

    this.getTensaoIsolamento = function() {
        return tensaoIsolamento;
    }

    this.getTensaoIsolamentoString = function() {
        return Dimensionamento.getDescription(TensaoIsolamento.class, tensaoIsolamento);
    }

    this.setTensaoIsolamento = function(tensaoIsolamento) {
        this.tensaoIsolamento = tensaoIsolamento;
    }

    this.getUtilizacaoCircuito = function() {
        return utilizacaoCircuito;
    }

    this.getUtilizacaoCircuitoString = function() {
        return Dimensionamento.getDescription(UtilizacaoCircuito.class, utilizacaoCircuito);
    }

    this.setUtilizacaoCircuito = function(utilizacaoCircuito) {
        this.utilizacaoCircuito = utilizacaoCircuito;
    }

    this.getTemperaturaArSolo = function() {
        return temperaturaArSolo;
    }

    this.setTemperaturaArSolo = function(temperaturaArSolo) {
        this.temperaturaArSolo = temperaturaArSolo;
    }

    this.getComprimentoCircuito = function() {
        return comprimentoCircuito;
    }

    this.getComprimentoCircuitoKM = function() {
        return comprimentoCircuito / 1000;
    }

    this.setComprimentoCircuito = function(comprimentoCircuito) {
        this.comprimentoCircuito = comprimentoCircuito;
    }

    this.getCorrenteProjeto = function() {
        return correnteProjeto;
    }

    this.setCorrenteProjeto = function(correnteProjeto) {
        this.correnteProjeto = correnteProjeto;
    }

    this.getFatorPotencia = function() {
        return fatorPotencia;
    }

    this.setFatorPotencia = function(fatorPotencia) {
        this.fatorPotencia = fatorPotencia;
    }

    this.getPotenciaAparente = function() {
        return potenciaAparente;
    }

    this.setPotenciaAparente = function(potenciaAparente) {
        this.potenciaAparente = potenciaAparente;
    }

    this.getQuedaTensaoMaxima = function() {
        return quedaTensaoMaxima;
    }

    this.setQuedaTensaoMaxima = function(quedaTensaoMaxima) {
        this.quedaTensaoMaxima = quedaTensaoMaxima;
    }

    this.getlocalInstalacao = function() {
        return localInstalacao;
    }

    this.haslocalInstalacao = function() {
        return localInstalacao > 0;
    }

    this.getlocalInstalacaoString = function() {
        return Dimensionamento.getDescription(localInstalacao.class, localInstalacao);
    }

    this.setlocalInstalacao = function(localInstalacao) {
        this.localInstalacao = localInstalacao;
    }

    this.getTipoInstalacao = function() {
        return tipoInstalacao;
    }

    this.getTipoInstalacaoString = function() {
        return Dimensionamento.getDescription(tipoInstalacao.class, tipoInstalacao);
    }

    this.isJustaposto = function() {
        return tipoInstalacao == tipoInstalacao.FORMACAO_JUSTAPOSTA.value;
    }

    this.isTrifolio = function() {
        a = tipoInstalacao == tipoInstalacao.FORMACAO_TRIFOLIO.value;
        b = isUnipolar() && (localInstalacao == localInstalacao.ELETRODUTO_SECAO_CIRCULAR.value);

        return a || b;
    }

    this.isEspacado = function() {
        return tipoInstalacao == tipoInstalacao.FORMACAO_ESPACADA.value;
    }

    this.setTipoInstalacao = function(tipoInstalacao) {
        this.tipoInstalacao = tipoInstalacao;
    }

    this.getUnidadeTensao = function() {
        return unidadeTensao;
    }

    this.setUnidadeTensao = function(unidadeTensao) {
        this.unidadeTensao = unidadeTensao;
    }

    this.getQuantidadeCamadas = function() {
        return quantidadeCamadas;
    }

    this.setQuantidadeCamadas = function(quantidadeCamadas) {
        this.quantidadeCamadas = quantidadeCamadas;
    }

    this.getQuantidadeCircuitos = function() {
        return quantidadeCircuitos;
    }

    this.setQuantidadeCircuitos = function(quantidadeCircuitos) {
        this.quantidadeCircuitos = quantidadeCircuitos;
    }

    this.getFixarInformacaoCurto = function() {
        return fixarInformacaoCurto;
    }

    this.getFixarInformacaoCurtoString = function() {
        return fixarInformacaoCurto == 0 ? "N‹o" : "Sim";
    }

    this.isInformacaoCurtoCircuitoFixada = function() {
        return fixarInformacaoCurto == 1;
    }
    
    this.setFixarInformacaoCurto = function(fixarInformacaoCurto) {
        this.fixarInformacaoCurto = fixarInformacaoCurto;
    }

    this.getFixarNumeroCabos = function() {
        return fixarNumeroCabos;
    }

    this.getFixarNumeroCabosString = function() {
        return fixarNumeroCabos == 0 ? "N‹o" : "Sim";
    }

    this.isNumeroCabosFixada = function() {
        return fixarNumeroCabos == 1;
    }

    this.setFixarNumeroCabos = function(fixarNumeroCabos) {
        this.fixarNumeroCabos = fixarNumeroCabos;
    }

    this.getFixarSecaoCondutor = function() {
        return fixarSecaoCondutor;
    }

    this.getFixarSecaoCondutorString = function() {
        return fixarSecaoCondutor == 0 ? "N‹o" : "Sim";
    }

    this.setFixarSecaoCondutor = function(fixarSecaoCondutor) {
        this.fixarSecaoCondutor = fixarSecaoCondutor;
    }

    this.getCorrenteCurto = function() {
        return correnteCurto;
    }

    this.setCorrenteCurto = function(correnteCurto) {
        this.correnteCurto = correnteCurto;
    }

    this.getEletrodutoMetalico = function() {
        return eletrodutoMetalico;
    }

    this.getEletrodutoMetalicoString = function() {
        return eletrodutoMetalico == 0 ? "N‹o" : "Sim";
    }

    this.isEletrodutoMetal = function() {
        return (getEletrodutoMetalico() == 1);
    }
    this.setEletrodutoMetalico = function(eletrodutoMetalico) {
        this.eletrodutoMetalico = eletrodutoMetalico;
    }

    this.getFormacaoBancoDutos = function() {
        return formacaoBancoDutos;
    }

    this.getFormacaoBancoDutosString = function() {
        return Dimensionamento.getDescription(BancoDutos.class, formacaoBancoDutos);
    }

    this.setFormacaoBancoDutos = function(formacaoBancoDutos) {
        this.formacaoBancoDutos = formacaoBancoDutos;
    }

    this.getNumeroBandejas = function() {
        return numeroBandejas;
    }

    this.setNumeroBandejas = function(numeroBandejas) {
        this.numeroBandejas = numeroBandejas;
    }

    this.getNumeroBandejasVertical = function() {
        return numeroBandejasVertical;
    }

    this.setNumeroBandejasVertical = function(numeroBandejasVertical) {
        this.numeroBandejasVertical = numeroBandejasVertical;
    }

    this.getNumeroCabosFixado = function() {
        return numeroCabosFixado;
    }

    this.setNumeroCabosFixado = function(numeroCabosFixado) {
        this.numeroCabosFixado = numeroCabosFixado;
    }

    this.getNumeroTernasBandeja = function() {
        return numeroTernasBandeja;
    }

    this.setNumeroTernasBandeja = function(numeroTernasBandeja) {
        this.numeroTernasBandeja = numeroTernasBandeja;
    }

    this.getNumeroTernasBandejaVertical = function() {
        return numeroTernasBandejaVertical;
    }

    this.setNumeroTernasBandejaVertical = function(numeroTernasBandejaVertical) {
        this.numeroTernasBandejaVertical = numeroTernasBandejaVertical;
    }

    this.getPosicaoCabosSolo = function() {
        return quantidadeCircuitos;
    }

    this.getPosicaoCabosSoloString = function() {
        return Dimensionamento.getDescription(posicaoCabos.class, quantidadeCircuitos);
    }

    this.setPosicaoCabosSolo = function(posicaoCabosSolo) {
        this.quantidadeCircuitos = posicaoCabosSolo;
    }

    this.getResistividadeTermica = function() {
        return resistividadeTermica;
    }

    this.setResistividadeTermica = function(resistividadeTermica) {
        this.resistividadeTermica = resistividadeTermica;
    }

    this.getSecaoCondutorFixado = function() {
        return secaoCondutorFixado;
    }

    this.setSecaoCondutorFixado = function(secaoCondutorFixado) {
        this.secaoCondutorFixado = secaoCondutorFixado;
    }

    this.getOrientacaoFatorCorrecao = function() {
        return orientacaoFatorCorrecao;
    }

    this.getOrientacaoFatorCorrecaoString = function() {
        return Dimensionamento.getDescription(orientacaoFatorCorrecao.class, orientacaoFatorCorrecao);
    }

    this.setOrientacaoFatorCorrecao = function(orientacaoFatorCorrecao) {
        this.orientacaoFatorCorrecao = orientacaoFatorCorrecao;
    }

    this.getTempoAtuacaoProtecao = function() {
        return tempoAtuacaoProtecao;
    }

    this.setTempoAtuacaoProtecao = function(tempoAtuacaoProtecao) {
        this.tempoAtuacaoProtecao = tempoAtuacaoProtecao;
    }

    this.setTempoAtuacaoProtecao = function() {
        return codigo;
    }

    this.setCodigo = function(codigo) {
        this.codigo = codigo;
    }

    this.getPosicionamentoCabo = function() {
        return posicionamentoCabo;
    }

    this.getPosicionamentoCaboString = function() {
        return Dimensionamento.getDescription(localInstalacao.class, posicionamentoCabo);
    }

    this.setPosicionamentoCabo = function(posicionamentoCabo) {
        this.posicionamentoCabo = posicionamentoCabo;
    }

    this.getSistemaAterramento = function() {
        return sistemaAterramento;
    }

    this.setSistemaAterramento = function(sistemaAterramento) {
        this.sistemaAterramento = sistemaAterramento;
    }

    this.isMultiAterrado = function() {
        return isMediaTensao();
    }

    this.isEletroduto = function() {
        return (localInstalacao == localInstalacao.ELETRODUTO.value ||
                localInstalacao == localInstalacao.ELETRODUTO_CIRCULAR_ALVENARIA.value ||
                localInstalacao == localInstalacao.ELETRODUTO_PAREDE.value ||
                localInstalacao == localInstalacao.ELETRODUTO_SECAO_CIRCULAR.value);
    }

    this.isDiretamenteEnterrados = function() {
        return (localInstalacao == localInstalacao.DIRETAMENTE_ENTERRADOS.value ||
                localInstalacao == localInstalacao.DIRETAMENTE.value);
    }

    this.isEletrodutoSolo = function() {
        a = possibilidadeInstalacao == possibilidadeInstalacao.ELETRODUTO_SOLO.value;
        b = possibilidadeInstalacao == possibilidadeInstalacao.ELETRODUTO_METALICO_SOLO.value;
        c = possibilidadeInstalacao == possibilidadeInstalacao.ELETRODUTO_NAO_METALICO_SOLO.value;
        return (a || b || c);
    }

    this.getDistanciaEntreCabos = function() {
        return this.distanciaEntreCabos;
    }

    this.setDistanciaEntreCabos = function(distanciaEntreCabos) {
        this.distanciaEntreCabos = distanciaEntreCabos;
    }

    this.getorientacaoCabo = function() {
        return orientacaoCabo;
    }

    this.getOrietacaoCaboString = function() {
        return Dimensionamento.getDescription(orientacaoCabo.class, orientacaoCabo);
    }

    this.isOrientacaoHorizontal = function() {
        return orientacaoCabo == orientacaoCabo.HORIZONTAL.value;
    }

    this.isOrientacaoVertical = function() {
        return orientacaoCabo == orientacaoCabo.VERTICAL.value;
    }

    this.setorientacaoCabo = function(orientacaoCabo) {
        this.orientacaoCabo = orientacaoCabo;
    }

    this.getRelacaoCaboDuto = function() {
        return relacaoCaboDuto;
    }

    this.getRelacaoCaboDutoString = function() {
        return Dimensionamento.getDescription(RelacaoCaboXDuto.class, relacaoCaboDuto);
    }

    this.setRelacaoCaboDuto = function(relacaoCaboDuto) {
        this.relacaoCaboDuto = relacaoCaboDuto;
    }

    this.getAlturaCanaleta = function() {
        return alturaCanaleta;
    }

    this.setAlturaCanaleta = function(alturaCanaleta) {
        this.alturaCanaleta = alturaCanaleta;
    }

    this.getLarguraCanaleta = function() {
        return larguraCanaleta;
    }

    this.setLarguraCanaleta = function(larguraCanaleta) {
        this.larguraCanaleta = larguraCanaleta;
    }

    this.getAplicacao = function() {
        return aplicacao;
    }

    this.setAplicacao = function(aplicacao) {
        this.aplicacao = aplicacao;
    }

    this.getTipoCabo = function() {
        return tipoCabo;
    }

    this.setTipoCabo = function(tipoCabo) {
        this.tipoCabo = tipoCabo;
    }
}

d = new DimensionamentoBean();