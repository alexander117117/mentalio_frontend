import { ButtonLearning } from "@/shared/ui/buttons/ButtonLearning";
import { TestTextField } from "@/shared/ui/TestTextField";

export function TestType2() {
  return (
    <>
      <TestTextField title="Определение" description="Articulación" />

      <div className="mt-10">
        <TestTextField title="Термин" description="Сустав" />
      </div>

      <div className="grid grid-cols-2 gap-[10px] sm:gap-5 mt-12 sm:mt-[109px]">
        <ButtonLearning>Верно</ButtonLearning>
        <ButtonLearning>Неверно</ButtonLearning>
      </div>
    </>
  )
}