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
    width: 100%;
    max-width: 630px;
    height: 100%;
    border: none;
`;

const StyledIframe = styled.iframe`
    width: 100%;
    aspect-ratio: 16 / 9; /* Соотношение сторон 16:9 */
    overflow: hidden;
    border-radius: 8px;
`;
