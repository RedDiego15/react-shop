import React from 'react'
import {HeaderResponsive} from '@responsiveComponents/HeaderResponsive';
import { CreatePass } from '../components/CreatePass/CreatePass';
import { ResponsivePage } from '@responsiveHook/ResponsivePage';

const CreatePasswordPage = () => {
    const {isMobile,isDesktop} = ResponsivePage()
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