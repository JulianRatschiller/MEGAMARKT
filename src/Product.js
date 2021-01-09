import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const alert = useAlert();

    const addToBasket = () => {
        alert.success("Zum Warenkorb hinzugefügt!")


        // dispatch the item into the DataLayer
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
        <div className="product">

            <div className="product__info">

                <p>{title}</p>

                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (<p>⭐</p>))}
                </div>

                <p className="product__price">
                    <small>€ </small>
                    <strong>{price}</strong>
                </p>

                {/* <Link to={"/product"}> */}
                <img className="product__image" src={image} alt="productimg"></img>
                {/* </Link > */}

            </div>

            {/* <button onClick={addToBasket}>In den Warenkorb</button> */}
            <a className="btn" href="#/" onClick={addToBasket}>In den Warenkorb</a>

        </div >
    );
}

export default Product;
