import React, { useContext } from "react";
import Link from "next/link";
import StoreContext from "../context/store-context";
import { useRouter } from "next/router";
import DisplayContext from "../context/display-context";
import { get } from "lodash";
import { getStrapiMedia } from "../utils/media";
import { formatMoney } from "../utils/utils";

const routes = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Shop",
        path: "/shop",
    },
    {
        name: "About us",
        path: "/about",
    },
    {
        name: "Contact",
        path: "/contact",
    },
];

function Header() {
    const router = useRouter();

    const { cart, removeLineItem } = useContext(StoreContext);
    const { global } = useContext(DisplayContext);

    let numItems = 0;
    cart.items.forEach((item) => {
        numItems += item.quantity;
    });

    let grandTotal = 0;

    cart.items.forEach((item) => {
        grandTotal += item.quantity * item.unit_price;
    });

    console.log("cart", cart)

    return (
        <div className="header-area">
            <div className="header-topbar-area-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="header-login posr">
                                <ul>
                                    <li>
                                        <a href="login.html">
                                            {get(
                                                global,
                                                "attributes.contact_info.email"
                                            )}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div
                                className="header-login posr"
                                style={{
                                    float: "right",
                                }}
                            >
                                <ul>
                                    <li>
                                        <Link href={"/login"}>
                                            <a>Login</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-12">
                            <ul className="header-social-icon text-right">
                                <li>
                                    <a
                                        target={"_blank"}
                                        rel="noreferrer"
                                        href={get(
                                            global,
                                            "attributes.contact_info.facebook"
                                        )}
                                    >
                                        <i className="fa fa-facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={`mailto:${get(
                                            global,
                                            "attributes.contact_info.email"
                                        )}`}
                                    >
                                        <i className="fa fa-envelope" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-middle">
                {/* <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-3 col-xs-12">
                            <div className="header-logo">
                                <Link href="/">
                                    <a>
                                        <img
                                            src="images/logo_1.png"
                                            alt="domino"
                                        />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-9 col-sm-9 col-xs-12">
                            <div className="header-whishlist">
                                <div className="header-middle-phone">
                                    <span>
                                        <i className="fa fa-phone" />
                                        1-888-123-456-89
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="container">
                    <div
                        className=""
                        style={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <div className="">
                            <div className="header-logo">
                                <Link href="/">
                                    <a>
                                        <img
                                            src={getStrapiMedia(
                                                get(
                                                    global,
                                                    "attributes.main_logo"
                                                )
                                            )}
                                            alt="domino"
                                        />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*header main menu start*/}
            <div id="sticky-header" className="main-menu-wrapper hp1-menu">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 col-sm-10 hidden-xs">
                            <nav>
                                <ul className="main-menu">
                                    {routes.map((route) => (
                                        <li
                                            key={route.path}
                                            className={
                                                router.pathname === route.path
                                                    ? "active"
                                                    : ""
                                            }
                                        >
                                            <Link href={route.path}>
                                                <a>{route.name}</a>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                        <div className="col-md-3 col-sm-2 col-xs-12">
                            <div className="main-cart-area  cart-sticky-display posr">
                                <div className="header-search header-search-position posr">
                                    <form action="#">
                                        <input
                                            type="text"
                                            defaultValue
                                            placeholder="Search Product..."
                                        />
                                        <button type="submit">
                                            <i className="fa fa-search" />
                                        </button>
                                    </form>
                                </div>
                                <div className="header-cart-area cart-hover-effect">
                                    <Link href="/cart">
                                        <div className="shopping-cart style-shopping-bag strong-up">
                                            <a>
                                                <span>
                                                    <strong>
                                                        Shopping cart
                                                    </strong>
                                                </span>
                                            </a>
                                        </div>
                                    </Link>
                                    <div className="shopping-cart">
                                        <Link href="/cart">
                                            <a>
                                                <span className="cart-item">
                                                    {numItems} item(s)
                                                </span>
                                                <span className="cart-amount">
                                                    {" "}
                                                    - $0.00
                                                </span>
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="header-cart-box-wrapper cart-position-style1">
                                        {cart.items.map((item) => (
                                            <div
                                                key={item.id}
                                                className="single-cart-box"
                                            >
                                                <div className="cart-image">
                                                    <a
                                                        href={`/product/${item.variant.product.id}`}
                                                    >
                                                        <img
                                                            src={item.thumbnail}
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="cart-content">
                                                    <div className="cart-heading">
                                                        <a href="cart.html">
                                                            {" "}
                                                            <span className="cart-qty">
                                                                {item.quantity}{" "}
                                                                x
                                                            </span>{" "}
                                                            {item.title}
                                                        </a>
                                                    </div>
                                                    <div className="cart-dress-color">
                                                        <span>{item.variant.title}</span>
                                                    </div>
                                                    <div className="cart-price">
                                                        {formatMoney(
                                                            item.unit_price
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="cart-remove deft-remove-icon">
                                                    <a
                                                        href="#"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            removeLineItem(
                                                                item.id
                                                            );
                                                        }}
                                                    >
                                                        <i className="zmdi zmdi-close" />
                                                    </a>
                                                </div>
                                                {/* <div className="cart-shipping-cost">
                                                    <span className="shipping-text">
                                                        Shipping{" "}
                                                    </span>
                                                    <span className="shipping-amt">
                                                        $7.00
                                                    </span>
                                                </div> */}
                                            </div>
                                        ))}
                                        <div className="clearfix" />
                                        <div className="cart-subtotal">
                                            <span className="subttl-text">
                                                Grand total
                                            </span>
                                            <span className="subttl-amt">
                                                {formatMoney(grandTotal)}
                                            </span>
                                        </div>
                                        <div className="cart-checkout-btn btn-def-checkout">
                                            <Link href="/cart">
                                                <a>
                                                    Check out{" "}
                                                    <i className="checkout-dir-icon zmdi zmdi-chevron-right " />
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="mobile-menu-area hp1-mobile-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <nav className="active-mobile-menu">
                                    <ul>
                                        <li>
                                            <a href="index.html">Home</a>
                                            <ul>
                                                <li>
                                                    <a href="index.html">
                                                        Home-1
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="index2.html">
                                                        Home-2
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="index3.html">
                                                        Home-3
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="index4.html">
                                                        Home-4
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="index5.html">
                                                        Home-5
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="index6.html">
                                                        Home-6
                                                    </a>
                                                </li>
                                                <li className="lastli">
                                                    <a
                                                        href="index7.html"
                                                        target="_blank"
                                                    >
                                                        Home-7
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="shop.html">Shop</a>
                                            <ul>
                                                <li>
                                                    <a href="#">Shop Layouts</a>
                                                    <ul>
                                                        <li>
                                                            <a href="shop-fullwidth.html">
                                                                Fullwidth
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="shop.html">
                                                                Sidebar Left
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-right-sidebar.html">
                                                                Sidebar right
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-list-view.html">
                                                                List View
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-list-view-right.html">
                                                                List View right
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">Shop Pages</a>
                                                    <ul>
                                                        <li>
                                                            <a href="shop.html">
                                                                Category
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="my-account.html">
                                                                My Account
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="wishlist.html">
                                                                Wishlist
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="cart.html">
                                                                Shopping Cart
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="checkout.html">
                                                                Checkout
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Product Types
                                                    </a>
                                                    <ul>
                                                        <li>
                                                            <a href="single-product.html">
                                                                Single Product
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="shop.html">
                                                                Variable Product
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="shop.html">
                                                                Group Product
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="shop.html">
                                                                External Product
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="shop.html">
                                                                New Product
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="about.html">About Us</a>
                                        </li>
                                        <li>
                                            <a href="portfolio.html">
                                                Portfolio
                                            </a>
                                        </li>
                                        <li>
                                            <a href="blog.html">Blog</a>
                                            <ul>
                                                <li>
                                                    <a href="blog-right-sidebar.html">
                                                        Right Sidebar
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-fullwidth.html">
                                                        Fullwidth
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="single-blog-video.html">
                                                        Single Video
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="single-blog-audio.html">
                                                        Single Audio
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="single-blog-slider.html">
                                                        Single Gallery
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="single-blog.html">
                                                        Single Image
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Pages</a>
                                            <ul>
                                                <li>
                                                    <a href="#">Pages-01</a>
                                                    <ul>
                                                        <li>
                                                            <a href="about.html">
                                                                About us
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="404.html">
                                                                Page 404
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="portfolio.html">
                                                                Portfolio
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="portfolio2.html">
                                                                Portfolio2
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="single-product">
                                                                Single Product
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">Pages-02</a>
                                                    <ul>
                                                        <li>
                                                            <a href="blog-right-sidebar.html">
                                                                Right Sidebar
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="single-blog-video.html">
                                                                Single Video
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="single-blog-audio.html">
                                                                Single Audio
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="single-blog-slider.html">
                                                                Single Gallery
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="single-blog.html">
                                                                Single Image
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">Pages-03</a>
                                                    <ul>
                                                        <li>
                                                            <a href="cart.html">
                                                                Cart
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="address.html">
                                                                Address
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="checkout.html">
                                                                Checkout
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="payment.html">
                                                                Payment
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="shipping.html">
                                                                Shipping
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">Pages-04</a>
                                                    <ul>
                                                        <li>
                                                            <a href="my-account.html">
                                                                My Account
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="wishlist.html">
                                                                Wishlist
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="login.html">
                                                                login
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="shop.html">
                                                                Dresses
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="shop.html">
                                                                T-Shirts
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="contact.html">
                                                Contact Us
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            {/*header main menu end*/}
        </div>
    );
}

export default Header;
