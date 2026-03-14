"use client"

import { useState } from "react"
import type { Message } from "@/shared/types"
import type { Chat } from "../types"
import type { CreateChatFormValues } from "./create-chat-schema"
import { initialChats, initialMessages } from "../mocks/data"

export function useChat() {
  const [selectedChatId, setSelectedChatId] = useState<string | undefined>("1")
  const [messages, setMessages] = useState<Record<string, Message[]>>(initialMessages)
  const [chats, setChats] = useState<Chat[]>(initialChats)

  const createChat = (data: CreateChatFormValues) => {
    const id = Date.now().toString()
    const newChat: Chat = {
      id,
      name: data.name.trim(),
      lastMessage: data.description?.trim() || "Новый чат",
      timestamp: new Date(),
    }
    setChats((prev) => [newChat, ...prev])
    setMessages((prev) => ({ ...prev, [id]: [] }))
    setSelectedChatId(id)
  }

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
    createChat,
  }
}

