import { support_icon } from "@/shared/assets/images";
import { settingItemPage, settingLayout } from "@/shared/lib/classNames";
import { SettingPageLayout } from "@/shared/ui/SettingPageLayout";
import { Dropdown } from "@/widgets/Dropdown";
import { ReactComponent as SupportIcon } from '@/shared/assets/images/assets/support_icon_1.svg?react'
import { ReactComponent as AskedQuestion } from '@/shared/assets/images/assets/asked_question_icon.svg?react'
import { ReactComponent as Email } from '@/shared/assets/images/assets/email_icon.svg?react'
import { ReactComponent as Community } from '@/shared/assets/images/assets/community_icon.svg?react'
import { ReactComponent as Feedback } from '@/shared/assets/images/assets/feedback_icon.svg?react'
import { LiaTelegramPlane } from "react-icons/lia";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { Link } from "react-router";

export function SettingSupportPage() {
  return (
    <div className={settingLayout}>
      <SettingPageLayout img={support_icon} title={"Mentaliosupport@gmail.com"}/>

      <div className={settingItemPage}>

        <Dropdown title={'Поддержка'} svgImg={<SupportIcon />}>
          <Link to="https://t.me/Chistiakova_Liza" target="_blank">
            <LiaTelegramPlane className="text-[35px]"/>
          </Link>
        </Dropdown>

        <Dropdown title={'Часто задаваемые вопросы'} svgImg={<AskedQuestion />}>
          <div className="flex flex-col gap-3">
            <Dropdown title={'Зачем нужен Mentalio'} isPrimaryDropdown={false}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, architecto adipisci! Inventore magni voluptas blanditiis ratione atque quae quasi perspiciatis possimus modi ipsum. Sapiente odio quis eum voluptate dolor at.
            </Dropdown>
            <Dropdown title={'Наша миссия'} isPrimaryDropdown={false}>
  
            </Dropdown>
            <Dropdown title={'Как пользоваться'} isPrimaryDropdown={false}>
  
            </Dropdown>
            <Dropdown title={'Почему мы'} isPrimaryDropdown={false}>
  
            </Dropdown>
          </div>
        </Dropdown>

        <Dropdown title={'Почта'} svgImg={<Email />}>
          <p className="h-[50px] flex items-center px-5 bg-white rounded-[20px]">sashalox@yandex.ru</p>
        </Dropdown>

        <Dropdown title={'Комьюнити'} svgImg={<Community />}>
          <div className="flex items-center gap-6">
            <Link to="https://t.me/Chistiakova_Liza" target="_blank">
              <FaInstagram className="text-[40px]"/>
            </Link>
            <Link to="https://t.me/Chistiakova_Liza" target="_blank">
              <FaLinkedinIn className="text-[40px]"/>
            </Link>
            <Link to="https://t.me/Chistiakova_Liza" target="_blank">
              <LiaTelegramPlane className="text-[40px]"/>
            </Link>
            <Link to="https://t.me/Chistiakova_Liza" target="_blank">
              <FaXTwitter className="text-[40px]"/>
            </Link>
            <Link to="https://t.me/Chistiakova_Liza" target="_blank">
              <AiOutlineYoutube className="text-[40px]"/>
            </Link>
          </div>
        </Dropdown>

        <Dropdown title={'Feedback'} svgImg={<Feedback />}>
          <p className="h-[50px] flex items-center px-5 bg-white rounded-[20px]">sashalox@yandex.ru</p>
        </Dropdown>
      </div>
    </div>
  )
}