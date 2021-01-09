import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo" src="https://fontmeme.com/permalink/201229/25d780c2bb8c37517e8b50bf779fdc44.png" alt="logo" />
            </Link>

            <div
                className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication}
                        className="header__option">
                        <span className="header__optionLine1">Hallo {user ? user?.email : 'Gast'}</span>
                        <span className="header__optionLine2">{user ? 'Abmelden' : 'Anmelden'}</span>
                    </div>
                </Link>

                {/* <Link to="/orders"> */}
                <div className="header__option">
                    <span className="header__optionLine1">Rückgabe</span>
                    <span className="header__optionLine2">& Bestellungen</span>
                </div>
                {/* </Link> */}
                <div className="header__option">
                    <span className="header__optionLine1">Dein</span>
                    <span className="header__optionLine2">Prima</span>
                </div>

                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__openBasket">Warenkorb</span>
                        <span className="header__optionLine2 header__basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div >
    )
}

export default Header
