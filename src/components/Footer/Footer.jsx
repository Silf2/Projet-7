import './Footer.css'
import logo from '../../assets/logo.png'

function Footer(){
    return(
        <footer>
            <img src={logo} alt="Kasa" className='Kasa_logo'/>
            <p className='Footer_text'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer