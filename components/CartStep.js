import React, { useContext } from "react";
import DisplayContext from "../context/display-context";

const steps = ["Cart", "Address", "Shipping", "Payment"];

function CartStep() {
    const { checkoutStep, updateCheckoutStep, updateOrderSummaryDisplay } =
        useContext(DisplayContext);

    return (
        <div className="cart-sum-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="progress-summery text-center">
                            <ul className="progress-steps">
                                {steps.map((value, index) => (
                                    <li
                                        key={index}
                                        style={{
                                            // cursor: "pointer",
                                        }}
                                        className={`steps-item  litext ${
                                            checkoutStep === index
                                                ? "is-active"
                                                : ""
                                        }`}
                                        // onClick={() =>
                                        //     updateCheckoutStep(index)
                                        // }
                                    >
                                        <a>
                                            {index + 1}. {value}
                                        </a>
                                    </li>
                                ))}
                                {/* <li
                                    className={`steps-item  litext ${
                                        checkoutStep === 1 ? "is-active" : ""
                                    }`}
                                >
                                    <a href="login.html">02. Address</a>
                                </li>
                                <li
                                    className={`steps-item  litext ${
                                        checkoutStep === 2 ? "is-active" : ""
                                    }`}
                                >
                                    <a href="address.html">03. Shipping</a>
                                </li>
                                <li
                                    className={`steps-item  litext ${
                                        checkoutStep === 3 ? "is-active" : ""
                                    }`}
                                >
                                    <a href="shipping.html">04. Payment</a>
                                </li> */}
                                {/* <li
                                    className={`steps-item  litext ${
                                        checkoutStep === 4 ? "is-active" : ""
                                    }`}
                                >
                                    <a href="payment.html">05. Payment</a>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartStep;
