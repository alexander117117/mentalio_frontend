import { FaInstagram } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { AiOutlineYoutube } from 'react-icons/ai'
import { LiaTelegramPlane } from 'react-icons/lia'
import { IconType } from 'react-icons'

export interface FAQItem {
  title: string
  content: string
}

export interface SocialMediaConfig {
  Icon: IconType
  link: string
  name: string
}

export const SUPPORT_EMAIL = 'Mentaliosupport@gmail.com'
export const TELEGRAM_LINK = 'https://t.me/Chistiakova_Liza'

export const FAQ_ITEMS: FAQItem[] = [
  {
    title: 'Зачем нужен Mentalio',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, architecto adipisci! Inventore magni voluptas blanditiis ratione atque quae quasi perspiciatis possimus modi ipsum. Sapiente odio quis eum voluptate dolor at.',
  },
  {
    title: 'Наша миссия',
    content: '',
  },
  {
    title: 'Как пользоваться',
    content: '',
  },
  {
    title: 'Почему мы',
    content: '',
  },
]

export const SOCIAL_MEDIA: SocialMediaConfig[] = [
  {
    Icon: FaInstagram,
    link: 'https://www.instagram.com',
    name: 'Instagram',
  },
  {
    Icon: FaLinkedinIn,
    link: 'https://www.linkedin.com',
    name: 'LinkedIn',
  },
  {
    Icon: LiaTelegramPlane,
    link: TELEGRAM_LINK,
    name: 'Telegram',
  },
  {
    Icon: FaXTwitter,
    link: 'https://twitter.com',
    name: 'X (Twitter)',
  },
  {
    Icon: AiOutlineYoutube,
    link: 'https://www.youtube.com',
    name: 'YouTube',
  },
]

