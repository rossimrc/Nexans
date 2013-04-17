/*****************
 * ENUM-LIKE JSON
 *****************/

/////////////////////
_35C = 35;
_40C = 40;
_45C = 45;
_50C = 50;
_55C = 55;
_60C = 60;
_65C = 65;
_70C = 70;
_75C = 75;
_80C = 80;
_85C = 85;
_90C = 90;
_95C = 95;
_105C = 105;
/////////////////////
TEMPERATURAMAXIMA = {
	35		: {description : "35ºC"},
	40		: {description : "40ºC"},
	45		: {description : "45ºC"},
	50		: {description : "50ºC"},
	55		: {description : "55ºC"},
	60	 	: {description : "60ºC"},
	65	 	: {description : "65ºC"},
	70	 	: {description : "70ºC"},
	75		: {description : "75ºC"},
	80		: {description : "80ºC"},
	85 		: {description : "85ºC"},
	90	 	: {description : "90ºC"},
	95	 	: {description : "95ºC"},
	105 	: {description : "105ºC"}
}

/////////////////////
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
NCUNIPOLAR = 1;
NCBIPOLAR = 2;
NCTRIPOLAR = 3;
NCTETRAPOLAR = 4;
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
    400		: {description : "Vinil Flexvel"},
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
ELETROCALHA_FECHADA_OU_ELETRODUTO = 111;
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
    111	: {description : "Eletrocalha fechada ou Eletroduto"}, //1
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
_1_CABO = 242;
_3_CABOS = 222;
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
	21	: {description : "Formação espaada"},
	22	: {description : "Trifólio"},
	23	: {description : "Plano justapostos"},
	24	: {description : "Formação Espaçada"},
	25	: {description : "Formação Horizontal"},
	26	: {description : "Formacão Vertical"},
	27	: {description : "Instalação em Bandejas"},
	28	: {description : "Instalação Vertical"},
	29	: {description : "Não precisa aplicar fator de correção"},
	242	: {description : "Um cabo por duto"},
	222	: {description : "Três cabos por duto"}
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
    3 : {description : "Instalação vertical"}
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
    1 : {description : "Circuito de Iluminaçãoo"},
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

//*NOVO
/////////////////////
_1   = 1;
_1_5 = 2;
_2   = 3;
_3   = 4;
_2_5 = 5;
/////////////////////
RESISTIVIDADE_TERMICA = {
	1 : {description : "1 K.m/W"},
	2 : {description : "1,5 K.m/W"},
	3 : {description : "2 K.m/W"},
	4 : {description : "3 K.m/W"},
	5 : {description : "2,5 K.m/W"}
}

/////////////////////
OCHORIZONTAL = 1;
OCVERTICAL = 2;
/////////////////////
ORIENTACAO_CABO = {
	1 : {description : "Formação Horizontal"},
	2 : {description : "Formação Vertical"}
};

/////////////////////
SEM_FATOR = 1;
HORIZONTAL = 2;
VERTICAL = 3;
/////////////////////
ORIENTACAO_FATOR_CORRECAO = {
	1 : {description : "Não necessita aplicar fator de correção"},
    2 : {description : "Instalação horizontal"},
    3 : {description : "Instalação vertical"}
};

//*NOVO
/////////////////////
CABO_ARMADO_COBRE   = 1;
CABO_ARMADO_ACO     = 2;
CABO_NAO_ARMADO     = 3;
SEGURANCA_MAXIMA    = 4;
DEMAIS_APLICACOES   = 5;
ISOLACAO_HF_XLPE    = 6;
ISOLACAO_HF_HEPR    = 7;
UNIPOLAR            = 8;
TRIPOLAR            = 9;
/////////////////////
CABOSNAVAIS = {
	1 : {description : "Cabo armado com trança de Cobre"},
	2 : {description : "Cabo armado com trança de Aço"},
	3 : {description : "Cabo não armado"},
	4 : {description : "Segurança Máxima - resistente ao fogo - Norma IEC 60331-21"},
	5 : {description : "Auto-extinção e não-propagação de chama - Norma IEC 60332-3-22"},
	6 : {description : "Isolação HF XLPE"},
	7 : {description : "Isolação HF HEPR"},
	8 : {description : "Unipolar - Um condutor"},
	9 : {description : "Três condutores"}
}

//*NOVO
/////////////////////
NULA        = 1;
_1M         = 2;
_0_125M     = 3;
_0_25M      = 4;
_0_5M       = 5;
MAIOR_0_5M  = 6;
MAIOR_1M    = 7;
UM_DIAMETRO = 2;
/////////////////////
DISTANCIA_CABOS = {
	1 : {description : "Nula"},
	2 : {description : "1m"},
	3 : {description : "0,125m"},
	4 : {description : "0,25m"},
	5 : {description : "0,5m"},
	6 : {description : "Maior que 0,5m"},
	7 : {description : "Maior que 1m"},
	2 : {description : "Um diâmetro de cabo"}
}

/////////////////////
_10C_AS = 10;
_15C_AS = 15;
_20C_AS = 20;
_25C_AS = 25;
_30C_AS = 30;
_35C_AS = 35;
_40C_AS = 40;
_45C_AS = 45;
_50C_AS = 50;
_55C_AS = 55;
_60C_AS = 60;
_65C_AS = 65;
_70C_AS = 70;
_75C_AS = 75;
_80C_AS = 80;
_85C_AS = 85;
///////////////////// TemperaturaArSolo
TEMPERATURA_AR_SOLO = {
	10		: {description : "10ºC"},
	15		: {description : "15ºC"},
	20		: {description : "20ºC"},
	25		: {description : "25ºC"},
	30		: {description : "30ºC"},
	35	 	: {description : "35ºC"},
	40	 	: {description : "40ºC"},
	45	 	: {description : "45ºC"},
	50		: {description : "50ºC"},
	55		: {description : "55ºC"},
	60 		: {description : "60ºC"},
	65	 	: {description : "65ºC"},
	70	 	: {description : "70ºC"},
	75      : {description : "75ºC"},
	80      : {description : "80ºC"},
	85      : {description : "85ºC"}
}