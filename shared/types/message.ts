export interface Message {
  id: string
  author: User
  text: string
  timestamp: Date
  isOwn?: boolean
}

export interface User {
  id: string
  name: string
  avatar?: string
}

