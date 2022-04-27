import React from "react";
import styled from "styled-components";

const Container = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-weight: bold;
	margin-bottom: 1rem;
	padding: 1rem;
`;
const HeaderMobile = ({ children } = {}) => {
	return <Container>{children}</Container>;
};

export { HeaderMobile };
