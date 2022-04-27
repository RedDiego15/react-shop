import React from "react";
import { DesktopMenu } from "@components/Header__DesktopMenu/DesktopMenu";
import { IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";

const NavBarRigthContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	margin-right: 16px;
`;
const StyledUl = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	align-items: center;
	height: 60px;
`;
const StyledDownArrow = styled(IoIosArrowDown)`
	margin-top: 2px;
	padding: 4px;
`;
const StyledA = styled.a`
	color: ${(props) => props.theme.hospital_green};
`;
const NavBarEmail = styled.li`
	position: relative;
	color: ${(props) => props.theme.very_light_pink};
	font-size: ${(props) => props.theme.sm};
	display: flex;
	align-items: center;
	margin-right: 36px;
	padding: 10px 0;
	&:hover .desktop-menu {
		display: block;
	}
`;
const NavBarShoppingCart = styled.li`
	position: relative;
`;
const ContainerIcons = styled.div`
	width: 16px;
	height: 16px;
	border-radius: 50%;
	font-size: ${(props) => props.theme.sm};
	font-weight: bold;
	display: flex;
	justify-content: center;
	align-items: center;
`;

function HeaderRigth({ children }) {
	const [isLogged, setIsLogged] = React.useState(true);

	const handleLoginClick = () => {
		alert("se va a loggear");
	};
	return (
		<NavBarRigthContainer>
			<StyledUl>
				<NavBarEmail>
					{isLogged && (
						<>
							platzi@example.com
							<StyledDownArrow />
							<DesktopMenu />
						</>
					)}
					{!isLogged && <StyledA onClick={handleLoginClick}>Sign in</StyledA>}
				</NavBarEmail>

				<NavBarShoppingCart>
					<ContainerIcons>{children}</ContainerIcons>
				</NavBarShoppingCart>
			</StyledUl>
		</NavBarRigthContainer>
	);
}

export { HeaderRigth };
