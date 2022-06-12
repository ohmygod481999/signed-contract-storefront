import { useState } from "react";
import Banner from "../components/Banner";
import BreadCrumb from "../components/BreadCrumb";
import ModalProduct from "../components/ModalProduct";
import ProductCard from "../components/ProductCard";
import { createClient } from "../utils/client";

export default function Shop({ products }) {
    const [isActive, setIsActive] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null);

    const toggleModal = (product) => {
        setIsActive(true);
        setCurrentProduct(product);
    };

    return (
        <div className="hair-main-wrapper">
            <Banner />
            <BreadCrumb title={"Shop"} />

            <ModalProduct
                isActive={isActive}
                setActive={setIsActive}
                product={currentProduct}
            />

            <div className="main-shop-area">
                <div
                    className="container"
                    style={{
                        marginBottom: "75px",
                    }}
                >
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="top-full-tarea">
                                <div className="full-ttlleft">
                                    <p>Shop</p>
                                </div>
                                <div className="full-ttlright">
                                    <div className="selected-items">
                                        <p>There are 13 products.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix" />
                            <div className="mainshop-area">
                                <div className="mainshop-top">
                                    <div className="row">
                                        <div className="col-md-5 col-sm-5 col-xs-12">
                                            <div className="category-short">
                                                <div className="sproduct-tab">
                                                    <ul
                                                        className="tabcate"
                                                        role="tablist"
                                                    >
                                                        <li
                                                            role="presentation"
                                                            className="active"
                                                        >
                                                            <a
                                                                href="#productWidgets"
                                                                aria-controls="productWidgets"
                                                                role="tab"
                                                                data-toggle="tab"
                                                            >
                                                                <i
                                                                    className="fa fa-th-large"
                                                                    aria-hidden="true"
                                                                />
                                                            </a>
                                                        </li>
                                                        <li role="presentation">
                                                            <a
                                                                href="#productList"
                                                                aria-controls="productList"
                                                                role="tab"
                                                                data-toggle="tab"
                                                            >
                                                                <i
                                                                    className="fa fa-list-alt"
                                                                    aria-hidden="true"
                                                                />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="sproduct-short">
                                                    <div className="top-product-short">
                                                        <label htmlFor="viewby">
                                                            Short By
                                                        </label>
                                                        <select
                                                            name="#"
                                                            id="viewby"
                                                        >
                                                            <option value={25}>
                                                                Default
                                                            </option>
                                                            <option value={20}>
                                                                Name (A-Z)
                                                            </option>
                                                            <option value={15}>
                                                                Name (A-Z)
                                                            </option>
                                                            <option value={10}>
                                                                Price (Low &gt;
                                                                High)
                                                            </option>
                                                            <option value={10}>
                                                                Price (High&gt;
                                                                Low)
                                                            </option>
                                                            <option value={10}>
                                                                Price (High&gt;
                                                                Low)
                                                            </option>
                                                            <option value={10}>
                                                                Price (High&gt;
                                                                Low)
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4 col-xs-12">
                                            <div className="category-short">
                                                <div className="quantity-short">
                                                    <label htmlFor="viewby5">
                                                        Show
                                                        <select
                                                            name="#"
                                                            id="viewby5"
                                                        >
                                                            <option value={25}>
                                                                12
                                                            </option>
                                                            <option value={20}>
                                                                13
                                                            </option>
                                                        </select>
                                                        Per Page
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-3 col-xs-12">
                                            <div className="compare-items">
                                                <a href="compare.html">
                                                    <span>
                                                        Compare (0){" "}
                                                        <i
                                                            className="fa fa-angle-right"
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix" />
                            <div className="shop-mega-category">
                                <div className="tab-content">
                                    <div
                                        role="tabpanel"
                                        className="tab-pane active"
                                        id="productWidgets"
                                    >
                                        <div className="tab-content-wrapper">
                                            <div className="row">
                                                {products.map((product) => (
                                                    <div
                                                        className="col-md-4 col-sm-6 col-xs-12"
                                                        key={product.id}
                                                    >
                                                        <ProductCard
                                                            product={product}
                                                            toggleModal={
                                                                toggleModal
                                                            }
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        role="tabpanel"
                                        className="tab-pane"
                                        id="productList"
                                    >
                                        {products.map((product) => (
                                            <div
                                                key={product.id}
                                                className="tab-content-wrapper tab-listview"
                                            >
                                                <div className="row">
                                                    <div className="col-md-4 col-sm-6 col-xs-12">
                                                        <ProductCard
                                                            product={product}
                                                            toggleModal={
                                                                toggleModal
                                                            }
                                                            isHaveBottom={false}
                                                        />
                                                    </div>
                                                    <div className="col-md-8 col-sm-12 col-xs-12">
                                                        <div className="compare-content-wrap">
                                                            <div className="cmain-heading cmain-heading-tab2">
                                                                <h3>
                                                                    {product.title}
                                                                </h3>
                                                            </div>
                                                            <div className="compare-conpart">
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
                                                                            Google
                                                                            +
                                                                        </button>
                                                                        <button className=" btn btn-default com-pi">
                                                                            <i className="fa fa-pinterest" />{" "}
                                                                            Pinterest
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <div className="skill-rating skill-rating-tab2">
                                                                    <div className="rating-text">
                                                                        <span>
                                                                            Rating
                                                                        </span>
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
                                                                    <p>
                                                                        {product.description}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="compare-conpart-pm compare-tab2">
                                                                <div className="old-new-price">
                                                                    <span>
                                                                        $342.00{" "}
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
                                                                        <div className="skill-minus qtybutton">
                                                                            -
                                                                        </div>
                                                                        <input
                                                                            type="text"
                                                                            name="#"
                                                                            defaultValue={
                                                                                1
                                                                            }
                                                                            className="cart-plus-minus-box"
                                                                        />
                                                                        <div className="skill-plus qtybutton">
                                                                            +
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="skill-cart-option skill-sep posr">
                                                                    <a href="cart.html">
                                                                        <i className="fa fa-shopping-cart" />{" "}
                                                                        Add to
                                                                        cart
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/*Pagination*/}
                            {/* <div className="pagination-wrapper">
                                <div className="row">
                                    <div className="col-md-4 col-sm-4 col-xs-12">
                                        <div className="pagi-itemshow">
                                            <p>Showing 1 - 12 of 13 items</p>
                                        </div>
                                    </div>
                                    <div className="col-md-5 col-sm-5 col-xs-12">
                                        <div className="shop-pagination pagi-style1">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-angle-left" />
                                                    </a>
                                                </li>
                                                <li className="active">
                                                    <a href="#">1</a>
                                                </li>
                                                <li>
                                                    <a href="#">2</a>
                                                </li>
                                                <li>
                                                    <a href="#">3</a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-angle-right" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-3 col-xs-12">
                                        <div className="compare-items">
                                            <a href="compare.html">
                                                <span>
                                                    Compare (0){" "}
                                                    <i
                                                        className="fa fa-angle-right"
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const getStaticProps = async () => {
    const client = createClient();
    const { products } = await client.products.list();

    return {
        props: {
            products,
        },
    };
};
