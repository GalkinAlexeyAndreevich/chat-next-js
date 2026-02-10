"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import type { Message } from "../types"

interface MessageListProps {
  messages: Message[]
  currentUser?: string
}

export function MessageList({ messages, currentUser }: MessageListProps) {
  return (
    <div className="flex flex-1 flex-col overflow-y-auto p-4 gap-4 bg-gray-900">
      {messages.map((message) => {
        const isOwn = message.isOwn || message.author === currentUser
        return (
          <div
            key={message.id}
            className="flex items-start gap-3"
          >
            <Avatar className="h-8 w-8">
              <AvatarFallback className={cn(
                "text-white text-xs",
                isOwn ? "bg-green-600" : "bg-blue-600"
              )}>
                {message.author.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className={cn(
                "flex max-w-[70%] rounded-2xl px-4 py-2 gap-2",
                isOwn
                  ? "bg-green-600 text-white rounded-tr-sm"
                  : "bg-gray-800 text-gray-100 rounded-tl-sm"
              )}>
              <p className="text-sm whitespace-pre-wrap break-words">{message.text}</p>
              <span className={cn(
                "text-xs self-end",
                isOwn ? "text-green-100" : "text-gray-400"
              )}>
                {message.timestamp}
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

