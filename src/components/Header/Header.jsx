import React from "react";
import styled from "styled-components";

const NavItemsContainer = styled.div`
	gap: 10px;
	display: flex;
	align-items: center;
	@media (max-width: 640px) {
		justify-content: space-between;
		margin-bottom: 0.5rem;
	}
`;

function Header({ children }) {
	return (
		<header>
			<nav>
				<NavItemsContainer>{children}</NavItemsContainer>
			</nav>
		</header>
	);
}

export { Header };
