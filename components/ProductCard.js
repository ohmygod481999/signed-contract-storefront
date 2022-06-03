import React, { useContext } from "react";
import StoreContext from "../context/store-context";

function ProductCard({ product }) {
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
                    <div className="label-sale">Sale</div>
                </div>
                <div className="priduct-img-wrapper posr">
                    <div className="product-img">
                        <a href="single-product.html">
                            {images && images.length > 0 ? (
                                <img src={images[0].url} alt="" />
                            ) : (
                                <img src="images/product/p9.jpg" alt="" />
                            )}
                        </a>
                    </div>
                    <div className="product-inner-text">
                        <div className="product-social-icon social-icon">
                            <ul>
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
                            </ul>
                        </div>
                        <div className="product-btn">
                            <div className="product-qview-search">
                                <a
                                    className="btn-def btn-product-qview q-view"
                                    data-toggle="modal"
                                    data-target=".modal"
                                    href="#"
                                >
                                    <i className=" product-search fa fa-search" />{" "}
                                    quick View
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-review">
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
                </div>
                <div className="product-bottom-text posr">
                    <div className="product-bottom-title deft-underline2">
                        <a title={title}>
                            <h4>{title}</h4>
                        </a>
                    </div>
                    <div className="product-bottom-price">
                        <span>$385.00</span> <del>$300.00</del>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
