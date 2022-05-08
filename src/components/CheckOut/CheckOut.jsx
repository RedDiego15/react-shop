import React from "react";
import { ActuallOrderItem } from "@components/ActuallOrderItem/ActuallOrderItem";
import { AppContext } from "@context/AppContext";
import { FaArrowLeft } from "react-icons/fa";
import styled from "styled-components";
import { PrimaryButton } from "@components/Buttons/PrimaryButton";

const StyledSectionMyOrder = styled.div`
	width: 100%;
	height: 100vh;
	display: grid;
	@media (min-width: 640px) {
		width: 360px;
		height: auto;
		max-height: 550px;
		background-color: white;
		position: absolute;
		right: 0;
		top: 60px;
		padding-bottom: 24px;
		border-radius: 5px;
	}
`;
const CheckOutHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-weight: bold;
	width: 9.5rem;
	justify-self: flex-start;
	font-size: 19px;
	margin: 1rem 0;
	margin-left: 2rem;
`;
const MyOrderContainer = styled.div`
	display: grid;
	grid-template-rows: auto 1fr auto;
	width: 100%;
	padding: 0 1.5rem;
	max-height: 350px;
	overflow-y: auto;
`;
const Order_Container = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 11rem;
	align-items: center;
	margin: 2rem 0;
	border-radius: 8px;
	padding: 0 24px;
`;
const StyledTotal = styled.p`
	font-size: ${(props) => props.theme.md};
	font-weight: bold;
`;
const NumberTotal = styled.p`
	font-size: var(--sm);
	color: var(--very-light-pink);
	font-weight: bold;
`;

function CheckOut({ isMobile }) {
	const {
		state: { cart },
		setToggleOrder,
	} = React.useContext(AppContext);
	const calculateTotal = () => {
		return cart.reduce(
			(prevValue, currentValue) => prevValue + currentValue.totalPrice,
			0
		);
	};

	return (
		<>
			<StyledSectionMyOrder>
				{!isMobile && (
					<CheckOutHeader>
						<FaArrowLeft onClick={() => setToggleOrder()} />
						<p>ShoppingCart</p>
					</CheckOutHeader>
				)}

				<MyOrderContainer>
					{cart.map((item) => (
						<ActuallOrderItem
							key={`orderItem-${item.id}`}
							title={item.title}
							imageUrl={item.category.image}
							quantity={item.quantity}
							totalPrice={item.totalPrice}
							item={item}
						/>
					))}
				</MyOrderContainer>
				<Order_Container>
					<StyledTotal>Total</StyledTotal>
					<NumberTotal>$ {calculateTotal()}</NumberTotal>
				</Order_Container>

				<PrimaryButton>Checkout</PrimaryButton>
			</StyledSectionMyOrder>
		</>
	);
}

export { CheckOut };
