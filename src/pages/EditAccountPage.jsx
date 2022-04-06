import {HeaderResponsive} from '@responsiveComponents/HeaderResponsive';
import { ResponsivePage } from '@responsiveHook/ResponsivePage';
import React from 'react'
import { EditAccount } from '@components/MyAccount/EditAccount';

const EditAccountPage = () => {
    const {isMobile,isDesktop} = ResponsivePage()
    return (
      <>
        <HeaderResponsive isMobile={isMobile} isDesktop={isDesktop} />

        <EditAccount />
      </>
    );
}

export {EditAccountPage}