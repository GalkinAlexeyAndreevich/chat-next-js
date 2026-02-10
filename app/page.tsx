"use client"

import {
  ChatList,
  useChat,
} from "@/features/chat"
import { ChatWidget } from "@/features/messages"

export default function Home() {
  const {
    chats,
    selectedChat,
    selectedChatId,
    currentMessages,
    setSelectedChatId,
    handleSendMessage,
  } = useChat()

  return (
    <main className="h-screen bg-gray-950">
      <div className="mx-auto h-full max-w-7xl px-4 py-4">
        <div className="flex h-full gap-4">
          <div className="w-96 flex-shrink-0">
            <ChatList
              chats={chats}
              selectedChatId={selectedChatId}
              onChatSelect={setSelectedChatId}
            />
          </div>

          {selectedChat ? (
            <ChatWidget
              messages={currentMessages}
              currentUserId="user-1"
              chatTitle={selectedChat.name}
              onSendMessage={handleSendMessage}
              className="flex-1"
            />
          ) : (
            <div className="flex flex-1 items-center justify-center text-gray-400 rounded-lg border border-gray-700 bg-gray-900">
              Выберите чат для начала общения
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
