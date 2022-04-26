import React from "react";
import { HeaderResponsive } from "@responsiveComponents/HeaderResponsive";
const Layout = ({ children }) => {
	return (
		<>
			<HeaderResponsive></HeaderResponsive>
			{children}
		</>
	);
};

export { Layout };
