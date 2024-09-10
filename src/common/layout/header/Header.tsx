import {useRef, useState} from 'react';
import styled from "styled-components";
import {FlexWrapper} from '../../ui/flefWrapper/FlexWrapper';
import {myTheme} from "../../../styles/Theme.styled.tsx";
import {BurgerIcon} from "../../../assets/icons/burgerIcon.tsx";

type HeaderType = {
    isaboutattop: boolean; // Исправляем на camelCase
};

export const Header = (props: HeaderType) => {
    const headerRef = useRef<HTMLDivElement>(null);
    const [squares, setSquares] = useState<boolean>(false);
    const handleClick = () => {
        setSquares(!squares);
    };
    return (
        <>
            <HeaderWrap isaboutattop={props.isaboutattop.toString()} ref={headerRef} $flex_direction={"row"}
                        $display={"flex"}>
                <FlexWrapper $flex_direction={"row"} $display={"flex"}>
                    <NameSpan>Kirill Y.</NameSpan>
                    <Burger onClick={handleClick}>
                        <BurgerIcon color={`${myTheme.color.white}`}/>
                    </Burger>
                </FlexWrapper>
            </HeaderWrap>
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

const HeaderWrap = styled(FlexWrapper)<{ isaboutattop: string }>`
    position: fixed;
    height: ${myTheme.headerHeight};
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: ${({isAboutAtTop}) => (isAboutAtTop === "true" ? 'rgba(0,0,0,0.5)' : "transparent")};
    transition: background-color 0.6s ease-in-out;
    z-index: 2;
`;
