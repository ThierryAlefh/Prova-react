import React, { useState } from 'react';
import { maximo, media, minimo } from '../../services';
import './index.sass';

const Index = () => {
	const [qtd, setQtd] = useState(0);
	const [notas, setNotas] = useState([]);
	const [resultado, setResultado] = useState(0);
	const [min, setMin] = useState(0);
	const [max, setMax] = useState(0);
	//let valores = [...notas];

	function setar() {
		//setNotas([]);
		let temp = [];
		for (let i = 0; i < qtd; i++) temp.push(0);
		setNotas(temp);
	}

	function alterar(pos, val) {
		if (val > 10 || val < 0) return;
		notas[pos] = val;
		setNotas([...notas]);
	}

	return (
		<div className='notas'>
			<main>
				<h1>Calcular notas</h1>
				<div>
					Linhas:
					<input
						type='number'
						value={qtd}
						onChange={e => setQtd(Number(e.target.value))}
						min='1'
					/>
					<button onClick={setar}>Setar</button>
				</div>
				<div className='notas-total'>
					{notas.map((item, index) => (
						<div>
							Aluno {index + 1}:
							<input
								type='number'
								value={item}
								onChange={e => alterar(index, Number(e.target.value))}
								max='10'
								min='0'
								key={index}
							/>
						</div>
					))}
					<button
						onClick={() => {
							setResultado(media(notas));
							setMin(minimo(notas));
							setMax(maximo(notas));
						}}>
						Calcular
					</button>
					<div>Média: {resultado}</div>
					<div>Mínima: {min}</div>
					<div>Máxima: {max}</div>
				</div>
			</main>
		</div>
	);
};

export default Index;
