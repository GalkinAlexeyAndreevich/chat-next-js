export interface Message {
  id: string
  author: string
  text: string
  timestamp: string
  isOwn?: boolean
}

export interface Chat {
  id: string
  name: string
  lastMessage: string
  timestamp: string
  unreadCount?: number
}

