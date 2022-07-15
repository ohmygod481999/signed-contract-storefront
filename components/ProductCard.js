import Link from "next/link";
import React, { useContext } from "react";
import StoreContext from "../context/store-context";
import {
    formatMoney,
    getVnProductPrice,
    getVnProductPrices,
} from "../utils/utils";

function ProductCard({ product, toggleModal, isHaveBottom = true }) {
    const { addVariantToCart, cart } = useContext(StoreContext);

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
        <div className="single-product">
            <div className="product-wrapper posr">
                <div className="product-label">
                    {/* <div className="label-sale">Sale</div> */}
                </div>
                <div className="priduct-img-wrapper posr">
                    <div className="product-img">
                        <Link href={`/product/${product.id}`}>
                            <a>
                                {images && images.length > 0 ? (
                                    <img src={images[0].url} alt="" />
                                ) : (
                                    <img src="images/product/p9.jpg" alt="" />
                                )}
                            </a>
                        </Link>
                    </div>
                    <div className="product-inner-text">
                        <div className="product-social-icon social-icon">
                            {/* <ul>
                                <li>
                                    <a href="#cart" onClick={handleAddToCart}>
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
                            </ul> */}
                        </div>
                        <div className="product-btn">
                            <div className="product-qview-search">
                                <a
                                    className="btn-def btn-product-qview q-view"
                                    data-toggle="modal"
                                    data-target=".modal"
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        toggleModal(product)
                                    }}
                                >
                                    {/* <i className=" product-search fa fa-search" />{" "} */}
                                    Order now
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
                            <Link href={`/product/${product.id}`}>
                                <a title={title}>
                                    <h4>{title}</h4>
                                </a>
                            </Link>
                        </div>
                        <div className="product-bottom-price">
                            <span>{getVnProductPrices(product)}</span>{" "}
                            {/* <del>$300.00</del> */}
                            {/* <span>{formatMoney(getVnProductPrice(product))}</span> <del>$300.00</del> */}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductCard;
