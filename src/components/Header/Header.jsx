import React from "react";
import styled from "styled-components";

const NavItemsContainer = styled.div`
	gap: 10px;
	display: flex;
	align-items: center;
	box-shadow: 0px 3px 2px 0px #999999;
	@media (max-width: 640px) {
		justify-content: space-between;
		padding: 0.5rem 1rem;
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
