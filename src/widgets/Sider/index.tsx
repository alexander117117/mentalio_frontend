import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'
import { SiderApp } from './components/SiderApp'

export function Sider() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      <div className="hidden md:block">
        <div className={`w-[250px] xl:w-[285px] ${isOpen ? '' : 'hidden'}`}>
          <SiderApp toggleSider={() => setIsOpen(!isOpen)} />
        </div>
        {!isOpen ? (
          <div
            className="h-[100vh] pt-[42px] pl-[25px] fixed cursor-pointer"
            onClick={() => {
              setIsOpen(!isOpen)
            }}
          >
            <GiHamburgerMenu />
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  )
}
