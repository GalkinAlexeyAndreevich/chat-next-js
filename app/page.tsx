"use client"

import { useState } from "react"
import {
  ChatList,
  CreateChatModal,
  useChat,
} from "@/features/chat"
import { ChatWidget } from "@/features/messages"
import { Button } from "@/shared/ui/button"
import { Plus } from "lucide-react"

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)
  const {
    chats,
    selectedChat,
    selectedChatId,
    currentMessages,
    setSelectedChatId,
    handleSendMessage,
    createChat,
  } = useChat()

  return (
    <main className="h-screen bg-gray-950">
      <CreateChatModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        onSubmit={(data) => {
          createChat(data)
        }}
      />
      <div className="mx-auto h-full max-w-7xl px-4 py-4">
        <div className="flex h-full gap-4">
          <div className="w-96 flex-shrink-0 flex flex-col">
            <div className="flex items-center justify-between gap-2 p-4 pb-0">
              <h2 className="text-lg font-semibold">Чаты</h2>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setModalOpen(true)}
                className="shrink-0"
              >
                <Plus className="h-4 w-4" />
                Новый чат
              </Button>
            </div>
            <div className="flex-1 min-h-0">
              <ChatList
                chats={chats}
                selectedChatId={selectedChatId}
                onChatSelect={setSelectedChatId}
              />
            </div>
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
