import React, { useState, useEffect } from 'react'
import { db } from './firebase';
import './Orders.css'
import { useStateValue } from './StateProvider';
import product1 from './img/1.jpg';
import { Link } from 'react-router-dom'


function Orders() {
    const [{ basket, user, }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    // useEffect(() => {
    //     if (user) {
    //         db
    //             .collection('users')
    //             .doc(user?.uid)
    //             .collection('orders')
    //             .orderBy('created', 'desc')
    //             .onSnapshot(snapshot => (
    //                 setOrders(snapshot.docs.map(doc => ({
    //                     id: doc.id,
    //                     data: doc.data()
    //                 })))
    //             ))
    //     } else {
    //         setOrders([])
    //     }
    // }, [])

    return (
        <div className="orders">
            <h1>Vielen Dank für Ihre Bestellung!</h1>


            <h2>Wir haben Ihnen eine Bestätigung per Email zugesandt.
                Die Bestellung sollte normalerweise innerhalb 48 Stunden versandt werden.</h2>


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
                    <h3>Geschätztes Lieferdatum</h3>
                </div>
                <div className="orders__shippingTime">
                    <p>21. Januar &nbsp; &mdash; <br /> 27. Januar</p>
                </div>
            </div>
            <Link to="/">
                <a className="btn btn__returnHome" href="#">Zurück zur Startseite</a>
            </Link>
        </div >
    )
}

export default Orders
