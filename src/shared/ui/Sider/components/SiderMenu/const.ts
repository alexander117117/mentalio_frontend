import { sider4, sider5, sider6, sider7, sider8, sider9, sider10, sider11, sider12 } from '@images'
import sider4_active from './assets/sider_4_active.png'
import sider5_active from './assets/sider_5_active.png'

interface MenuItem {
  title: string
  subtitle: string
  link: string
  image: string
  imageActive?: string
  inDevelopment?: boolean
}

export const menuData: MenuItem[] = [
  {
    title: 'Мои папки',
    subtitle: 'ctrl+f',
    link: '/',
    image: sider4,
    imageActive: sider4_active,
  },
  {
    title: 'Каталог',
    subtitle: '',
    link: '/catalog',
    image: sider5,
    imageActive: sider5_active,
  },
  {
    title: 'Текущие курсы',
    subtitle: 'скоро',
    link: '/current-rates',
    image: sider6,
    inDevelopment: true,
  },
  {
    title: 'База знаний',
    subtitle: 'скоро',
    link: '/knowledge-base',
    image: sider7,
    inDevelopment: true,
  },
  {
    title: 'Цепочка занятий',
    subtitle: 'скоро',
    link: '/chain-of-activities',
    image: sider8,
    inDevelopment: true,
  },
  {
    title: 'Уведомления',
    subtitle: 'скоро',
    link: '/notifications',
    image: sider9,
    inDevelopment: true,
  },
  {
    title: 'Прогресс',
    subtitle: 'скоро',
    link: '/progress',
    image: sider10,
    inDevelopment: true,
  },
  {
    title: 'Настройки',
    subtitle: '',
    link: '/settings',
    image: sider11,
  },
  {
    title: 'Искать по тегам',
    subtitle: '',
    link: '/search-by-tags',
    image: sider12,
  },
]
