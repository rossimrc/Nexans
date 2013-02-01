function FatorCorrecao(dimensionamento, produto) {
	this.dimensionamento = dimensionamento;
	this.produto = produto;
	this.fatorAgrupamento = new FatorAgrupamento(this.dimensionamento);
	
}