"use client"

import { useState } from "react"
import type { Message, Chat } from "../types"
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
      author: "Вы",
      text,
      timestamp: new Date().toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" }),
      isOwn: true,
    }

    setMessages((prev) => ({
      ...prev,
      [selectedChatId]: [...(prev[selectedChatId] || []), newMessage],
    }))

    // Обновляем последнее сообщение в списке чатов
    setChats((prev) =>
      prev.map((chat) =>
        chat.id === selectedChatId
          ? { ...chat, lastMessage: text, timestamp: "только что", unreadCount: undefined }
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

