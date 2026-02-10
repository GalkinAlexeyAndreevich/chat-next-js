"use client"

import { useState } from "react"
import type { Message } from "@/shared/types"
import type { Chat } from "../types"
import { initialChats, initialMessages } from "../mocks/data"

export function useChat() {
  const [selectedChatId, setSelectedChatId] = useState<string | undefined>(undefined)
  const [messages, setMessages] = useState<Record<string, Message[]>>(initialMessages)
  const [chats, setChats] = useState<Chat[]>(initialChats)

  const selectedChat = selectedChatId ? chats.find((chat) => chat.id === selectedChatId) : undefined
  const currentMessages = messages[selectedChatId ?? ""] || []

  const handleSendMessage = (text: string) => {
    if (!selectedChatId) return

    const newMessage: Message = {
      id: Date.now().toString(),
      author: {
        id: "user-1",
        name: "Вы",
        avatar: "",
      },
      text,
      timestamp: new Date(),
      isOwn: true,
    }

    setMessages((prev) => ({
      ...prev,
      [selectedChatId]: [...(prev[selectedChatId] || []), newMessage],
    }))

    setChats((prev) =>
      prev.map((chat) =>
        chat.id === selectedChatId
          ? { ...chat, lastMessage: text, timestamp: newMessage.timestamp, unreadCount: undefined }
          : chat
      )
    )
  }

  return {
    chats,
    selectedChat,
    selectedChatId,
    currentMessages,
    setSelectedChatId,
    handleSendMessage,
  }
}

