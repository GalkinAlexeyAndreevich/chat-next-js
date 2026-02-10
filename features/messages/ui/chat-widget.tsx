"use client"

import { MessageList, MessageInput, type Message } from ".."
import { ChatHeader } from "./chat-header"

interface ChatWidgetProps {
  messages: Message[]
  currentUserId: string
  chatTitle?: string
  chatAvatar?: string
  onSendMessage: (text: string) => void
  showHeader?: boolean
  placeholder?: string
  disabled?: boolean
  className?: string
}

export function ChatWidget({
  messages,
  currentUserId,
  chatTitle,
  chatAvatar,
  onSendMessage,
  showHeader = true,
  placeholder,
  disabled = false,
  className,
}: ChatWidgetProps) {
  return (
    <div className={`flex flex-1 flex-col rounded-lg border bg-card overflow-hidden ${className || ""}`}>
      {showHeader && chatTitle && (
        <ChatHeader chatName={chatTitle} chatAvatar={chatAvatar} />
      )}
      <MessageList 
        messages={messages} 
        currentUserId={currentUserId}
        className="bg-gray-900"
      />
      <MessageInput 
        onSendMessage={onSendMessage}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  )
}

