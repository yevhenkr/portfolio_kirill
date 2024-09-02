import styled from "styled-components";
import React from 'react';
import {heightMenu, mySections, myTheme} from "../../../../../styles/Theme.styled";

type PropsType = {
    className?: string;
    closeMobileMenu?: () => void;
    height: number
};

export const HeaderMenu = (props: PropsType) => {
    const handleClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = props.height;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: (elementPosition - heightMenu.large),
                behavior: "smooth"
            });
        }
        if (props.closeMobileMenu) {
            props.closeMobileMenu();
        }
    };

    return (
        <Menu className={props.className}>
            {mySections.map((section, index) => (
                <StyledLi key={index} onClick={() => handleClick(section[1])}>
                    <StyledLink>
                        {section[1]}
                    </StyledLink>
                </StyledLi>
            ))}
        </Menu>
    );
};

const Menu = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    column-gap: 45px;
    position: relative;
    right: 10px;
    padding: 0;
    margin-right: 50px;
    color: ${myTheme.color.text};

    @media (max-width: ${myTheme.screen.medium}) {
        display: none;
    }

    li {
        padding: 20px 0;
    }
`;

const StyledLi = styled.li`
    display: flex;
    align-items: center;
    position: relative;
`;

const StyledLink = styled.a`
    display: inline-block;
    line-height: 1;
    font-size: 30px;
    text-decoration: none;
    text-align: center;
    position: relative;
    color: ${myTheme.color.text};

    font-family: DMSans, sans-serif;
    font-size: 20px;
    &:hover {
        color: blue;
    }
`;
