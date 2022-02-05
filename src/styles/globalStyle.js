import { createGlobalStyle } from "styled-components";
import "@fontsource/montserrat";
import "@fontsource/montserrat/200.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/mononoki";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: Montserrat;
        background: #eaeaea;
    }
`;

export default GlobalStyle;
