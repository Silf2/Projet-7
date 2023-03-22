import datas from '../../data/logements.json'
import Card from '../Card/Card'
import './House_list.css'

function House_list(){
    return(
        <div className='conteneur_carte'>
            {datas.map(data =>{
                return(
                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
            })}
        </div>
    )
}

export default House_list
