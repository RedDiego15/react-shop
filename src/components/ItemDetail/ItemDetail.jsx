import React from "react";
import IconClose from "@icons/icon_close.svg";
import BtAddCart from "@icons/bt_add_to_cart.svg";
import { FaArrowLeft } from "react-icons/fa";
import { AppContext } from "@context/AppContext";
import styled from "styled-components";
import { PrimaryButton } from "@components/Buttons/PrimaryButton";

const ProductDetail = styled.aside`
	position: relative;
	width: 100%;
	background-color: white;
	@media (min-width: 640px) {
		width: 360px;
		padding-bottom: 24px;
		position: absolute;
		right: 0;
		top: 60px;
	}
`;
const ProductDetailClose = styled.div`
	background: white;
	width: 45px;
	height: 45px;
	position: absolute;
	top: 11px;
	left: 13px;
	z-index: 2;
	padding: 12px;
	border-radius: 50%;
`;
const CloseImg = styled.img`
	width: 25px;
	position: absolute;
	top: 10px;
	left: 9.5px;
`;
const CloseIcon = styled(FaArrowLeft)`
	width: 32px;
	height: 22px;
	position: absolute;
	top: 11px;
	left: 7.5px;
`;
const ProductImg = styled.img`
	width: 100%;
	height: 360px;
	object-fit: cover;
	border-radius: 0 0 20px 20px;
`;
const ProductInfoContainer = styled.div`
	margin: 24px 24px 0 24px;
`;
const Price = styled.p`
	font-weight: bold;
	font-size: ${(props) => props.theme.md};
	margin-top: 0;
	margin-bottom: 4px;
`;
const Title = styled.p`
	color: ${(props) => props.theme.very_light_pink};
	font-size: ${(props) => props.theme.md};
	margin-top: 0;
	margin-bottom: 36px;
`;
const Description = styled.p`
	color: ${(props) => props.theme.very_light_pink};
	font-size: ${(props) => props.theme.md};
	margin-top: 0;
	margin-bottom: 36px;
`;

function ItemDetail({ isDesktop, isMobile }) {
	const {
		setToggleItemInfo,
		state: { itemDetailFocus },
		addToCart,
	} = React.useContext(AppContext);

	const { category, price, title, description } = itemDetailFocus;

	return (
		<ProductDetail>
			<ProductDetailClose onClick={() => setToggleItemInfo()}>
				{isDesktop && <CloseImg src={IconClose} alt="close" />}
				{isMobile && <CloseIcon />}
			</ProductDetailClose>

			<ProductImg src={category.image} alt="product-image" />
			<ProductInfoContainer>
				<Price>{price}</Price>
				<Title>{title}</Title>
				<Description>{description}</Description>
				<PrimaryButton
					handleAction={() => addToCart(itemDetailFocus)}
					className="primary-button add-to-cart-button"
				>
					<img src={BtAddCart} alt="add to cart" />
					Add to cart
				</PrimaryButton>
			</ProductInfoContainer>
		</ProductDetail>
	);
}

export { ItemDetail };
