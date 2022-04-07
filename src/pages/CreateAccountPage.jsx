import React from 'react'
import {HeaderResponsive} from '@responsiveComponents/HeaderResponsive';
import { useResponsivePage } from '@hooks/useResponsivePage';

import { CreateAccount } from '@components/MyAccount/CreateAccount';

const CreateAccountPage = () => {
    const {isMobile,isDesktop} = useResponsivePage()
    return (
      <>
        <HeaderResponsive isMobile={isMobile} isDesktop={isDesktop} />

        <CreateAccount />
      </>
    );
}

export {CreateAccountPage}