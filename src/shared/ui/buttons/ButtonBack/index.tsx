import { buttonBack } from "@/shared/lib/classNames";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router";

export function ButtonBack() {
  return (
    <Link to="/" className={buttonBack}>
      <GoArrowLeft size={40}/>
    </Link>
  )
}