import { setupWorker } from 'msw/browser'
import { handlers } from './handlers.js'
import { mainMocks } from './mainMocks.js'

export const worker = setupWorker(...handlers, ...mainMocks)
