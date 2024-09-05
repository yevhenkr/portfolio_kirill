import styled from "styled-components";
import {PortfolioCard} from "./PortfolioCard";
import {myTheme} from "../../../../styles/Theme.styled.tsx";

export const Portfolio = () => {
    return (
        <StyledSection id={'Portfolio'}>
            <TextWrap>
                <TitleText>portfolio</TitleText>
                <BottomText>latest works</BottomText>
            </TextWrap>

            <PortfolioWrap>
                <PortfolioCard link={"https://player.vimeo.com/video/1004127210"}/>
                <PortfolioCard link={"https://player.vimeo.com/video/1004127210"}/>
                <PortfolioCard link={"https://player.vimeo.com/video/1004127210"}/>
                <PortfolioCard link={"https://player.vimeo.com/video/1004127210"}/>
            </PortfolioWrap>
        </StyledSection>
    );
};
const PortfolioWrap = styled.div`
    width: 100%;
    max-width: 1320px;
    margin: 0 auto;
    padding-bottom: 120px;
    display: grid;
    column-gap: 34px;
    row-gap: 140px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
`;

const TextWrap = styled.div`
    position: relative;
`;

const TitleText = styled.h2`
    font-size: 120px;
    color: #474b4f;
    position: relative;
    z-index: 1;
    text-align: center;
    font-family: Jost;
    font-size: 120px;
    line-height: 180.03px;
    letter-spacing: -0.04em;
    text-transform: uppercase;
`;

const BottomText = styled.h2`
    color: #ff0000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    opacity: 0.7;
    text-align: center;
    width: 104px;
    height: 22px;
    white-space: nowrap;
    font-weight: 400;
    font-size: 18px;
    margin: 0; /* Убирает внешние отступы, которые могут влиять на выравнивание */
    padding: 0; /* Убирает внутренние отступы, которые могут влиять на выравнивание */
    text-transform: uppercase;
    color: ${myTheme.color.white};
    background-color: #ECECEC2B;
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

const StyledSection = styled.section`
    padding-bottom: 170px;
    max-width: 100%;
    width: 100%;
    position: relative;
    background-color: white;
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 1;
    background-color: ${myTheme.color.backGround};
`