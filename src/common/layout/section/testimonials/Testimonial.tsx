import { SwiperSlide } from "swiper/react";
import styled from "styled-components";

type PropsType = {
    text: string;
    name: string;
    position: string;
    imgSrc: string;
};

export function Testimonial(props: PropsType) {
    return (
        <SwiperSlide>
            <StyledContent>
                <StyledP>{props.text}</StyledP>
                <StyledImg src={props.imgSrc} alt="User testimonial"/>
                <span>{props.name}</span>
                <StyledSpan>{props.position}</StyledSpan>
            </StyledContent>
        </SwiperSlide>
    );
}

const StyledImg = styled.img`
padding-bottom: 9px`
const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 120px;
    text-align: center;
`;

const StyledP = styled.p`
    font-size: 28px;
   padding-bottom: 50px;
`;

const StyledSpan = styled.span`
    font-weight: bold;
    margin-top: 5px;
`;
