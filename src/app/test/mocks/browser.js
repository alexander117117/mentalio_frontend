import { setupWorker } from 'msw/browser'
import { handlers } from './handlers.js'
import { mainMocks } from './mainMocks.js'
import { catalogHandlers } from './catalog.ts'

export const worker = setupWorker(...handlers, ...mainMocks, ...catalogHandlers)
