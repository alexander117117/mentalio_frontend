import { SOCIAL_MEDIA } from '@/shared/constants/settingSupportData'
import { defaultIconSize } from '@/shared/lib/classNames'
import { Link } from 'react-router'

export function SocialMediaLinks() {
  return (
    <div className="flex items-center gap-6">
      {SOCIAL_MEDIA.map(({ Icon, link, name }, index) => (
        <Link key={index} to={link} target="_blank" aria-label={name} className="hover:opacity-80 transition-opacity">
          <Icon className={defaultIconSize} />
        </Link>
      ))}
    </div>
  )
}
