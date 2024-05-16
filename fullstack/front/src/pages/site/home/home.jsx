
    import React, { useContext } from 'react'
    import { Helmet } from 'react-helmet'
    import MainContext from '../../../context/context'
    import Banner from '../../../components/banner/banner'
import ServicProduct from '../../../components/servicprodact/ServicProduct'
import CatagoryCart from '../../../components/catagorycard/CatagoryCart'
import BigSale from '../../../components/BigSale/BigSale'
import Carusel from '../../../components/carusel/Carusel'

    
    const Home = () => {
        const {data} = useContext(MainContext)
        return (
        <>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Home</title>
                    {/* <link rel="icon" type="image/x-icon" href="x"></link> favicon*/}
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
                <Banner/>
                <ServicProduct/>
                <CatagoryCart/>
                <Carusel data={data}/>
                
                <BigSale/>
              
        </>
        )
    }
    
    export default Home
        