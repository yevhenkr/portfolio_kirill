import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import styled from "styled-components";
import {myTheme} from "../../../../styles/Theme.styled.tsx";
import {Navigation} from "swiper/modules";
import {Testimonial} from "./Testimonial.tsx";
import {Title} from "../../../ui/title/Title.tsx";

export function Testimonials() {
    return (
        <StyledSection id={'Testimonials'}>
            <Title title={"Testimonials"} smallText={"what clients says"} />
            <Swiper
                navigation={true}
                modules={[Navigation]}  // Подключаем модуль Navigation
                style={{display: "flex", justifyContent: "center", maxWidth: "1160px"}}
                className="mySwiper"
            >
                <SwiperSlide>
                    <StyledDiv>
                        <Testimonial name={"Lucas wolfer"}
                                     text={"“Этот дизайнер сочетает в себе креативность и техническое мастерство, создавая визуально захватывающие и функциональные решения. Его работы отражают глубокое понимание тенденций и потребностей клиентов, привнося изысканный стиль в каждый проект.”"}
                                     position={"ceo - raisins"}
                                     imgSrc={"../../../../../src/assets/img/UserTetstimonials.png"}/>
                    </StyledDiv>
                </SwiperSlide>
                <SwiperSlide>
                    <StyledDiv>
                        <Testimonial name={"Lucas wolfer"}
                                     text={"“Этот дизайнер сочетает в себе креативность и техническое мастерство, создавая визуально захватывающие и функциональные решения. Его работы отражают глубокое понимание тенденций и потребностей клиентов, привнося изысканный стиль в каждый проект.”"}
                                     position={"ceo - raisins"}
                                     imgSrc={"../../../../../src/assets/img/UserTetstimonials.png"}/>
                    </StyledDiv>
                </SwiperSlide>
                <SwiperSlide>
                    <StyledDiv>
                        <Testimonial name={"Lucas wolfer"}
                                     text={"“Этот дизайнер сочетает в себе креативность и техническое мастерство, создавая визуально захватывающие и функциональные решения. Его работы отражают глубокое понимание тенденций и потребностей клиентов, привнося изысканный стиль в каждый проект.”"}
                                     position={"ceo - raisins"}
                                     imgSrc={"../../../../../src/assets/img/UserTetstimonials.png"}/>
                    </StyledDiv>
                </SwiperSlide>
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
    display: flex;
    flex-direction: column;
    gap: 60px;
    z-index: 1;
    background-color: ${myTheme.color.backGround};
    background-image: url("../../../../../src/assets/img/Testimonions.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    @media (max-width: ${myTheme.screen.medium}) {
        height: 200px;
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
