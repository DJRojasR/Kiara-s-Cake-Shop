import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Header from './components/Header/Header.jsx'
import Menu from './components/Menu/Menu.jsx'
import Meki from './components/Meki/Meki.jsx'
import Nosotros from './components/Nosotros/Nosotros.jsx'
import Footer from './components/Footer/Footer.jsx'

const App= () => {
  return (
      <div className="app">
        <Navbar/>
        <Header/>
        <Menu/>
        <Nosotros/>
        <Footer/>
        <Meki/>
      </div>
  )
}

export default App
