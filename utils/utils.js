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

export const formatMoney = (amount) => {
    var formatter = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",

        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    return formatter.format(amount);
};
