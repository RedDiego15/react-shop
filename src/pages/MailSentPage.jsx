import React from "react";

import { HeaderResponsive } from "@responsiveComponents/HeaderResponsive";
import { SentMail } from "@components/SentMail/SentMail";
import { useResponsivePage } from "@hooks/useResponsivePage";
const MailSentPage = () => {
	const { isMobile, isDesktop } = useResponsivePage();
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
};

export { MailSentPage };
