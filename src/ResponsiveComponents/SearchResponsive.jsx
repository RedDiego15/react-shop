import React from "react";
import { SearchItem } from "@components/SearchItem/SearchItem";
import { CategoriesBar } from "@components/CategoriesBar/CategoriesBar";

const SearchResponsive = ({ isMobile, isDesktop }) => {
	return (
		<section>
			{isMobile && (
				<SearchItem>
					<CategoriesBar />
				</SearchItem>
			)}
			{isDesktop && <SearchItem></SearchItem>}
		</section>
	);
};

export { SearchResponsive };
