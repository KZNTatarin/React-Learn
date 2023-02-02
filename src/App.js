import React from 'react';
import { BrowserRouter, Link, Route, Routes, Switch, Redirect } from "react-router-dom";
import AppRouter from './components/AppRouter';
import Navbar from './components/UI/Navbar/Navbar';
import About from "./pages/About";
import Posts from "./pages/Posts";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<AppRouter/>
		</BrowserRouter>
	)

};


export default App;
