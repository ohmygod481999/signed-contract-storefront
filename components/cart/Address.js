import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import StoreContext from "../../context/store-context";
import CartList from "./CartList";

function Address({ isProcessing, handleShippingSubmit, handleDeliverySubmit }) {
    const { cart, getShippingOptions } = useContext(StoreContext);
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        console.log(cart.shipping_address);
        if (cart.shipping_address) {
            const {
                first_name,
                last_name,
                phone,
                address_1,
                country_code,
                city,
                postal_code,
            } = cart.shipping_address;
            const { email } = cart;
            setValue("first_name", first_name);
            setValue("last_name", last_name);
            setValue("phone", phone);
            setValue("email", email);
            setValue("address_1", address_1);
            setValue("country_code", country_code);
            setValue("city", city);
            // setValue("postal_code", postal_code);
        }
    }, [cart]);

    const onSubmit = async (data) => {
        const { email, ...rest } = data;
        rest['postal_code'] = "10000"
        await handleShippingSubmit(rest, email);
        const shippingOptions = await getShippingOptions();
        await handleDeliverySubmit(shippingOptions[0]);
    };

    return (
        <div>
            <div className="container">
                <div
                    className="row"
                    // style={{
                    //     display: "flex",
                    //     justifyContent: "center",
                    // }}
                >
                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <div className="account-creation">
                            <div className="lp-title">
                                <h3>Your delivery address</h3>
                            </div>
                            <div className="lp-left-text delivery-add">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="name">
                                                First name
                                            </label>
                                            <input
                                                className="form-control"
                                                id="first_name"
                                                aria-describedby="first_nameHelp"
                                                placeholder="Enter first name"
                                                {...register("first_name", {
                                                    required: true,
                                                })}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="last_name">
                                                Last name
                                            </label>
                                            <input
                                                className="form-control"
                                                id="last_name"
                                                aria-describedby="last_nameHelp"
                                                placeholder="Enter last name"
                                                {...register("last_name", {
                                                    required: true,
                                                })}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="inputEmail">
                                                Email address
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="inputEmail"
                                                aria-describedby="emailHelp"
                                                placeholder="Enter email"
                                                {...register("email", {
                                                    required: true,
                                                })}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="inputPhone">
                                                Phone
                                            </label>
                                            <input
                                                className="form-control"
                                                id="inputPhone"
                                                aria-describedby="phoneHelp"
                                                placeholder="Enter phone"
                                                {...register("phone", {
                                                    required: true,
                                                })}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="inputAddress">
                                                Address
                                            </label>
                                            <input
                                                className="form-control"
                                                id="inputAddress"
                                                aria-describedby="addressHelp"
                                                placeholder="Enter address"
                                                {...register("address_1", {
                                                    required: true,
                                                })}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="inputAddress">
                                                Country
                                            </label>
                                            <select
                                                className="form-control"
                                                id="selectAddress"
                                                aria-describedby="addressHelp"
                                                placeholder="Enter address"
                                                {...register("country_code", {
                                                    required: true,
                                                })}
                                            >
                                                {cart.region?.countries.map(
                                                    (country) => (
                                                        <option
                                                            key={country.id}
                                                            value={
                                                                country.iso_2
                                                            }
                                                        >
                                                            {
                                                                country.display_name
                                                            }
                                                        </option>
                                                    )
                                                )}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="inputCity">
                                                City
                                            </label>
                                            <input
                                                className="form-control"
                                                id="inputCity"
                                                aria-describedby="cityHelp"
                                                placeholder="Enter city"
                                                {...register("city", {
                                                    required: true,
                                                })}
                                            />
                                        </div>
                                    </div>
                                    {/* <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="inputPostalcode">
                                                Postal code
                                            </label>
                                            <input
                                                className="form-control"
                                                id="inputPostalcode"
                                                aria-describedby="postalHelp"
                                                placeholder="Enter postal"
                                                {...register("postal_code", {
                                                    required: true,
                                                })}
                                            />
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div className=" lp-account-btn btn-ac add-btn">
                                <a href="#" onClick={handleSubmit(onSubmit)}>
                                    Continue to shipping{" "}
                                    <i
                                        className="fa fa-angle-right"
                                        aria-hidden="true"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <CartList />
                    </div>
                    {/* <div className="col-md-6 col-sm-12 col-xs-12">
                        <div className="account-creation">
                            <div className="lp-title">
                                <h3>Your billing address</h3>
                            </div>
                            <div className="lp-left-text delivery-add">
                                <p>Md. Sohrab Hossain</p>
                                <p>357/3, Noyatola, Mogbazar</p>
                                <p>Ramna, Dhaka</p>
                                <p>01919660143</p>
                                <p>01919660143</p>
                            </div>
                            <div className=" lp-account-btn btn-ac add-btn">
                                <a href="checkout.html">
                                    Update{" "}
                                    <i
                                        className="fa fa-angle-right"
                                        aria-hidden="true"
                                    />
                                </a>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            {/* <div className="address-text-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="text-wrapper">
                                <div className="text-btn-area lp-account-btn btn-ac add-btn">
                                    <a href="cart.html">
                                        Add a new address
                                        <i
                                            className="fa fa-angle-right"
                                            aria-hidden="true"
                                        />
                                    </a>
                                </div>
                                <div className="address-text-field">
                                    <label htmlFor="tfield">
                                        If you would like to add a comment about
                                        your order, please write it in the field
                                        below.
                                    </label>
                                    <textarea
                                        name="message"
                                        id="tfield"
                                        defaultValue={""}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="clearfix" />
        </div>
    );
}

export default Address;
