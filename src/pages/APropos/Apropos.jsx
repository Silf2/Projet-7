import Banner from '../../components/Banner/Banner'
import './APropos.css'
import Collapse from '../../components/Collapse/Collapse'

function APropos(){

    const AProposInfo =[
        {
            "id" : "1",
            "titre" : "Fiabilité",
            "texte" : "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
        },
        {
            "id" : "2",
            "titre" : "Respect",
            "texte" : "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        },
        {
            "id" : "3",
            "titre" : "Service",
            "texte" : "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        },
        {
            "id" : "4",
            "titre" : "Sécurité",
            "texte" : "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        }
    ]

    return(
        <div>
            <Banner />
            <main className='conteneur_APropos'>
                {AProposInfo.map(data =>{
                    return(
                        <div key={data.id} className="APropos_collapse">
                            <Collapse titre={data.titre} texte={data.texte} />
                        </div>
                    )
                })}
            </main>
        </div>
    )
}

export default APropos