import Falaise from '../../assets/eric-muhr-P_XxsdVgtpQ-unsplash.jpg'
import Montagne from '../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg'
import './Banner.css'
import { useLocation } from 'react-router-dom'

function Banner() {
    const location = useLocation();

    return (
        <div>
            {location.pathname === '/' ? (
                <div>
                    <img src={Falaise} alt="Falaise" className='Falaise_accueil'/>
                    <h1 className='titre_accueil'>Chez vous, partout et ailleurs</h1>
                </div>
            ) : (
                <img src={Montagne} alt ="Montagne" className='Montagne_accueil'/>
            )}

        </div>
    )
}

export default Banner