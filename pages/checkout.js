import React from "react";
import BreadCrumb from "../components/BreadCrumb";

function checkout() {
    return (
        <div className="subpage-main-wrapper about-full">
            <BreadCrumb />
            <div className="checkout-main-area mb-75">
                <div className="container">
                    <div className="cart-checkout-tab">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="checkout-tab-top">
                                    <div className="checkout-top1">
                                        <div className="panel-group">
                                            <div className="panel panel-default tab1-wrapper">
                                                <div className="panel-heading cart-tab-headding">
                                                    <h4 className="panel-title checkout-title">
                                                        <img
                                                            src="images/icons/acc.jpg"
                                                            alt=""
                                                        />{" "}
                                                        Returning customer?{" "}
                                                        <a
                                                            data-toggle="collapse"
                                                            href="#collapse1"
                                                        >
                                                            Click here to login{" "}
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div
                                                    id="collapse1"
                                                    className="panel-collapse collapse tab2-panel-wrapper"
                                                >
                                                    <form
                                                        action="#"
                                                        method="POST"
                                                    >
                                                        <div className="panel-body">
                                                            <div className="cart-tab2-login-area">
                                                                <p>
                                                                    If you have
                                                                    shopped with
                                                                    us before,
                                                                    please enter
                                                                    your details
                                                                    in the boxes
                                                                    below. If
                                                                    you are a
                                                                    new customer
                                                                    please
                                                                    proceed to
                                                                    the Billing
                                                                    &amp;
                                                                    Shipping
                                                                    section.{" "}
                                                                </p>
                                                                <div className="cart-tab2-login-box">
                                                                    <label htmlFor="username">
                                                                        User
                                                                        Name or
                                                                        Email
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        placeholder="User Name"
                                                                        id="username"
                                                                    />
                                                                    <label htmlFor="username2">
                                                                        User
                                                                        Name or
                                                                        Email
                                                                    </label>
                                                                    <input
                                                                        type="password"
                                                                        placeholder="Your Password"
                                                                        id="username2"
                                                                    />
                                                                </div>
                                                                <div className="cart-tab2-bottom">
                                                                    <div className="submit">
                                                                        <button type="submit">
                                                                            Login
                                                                        </button>
                                                                    </div>
                                                                    <div className="checkbox-rember">
                                                                        <input
                                                                            type="checkbox"
                                                                            name="remember"
                                                                            defaultValue
                                                                        />{" "}
                                                                        Remember
                                                                        me
                                                                    </div>
                                                                    <div className="forgotten">
                                                                        <a
                                                                            href="#"
                                                                            title="Click here"
                                                                        >
                                                                            Forgotten
                                                                            password
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cart-checkout-tab">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="checkout-tab-top">
                                    <div className="checkout-top1">
                                        <div className="panel-group">
                                            <div className="panel panel-default tab1-wrapper">
                                                <div className="panel-heading cart-tab-headding">
                                                    <h4 className="panel-title checkout-title">
                                                        <img
                                                            src="images/icons/acc.jpg"
                                                            alt=""
                                                        />{" "}
                                                        Have a coupon?{" "}
                                                        <a
                                                            data-toggle="collapse"
                                                            href="#collapse2"
                                                        >
                                                            Click here to enter
                                                            your code{" "}
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div
                                                    id="collapse2"
                                                    className="panel-collapse collapse tab2-panel-wrapper"
                                                >
                                                    <form
                                                        action="#"
                                                        method="POST"
                                                    >
                                                        <div className="panel-body">
                                                            <div className="cart-btm-coupon-wrapper">
                                                                <div className="cart-coupon-middle mb-20">
                                                                    <input
                                                                        type="text"
                                                                        placeholder="Coupon Code"
                                                                    />
                                                                </div>
                                                                <div className="cart-coupon-bottom">
                                                                    <a
                                                                        className="btn-checkout"
                                                                        href
                                                                    >
                                                                        Apply
                                                                        Coupon
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cart-tab2-form">
                                        <div className="row">
                                            <div className="col-md-6 col-sm-12 col-xs-12">
                                                <div className="cart-tab2-register-heading mb-20">
                                                    <h4>Billing Details</h4>
                                                </div>
                                                <form action="#" method="POST">
                                                    <div className="cart-tab2-register-left">
                                                        <div className="row">
                                                            <div className="col-md-6 col-sm-6 col-xs-12 mb-20">
                                                                <div className="tab2-input-box">
                                                                    <label htmlFor="fname">
                                                                        First
                                                                        Name
                                                                        <em>
                                                                            *
                                                                        </em>
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="fname"
                                                                        placeholder="First Name"
                                                                        id="fname"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 col-sm-6 col-xs-12 mb-20">
                                                                <div className="tab2-input-box">
                                                                    <label htmlFor="lname">
                                                                        Last
                                                                        Name
                                                                        <em>
                                                                            *
                                                                        </em>
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="lname"
                                                                        placeholder="Last Name"
                                                                        id="lname"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-xs-12 mb-20">
                                                                <div className="tab2-input-box">
                                                                    <label htmlFor="cname">
                                                                        Company
                                                                        Name
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="cname"
                                                                        placeholder="Company Name"
                                                                        id="cname"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 col-sm-6 col-xs-12 mb-20">
                                                                <div className="tab2-input-box">
                                                                    <label htmlFor="email">
                                                                        Email
                                                                        Address
                                                                        <em>
                                                                            *
                                                                        </em>
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="email"
                                                                        placeholder="Email Address"
                                                                        id="email"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 col-sm-6 col-xs-12 mb-20">
                                                                <div className="tab2-input-box">
                                                                    <label htmlFor="phone">
                                                                        Phone
                                                                        Number
                                                                        <em>
                                                                            *
                                                                        </em>
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="phone"
                                                                        placeholder="Phone Number"
                                                                        id="phone"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-xs-12 mb-20">
                                                                <div className="tab2-input-box">
                                                                    <label htmlFor="country">
                                                                        Country
                                                                    </label>
                                                                    <select
                                                                        className="selectpicker tab2-select"
                                                                        name="country"
                                                                        id="country"
                                                                        data-live-search="true"
                                                                    >
                                                                        <option data-tokens="Bangladesh">
                                                                            Bangladesh
                                                                        </option>
                                                                        <option data-tokens="India">
                                                                            India
                                                                        </option>
                                                                        <option data-tokens="Pakistan">
                                                                            Pakistan
                                                                        </option>
                                                                        <option data-tokens="Pakistan">
                                                                            Pakistan
                                                                        </option>
                                                                        <option data-tokens="Srilanka">
                                                                            Srilanka
                                                                        </option>
                                                                        <option data-tokens="Nepal">
                                                                            Nepal
                                                                        </option>
                                                                        <option data-tokens="Butan">
                                                                            Butan
                                                                        </option>
                                                                        <option data-tokens="USA">
                                                                            USA
                                                                        </option>
                                                                        <option data-tokens="England">
                                                                            England
                                                                        </option>
                                                                        <option data-tokens="Brazil">
                                                                            Brazil
                                                                        </option>
                                                                        <option data-tokens="Canada">
                                                                            Canada
                                                                        </option>
                                                                        <option data-tokens="China">
                                                                            China
                                                                        </option>
                                                                        <option data-tokens="Koeria">
                                                                            Koeria
                                                                        </option>
                                                                        <option data-tokens="Soudi">
                                                                            Soudi
                                                                            Arabia
                                                                        </option>
                                                                        <option data-tokens="Spain">
                                                                            Spain
                                                                        </option>
                                                                        <option data-tokens="France">
                                                                            France
                                                                        </option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-xs-12 mb-20">
                                                                <div className="tab2-input-box">
                                                                    <input
                                                                        type="text"
                                                                        name="optional"
                                                                        placeholder="Apartment,suite, Unit etc (Optional)"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-xs-12 mb-20">
                                                                <div className="tab2-input-box">
                                                                    <label htmlFor="city">
                                                                        Town/City
                                                                        <em>
                                                                            *
                                                                        </em>
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="city"
                                                                        placeholder="Twon/City"
                                                                        id="city"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 col-sm-6 col-xs-12 mb-20">
                                                                <div className="tab2-input-box">
                                                                    <label>
                                                                        State/Division
                                                                        <em>
                                                                            *
                                                                        </em>
                                                                    </label>
                                                                    <select
                                                                        className="selectpicker tab2-select"
                                                                        data-live-search="true"
                                                                    >
                                                                        <option data-tokens="Barisal">
                                                                            Barisal
                                                                        </option>
                                                                        <option data-tokens="Dhaka">
                                                                            Dhaka
                                                                        </option>
                                                                        <option data-tokens="Kulna">
                                                                            Kulna
                                                                        </option>
                                                                        <option data-tokens="Rajshahi">
                                                                            Rajshahi
                                                                        </option>
                                                                        <option data-tokens="Sylet">
                                                                            Sylet
                                                                        </option>
                                                                        <option data-tokens="Chittagong">
                                                                            Chittagong
                                                                        </option>
                                                                        <option data-tokens="Rangpur">
                                                                            Rangpur
                                                                        </option>
                                                                        <option data-tokens="Maymanshing">
                                                                            Maymanshing
                                                                        </option>
                                                                        <option data-tokens="Cox">
                                                                            Cox's
                                                                            Bazar
                                                                        </option>
                                                                        <option data-tokens="Saint">
                                                                            Saint
                                                                            Martin
                                                                        </option>
                                                                        <option data-tokens="Kuakata">
                                                                            Kuakata
                                                                        </option>
                                                                        <option data-tokens="Sajeq">
                                                                            Sajeq
                                                                        </option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 col-sm-6 col-xs-12 mb-20">
                                                                <div className="tab2-input-box">
                                                                    <label htmlFor="zipcode">
                                                                        Post
                                                                        Code/Zip
                                                                        Code
                                                                        <em>
                                                                            *
                                                                        </em>
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="zipcode"
                                                                        placeholder="Post Code/Zip Code"
                                                                        id="zipcode"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-xs-12">
                                                                <div
                                                                    className="tab2-check mb-20"
                                                                    id="tab2-jq-click2"
                                                                >
                                                                    <input
                                                                        type="checkbox"
                                                                        name="check"
                                                                        id="check-last"
                                                                    />{" "}
                                                                    Create an
                                                                    Account ?
                                                                </div>
                                                                <div className="tab2-input-box mb-20 jquery-effect2">
                                                                    <p>
                                                                        Create
                                                                        an
                                                                        account
                                                                        by
                                                                        entering
                                                                        the
                                                                        information
                                                                        below.
                                                                        If you
                                                                        are a
                                                                        returning
                                                                        customer
                                                                        please
                                                                        login at
                                                                        the top
                                                                        of the
                                                                        page.{" "}
                                                                    </p>
                                                                    <label htmlFor="passwordLeft">
                                                                        Password
                                                                    </label>
                                                                    <input
                                                                        type="password"
                                                                        placeholder="Password"
                                                                        id="passwordLeft"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col-md-6 col-sm-12 col-xs-12">
                                                <div className="cart-tab2-right-wrapper ">
                                                    <form
                                                        action="#"
                                                        method="POST"
                                                    >
                                                        <div className="cart-tab2-top-part mb-20">
                                                            <div
                                                                className="cart-tab2-top mb-20"
                                                                id="tab2-jq-click"
                                                            >
                                                                <h4>
                                                                    <input
                                                                        type="checkbox"
                                                                        name="check"
                                                                    />{" "}
                                                                    Ship to a
                                                                    different
                                                                    address?{" "}
                                                                </h4>
                                                            </div>
                                                            <div className="cart-tab2-top cart-tab2-right-bottom jquery-effect">
                                                                <div className="cart-tab2-register-left">
                                                                    <div className="row">
                                                                        <div className="col-md-6 col-sm-6 col-xs-12 mb-20">
                                                                            <div className="tab2-input-box">
                                                                                <label htmlFor="fname2">
                                                                                    First
                                                                                    Name
                                                                                    <em>
                                                                                        *
                                                                                    </em>
                                                                                </label>
                                                                                <input
                                                                                    type="text"
                                                                                    name="fname"
                                                                                    placeholder="First Name"
                                                                                    id="fname2"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6 col-sm-6 col-xs-12 mb-20">
                                                                            <div className="tab2-input-box">
                                                                                <label htmlFor="lname2">
                                                                                    Last
                                                                                    Name
                                                                                    <em>
                                                                                        *
                                                                                    </em>
                                                                                </label>
                                                                                <input
                                                                                    type="text"
                                                                                    name="lname"
                                                                                    placeholder="Last Name"
                                                                                    id="lname2"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-xs-12 mb-20">
                                                                            <div className="tab2-input-box">
                                                                                <label htmlFor="cname2">
                                                                                    Company
                                                                                    Name
                                                                                </label>
                                                                                <input
                                                                                    type="text"
                                                                                    name="cname"
                                                                                    placeholder="Company Name"
                                                                                    id="cname2"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6 col-sm-6 col-xs-12 mb-20">
                                                                            <div className="tab2-input-box">
                                                                                <label htmlFor="email2">
                                                                                    Email
                                                                                    Address
                                                                                    <em>
                                                                                        *
                                                                                    </em>
                                                                                </label>
                                                                                <input
                                                                                    type="text"
                                                                                    name="email"
                                                                                    placeholder="Email Address"
                                                                                    id="email2"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6 col-sm-6 col-xs-12 mb-20">
                                                                            <div className="tab2-input-box">
                                                                                <label htmlFor="phone2">
                                                                                    Phone
                                                                                    Number
                                                                                    <em>
                                                                                        *
                                                                                    </em>
                                                                                </label>
                                                                                <input
                                                                                    type="text"
                                                                                    name="phone"
                                                                                    placeholder="Phone Number"
                                                                                    id="phone2"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-xs-12 mb-20">
                                                                            <div className="tab2-input-box">
                                                                                <label htmlFor="country2">
                                                                                    Country
                                                                                </label>
                                                                                <select
                                                                                    className="selectpicker tab2-select"
                                                                                    name="country"
                                                                                    id="country2"
                                                                                    data-live-search="true"
                                                                                >
                                                                                    <option data-tokens="Bangladesh">
                                                                                        Bangladesh
                                                                                    </option>
                                                                                    <option data-tokens="India">
                                                                                        India
                                                                                    </option>
                                                                                    <option data-tokens="Pakistan">
                                                                                        Pakistan
                                                                                    </option>
                                                                                    <option data-tokens="Pakistan">
                                                                                        Pakistan
                                                                                    </option>
                                                                                    <option data-tokens="Srilanka">
                                                                                        Srilanka
                                                                                    </option>
                                                                                    <option data-tokens="Nepal">
                                                                                        Nepal
                                                                                    </option>
                                                                                    <option data-tokens="Butan">
                                                                                        Butan
                                                                                    </option>
                                                                                    <option data-tokens="USA">
                                                                                        USA
                                                                                    </option>
                                                                                    <option data-tokens="England">
                                                                                        England
                                                                                    </option>
                                                                                    <option data-tokens="Brazil">
                                                                                        Brazil
                                                                                    </option>
                                                                                    <option data-tokens="Canada">
                                                                                        Canada
                                                                                    </option>
                                                                                    <option data-tokens="China">
                                                                                        China
                                                                                    </option>
                                                                                    <option data-tokens="Koeria">
                                                                                        Koeria
                                                                                    </option>
                                                                                    <option data-tokens="Soudi">
                                                                                        Soudi
                                                                                        Arabia
                                                                                    </option>
                                                                                    <option data-tokens="Spain">
                                                                                        Spain
                                                                                    </option>
                                                                                    <option data-tokens="France">
                                                                                        France
                                                                                    </option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-xs-12 mb-20">
                                                                            <div className="tab2-input-box">
                                                                                <input
                                                                                    type="text"
                                                                                    name="optional"
                                                                                    placeholder="Apartment,suite, Unit etc (Optional)"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-xs-12 mb-20">
                                                                            <div className="tab2-input-box">
                                                                                <label htmlFor="city2">
                                                                                    Town/City
                                                                                    <em>
                                                                                        *
                                                                                    </em>
                                                                                </label>
                                                                                <input
                                                                                    type="text"
                                                                                    name="city"
                                                                                    placeholder="Twon/City"
                                                                                    id="city2"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6 col-sm-6 col-xs-12 mb-20">
                                                                            <div className="tab2-input-box">
                                                                                <label>
                                                                                    State/Division
                                                                                    <em>
                                                                                        *
                                                                                    </em>
                                                                                </label>
                                                                                <select
                                                                                    className="selectpicker tab2-select"
                                                                                    data-live-search="true"
                                                                                >
                                                                                    <option data-tokens="Barisal">
                                                                                        Barisal
                                                                                    </option>
                                                                                    <option data-tokens="Dhaka">
                                                                                        Dhaka
                                                                                    </option>
                                                                                    <option data-tokens="Kulna">
                                                                                        Kulna
                                                                                    </option>
                                                                                    <option data-tokens="Rajshahi">
                                                                                        Rajshahi
                                                                                    </option>
                                                                                    <option data-tokens="Sylet">
                                                                                        Sylet
                                                                                    </option>
                                                                                    <option data-tokens="Chittagong">
                                                                                        Chittagong
                                                                                    </option>
                                                                                    <option data-tokens="Rangpur">
                                                                                        Rangpur
                                                                                    </option>
                                                                                    <option data-tokens="Maymanshing">
                                                                                        Maymanshing
                                                                                    </option>
                                                                                    <option data-tokens="Cox">
                                                                                        Cox's
                                                                                        Bazar
                                                                                    </option>
                                                                                    <option data-tokens="Saint">
                                                                                        Saint
                                                                                        Martin
                                                                                    </option>
                                                                                    <option data-tokens="Kuakata">
                                                                                        Kuakata
                                                                                    </option>
                                                                                    <option data-tokens="Sajeq">
                                                                                        Sajeq
                                                                                    </option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6 col-sm-6 col-xs-12 mb-20">
                                                                            <div className="tab2-input-box">
                                                                                <label htmlFor="zipcode2">
                                                                                    Post
                                                                                    Code/Zip
                                                                                    Code
                                                                                    <em>
                                                                                        *
                                                                                    </em>
                                                                                </label>
                                                                                <input
                                                                                    type="text"
                                                                                    name="zipcode"
                                                                                    placeholder="Post Code/Zip Code"
                                                                                    id="zipcode2"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="your-order-wrap">
                                                                <div className="your-order-title text-uppercase">
                                                                    <h3>
                                                                        Your
                                                                        Order
                                                                    </h3>
                                                                </div>
                                                                <table className="table table-bordered order-table">
                                                                    <thead className="order-thead">
                                                                        <tr>
                                                                            <th className="order-th1 order-theight">
                                                                                Product
                                                                            </th>
                                                                            <th className="order-th1 order-theight">
                                                                                Total
                                                                            </th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td className="order-theight">
                                                                                Aenean
                                                                                eu
                                                                                tristique
                                                                                ×
                                                                                1
                                                                            </td>
                                                                            <td className="order-theight">
                                                                                $90
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="order-theight">
                                                                                Dignissim
                                                                                venenatis
                                                                                ×
                                                                                1
                                                                            </td>
                                                                            <td className="order-theight">
                                                                                $90
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th className="order-th1 order-theight">
                                                                                Cart
                                                                                Subtotal
                                                                            </th>
                                                                            <th className="order-th1 order-theight order-subtitle">
                                                                                $180
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th className="order-th1 order-theight">
                                                                                Shipping
                                                                            </th>
                                                                            <th className="order-th1 order-theight text-capsmall">
                                                                                <ul>
                                                                                    <li>
                                                                                        <input type="radio" />{" "}
                                                                                        Flat
                                                                                        Rate:
                                                                                        $3
                                                                                    </li>
                                                                                    <li>
                                                                                        <input type="radio" />{" "}
                                                                                        Free
                                                                                        Shipping
                                                                                    </li>
                                                                                </ul>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th className="order-th1 order-theight ototal1">
                                                                                Order
                                                                                Total
                                                                            </th>
                                                                            <th className="order-th1 order-theight ototal2">
                                                                                $183
                                                                            </th>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                            <div className="payment-detail">
                                                                <ul className="mode-of-payment">
                                                                    <li>
                                                                        <input
                                                                            type="radio"
                                                                            name="payment"
                                                                        />{" "}
                                                                        Direct
                                                                        Bank
                                                                        Transfer{" "}
                                                                    </li>
                                                                    <li>
                                                                        <input
                                                                            type="radio"
                                                                            name="payment"
                                                                        />{" "}
                                                                        Cheque
                                                                        Payments
                                                                    </li>
                                                                    <li>
                                                                        <input
                                                                            type="radio"
                                                                            name="payment"
                                                                        />{" "}
                                                                        Cash on
                                                                        Delivery
                                                                    </li>
                                                                    <li>
                                                                        <input
                                                                            type="radio"
                                                                            name="payment"
                                                                        />{" "}
                                                                        PayPal{" "}
                                                                        <img
                                                                            src="images/icons/paypal.png"
                                                                            alt=""
                                                                        />{" "}
                                                                        <a href="#">
                                                                            What
                                                                            is
                                                                            PayPal?
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="cart-tab2-top cart-tab2-text-area">
                                                                <label htmlFor="order-note">
                                                                    Order Notes
                                                                </label>
                                                                <textarea
                                                                    name="#"
                                                                    placeholder="Notes about your order, e.g. special notes for delivery."
                                                                    id="order-note"
                                                                    defaultValue={
                                                                        ""
                                                                    }
                                                                />
                                                            </div>
                                                            <div className="oerder-submission">
                                                                <a
                                                                    href="cart.html"
                                                                    className="order-btn-large"
                                                                >
                                                                    Place Order
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </form>
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

export default checkout;
