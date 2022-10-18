export function desenharRetangulo(linhas, colunas) {
	let rs = [];
	for (let i = 0; i < linhas; i++) {
		for (let j = 0; j < colunas; j++) {
			rs.push('*');
		}
		rs.push(' ');
	}

	return rs;
}
