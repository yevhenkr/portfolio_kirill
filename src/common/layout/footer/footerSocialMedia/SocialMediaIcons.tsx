import styled from 'styled-components'
import {myTheme} from "../../../../styles/Theme.styled.tsx";
import {FacebookIcon} from "../../../../assets/icons/facebookIcon.tsx";
import {InstagramIcon} from "../../../../assets/icons/instagramIcon.tsx";
import {LinkedinIcon} from "../../../../assets/icons/linkedinIcon.tsx";
import {TelegramIcon} from "../../../../assets/icons/telegramIcon.tsx";
import {VimeoIcon} from "../../../../assets/icons/vimeoIcon.tsx";
import {WhatsappIcon} from "../../../../assets/icons/whatsappIcon.tsx";

const SocialMediaIcons = () => {
    return (
        <SocialList>
            <SocialItem>
                <SocialLink
                    href={'https://www.linkedin.com/in/kirill-yakubov-1792972a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'}
                    rel={'noreferrer'}
                >
                    <LinkedinIcon fill={`${myTheme.color.grey}`}/>
                </SocialLink>
            </SocialItem>
            <SocialItem>
                <SocialLink href={'https://www.facebook.com/share/CEyuLRthp5tg6zPc/'} rel={'noreferrer'}>
                    <FacebookIcon fill={`${myTheme.color.grey}`}/>
                </SocialLink>
            </SocialItem>

            <SocialItem>
                <SocialLink href={'https://www.instagram.com/kirill.yakubov?igsh=MTFxeno0MXFnM2t5Nw=='}
                            rel={'noreferrer'}>
                    <InstagramIcon fill={`${myTheme.color.grey}`}/>
                </SocialLink>
            </SocialItem>

            <SocialItem>
                <SocialLink href={'https://vimeo.com/kirillyakubov'} rel={'noreferrer'}>
                    <VimeoIcon fill={`${myTheme.color.grey}`}/>
                </SocialLink>
            </SocialItem>
            <SocialItem>
                <SocialLink href={'https://t.me/Kiwi_Media'} rel={'noreferrer'}>
                    <WhatsappIcon fill={`${myTheme.color.grey}`}/>
                </SocialLink>
            </SocialItem>
            <SocialItem>
                <SocialLink href={'https://t.me/Kiwi_Media'} rel={'noreferrer'}>
                    <TelegramIcon fill={`${myTheme.color.grey}`}/>
                </SocialLink>
            </SocialItem>

        </SocialList>
    )
}

export default SocialMediaIcons

const SocialList = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    padding-left: 0;
    @media (max-width: ${myTheme.screen.medium}) {
        display: none;
    }
`
const SocialItem = styled.li`
    padding-top: 64px;
    padding-bottom: 64px;
    display: flex;
    justify-content: center; /* Центрирует содержимое по горизонтали */
    align-items: center; /* Центрирует содержимое по вертикали */
`
const SocialLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
`
