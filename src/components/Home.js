import React from 'react';
import './Home.css'
import Product from './Product';

const Home = () => {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="amazon_banner" />
            <div className="home__row">
                <Product
                    id="45512"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                />
                <Product
                    id="15345"
                    title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                />

            </div>

            <div className="home__row">
                <Product
                    id="62462"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                />
                <Product
                    id="53839"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    price={11.96}
                    rating={5}
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                />
                <Product
                    id="79797"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                />

            </div>
            <div className="home__row">
                <Product
                    id="56525"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                />

            </div>

        </div>
    )
}

export default Home
