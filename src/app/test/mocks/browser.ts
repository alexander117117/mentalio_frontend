import { setupWorker } from 'msw/browser'

import { authHandlers } from './Handlers/auth'
import { catalogHandlers } from './Handlers/catalog'
import { userHandlers } from './Handlers/user'

export const worker = setupWorker(...authHandlers, ...userHandlers, ...catalogHandlers)
