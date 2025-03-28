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
import { Link } from "react-router";
import { FAQSection } from "./components/FAQSection";
import { EmailBox } from "./components/EmailBox";
import { SUPPORT_EMAIL } from "@/shared/constants/settingSupportData";
import { SocialMediaLinks } from "./components/SocialMediaLinks";
export function SettingSupportPage() {
  return (
    <div className={settingLayout}>
      <SettingPageLayout img={support_icon} title={SUPPORT_EMAIL}/>

      <div className={settingItemPage}>

        <Dropdown title={'Поддержка'} svgImg={<SupportIcon />}>
          <Link to="https://t.me/Chistiakova_Liza" target="_blank">
            <LiaTelegramPlane className="text-[35px]"/>
          </Link>
        </Dropdown>

        <Dropdown title={'Часто задаваемые вопросы'} svgImg={<AskedQuestion />}>
          <FAQSection />
        </Dropdown>

        <Dropdown title={'Почта'} svgImg={<Email />}>
          <EmailBox email={SUPPORT_EMAIL}/>
        </Dropdown>

        <Dropdown title={'Комьюнити'} svgImg={<Community />}>
          <SocialMediaLinks />
        </Dropdown>

        <Dropdown title={'Feedback'} svgImg={<Feedback />}>
          <EmailBox email={SUPPORT_EMAIL}/>
        </Dropdown>
      </div>
    </div>
  )
}