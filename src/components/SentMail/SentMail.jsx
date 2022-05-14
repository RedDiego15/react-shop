import React from "react";
import LogoSale from "@logos/logo_yard_sale.svg";
import MailIcon from "@icons/mail.svg";
import { useNavigate } from "react-router-dom";
function SentMail() {
	const navigate = useNavigate();
	return (
		<div class="login">
			<div class="form-container">
				<img src={LogoSale} alt="logo" class="logo" />

				<h1 class="title">Email has been sent!</h1>
				<p class="subtitle">
					Please check your inbox for instructions on how to reset the password
				</p>

				<div class="email-image">
					<img src={MailIcon} alt="email" />
				</div>

				<button
					onClick={() => navigate("/login")}
					class="primary-button login-button"
				>
					Login
				</button>

				<p class="resend">
					<span>Didn't receive the email?</span>
					<a href="/">Resend</a>
				</p>
			</div>
		</div>
	);
}

export { SentMail };
