import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import styled from "styled-components";
import {myTheme} from "../../../../styles/Theme.styled.tsx";
import {Navigation} from "swiper/modules";
import classRoom from "../../../../assets/video/Classroom.mp4";

export function SwiperPortfolio() {
    return (
        <StyledSection>
            <Swiper
                slidesPerView={1.5}
                spaceBetween={20}
                navigation={true}
                loop={true}
                centeredSlides={true}
                modules={[Navigation]}
                className="mySwiper"
                style={{maxWidth: "540px", padding: '0 15px'}} // Установлена максимальная ширина
            >
                <StyledSwiperSlide  style={{width: "100%", height:"100%"}}>
                    <VideoWrapper>
                        <StyledVideo
                            src={classRoom} // Укажите путь к вашему видео
                            controls
                        />
                    </VideoWrapper>
                </StyledSwiperSlide>
                <StyledSwiperSlide style={{width: "100%", height:"100%"}}>
                    <VideoWrapper>
                        <StyledVideo
                            src={classRoom}
                            controls
                        />
                    </VideoWrapper>
                </StyledSwiperSlide>
                <StyledSwiperSlide style={{width: "100%", height:"100%"}}>
                    <VideoWrapper>
                        <StyledVideo
                            src={classRoom}
                            controls
                        />
                    </VideoWrapper>
                </StyledSwiperSlide>
                <StyledSwiperSlide style={{width: "100%", height:"100%"}}>
                    <VideoWrapper>
                        <StyledVideo
                            src={classRoom}
                            controls
                        />
                    </VideoWrapper>
                </StyledSwiperSlide>
                {/*<SwiperSlide>*/}
                {/*    <StyledDiv>*/}
                {/*        <PortfolioCard link={"https://player.vimeo.com/video/1004127210"}/>*/}
                {/*    </StyledDiv>*/}
                {/*</SwiperSlide>*/}
            </Swiper>
        </StyledSection>
    );
}

const StyledSection = styled.section`
   
    color: ${myTheme.color.white};;
    padding-bottom: 100px;
    width: 100%;
    background-color: ${myTheme.color.white};
    display: flex;
    z-index: 1;
    background-color: ${myTheme.color.backGround};
    @media (max-width: ${myTheme.screen.medium}) {
        height: 200px;
    }

    .swiper-button-next, .swiper-button-prev {
        color: ${myTheme.color.white};
    }
`;

const StyledSwiperSlide = styled(SwiperSlide)`
    opacity: 0.7;
    transition: opacity 0.3s ease;
`;

const VideoWrapper = styled.div`
    width: 100%;
    max-width: 400px;
    height: auto;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledVideo = styled.video`
    max-width: 100%;
    max-height: 100%;
    height: auto;
    border-radius: 8px;
    border: none;
    object-fit: contain;
`;
