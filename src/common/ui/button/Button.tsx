import styled from "styled-components";

type ButtonType = {
    title: string;
    color: string;
    background_color: string;
    padding: string;
}

export const Button = (props: ButtonType) => {
    return (
        <ButtonStyled
            background_color={props.background_color}
            color={props.color}
            padding={props.padding}
        >
            {props.title || ""}
        </ButtonStyled>
    );
};

const ButtonStyled = styled.button<{ background_color: string; color: string; padding: string; }>`
    background-color: ${props => props.background_color};
    color: ${props => props.color};
    text-transform: uppercase;
    font-family: Poppins, sans-serif;
    font-weight: 600;
    font-size: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    border: none;
    cursor: pointer;
    margin: 0 auto;
}
`;
