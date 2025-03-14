import { buttonBack } from "@/shared/lib/classNames";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router";

export function ButtonBack() {
  return (
    <Link to="/" className={buttonBack}>
      <GoArrowLeft className="text-5xl sm:text-[35px]"/>
    </Link>
  )
}