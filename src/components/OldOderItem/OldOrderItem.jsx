import React from "react";
import Arrow from "@icons/flechita.svg";
import styled from "styled-components";

const Order = styled.div`
	display: flex;
	justify-content: space-between;
`;
const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 6px;
`;
const Articles = styled.span`
	color: ${(props) => props.theme.very_light_pink};
	font-size: ${(props) => props.theme.md};
`;
const Price = styled(Articles)`
	font-weight: bold;
`;
const Date = styled(Price)`
	color: ${(props) => props.theme.black};
`;

const PriceContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
`;

function OldOrderItem() {
	return (
		<Order className="order">
			<InfoContainer>
				<Date>03.25.21</Date>
				<Articles>6 articles</Articles>
			</InfoContainer>
			<PriceContainer>
				<Price>$560.00</Price>
				<img src={Arrow} alt="arrow" />
			</PriceContainer>
		</Order>
	);
}

export { OldOrderItem, Articles, Price };
