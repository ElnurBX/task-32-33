import React from 'react'
import "./ServicProduct.scss"
const ServicProduct = () => {
    return (
        <section className='servicproduct'>
            <div className="container">
                <div className="row">
                    <div className="col-4  servicproduct__card d-flex">
                        <div className="col-3 servicproduct__card__img">
                        <i class="fa-solid fa-truck "></i>
                        </div>
                        <div className="col-9">
                            <h5>
                            FREE SHIPPING
                            </h5>
                            <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.
                            </span>
                        </div>
                    </div>
                    <div className="col-4  servicproduct__card d-flex">
                        <div className="col-3 servicproduct__card__img">
                        <i class="fa-solid fa-repeat"></i>
                        </div>
                        <div className="col-9">
                            <h5>
                            FREE SHIPPING
                            </h5>
                            <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.
                            </span>
                        </div>
                    </div>
                    <div className="col-4  servicproduct__card d-flex">
                        <div className="col-3 servicproduct__card__img">
                        <i class="fa-solid fa-question"></i>
                        </div>
                        <div className="col-9">
                            <h5>
                            FREE SHIPPING
                            </h5>
                            <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>  
    )
}

export default ServicProduct