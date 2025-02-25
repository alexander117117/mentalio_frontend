interface PanelProps {
  children: React.ReactNode
}
export function Panel({ children }: PanelProps) {
  return <div className="bg-translate p-5 rounded-[10px] text-white">{children}</div>;
}