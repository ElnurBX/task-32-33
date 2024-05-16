import React from 'react'
import Card from '../card/Card'

const Cards = ({data}) => {
    return (

        
        <div className="d-flex  ">
            {data.map((item,index) => (
                <Card item={item} key={index} />  
            ))}
        </div>

    )
}

export default Cards