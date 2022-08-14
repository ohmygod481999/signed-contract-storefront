import Link from "next/link";
import React, { useContext } from "react";
import StoreContext from "../../context/store-context";
import { formatMoney } from "../../utils/utils";

function CartList() {
    const { cart, updateLineItem, removeLineItem } = useContext(StoreContext);

    const handleChangeQuantity = (lineId, quantity) => {
        updateLineItem({
            lineId,
            quantity,
        });
    };

    let grandTotal = 0;

    cart.items.forEach((item) => {
        grandTotal += item.quantity * item.unit_price;
    });

    let shippingPrice = null;
    if (cart.shipping_methods && cart.shipping_methods.length > 0) {
        shippingPrice = cart.shipping_methods[0].price;
    }

    return (
        <div className="account-creation">
            <div className="lp-title">
                <h3>Your Product</h3>
            </div>
            <div
                className="lp-left-text delivery-add"
                style={{
                    paddingBottom: 20,
                    borderBottom: "1px solid #dadada",
                }}
            >
                <div className="row">
                    <div className="col-md-12">
                        <table className="product-table">
                            <tbody>
                                {cart.items.map((item) => (
                                    <tr key={item.id} className="product">
                                        <td className="product__image">
                                            <div className="product-thumbnail">
                                                <img
                                                    src={
                                                        item.thumbnail
                                                            ? item.thumbnail
                                                            : "images/product/p1.jpg"
                                                    }
                                                    alt="product"
                                                />
                                            </div>
                                        </td>
                                        <td className="product__description">
                                            {item.title}
                                        </td>
                                        <td className="product__price">
                                            {formatMoney(
                                                item.unit_price * item.quantity
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div
                className="order-summary__section order-summary__section--total-lines"
                data-order-summary-section="payment-lines"
            >
                <table className="total-line-table">
                    <tbody className="total-line-table__tbody">
                        <tr className="total-line total-line--subtotal">
                            <th className="total-line__name" scope="row">
                                Subtotal
                            </th>
                            <td className="total-line__price">
                                <span
                                    className="order-summary__emphasis skeleton-while-loading"
                                    data-checkout-subtotal-price-target={13500}
                                >
                                    {formatMoney(grandTotal)}
                                </span>
                            </td>
                        </tr>
                        <tr className="total-line total-line--shipping">
                            <th className="total-line__name" scope="row">
                                <span>Shipping</span>
                            </th>
                            <td className="total-line__price">
                                <span
                                    className="skeleton-while-loading order-summary__emphasis"
                                    data-checkout-total-shipping-target={0}
                                >
                                    {shippingPrice
                                        ? formatMoney(shippingPrice)
                                        : "N/A"}
                                </span>
                            </td>
                        </tr>
                        <tr
                            className="total-line total-line--taxes hidden"
                            data-checkout-taxes
                        >
                            <th className="total-line__name" scope="row">
                                Taxes
                            </th>
                            <td className="total-line__price">
                                <span
                                    className="order-summary__emphasis skeleton-while-loading"
                                    data-checkout-total-taxes-target={0}
                                >
                                    $0.00
                                </span>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot className="total-line-table__footer">
                        <tr className="total-line">
                            <th
                                className="total-line__name payment-due-label"
                                scope="row"
                            >
                                <span className="payment-due-label__total">
                                    Total
                                </span>
                            </th>
                            <td
                                className="total-line__price payment-due"
                                data-presentment-currency="USD"
                            >
                                <span
                                    className="payment-due__price skeleton-while-loading--lg"
                                    // data-checkout-payment-due-target={13500}
                                >
                                    {formatMoney(
                                        grandTotal +
                                            (shippingPrice ? shippingPrice : 0)
                                    )}
                                </span>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}

export default CartList;
