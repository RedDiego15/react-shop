import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { AppContext } from "@context/AppContext";
import styled from "styled-components";
import { ActuallOrderItemDeleteButton } from "@components/Buttons/ActuallOrderItemDeleteButton";

const ShoppingCart = styled.div`
	display: grid;
	grid-template-columns: auto 1fr;
	grid-template-rows: repeat(2, auto);
	gap: 16px;
	margin-bottom: 24px;
	align-items: center;
	border-top: solid #ebebeb;
	padding-top: 24px;
`;
const StyledFigure = styled.figure`
	margin: 0;
`;
const StyledImg = styled.img`
	width: 70px;
	height: 70px;
	border-radius: 20px;
	object-fit: cover;
`;
const Title = styled.p`
	color: var(--very-light-pink);
`;
const Price = styled.p`
	font-size: var(--md);
	font-weight: bold;
`;
const ShoppingCartQuantity = styled.div`
	grid-column: span 2;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const QuantityContainer = styled.div`
	display: flex;
	align-items: center;
	position: relative;
`;
const QuantityContainerSelect = styled.select`
	width: 100%;
	padding-left: 10px;
	padding-right: 32px;
	appearance: none;
	border: none;
	font-size: 14px;
	outline: none;
	&::-webkit-calendar-picker-indicator {
		opacity: 0;
	}
`;
const StyledDownArrow = styled(IoIosArrowDown)`
	width: 20px;
	height: 100%;
	position: absolute;
	right: 0;
`;

function ActuallOrderItem({ imageUrl, title, totalPrice, quantity, item }) {
	const { actualizeQuantity, deleteItem } = React.useContext(AppContext);

	const handleChangeQuantity = (e) => {
		const newQuantity = parseInt(e.target.value);
		actualizeQuantity(item, newQuantity);
	};
	return (
		<ShoppingCart>
			<StyledFigure>
				<StyledImg src={imageUrl} alt="product" />
			</StyledFigure>
			<Title>{title}</Title>
			<ShoppingCartQuantity>
				<QuantityContainer>
					<p>Cant. </p>
					<QuantityContainerSelect
						value={quantity}
						onChange={handleChangeQuantity}
					>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>
						<option value="Eliminar"></option>
					</QuantityContainerSelect>
					<StyledDownArrow />
				</QuantityContainer>
				<Price>$ {totalPrice}</Price>
			</ShoppingCartQuantity>
			<ActuallOrderItemDeleteButton onClick={() => deleteItem(item)}>
				Delete
			</ActuallOrderItemDeleteButton>
		</ShoppingCart>
	);
}

export { ActuallOrderItem, StyledFigure, StyledImg };
