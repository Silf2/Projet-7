import './Slideshow.css'
import FlecheDroite from '../../assets/arrow_right.png'
import FlecheGauche from '../../assets/arrow_left.png'
import { useState } from 'react'

function Slideshow({imgSlideshow}) {

    const [PositionActuel, setPositionActuel] = useState(0)

    const SlideSuivante = () => {
        setPositionActuel(PositionActuel +1)
        if(PositionActuel === imgSlideshow.length-1)
        {
            setPositionActuel(0)
        }
    }

    const SlidePrecedente = () => {
        setPositionActuel(PositionActuel -1)
        if(PositionActuel === 0)
        {
            setPositionActuel(imgSlideshow.length-1)
        }
    }

    return(
        <section style={{backgroundImage: `url(${imgSlideshow[PositionActuel]})`}} className="caroussel">
            {imgSlideshow.length > 1 &&
                <>
                    <img className='fleche_droite_caroussel' src={FlecheDroite} alt="Flèche droite" onClick={SlideSuivante}/>
                    <img className='fleche_gauche_caroussel' src={FlecheGauche} alt="Flèche gauche" onClick={SlidePrecedente}/>
                </>
            }
        </section>
    )
}

export default Slideshow