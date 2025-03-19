import { AppDispatch } from '@/app/store/configureStore'
import { UnknownAction } from '@reduxjs/toolkit'

export interface handleAddLangProps {
  lang: string
  dispatch: AppDispatch
  stateSave: (lang: string) => UnknownAction
}
export const handleAddLang = ({ lang, dispatch, stateSave }: handleAddLangProps) => {
  dispatch(stateSave(lang))
}
