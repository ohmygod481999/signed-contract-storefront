import React from "react";
import { formatPrice } from "../../utils/helper-functions";
import { formatMoney } from "../../utils/utils";

function ShippingMethod({ handleOption, option, chosen }) {
    return (
        <div className="shipping-checkout-wrapper" onClick={() => handleOption(option)} style={{
            cursor: "pointer"
        }}>
            <div className="checkout-left-item">
                <div className="checkout-input">
                    <form action="#">
                        <div className="checkout-btn">
                            <input
                                type="checkbox"
                                name="ship"
                                checked={option.id === chosen?.id}
                                onChange={() => handleOption(option)}
                            />
                        </div>
                    </form>
                </div>
                <div className="checkout-icon">
                    <img src="images/icons/2.jpg" alt="" />
                    {/* <i class="fa fa-truck"></i> */}
                </div>
            </div>
            <div className="checkout-middle-item">
                <p>{option.name}</p>
                <p>COD</p>
            </div>
            <div className="checkout-right-item">
                {/* <p>{formatPrice(option.amount, "đ")}</p> */}
                <p>{formatMoney(option.amount)}</p>
            </div>
        </div>
    );
}

export default ShippingMethod;
