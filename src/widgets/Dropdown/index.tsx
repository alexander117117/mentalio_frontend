import { avatar_icon } from "@/shared/assets/images"
import { FaChevronRight } from "react-icons/fa6";
import { useState, useRef, useEffect } from "react";

interface DropdownProps {
  children: React.ReactNode
}
export function Dropdown({ children }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div 
      className="h-fit py-[15px] pl-[10px] pr-5 bg-[#E7E7E7] rounded-[20px] cursor-pointer overflow-hidden transition-all duration-300 ease-in-out"
      style={{ height: isOpen ? `${height + 110}px` : '80px' }}
      ref={dropdownRef}
    >
      <div className="flex items-center justify-between" onClick={handleToggle}>
        <div className="flex items-center gap-5">
          <img src={avatar_icon} alt="" />
          <span className="text-[18px] font-medium">Аватар</span>
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