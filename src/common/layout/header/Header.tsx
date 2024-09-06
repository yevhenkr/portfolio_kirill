import {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {FlexWrapper} from '../../ui/flefWrapper/FlexWrapper';
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {myTheme} from "../../../../src/styles/Theme.styled";
import {BurgerIcon} from "../../../assets/icons/burgerIcon.tsx";


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
        <HeaderWrap ref={headerRef} $flex_direction={"row"} $display={"flex"}>
            <FlexWrapper $flex_direction={"row"} $display={"flex"}>
                {/*<HeaderMenu height={headerHeight}/>*/}
                <NameSpan>Kirill Y.</NameSpan>
                <Burger onClick={() => {
                    handleClick()
                }}>
                    <BurgerIcon color={`${myTheme.color.white}`}/>
                </Burger>
            </FlexWrapper>
        </HeaderWrap>
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
`
const NameSpan = styled.span`
    display: flex;
    align-items: center;
    position: absolute;
    left: 100px;
    top: 50%;
    color: white;
    transform: translateY(-50%);
`

const HeaderWrap = styled(FlexWrapper)`
    position: fixed;
    height:${myTheme.headerHeight};
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: transparent;
    z-index: 2;
`;

