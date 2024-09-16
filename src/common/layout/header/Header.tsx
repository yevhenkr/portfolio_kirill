import {useRef, useState} from 'react';
import styled from "styled-components";
import {FlexWrapper} from '../../ui/flefWrapper/FlexWrapper';
import {myTheme} from "../../../styles/Theme.styled.tsx";
import {BurgerIcon} from "../../../assets/icons/burgerIcon.tsx";
import {OpenHeaderMenu} from "./headerMenu/OpenHeaderMenu.tsx";

type HeaderType = {
    isaboutattop: boolean;
    openMenu?: ()=>boolean;
};

export const Header = ({isaboutattop}: HeaderType) => {
    const headerRef = useRef<HTMLDivElement>(null);
    const [headerMenu, setHeaderMenu] = useState<boolean>(false);
    const handleClick = () => {
        setHeaderMenu(!headerMenu);
    };

    return (
        <>
            <HeaderWrap $isAboutAtTop={isaboutattop} ref={headerRef} $flex_direction={"row"} $display={"flex"}>
                <FlexWrapper $flex_direction={"row"} $display={"flex"}>
                    <NameSpan>Kirill Y.</NameSpan>
                    <Burger onClick={handleClick}>
                        <BurgerIcon color={`${myTheme.color.white}`}/>
                    </Burger>
                </FlexWrapper>
            </HeaderWrap>
            <OpenHeaderMenu headerMenu={headerMenu}/>
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

    @media (max-width: ${myTheme.screen.medium}) {
        display: flex;
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
    z-index: 2;
`;
