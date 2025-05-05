import { useEffect, useState } from 'react'
import './App.css'
import Nav from './components/nav/nav'
import Home from './components/home/home'
import Footer from './components/footer/footer'

function App() {
  const [page, setPage] = useState("home")

  useEffect(() => {
    setPage("home")
  },[])

  return (
      <div className="page-container">
        <Nav/>
        {page === "home" && (
          <Home/>
        )}
        <Footer/>
      </div>
  )
}

export default App
