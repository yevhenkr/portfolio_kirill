import { Icon } from '../../../ui/icon/Icon'
import styled from 'styled-components'
import {myTheme} from "../../../../styles/Theme.styled.tsx";

const SocialMediaIcons = () => {
  return (
    <SocialList>
      <SocialItem>
        <SocialLink href={'https://www.facebook.com/share/CEyuLRthp5tg6zPc/'} rel={'noreferrer'}>
          <Icon iconId={'facebook'} viewBox="0 0 31 31" color={`${myTheme.color.white}`}/>
        </SocialLink>
      </SocialItem>

      <SocialItem>
        <SocialLink
          href={'https://www.linkedin.com/in/kirill-yakubov-1792972a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'}
          rel={'noreferrer'}
        >
          <Icon iconId={'linkedIn'}  color={`${myTheme.color.white}`}/>
        </SocialLink>
      </SocialItem>

      <SocialItem>
        <SocialLink href={'https://t.me/Kiwi_Media'} rel={'noreferrer'}>
          <Icon iconId={'telegram'} viewBox="0 0 31 31"  color={`${myTheme.color.white}`}/>{' '}
        </SocialLink>
      </SocialItem>

        <SocialItem>
        <SocialLink href={'https://www.instagram.com/kirill.yakubov?igsh=MTFxeno0MXFnM2t5Nw=='} rel={'noreferrer'}>
          <Icon iconId={'telegram'} viewBox="0 0 31 31"  color={`${myTheme.color.white}`}/>{' '}
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
  justify-content: end;
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
