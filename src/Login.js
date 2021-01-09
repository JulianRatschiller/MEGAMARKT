import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'
import { auth } from './firebase';

export default function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }


    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {

                if (auth) {
                    history.push('/')
                }
            })

            .catch(error => alert(error.message))
    }



    return (
        <div className="login">
            <Link to='/'>
                <img className="login__logo" src="https://fontmeme.com/permalink/201229/25d780c2bb8c37517e8b50bf779fdc44.png" alt="logo" />
            </Link >
            <div className="login__container" >
                <h1>Anmelden</h1>

                <form>
                    <h5>E-mail</h5>
                    <input className="login__input"
                        type="text"
                        value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Passwort</h5>
                    <input className="login__input"
                        type="password"
                        value={password} onChange={e => setPassword(e.target.value)} />

                    <a type='submit' className="btn" href="#" onClick={signIn}>Anmelden</a>
                </form>

                <p>Hier können Sie sich mit einer beliebigen E-mail und einem beliebigen Passwort registrieren.
                Optional können Sie diese Gast-Daten zur Anmeldung verwenden (ignorieren Sie in diesem Fall die Warnmeldung):
                    <p>E-mail: test@test.com</p>
                    <p>Passwort: 123456</p>
                </p>

                <a className="btn" href="#" onClick={register}>Neuen Megamarkt-Account erstellen</a>

            </div>
        </div >
    )
}

