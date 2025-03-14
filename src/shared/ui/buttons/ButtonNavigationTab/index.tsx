import { useNavigate } from 'react-router'

interface ButtonNavigationTabProps {
  link?: string | undefined
  children: React.ReactNode
}
export function ButtonNavigationTab({ link, children }: ButtonNavigationTabProps) {
  const navigate = useNavigate()
  const handleChangeTab = () => {
    if (link) {
      navigate(link)
    }
  }
  return (
    <button
      onClick={handleChangeTab}
      className="bg-zinc-900 text-white hover:bg-zinc-800 px-[17px] sm:px-[24px] py-[8px] rounded-[10px] text-xs sm:text-base"
    >
      {children}
    </button>
  )
}
