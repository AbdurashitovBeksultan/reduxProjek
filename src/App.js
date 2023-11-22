import React from 'react'
import Home from './store/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Create from './store/Create';
import Update from './store/Update';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />}>
					{' '}
				</Route>
				<Route path='/create' element={<Create />}>
					{' '}
				</Route>
        <Route path='/edit/:id' element={<Update />}>
					{' '}
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
