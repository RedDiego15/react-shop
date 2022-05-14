import React from "react";
import { OldOrderItem } from "../OldOderItem/OldOrderItem";
import styled from "styled-components";

const MyOrderContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	padding: 1rem;
	gap: 1rem;
`;
const MyOrdersContent = styled.div`
	display: grid;
	width: 100%;
	max-width: 20rem;
	gap: 1.5rem;
`;
const Title = styled.h1`
	font-size: ${(props) => props.theme.lg};
`;
function MyOldOrders({ isDesktop }) {
	return (
		<MyOrderContainer>
			{isDesktop && <Title>My orders</Title>}

			<MyOrdersContent>
				<OldOrderItem />
				<OldOrderItem />
				<OldOrderItem />
				<OldOrderItem />
			</MyOrdersContent>
		</MyOrderContainer>
	);
}

export { MyOldOrders, MyOrderContainer, MyOrdersContent };
