import Link from "next/link";
import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { toast } from "react-toastify";
import DisplayContext from "../context/display-context";
import StoreContext from "../context/store-context";
import { useOnClickOutside } from "../hooks/useOnClickOutSide";
import {
    formatMoney,
    getPriceFromOption,
    getVariantFromOption,
    getVnProductPrice,
    getVnProductPrices,
} from "../utils/utils";

function ModalProduct({ isActive, setActive, product }) {
    const ref = useRef();

    const { addVariantToCart, cart } = useContext(StoreContext);
    const { updateCartViewDisplay } = useContext(DisplayContext);
    const [quantity, setQuantity] = useState(1);

    const [currentOption, setCurrentOption] = useState(
        product
            ? {
                  [product.options[0].id]: product.options[0].values[0].id,
              }
            : null
    );
    const currentVariant = useMemo(() => {
        if (product) {
            console.log("run", product, currentOption);
        }
        return product
            ? getVariantFromOption(product, currentOption || {})
            : null;
    }, [product, currentOption]);

    // console.log(product.variants);
    console.log(currentOption);
    console.log(currentVariant);

    useEffect(() => {
        if (product) {
            setQuantity(1);
            setCurrentOption({
                [product.options[0].id]: product.options[0].values[0].id,
            });
        }
        // if (product?.variants?.length > 1) {
        // } else {
        //     setCurrentOption(product?.options[0]);
        // }
    }, [product]);

    const handleAddToCart = () => {
        if (!currentVariant) {
            alert("Vui lòng chọn size");
            return;
        }

        addVariantToCart({
            variantId: currentVariant.id,
            quantity: parseInt(quantity),
        });
        setActive(false);
        updateCartViewDisplay();
        // toast(`${product.title} has added to cart !`);
    };

    useOnClickOutside(ref, () => {
        setActive(false);
    });

    return (
        <div id="quickview-wrapper">
            {/* Modal */}
            {isActive && (
                <div
                    onClick={() => {
                        setActive(false);
                    }}
                    className={`modal-backdrop fade in`}
                ></div>
            )}
            <div
                className={`modal fade ${isActive ? "in" : ""}`}
                id="productModal"
                tabIndex={-1}
                role="dialog"
                style={{
                    display: isActive ? "block" : "none",
                }}
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body" ref={ref}>
                            {product ? (
                                <div className="modal-product">
                                    <div className="product-images">
                                        {/*modal tab start*/}
                                        <div className="portfolio-thumbnil-area-2">
                                            <div className="tab-content active-portfolio-area-2">
                                                {product.images.map(
                                                    (image, i) => (
                                                        <div
                                                            key={i}
                                                            role="tabpanel"
                                                            className={`tab-pane ${
                                                                i === 0
                                                                    ? "active"
                                                                    : ""
                                                            }`}
                                                            id={`view${i}`}
                                                        >
                                                            <div className="product-img">
                                                                <a href="single-product.html">
                                                                    <img
                                                                        src={
                                                                            image.url
                                                                        }
                                                                        alt=""
                                                                    />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                            <div className="product-more-views-2">
                                                <div
                                                    className="thumbnail-carousel-modal-2"
                                                    data-tabs="tabs"
                                                >
                                                    {product.images.map(
                                                        (image, i) => (
                                                            <a
                                                                key={i}
                                                                href={`#view${i}`}
                                                                aria-controls={`view${i}`}
                                                                data-toggle="tab"
                                                            >
                                                                <img
                                                                    src={
                                                                        image.url
                                                                    }
                                                                    alt=""
                                                                />
                                                            </a>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*modal tab end*/}
                                    {/* .product-images */}
                                    <div className="product-info">
                                        <h1>{product.title}</h1>
                                        <div className="price-box-3">
                                            <div className="s-price-box">
                                                {" "}
                                                <span className="new-price">
                                                    {(function () {
                                                        if (!currentOption)
                                                            return getVnProductPrices(
                                                                product
                                                            );
                                                        const price =
                                                            getPriceFromOption(
                                                                product,
                                                                currentOption ||
                                                                    {}
                                                            );
                                                        if (price)
                                                            return formatMoney(
                                                                price
                                                            );
                                                        return "N/A";
                                                    })()}
                                                    {/* {getVnProductPrices(
                                                        product
                                                    )} */}
                                                </span>{" "}
                                                {/* <span className="old-price">
                                                    $190.00
                                                </span>{" "} */}
                                            </div>
                                        </div>{" "}
                                        <Link href={`/product/${product.id}`}>
                                            <a className="see-all">
                                                Show more
                                            </a>
                                        </Link>
                                        {product.variants.length > 1 &&
                                            product.options.map((option) => (
                                                <div
                                                    className=""
                                                    key={option.id}
                                                >
                                                    <label htmlFor="skillc">
                                                        <span className="italic">
                                                            {option.title}
                                                        </span>
                                                    </label>
                                                    <select
                                                        id="skillc"
                                                        onChange={(e) =>
                                                            setCurrentOption({
                                                                ...(currentOption ||
                                                                    {}),
                                                                [option.id]:
                                                                    e.target
                                                                        .value !==
                                                                    "-"
                                                                        ? e
                                                                              .target
                                                                              .value
                                                                        : null,
                                                            })
                                                        }
                                                    >
                                                        <option value={null}>
                                                            -
                                                        </option>
                                                        {option.values.map(
                                                            (value) => (
                                                                <option
                                                                    key={
                                                                        value.id
                                                                    }
                                                                    value={
                                                                        value.id
                                                                    }
                                                                >
                                                                    {
                                                                        value.value
                                                                    }
                                                                </option>
                                                            )
                                                        )}
                                                    </select>
                                                </div>
                                            ))}
                                        <div className="quick-add-to-cart">
                                            <div className="cart">
                                                <div className="numbers-row">
                                                    <input
                                                        type="number"
                                                        id="french-hens"
                                                        value={quantity}
                                                        onChange={(e) =>
                                                            setQuantity(
                                                                e.target.value
                                                            )
                                                        }
                                                    />{" "}
                                                </div>
                                                <button
                                                    className="single_add_to_cart_button cart-stylei"
                                                    onClick={handleAddToCart}
                                                >
                                                    <i className="fa fa-shopping-cart" />{" "}
                                                    Add to cart
                                                </button>
                                            </div>
                                        </div>
                                        <div className="quick-desc">
                                            {product.description}
                                        </div>
                                        {/* <div className="social-sharing-modal">
                                            <div className="widget widget_socialsharing_widget">
                                                <h3 className="widget-title-modal">
                                                    Share this product
                                                </h3>
                                                <ul className="social-icons-modal">
                                                    <li>
                                                        <a
                                                            target="_blank"
                                                            title="Facebook"
                                                            href="#"
                                                            className="facebook m-single-icon"
                                                        >
                                                            <i className="fa fa-facebook" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            target="_blank"
                                                            title="Twitter"
                                                            href="#"
                                                            className="twitter m-single-icon"
                                                        >
                                                            <i className="fa fa-twitter" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            target="_blank"
                                                            title="Pinterest"
                                                            href="#"
                                                            className="pinterest m-single-icon"
                                                        >
                                                            <i className="fa fa-pinterest" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            target="_blank"
                                                            title="Google +"
                                                            href="#"
                                                            className="gplus m-single-icon"
                                                        >
                                                            <i className="fa fa-google-plus" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            target="_blank"
                                                            title="LinkedIn"
                                                            href="#"
                                                            className="linkedin m-single-icon"
                                                        >
                                                            <i className="fa fa-linkedin" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div> */}
                                    </div>
                                    {/* .product-info */}
                                </div>
                            ) : (
                                <div>undefined</div>
                            )}
                            {/* .modal-product */}
                        </div>
                        {/* .modal-body */}
                    </div>
                    {/* .modal-content */}
                </div>
                {/* .modal-dialog */}
            </div>
            {/* END Modal */}
        </div>
    );
}

export default ModalProduct;
