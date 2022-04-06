import React from 'react'
import {HeaderResponsive} from '@responsiveComponents/HeaderResponsive';
import { ResponsivePage } from '@responsiveHook/ResponsivePage';

import { CreateAccount } from '@components/MyAccount/CreateAccount';

const CreateAccountPage = () => {
    const {isMobile,isDesktop} = ResponsivePage()
    return (
      <>
        <HeaderResponsive isMobile={isMobile} isDesktop={isDesktop} />

        <CreateAccount />
      </>
    );
}

export {CreateAccountPage}