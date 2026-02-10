"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ChatHeaderProps {
  chatName: string
  isOnline?: boolean
}

export function ChatHeader({ chatName, isOnline }: ChatHeaderProps) {
  return (
    <div className="flex items-center justify-between border-b bg-background p-4">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarFallback className="bg-blue-600 text-white">
            {chatName.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold">{chatName}</h3>
          {isOnline && (
            <p className="text-xs text-muted-foreground">в сети</p>
          )}
        </div>
      </div>
      <Button variant="ghost" size="icon">
        <Search className="h-5 w-5" />
      </Button>
    </div>
  )
}

