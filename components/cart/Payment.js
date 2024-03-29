import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import StoreContext from "../../context/store-context";
import CartTable from "./CartTable";
import CartList from "./CartList";

function Payment() {
    const router = useRouter();
    const {
        cart,
        createPaymentSession,
        setPaymentSession,
        completeCart,
        createCart,
        setOrder,
    } = useContext(StoreContext);

    const handlePayment = async () => {
        await setPaymentSession("manual");
        const order = await completeCart();
        setOrder(order);
        createCart();
        router.push(`/payment`);

        // alert("done");
    };
    return (
        <div className="container">
            {/* <CartTable /> */}
            <div className="row">
                <div className="col-md-6">
                    <div className="payment-confirm-area">
                        <h3>Payment methods</h3>
                        {cart &&
                            cart.payment_sessions &&
                            cart.payment_sessions.map((ps) => {
                                switch (ps.provider_id) {
                                    case "stripe":
                                        return (
                                            <Elements
                                                key={"stripe"}
                                                stripe={getStripe()}
                                            >
                                                <h2>Stripe Payment</h2>
                                            </Elements>
                                        );
                                    case "manual":
                                        return (
                                            <div className="col-md-12" style={{
                                                padding: 0,
                                                marginBottom: 20
                                            }}>
                                                <div
                                                    className="payment-confirm-wrapper seceond-confirm"
                                                    onClick={handlePayment}
                                                >
                                                    <a href="#">
                                                        {/* <div className="confirm-left">
                                                            <img
                                                                src="images/icons/cheque.png"
                                                                alt=""
                                                            />
                                                        </div> */}
                                                        <div className="confirm-middle">
                                                            COD
                                                            <span className="gray-color">
                                                                {" "}
                                                                (Cash On Delivery)
                                                            </span>
                                                        </div>
                                                        <div className="confirm-right">
                                                            <i className="fa fa-angle-right" />
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        );
                                    default:
                                        return null;
                                }
                            })}
                    </div>
                </div>
                <div className="col-md-6">
                    <CartList />
                </div>
            </div>
        </div>
    );
}

export default Payment;
