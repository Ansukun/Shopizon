import React from 'react'
import "./Product.css"
import Button from "@material-ui/core/Button"
import { useStateValue } from './StateProvider';
function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
    return (
        <div className = "product">
            <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$ </small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
            {Array(rating).fill().map((_,i)=>(
                 <p><img className = "star" src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/star_2b50.png"/></p>
            ))}
             
          
        </div>
      </div>
      <img src={image} alt="" />
      <Button onClick={addToBasket} variant ="contained" color = "primary">Add to Basket</Button>
        </div>

    )
}

export default Product
