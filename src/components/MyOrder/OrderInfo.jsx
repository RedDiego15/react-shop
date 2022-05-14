import React from "react";
import styled from "styled-components";
import { Articles, Price } from "../OldOderItem/OldOrderItem";
import {
	StyledFigure,
	StyledImg,
} from "@components/ActuallOrderItem/ActuallOrderItem";
const ItemContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
`;
const PictureContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;
const Title = styled(Articles)``;

const OrderInfo = ({ imageUrl, title, price }) => {
	return (
		<ItemContainer>
			<PictureContainer>
				<StyledFigure>
					<StyledImg src={imageUrl} alt="product-image" />
				</StyledFigure>
				<Title>{title}</Title>
			</PictureContainer>
			<Price>{price}</Price>
		</ItemContainer>
	);
};

export { OrderInfo };
