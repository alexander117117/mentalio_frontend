
interface FolderDirectoryProps {
  title: string
  desc: string
  userName: string
}

export function DirectoryContent({ title, desc, userName }: FolderDirectoryProps){
  return(
    <>
      <h2 className="text-[5px] sm:text-xl font-medium text-[#848484]">{userName}</h2>
      <h3 className="text-xs sm:text-[32px] font-bold text-[#fff] font-unbounded leading-[14px] sm:leading-[40px]">
        {title}
      </h3>
      <p className="w-[238px] sm:w-[367px] 2xl:w-[500px] text-[8px] sm:text-base font-medium text-[#848484] leading-[9.68px] sm:leading-[19px] mt-[5px]">
        {desc}
      </p>
    </>
  )
}