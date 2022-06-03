import React, { useContext, useEffect, useState } from "react";
import StoreContext from "../context/store-context";
import Link from "next/link";
import Image from "next/image";
import { formatPrice, isEmpty } from "../utils/helper-functions";

const style = {
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
};

export const Payment = () => {
    const { cart, order } = useContext(StoreContext);

    return isEmpty(order) ? (
        <div style={style}>
            <p>Hang on while we validate your payment...</p>
        </div>
    ) : (
        <div>
            <div>
                <h1>Order Summary</h1>
                <p>Thank you for your order!</p>
            </div>
            <div>
                {order.items
                    .sort((a, b) => {
                        const createdAtA = new Date(a.created_at),
                            createdAtB = new Date(b.created_at);

                        if (createdAtA < createdAtB) return -1;
                        if (createdAtA > createdAtB) return 1;
                        return 0;
                    })
                    .map((i) => {
                        return (
                            <div key={i.id}>
                                <div classNam>
                                    <figure>
                                        <Link
                                            href={{
                                                pathname: `/product/[id]`,
                                                query: {
                                                    id: i.variant.product.id,
                                                },
                                            }}
                                            passHref
                                        >
                                            <a>
                                                <div classNam>
                                                    {/* <Image
                          objectFit="cover"
                          height="100%"
                          width="100%"
                          src={i.variant.product.thumbnail}
                          alt={`${i.title}`}
                        /> */}
                                                </div>
                                            </a>
                                        </Link>
                                    </figure>
                                    <div classNam>
                                        <div>
                                            <div>
                                                <Link
                                                    href={{
                                                        pathname: `/product/[id]`,
                                                        query: {
                                                            id: i.variant
                                                                .product.id,
                                                        },
                                                    }}
                                                    passHref
                                                >
                                                    <a>{i.title}</a>
                                                </Link>
                                                <p classNam>
                                                    Size: {i.variant.title}
                                                </p>
                                                <p classNam>
                                                    Price:{" "}
                                                    {formatPrice(
                                                        i.unit_price,
                                                        order.currency_code
                                                    )}
                                                </p>
                                                <p classNam>
                                                    Quantity: {i.quantity}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
            <div>
                <div>
                    <div>Subtotal</div>
                    <div>
                        {formatPrice(
                            order.subtotal,
                            order.region.currency_code
                        )}
                    </div>
                </div>
                <div>
                    <div>Shipping</div>
                    <div>
                        {formatPrice(
                            order.shipping_total,
                            order.region.currency_code
                        )}
                    </div>
                </div>
                <div>
                    <div>Total</div>
                    <div>
                        {formatPrice(order.total, order.region.currency_code)}
                    </div>
                </div>
            </div>
            <div>
                <p>
                    An order confirmation will be sent to you at {order.email}
                </p>
            </div>
        </div>
    );
};

export default Payment;
