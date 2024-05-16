import React from 'react'
import { Link } from "react-router-dom";
import './BigSale.scss'
const BigSale = () => {
    return (
        <section className='BigSale'>
            <h2 className='text-center'>BigSale</h2>
            <div className="container">
                <div className="row">
                    <div className="col-6 BigSale__img">
                        <img src="https://preview.colorlib.com/theme/shoppers/images/blog_1.jpg" alt="" />
                    </div>
                    <div className="col-6">
                        <div className="BigSale__left">
                            <div className='BigSale__left__discount'>
                            <Link to={"/"}>50% less in all items</Link>
                            <span>
                                <span>By Carl Smith</span>*<span>September 3, 2018</span>
                            </span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam iste dolor accusantium facere corporis ipsum animi deleniti fugiat. Ex, veniam?</p>
                            <button className=' btn-pruple'>Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BigSale