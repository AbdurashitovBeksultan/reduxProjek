import React from 'react'
import Home from './store/Home'
import { HashRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Create from './store/Create'
import Update from './store/Update'

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route path='*' element={<Home />}></Route>
				<Route path='/create' element={<Create />}></Route>
				<Route path='/edit/:id' element={<Update />}></Route>
			</Routes>
		</HashRouter>
	)
}

export default App
