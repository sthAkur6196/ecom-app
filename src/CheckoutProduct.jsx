import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        //remove item from cart
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src="https://i.pinimg.com/736x/34/27/07/3427078fecf554d660612cad5ef2943c.jpg" alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    {title}
                </p>
                <p className="checkoutProduct__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map(i => <p><i className="fa-solid fa-star"></i></p>)}
                </div>
                <button onClick={() => removeFromBasket()}>Remove from Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;