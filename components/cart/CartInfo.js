import React, { useContext } from "react";
import DisplayContext from "../../context/display-context";
import StoreContext from "../../context/store-context";
import CartBottom from "./CartBottom";
import CartTable from "./CartTable";

function CartInfo() {
    const { updateCheckoutStep } = useContext(DisplayContext);
    const { cart } = useContext(StoreContext);

    return (
        <div>
            <CartTable />
            {cart.items.length > 0 && (
                <CartBottom onNext={() => updateCheckoutStep(1)} />
            )}
        </div>
    );
}

export default CartInfo;
