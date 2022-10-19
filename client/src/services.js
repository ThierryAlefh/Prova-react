export function desenharRetangulo(linhas, colunas, simbolo) {
	let rs = [];
	for (let i = 0; i < linhas; i++) {
		let cols = [];
		for (let j = 0; j < colunas; j++) {
			cols.push(simbolo);
		}
		rs.push(cols);
	}
	return rs;
}

export function desenharTriangulo(rows) {
	let rs = [];
	for (let i = 0; i <= rows; i++) {
		let temp = [];
		for (let j = 0; j <= rows; j++) {
			if (j < i) temp.push('* ');
			else temp.push('  ');
		}
		rs.push(temp);
	}
	return rs;
}

export function Contagem(inicio, final) {
	let r = '';
	let i = inicio;

	while (i <= final) {
		r = r + ',' + i;
		i++;
	}
	return r;
}

export function Cafe(n, l, d) {
	let coff = (n * d) / 1000;
	let qtd = l;
	while (coff > qtd) {
		qtd += l;
	}
	return qtd;
}
