import './Card.css'
import { Link } from 'react-router-dom'

function Card({id, title, cover}){
    return(
        <Link to={`/Fiche_logement/${id}`} className='carte_vierge'>
            <img src={cover} alt = {title} className='illu_logement'/>
            <h2 className='titre_card'> {title}</h2>
        </Link>
    )
}

export default Card