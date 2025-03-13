import { Flashcard } from "@/widgets/Flashcard";
import { TestPagination } from "@/widgets/UiKit/features/TestPagination";

export function TestPage() {
  return (
    <>
      <div className="mt-[50px]">
        <h1 className="text-[18px] sm:text-[46px] font-bold font-unbounded text-center mb-5">Тест</h1>
        
        <TestPagination />
        <Flashcard isTest={true}/>

      </div>
    </>
  )
}