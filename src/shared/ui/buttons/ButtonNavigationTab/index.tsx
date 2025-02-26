interface ButtonNavigationTabProps {
  children: React.ReactNode
}
export function ButtonNavigationTab({ children }: ButtonNavigationTabProps) {
  return (
    <button className="bg-zinc-900 text-white hover:bg-zinc-800 px-[17px] sm:px-[24px] py-[8px] rounded-[10px] text-xs sm:text-base">
      {children}
    </button>
  )
}
