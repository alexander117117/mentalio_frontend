export function ButtonSetting({ disabled }: { disabled: boolean }) {
  return (
    <button disabled={disabled} className="w-full bg-[#001E02] h-[50px] rounded-[20px] text-white">
      Подтвердить изменения
    </button>
  )
}
