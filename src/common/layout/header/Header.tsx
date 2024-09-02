import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import logo from "../../../../assets/img/logo.png";
import {FlexWrapper} from '../../ui/flexWrapper/FlexWrapper';
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import SocialMediaIcons from "../footer/footerSocialMedia/socialMediaIcons";
import {myTheme} from "../../../../styles/Theme.styled";
import {BurgerIcon} from "../../../../assets/icons/burgerIcon";
import {MobileMenu} from "../mobileMenu/MobileMenu";


export const Header = () => {
    const headerRef = useRef<HTMLDivElement>(null);
    const [headerHeight, setHeaderHeight] = useState<number>(0);
    useEffect(() => {
        if (headerRef.current) {
            const height = headerRef.current.clientHeight;
            setHeaderHeight(height);
        }
    }, []);

    const [squares, setSquares] = useState<boolean>(false);
    const handleClick = () => {
        setSquares(!squares);
    };

    return (
        <HeaderWrap ref={headerRef} $flex_direction={"row"} display={"flex"}>
            <Logo src={logo} alt={"Logo images"}/>
            <FlexWrapper $flex_direction={"row"} display={"flex"}>
                <HeaderMenu height={headerHeight}/>
                <SocialMediaIcons/>
                <Burger onClick={() => {
                    handleClick()
                }}>
                    <BurgerIcon color={`${myTheme.color.title}`}/>
                </Burger>
                <MobileMenu headerHeight={headerHeight} isMenu={squares} changeMenu={handleClick}/>
            </FlexWrapper>
        </HeaderWrap>
    );
};

const Burger = styled.a`
    display: none;
    position: relative;
    @media (max-width: ${myTheme.screen.medium}) {
        display: flex;
        right: 10px;
    }
`

const HeaderWrap = styled(FlexWrapper)`
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    width: 100%;
    background-color: ${myTheme.color.backGround};
    z-index: 2;
    @media (max-width: ${myTheme.screen.small}) {
        max-width: ${myTheme.screen.small};
        padding: 10px 0;
    }
`;

const Logo = styled.img`
    padding: 40px 0;
    max-width: 100px;
    max-height: 100px;
    object-fit: contain;
    @media (max-width: ${myTheme.screen.medium}) {
        padding: 10px 0;
        padding-left: 10px;
    }
    @media (max-width: ${myTheme.screen.small}) {
        position: relative;
        left: 10px;
    }
`;

