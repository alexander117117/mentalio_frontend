import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { useLocation } from 'react-router-dom'

interface SiderMenuItemProps {
  title: string
  subtitle: string
  link: string
  image: string
  imageActive?: string
  inDevelopment?: boolean
}
export const SiderMenuItem = ({
  title,
  subtitle,
  link,
  image,
  imageActive,
  inDevelopment = false,
}: SiderMenuItemProps) => {
  const location = useLocation() // получаем текущее url чтобы отображать активную ссылку
  return (
    <>
      <Link
        to={inDevelopment ? '#' : link}
        className={
          `flex items-center justify-between py-[5px] px-[10px] rounded-xl ` +
          (link === location.pathname ? 'bg-black text-white' : 'text-black') +
          (inDevelopment ? ' opacity-50 cursor-not-allowed' : '')
        }
      >
        <div className="flex items-center gap-[8px]">
          <img
            src={image}
            alt={title}
            style={{
              filter: link === location.pathname ? 'invert(100%)' : 'invert(0%)',
            }}
            className="w-[24px] aspect-square object-cover"
          />
          <p>{title}</p>
        </div>
        <div className="font-unbounded text-[12px] font-light text-siderGray">{subtitle}</div>
      </Link>
    </>
  )
}

SiderMenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageActive: PropTypes.string,
  inDevelopment: PropTypes.bool,
}
