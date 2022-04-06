import React from 'react'
import { RecoverPass } from '@components/RecoverPass/RecoverPass';
import {HeaderResponsive} from '@responsiveComponents/HeaderResponsive'
import { ResponsivePage } from '@responsiveHook/ResponsivePage';

const PasswordRecoveryPage = () => {
    const {isMobile,isDesktop} = ResponsivePage()
    return (
        <>
        {isMobile && <RecoverPass />}
        {isDesktop && (
            <>
            <HeaderResponsive isDesktop={isDesktop} />
            <RecoverPass />
            </>
        )}
        </>
    );
}

export {PasswordRecoveryPage}