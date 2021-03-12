import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider";
import Button from "@material-ui/core/Button"
function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                {Array(rating).fill().map((_,i)=>(
                 <p><img className = "star" src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/star_2b50.png"/></p>
            ))}
                </div>
                {!hideButton && (
                    <Button  variant = "contained" color = "secondary"onClick={removeFromBasket}>Remove from Basket</Button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct