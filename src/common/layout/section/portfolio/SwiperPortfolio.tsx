import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import classRoom from "../../../../assets/video/Classroom.mp4";

import styled from "styled-components";
import {myTheme} from "../../../../styles/Theme.styled.tsx";
import {Navigation} from "swiper/modules";
import {Title} from "../../../ui/title/Title.tsx";
import {useState} from "react";


export function SwiperPortfolio() {
    // Хранение состояния, чтобы контролировать взаимодействие
    const [isInteracting, setIsInteracting] = useState(false);

    return (
        <StyledSection id={'Testimonials'}>
            <Title title={"Testimonials"} smallText={"what clients says"} />
            <Swiper
                navigation={true}
                allowSlidePrev={true}
                modules={[Navigation]}
                loop={true}
                slidesPerView={3}
                grabCursor={!isInteracting} // Включаем "руку", если не взаимодействуем с видео
                style={{display: "flex", justifyContent: "center", maxWidth: "1160px"}}
                className="mySwiper"
            >
                <SwiperSlide>
                    <VideoWrapper>
                        <StyledVideo
                            src={classRoom}
                            controls
                            onMouseEnter={() => setIsInteracting(true)}  // Отключаем возможность листать Swiper, когда мышь на видео
                            onMouseLeave={() => setIsInteracting(false)} // Включаем возможность листать, когда мышь уходит с видео
                        />
                    </VideoWrapper>
                </SwiperSlide>
                <SwiperSlide>
                    <VideoWrapper>
                        <StyledVideo
                            src={classRoom}
                            controls
                            onMouseEnter={() => setIsInteracting(true)}
                            onMouseLeave={() => setIsInteracting(false)}
                        />
                    </VideoWrapper>
                </SwiperSlide>
                <SwiperSlide>
                    <VideoWrapper>
                        <StyledVideo
                            src={classRoom}
                            controls
                            onMouseEnter={() => setIsInteracting(true)}
                            onMouseLeave={() => setIsInteracting(false)}
                        />
                    </VideoWrapper>
                </SwiperSlide>
                <SwiperSlide>
                    <VideoWrapper>
                        <StyledVideo
                            src={classRoom}
                            controls
                            onMouseEnter={() => setIsInteracting(true)}
                            onMouseLeave={() => setIsInteracting(false)}
                        />
                    </VideoWrapper>
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

const VideoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-right: 120px;
    padding-left: 120px;
`;

const StyledVideo = styled.video`
    max-width: 100%;
    max-height: 100%;
    height: auto;
    border: none;
    object-fit: contain;
`;
