import React from 'react'

import {HeaderResponsive} from '@responsiveComponents/HeaderResponsive'
import { SentMail } from '@components/SentMail/SentMail';
import { ResponsivePage } from '@responsiveHook/ResponsivePage';

const MailSentPage = () => {
    const {isMobile, isDesktop} = ResponsivePage();
    return (
      <>
        {isMobile && <SentMail />}
        {isDesktop && (
          <>
            <HeaderResponsive isDesktop={isDesktop} />
            <SentMail />
          </>
        )}
      </>
    );
}

export {MailSentPage}