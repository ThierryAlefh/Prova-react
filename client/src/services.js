export function desenharRetangulo(linhas, colunas, simbolo) {
	let rs = [];
	for (let i = 0; i < linhas; i++) {
		for (let j = 0; j < colunas; j++) {
			rs.push(simbolo);
		}
		rs.push(' ');
	}

	console.log(simbolo);
	return rs;
}
