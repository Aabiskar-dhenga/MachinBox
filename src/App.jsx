import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import News from './pages/news/News'
import About from './pages/about/About'
import "./App.css"
import Test from './components/Test'

const App = () => {
  return (
    <div className="App">

      <Routes>

      <Route path='/'   element={<Home/>}  />
      <Route path='/news'   element={<News/>}  />
      <Route path='/about'   element={<About/>}  />


      </Routes>

    </div>
  )
}

export default App