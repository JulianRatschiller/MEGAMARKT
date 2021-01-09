import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer';
import { useHistory, Link } from 'react-router-dom';

function Subtotal() {
    const history = useHistory();

    const [{ basket, user }, dispatch] = useStateValue();

    const logincheck = () => {
        if (user) {
            history.push('/payment');
        } else {
            history.push('/login')
        };
    }

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Zwischensumme ({basket.length} Produkte): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> Diese Bestellung enthält ein Geschenk
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"€ "}
            />

            {/* <button>In den Warenkorb</button> */}
            {basket.length
                ?
                <a className="btn" href="#" onClick={logincheck}>Zur Kasse gehen</a>
                :
                <Link to="/"><a className="btn btn__basketEmpty" href="/">Produkte hinzufügen</a></Link>
            }
        </div >
    )
}

export default Subtotal
