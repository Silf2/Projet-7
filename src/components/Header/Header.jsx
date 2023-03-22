import './Header.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

function Header() {
  return (
    <header>
        <img src={logo} alt="Kasa" className='Kasa_logo'/>
        <nav className='Header_navigation'>
            <Link to="/">Accueil</Link>
            <Link to="/A-propos">A propos</Link>
        </nav>
    </header>
  )
}

export default Header