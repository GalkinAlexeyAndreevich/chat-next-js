export { MessageList } from "./ui/message-list"
export { MessageInput } from "./ui/message-input"
export { ChatWidget } from "./ui/chat-widget"
export { ChatHeader } from "./ui/chat-header"

export { useMessages } from "./model/use-messages"

export type { Message, User } from "@/shared/types"

export { 
  isOwnMessage, 
  getAvatarColor, 
  getMessageBubbleClasses, 
  getTimestampColor,
  formatMessageTime,
  formatDateSeparator,
  isSameDay
} from "./lib/utils"

