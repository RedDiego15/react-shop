import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
	background-color: ${(props) => props.theme.hospital_green};
	border-radius: 8px;
	border: none;
	color: ${(props) => props.theme.white};
	width: 100%;
	cursor: pointer;
	font-size: ${(props) => props.theme.md};
	font-weight: bold;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const PrimaryButton = ({ children, handleAction }) => {
	return (
		<StyledButton onClick={() => handleAction()} type="button">
			{children}
		</StyledButton>
	);
};

export { PrimaryButton };
