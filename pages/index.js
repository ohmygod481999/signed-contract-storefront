import Head from "next/head";
import Image from "next/image";
import { useContext, useEffect } from "react";
import Banner2 from "../components/Banner2";
import Brand from "../components/Brand";
import DiscountArea from "../components/DiscountArea";
import FreeOffer from "../components/FreeOffer";
import ProductArea from "../components/ProductArea";
import Slider from "../components/Slider";
import Slider2 from "../components/Slider2";
import StoreContext from "../context/store-context";
import styles from "../styles/Home.module.css";
import { fetchAPI } from "../utils/api";
import { createClient } from "../utils/client";
import { getStrapiMedia } from "../utils/media";

export default function Home({ products, home }) {
    const { addVariantToCart, cart } = useContext(StoreContext);
    console.log(home);

    return (
        <div>
            <video autoPlay muted loop style={{
                width: "100%",
                padding: 0,
                margin: 0
            }}>
                <source
                    src={getStrapiMedia(home.attributes.banner_video)}
                    type="video/mp4"
                />
            </video>
            {/* <Slider2 images={home.attributes.main_slides}/> */}
            <Banner2 image={home.attributes.banner} />
            {/* <FreeOffer content={home.attributes.three_content}/> */}
            {/* <DiscountArea /> */}
            <ProductArea products={products} />
            <Brand images={home.attributes.partners} />
        </div>
    );
}

export const getStaticProps = async () => {
    const client = createClient();
    const { products } = await client.products.list();
    console.log(products);

    const homeRes = await fetchAPI("/home", {
        populate: "*",
    });

    return {
        props: {
            products,
            home: homeRes.data,
        },
    };
};
