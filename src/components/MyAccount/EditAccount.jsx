import React from 'react'
import { AccountContainer } from '../../Containers/AccountContainer'

function EditAccount() {
  return (
    <AccountContainer>
        <input type="submit" value="Edit" className="secondary-button login-button"/>
    </AccountContainer>
  )
}

export {EditAccount}