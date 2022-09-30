import React from 'react';
import Card from '../componets/Card'

export interface ICardPageProps { }
const CardPage: React.FunctionComponent<ICardPageProps> = (props) => {
    return (
        <div style={{display:'flex', flexDirection:'row', justifyContent:'center' ,padding:'20px'}}>
            <Card tituloCard={'Total sorteios realizados:'} quantidadeSorteios={'495'}/>
            <Card tituloCard={'Total usuarios na plataforma:'}  quantidadeSorteios={'22'}/>
        </div>
    )
}
export default CardPage;
