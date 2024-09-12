import styled from "styled-components";
import { myTheme } from "../../../styles/Theme.styled";
import photo from "../../../assets/img/photoUser.webp"; // Импортируйте изображение

export const Main = () => {
    return (
        <FullScreenBackground id={'Home'}>
            <MainText>
                <StyledSpan> hi! everyone </StyledSpan>
                <StyledH2>Kirill Yakubov</StyledH2>
                <StyledH1>Motion Designer</StyledH1>
                <StyledP>Specialize in motion design, 2D and 3D visualization, product promo, logo & text animation, video editing.</StyledP>
                <SocialLink href={'https://github.com/yevhenkr'} rel={'noreferrer'}>
                    get in touch
                </SocialLink>
            </MainText>
        </FullScreenBackground>
    );
};

const FullScreenBackground = styled.main`
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Выравнивание по левому краю */
    justify-content: flex-start;
    width: 100%;
    height: 100vh;
    padding-top: 0;
    font-family: Poppins, sans-serif;
    font-weight: bold;
    font-size: 40px;
    background-image: url(${photo});
    background-size: cover; /* Используйте cover, чтобы изображение заполняло весь контейнер */
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
    box-sizing: border-box;
`;
const MainText = styled.div`
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Выравнивание содержимого по левому краю */
    margin-top: 300px; /* Убирает левый отступ */
    margin-left: 320px; /* Убирает левый отступ */
    padding: 0; /* Убирает внутренние отступы */
    width: 100%; /* Убедитесь, что контейнер занимает всю ширину родителя */
`;

const StyledH1 = styled.h1`
    background-clip: text;
    margin: 0; /* Убирает внешние отступы, которые могут влиять на выравнивание */
    padding: 0; /* Убирает внутренние отступы, которые могут влиять на выравнивание */
    text-align: left;
    color: ${myTheme.color.white};
    font-size: 108px;
    font-weight: 600;
    line-height: 119.9px;
    letter-spacing: -0.04em;
    text-align: left;
    padding-bottom: 34px;
`;

const StyledH2 = styled.h2`
    font-weight: 600;
    font-size: 108px;
    text-align: left;
    color: ${myTheme.color.white};
    margin: 0; /* Убирает внешние отступы, которые могут влиять на выравнивание */
    padding: 0; /* Убирает внутренние отступы, которые могут влиять на выравнивание */
`;

const StyledSpan = styled.span`
    font-weight: 400;
    font-size: 18px;
    margin: 0; /* Убирает внешние отступы, которые могут влиять на выравнивание */
    padding: 0; /* Убирает внутренние отступы, которые могут влиять на выравнивание */
    text-align: left;
    text-transform: uppercase;
    color: ${myTheme.color.white};
    background-color: ${myTheme.color.textBackground};
    display: inline;
    font-family: Inconsolata;
    line-height: 30px;
    letter-spacing: 0.24em;

    &:before,
    &:after {
        content: '';
        display: inline-block;
        width: 0;
        height: 0;
    }
`;

const StyledP = styled.p`
    position: relative;
    top: -2px;
    left: 2px;
    color: ${myTheme.color.white};
    padding-bottom: 68px;
`

const SocialLink = styled.a`
    display: flex;
    color: ${myTheme.color.white};
    padding: 18px 52px;
    border: 1px solid red;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    text-decoration: none;
`