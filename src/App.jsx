import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Blog from './components/Blog/Blog'

function App() {
  return (
    <div className="App p-3 relative overflow-hidden">
      <Header></Header>
      <Main></Main>
      <Blog></Blog>
    </div>
  )
}

export default App
