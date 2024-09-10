import styled from "styled-components";

type PropsType = {
    link: string
}

export function PortfolioCard(props: PropsType) {

    return (
        <VideoWrapper>
            <StyledIframe
                src={props.link}
                allow="autoplay; fullscreen; picture-in-picture"
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
    border-color: transparent;
`;
