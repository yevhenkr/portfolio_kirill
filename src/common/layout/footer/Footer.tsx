import SocialMediaIcons from "./footerSocialMedia/SocialMediaIcons.tsx";
import styled from "styled-components";
import {myTheme} from "../../../styles/Theme.styled.tsx";

export function Footer() {
    return (
        <FooterStyle>
            <FooterWrapper>
                <SocialMediaIcons/>
                <SmallStyled>Template designed by : Templates Jungle</SmallStyled>
            </FooterWrapper>
        </FooterStyle>
    )
}

const FooterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 200px;
    padding-right: 200px;`

const FooterStyle = styled.footer`
    background-color: #212121;
    width: 100%;
    
`

const SmallStyled = styled.small`
    color: ${myTheme.color.grey};
    display: flex;
    align-items: center;
    font-size: 17px;
`