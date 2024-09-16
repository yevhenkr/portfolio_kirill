import { useEffect, useRef, useState } from 'react';
import styled from "styled-components";
import { FlexWrapper } from '../../ui/flefWrapper/FlexWrapper';
import { myTheme } from "../../../styles/Theme.styled.tsx";
import { BurgerIcon } from "../../../assets/icons/burgerIcon.tsx";
import { OpenHeaderMenu } from "./headerMenu/OpenHeaderMenu.tsx";

type HeaderType = {
    isaboutattop: boolean;
    setModalOpen?: (isOpen: boolean) => void;
};

export const Header = (props: HeaderType) => {
    const headerRef = useRef<HTMLDivElement>(null);

    const [rightBuger, setRightBurger] = useState<string>(myTheme.rightBurger.close);
    const [headerMenu, setHeaderMenu] = useState<boolean>(false);

    const handleClick = () => {
        const newMenuState = !headerMenu;
        setHeaderMenu(newMenuState);
        setRightBurger(newMenuState ? myTheme.rightBurger.open : myTheme.rightBurger.close);
        if (props.setModalOpen) {
            props.setModalOpen(newMenuState);
        }
    };

    useEffect(() => {
        setRightBurger(headerMenu ? myTheme.rightBurger.open : myTheme.rightBurger.close);
    }, [headerMenu]);

    return (
        <>
            <HeaderWrap $isAboutAtTop={props.isaboutattop} ref={headerRef} $flex_direction={"row"} $display={"flex"}>
                <FlexWrapper $flex_direction={"row"} $display={"flex"}>
                    <NameSpan>Kirill Y.</NameSpan>
                    <Burger onClick={handleClick} right={rightBuger}>
                        <BurgerIcon color={`${myTheme.color.white}`} />
                    </Burger>
                </FlexWrapper>
            </HeaderWrap>
            <OpenHeaderMenu headermenu={headerMenu} />
        </>
    );
};

const Burger = styled.a<{ right: string }>`
    display: flex;
    align-items: center;
    position: absolute;
    right: ${(props) => props.right};
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
