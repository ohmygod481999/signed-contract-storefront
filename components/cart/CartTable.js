import Link from "next/link";
import React, { useContext } from "react";
import StoreContext from "../../context/store-context";
import { formatMoney } from "../../utils/utils";

function CartTable() {
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
        <div className="cart-table-area">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="shopping-cart-table">
                            <form action="#" method="POST">
                                <div className="table-responsive">
                                    <table className="main-table">
                                        <thead>
                                            <tr className="tr1">
                                                <th className="th1">Product</th>
                                                <th className="th2">
                                                    Description
                                                </th>
                                                <th className="th3">
                                                    Availability
                                                </th>
                                                <th className="th4">
                                                    Unit price
                                                </th>
                                                <th className="th5">Qty</th>
                                                <th className="th6">Remove</th>
                                                <th className="th7">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cart.items.length === 0 && (
                                                <tr>
                                                    <td
                                                        colSpan={100}
                                                        style={{
                                                            paddingTop: 10,
                                                            paddingBottom: 10,
                                                        }}
                                                    >
                                                        Trống.{" "}
                                                        <Link href="/shop">
                                                            <a>
                                                                Thêm sản phẩm
                                                                vào giỏ hàng
                                                            </a>
                                                        </Link>
                                                    </td>
                                                </tr>
                                            )}
                                            {cart.items.map((item) => (
                                                <tr
                                                    key={item.id}
                                                    className="tr2"
                                                >
                                                    <td className="td1">
                                                        <a href="single-product.html">
                                                            <img
                                                                src={
                                                                    item.thumbnail
                                                                        ? item.thumbnail
                                                                        : "images/product/p1.jpg"
                                                                }
                                                                alt="domino"
                                                            />
                                                        </a>
                                                    </td>
                                                    <td className="td2">
                                                        <h5>{item.title}</h5>
                                                        <p>
                                                            {item.variant
                                                                .title || "N/A"}
                                                        </p>
                                                        <p>
                                                            SKU :{" "}
                                                            {item.variant.sku ||
                                                                "N/A"}
                                                        </p>
                                                    </td>
                                                    <td className="td3">
                                                        <span>In stock</span>
                                                    </td>
                                                    <td className="td4">
                                                        {formatMoney(item.unit_price)}
                                                    </td>
                                                    <td className="td5 item-qty">
                                                        <div className="cart-plus-minus">
                                                            <div
                                                                className="decrease qtybutton"
                                                                onClick={() =>
                                                                    handleChangeQuantity(
                                                                        item.id,
                                                                        item.quantity -
                                                                            1
                                                                    )
                                                                }
                                                            >
                                                                -
                                                            </div>
                                                            <input
                                                                type="text"
                                                                name="plus"
                                                                value={
                                                                    item.quantity
                                                                }
                                                                onChange={(e) =>
                                                                    handleChangeQuantity(
                                                                        item.id,
                                                                        parseInt(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    )
                                                                }
                                                                className="cart-plus-minus-box"
                                                            />
                                                            <div
                                                                className="increase qtybutton"
                                                                onClick={() =>
                                                                    handleChangeQuantity(
                                                                        item.id,
                                                                        item.quantity +
                                                                            1
                                                                    )
                                                                }
                                                            >
                                                                +
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="td6">
                                                        <i
                                                            className="fa fa-trash-o"
                                                            onClick={() =>
                                                                removeLineItem(
                                                                    item.id
                                                                )
                                                            }
                                                        />
                                                    </td>
                                                    <td className="td7">
                                                        {formatMoney(
                                                            item.unit_price *
                                                                item.quantity
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                            {cart.items.length > 0 && (
                                                <>
                                                    <tr className="tr4">
                                                        <td
                                                            rowSpan={3}
                                                            colSpan={4}
                                                            className="td15"
                                                        />
                                                        <td
                                                            colSpan={2}
                                                            className="td16"
                                                        >
                                                            Total products
                                                        </td>
                                                        <td className="td17">
                                                            {formatMoney(
                                                                grandTotal
                                                            )}
                                                        </td>
                                                    </tr>
                                                    <tr className="tr5">
                                                        <td
                                                            colSpan={2}
                                                            className="td18"
                                                        >
                                                            Total shipping
                                                        </td>
                                                        <td className="td19">
                                                            {shippingPrice
                                                                ? formatMoney(
                                                                      shippingPrice
                                                                  )
                                                                : "N/A"}
                                                        </td>
                                                    </tr>
                                                    <tr className="tr6">
                                                        <td
                                                            colSpan={2}
                                                            className="td20"
                                                        >
                                                            Total
                                                        </td>
                                                        <td className="td21">
                                                            {formatMoney(
                                                                grandTotal +
                                                                    (shippingPrice
                                                                        ? shippingPrice
                                                                        : 0)
                                                            )}
                                                        </td>
                                                    </tr>
                                                </>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartTable;
