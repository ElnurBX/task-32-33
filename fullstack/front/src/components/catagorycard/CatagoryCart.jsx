import React from 'react'
import "./CatagoryCart.scss"
const CatagoryCart = () => {
    return (
        <section className='CatagoryCart'>
            <div className="container">
                <div className="row">
                    <div className="col-4  CatagoryCart__card d-flex">
                        <img src="https://preview.colorlib.com/theme/shoppers/images/women.jpg.webp" alt="" />
                        <div className="CatagoryCart__card__text">
                            <span>COLLECTIONS</span>
                            <h3>Women</h3>
                        </div>
                    </div>
                    <div className="col-4  CatagoryCart__card d-flex">
                        <img src="https://preview.colorlib.com/theme/shoppers/images/children.jpg.webp" alt="" />
                        <div className="CatagoryCart__card__text">
                            <span>COLLECTIONS</span>
                            <h3>Children</h3>
                        </div>
                    </div>
                    <div className="col-4  CatagoryCart__card d-flex">
                        <img src="https://preview.colorlib.com/theme/shoppers/images/men.jpg.webp" alt="" />
                        <div className="CatagoryCart__card__text">
                            <span>COLLECTIONS</span>
                            <h3>Men</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>  
    )
}

export default CatagoryCart