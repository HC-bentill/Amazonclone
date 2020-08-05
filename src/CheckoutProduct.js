import React from 'react'
import "./CheckoutProduct.css"
import {useStateValue} from "./StateProvider"

function CheckoutProduct({id, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket =()=> {
        //remove from basket 
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id: id,
        });
    }
    return (
        <div className="checkoutProduct">
            <div className="image__wrapper">
            <img className="checkoutProduct__image" src={image} alt=""/>
            </div>
            
            
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>

                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

        <div className="checkoutProduct__rating">
            {
                Array (rating)
                .fill()
                .map((_) => (
                    <p>⭐</p>
                ) )

            }
        </div>

        <button className="FFqu" onClick={removeFromBasket} > Remove from basket</button>



            </div>


        </div>
    )
}

export default CheckoutProduct
