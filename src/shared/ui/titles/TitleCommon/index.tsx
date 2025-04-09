interface TitleCommonProps {
  children: React.ReactNode
}

export function TitleCommon({ children }: TitleCommonProps) {
  return <h1 className="text-[18px] sm:text-[46px] font-bold font-unbounded text-center mb-5 sm:mb-8">{children}</h1>
}
