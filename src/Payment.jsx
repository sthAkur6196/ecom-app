import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Link, useNavigate } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();
    const navigate=useNavigate();

    const [error,setError]=useState(null);
    const [disabled,setDisabled]=useState(true);
    const [succeeded,setSucceeded]=useState(false);
    const [processing,setProcessing]=useState("");

    const handleSubmit = event => {
        //do all the stripe stuff
        event.preventDefault();
        dispatch({
            type:"EMPTY_BASKET"
        });
        navigate("/orders");
    }

    const handleChange = event =>{
        // Listen for changes in the CardElement
        // and display any errors as the customer types card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout ({<Link to="/checkout">{basket?.length} items</Link>})
                </h1>
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
                        {basket.map(item =>
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                rating={item.raing} />
                        )}
                    </div>
                </div>

                {/* Payment section - payment method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            {/*<CardElement />*/}
                            <div className="card__element">
                            <CardElement />
                            </div>

                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value)=>(
                                        <>
                                            <h3>Order Total: {value}</h3>  
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"₹"}
                                />
                                <button>{/* disabled={processing || disabled || succeeded} */}
                                        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                            {error && <div>{error}</div> }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;