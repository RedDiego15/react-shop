import React from 'react'
import { HeaderResponsive } from '@responsiveComponents/HeaderResponsive'
import { useResponsivePage } from '@hooks/useResponsivePage';

import { HeaderContainer} from '@containers/HeaderContainer'
import { ItemDetail } from '@components/ItemDetail/ItemDetail';
const ItemDetailMobile = () => {
  const {isMobile} = useResponsivePage()
    return (
      <HeaderContainer>
        <HeaderResponsive isMobile={isMobile} />
        <ItemDetail isMobile={isMobile}/>
      </HeaderContainer>
    );
}

export {ItemDetailMobile}