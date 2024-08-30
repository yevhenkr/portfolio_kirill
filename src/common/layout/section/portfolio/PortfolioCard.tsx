import styled from "styled-components";
import {FlexWrapper} from "../../../ui/flefWrapper/FlexWrapper.tsx";
import {myTheme} from "../../../../styles/Theme.styled.tsx";
import Tilt from 'react-parallax-tilt';

type PropsType = {
    img?: string;
    link: string;
    bgColor: string;
    color: string;
    label: string;
}

export const PortfolioCard = (props: PropsType) => {
    return (
        <WrapperWithMediaQ $backgroundColor={`${myTheme.color.white}`} $flex={"1"} $flex_direction={"column"}
                           $borderRadius={"13px"} $align_i={"center"} $min_width={"320px"} $padding={"15px"}
                           $boxShadow={"0px 0px 10px rgba(0, 0, 0, 0.5)"}>
            <FlexWrapper $padding={"10px 0"} $flex_direction={"row"} $gap={"10px"} $justify={"flex-start"}
                         $width={"100%"}>
                <StyledSpan color={`${props.color}`}>{props.label}</StyledSpan>
            </FlexWrapper>
            <a href={props.link}>
                <Tilt>
                    <ImageContainer $before_content={""} $before_width={"195px"}
                                    $before_height={"195px"} $before_background_color={`${props.bgColor}`}>
                        <StyledImg src={`${props.img}`} alt={"props.alt"}/>
                    </ImageContainer>
                </Tilt></a>
        </WrapperWithMediaQ>
    );
};

const WrapperWithMediaQ = styled(FlexWrapper)`
    @media (max-width: ${myTheme.screen.medium}) {
        flex: 1 1 calc(33.33% - 40px);
        box-sizing: border-box;
        min-width: 250px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-left: 105px;
        max-width: 100%;
        top: -50px;
        left: -80px;
    }`

type StyledSpanType = {
    color?: string
    width?: string
}

const StyledSpan = styled.span<StyledSpanType>`
    color: ${props => props.color || ""};
    width: ${props => props.width || ""};
    font-weight: ${myTheme.font.weights.semiBold};
    font-size: 25px;
    display: flex;
    align-items: center;
`

type DivType = {
    $before_content?: string;
    $before_width?: string;
    $before_height?: string;
    $before_background_color?: string;
}

const ImageContainer = styled.div<DivType>`
    position: relative;
    display: block;
    max-width: 450px;
    width: 100%;
    margin-left: auto;
    border-radius: 7px;
    border: 1px solid rgba(0, 0, 0, 0.09);

    a {
        position: absolute;
        background-color: ${myTheme.color.navy};
        box-shadow: 0 4px 4px 0 rgba(77, 86, 96, 0.13);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 15px;
        border-radius: 12px;
        padding: 10px 20px;
        color: ${myTheme.color.white};
        z-index: 2;
        opacity: 0;
    }

    &:hover {
        a {
            opacity: 1;
        }

        opacity: 1;
    }

    &::before {
        content: ${props => `'${props.$before_content || ''}'`};
        position: absolute;
        width: ${props => props.$before_width || ''};
        height: ${props => props.$before_height || ''};
        background-color: ${props => props.$before_background_color || ''};
        border-radius: 50%;
        top: -60px;
        left: -30px;
        z-index: 0;
    }

    @media (max-width: ${myTheme.screen.medium}) {
        max-width: calc(100% - 30px);
        width: 600px;
        img {
            filter: blur(2px);
        }

        a {
            filter: none;
            opacity: 1;
        }

        &::before {
            width: 280px;
            height: 280px;
            top: -70px;
            left: -120px;
        }
    }

    @media (max-width: ${myTheme.screen.small}) {
        max-width: calc(100% - 30px);
        width: 410px;

        &::before {
            width: 280px;
            height: 280px;
            left: -110px;
        }
    }

    @media (max-width: ${myTheme.screen.small}) {
        &::before {
            width: 220px;
            height: 220px;
            top: -60px;
            left: -120px;
        }
    }

`

const StyledImg = styled.img`
    display: block;
    width: 765px;
    max-width: 100%;
    position: relative;
    border-radius: 7px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    z-index: 1;

    :hover {
        filter: blur(2px);
    }
`