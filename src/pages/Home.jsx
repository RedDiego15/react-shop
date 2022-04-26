import React from "react";
import { HeaderResponsive } from "@responsiveComponents/HeaderResponsive";
import { SearchResponsive } from "@responsiveComponents/SearchResponsive";

import { Layout } from "@containers/Layout";
import { Products } from "@components/Products/Products";
import { ItemDetail } from "@components/ItemDetail/ItemDetail";
import { useResponsivePage } from "@hooks/useResponsivePage";
import { FaArrowLeft } from "react-icons/fa";

import { CheckOut } from "@components/CheckOut/CheckOut";
import { HeaderMobile } from "../components/HeaderMobile/HeaderMobile";
import { AppContext } from "@context/AppContext";

const Home = () => {
	const { isMobile, isDesktop } = useResponsivePage();
	const {
		state: { toggleOrder, toggleItemInfo },
		setToggleOrder,
	} = React.useContext(AppContext);

	return (
		<Layout>
			{/* <HeaderResponsive isMobile={isMobile} isDesktop={isDesktop} /> */}

			<SearchResponsive isMobile={isMobile} isDesktop={isDesktop} />
			<Products />

			{toggleOrder && (
				<>
					<CheckOut>
						<HeaderMobile selector="header-checkout">
							<FaArrowLeft onClick={() => setToggleOrder()} />
							<p>ShoppingCart</p>
						</HeaderMobile>
					</CheckOut>
				</>
			)}
			{toggleItemInfo && (
				<ItemDetail isDesktop={isDesktop} isMobile={isMobile} />
			)}
		</Layout>
	);
};

export { Home };
