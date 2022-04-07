import React from 'react'
import { RecoverPass } from '@components/RecoverPass/RecoverPass';
import {HeaderResponsive} from '@responsiveComponents/HeaderResponsive'
import { useResponsivePage } from '@hooks/useResponsivePage';

const PasswordRecoveryPage = () => {
    const {isMobile,isDesktop} = useResponsivePage()
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