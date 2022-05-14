import React from "react";
import { ActuallOrderItem } from "@components/ActuallOrderItem/ActuallOrderItem";
import { AppContext } from "@context/AppContext";
import styled from "styled-components";
import {
	MyOrderContainer,
	MyOrdersContent,
} from "@components/MyOldOrders/MyOldOrders";
import { OrderInfo } from "@components/MyOrder/OrderInfo";

const OldOrderContainer = styled.div`
	background-color: ${(props) => props.theme.backgroundColoroldOrder};
	padding: 1.5rem;
	border-radius: 6px;
`;
function MyOrder({ children, isDesktop }) {
	const {
		state: { cart },
	} = React.useContext(AppContext);
	return (
		<MyOrderContainer className="my-order">
			<MyOrdersContent className="my-order-container">
				{isDesktop && <h1 className="title">My order</h1>}
				<OldOrderContainer>{children}</OldOrderContainer>
				{cart.map((item) => (
					<>
						<OrderInfo
							title={item.title}
							imageUrl={item.category.image}
							price={item.price}
							key={`orderItem- ${item.id}`}
						/>
					</>
				))}
			</MyOrdersContent>
		</MyOrderContainer>
	);
}

export { MyOrder };
