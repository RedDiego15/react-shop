import React from "react";
import LogoSale from "@logos/logo_yard_sale.svg";
import { useNavigate } from "react-router-dom";

function RecoverPass() {
	const navigate = useNavigate();
	const handleSubmit = (event) => {
		event.preventDefault();
		navigate("/sent-email");
	};
	return (
		<div className="login">
			<div className="form-container">
				<img src={LogoSale} alt="logo" className="logo" />

				<h1 className="title">Password Recovery</h1>
				<p className="subtitle">
					Inform de email address used to create your account
				</p>

				<form onSubmit={handleSubmit} className="form">
					<label htmlFor="password" className="label">
						Email addres
					</label>
					<input
						type="text"
						id="password"
						placeholder="account@outlook.com"
						className="input input-password"
					/>

					<input
						type="submit"
						value="Submit"
						className="primary-button login-button"
					/>
					<a href="/">Forgot my password</a>
				</form>
			</div>
		</div>
	);
}

export { RecoverPass };
