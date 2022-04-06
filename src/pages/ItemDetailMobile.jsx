import React from 'react'
import { HeaderResponsive } from '@responsiveComponents/HeaderResponsive'
import { ResponsivePage } from '@responsiveHook/ResponsivePage';

import { HeaderContainer} from '@containers/HeaderContainer'
import { ItemDetail } from '@components/ItemDetail/ItemDetail';
const ItemDetailMobile = () => {
  const {isMobile} = ResponsivePage()
    return (
      <HeaderContainer>
        <HeaderResponsive isMobile={isMobile} />
        <ItemDetail isMobile={isMobile}/>
      </HeaderContainer>
    );
}

export {ItemDetailMobile}