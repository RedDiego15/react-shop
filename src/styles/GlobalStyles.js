import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
a {
    text-decoration: none;
  }
h1 {
    font-size: 30px;
    color: ${(p) => p.theme.title_color};
}
`;
