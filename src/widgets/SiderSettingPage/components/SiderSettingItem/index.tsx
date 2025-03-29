import { Link } from 'react-router'
import { useLocation } from 'react-router-dom'
export function SiderSettingItem({ img, title, subtitle, link }: any) {
  const location = useLocation()
  return (
    <Link
      to={link}
      className={
        `py-5 px-[10px] rounded-[10px] ` +
        (link === location.pathname ? 'bg-[#2e2e2e] text-white' : 'bg-white text-black')
      }
    >
      <div className="flex items-center gap-[10px]">
        <img src={img} alt="" />

        <div className="flex flex-col">
          <span className="text-base">{title}</span>
          {subtitle && <span className="text-xs text-[#757575]">{subtitle}</span>}
        </div>
      </div>
    </Link>
  )
}
