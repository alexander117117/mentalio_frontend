import { InputTranslateSearch } from '@/shared/ui/inputs/InputTranslateSearch'
import { LabelTranslation } from '@/shared/ui/labels/LabelTranslation'
import { Panel } from '@/shared/ui/Panel'
import { LanguageSelector } from '@/widgets/LanguageSelector'

export function TranslationSearch() {
  return (
    <Panel>
      <LanguageSelector />
      <LabelTranslation>Введите слово:</LabelTranslation>
      <InputTranslateSearch type="text" placeholder="Введите слово" />
    </Panel>
  )
}
