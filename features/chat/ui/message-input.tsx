"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Send, Smile } from "lucide-react"
import { cn } from "@/lib/utils"

interface MessageInputProps {
  onSendMessage: (message: string) => void
  placeholder?: string
}

export function MessageInput({ onSendMessage, placeholder = "Написать сообщение..." }: MessageInputProps) {
  const [message, setMessage] = useState("")

  const sendMessage = () => {
    const normalizedMessage = message.trim()

    if (normalizedMessage) {
      onSendMessage(normalizedMessage)
      setMessage("")
    }
  }

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    sendMessage()
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="border-t bg-background p-4">
      <div className="flex items-end gap-2">
        <Button type="button" variant="ghost" size="icon">
          <Smile className="h-5 w-5" />
        </Button>
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={cn(
            "flex-1 min-h-[40px] max-h-[160px]",
            "resize-none overflow-hidden",
            "border-none focus-visible:border-none hover:border-none",
            "focus-visible:ring-0",
            "bg-background shadow-none"
          )}
          rows={1}
        />
        <Button type="submit" size="icon" disabled={!message.trim()}>
          <Send className="h-5 w-5" />
        </Button>
      </div>
    </form>
  )
}

