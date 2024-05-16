import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import MainContext from '../../../context/context';

const Details = () => {
    const {id} = useParams()
    useEffect(() => {
        console.log(`http://localhost:8080/api/product/${id}`);
        axios.get(`http://localhost:8080/api/product/${id}`).then((res)=>{console.log(res.data)
        setdata(res.data)
        }  )
    },[]);
    const [data,setdata] = useState([])
return (
    <section>
        <div className="container">
            <div className="row mb-5">
                <div className="col-4">
                    <img src={data.image} width={"100%"} alt="" />
                </div>
                <div className="col-8">
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                    <p>{data.price}</p>
                    
                </div>
            </div>
        </div>
    </section>
    )
}

export default Details