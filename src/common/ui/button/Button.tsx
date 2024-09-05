import styled from "styled-components";

type ButtonType = {
    title: string;
    backGround: string;
    color: string;
}

export const Button = (props: ButtonType) => {
    return (
        <ButtonStyled backGround={props.backGround} color={props.color}>
            {props.title || ""}
        </ButtonStyled>
    );
};

const ButtonStyled = styled.div<{ backGround: string; color: string; }>`
    background-color: ${props => props.backGround};
    color: ${props => props.color};
    border-radius: 100px;
    padding: 5px 20px;
    font-family: Poppins, sans-serif;
    font-weight: 600;
    font-size: 9px;
    margin-bottom: 12px;
`
