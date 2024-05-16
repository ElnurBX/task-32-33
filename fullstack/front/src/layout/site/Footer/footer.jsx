
import React from 'react'
import { Link } from "react-router-dom";
import './footer.scss'
const Footer = () => {
return (
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        <div className="col-4">
                            <ul>
                                <li><Link to="/">Sell online</Link></li>
                                <li><Link to="/">Features</Link></li>
                                <li><Link to="/">Shopping cart</Link></li>
                                <li><Link to="/">Store builder</Link></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <ul>
                                <li><Link to="/">Sell online</Link></li>
                                <li><Link to="/">Features</Link></li>
                                <li><Link to="/">Shopping cart</Link></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <ul>
                                <li><Link to="/">Sell online</Link></li>
                                <li><Link to="/">Features</Link></li>
                                <li><Link to="/">Shopping cart</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-6">
                            <h5>Promo</h5>
                            <img height={"120px"} src="https://preview.colorlib.com/theme/shoppers/images/hero_1.jpg" alt="" />
                            <Link>Finding Your Perfect Shoes</Link>
                            <p>Promo from nuary 15 — 25, 2019</p>
                        </div>
                        <div className="col-6">
                            <h3>Contact Info</h3>
                            <p> <i class="fa-solid fa-location-dot"></i> 203 Fake St. Mountain View, San Francisco, California, USA</p>
                            <p> <i class="fa-solid fa-phone"></i> +2 392 3929 210</p>
                            <p> <i class="fa-solid fa-envelope"></i>emailaddress@domain.com</p>
                            <h5>Subscribe</h5>
                            <div className="send ">
                              
                                <input type="text" placeholder="Email" />
                                <button>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className='text-center mt-5'>Copyright ©2024 All rights reserved | This template is made with  by Colorlib</p>
        </div>
    </footer>
)
}

export default Footer
                    