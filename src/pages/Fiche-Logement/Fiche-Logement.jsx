import Slideshow from "../../components/Slideshow/Slideshow";
import Collapse from '../../components/Collapse/Collapse'
import Star from '../../assets/star.png'
import RedStar from '../../assets/star_rouge.png'
import { useEffect, useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import datas from '../../data/logements.json';
import './Fiche-Logement.css'

function Fiche_logement(){
  const [imgSlideshow, setimgSlideshow] = useState([]);
  const {id} = useParams();

  const dataLogementActuel = datas.find(logement => logement.id === id);
  
  useEffect(() => {
    if(!dataLogementActuel){
      return
    }
		setimgSlideshow(dataLogementActuel.pictures);
	}, [dataLogementActuel]);

  if(!dataLogementActuel){
    return <Redirect to="/Error"/>
  }

  const nom = dataLogementActuel.host.name.split(' ');
  const note = dataLogementActuel.rating;
  const description = dataLogementActuel.description;
  const equipement = dataLogementActuel.equipments;

  return(
    <>
      <Slideshow imgSlideshow={imgSlideshow} />

      <main className="texte_fiche_logement">

        <div className="info_principal">
          <div className="info_logement">
            <h1 className="nom_logement">{dataLogementActuel.title}</h1>
            <p className="localisation">{dataLogementActuel.location}</p>
            <div className="bouton_tag">
              {dataLogementActuel.tags.map((tag, index) => {
                return (
                  <button key={index}>{tag}</button>
                )
              })}
            </div>
          </div>  

          <div className="proprio_note">  
            
            <div className="info_proprio">

              <div className="nom_proprio">
                <span>{nom[0]}</span>
                <span>{nom[1]}</span>
              </div>
              
              <img src={dataLogementActuel.host.picture} className='photo_proprio' alt='Propriétaire'/>
            </div>

            <div className="note">
              {[...Array(5)].map((star, index) => {
                  const ratingValue = index + 1;
                  return (
                    <img key={index} src={ratingValue <= note ? RedStar : Star} className="etoiles" alt="star" />
                  )
                })}
            </div>

          </div>
        </div>

        <div className="fiche_logement_collapse">
         
          <div className="description_collapse">
            <Collapse titre={"Description"} texte={description} />
          </div>
         
          <div className="equipement_collapse">
            <Collapse titre={"Equipement"} texte={equipement} />
          </div>

        </div>
      </main>
    </>
  )
}

export default Fiche_logement