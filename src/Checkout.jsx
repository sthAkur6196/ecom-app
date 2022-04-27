import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout(){
    const [{basket,user},dispatch]=useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://www.bigcommerce.com/blog/wp-content/uploads/2019/01/ecommerce-marketing-hero-img.jpg" alt="" className="checkout__ad" />
                <div>
                    <h3>{user ? `Hello, ${user.email}` : ""}</h3>
                    {/* it can be done like this also ---- 
                    ----> Hello, {user?.email}
                    */}
                    <h2 className="checkout__title">
                        Your Shopping Cart
                    </h2>
                    {basket.map((item)=>(
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;