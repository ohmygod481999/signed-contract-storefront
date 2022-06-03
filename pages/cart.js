import React, { useContext, useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Address from "../components/cart/Address";
import CartInfo from "../components/cart/CartInfo";
import CartTable from "../components/cart/CartTable";
import Payment from "../components/cart/Payment";
import Shipping from "../components/cart/Shipping";
import SignInStep from "../components/cart/SignInStep";
import CartStep from "../components/CartStep";
import DisplayContext from "../context/display-context";
import StoreContext from "../context/store-context";

function Cart() {
    const { cart, updateAddress, setShippingMethod, createPaymentSession } =
        useContext(StoreContext);
    const [isProcessingShipping, setIsProcessingShipping] = useState(false);
    const { checkoutStep, updateCheckoutStep, updateOrderSummaryDisplay } =
        useContext(DisplayContext);

    const [isProcessingInfo, setIsProcessingInfo] = useState(false);

    const handleShippingSubmit = async (address, email) => {
        setIsProcessingInfo(true);

        await updateAddress(address, email);

        setIsProcessingInfo(false);
        updateCheckoutStep(2);
    };

    useEffect(() => {
        if (checkoutStep === 3) {
            createPaymentSession();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [checkoutStep]);

    const handleDeliverySubmit = async (option) => {
        setIsProcessingShipping(true);
        await setShippingMethod(option.id)
            .then(() => {
                updateCheckoutStep(3);
            })
            .finally(() => {
                setIsProcessingShipping(false);
            });
    };

    const handleStep = () => {
        switch (checkoutStep) {
            case 0:
                return <CartInfo />;
            case 1:
                return (
                    <Address
                        isProcessing={isProcessingInfo}
                        handleShippingSubmit={(submittedAddr, submittedEmail) =>
                            handleShippingSubmit(submittedAddr, submittedEmail)
                        }
                    />
                );
            case 2:
                return (
                    <Shipping
                        isProcessing={isProcessingShipping}
                        cart={cart}
                        handleDeliverySubmit={handleDeliverySubmit}
                        savedMethods={cart.shipping_methods}
                    />
                );
            case 3:
                return <Payment />;
            default:
                return null;
        }
    };
    return (
        <div className="mb-75">
            <BreadCrumb />
            <div className="cart-top-heading">
                <div className="container">
                    <div className="summery-top">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="cart-sumttl">
                                    <h3>Shopping-cart summary </h3>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="cart-product-desc">
                                    <p>
                                        Your shopping cart contains:{" "}
                                        {cart.items.length} products{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {cart.items.length > 0 && <CartStep />}

            {handleStep()}

            {/* <CartTable /> */}
            {/* <SignInStep /> */}
            {/* <Address /> */}
            {/* <Shipping /> */}
            {/* <Payment /> */}
            {/* 
            <div className="bottom-indicator-area mb-75">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="page-indicator-left indicator-def">
                                <a href="index.html">
                                    <i className="fa fa-angle-left" /> Continue
                                    Shopping
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="page-indicator-right indicator-def">
                                <a href="checkout.html">
                                    Proceed to checkout{" "}
                                    <i className="fa fa-angle-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default Cart;
