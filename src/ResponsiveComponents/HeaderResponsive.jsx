import React from "react";

import YardSale from "@logos/logo_yard_sale.svg";
import IconMenu from "@icons/icon_menu.svg";
import ShoppingCart from "@icons/icon_shopping_cart.svg";
import { CategoriesBar } from "@components/CategoriesBar/CategoriesBar";
import { Header } from "@components/Header/Header";
import { HeaderRigth } from "@components/Header__Rigth/HeaderRigth";
import CartNotificacionIcon from "@icons/icon_shopping_cart_notification.svg";
import { AppContext } from "@context/AppContext";

const HeaderResponsive = ({ isMobile, isDesktop }) => {
	const {
		state: { cart, toggleOrder },
		setToggleOrder,
	} = React.useContext(AppContext);

	const totalItems = cart.reduce((prev, actual) => prev + actual.quantity, 0);

	const dinamicCart = () => {
		return (
			<>
				{cart.length == 0 && (
					<>
						<img
							onClick={() => setToggleOrder()}
							src={ShoppingCart}
							alt="shopping cart"
						/>
					</>
				)}
				{cart.length > 0 && (
					<>
						<img
							onClick={() => setToggleOrder()}
							src={CartNotificacionIcon}
							alt="shopping cart"
						/>
						{isDesktop && (
							<>
								<p className="header-rigth__product-to-buy">{totalItems}</p>
							</>
						)}
					</>
				)}
			</>
		);
	};

	return (
		<>
			{isMobile && (
				<Header>
					<img src={IconMenu} alt="logo" />
					<img src={YardSale} alt="logo" />
					{dinamicCart()}
				</Header>
			)}
			{isDesktop && (
				<Header>
					<img src={YardSale} alt="logo" className="logo" />
					<CategoriesBar isMobile={isMobile} />
					<HeaderRigth>{dinamicCart()}</HeaderRigth>
				</Header>
			)}
		</>
	);
};

export { HeaderResponsive };
