import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import StoreContext from "../context/store-context";
import { useRouter } from "next/router";
import DisplayContext from "../context/display-context";
import { get } from "lodash";
import { getStrapiMedia } from "../utils/media";
import { formatMoney } from "../utils/utils";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

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
        name: "Brochure",
        path: "https://drive.google.com/file/d/1zL9SlQwM5vSxHkG6N1NRSFmTX1ntL78E/preview",
        // path: "/brochure",
    },
    // {
    //     name: "Retailers",
    //     path: "/retailer",
    // },
    // {
    //     name: "Contact",
    //     path: "/contact",
    // },
];

const routes2 = [
    // {
    //     name: "Retailers",
    //     path: "/retailer",
    // },
    // {
    //     name: "Contact",
    //     path: "/contact",
    // },
    {
        name: "About us",
        path: "/about",
    },
    {
        name: "Our Policy",
        path: "/policy",
    },
];

function Header() {
    const router = useRouter();

    const { cart, removeLineItem, updateLineItem } = useContext(StoreContext);
    const { cartView, updateCartViewDisplay } = useContext(DisplayContext);
    const { global } = useContext(DisplayContext);

    const [toggledMenu, setToggledMenu] = useState(false);

    const handleChangeQuantity = (lineId, quantity) => {
        console.log(quantity);
        updateLineItem({
            lineId,
            quantity,
        });
    };

    useEffect(() => {
        if (toggledMenu) {
            setToggledMenu(false);
        }
    }, [router.asPath]);

    // const [isOpen, setIsOpen] = React.useState(false)

    let numItems = 0;
    cart.items.forEach((item) => {
        numItems += item.quantity;
    });

    let grandTotal = 0;

    cart.items.forEach((item) => {
        grandTotal += item.quantity * item.unit_price;
    });

    console.log("cart", cart);

    return (
        <div className="header-area">
            <Drawer
                open={cartView}
                onClose={updateCartViewDisplay}
                direction="right"
                className="my-drawer"
                style={{
                    width: 400,
                    borderLeft: "2px solid black",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    maxWidth: "100%",
                }}
            >
                <div>
                    <div className="bag-header">
                        <h3>MY BAG</h3>
                        <img
                            src="/images/icons/close.png"
                            alt="close"
                            onClick={updateCartViewDisplay}
                        />
                    </div>
                    <div className="bag-body">
                        {cart.items.map((item) => (
                            <div key={item.id} className="bag-item">
                                <div className="bag-item__thumbnail">
                                    <img src={item.thumbnail} alt="product" />
                                </div>
                                <div className="bag-item__content">
                                    <div className="bag-item__top">
                                        <div className="bag-item__title">
                                            {item.title}
                                        </div>
                                        <div
                                            className="bag-item__remove"
                                            onClick={() => {
                                                removeLineItem(item.id);
                                            }}
                                        >
                                            Remove
                                        </div>
                                    </div>
                                    <div className="bag-item__bottom">
                                        <div className="bag-item__quantity">
                                            <div className="skill-plusminus-wrap tiny">
                                                <div className="skill-plusminus">
                                                    <div
                                                        className="skill-minus qtybutton"
                                                        onClick={() =>
                                                            handleChangeQuantity(
                                                                item.id,
                                                                item.quantity -
                                                                    1
                                                            )
                                                        }
                                                    >
                                                        -
                                                    </div>
                                                    <input
                                                        type="number"
                                                        name="#"
                                                        className="cart-plus-minus-box"
                                                        // defaultValue={item.quantity}
                                                        value={item.quantity}
                                                        onChange={(e) =>
                                                            handleChangeQuantity(
                                                                item.id,
                                                                parseInt(
                                                                    e.target
                                                                        .value
                                                                )
                                                            )
                                                        }
                                                    />
                                                    <div
                                                        className="skill-plus qtybutton"
                                                        onClick={(e) =>
                                                            handleChangeQuantity(
                                                                item.id,
                                                                item.quantity +
                                                                    1
                                                            )
                                                        }
                                                    >
                                                        +
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bag-item__price">
                                            {formatMoney(item.unit_price)}{" "}
                                            {item.quantity > 1
                                                ? `x${item.quantity}`
                                                : ""}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="bag-subtotal">
                        <div className="bag-subtotal__title">SUBTOTAL:</div>
                        <div className="bag-subtotal__price">
                            {formatMoney(grandTotal)}
                        </div>
                    </div>
                    <div
                        className="bag-checkout"
                        onClick={() => {
                            router.push("/cart");
                            updateCartViewDisplay();
                        }}
                    >
                        CHECKOUT{" "}
                        <img
                            src="/images/icons/checkout-2.png"
                            alt="checkout icon"
                        />
                    </div>
                </div>
            </Drawer>
            {/* <div className="header-topbar-area-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <ul className="header-login posr text-left">
                                <li>
                                    <Link href={"/policy"}>
                                        <a>OUR POLICY</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12"></div>
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
                                        target={"_blank"}
                                        rel="noreferrer"
                                        href={get(
                                            global,
                                            "attributes.contact_info.insta"
                                        )}
                                    >
                                        <i className="zmdi zmdi-instagram" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> */}
            <div id="sticky-header" className="main-menu-wrapper hp1-menu">
                <div className="container">
                    <div
                        className="row"
                        style={{
                            alignItems: "center",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <div className="col-md-5 col-sm-10 hidden-xs">
                            <nav>
                                <ul
                                    className="main-menu"
                                    style={{
                                        display: "flex",
                                        justifyContent: "start",
                                    }}
                                >
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
                        <div className="col-md-2">
                            <div
                                className="header-logo"
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <Link href="/">
                                    <a>
                                        <img
                                            style={{
                                                width: "75px",
                                            }}
                                            src="http://cms.signedcontract.vn/uploads/SIGNED_CONTRACT_LOGO_BLACK_306338a45d.png"
                                            // src={getStrapiMedia(
                                            //     get(
                                            //         global,
                                            //         "attributes.main_logo"
                                            //     )
                                            // )}
                                            alt="domino"
                                        />
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-md-5 col-sm-10 hidden-xs">
                            <nav>
                                <ul
                                    className="main-menu"
                                    style={{
                                        display: "flex",
                                        justifyContent: "end",
                                        WebkitJustifyContent: "flex-end",
                                    }}
                                >
                                    {routes2.map((route) => (
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
                                    <li
                                        className="my-bag-header"
                                        onClick={updateCartViewDisplay}
                                        style={{
                                            cursor: "pointer",
                                        }}
                                    >
                                        <a>My bag ({numItems}) </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="mobile-menu-area hp1-mobile-area">
                    <div className="mean-container">
                        <div className="mean-bar">
                            <a
                                href="#nav"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setToggledMenu(!toggledMenu);
                                }}
                                className="meanmenu-reveal"
                                style={{
                                    background: "",
                                    color: "",
                                    right: 0,
                                    left: "auto",
                                    fontSize: "18px",
                                    textIndent: "0px",
                                }}
                            >
                                {toggledMenu ? (
                                    "X"
                                ) : (
                                    <>
                                        <span />
                                        <span />
                                        <span />
                                    </>
                                )}
                            </a>
                            <nav className="mean-nav">
                                <ul
                                    style={{
                                        display: toggledMenu ? "block" : "none",
                                    }}
                                >
                                    {routes.map((route, i) => (
                                        <li key={i}>
                                            <Link href={route.path}>
                                                <a>{route.name}</a>
                                            </Link>
                                        </li>
                                    ))}
                                    {routes2.map((route, i) => (
                                        <li key={i}>
                                            <Link href={route.path}>
                                                <a>{route.name}</a>
                                            </Link>
                                        </li>
                                    ))}

                                    <li
                                        className="my-bag-header"
                                        onClick={updateCartViewDisplay}
                                        style={{
                                            cursor: "pointer",
                                        }}
                                    >
                                        <a>My bag ({numItems}) </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="row" style={{
                            margin: 0
                        }}>
                            <div className="col-xs-12">
                                <div className="mean-push" />
                                <nav
                                    className="active-mobile-menu"
                                    style={{ display: "none" }}
                                >
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
                </div>
            </div>
            {/*header main menu end*/}
        </div>
    );
}

export default Header;
