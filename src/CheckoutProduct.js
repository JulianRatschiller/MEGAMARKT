import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'


function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }


    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) => (<p>⭐</p>)
                    )}
                </div>


                <p className="checkoutProduct__price">
                    <small>€ </small>
                    <strong>{price}</strong>
                </p>

                {!hideButton && (
                    <a className="btn" href="#/" key="a" onClick={removeFromBasket}>Entfernen</a>
                )}


            </div>




        </div>
    )
}

export default CheckoutProduct
