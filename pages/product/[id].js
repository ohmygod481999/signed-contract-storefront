import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import StoreContext from "../../context/store-context";
import { createClient } from "../../utils/client";
import { get } from "lodash";
import { formatMoney, getVnProductPrice } from "../../utils/utils";

function Product({ product }) {
    const { addVariantToCart } = useContext(StoreContext);
    const router = useRouter();
    const [tab, setTab] = useState(1);

    const [quantity, setQuantity] = useState(1);

    const addToCartHandler = (e) => {
        e.preventDefault();
        if (product.variants && product.variants.length > 0) {
            addVariantToCart({
                variantId: product.variants[0].id,
                quantity: quantity,
            });
        }
    };

    console.log(product);

    return (
        <div>
            <BreadCrumb title={product.title} />
            <div className="compare-area compare-single-productt mb-75">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 col-xs-12">
                            <div className="single-thumbnail-wrapper">
                                <div className="single-product-tab">
                                    <ul
                                        className="single-tab-control"
                                        role="tablist"
                                    >
                                        {product.images.map((image, i) => (
                                            <li
                                                key={image.id}
                                                className="active"
                                                onClick={() => setTab(i + 1)}
                                            >
                                                <a
                                                    href={`#tab-${i + 1}`}
                                                    aria-controls={`tab-${
                                                        i + 1
                                                    }`}
                                                    role="tab"
                                                    data-toggle="tab"
                                                >
                                                    <img
                                                        src={image.url}
                                                        alt="Domino"
                                                    />
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="single-cat-main">
                                    {product.images &&
                                        product.images.length > 0 && (
                                            <div className="tab-content">
                                                <div
                                                    key={
                                                        product.images[tab - 1]
                                                            .id
                                                    }
                                                    role="tabpanel"
                                                    className="tab-pane active"
                                                    id={`tab-${tab}`}
                                                >
                                                    <div className="tab-single-image">
                                                        <a
                                                            href={
                                                                product.images[
                                                                    tab - 1
                                                                ].url
                                                            }
                                                            className="fancybox"
                                                            data-fancybox-group="gallery"
                                                        >
                                                            <img
                                                                src={
                                                                    product
                                                                        .images[
                                                                        tab - 1
                                                                    ].url
                                                                }
                                                                alt=""
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                                {/* {product.images.map((image, i) => (
                                        ))} */}
                                            </div>
                                        )}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 col-xs-12">
                            <div className="compare-content-wrap">
                                <div className="cmain-heading text-uppercase">
                                    <h3>{product.title}</h3>
                                </div>
                                <div className="compare-conpart compare-single-mgr">
                                    <div className="compare-social">
                                        <div className="compare-social">
                                            <button className=" btn btn-default com-tw">
                                                <i className="fa fa-twitter" />{" "}
                                                Twitter
                                            </button>
                                            <button className=" btn btn-default com-fb">
                                                <i className="fa fa-facebook" />{" "}
                                                Share
                                            </button>
                                            <button className="btn btn-default com-gp">
                                                <i className="fa fa-google-plus" />{" "}
                                                Google +
                                            </button>
                                            <button className=" btn btn-default com-pi">
                                                <i className="fa fa-pinterest" />{" "}
                                                Pinterest
                                            </button>
                                        </div>
                                    </div>
                                    <div className="skill-rating">
                                        <div className="rating-text">
                                            <span>Rating</span>
                                        </div>
                                        <ul className="skill-star-rating">
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-star" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-star" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-star" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-star" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-star" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="skill-referance">
                                        <p> Reference: demo_12</p>
                                        <p>
                                            <span className="italic">
                                                Condition:
                                            </span>{" "}
                                            New product
                                        </p>
                                    </div>
                                </div>
                                <div className="compare-conpart compare-conpart-text">
                                    <div className="skill-long-text">
                                        <p>{product.description}</p>
                                    </div>
                                </div>
                                <div className="compare-conpart-pm compare-bottom">
                                    <div className="old-new-price">
                                        <span>
                                            {formatMoney(
                                                getVnProductPrice(product)
                                            )}{" "}
                                            <del className="skill-gray">
                                                {" "}
                                                $360.00
                                            </del>
                                        </span>
                                    </div>
                                    <div className="plus-minus-text">
                                        Quantity
                                    </div>
                                    <div className="skill-plusminus-wrap">
                                        <div className="skill-plusminus">
                                            <div
                                                className="skill-minus qtybutton"
                                                onClick={() => {
                                                    if (quantity > 1) {
                                                        setQuantity(
                                                            quantity - 1
                                                        );
                                                    }
                                                }}
                                            >
                                                -
                                            </div>
                                            <input
                                                value={quantity}
                                                onChange={(e) => {
                                                    const value = parseInt(
                                                        e.target.value
                                                    );
                                                    if (
                                                        value === NaN ||
                                                        value < 0
                                                    )
                                                        return;
                                                    setQuantity(value);
                                                }}
                                                type="number"
                                                name="#"
                                                defaultValue={1}
                                                className="cart-plus-minus-box"
                                            />
                                            <div
                                                className="skill-plus qtybutton"
                                                onClick={() => {
                                                    setQuantity(quantity + 1);
                                                }}
                                            >
                                                +
                                            </div>
                                        </div>
                                    </div>
                                    <div className="skill-cart-option skill-sep posr">
                                        <a
                                            href="#cart"
                                            onClick={addToCartHandler}
                                        >
                                            <i className="fa fa-shopping-cart" />{" "}
                                            Add to cart
                                        </a>
                                    </div>
                                </div>
                                <div className="compare-conpart skill-communicate">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-envelope" />{" "}
                                                Send to a friend
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-print" />{" "}
                                                Print
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-heart-o" />{" "}
                                                Add to wishlist
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="skill-checklist">
                                        <label htmlFor="skillc">
                                            <span className="italic">Size</span>
                                        </label>
                                        <select id="skillc">
                                            <option value>S</option>
                                            <option value>M</option>
                                            <option value>L</option>
                                        </select>
                                    </div>
                                </div>
                                {/* <div className="color-instock">
                                    <div className="skill-colors">
                                        <span className="italic">Color</span>
                                        <ul className="skill-ulli">
                                            <li className="light-black click-bdr">
                                                <a href="#" />
                                            </li>
                                            <li className="skill-orange">
                                                <a href="#" />
                                            </li>
                                            <li className="skill-blue">
                                                <a href="#" />
                                            </li>
                                            <li className="skill-yellow">
                                                <a href="#" />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="compare-conpart-items">
                                        <div className="skill-long-items">
                                            <p>
                                                <span className="italic skill-items">
                                                    90 Items
                                                </span>
                                                <span className="skill-instock">
                                                    {" "}
                                                    In Stock
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const getStaticPaths = async () => {
    const client = createClient();
    const { products } = await client.products.list();

    return {
        paths: [...products.map((product) => `/product/${product.id}`)], //indicates that no page needs be created at build time
        // paths: [...products.map(product => `/product/${encodeURIComponent(product.handle)}`)], //indicates that no page needs be created at build time
        fallback: "blocking", //indicates the type of fallback
    };
};

export async function getStaticProps({ params }) {
    const client = createClient();
    const res = await client.products.retrieve(params.id);

    return {
        props: {
            product: res.product,
        },
    };
}

export default Product;
