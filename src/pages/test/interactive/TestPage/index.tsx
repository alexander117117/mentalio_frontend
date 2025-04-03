import { TitleCommon } from '@/shared/ui/titles/TitleCommon'
import { Flashcard } from '@/widgets/test/Flashcard'
import { TestPagination } from '@/features/TestPagination'

export function TestPage() {
  return (
    <>
      <div className="mt-[50px]">
        <TitleCommon>Тест</TitleCommon>

        <TestPagination />
        <Flashcard isTest={true} />
      </div>
    </>
  )
}
