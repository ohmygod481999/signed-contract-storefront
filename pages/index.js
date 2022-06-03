import Head from "next/head";
import Image from "next/image";
import { useContext, useEffect } from "react";
import Brand from "../components/Brand";
import DiscountArea from "../components/DiscountArea";
import FreeOffer from "../components/FreeOffer";
import ProductArea from "../components/ProductArea";
import Slider from "../components/Slider";
import StoreContext from "../context/store-context";
import styles from "../styles/Home.module.css";
import { createClient } from "../utils/client";

export default function Home({ products }) {
    const { addVariantToCart, cart } = useContext(StoreContext);
    console.log(cart);

    return (
        <div>
            <Slider />
            <FreeOffer />
            <DiscountArea />
            <ProductArea products={products}/>
            <Brand />
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
