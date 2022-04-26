import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, rating }) {
    const [{basket}, dispatch] = useStateValue();
    //console.warn(basket);
    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
            }
        });
    }

    return (
        <div className="product" key={id}>
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small><i className="fa-solid fa-indian-rupee-sign"></i></small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map(i => (
                            <p><i className="fa-solid fa-star"></i></p>
                        )
                        )
                    }
                </div>
            </div>
            <img src="https://i.pinimg.com/736x/34/27/07/3427078fecf554d660612cad5ef2943c.jpg" alt="" />
            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    )
}

export default Product;