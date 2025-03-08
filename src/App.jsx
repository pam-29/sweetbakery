import Navbar from './components/navbar'
import Footer from './components/footer'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Menu from './pages/menu'
import About from './pages/about'
import Contact from './pages/contact'
import './App.css'

function App() {
  return (<div className='App'>
    {/* Router c'est pour dire qu'ici on a besoin de naviguer, gère les différentes navigations */}
    <Router>

      <Navbar />

    {/* Routes gère toutes les pages qui se trouveront ici, définit quel page affiché selon l'url */}
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/menu' element={ <Menu />} />
        <Route path='/about' element={ <About />} />
        <Route path='/contact' element={ <Contact />} />
      </Routes>
    
    <Footer />

    </Router>
  </div>)
}

export default App
