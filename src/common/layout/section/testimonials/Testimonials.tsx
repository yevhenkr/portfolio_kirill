import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import styled from "styled-components";
import {myTheme} from "../../../../styles/Theme.styled.tsx";
import {Navigation} from "swiper/modules";
import {Testimonial} from "./Testimonial.tsx";

export function Testimonials() {
    return (
        <StyledSection>
            <Swiper
                navigation={true}
                modules={[Navigation]}  // Подключаем модуль Navigation
                style={{display: "flex", justifyContent: "center", maxWidth: "1160px"}}
                className="mySwiper"
            >
                <SwiperSlide>
                    <StyledDiv>
                       <Testimonial name={"Lucas wolfer"} text={"“Lorem ipsum dolor sit amet, elit consectetur adipiscing. Odio tincidunt et, massa, turpis nec dolor posuere tempus. Nulla congue et dolor sit amet, elit consectetur adipiscing.”"} position={"ceo - raisins"} imgSrc={"../../../../../src/assets/img/UserTetstimonials.png"}/>
                    </StyledDiv></SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        </StyledSection>
    );
}

const StyledSection = styled.section`
    color: ${myTheme.color.white};;
    padding-bottom: 145px;
    max-width: 100%;
    width: 100%;
    //height: 300px; // Задаем фиксированную высоту для контейнера
    position: relative;
    background-color: white;
    display: flex;
    flex-direction: column;
    gap: 60px;
    z-index: 1;
    background-color: ${myTheme.color.navy};
    @media (max-width: ${myTheme.screen.medium}) {
        height: 200px;
    }
    .swiper-button-next, .swiper-button-prev {
        color: ${myTheme.color.white}; // Замените на желаемый цвет стрелок
    }
`;

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-right: 120px;
    padding-left: 120px;
`
