import styled from "styled-components";
import { myTheme } from "../../../styles/Theme.styled.tsx";
import photo from "../../../assets/img/photoUser.webp"; // Импортируйте изображение

export const Main = () => {
    return (
        <FullScreenBackground id={'Home'}>
            <TitleWrap>
                <StyledH2>Kirill Yakubov</StyledH2>
                <StyledH1>Motion Designer</StyledH1>
            </TitleWrap>
        </FullScreenBackground>
    );
};

const FullScreenBackground = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100vh;
    padding-top: 0;
    font-family: Poppins, sans-serif;
    font-weight: bold;
    font-size: 40px;
    background-image: url(${photo});
    background-size: contain;
    background-repeat: no-repeat;
    overflow: hidden;
`;
const TitleWrap = styled.div`
display: flex;
flex-direction: column;
align-items: center; /* Центрирует содержимое по горизонтали */
text-align: center; /* Центрирует текст внутри контейнера */
`;

const StyledH1 = styled.h1`
    font-weight: 500;
    background: linear-gradient(to right, #13B0F5, #E70FAA);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    @media (max-width: ${myTheme.screen.medium}) {
        max-width: 400px;
        font-size: 30px;
    }
    @media (max-width: ${myTheme.screen.small}) {
        font-size: 20px;
    }
`;

const StyledH2 = styled.h2`
    color: ${myTheme.color.black};
    @media (max-width: ${myTheme.screen.medium}) {
        max-width: 400px;
    }
    @media (max-width: ${myTheme.screen.small}) {
        font-size: 20px;
    }
`;
