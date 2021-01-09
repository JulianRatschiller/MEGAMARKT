import React, { useState, useEffect } from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import { Link, useHistory } from 'react-router-dom'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer'
import axios from './axios'
import { db } from './firebase'


function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        //generates special stripe secret which allows to charge customer

        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                //stripe expects total in cents, not Euros or Dollars
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //paymentIntent = payment confirmation
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            history.replace('/orders')
        })
    }

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    const removeAllFromBasket = () => {

        db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(user?.uid)
            .set({
                basket: basket,
                amount: getBasketTotal(basket)
            })

        dispatch({
            type: 'EMPTY_BASKET',

        })
        history.replace('/orders')
    }


    return (
        <div className="payment">
            <div className="payment__container">
                <h1>Ihre Bestellung (
                    <Link to="/checkout">{basket?.length} Produkte</Link>)
                    </h1>


                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Lieferadresse</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>Reactstraße 123</p>
                        <p>54321 Musterstadt, DE</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Ihre Produkte</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                hideButton
                            />
                        ))}
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Zahlungsmethode</h3>
                    </div>
                    <div className="payment__details">
                        <p><strong>Bitte geben Sie Ihre Zahlungsdaten ein</strong></p>
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Gesamtsumme: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandsSeparator={true}
                                    prefix={"€"}
                                />
                                <p>&nbsp;</p>

                                <a className="btn" href="#" onClick={removeAllFromBasket}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jetzt kaufen&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>


                                {/* // Stripe Button */}
                                {/* <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Jetzt kaufen"}
                                    </span>
                                </button> */}
                            </div>

                            {error && <div>{error}</div>}

                        </form>

                    </div>
                </div >
            </div>
        </div >
    )
}

export default Payment
