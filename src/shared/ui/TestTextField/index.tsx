interface TestTextFieldProps {
  title: string
  description: string
}
export function TestTextField({ title, description }: TestTextFieldProps) {
  return (
    <>
      <div className="flex flex-col gap-5">
        <span className="text-sm font-bold">{title}:</span>
        <span className="mt-5 text-4xl font-normal">{description}</span>
      </div>
    </>
  )
}