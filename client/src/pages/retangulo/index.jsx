import React, { useState } from 'react';
import { desenharRetangulo } from '../../services';
import './index.sass';

const Index = () => {
	const [linhas, setLinhas] = useState(1);
	const [colunas, setColunas] = useState(1);
	const [resultado, setResultado] = useState([]);

	function calcular() {
		if (linhas < 1) {
			alert('A quantidade minima de linhas é 1');
			return;
		} else if (colunas < 1) {
			alert('A quantidade minima de colunas é 1');
			return;
		}
		setResultado(desenharRetangulo(linhas, colunas));
	}

	return (
		<div className='retangulo'>
			<main>
				<h1>Retangulo</h1>
				<div>
					Linhas:
					<input
						type='number'
						value={linhas}
						onChange={e => setLinhas(e.target.value)}
						min='1'
					/>
					Colunas:
					<input
						type='number'
						value={colunas}
						onChange={e => setColunas(e.target.value)}
						min='1'
					/>
					<br />
					<button onClick={calcular}>Verificar</button>
				</div>
				<div className='retangulo-total'>
					{resultado.map(item => {
						if (item === ' ') return <br />;
						else return <span>{item}</span>;
					})}
				</div>
			</main>
		</div>
	);
};

export default Index;
