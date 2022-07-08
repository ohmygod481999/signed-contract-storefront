import React, { useContext, useEffect, useState } from "react";
import DisplayContext from "../../context/display-context";
import StoreContext from "../../context/store-context";
import { isEmpty } from "../../utils/helper-functions";
import CartBottom from "./CartBottom";
import ShippingMethod from "./ShippingMethod";

function Shipping({ handleDeliverySubmit, isProcessing, cart }) {
    const [shippingOptions, setShippingOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState();
    const [error, setError] = useState(false);

    const { getShippingOptions } = useContext(StoreContext);
    const { updateCheckoutStep } = useContext(DisplayContext);

    useEffect(() => {
        // Wait until the customer has entered their address information
        if (!cart.shipping_address?.country_code) {
            return;
        }

        getShippingOptions().then((partitioned) => {
            setShippingOptions(partitioned);
        });

        //if method is already selected, then preselect
        if (cart.shipping_methods.length > 0) {
            setSelectedOption(cart.shipping_methods[0].shipping_option);
        }
    }, [cart, setSelectedOption, getShippingOptions]);

    const handleSelectOption = (o) => {
        setSelectedOption(o);

        if (error) {
            setError(false);
        }
    };

    const handleSubmit = () => {
        if (!selectedOption) {
            setError(true);
        } else {
            handleDeliverySubmit(selectedOption);
        }
    };

    return (
        <>
            <div className="shipping-checkout-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="checkout-container-wrapper">
                                <div className="checkout-text">
                                    <p>
                                        Choose a shipping option for this
                                        address: <strong>{cart.shipping_address.address_1}</strong>
                                    </p>
                                </div>
                                {isEmpty(shippingOptions) || isProcessing ? (
                                    <div>loading...</div>
                                ) : (
                                    <div className="row">
                                        <div className="col-xs-12">
                                            {shippingOptions.map((so) => {
                                                return (
                                                    <div key={so.id}>
                                                        <ShippingMethod
                                                            option={so}
                                                            chosen={
                                                                selectedOption
                                                            }
                                                            handleOption={
                                                                handleSelectOption
                                                            }
                                                        />
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            </div>

            <CartBottom
                onBack={() => updateCheckoutStep(1)}
                onNext={handleSubmit}
            />
            {/* <div className="bottom-indicator-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="page-indicator-left indicator-def">
                                <a
                                    href="#href"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        updateCheckoutStep(1);
                                    }}
                                >
                                    <i className="fa fa-angle-left" /> Back to
                                    information
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="page-indicator-right indicator-def">
                                <a href="#checkout" onClick={handleSubmit}>
                                    Next <i className="fa fa-angle-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
}

export default Shipping;
