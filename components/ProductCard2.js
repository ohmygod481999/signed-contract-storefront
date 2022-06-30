import Link from "next/link";
import React, { useContext, useState } from "react";
import StoreContext from "../context/store-context";
import { formatMoney, getVnProductPrice } from "../utils/utils";

function ProductCard2({ product, toggleModal, isHaveBottom = true }) {
    const { addVariantToCart, cart } = useContext(StoreContext);

    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = (e) => {
        e.preventDefault();
        if (product.variants && product.variants.length > 0) {
            addVariantToCart({
                variantId: product.variants[0].id,
                quantity: 1,
            });
        }
        // if (product) setOptions(resetOptions(product));
    };

    const { title, images } = product;
    return (
        <div className="tab-content-wrapper tab-listview">
            <div className="row">
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="single-product">
                        <div className="product-wrapper posr">
                            <div className="product-label">
                                <div className="label-sale">Sale</div>
                            </div>
                            <div className="priduct-img-wrapper posr">
                                <div className="product-img">
                                    <Link href={`/product/${product.id}`}>
                                        <a>
                                            {images && images.length > 0 ? (
                                                <img
                                                    src={images[0].url}
                                                    alt=""
                                                />
                                            ) : (
                                                <img
                                                    src="images/product/p9.jpg"
                                                    alt=""
                                                />
                                            )}
                                        </a>
                                    </Link>
                                </div>
                                <div className="product-inner-text">
                                    <div className="product-social-icon social-icon">
                                        <ul>
                                            <li>
                                                <a
                                                    href="#cart"
                                                    onClick={handleAddToCart}
                                                >
                                                    <i className="fa fa-shopping-cart" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="index.html">
                                                    <i className="fa fa-heart-o" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="single-product.html">
                                                    <i className="fa fa-refresh" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="product-btn">
                                        <div className="product-qview-search">
                                            <a
                                                className="btn-def btn-product-qview q-view"
                                                data-toggle="modal"
                                                data-target=".modal"
                                                href="#"
                                                onClick={() =>
                                                    toggleModal(product)
                                                }
                                            >
                                                {/* <i className=" product-search fa fa-search" />{" "} */}
                                                quick View
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="product-review">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-star-o" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-star-o" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-star-o" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-star-o" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-star-o" />
                                        </a>
                                    </li>
                                </ul>
                            </div> */}
                            {isHaveBottom && (
                                <div className="product-bottom-text posr">
                                    <div className="product-bottom-title deft-underline2">
                                        <a title={title}>
                                            <h4>{title}</h4>
                                        </a>
                                    </div>
                                    <div className="product-bottom-price">
                                        <span>
                                            {formatMoney(
                                                getVnProductPrice(product)
                                            )}
                                        </span>{" "}
                                        <del>$300.00</del>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="col-md-8 col-sm-12 col-xs-12">
                    <div className="compare-content-wrap">
                        <div className="cmain-heading cmain-heading-tab2">
                            <h3>{product.title}</h3>
                        </div>
                        <div className="compare-conpart">
                            <div className="compare-social">
                                <div className="compare-social">
                                    <button className=" btn btn-default com-tw">
                                        <i className="fa fa-twitter" /> Twitter
                                    </button>
                                    <button className=" btn btn-default com-fb">
                                        <i className="fa fa-facebook" /> Share
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
                            <div className="skill-rating skill-rating-tab2">
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
                        </div>
                        <div className="compare-conpart">
                            <div className="skill-long-text">
                                <p>{product.description}</p>
                            </div>
                        </div>
                        <div className="compare-conpart-pm compare-tab2">
                            <div className="old-new-price">
                                <span>
                                    $342.00{" "}
                                    <del className="skill-gray"> $360.00</del>
                                </span>
                            </div>
                            <div className="plus-minus-text">Quantity</div>
                            <div className="skill-plusminus-wrap">
                                <div className="skill-plusminus">
                                    <div
                                        className="skill-minus qtybutton"
                                        onClick={() => {
                                            if (quantity > 1) {
                                                setQuantity(quantity - 1);
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
                                            if (value === NaN || value < 0)
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
                                <a href="#cart" onClick={handleAddToCart}>
                                    <i className="fa fa-shopping-cart" /> Add to
                                    cart
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard2;
