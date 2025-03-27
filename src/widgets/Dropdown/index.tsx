import { FaChevronRight } from "react-icons/fa6";
import { useState, useRef } from "react";
import { colors } from "@/shared/constants/color";
interface DropdownProps {
  title: string
  svgImg?: React.ReactNode
  isPrimaryDropdown?: boolean
  children?: React.ReactNode
}
export function Dropdown({ title, svgImg, isPrimaryDropdown = true, children }: DropdownProps) {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div 
      className={`h-fit py-[15px] pl-[10px] pr-5 rounded-[20px] cursor-pointer overflow-hidden transition-all duration-300 ease-in-out ${isPrimaryDropdown ? `bg-[${colors.dropDownMainColor}] text-black` : `bg-[${colors.dropDownSecondaryColor}] text-white`}`}
      style={{ maxHeight: isOpen ? `1000px` : `${isPrimaryDropdown ? '80px' : '55px'}` }}
      ref={dropdownRef}
    >
      <div className="flex items-center justify-between" onClick={handleToggle}>
        <div className="flex items-center gap-5">
          {svgImg && <div className="svg-icon-wrapper">{svgImg}</div>}
          <span className="text-[18px] font-medium">{title}</span>
        </div>
        <FaChevronRight className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`} />
      </div>

      <div 
        ref={contentRef}
        className={`mt-5 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
      >
        {children}
      </div>
    </div>
  );
}
