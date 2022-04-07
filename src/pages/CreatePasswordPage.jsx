import React from 'react'
import {HeaderResponsive} from '@responsiveComponents/HeaderResponsive';
import { CreatePass } from '../components/CreatePass/CreatePass';
import { useResponsivePage } from '@hooks/useResponsivePage';

const CreatePasswordPage = () => {
    const {isMobile,isDesktop} = useResponsivePage()
    return (
        <>
        {isMobile && <CreatePass />}
        {isDesktop && (
            <>
            <HeaderResponsive isDesktop={isDesktop} />
            <CreatePass />
            </>
        )}
        </>
    );
}

export  {CreatePasswordPage}