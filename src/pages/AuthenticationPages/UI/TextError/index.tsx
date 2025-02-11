import React from 'react'

interface TextErrorProps {
  error: string
}
const TextError = ({ error }: TextErrorProps) => {
  return <div className="text-[red] text-[10px] sm:text-sm text-left">{error}</div>
}

export default TextError
