import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
	background: 0px 0px;
	cursor: pointer;
	transition: all 0.2s ease 0s;
	box-shadow: 0px -1px 0px 0px inset;
	padding: 4px 0px;
	color: rgb(117, 117, 117);
	border: none;
`;
const ActuallOrderItemDeleteButton = () => {
	return <StyledButton type="button">Delete</StyledButton>;
};

export { ActuallOrderItemDeleteButton };
