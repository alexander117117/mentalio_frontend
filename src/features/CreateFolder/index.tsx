import { ModalWrapper } from '@/shared/ui/ModalWrapper'
import { DescriptionFolder } from '@/shared/ui/buttons/ButtonAddFolderPlus/components/DescriptionFolder'
import { InputAddFolder } from '@/shared/ui/buttons/ButtonAddFolderPlus/components/InputAddFolder'
import { SelectAddFolder } from '@/shared/ui/buttons/ButtonAddFolderPlus/components/SelectAddFolder'
import { ButtonControlFolder } from '@/shared/ui/buttons/ButtonControlFolder'
interface CreateFolder {
  isModalOpen: boolean
  setIsModalOpen: (isOpen: boolean) => void
  quantityTopicInput: number
  setQuantityTopicInput: (quantity: number) => void
}

export function CreateFolder({ isModalOpen, setIsModalOpen }: CreateFolder) {
  const handeleAddTopic = () => {

  }
  return (
    <ModalWrapper isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} isDark={true}>
      <div className="pb-12 md:pb-16 relative">
        <h2 className="text-white text-2xl sm:text-4xl font-normal mb-6 sm:mb-10 text-center">Создание папки</h2>

        <form className="w-full sm:w-[490px] flex flex-col gap-[10px] p-3 sm:p-5 rounded-[15px] text-white">
          <InputAddFolder type={'text'} name={'folderName'} placeholder={'Введите название папки...'} />
          <SelectAddFolder />
          <InputAddFolder type={'text'} name={'topicTitle'} placeholder={'Введите название темы...'} />
          <DescriptionFolder
            name={'topicDescription'}
            placeholder={'Введите описание папки... \nНапример: это папка для изучения испанского языка для уровня a1'}
          />
        </form>

        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-evenly">
          <ButtonControlFolder customPadding="px-5 md:px-11" onClick={() => handeleAddTopic()}>Добавить тему</ButtonControlFolder>
          <ButtonControlFolder color={'text-primary'} customPadding="px-5 md:px-11">
            Создать папку
          </ButtonControlFolder>
        </div>
      </div>
    </ModalWrapper>
  )
}
