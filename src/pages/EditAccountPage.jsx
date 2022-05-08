import { HeaderResponsive } from "@responsiveComponents/HeaderResponsive";
import { useResponsivePage } from "@hooks/useResponsivePage";
import React from "react";
import { EditAccount } from "@components/MyAccount/EditAccount";

const EditAccountPage = () => {
	const { isMobile, isDesktop } = useResponsivePage();
	return (
		<>
			<HeaderResponsive isMobile={isMobile} isDesktop={isDesktop} />
			<EditAccount />
		</>
	);
};

export { EditAccountPage };
