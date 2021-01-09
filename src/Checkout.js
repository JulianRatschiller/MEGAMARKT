import React from 'react'
import './Checkout.css'
import ad1 from './img/ad1.jpg'
import ad3 from './img/ad3.jpg'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import { Link } from 'react-router-dom'


function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src={ad1} alt="ad1"></img>

                <div>
                    <h3>Hallo, {user ? user?.email : "Gast"}</h3>
                    <h2 className="checkout__title">Ihr Warenkorb<br /></h2>
                    <h3>
                        {basket.length ? " "
                            :
                            <span><br />
                                <h1>Ihr Warenkorb ist leer.<br /> Sichern Sie sich jetzt eines unserer tollen Angebote!</h1>
                                <br />
                                <img className="checkout__ad" src={ad3} alt="ad1"></img>

                                <Link to="/" className="basket__empty">
                                    <a className="btn btn__addProducts" href="#">Jetzt tolle Angebote finden!</a>
                                </Link>

                            </span>
                        }

                    </h3>

                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                            image={item.image} />))}


                    {basket.length === 1 ?
                        <img className="checkout__ad" src={ad3} alt="ad1"></img>
                        : " "}

                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
