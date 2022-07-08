import { useRouter } from "next/router";
import React, { useContext, useMemo, useState } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import StoreContext from "../../context/store-context";
import { createClient } from "../../utils/client";
import { get } from "lodash";
import {
    formatMoney,
    getPriceFromOption,
    getVariantFromOption,
    getVnProductPrice,
    getVnProductPrices,
} from "../../utils/utils";

function Product({ product }) {
    const { addVariantToCart } = useContext(StoreContext);
    const router = useRouter();
    const [tab, setTab] = useState(1);
    const [currentOption, setCurrentOption] = useState({
        [product.options[0].id]: product.options[0].values[0].id
    });
    const currentVariant = useMemo(
        () => getVariantFromOption(product, currentOption || {}),
        [product, currentOption]
    );

    console.log(product);
    console.log(currentOption)

    const [quantity, setQuantity] = useState(1);

    const addToCartHandler = (e) => {
        e.preventDefault();
        if (!currentVariant) {
            alert("Vui lòng chọn size");
            return;
        }
        addVariantToCart({
            variantId: currentVariant.id,
            quantity: quantity,
        });
    };

    return (
        <div>
            {/* <BreadCrumb title={product.title} /> */}
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
                                    <h3
                                        style={{
                                            fontWeight: 700,
                                        }}
                                    >
                                        {product.title}
                                    </h3>
                                </div>
                                <div className="compare-conpart-pm compare-bottom">
                                    <div className="old-new-price">
                                        <span>
                                            {(function () {
                                                if (!currentOption)
                                                    return getVnProductPrices(
                                                        product
                                                    );
                                                const price =
                                                    getPriceFromOption(
                                                        product,
                                                        currentOption || {}
                                                    );
                                                if (price)
                                                    return formatMoney(price);
                                                return "N/A";
                                            })()}
                                            {/* {getPriceFromOption(product, (currentOption || {})) || getVnProductPrices(product)}{" "} */}
                                            {/* <del className="skill-gray">
                                                {" "}
                                                $360.00
                                            </del> */}
                                        </span>
                                    </div>
                                    {product.options.length > 1 && (
                                        <div className="product-variant">
                                            {product.options.map((option) => (
                                                <div
                                                    className="skill-checklist"
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
                                        </div>
                                    )}
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
                                <div className="compare-conpart compare-conpart-text">
                                    <div className="skill-long-text">
                                        <p>{product.description}</p>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        marginTop: "30px",
                                    }}
                                >
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
