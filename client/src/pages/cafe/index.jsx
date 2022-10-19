import { useState } from 'react';
import './index.sass';
import { Cafe } from '../../services';

const Index = () => {
	const [l, setL] = useState(1);
	const [n, setN] = useState(1);
	const [d, setD] = useState(1);
	const [resultado, setResultado] = useState('');

	return (
		<div className='cafe'>
			<main>
				<h1>Quero Café</h1>
				<div>
					Número de Estudantes:
					<input
						type='number'
						value={n}
						onChange={e => setN(Number(e.target.value))}
					/>
					<br />
					Litros de Café:
					<input
						type='number'
						value={l}
						onChange={e => setL(Number(e.target.value))}
					/>
					<br />
					ML por aluno:
					<input
						type='number'
						value={d}
						onChange={e => setD(Number(e.target.value))}
					/>
					<button onClick={() => setResultado(Cafe(n, l, d))}>Verificar</button>
				</div>
				{resultado}
			</main>
		</div>
	);
};
export default Index;
