import React from "react";
import { AccountContainer } from "@containers/AccountContainer";

function EditAccount() {
	const handleSubmit = () => {};
	return (
		<AccountContainer>
			<input
				type="submit"
				value="Edit"
				className="secondary-button login-button"
			/>
		</AccountContainer>
	);
}

export { EditAccount };
