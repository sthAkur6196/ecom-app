import React from "react";
import "./Product.css";

function Product({title,price,rating}){
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small><i className="fa-solid fa-indian-rupee-sign"></i></small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map(i=>(
                            <p><i className="fa-solid fa-star"></i></p>
                        )
                        )
                    }
                </div>
            </div>
            <img src="https://i.pinimg.com/736x/34/27/07/3427078fecf554d660612cad5ef2943c.jpg" alt="" />
            <button>Add to Cart</button>
        </div>
    )
}

export default Product;