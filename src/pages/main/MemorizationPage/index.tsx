import { Flashcard } from '@/widgets/Flashcard'

export function MemorizationPage() {
  return (
    <>
      <div className="mt-[50px]">
        <h1 className="text-[18px] sm:text-[46px] font-bold font-unbounded text-center mb-5 sm:mb-8">Заучивание</h1>

        <Flashcard />
      </div>
    </>
  )
}
