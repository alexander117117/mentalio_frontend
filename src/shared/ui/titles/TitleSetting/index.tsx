interface TitleSettingProps {
  children: React.ReactNode
}

export function TitleSetting({ children }: TitleSettingProps) {
  return <h1 className="text-5xl font-semibold">{children}</h1>
}