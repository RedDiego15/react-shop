import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@styles/GlobalStyles';
import React from 'react';

const themes = {
	ligth: {
		white: ' #FFFFFF',
		black: ' #000000',
		very_light_pink: ' #C7C7C7',
		text_input_field: ' #F7F7F7',
		hospital_green: ' #ACD9B2',
		sm: ' 14px',
		md: ' 16px',
		lg: ' 18px',
	},
	dark: {},
};

export const Theme = (props) => (
	<ThemeProvider theme={themes[props.theme]}>
		<GlobalStyles />
		{props.children}
	</ThemeProvider>
);
