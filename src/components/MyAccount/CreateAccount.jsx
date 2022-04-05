import React from "react";
import {AccountContainer} from "../../Containers/AccountContainer";
function CreateAccount() {
  return (
    <AccountContainer>
      <input
        type="submit"
        value="Create"
        className="primary-button login-button"
      ></input>
    </AccountContainer>
  );
}

export {CreateAccount};
