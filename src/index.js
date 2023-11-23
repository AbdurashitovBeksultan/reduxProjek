import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import UserReducer from './store/UserReducer'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './store/Home'
import Create from './store/Create'
import Update from './store/Update'

const store = configureStore({
	reducer: {
		users: UserReducer,
	},
})
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
			<HashRouter>
			<Routes>
				<Route path='*' element={<Home />}></Route>
				<Route path='/create' element={<Create />}></Route>
				<Route path='/edit/:id' element={<Update />}></Route>
			</Routes>
		</HashRouter>
		</Provider>
	</React.StrictMode>,
)
