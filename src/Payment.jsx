import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";

function Payment(){
    const [{basket,user},dispatch]=useStateValue();

    return (
        <div className="payment">
            <div className="payment__container">
                {/* Payment section - delivery address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>786 Chaurangi Marg</p>
                        <p>Delhi, India</p>
                    </div>
                </div>

                {/* Payment section - Review items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item=>(
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                rating={item.raing}
                            />
                        ))}
                    </div>
                </div>

                {/* Payment section - payment method */}
                <div className="payment__section">
                    
                </div>
            </div>
        </div>
    )
}

export default Payment;