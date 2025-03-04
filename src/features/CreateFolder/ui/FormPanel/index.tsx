import { ButtonControlFolder } from '@/shared/ui/buttons/ButtonControlFolder'
import { UseFieldArrayAppend } from 'react-hook-form'
import { maxCountsTopics } from '../../lib/const'
import { CreateFolder, CreateTopicForm } from '@/entities/folder/lib/types/form'

interface FormPanelProps {
  fields: CreateTopicForm[]
  append: UseFieldArrayAppend<CreateFolder, 'topics'>
}
export function FormPanel({ fields, append }: FormPanelProps) {
  const isMaxTopics = fields.length >= maxCountsTopics

  return (
    <>
      <ButtonControlFolder
        type="button"
        customPadding="px-5 md:px-11"
        color={!isMaxTopics ? '' : 'backdrop-opacity-20 text-gray-500'}
        disabled={isMaxTopics}
        onClick={() => append({ id: fields.length, topicName: '' })}
      >
        Добавить тему
      </ButtonControlFolder>

      <ButtonControlFolder type="submit" color={'text-primary'} customPadding="px-5 md:px-11">
        Создать папку
      </ButtonControlFolder>
    </>
  )
}
