interface TextErrorProps {
  errorMessage: string | undefined
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
