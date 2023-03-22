import './Collapse.css'
import Fleche from '../../assets/arrow.png'
import { useState } from 'react'

function Collapse({titre, texte}) {
    const [toggle, setToggle] = useState(false);

    return(
        <div>
            <div className='collapse'>
                <h2 className='collapse_titre' onClick={() => setToggle(!toggle)}>
                    {titre}
                    <img className={toggle ? 'fleche_haut' : 'fleche_bas'} src={Fleche} alt='Flèche du collapse'/>
                </h2>
                <div className={toggle ? 'collapse_text' : 'collapse_text_cache'}>
                    {Array.isArray(texte) ? texte.map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    }) : texte
                    }
                </div>
            </div>
        </div>
    )
}

export default Collapse