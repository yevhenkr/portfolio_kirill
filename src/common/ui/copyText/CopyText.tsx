import {CustomAudioPlayer} from "../customAudioPlayer/CustomAudioPlayer.tsx";
import {BurgerIcon} from "../../../assets/icons/burgerIcon.tsx";
import {myTheme} from "../../../styles/Theme.styled.tsx";
import styled from "styled-components";
import {useState} from "react";

type HeaderType = {
    isAboutTop: boolean;
    setHeadMenuOpen?: (isOpen: boolean) => void;
};

export const CopyText = () => {
    const [isClicked, setIsClicked] = useState(false)
    const textToCopy = "kirill.yakubov.km@gmail.com";

    const copyText = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            setIsClicked(true);  // Изменяем состояние на true при клике
            setTimeout(() => setIsClicked(false), 300);
        } catch (error) {
            console.error("Не вдалося скопіювати текст: ", error);
        }
    };

    return (
            <ButtonWrapper>
                <Burger onClick={copyText} isClicked={isClicked}>
                    <BurgerIcon color={`${myTheme.color.white}`}/>
                </Burger>
            </ButtonWrapper>
    );
};
const ButtonWrapper = styled.div`
    display: flex;
    position: absolute;
    right: -45px;
    top: 2px;
`
const Burger = styled.a<{isClicked:boolean}>`
    display: flex;
    top: 10px;
    position: relative;
    background-color: ${({ isClicked }) =>
            isClicked ? `${myTheme.color.yellow}` : "transparent"};
    transition: background-color 0.3s ease;
    border-radius: 5px;
    cursor: pointer;
    padding: 5px;
`;