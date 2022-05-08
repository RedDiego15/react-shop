import React from "react";

import YardSale from "@logos/logo_yard_sale.svg";
import IconMenu from "@icons/icon_menu.svg";
import ShoppingCart from "@icons/icon_shopping_cart.svg";
import { CategoriesBar } from "@components/CategoriesBar/CategoriesBar";
import { Header } from "@components/Header/Header";
import { HeaderRigth } from "@components/Header__Rigth/HeaderRigth";
import CartNotificacionIcon from "@icons/icon_shopping_cart_notification.svg";
import { AppContext } from "@context/AppContext";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledDesktopImg = styled.img`
	height: 26px;
`;

const HeaderResponsive = ({ isMobile, isDesktop }) => {
	const {
		state: { cart, toggleOrder },
		setToggleOrder,
	} = React.useContext(AppContext);

	const navigate = useNavigate();

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
						{isMobile && (
							<Link to="/mobile-check-out">
								<img
									onClick={() => setToggleOrder()}
									src={CartNotificacionIcon}
									alt="shopping cart"
								/>
							</Link>
						)}

						{isDesktop && (
							<>
								<img
									onClick={() => setToggleOrder()}
									src={CartNotificacionIcon}
									alt="shopping cart"
								/>
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
					<img src={YardSale} alt="logo" onClick={() => navigate("/")} />
					{dinamicCart()}
				</Header>
			)}
			{isDesktop && (
				<Header>
					<StyledDesktopImg
						src={YardSale}
						alt="logo"
						onClick={() => navigate("/")}
					/>
					<CategoriesBar isMobile={isMobile} />
					<HeaderRigth>{dinamicCart()}</HeaderRigth>
				</Header>
			)}
		</>
	);
};

export { HeaderResponsive };
