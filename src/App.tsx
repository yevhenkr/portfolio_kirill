import styled from "styled-components";
import {myTheme} from "./styles/Theme.styled";
import {Portfolio} from "./common/layout/section/portfolio/Portfolio";
import {Header} from "./common/layout/header/Header";
import {Main} from "./common/layout/main/main";
import {About} from "./common/layout/section/about/About";
import {Contact} from "./common/layout/section/contact/Contact";
import {Footer} from "./common/layout/footer/Footer.tsx";
import {useState} from "react";


export function App() {
    const [isabbutattop, setIsabbutattop] = useState(false);

    return (
        <AppStyle>
            <Header isaboutattop={isabbutattop} /> {/* Исправляем на camelCase */}
            <Main />
            <About setIsAboutAtTop={setIsabbutattop} />
            <Portfolio />
            <Contact />
            <Footer />
        </AppStyle>
    );
}


const AppStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: Poppins, sans-serif;
    font-weight: ${myTheme.font.weights.regular};
    font-size: 35px;
    color: ${myTheme.color.navy};

    @media (max-width: ${myTheme.screen.medium}) {
        max-width: 768px;
        width: 100%;
    }
`;

