"use client"

import { Avatar, AvatarFallback } from "@/shared/ui/avatar"
import { cn } from "@/lib/utils"
import type { Chat } from "../types"

interface ChatListProps {
  chats: Chat[]
  selectedChatId?: string
  onChatSelect: (chatId: string) => void
}

export function ChatList({ chats, selectedChatId, onChatSelect }: ChatListProps) {
  return (
    <div className="h-full overflow-y-auto border-r bg-muted/30">
      <div className="p-4">
        <h2 className="mb-4 text-lg font-semibold">Чаты</h2>
        <div className="space-y-1">
          {chats.map((chat) => (
            <button
              key={chat.id}
              onClick={() => onChatSelect(chat.id)}
              className={cn(
                "w-full flex items-center gap-3 rounded-lg p-3 text-left transition-colors hover:bg-muted",
                selectedChatId === chat.id && "bg-muted"
              )}
            >
              <Avatar>
                <AvatarFallback className="bg-blue-600 text-white">
                  {chat.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-sm truncate">{chat.name}</span>
                  <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                    {chat.timestamp}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-muted-foreground truncate">{chat.lastMessage}</p>
                  {chat.unreadCount && chat.unreadCount > 0 && (
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center">
                      {chat.unreadCount}
                      </div>
                    )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

