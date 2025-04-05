import { Id } from '../types/types'

export const API_ENDPOINTS = {
  common: {
    baseUrl: import.meta.env.VITE_API_URL || 'https://api.example.com',
  },
  auth: {
    changePassword: '/v1/auth/change-password',
    checkLogin: '/v1/auth/check-login',
    login: '/v1/auth/login',
    passwordResetConfirm: '/v1/auth/password-reset/confirm',
    passwordResetRequest: '/v1/auth/password-reset/request',
    passwordResetVerification: '/v1/auth/password-reset/verification',
    register: '/v1/auth/register',
    user: '/v1/auth/user',
  },
  analytics: {
    questions: '/auth/register/analytics/questions',
  },
  folders: {
    categories: {
      list: '/v1/folders/categories/',
      create: '/v1/folders/categories/',
      details: (categoryId: Id): string => `/v1/folders/categories/${categoryId}/`,
    },
    files: {
      list: '/v1/folders/folders/',
      create: '/v1/folders/folders/',
      details: (fileId: Id): string => `/v1/folders/folders/${fileId}/`,
      update: (fileId: Id): string => `/v1/folders/folders/${fileId}/`,
      delete: (fileId: Id): string => `/v1/folders/folders/${fileId}/`,
      add: (fileId: Id): string => `/v1/folders/folders/${fileId}/add/`,
    },
    topics: {
      list: (fileId: Id): string => `/v1/folders/folders/${fileId}/topics/`,
      create: (fileId: Id): string => `/v1/folders/folders/${fileId}/topics/`,
      details: (fileId: Id, topicId: Id): string => `/v1/folders/folders/${fileId}/topics/${topicId}/`,
      update: (fileId: Id, topicId: Id): string => `/v1/folders/folders/${fileId}/topics/${topicId}/`,
      delete: (fileId: Id, topicId: Id): string => `/v1/folders/folders/${fileId}/topics/${topicId}/`,
    },
    cards: {
      list: (topicId: Id): string => `/v1/folders/topics/${topicId}/cards/`,
      create: (topicId: Id): string => `/v1/folders/topics/${topicId}/cards/`,
      getDetails: (topicId: Id, cardId: Id): string => `/v1/folders/topics/${topicId}/cards/${cardId}/`,
      update: (topicId: Id, cardId: Id): string => `/v1/folders/topics/${topicId}/cards/${cardId}/`,
      delete: (topicId: Id, cardId: Id): string => `/v1/folders/topics/${topicId}/cards/${cardId}/`,
    },
    delete: (topicId: Id, cardId: Id): string => `/v1/folders/topics/${topicId}/cards/${cardId}/`,
    catalog: '/v1/folders/catalog/',
  },
  getIMG: '/v1/folders/topics/cards/get-img/',
  public: {
    files: {
      list: '/v1/folders/public/files/',
      details: (fileId: Id): string => `/v1/folders/public/files/${fileId}/`,
      topics: {
        list: (fileId: Id): string => `/v1/folders/public/files/${fileId}/topics/`,
        details: (fileId: Id, topicId: Id): string => `/v1/folders/public/files/${fileId}/topics/${topicId}/`,
        cards: {
          list: (fileId: Id, topicId: Id): string => `/v1/folders/public/files/${fileId}/topics/${topicId}/cards/`,
          details: (fileId: Id, topicId: Id, cardId: Id): string =>
            `/v1/folders/public/files/${fileId}/topics/${topicId}/cards/${cardId}/`,
        },
      },
    },
    count: '/v1/folders/public/folders/count/',
  },
  stats: {
    folderCopyRanking: '/v1/folders/stats/folder-copy-ranking/',
    userStudiedCards: '/v1/folders/stats/user-studied-cards/',
  },
  translator: {
    translate: '/v1/translator/translate/',
  },
  interactive: {
    getDataMemorization: (idTopic: Id): string => `/v1/tests/${idTopic}/memorize/`,
    getDataTest: (idTopic: Id): string => `/v1/tests/${idTopic}/test/`,
  },
}
