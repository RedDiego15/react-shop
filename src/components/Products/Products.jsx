import React from "react";
import { ProductsContainer } from "@containers/ProductsContainer";
import { Item } from "@components/Item/Item";
import { useGetProducts } from "@hooks/useGetProducts";
import styled from "styled-components";

const MainContainer = styled.section`
	margin-top: 2rem;
`;
const CardsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, 240px);
	gap: 26px;
	place-content: center;
	@media (max-width: 640px) {
		grid-template-columns: repeat(auto-fill, 160px);
	}
`;
function Products() {
	const { products, isLoading, errorGetProducts } = useGetProducts(15);

	return (
		<ProductsContainer>
			<MainContainer>
				<CardsContainer>
					{isLoading && <p>Loading...</p>}
					{errorGetProducts && <p>Something wrong happen try later</p>}
					{products.map((item) => (
						<Item
							ImgUrl={item.category.image}
							item={item}
							key={`itemProduct-${item.id}`}
						/>
					))}
				</CardsContainer>
			</MainContainer>
		</ProductsContainer>
	);
}

export { Products };
