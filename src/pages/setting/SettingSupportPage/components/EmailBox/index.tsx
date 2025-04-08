interface EmailBoxProps {
  email: string
}

export function EmailBox({ email }: EmailBoxProps) {
  return <p className="h-[50px] flex items-center px-5 bg-white rounded-[20px]">{email}</p>
}
