import { SettingInteractiveTest } from '../types'

export function overkillModes(setting: SettingInteractiveTest) {
  const result: string[] = []
  for (const key in setting) {
    if (key === 'isAnswerTrueFalse' || key === 'isAnswerMultipleChoice' || key === 'isAnswerWritten') {
      if (setting[key as keyof SettingInteractiveTest]) {
        switch (key) {
          case 'isAnswerTrueFalse':
            result.push('true_false')
            break
          case 'isAnswerMultipleChoice':
            result.push('multiple_choice')
            break
          case 'isAnswerWritten':
            result.push('written')
            break
        }
      }
    }
  }
  if (result.length === 0) {
    return ['true_false', 'multiple_choice', 'written']
  }
  return result
}
