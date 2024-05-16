import React, { useState } from 'react'
import Cards from '../Cards/Cards'
import './carusel.scss'
const Carusel = ({data}) => {
    let [carusel,setcarusel]=useState(0)
    const cevrici = (str) => {
        if(carusel<(data.length-3) && str==='right'){
            setcarusel(carusel+1)
        }else if(carusel > 0 && str==='left'){
            setcarusel(carusel-1)
        }
        else{
            setcarusel(0)
        }
    }
  return (
    <section>
        <h2 className='text-center mt-5 mb-5'>Featured Products</h2>
        <div className="container">
            <div className="Carusel__visable">
                <div width={`calc(100% * ${data.length/3})`} 
                style={ {transform: `translateX(-${carusel * 33.33}%)`, transition: 'transform 0.5s'} } 
                
                className="Carusel__visable__hiden">
                    <Cards data={data} />
                </div>
            </div>  
                <div className='row'>
                    <div className="col-4"></div>
                    <div className="col-4 btns">
                        <button onClick={()=> cevrici('left')} className='btn'>
                        <i class="fa-solid fa-arrow-left"></i>
                        </button>
                        <button onClick={()=> cevrici('right')}  className='btn'>
                        <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                    <div className="col-4"></div>
                </div>
        </div>
      
    </section>
  )
}

export default Carusel