import React, { useContext, useEffect, useMemo, useState } from "react";
import StoreContext from "../context/store-context";
import Link from "next/link";
import Image from "next/image";
import { formatPrice, isEmpty } from "../utils/helper-functions";
import { paddingId, formatMoney } from "../utils/utils";

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
    const tempOrder = `
{"object":"order","id":"order_01G80G4D5SV5BCFXYBDCRQ7WCK","shipping_address":{"id":"addr_01G80G26JVBXZS525NJF2BP2GJ","customer_id":null,"company":null,"first_name":"We combine design thinking","last_name":"technical","address_1":"hanoi viet nam","address_2":null,"city":"hanoi","country_code":"vn","province":null,"postal_code":"100000","phone":"0829400301","created_at":"2022-07-15T08:37:05.000Z","updated_at":"2022-07-15T08:37:53.000Z","deleted_at":null,"metadata":null},"items":[{"id":"item_01G80G3A23R150G1YAMXC5J7CJ","cart_id":"cart_01G80G26JVV415CHPZQWFJPJC1","order_id":"order_01G80G4D5SV5BCFXYBDCRQ7WCK","swap_id":null,"claim_order_id":null,"title":"Sáp vuốt tóc Coolmate","description":"Sáp vuốt tóc Coolmate","thumbnail":"https://long-space.sgp1.digitaloceanspaces.com/20190204_233144.jpg","is_return":false,"is_giftcard":false,"should_merge":true,"allow_discounts":false,"has_shipping":true,"unit_price":1000000,"variant_id":"variant_01G54C9JNHFBNG3QTSJE5PHZVH","quantity":1,"fulfilled_quantity":null,"returned_quantity":null,"shipped_quantity":null,"created_at":"2022-07-15T08:37:42.000Z","updated_at":"2022-07-15T08:38:18.000Z","metadata":{},"tax_lines":[{"id":"litl_01G80G4D3EBBEVTET8GB65EMYE","rate":0,"name":"default","code":"default","created_at":"2022-07-15T08:38:17.000Z","updated_at":"2022-07-15T08:38:17.000Z","metadata":null,"item_id":"item_01G80G3A23R150G1YAMXC5J7CJ"}],"variant":{"id":"variant_01G54C9JNHFBNG3QTSJE5PHZVH","title":"Sáp vuốt tóc Coolmate","product_id":"prod_01G54C9JMH3BPW1VH8TP82QN6N","sku":null,"barcode":null,"ean":null,"upc":null,"inventory_quantity":11,"allow_backorder":false,"manage_inventory":false,"hs_code":null,"origin_country":null,"mid_code":null,"material":"","weight":null,"length":null,"height":null,"width":null,"created_at":"2022-06-09T14:01:05.000Z","updated_at":"2022-06-09T14:01:05.000Z","deleted_at":null,"metadata":null,"product":{"id":"prod_01G54C9JMH3BPW1VH8TP82QN6N","title":"Sáp vuốt tóc Coolmate","subtitle":null,"description":"Sáp vuốt tóc Coolmate Cực đỉnh ngày hè","handle":"/sap-vuot-toc","is_giftcard":false,"status":"published","thumbnail":"https://long-space.sgp1.digitaloceanspaces.com/20190204_233144.jpg","profile_id":"sp_01G0E1BS70ZZ0FG6ZNPAGNZJG5","weight":null,"length":null,"height":null,"width":null,"hs_code":"","origin_country":null,"mid_code":"","material":null,"collection_id":null,"type_id":null,"discountable":false,"external_id":null,"created_at":"2022-06-09T14:01:05.000Z","updated_at":"2022-06-09T14:01:05.000Z","deleted_at":null,"metadata":null}}}],"payments":[{"id":"pay_01G80G4D4FXQRYJ5S5766VP4J5","swap_id":null,"cart_id":"cart_01G80G26JVV415CHPZQWFJPJC1","order_id":"order_01G80G4D5SV5BCFXYBDCRQ7WCK","amount":1030000,"currency_code":"vnd","amount_refunded":0,"provider_id":"manual","data":{"status":"authorized"},"captured_at":null,"canceled_at":null,"created_at":"2022-07-15T08:38:18.000Z","updated_at":"2022-07-15T08:38:18.000Z","metadata":null,"idempotency_key":null}],"swaps":[],"claims":[],"discounts":[],"gift_cards":[],"gift_card_transactions":[],"refunds":[],"shipping_methods":[{"id":"sm_01G80G49AXZZQTDTZNXW2CBZE0","shipping_option_id":"so_01G3ECNX1YT7D43TZE0NG20616","order_id":"order_01G80G4D5SV5BCFXYBDCRQ7WCK","claim_order_id":null,"cart_id":"cart_01G80G26JVV415CHPZQWFJPJC1","swap_id":null,"return_id":null,"price":30000,"data":{"id":"manual-fulfillment"},"tax_lines":[{"id":"smtl_01G80G4D3EDHNXNRC0FA1VXRPN","rate":0,"name":"default","code":"default","created_at":"2022-07-15T08:38:17.000Z","updated_at":"2022-07-15T08:38:17.000Z","metadata":null,"shipping_method_id":"sm_01G80G49AXZZQTDTZNXW2CBZE0"}],"shipping_option":{"id":"so_01G3ECNX1YT7D43TZE0NG20616","name":"ship vietnam","region_id":"reg_01G3E9QD44R4QCSE7E98AEDTGY","profile_id":"sp_01G0E1BS70ZZ0FG6ZNPAGNZJG5","provider_id":"manual","price_type":"flat_rate","amount":30000,"is_return":false,"admin_only":false,"data":{"id":"manual-fulfillment"},"created_at":"2022-05-19T14:48:49.000Z","updated_at":"2022-05-19T14:48:49.000Z","deleted_at":null,"metadata":null}}],"region":{"id":"reg_01G3E9QD44R4QCSE7E98AEDTGY","name":"Vietnam","currency_code":"vnd","tax_rate":0,"tax_code":"","gift_cards_taxable":true,"automatic_taxes":true,"tax_provider_id":null,"created_at":"2022-05-19T13:57:13.000Z","updated_at":"2022-05-19T13:57:13.000Z","deleted_at":null,"metadata":null,"payment_providers":[{"id":"manual","is_installed":false}],"fulfillment_providers":[{"id":"manual","is_installed":true}]},"status":"pending","fulfillment_status":"not_fulfilled","payment_status":"awaiting","display_id":24,"cart_id":"cart_01G80G26JVV415CHPZQWFJPJC1","customer_id":"cus_01G3ECZYK9T2J1WW828MK0DYSQ","email":"vuongbaolong48@gmail.com","billing_address_id":"addr_01G80G3MVTWN0VYZVE7AVY8P32","shipping_address_id":"addr_01G80G26JVBXZS525NJF2BP2GJ","region_id":"reg_01G3E9QD44R4QCSE7E98AEDTGY","currency_code":"vnd","tax_rate":null,"draft_order_id":null,"canceled_at":null,"created_at":"2022-07-15T08:38:18.000Z","updated_at":"2022-07-15T08:38:18.000Z","metadata":{},"no_notification":null,"idempotency_key":null,"external_id":null,"subtotal":1000000,"tax_total":0,"shipping_total":30000,"discount_total":0,"total":1030000}

`;
    const { cart, order } = useContext(StoreContext);
    // const order = JSON.parse(tempOrder);
    // console.log(order);
    // console.log(JSON.stringify(order));

    const itemCost = useMemo(() => {
        return order.subtotal;
    }, [order]);

    const deliveryCost = useMemo(() => {
        return order.shipping_total;
    }, [order]);

    const totalCost = useMemo(() => {
        return order.total;
    }, [order]);

    return isEmpty(order) ? (
        <div style={style}>
            <p>Hang on while we validate your payment...</p>
        </div>
    ) : (
        <div className="order-summary-section">
            <div className="order-summary-header">
                <h1>ORDER SUMMARY</h1>
                <p className="order-summary__order-id">
                    Order ID: <span>#{paddingId(order.display_id)}</span>
                </p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h4>MY BAG</h4>
                        <div className="order-summary-cart">
                            {order.items.map((item) => (
                                <div
                                    key={item.id}
                                    className="order-summary-cart__item"
                                >
                                    <div>
                                        <h5
                                            style={{
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            {item.title}
                                        </h5>
                                        <p>Quantity: {item.quantity}</p>
                                    </div>
                                    <div className="order-summary-cart__item-price">
                                        {formatMoney(item.unit_price)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h4>ADDRESS</h4>
                        <div className="order-summary-cart__address">
                            <p>{order.shipping_address.first_name}</p>
                            <p>{order.shipping_address.address_1}</p>
                            <p>{order.shipping_address.city}</p>
                            <p>Phone: {order.shipping_address.phone}</p>
                        </div>
                        <h4>PAYMENT METHOD</h4>
                        <div className="order-summary-cart__address">
                            <p>Cash On Delivery</p>
                        </div>
                        <h4>YOUR ORDER</h4>
                        <div className="order-summary-cart__cost">
                            <div className="order-summary-cart__cost-item">
                                <div>Item cost</div>
                                <div>{formatMoney(itemCost)}</div>
                            </div>
                            <div className="order-summary-cart__cost-item">
                                <div>Delivery cost</div>
                                <div>{formatMoney(deliveryCost)}</div>
                            </div>
                            <div className="order-summary-cart__cost-hr" />
                            <div className="clearfix"></div>

                            <div className="order-summary-cart__cost-total">
                                <div>
                                    <strong>TOTAL</strong>
                                </div>
                                <div>
                                    <strong>{formatMoney(totalCost)}</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 order-summary__thanks-order">
                        <p className="text-center">
                            Thanks for your order. Go back to{" "}
                            <Link href="/">home</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

{
    /* <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "30px",
            }}
        >
            <div>
                <h1>Order Summary</h1>
                <p className="text-center">Thank you for your order!</p>
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
                                <div>
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
                                                <div>
                                                    <Image
                          objectFit="cover"
                          height="100%"
                          width="100%"
                          src={i.variant.product.thumbnail}
                          alt={`${i.title}`}
                        />
                                                </div>
                                            </a>
                                        </Link>
                                    </figure>
                                    <div>
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
                                                <p>Size: {i.variant.title}</p>
                                                <p>
                                                    Price:{" "}
                                                    {formatPrice(
                                                        i.unit_price,
                                                        order.currency_code
                                                    )}
                                                </p>
                                                <p>Quantity: {i.quantity}</p>
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
        </div> */
}

export default Payment;
