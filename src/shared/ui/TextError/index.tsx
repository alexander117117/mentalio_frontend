interface TextErrorProps {
  errorMessage: string | null | undefined
}
export function TextError({ errorMessage }: TextErrorProps) {
  return (
    errorMessage && (
      <div className="text-red-500 text-center text-sm">
        <p>{errorMessage}</p>
      </div>
    )
  )
}
