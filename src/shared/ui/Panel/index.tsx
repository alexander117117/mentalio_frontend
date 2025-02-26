interface PanelProps {
  children: React.ReactNode
}
export function Panel({ children }: PanelProps) {
  return <div className="bg-translate p-[15px] sm:p-5 rounded-[10px] text-white relative w-full xs:w-auto">{children}</div>;
}