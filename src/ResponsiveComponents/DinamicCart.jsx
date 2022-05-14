import React from "react";
import ShoppingCart from "@icons/icon_shopping_cart.svg";
import CartNotificacionIcon from "@icons/icon_shopping_cart_notification.svg";
import { AppContext } from "@context/AppContext";

const DinamicCart = ({ length, children }) => {
	const { setToggleOrder } = React.useContext(AppContext);
	return (
		<>
			{length == 0 && (
				<img
					onClick={() => setToggleOrder()}
					src={ShoppingCart}
					alt="shopping cart"
				/>
			)}
			{length > 0 && <>{children}</>}
		</>
	);
};

export { DinamicCart };
