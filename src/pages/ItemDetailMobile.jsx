import React from "react";
import { HeaderResponsive } from "@responsiveComponents/HeaderResponsive";
import { useResponsivePage } from "@hooks/useResponsivePage";
import { ItemDetail } from "@components/ItemDetail/ItemDetail";
const ItemDetailMobile = () => {
	const { isMobile } = useResponsivePage();
	return (
		<>
			<HeaderResponsive isMobile={isMobile} />
			<ItemDetail isMobile={isMobile} />
		</>
	);
};

export { ItemDetailMobile };
