function SecaoNominalCondutores(dimensionamento, produto) {
	this.NUMERO_MAXIMO_CABOS = 20;
	
	this.dimensionamento = dimensionamento;
	this.produto = produto;
	
	this.tabelaUtil = new TabelaUtil();
	this.tabelaUtil.setDimensionamento(dimensionamento);
	this.tabelaUtil.setProduto(produto);
	
	this.fatorCorrecao = new FatorCorrecao(this.dimensionamento, this.produto);
	
	// Número de cabos utilizados.
    this.numeroCabos = 0;

    // Seção do condutor (SC).
    this.sC = 0;

    // Resistencia do condutor em CC à temperatura máxima do condutor (Rcc).
    this.rcc = 0;
    this.rcaCorrigido = 0;

    // Corrente calculada.
    this.i = 0;

    // Corrente tabelada.
    this.iTabelada = 0;

    // Resistencia do condutor em CA.
    this.rca = 0;
    this.xpp = 0;

    // Diametro medio da blindagem.
    this.dp = 0;

    // Resistência elétrica em corrente alternada da proteção metálica (Rp).
    this.rp = 0;

    // Fatores
    this.fatorTemperaturaAmbiente = 0;
    this.fatorAgrupamento = 0;
    this.fatorResistividadeTermica = 0;
    
    //developing this
}