import { useEffect, useRef, useState } from 'react';
import styled from "styled-components";
import { FlexWrapper } from '../../ui/flefWrapper/FlexWrapper';
import { myTheme } from "../../../styles/Theme.styled.tsx";
import { BurgerIcon } from "../../../assets/icons/burgerIcon.tsx";
import { OpenHeaderMenu } from "./headerMenu/OpenHeaderMenu.tsx";

type HeaderType = {
    isAboutTop: boolean;
    setHeadMenuOpen?: (isOpen: boolean) => void;
};

export const Header = (props: HeaderType) => {
    const headerRef = useRef<HTMLDivElement>(null);

    const [rightBurgerPos, setRightBurger] = useState<string>(myTheme.burgerPosition.close);
    const [headerMenu, setHeaderMenu] = useState<boolean>(false);

    const handleClick = () => {
        const newMenuState = !headerMenu;
        setHeaderMenu(newMenuState);
        setRightBurger(newMenuState ? myTheme.burgerPosition.open : myTheme.burgerPosition.close);
        if (props.setHeadMenuOpen) {
            props.setHeadMenuOpen(newMenuState);
        }
    };

    useEffect(() => {
        setRightBurger(headerMenu ? myTheme.burgerPosition.open : myTheme.burgerPosition.close);
    }, [headerMenu]);

    return (
        <>
            <HeaderWrap $isAboutAtTop={props.isAboutTop} ref={headerRef} $flex_direction={"row"} $display={"flex"}>
                <FlexWrapper $flex_direction={"row"} $display={"flex"}>
                    <NameSpan>Kirill Y.</NameSpan>
                    <Burger onClick={handleClick} burger_position={rightBurgerPos}>
                        <BurgerIcon color={`${myTheme.color.white}`} />
                    </Burger>
                </FlexWrapper>
            </HeaderWrap>
            <OpenHeaderMenu headermenu={headerMenu} />
        </>
    );
};

const Burger = styled.a<{ burger_position: string }>`
    display: flex;
    align-items: center;
    position: absolute;
    right: ${(props) => props.burger_position};
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
