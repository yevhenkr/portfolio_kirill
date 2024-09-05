import styled from "styled-components";
import {PortfolioCard} from "./PortfolioCard";

export const Portfolio = () => {
    return (
        <StyledSection id={'Portfolio'}>
            <TitleText>portfolio</TitleText>
            <PortfolioWrap>
                <PortfolioCard/>
                <PortfolioCard/>
                <PortfolioCard/>
                <PortfolioCard/>

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


const TitleText = styled.h2`
    font-size: 120px;
    color: #fff;
    position: relative;
    z-index: 1;
    text-align: center;
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
`