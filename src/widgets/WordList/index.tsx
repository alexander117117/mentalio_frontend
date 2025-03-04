import { Word } from './components/Word'

export function WordList() {
  return (
    <div className="mt-5 sm:mt-10 flex flex-col gap-5">
      <Word original={'Word'} translate={'Перевод'} />
      <Word original={'Word'} translate={'Перевод'} favorite={true} />
    </div>
  )
}
