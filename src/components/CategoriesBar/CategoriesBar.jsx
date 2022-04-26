import React from "react";
import styled from "styled-components";

const StyledUl = styled.ul`
	margin-left: 12px;
	position: relative;
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	align-items: center;
	height: 60px;
`;
const Styleda = styled.a`
	text-decoration: none;
	color: var(--very-light-pink);
	border: 1px solid var(--white);
	padding: 8px;
	border-radius: 8px;
	&:hover {
		border: 1px solid var(--hospital-green);
		color: var(--hospital-green);
	}
`;

function CategoriesBar({ children }) {
	return (
		<>
			<StyledUl>
				{children}

				<li>
					<Styleda href="/">All</Styleda>
				</li>
				<li>
					<Styleda href="/">Clothes</Styleda>
				</li>
				<li>
					<Styleda href="/">Electronics</Styleda>
				</li>
				<li>
					<Styleda href="/">Furnitures</Styleda>
				</li>
				<li>
					<Styleda href="/">Toys</Styleda>
				</li>
				<li>
					<Styleda href="/">Other</Styleda>
				</li>
			</StyledUl>
		</>
	);
}

export { CategoriesBar };
