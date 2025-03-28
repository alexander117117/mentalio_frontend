import { DEFAULT_ICON_SIZE, SOCIAL_MEDIA } from "@/shared/constants/settingSupportData";
import { Link } from "react-router";

export function SocialMediaLinks() {
  return (
    <div className="flex items-center gap-6">
      {SOCIAL_MEDIA.map(({ Icon, link, name }, index) => (
        <Link 
          key={index} 
          to={link} 
          target="_blank"
          aria-label={name}
          className="hover:opacity-80 transition-opacity"
        >
          <Icon className={DEFAULT_ICON_SIZE} />
        </Link>
      ))}
    </div>
  );
}