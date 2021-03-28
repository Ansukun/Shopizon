import Header from "./Header"
import React from 'react'
import "./Home.css"
import Product from "./Product"
function Electronics() {
    return (
        <div className = "home">
           <div  className = "home__container">
           <img
           style = {{
               height : "600px"
           }}
          className="home__image"
          src="https://i.ytimg.com/vi/NLvwDiOyn00/maxresdefault.jpg"
          alt=""
        />
        
        <div className="home__row">
          <Product
            id="12321341"
            title="realme 80 cm (32 inch) HD Ready LED Smart Android TV  (TV 32)"
            price={400}
            rating={5}
            image="https://images.hindustantimes.com/tech/img/2020/10/15/960x540/image_(23)_1602756606080_1602756611186.jpg"
          />
          <Product
            id="49538094"
            title="Godrej 190 L 3 Star Inverter Direct-Cool Single Door Refrigerator (RD 1903 PTI 33 DR BL, Royal Drenim, Inverter Compressor)"
            price={456}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71-XsJoSe1L._SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Voltas MAP08R1CWT 3-in-1 Portable Air Conditioner, Dehumidifier, Fan, for Rooms up to 150 sq ft, 8,000 BTU (5,300 BTU SACC) control with Remote"
            price={306.99}
            rating={3}
            image="data:image/jpeg;base64,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"
          />
          <Product
            id="23445930"
            title="Sony HT-S3900 5.1-Channel Home Theater Receiver/Speaker Package,black"
            price={108.99}
            rating={5}
            image="https://www.sony.co.in/image/bb9eb0ba7cd3fdabdcdbab8eff237bf5?fmt=pjpeg&wid=1200&hei=470&bgcolor=F1F5F9&bgc=F1F5F9"
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
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}


export default Electronics