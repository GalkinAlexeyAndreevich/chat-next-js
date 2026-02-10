"use client"

import { Avatar, AvatarFallback } from "@/shared/ui/avatar"
import { cn } from "@/lib/utils"
import type { Message } from "../types"
import { 
  isOwnMessage, 
  getAvatarColor, 
  getMessageBubbleClasses, 
  getTimestampColor,
  formatMessageTime,
  formatDateSeparator,
  isSameDay
} from "../lib/utils"
import Image from "next/image"

interface MessageListProps {
  messages: Message[]
  currentUserId?: string
  className?: string
}

export function MessageList({ messages, currentUserId, className }: MessageListProps) {
  return (
    <div className={cn("flex flex-1 flex-col overflow-y-auto p-4 gap-4", className)}>
      {messages.map((message, index) => {
        const isOwn = isOwnMessage(message, currentUserId)
        const prevMessage = index > 0 ? messages[index - 1] : null
        const showDateSeparator = !prevMessage || !isSameDay(message.timestamp, prevMessage.timestamp)
        
        return (
          <div key={message.id}>
            {showDateSeparator && (
              <div className="flex items-center justify-center my-4">
                <span className="text-xs text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                  {formatDateSeparator(message.timestamp)}
                </span>
              </div>
            )}
            <div className="flex items-start gap-3">
              <Avatar className="h-8 w-8">
                {message.author.avatar ? (
                  <Image src={message.author.avatar} alt={message.author?.name} width={32} height={32} />
                ) : (
                  <AvatarFallback className={cn(
                    "text-white text-xs",
                    getAvatarColor(isOwn)
                  )}>
                    {message.author?.name?.charAt(0).toUpperCase()}
                  </AvatarFallback>
                )}
              </Avatar>
              <div className={cn(
                  "flex max-w-[70%] rounded-2xl px-4 py-2 gap-2",
                  getMessageBubbleClasses(isOwn)
                )}>
                <p className="text-sm whitespace-pre-wrap break-words">{message.text}</p>
                <span className={cn(
                  "text-xs self-end",
                  getTimestampColor(isOwn)
                )}>
                  {formatMessageTime(message.timestamp)}
                </span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

