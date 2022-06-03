import React, { useContext } from "react";
import DisplayContext from "../context/display-context";

function CartStep() {
    const { checkoutStep, updateCheckoutStep, updateOrderSummaryDisplay } =
        useContext(DisplayContext);

    console.log(checkoutStep);
    
    return (
        <div className="cart-sum-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="progress-summery text-center">
                            <ul className="progress-steps">
                                <li className="steps-item  litext is-active">
                                    <a href="cart.html">01. Cart</a>
                                </li>
                                <li className="steps-item">
                                    <a href="login.html">02. Sign in</a>
                                </li>
                                <li className="steps-item">
                                    <a href="address.html">03. Address</a>
                                </li>
                                <li className="steps-item">
                                    <a href="shipping.html">04. Shipping</a>
                                </li>
                                <li className="steps-item">
                                    <a href="payment.html">05. Payment</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartStep;
