
interface DirectoryButtonProps {
  openModal?: () => void
  children: React.ReactNode
}

export function ButtonDirectory({ openModal, children }: DirectoryButtonProps) {
  return (
    <button
      className={`py-[6px] sm:py-[15px] px-[13px] sm:px-[24px] 2xl:px-[36px] bg-[#36E326] text-[9px] sm:text-base font-medium rounded-[20px] absolute right-[-20px] sm:right-[-30px] md:right-[-35px] top-8 sm:top-20`}
      onClick={openModal}
    >
      {children}
    </button>
  )
}