import React from "react";
import AddToCarImage from "@icons/bt_add_to_cart.svg";
import { AppContext } from "@context/AppContext";
import styled from "styled-components";

const ContainerProductCard = styled.div`
	width: 240px;
	@media (max-width: 640px) {
		width: 160px;
	}
`;
const ProductImage = styled.img`
	width: 240px;
	height: 240px;
	border-radius: 20px;
	object-fit: cover;
	@media (max-width: 640px) {
		width: 160px;
		height: 160px;
	}
`;
const ContainerProductInfo = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 12px;
`;
const StyledFigure = styled.figure`
	margin: 0;
`;
const CartImage = styled.img`
	width: 35px;
	height: 35px;
`;
const Price = styled.p`
	font-weight: bold;
	font-size: ${(props) => props.theme.md};
	margin-top: 0;
	margin-bottom: 4px;
`;
const ItemTitle = styled.p`
	font-size: ${(props) => props.theme.sm};
	margin-top: 0;
	margin-bottom: 0;
	color: ${(props) => props.theme.very_light_pink};
`;
function Item({ item }) {
	const { setItemDetailFocus, addToCart } = React.useContext(AppContext);
	const addItem = () => {
		addToCart(item);
	};

	const handleSelectedItem = () => {
		setItemDetailFocus(item);
	};

	return (
		<>
			<ContainerProductCard>
				<ProductImage
					onClick={() => handleSelectedItem()}
					src={item.category.image}
					alt="product-image"
				/>
				<ContainerProductInfo>
					<div>
						<Price>{`$ ${item.price}`}</Price>
						<ItemTitle>{item.title}</ItemTitle>
					</div>
					<StyledFigure onClick={addItem}>
						<CartImage src={AddToCarImage} alt="product-image" />
					</StyledFigure>
				</ContainerProductInfo>
			</ContainerProductCard>
		</>
	);
}

export { Item };
