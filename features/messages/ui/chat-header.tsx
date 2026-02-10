"use client"

import { Avatar, AvatarFallback } from "@/shared/ui/avatar"
import { Search } from "lucide-react"
import { Button } from "@/shared/ui/button"
import Image from "next/image"

interface ChatHeaderProps {
  chatName: string
  chatAvatar?: string
  isOnline?: boolean
  onSearch?: () => void
}

export function ChatHeader({ chatName, chatAvatar, isOnline, onSearch }: ChatHeaderProps) {
  return (
    <div className="flex items-center justify-between border-b bg-background p-4">
      <div className="flex items-center gap-3">
        <Avatar>
          {chatAvatar ? (
            <Image src={chatAvatar} alt={chatName} width={32} height={32} />
          ) : (
            <AvatarFallback className="bg-blue-600 text-white">
              {chatName.charAt(0).toUpperCase()}
            </AvatarFallback>
          )}
        </Avatar>
        <div>
          <h3 className="font-semibold">{chatName}</h3>
          {isOnline && (
            <p className="text-xs text-muted-foreground">в сети</p>
          )}
        </div>
      </div>
      {onSearch && (
        <Button variant="ghost" size="icon" onClick={onSearch}>
          <Search className="h-5 w-5" />
        </Button>
      )}
    </div>
  )
}

