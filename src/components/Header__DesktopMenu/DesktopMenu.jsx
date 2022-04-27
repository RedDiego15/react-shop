import React from "react";
import styled from "styled-components";

const DesktopLoggedMenuContainer = styled.div`
	display: none;
	position: absolute;
	top: 34px;
	right: 17px;
	background-color: white;
	width: 100px;
	height: 11rem;
	border: 1px solid ${(props) => props.theme.very_light_pink};
	border-radius: 6px;
	padding: 20px 20px 0 20px;
	z-index: 2;
`;
const StyledUl = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	display: block;
`;
const StyledLi = styled.li`
	text-align: end;
`;
const StyledLink = styled.a`
	color: ${(props) => props.theme.black};
	text-decoration: none;
	margin-bottom: 20px;
	display: inline-block;
`;

const SignOutItem = styled(StyledLi)`
	padding-top: 20px;
	border-top: 1px solid ${(props) => props.theme.very_light_pink};
`;
const StyledLinkSignOut = styled.a`
	color: ${(props) => props.theme.hospital_green};
	font-size: ${(props) => props.theme.sm};
`;

function DesktopMenu() {
	return (
		<>
			<DesktopLoggedMenuContainer className="desktop-menu">
				<StyledUl>
					<StyledLi>
						<StyledLink href="/">My orders</StyledLink>
					</StyledLi>

					<StyledLi>
						<StyledLink href="/">My account</StyledLink>
					</StyledLi>

					<SignOutItem>
						<StyledLinkSignOut href="/">Sign out</StyledLinkSignOut>
					</SignOutItem>
				</StyledUl>
			</DesktopLoggedMenuContainer>
		</>
	);
}

export { DesktopMenu };
