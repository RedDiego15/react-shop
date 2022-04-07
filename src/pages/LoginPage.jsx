import React from 'react'
import { Login } from '@components/Login/Login';
import { useResponsivePage } from '@hooks/useResponsivePage';

import {HeaderResponsive} from '@responsiveComponents/HeaderResponsive'
const LoginPage = () => {
  const {isMobile,isDesktop} = useResponsivePage()
  return (
    <>
      {isMobile && <Login />}
      {isDesktop && (
        <>
          <HeaderResponsive  />
          <Login />
        </>
      )}
    </>
  );
}

export {LoginPage}