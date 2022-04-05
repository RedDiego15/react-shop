import React from 'react'
import { SearchItem } from '@components/SearchItem/SearchItem'
import { SearchContainer } from '@containers/SearchContainer'
import {CategoriesBar} from '@components/CategoriesBar/CategoriesBar'
import {MobileContainer} from '@containers/MobileContainer';

const SearchResponsive = ({isMobile,isDesktop}) => {
  return (
    <section>
      <SearchContainer>
        {isMobile && (
          <SearchItem>
            <CategoriesBar />
          </SearchItem>
        )}
        {isDesktop && (
          <SearchItem>
           
          </SearchItem>
        )}
      </SearchContainer>
    </section>
  );
}

export {SearchResponsive}