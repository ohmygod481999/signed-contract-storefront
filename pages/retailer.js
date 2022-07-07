import React from "react";
import { fetchAPI } from "../utils/api";

function Retailer({ zones }) {
    console.log(zones);
    return (
        <div>
            <div className="cart-top-heading">
                <div className="container">
                    <div className="summery-top">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="cart-sumttl">
                                    <h3>Retailers:</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="container"
                style={{
                    marginTop: "30px",
                }}
            >
                {(zones || []).map((zone) => (
                    <div key={zone.id} className="zone">
                        <div className="zone-header zone-header--first text-uppercase">
                            <h3>{zone.attributes.name}</h3>
                        </div>
                        <div className="zone-stores">
                            <div className="container-fullwidth">
                                <div className="row stores-container">
                                    {zone.attributes.retailers.data.map(
                                        (retailer) => (
                                            <div
                                                key={retailer.id}
                                                className="col-sm-6 col-lg-3 store"
                                            >
                                                <div className="store-name text-uppercase">
                                                    <span>
                                                        {
                                                            retailer.attributes
                                                                .name
                                                        }
                                                    </span>
                                                </div>
                                                <div className="store-street">
                                                    <span>
                                                        {
                                                            retailer.attributes
                                                                .address
                                                        }
                                                    </span>
                                                </div>
                                                <div className="store-phone">
                                                    <span>
                                                        Phone:{" "}
                                                        {
                                                            retailer.attributes
                                                                .phone
                                                        }
                                                    </span>
                                                </div>
                                                <div className="store-city-zone">
                                                    <span>
                                                        {
                                                            retailer.attributes
                                                                .description
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export const getStaticProps = async () => {
    const zoneRes = await fetchAPI("/zones", {
        populate: "*",
    });

    return {
        props: {
            zones: zoneRes.data,
        },
    };
};

export default Retailer;
