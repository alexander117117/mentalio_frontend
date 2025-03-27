import { Link } from "react-router";
import { avatar_icon } from "@/shared/assets/images"
import { FaChevronRight } from "react-icons/fa6";

export function ButtonAvatar() {
  return (
    <Link
      to={'/settings/avatar'} 
      className="flex items-center justify-between h-fit py-[15px] pl-[10px] pr-5 bg-[#E7E7E7] rounded-[20px] cursor-pointer overflow-hidden transition-all duration-300 ease-in-out"
    >
      <div className="flex items-center gap-5">
        <img src={avatar_icon} alt="" />
        <span className="text-[18px] font-medium">Аватар</span>
      </div>
      <FaChevronRight />
    </Link>
  )
}