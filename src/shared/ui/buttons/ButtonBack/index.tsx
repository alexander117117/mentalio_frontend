import { GoArrowLeft } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'
import { buttonBack } from '@/shared/lib/classNames'

export function ButtonBack() {
  const navigate = useNavigate()

  return (
    <button onClick={() => navigate(-1)} className={buttonBack}>
      <GoArrowLeft size={40} />
    </button>
  )
}
