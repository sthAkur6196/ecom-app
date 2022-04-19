import React from "react";
import "./Header.css";

function Header(){
    return (
        <div className="header">
            <h3 className="header__logo">APP LOGO</h3>
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <i className="fa-solid fa-magnifying-glass header__searchIcon"></i>
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Hello Guest
                    </span>
                    <span className="header__optionLineTwo">
                        Sign In
                    </span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Retruns
                    </span>
                    <span className="header__optionLineTwo">
                        & Orders
                    </span>
                </div>
                <div className="header__optionBasket">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span className="header__optionLineTwo header__basketCount">
                        0
                    </span>
                </div>
            </div>
        </div>
    )
}
export default Header;