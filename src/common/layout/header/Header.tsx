import {useRef, useState} from 'react';
import styled from "styled-components";
import {FlexWrapper} from '../../ui/flefWrapper/FlexWrapper';
import {myTheme} from "../../../styles/Theme.styled.tsx";
import {BurgerIcon} from "../../../assets/icons/burgerIcon.tsx";
import {OpenHeaderMenu} from "./headerMenu/OpenHeaderMenu.tsx";

type HeaderType = {
    isAboutTop: boolean;
    setHeadMenuOpen?: (isOpen: boolean) => void;
};

export const Header = (props: HeaderType) => {
    const headerRef = useRef<HTMLDivElement>(null);
    const [headerMenu, setHeaderMenu] = useState<boolean>(false);

    const handleClick = () => {
        const newMenuState = !headerMenu;
        setHeaderMenu(newMenuState);
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

    return (
        <>
            <HeaderWrap $isAboutAtTop={props.isAboutTop} ref={headerRef} $flex_direction={"row"} $display={"flex"}>
                <FlexWrapper $flex_direction={"row"} $display={"flex"}>
                    <NameSpan>Kirill Y.</NameSpan>
                    <Burger onClick={handleClick}>
                        <BurgerIcon color={`${myTheme.color.white}`}/>
                    </Burger>
                </FlexWrapper>
            </HeaderWrap>
            <OpenHeaderMenu headerMenu={headerMenu} goToSection={goToSection}/>
        </>
    );
};

const Burger = styled.a`
    display: flex;
    align-items: center;
    position: absolute;
    right: 100px;
    top: 50%;
    transform: translateY(-50%);
    @media (max-width: ${myTheme.screen.extraSM}) {
        right: 26px;
    }
`;

const NameSpan = styled.span`
    display: flex;
    align-items: center;
    position: absolute;
    left: 100px;
    top: 50%;
    color: ${myTheme.color.white};
    transform: translateY(-50%);
    @media (max-width: ${myTheme.screen.extraSM}) {
        left: 32px;
    }
    
`;

const HeaderWrap = styled(FlexWrapper)<{ $isAboutAtTop: boolean }>`
    position: fixed;
    height: ${myTheme.headerHeight};
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: ${({$isAboutAtTop}) => ($isAboutAtTop ? `${myTheme.color.header}` : `${myTheme.color.transparent}`)};
    transition: background-color 0.6s ease-in-out;
    z-index: 4;

    @media (max-width: ${myTheme.screen.extraSM}) {
        //height:0;
        //padding-top: 30px;
        //padding-bottom: 30px;
    }
`;
