import styled from "styled-components";
import { myTheme } from "../../../styles/Theme.styled.tsx";
import logo from "../../../assets/img/userPhoto.webp"; // Импортируйте изображение

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

const TitleWrap = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 630px;
    margin: auto 0; /* Центрирует содержимое */
    @media (max-width: ${myTheme.screen.small}) {
        max-width: 290px; /* Уменьшение ширины для маленьких экранов */
    }
`;

const FullScreenBackground = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 20px;
    height: 100vh; /* Установите высоту в 100% от высоты окна просмотра */
    padding-top: 265px;
    padding-bottom: 200px;
    font-family: Poppins, sans-serif;
    font-weight: bold;
    font-size: 40px;
    background-image: url(${logo}); /* Указываем правильный путь к изображению */
    background-size: cover; /* Растягивает изображение, сохраняя соотношение сторон */
    background-position: center; /* Центрирует изображение */
    background-repeat: no-repeat; /* Не повторяет изображение */
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
