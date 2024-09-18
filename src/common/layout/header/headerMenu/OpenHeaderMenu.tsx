import styled from "styled-components";
import {mySections, myTheme} from "../../../../styles/Theme.styled.tsx";

type PropsType = {
    headerMenu: boolean;
    goToSection: (elementPosition: number) => void; // Изменяем тип goToSection
};

export const OpenHeaderMenu = (props: PropsType) => {
    const handleClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            // Передаем позицию элемента в функцию goToSection
            props.goToSection(elementPosition);
        }
    };

    return (
        <Menu $headermenu={props.headerMenu}>
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

const Menu = styled.ul<{ $headermenu: boolean }>`
    display: ${(props) => (props.$headermenu ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 100px;
    position: fixed;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: ${myTheme.color.backGround};
    z-index: 3;
    color: ${myTheme.color.grey};
    overflow: hidden;

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
    color: ${myTheme.color.white};

    font-family: DMSans, sans-serif;
    font-size: 20px;

    &:hover {
        color:  ${myTheme.color.grey};
    }

    &::after {
        content: '';
        display: block;
        width: 44px;
        height: 4px;
        background-color: grey;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        top: 60px;
    }
`;
