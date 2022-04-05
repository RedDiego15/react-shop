import React from "react";
import {HeaderResponsive} from "@responsiveComponents/HeaderResponsive";
import {SearchResponsive} from "@responsiveComponents/SearchResponsive";
import {useMediaQuery} from "react-responsive";
import {HeaderContainer} from "@containers/HeaderContainer"
import {Products} from '@components/Products/Products'
const Home = () => {
  const isMobile = useMediaQuery({
    query: "(max-device-width: 639px)",
  });
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 640px)",
  });
  return (
    <HeaderContainer>
      <HeaderResponsive isMobile={isMobile} isDesktop={isDesktop} />
      <SearchResponsive isMobile={isMobile} isDesktop={isDesktop} />
      <Products />
    </HeaderContainer>
  );
};

export {Home};
