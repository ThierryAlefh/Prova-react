import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.sass';

const rotas = [
	{
		nome: 'Calcular valor do açaí',
		rota: 'acai',
	},
	{
		nome: 'Verificar se é de libras',
		rota: 'libra',
	},
	{
		nome: 'Calcular valor do sorvete',
		rota: 'sorvete',
	},
	{
		nome: 'Calcular o salário',
		rota: 'salario',
	},
	{
		nome: 'Calcular paradas',
		rota: 'consumo',
	},
	{
		nome: 'Febre',
		rota: 'febre',
	},
	{
		nome: 'Orçamento familiar',
		rota: 'orcamento',
	},
	{
		nome: 'Ingressos cinema',
		rota: 'cinema',
	},
	{
		nome: 'Desenhar retangulo',
		rota: 'retangulo',
	},
	{
		nome: 'Desenhar triangulo',
		rota: 'triangulo',
	},
	{
		nome: 'Contagem em Sequência',
		rota: 'Contagem',
	},
	{
		nome: 'Quero Café',
		rota: 'Cafe',
	},
	{
		nome: 'Jogo da velha',
		rota: 'tic-tac-toe',
	},
	{
		nome: 'Calcular notas',
		rota: 'notas',
	},
];

const Index = () => {
	const navigate = useNavigate();

	return (
		<div className='home'>
			<main>
				<h1>Menu de navegação</h1>
				<ul>
					{rotas.map(item => (
						<li
							onClick={() => navigate(`/${item.rota}`)}
							key={item.nome}>
							{item.nome}
						</li>
					))}
				</ul>
			</main>
		</div>
	);
};

export default Index;
