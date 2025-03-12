import { TestAnalytic } from "@/widgets/TestAnalytic";

export function TestResultPage() {
  return (
    <>
      <div className="ml-0 xl:ml-[148px]">
        <h1 className="text-2xl sm:text-5xl font-bold font-unbounded">Тест <span className="text-base sm:text-4xl">16/20</span></h1>

        <div className="mt-[7px] sm:mt-6 flex flex-col gap-[10px] sm:gap-5 w-full xl:w-[894px]">
          <TestAnalytic />
          <TestAnalytic wrong={true}/>
        </div>
      </div>
    </>
  )
}