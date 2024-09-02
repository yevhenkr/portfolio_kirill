// import {myTheme} from "./styles/Theme.styled.tsx";
// import s from "./styles/app.scss";
import styled from "styled-components";
import {myTheme} from "./styles/Theme.styled.tsx";
import {Portfolio} from "./common/layout/section/portfolio/Portfolio.tsx";


export function App() {
    return (
        <AppStyle>
            <Portfolio/>
        </AppStyle>
    )

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

