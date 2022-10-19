// desenhar retangulo
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

//contagem
export function Contagem(inicio,final) {

	let r = ''

	let i = inicio

	while(i <= final){
		r = r + ',' + i
		i++
	}
	return r;
}

// cafe
function Cafe(n, l, d) {
    
    let coff = ((n*d) /1000);
    let qtd = l;

    while(coff> qtd) {
        qtd+=l
    }
    console.log(qtd)
}

Cafe(15, 3, 200)

