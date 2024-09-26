import { useRef, useState } from 'react';
import styled from "styled-components";
import { SoundOnIcon } from "../../../assets/icons/SoundOnIcon.tsx";
import { SoundOffIcon } from "../../../assets/icons/SoundOffIcon.tsx";
import myAudio from '../../../assets/audio/Infinity.mp3';

export const    CustomAudioPlayer = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isSound, setSound] = useState<boolean>(true);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }

    };

    const changeSound = () => {
        setSound(!isSound);
        if (audioRef.current) {
            audioRef.current.muted = !isSound; // Мутим/размутим аудио
        }
        togglePlay();
    };

    return (
        <ButtonWrapper>
            <Audio ref={audioRef} src={myAudio} />
            <SoundButton onClick={changeSound}>
                {!isSound ? <SoundOnIcon color="white" /> : <SoundOffIcon color="white" />}
            </SoundButton>
        </ButtonWrapper>
    );
};

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const SoundButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

const Audio = styled.audio`
    display: none; /* Скрываем стандартный аудиоплеер */
`;
