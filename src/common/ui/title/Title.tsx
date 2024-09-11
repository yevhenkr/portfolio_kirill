import styled from "styled-components";
import {myTheme} from "../../../styles/Theme.styled.tsx";

type PropsType = {
    title: string;
    smallText: string;
};

export function Title(props: PropsType) {
    return (
        <TextWrap>
            <TitleText>{props.title}</TitleText>
            <BottomText>{props.smallText}</BottomText>
        </TextWrap>
    );
}

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
const BottomText = styled.h3`
    font-family: Inconsolata;
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
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    color: ${myTheme.color.white};
    background-color: #ECECEC2B;
    display: inline;
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

