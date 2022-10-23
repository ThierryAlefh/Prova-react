import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Acai from './pages/acai';
import Libra from './pages/libra';
import Sorvete from './pages/sorvete';
import Salario from './pages/salario';
import Consumo from './pages/consumo';
import Febre from './pages/febre';
import Orcamento from './pages/orçamento';
import Cinema from './pages/cinema';
import Retangulo from './pages/retangulo';
import Triangulo from './pages/triangulo';
import Contagem from './pages/contagem';
import Cafe from './pages/cafe';
import TicTacToe from './pages/jogo-da-velha';

const Index = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					exact
					element={<Home />}
				/>
				<Route
					path='/acai'
					exact
					element={<Acai />}
				/>
				<Route
					path='/libra'
					exact
					element={<Libra />}
				/>
				<Route
					path='/sorvete'
					exact
					element={<Sorvete />}
				/>
				<Route
					path='/salario'
					exact
					element={<Salario />}
				/>
				<Route
					path='/consumo'
					exact
					element={<Consumo />}
				/>
				<Route
					path='/febre'
					exact
					element={<Febre />}
				/>
				<Route
					path='/orcamento'
					exact
					element={<Orcamento />}
				/>
				<Route
					path='/cinema'
					exact
					element={<Cinema />}
				/>
				<Route
					path='/retangulo'
					exact
					element={<Retangulo />}
				/>
				<Route
					path='triangulo'
					exact
					element={<Triangulo />}
				/>
				<Route
					path='/contagem'
					exact
					element={<Contagem />}
				/>
				<Route
					path='/cafe'
					exact
					element={<Cafe />}
				/>
				<Route
					path='tic-tac-toe'
					exact
					element={<TicTacToe />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default Index;
