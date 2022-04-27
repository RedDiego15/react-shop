import React from "react";
import { CheckOut } from "../components/CheckOut/CheckOut";

import IconMenu from "@icons/icon_menu.svg";
import { HeaderMobile } from "../components/HeaderMobile/HeaderMobile";

import styled from "styled-components";

const Title = styled.p`
	position: absolute;
	right: calc(50% - 55px);
`;
const MobileCheckOutPage = () => {
	return (
		<>
			<HeaderMobile>
				<img src={IconMenu} alt="logo" className="Menu" />
				<Title>ShoppingCart</Title>
			</HeaderMobile>
			<CheckOut isMobile={true} />
		</>
	);
};

export { MobileCheckOutPage };
