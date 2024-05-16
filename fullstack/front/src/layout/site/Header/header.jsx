
import React from 'react'
import { Link } from "react-router-dom";
import "./header.scss"
const Header = () => {
return (
    <header className='Sait__header' >
        <div className="Sait__header__top">
            <div className="container ">
                <div className="row">
                <div className="Sait__header__top__search  col-2">
                <i class="fa-solid fa-magnifying-glass"></i><input type="text" placeholder="Search" />
                </div>
                <div className="Sait__header__top__logo d-flex justify-content-center col-8">
                <Link to={"/"}>    SHOPPERS </Link>
                </div>
                <div className="Sait__header__top__cart col-2">
                    <Link to={"/cart"}><i class="fa-solid fa-user"></i></Link>
                    <Link to={"/"}>  <i class="fa-solid fa-heart"></i></Link>
                    <Link to={"/"}> <i class="fa-solid fa-cart-shopping"></i> </Link>
                </div>
                </div>
            </div>
        </div>
        <div className="Sait__header__bottom">
            <nav>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/"}>ABOUT</Link></li>
                    <li><Link to={"/"}>Shop</Link></li>
                    <li><Link to={"/"}>CATALOGUE</Link></li>
                    <li><Link to={"/"}>NEW ARRIVALS</Link></li>
                    <li><Link to={"/"}>Contact</Link></li>
                </ul>
            </nav>
        </div>
    </header>
)
}

export default Header
