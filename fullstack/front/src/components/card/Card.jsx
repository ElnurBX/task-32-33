import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./costumCard.scss"
import MainContext from '../../context/context'
const Card = ( {   item,key}) => {
    const {addBasket} = useContext(MainContext)
    return (
        <div className="col-4 costumCard text-center">
            <div key={key} className='costumCard__main'>
                <img width={"100%"} height={"250px"} src={item.image} alt="" />
                <div className="costumCard__info">
                <Link to={`/product/${item._id}`}>{item.title}</Link>
                <p>{item.description}</p>
                <span>{item.price}$</span>
                <h5 className='mt-3'><button className='btn btn-primary' onClick={()=> addBasket(item)}>Add Cart</button></h5>
                </div>
            </div>
        </div>
    )
}

export default Card