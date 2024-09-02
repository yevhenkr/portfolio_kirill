import styled from "styled-components";

export function PortfolioCard() {
    return (
        <VideoWrapper>
            <StyledIframe
                src="https://player.vimeo.com/video/1004127210"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
            />
        </VideoWrapper>
    );
}

const VideoWrapper = styled.div`
    position: relative;
    max-width: 1250px;
    width: 100%;
    padding-top: 40%;
    margin: 0 auto;
    height: 0;
`;

const StyledIframe = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
`;
