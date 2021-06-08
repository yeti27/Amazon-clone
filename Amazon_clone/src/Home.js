import React from "react";
import "./home.css";
import Product from "./Product";
import Carousel from 'react-bootstrap/Carousel';
function Home() {
  return (
    <div className="home">
      <div className="home__container">
      <Carousel interval="1000000" home__image> 
          <Carousel.Item>
            <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Y2UwYWM0MDQt/Y2UwYWM0MDQt-MjZhZDIzYTIt-w1500._CB670370726_.jpg" alt=" " style={{height:"100vh"}}/>
            
          </Carousel.Item>
           <Carousel.Item> 
            <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/MzBiNjIyYjgt/MzBiNjIyYjgt-NWM5ZWJlYTct-w1500._CB669030425_.jpg" alt=" " style={{height:"100vh"}}/>
            </Carousel.Item>
          
          <Carousel.Item>
            <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2019/Other/RB-1424_AcquisitionHolidayAssets/GW_DesktopHero_RB-1424_PV-AcquisitionHolidayAssets_1500x600._CB451871227_.jpg"  alt=" " style={{height:"100vh"}}/>
          </Carousel.Item>
          
          <Carousel.Item>
            <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZmVhMDM4ZmYt/ZmVhMDM4ZmYt-MDdjM2E2ZmQt-w1500._CB658917884_.jpg" alt=" " style={{height:"100vh"}}/>
            
          </Carousel.Item>
        </Carousel>
        
        <div className="home__row">
           <Product
             id="4903850"
             title="PhoneSoap Pro UV Smartphone Sanitizer & Universal Charger"
            price={459.99}
             rating={4}
            image="https://m.media-amazon.com/images/I/61nOosd9RiL._AC_UY654_FMwebp_QL65_.jpg"
           />
           <Product
            id="23445930"
             title="Rado Men's Integral Ceramic Swiss Quartz Watch"
             price={2050.00}
            rating={5}
             image="https://images-na.ssl-images-amazon.com/images/I/81bSa3WHZLL._AC_UY879_.jpg"
          />
           <Product
            id="3254354345"
            title="Playstation DualSense Wireless Controller"
             price={68.99}
            rating={5}
             image="https://images-na.ssl-images-amazon.com/images/I/612bjwBuobS._SX522_.jpg"
          />
            <Product
            id="3254354345"
            title="HP Chromebook 14-inch HD Laptop,"
             price={678.99}
            rating={5}
             image="https://images-na.ssl-images-amazon.com/images/I/91XR%2B02AJBL._AC_SX679_.jpg"
          />
         </div>

        <div className="home__row">
          <Product
            id="12321341"
            title="Habesha Dress Women's Dashiki African Bodycon Bohemian Vintage Print Club Midi V-Neck Pockets"
            price={69.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/61ActUNA2NL._MCnd_AC_UL320_.jpg"
          />

           <Product
             id="49538094"
             title="Ethiopian Foods and Drinks for Your Taste, Pleasure and Good Health "
             price={60}
             rating={5}
             image="https://images-na.ssl-images-amazon.com/images/I/51mk1Q5a7KS._SX331_BO1,204,203,200_.jpg"
           />
            <Product
             id="49538094"
             title="Ethiopian/Eritrean Traditional Coffee Set Sábá ሳባ Edition. Full Set"
             price={108.99}
             rating={4}
             image="https://images-na.ssl-images-amazon.com/images/I/61qscYvyjyL._AC_SX679_.jpg"
           />
         </div>
         <div className="home__row">
           <Product
             id="4903850"
             title="Camcorder Full HD 2.7K 42MP 18X Digital Zoom Video Camera"
            price={73.99}
             rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/6140xayGIqS._AC_SX679_.jpg"
           />
           <Product
            id="23445930"
             title="Flowers, Waterproof 7 Color Changing Outdoor Lights…"
             price={39.99}
            rating={5}
             image="https://m.media-amazon.com/images/I/71g-JPvNPrL._AC_UL320_.jpg"
          />
          <Product
            id="23445930"
             title="Sboly Conical Burr Coffee Grinder"
             price={69.99}
            rating={4}
             image="https://images-na.ssl-images-amazon.com/images/I/61igh2iFefL._AC_SX679_.jpg"
          />
           <Product
            id="3254354345"
            title="Balloons Retro Green Balloon and Gold Metallic"
             price={20.99}
            rating={4}
             image="https://m.media-amazon.com/images/I/71zOelxPXPL._AC_UL960_FMwebp_QL65_.jpg"
          />
         </div>
        <div className="home__row">
          <Product
            id="90829332"
             title="Signature Design by Ashley - Alenya Microfiber Upholstery Sofa w/ 2 Throw Pillows, Charcoal"
            price={794.98}
             rating={4}
            image="https://m.media-amazon.com/images/S/abs-image-upload-na/4/AmazonStores/ATVPDKIKX0DER/e12227e3e5b0a471f9be3cf9a005fd15.w1482.h989._CR0%2C397%2C1482%2C296_SX1482_.jpg"
           />
         </div>
       </div>
     </div>
  );
}

export default Home; 


