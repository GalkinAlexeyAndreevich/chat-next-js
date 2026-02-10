"use client"

import { useState, useCallback } from "react"
import type { Message, User } from "@/shared/types"

interface UseMessagesOptions {
  currentUserId: string
  currentUserName?: string
  initialMessages?: Message[]
  onMessageSent?: (message: Message) => void
}

export function useMessages({
  currentUserId,
  currentUserName,
  initialMessages = [],
  onMessageSent,
}: UseMessagesOptions) {
  const [messages, setMessages] = useState<Message[]>(initialMessages)

  const sendMessage = useCallback((text: string) => {
    const author: User = {
      id: currentUserId,
      name: currentUserName || currentUserId,
    }
    
    const newMessage: Message = {
      id: Date.now().toString(),
      author,
      text,
      timestamp: new Date(),
      isOwn: true,
    }

    setMessages((prev) => [...prev, newMessage])
    onMessageSent?.(newMessage)
  }, [currentUserId, currentUserName, onMessageSent])

  const addMessage = useCallback((message: Message) => {
    setMessages((prev) => [...prev, message])
  }, [])

  const setMessagesList = useCallback((newMessages: Message[]) => {
    setMessages(newMessages)
  }, [])

  return {
    messages,
    sendMessage,
    addMessage,
    setMessages: setMessagesList,
  }
}

