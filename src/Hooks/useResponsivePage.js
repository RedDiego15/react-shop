import { useMediaQuery } from 'react-responsive';
const useResponsivePage = () => {
	const isMobile = useMediaQuery({
		query: '(max-device-width: 639px)',
	});

	const isDesktop = useMediaQuery({
		query: '(min-device-width: 750px)',
	});

	return {
		isMobile,
		isDesktop,
	};
};

export { useResponsivePage };
