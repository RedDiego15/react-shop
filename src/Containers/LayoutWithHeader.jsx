import React from "react";
import { HeaderResponsive } from "@responsiveComponents/HeaderResponsive";
import { useResponsivePage } from "@hooks/useResponsivePage";

const LayoutWithHeader = ({ children }) => {
	const { isMobile, isDesktop } = useResponsivePage();
	return (
		<>
			<HeaderResponsive isMobile={isMobile} isDesktop={isDesktop} />
			{children}
		</>
	);
};

export { LayoutWithHeader };
