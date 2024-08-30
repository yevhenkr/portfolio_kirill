import styled from "styled-components";
import {FlexWrapper} from "../../../ui/flefWrapper/FlexWrapper.tsx";
import first from "../../../../assets/img/Port3.png";
import second from "../../../../assets/img/Port3.png";
import therd from "../../../../assets/img/Port3.png";
import {myTheme} from "../../../../styles/Theme.styled.tsx";
import {PortfolioCard} from "./PortfolioCard.tsx";

export const Portfolio = () => {
    return (
        <StyledSection id={'Portfolio'}>
            <FlexWrapperWithMediaQuery $wrap={"wrap"} $gap={"20px"} $flex_direction={"row"} $justify={"space-around"}>
                <PortfolioCard link={"https://vasilenko-evgen-xd8s.vercel.app/"} label={"Portfolio"} bgColor={"rgba(108,99,255,0.27)"} color={"#6C63FF"} img={first}/>
                <PortfolioCard link={"https://github.com/MrEvgeniy1989/cards"} label={"Cards"} bgColor={"rgba(77,194,241,0.25)"} color={"#4581F6"} img={second}/>
                <PortfolioCard link={"https://simpel-food.vercel.app/"} label={"Simple food"} bgColor={"rgba(0,0,0,0.22)"} color={`${myTheme.color.black}`} img={therd}/>
            </FlexWrapperWithMediaQuery>
        </StyledSection>
    );
};
const FlexWrapperWithMediaQuery = styled(FlexWrapper)`
    display: flex;
    max-width: 1628px;
    margin: 0 auto;
    gap: 50px;
    flex-direction: row;
    @media (max-width: ${myTheme.screen.medium}) {
        flex-wrap: wrap;
        box-sizing: border-box;
        padding: 20px;
        max-width: 100%;
        flex-direction: column;
        align-items: center;
        gap: 30px;

    }`

const StyledSection = styled.section`
    padding-bottom: 170px;
    max-width: 100%;
    width: 100%;
    position: relative;
    background-color: white;
    z-index: 1;

    &::after, &::before {
        content: "";
        position: absolute;
        background-color: rgba(69, 129, 246, 0.5);
        border-radius: 50%;
        filter: blur(40px);
        z-index: -1;
    }

    &::after {
        width: 100px;
        height: 100px;
        top: 17%;
        left: 10%;
        z-index: -2;
    }

    &::before {
        width: 250px;
        height: 250px;
        top: 51%;
        left: 68%;
    }

    @media (max-width: ${myTheme.screen.medium}) {
        padding-bottom: 70px;
        gap: 30px;
        &::after, &::before {
            display: none;
        }
    }
`