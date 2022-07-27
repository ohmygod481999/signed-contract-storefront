import { sortBy } from "lodash";

export const getVnProductPrice = (product) => {
    if (product.variants && product.variants.length > 0) {
        const prices = product.variants[0].prices;
        let vnPrice = null;
        prices.forEach((price) => {
            if (price.currency_code === "vnd") {
                vnPrice = price.amount;
            }
        });
        return vnPrice;
    }
    return null;
};

export const getVnProductPrices = (product) => {
    let resultPrices = [];

    if (product.variants) {
        product.variants.forEach((variant) => {
            const prices = variant.prices;
            let vnPrice = null;
            prices.forEach((price) => {
                if (price.currency_code === "vnd") {
                    vnPrice = price.amount;
                }
            });
            if (vnPrice) resultPrices.push(vnPrice);
        });
        // resultPrices.sort();
        resultPrices = sortBy(resultPrices);
    }

    if (resultPrices.length === 0) return "N/A";
    if (resultPrices.length === 1) return formatMoney(resultPrices[0]);
    return `${formatMoney(resultPrices[0])} - ${formatMoney(
        resultPrices[resultPrices.length - 1]
    )}`;
};

export const getVariantFromOption = (product, currentOption) => {
    for (let variant of product.variants) {
        let matchAll = true;
        for (let option of variant.options) {
            if (
                !(option.option_id in currentOption) ||
                currentOption[option.option_id] !== option.id
            ) {
                matchAll = false;
                break;
            }
        }
        if (matchAll) {
            return variant;
        }
    }
    return null;
};

export const getPriceFromOption = (product, currentOption) => {
    // let resultVariant = null;
    for (let variant of product.variants) {
        let matchAll = true;
        for (let option of variant.options) {
            if (
                !(option.option_id in currentOption) ||
                currentOption[option.option_id] !== option.id
            ) {
                matchAll = false;
                break;
            }
        }
        if (matchAll) {
            const prices = variant.prices;
            let vnPrice = null;
            prices.forEach((price) => {
                if (price.currency_code === "vnd") {
                    vnPrice = price.amount;
                }
            });
            return vnPrice;
        }
    }
    return null;
};

export const formatMoney = (amount) => {
    var formatter = new Intl.NumberFormat("it-IT", {
        style: "currency",
        currency: "VND",
        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    return formatter.format(amount);
};

export const paddingId = (id) => {
    return String(id).padStart(5, "0");
};
