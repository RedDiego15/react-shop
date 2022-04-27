import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

import styled from "styled-components";

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	margin-top: 1rem;
	z-index: 1;
	align-items: center;
	gap: 10px;
	@media (min-width: 640px) {
		flex-direction: row;
		gap: 4rem;
		padding-left: 2rem;
	}
`;
const SearchInputContainer = styled.div`
	position: relative;
`;
const StyledSearchInput = styled.input`
	position: relative;
	border-radius: 5px;
	width: 90%;
	background-color: #60565614;
	height: 2.8rem;
	border: none;
	padding-left: 2rem;

	@media (min-width: 640px) {
		width: 20rem;
		outline: none;
	}
`;
const StyledSearchIcon = styled(FaSearch)`
	position: absolute;
	left: 10px;
	top: calc(50% - 9px);
`;
const NavBar = styled.nav`
	display: flex;
	align-items: center;
	overflow-x: auto;
	width: 100%;
	@media (min-width: 640px) {
		width: auto;
	}
`;
const SearchOrderContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
const InputOrder = styled.input`
	border: none;
	width: 6.2rem;
	outline: none;
	appearance: none;
	&::-webkit-calendar-picker-indicator {
		opacity: 0;
	}
`;
const StyledDownArrowIcon = styled(IoIosArrowDown)`
	display: block;
	position: absolute;
	right: 6px;
	top: 2.5px;
`;
function SearchItem({ children }) {
	return (
		<StyledForm action="">
			<SearchInputContainer>
				<StyledSearchInput type="text" placeholder="Search Product" />
				<StyledSearchIcon />
			</SearchInputContainer>

			<NavBar>{children}</NavBar>
			<SearchOrderContainer>
				<SearchInputContainer>
					<label forhtml="order-list">Order: </label>
					<InputOrder list="order" id="order-list"></InputOrder>
					<StyledDownArrowIcon className="arrow_down" />

					<datalist id="order">
						<option value="Most popular"></option>
						<option value="Trending"></option>
						<option value="Price"></option>
					</datalist>
				</SearchInputContainer>
			</SearchOrderContainer>
		</StyledForm>
	);
}

export { SearchItem };
