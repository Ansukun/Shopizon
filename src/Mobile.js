import Header from "./Header"
import React from 'react'
import "./Home.css"
import Product from "./Product"

function Mobile() {
    return (
        <div className = "home">
           <div  className = "home__container">
           <img
          className="home__image"
          style = {{
              height : "600px"
          }}
          src="https://previews.123rf.com/images/toonsteb/toonsteb1709/toonsteb170900002/85063686-phone-sale-vector-background-for-banner-poster-flyer.jpg"
          alt=""
        />
        
        <div className="home__row">
          <Product
            id="12321341"
            title="Apple iPhone 11, 64GB, Space Gray - Fully Unlocked (Renewed Premium)"
            price={489.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71i2XhHU3pL._SX522_.jpg"
          />
          <Product
            id="49538094"
            title="Samsung Galaxy S21 Ultra 5G | Factory Unlocked Android Cell Phone | US Version 5G Smartphone | Pro-Grade Camera, 8K Video, 108MP High Res | 128GB, Phantom Silver"
            price={999.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/61O45C5qASL._AC_SS450_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
          
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Realme 3 pro 64 GB"
            price={104.98}
            rating={4}
            image="https://www.how2shout.com/wp-content/uploads/2019/09/Realme-5-smartphone-under-10000-budget.jpg"
          />
          
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Honor Play Dual/Hybrid-SIM 64GB (GSM Only, No CDMA) Factory Unlocked 4G Smartphone - International Version (Midnight Black)"
            price={623.98}
            rating={4}
            image="data:image/jpeg;base64,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"
          />
           <Product
            id="90829332"
            title="OnePlus 8 Pro Ultramarine Blue, 5G Unlocked Android Smartphone U.S Version, 12GB RAM+256GB Storage, 120Hz Fluid Display,Quad Camera, Wireless Charge, with Alexa Built-in"
            price={799.98}
            rating={4}
            image="https://static.digit.in/default/36b13ef36655eae101b44c7e0f14d79eb63a8935.jpeg?tr=1200"
          />

          
        </div>
        
      </div>
    </div>
  );
}

export default Mobile