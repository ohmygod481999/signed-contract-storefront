import React, { useContext, useEffect, useState } from "react";
import StoreContext from "../context/store-context";
import ProductCard from "./ProductCard";

function ProductArea({ products }) {
    return (
        <div className="new-arrival-product-area hp1-napa pt-60">
            <div className="container">
                <div className="row">
                    <div className="product-tab-category-wrapper">
                        <div className="col-xs-12">
                            <div className="home-product-tab-category text-center">
                                <div className="section-title title-head">
                                    <h3>Our Products</h3>
                                    <img
                                        src="images/icons/icon-title.png"
                                        alt=""
                                    />
                                </div>
                                <div className="product-tab-cat">
                                    <ul className="nav-tab" role="tablist">
                                        <li
                                            role="presentation"
                                            className="active"
                                        >
                                            <a
                                                href="#newArrival"
                                                aria-controls="newArrival"
                                                role="tab"
                                                data-toggle="tab"
                                            >
                                                New Arrival
                                            </a>
                                        </li>
                                        <li role="presentation">
                                            <a
                                                href="#onSale"
                                                aria-controls="onSale"
                                                role="tab"
                                                data-toggle="tab"
                                            >
                                                Onsale
                                            </a>
                                        </li>
                                        <li role="presentation">
                                            <a
                                                href="#featured"
                                                aria-controls="featured"
                                                role="tab"
                                                data-toggle="tab"
                                            >
                                                Featured Products
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix" />
                        <div className="product-conttab-wrapper">
                            <div className="tab-content">
                                <div
                                    role="tabpanel"
                                    className="tab-pane active"
                                    id="newArrival"
                                >
                                    <div className="active-owl-product def-owl">
                                        {(products || []).map((product) => (
                                            <div
                                                className="col-md-3"
                                                key={product.id}
                                            >
                                                <ProductCard
                                                    product={product}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div
                                    role="tabpanel"
                                    className="tab-pane"
                                    id="onSale"
                                >
                                    <div className="active-owl-product def-owl">
                                        <div className="col-md-3">
                                            <div className="single-product">
                                                <div className="product-wrapper posr">
                                                    <div className="product-label">
                                                        <div className="label-sale">
                                                            Sale
                                                        </div>
                                                    </div>
                                                    <div className="priduct-img-wrapper posr">
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img
                                                                    src="images/product/p8.jpg"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="product-inner-text">
                                                            <div className="product-social-icon social-icon">
                                                                <ul>
                                                                    <li>
                                                                        <a href="cart.html">
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
                                                                        quick
                                                                        View
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
                                                            <a
                                                                href="#"
                                                                title="Eodem modo typi"
                                                            >
                                                                <h4>
                                                                    Eodem modo
                                                                    typi
                                                                </h4>
                                                            </a>
                                                        </div>
                                                        <div className="product-bottom-price">
                                                            <span>$450.00</span>{" "}
                                                            <del>$500.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="single-product">
                                                <div className="product-wrapper posr">
                                                    <div className="product-label">
                                                        <div className="label-sale">
                                                            Sale
                                                        </div>
                                                    </div>
                                                    <div className="priduct-img-wrapper posr">
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img
                                                                    src="images/product/p2.jpg"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="product-inner-text">
                                                            <div className="product-social-icon social-icon">
                                                                <ul>
                                                                    <li>
                                                                        <a href="cart.html">
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
                                                                        quick
                                                                        View
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-review">
                                                        <ul className="light-color">
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
                                                            <a
                                                                href="#"
                                                                title="Mirum est notare"
                                                            >
                                                                <h4>
                                                                    Mirum est
                                                                    notare
                                                                </h4>
                                                            </a>
                                                        </div>
                                                        <div className="product-bottom-price">
                                                            <span>$360.00</span>{" "}
                                                            <del>$342.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="single-product">
                                                <div className="product-wrapper posr">
                                                    <div className="product-label">
                                                        <div className="label-sale">
                                                            Sale
                                                        </div>
                                                    </div>
                                                    <div className="priduct-img-wrapper posr">
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img
                                                                    src="images/product/p3.jpg"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="product-inner-text">
                                                            <div className="product-social-icon social-icon">
                                                                <ul>
                                                                    <li>
                                                                        <a href="cart.html">
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
                                                                        quick
                                                                        View
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-review">
                                                        <ul className="light-color">
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
                                                            <a
                                                                href="#"
                                                                title="Fiant sollemnes"
                                                            >
                                                                <h4>
                                                                    fiant
                                                                    sollemnes
                                                                </h4>
                                                            </a>
                                                        </div>
                                                        <div className="product-bottom-price">
                                                            <span>$332.00</span>{" "}
                                                            <del>$350.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="single-product">
                                                <div className="product-wrapper posr">
                                                    <div className="product-label">
                                                        <div className="label-sale">
                                                            Sale
                                                        </div>
                                                    </div>
                                                    <div className="priduct-img-wrapper posr">
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img
                                                                    src="images/product/p9.jpg"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="product-inner-text">
                                                            <div className="product-social-icon social-icon">
                                                                <ul>
                                                                    <li>
                                                                        <a href="cart.html">
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
                                                                        quick
                                                                        View
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
                                                            <a
                                                                href="#"
                                                                title="Fiant sollemnes"
                                                            >
                                                                <h4>
                                                                    fiant
                                                                    sollemnes
                                                                </h4>
                                                            </a>
                                                        </div>
                                                        <div className="product-bottom-price">
                                                            <span>$385.00</span>{" "}
                                                            <del>$300.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="single-product">
                                                <div className="product-wrapper posr">
                                                    <div className="product-label">
                                                        <div className="label-sale">
                                                            Sale
                                                        </div>
                                                    </div>
                                                    <div className="priduct-img-wrapper posr">
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img
                                                                    src="images/product/p11.jpg"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="product-inner-text">
                                                            <div className="product-social-icon social-icon">
                                                                <ul>
                                                                    <li>
                                                                        <a href="cart.html">
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
                                                                        quick
                                                                        View
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-review">
                                                        <ul className="light-color">
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
                                                            <a
                                                                href="#"
                                                                title="Placerat facer"
                                                            >
                                                                <h4>
                                                                    placerat
                                                                    facer
                                                                </h4>
                                                            </a>
                                                        </div>
                                                        <div className="product-bottom-price">
                                                            <span>$210.00</span>{" "}
                                                            <del>$222.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="single-product">
                                                <div className="product-wrapper posr">
                                                    <div className="product-label">
                                                        <div className="label-sale">
                                                            Sale
                                                        </div>
                                                    </div>
                                                    <div className="priduct-img-wrapper posr">
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img
                                                                    src="images/product/p12.jpg"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="product-inner-text">
                                                            <div className="product-social-icon social-icon">
                                                                <ul>
                                                                    <li>
                                                                        <a href="cart.html">
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
                                                                        quick
                                                                        View
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-review">
                                                        <ul className="light-color">
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
                                                            <a
                                                                href="#"
                                                                title="Fiant sollemnes"
                                                            >
                                                                <h4>
                                                                    fiant
                                                                    sollemnes
                                                                </h4>
                                                            </a>
                                                        </div>
                                                        <div className="product-bottom-price">
                                                            <span>$160.00</span>{" "}
                                                            <del>$152.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    role="tabpanel"
                                    className="tab-pane"
                                    id="featured"
                                >
                                    <div className="active-owl-product def-owl">
                                        <div className="col-md-3">
                                            <div className="single-product">
                                                <div className="product-wrapper posr">
                                                    <div className="product-label">
                                                        <div className="label-sale">
                                                            New
                                                        </div>
                                                    </div>
                                                    <div className="priduct-img-wrapper posr">
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img
                                                                    src="images/product/p1.jpg"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="product-inner-text">
                                                            <div className="product-social-icon social-icon">
                                                                <ul>
                                                                    <li>
                                                                        <a href="cart.html">
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
                                                                        quick
                                                                        View
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
                                                            <a
                                                                href="#"
                                                                title="Mirum est notare"
                                                            >
                                                                <h4>
                                                                    Mirum est
                                                                    notare
                                                                </h4>
                                                            </a>
                                                        </div>
                                                        <div className="product-bottom-price">
                                                            <span>$260.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="single-product">
                                                <div className="product-wrapper posr">
                                                    <div className="product-label">
                                                        <div className="label-sale">
                                                            New
                                                        </div>
                                                    </div>
                                                    <div className="priduct-img-wrapper posr">
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img
                                                                    src="images/product/p2.jpg"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="product-inner-text">
                                                            <div className="product-social-icon social-icon">
                                                                <ul>
                                                                    <li>
                                                                        <a href="cart.html">
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
                                                                        quick
                                                                        View
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-review">
                                                        <ul className="light-color">
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
                                                            <a
                                                                href="#"
                                                                title="Typi non habent"
                                                            >
                                                                <h4>
                                                                    Typi non
                                                                    habent
                                                                </h4>
                                                            </a>
                                                        </div>
                                                        <div className="product-bottom-price">
                                                            <span>$180.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="single-product">
                                                <div className="product-wrapper posr">
                                                    <div className="product-label">
                                                        <div className="label-sale">
                                                            Sale
                                                        </div>
                                                    </div>
                                                    <div className="priduct-img-wrapper posr">
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img
                                                                    src="images/product/p3.jpg"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="product-inner-text">
                                                            <div className="product-social-icon social-icon">
                                                                <ul>
                                                                    <li>
                                                                        <a href="cart.html">
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
                                                                        quick
                                                                        View
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
                                                            <a
                                                                href="#"
                                                                title="Eodem modo typi"
                                                            >
                                                                <h4>
                                                                    Eodem modo
                                                                    typi
                                                                </h4>
                                                            </a>
                                                        </div>
                                                        <div className="product-bottom-price">
                                                            <span>$450.00</span>{" "}
                                                            <del>$500.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="single-product">
                                                <div className="product-wrapper posr">
                                                    <div className="product-label">
                                                        <div className="label-sale">
                                                            Sale
                                                        </div>
                                                    </div>
                                                    <div className="priduct-img-wrapper posr">
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img
                                                                    src="images/product/p4.jpg"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="product-inner-text">
                                                            <div className="product-social-icon social-icon">
                                                                <ul>
                                                                    <li>
                                                                        <a href="cart.html">
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
                                                                        quick
                                                                        View
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-review">
                                                        <ul className="light-color">
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
                                                            <a
                                                                href="#"
                                                                title="Fiant sollemnes"
                                                            >
                                                                <h4>
                                                                    fiant
                                                                    sollemnes
                                                                </h4>
                                                            </a>
                                                        </div>
                                                        <div className="product-bottom-price">
                                                            <span>$285.00</span>{" "}
                                                            <del>$300.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="single-product">
                                                <div className="product-wrapper posr">
                                                    <div className="product-label">
                                                        <div className="label-sale">
                                                            New
                                                        </div>
                                                    </div>
                                                    <div className="priduct-img-wrapper posr">
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img
                                                                    src="images/product/p5.jpg"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="product-inner-text">
                                                            <div className="product-social-icon social-icon">
                                                                <ul>
                                                                    <li>
                                                                        <a href="cart.html">
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
                                                                        quick
                                                                        View
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
                                                            <a
                                                                href="#"
                                                                title="Mirum est notare"
                                                            >
                                                                <h4>
                                                                    Mirum est
                                                                    notare
                                                                </h4>
                                                            </a>
                                                        </div>
                                                        <div className="product-bottom-price">
                                                            <span>$320.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="single-product">
                                                <div className="product-wrapper posr">
                                                    <div className="product-label">
                                                        <div className="label-sale">
                                                            Sale
                                                        </div>
                                                    </div>
                                                    <div className="priduct-img-wrapper posr">
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img
                                                                    src="images/product/p7.jpg"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="product-inner-text">
                                                            <div className="product-social-icon social-icon">
                                                                <ul>
                                                                    <li>
                                                                        <a href="cart.html">
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
                                                                        quick
                                                                        View
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-review">
                                                        <ul className="light-color">
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
                                                            <a
                                                                href="#"
                                                                title="Fiant sollemnes"
                                                            >
                                                                <h4>
                                                                    placerat
                                                                    facer
                                                                </h4>
                                                            </a>
                                                        </div>
                                                        <div className="product-bottom-price">
                                                            <span>$210.00</span>{" "}
                                                            <del>$222.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="single-product">
                                                <div className="product-wrapper posr">
                                                    <div className="product-label">
                                                        <div className="label-sale">
                                                            New
                                                        </div>
                                                    </div>
                                                    <div className="priduct-img-wrapper posr">
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img
                                                                    src="images/product/p8.jpg"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="product-inner-text">
                                                            <div className="product-social-icon social-icon">
                                                                <ul>
                                                                    <li>
                                                                        <a href="cart.html">
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
                                                                        quick
                                                                        View
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
                                                            <a
                                                                href="#"
                                                                title="Soluta nobis"
                                                            >
                                                                <h4>
                                                                    soluta nobis
                                                                </h4>
                                                            </a>
                                                        </div>
                                                        <div className="product-bottom-price">
                                                            <span>$160.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="single-product">
                                                <div className="product-wrapper posr">
                                                    <div className="product-label">
                                                        <div className="label-sale">
                                                            New
                                                        </div>
                                                    </div>
                                                    <div className="priduct-img-wrapper posr">
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img
                                                                    src="images/product/p9.jpg"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="product-inner-text">
                                                            <div className="product-social-icon social-icon">
                                                                <ul>
                                                                    <li>
                                                                        <a href="cart.html">
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
                                                                        quick
                                                                        View
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
                                                            <a
                                                                href="#"
                                                                title="Typi non habent"
                                                            >
                                                                <h4>
                                                                    Typi non
                                                                    habent
                                                                </h4>
                                                            </a>
                                                        </div>
                                                        <div className="product-bottom-price">
                                                            <span>$260.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="single-product">
                                                <div className="product-wrapper posr">
                                                    <div className="product-label">
                                                        <div className="label-sale">
                                                            New
                                                        </div>
                                                    </div>
                                                    <div className="priduct-img-wrapper posr">
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img
                                                                    src="images/product/p10.jpg"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="product-inner-text">
                                                            <div className="product-social-icon social-icon">
                                                                <ul>
                                                                    <li>
                                                                        <a href="cart.html">
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
                                                                        quick
                                                                        View
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-review">
                                                        <ul className="light-color">
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
                                                            <a
                                                                href="#"
                                                                title="Eodem modo typi"
                                                            >
                                                                <h4>
                                                                    Eodem modo
                                                                    typi
                                                                </h4>
                                                            </a>
                                                        </div>
                                                        <div className="product-bottom-price">
                                                            <span>$230.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="single-product">
                                                <div className="product-wrapper posr">
                                                    <div className="product-label">
                                                        <div className="label-sale">
                                                            Sale
                                                        </div>
                                                    </div>
                                                    <div className="priduct-img-wrapper posr">
                                                        <div className="product-img">
                                                            <a href="single-product.html">
                                                                <img
                                                                    src="images/product/p11.jpg"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="product-inner-text">
                                                            <div className="product-social-icon social-icon">
                                                                <ul>
                                                                    <li>
                                                                        <a href="cart.html">
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
                                                                        quick
                                                                        View
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
                                                            <a
                                                                href="#"
                                                                title="Fiant sollemnes"
                                                            >
                                                                <h4>
                                                                    fiant
                                                                    sollemnes
                                                                </h4>
                                                            </a>
                                                        </div>
                                                        <div className="product-bottom-price">
                                                            <span>$332.00</span>{" "}
                                                            <del>$350.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductArea;
