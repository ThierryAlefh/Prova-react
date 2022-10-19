import React, { useState } from 'react';
import { desenharTriangulo } from '../../services';
import './index.sass';

const Index = () => {
	const [linhas, setLinhas] = useState(1);
	const [resultado, setResultado] = useState([]);

	function calcular() {
		if (linhas < 1) {
			alert('A quantidade minima de linhas é 1');
			return;
		}
		setResultado(desenharTriangulo(linhas));
	}

	return (
		<div className='triangulo'>
			<main>
				<h1>Triângulo</h1>
				<div>
					Tamanho:
					<input
						type='number'
						value={linhas}
						onChange={e => setLinhas(e.target.value)}
						min='1'
					/>
					<br />
					<button onClick={calcular}>Verificar</button>
				</div>
				<div className='triangulo-total'>
					{resultado.map(item => (
						<div>
							{item.map(arr => (
								<span>{arr}</span>
							))}
						</div>
					))}
				</div>
			</main>
		</div>
	);
};

export default Index;
