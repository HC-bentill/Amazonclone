import React from 'react';
import  "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
           <img 
           className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
           /> 
           
    <div className="home__row" >
        <Product
        id="123124"
        title="Acer Nitro 5 Gaming Laptop, 9th Gen Intel Core i5-9300H, NVIDIA GeForce GTX 1650, 15.6"
        price={114.96}
        rating={5}
        image="https://m.media-amazon.com/images/I/71s1LRpaprL._AC_UY218_.jpg"
        
        />

       <Product
        id="123124"
        title="Sony PlayStation 4 Pro 1TB Console - Black (PS4 Pro) Sony Interactive Entertainment LLC Pro 2TB 500 Million"
        price={561.96}
        rating={5}
        image="https://m.media-amazon.com/images/I/71jN27mYlhL._AC_UY218_.jpg"
        />

    </div>  
    <div className ="home__row">
    <Product
        id="123124"
        title="Apple iPhone 11 Pro Max, 256GB, Fully Unlocked - Gold (Renewed)"
        price={780.96}
        rating={5}
        image="https://m.media-amazon.com/images/I/71X07lwWutL._AC_UY218_.jpg"
        />
        <Product
        id="123124"
        title="Fitbit Versa 2 Health and Fitness Smartwatch with Heart Rate, Music, Alexa Built-In, Sleep and Swim Tracking"
        price={611.96}
        rating={5}
        image="https://m.media-amazon.com/images/I/71jiGaztijL._AC_UY218_.jpg"
        />
        <Product
        id="123124"
        title="Lenovo Flex 5 14 2-in-1 Laptop, 14.0 FHD (1920 x 1080) Touch Display, AMD Ryzen 5 4500U Processor, 16GB DDR4"
        price={911.96}
        rating={5}
        image="https://m.media-amazon.com/images/I/81x+9uFY1QL._AC_UY218_.jpg"
        />

    </div>
    <div className="home__row">
    <Product
        id="123124"
        title="TCL 32S325 32 Inch 720p Roku Smart LED TV (2019)"
        price={871.96}
        rating={4}
        image="https://m.media-amazon.com/images/I/71YZlXXFktL._AC_UY218_.jpg"
        />

    </div>
    
    
    </div>

        
    )
};

export default Home
