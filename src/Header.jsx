import React from "react";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import "./Header.css";
import { useStateValue } from "./StateProvider";

function Header(){
    const [{basket,user},dispatch]=useStateValue();

    const handleAuthentication = () =>{
        if(user){
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link to="/">
                <h3 className="header__logo">APP LOGO</h3>
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <i className="fa-solid fa-magnifying-glass header__searchIcon"></i>
            </div>
            <div className="header__nav">
                <Link to={!user && "/login"}>
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionLineOne">
                            Hello Guest
                        </span>
                        <span className="header__optionLineTwo">
                            {user ? "Sign Out" : "Sign In"}
                        </span>
                    </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Retruns
                    </span>
                    <span className="header__optionLineTwo">
                        & Orders
                    </span>
                </div>
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span className="header__optionLineTwo header__basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default Header;