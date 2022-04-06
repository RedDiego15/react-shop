import React from 'react'
import { Login } from '@components/Login/Login';
import { ResponsivePage } from '@responsiveHook/ResponsivePage';

import {HeaderResponsive} from '@responsiveComponents/HeaderResponsive'
const LoginPage = () => {
  const {isMobile,isDesktop} = ResponsivePage()
  return (
    <>
      {isMobile && <Login />}
      {isDesktop && (
        <>
          <HeaderResponsive isDesktop={isDesktop} />
          <Login />
        </>
      )}
    </>
  );
}

export {LoginPage}