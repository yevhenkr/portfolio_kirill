import "swiper/css";
import "swiper/css/navigation";

import styled from "styled-components";
import {myTheme} from "../../../../styles/Theme.styled.tsx";
import {Title} from "../../../ui/title/Title.tsx";

export function Achievement() {
    return (
        <StyledSection id={'Achievement'}>
            <Title title={"Achievement"} smallText={"awards and recognition"}/>
            <StyledDiv >
                <StyledGridItem>
                    <StyledSpan>Breakthrough designer of the year 2020</StyledSpan>
                </StyledGridItem>
                <StyledGridItem>
                    <StyledSpan>Breakthrough designer of the year 2020</StyledSpan>
                </StyledGridItem> <StyledGridItem>
                <StyledSpan>Breakthrough designer of the year 2020</StyledSpan>
            </StyledGridItem> <StyledGridItem>
                <StyledSpan>Breakthrough designer of the year 2020</StyledSpan>
            </StyledGridItem> <StyledGridItem>
                <StyledSpan>Breakthrough designer of the year 2020</StyledSpan>
            </StyledGridItem> <StyledGridItem>
                <StyledSpan>Breakthrough designer of the year 2020</StyledSpan>
            </StyledGridItem>
            </StyledDiv>
        </StyledSection>
    );
}

const StyledSpan = styled.span`
    display: inline-block; /* Необходим для правильного отображения ширины */
    position: relative;    /* Для псевдоэлемента или линии */
    padding-bottom: 2px;   /* Немного отступа снизу, чтобы линия не была вплотную к тексту */
    border-bottom: 2px solid black; /* Линия под текстом, 2px шириной */
    font-size: 20px;
`;

const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Три колонки одинаковой ширины */
    grid-template-rows: repeat(2, 1fr);    /* Два ряда одинаковой высоты */
    gap: 10px;
    row-gap: 122px;
`

const StyledGridItem = styled.div`
    text-align: center;
    border-bottom: 40px;
    max-width: 356px;
    ::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -40px;
        width: 100%;        /* Линия будет по ширине текста */
        height: 2px;        /* Толщина полосы 2px */
        background-color: ${myTheme.color.greyWhite}; /* Цвет полосы */
    }
`

const StyledSection = styled.section`
    color: ${myTheme.color.white};;
    padding-bottom: 145px;
    max-width: 1276px;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 1;
    background-size: cover; /* Обрезает изображение, чтобы оно полностью заполнило фон */
    background-position: center; /* Центрирует изображение по центру фона */
    background-repeat: no-repeat; /* Отключает повторение изображения */
`;

