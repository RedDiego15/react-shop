import React from "react";
import { SearchResponsive } from "@responsiveComponents/SearchResponsive";

import { LayoutWithHeader } from "@containers/LayoutWithHeader";
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
		<LayoutWithHeader>
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
		</LayoutWithHeader>
	);
};

export { Home };
