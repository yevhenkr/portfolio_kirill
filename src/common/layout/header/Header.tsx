import {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {FlexWrapper} from '../../ui/flefWrapper/FlexWrapper';
import {myTheme} from "../../../styles/Theme.styled.tsx";
import {BurgerIcon} from "../../../assets/icons/burgerIcon.tsx";
import {OpenHeaderMenu} from "./headerMenu/OpenHeaderMenu.tsx";
import {SoundOnIcon} from "../../../assets/icons/SoundOnIcon.tsx";
import {SoundOffIcon} from "../../../assets/icons/SoundOffIcon.tsx";

type HeaderType = {
    isAboutTop: boolean;
    setHeadMenuOpen?: (isOpen: boolean) => void;
};

export const Header = (props: HeaderType) => {
    const headerRef = useRef<HTMLDivElement>(null);
    const [headerMenu, setHeaderMenu] = useState<boolean>(false);
    const [isSound, setSound] = useState<boolean>(false)

    const handleClick = () => {
        const newMenuState = !headerMenu;
        setHeaderMenu(newMenuState);
    };

    const changeSound = () => {
        setSound(!isSound)
    };

    const goToSection = (elementPosition: number) => {
        handleClick();

        setTimeout(() => {
            window.scrollTo({
                top: elementPosition,
                behavior: "smooth"
            });
        }, 0);
    };
    // useEffect(() => {
    //     // document.documentElement.setAttribute('data-theme', theme)
    // }, [isSound])

    return (
        <>
            <HeaderWrap $isAboutAtTop={props.isAboutTop} ref={headerRef} $flex_direction={"row"} $display={"flex"}>
                <NameSpan>Kirill Y.</NameSpan>
                <ButtonWrapper>
                    <Sound onClick={changeSound}>
                        {isSound ? <SoundOffIcon color={`${myTheme.color.white}`}/> : <SoundOnIcon color={`${myTheme.color.white}`}/>}
                    </Sound>
                    <Burger onClick={handleClick}>
                        <BurgerIcon color={`${myTheme.color.white}`}/>
                    </Burger>
                </ButtonWrapper>
            </HeaderWrap>
            <OpenHeaderMenu headerMenu={headerMenu} goToSection={goToSection}/>
        </>
    );
};

const Burger = styled.a`
    display: flex;
    align-items: center;
    position: relative;
`;
const ButtonWrapper = styled.div`
    display: flex;
    position: relative;
    column-gap: 40px;
    right: 80px;
`
const Sound = styled.button`
    display: flex;
    align-items: center;
    position: relative;
    background-color: transparent;
    padding: 0;
`;

const NameSpan = styled.span`
    display: flex;
    align-items: center;
    position: relative;
    color: ${myTheme.color.white};
    left: 80px;
    @media (max-width: ${myTheme.screen.extraSM}) {
    }
`;

const HeaderWrap = styled(FlexWrapper)<{ $isAboutAtTop: boolean }>`
    position: fixed;
    height: ${myTheme.headerHeight};
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    //max-width: 1756px;
    padding-left:80px;
    padding-right:80px;
    width: 100%;
    background-color: ${({$isAboutAtTop}) => ($isAboutAtTop ? `${myTheme.color.header}` : `${myTheme.color.transparent}`)};
    transition: background-color 0.6s ease-in-out;
    z-index: 4;

    @media (max-width: ${myTheme.screen.extraSM}) {
    }
`;