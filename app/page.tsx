"use client"

import {
  MessageList,
  ChatList,
  ChatHeader,
  MessageInput,
  useChat,
} from "@/features/chat"

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
          {/* Список чатов */}
          <div className="w-96 flex-shrink-0">
            <ChatList
              chats={chats}
              selectedChatId={selectedChatId}
              onChatSelect={setSelectedChatId}
            />
          </div>

          {/* Область чата */}
          <div className="flex flex-1 flex-col rounded-lg border border-gray-700 bg-gray-900 overflow-hidden">
            {selectedChat ? (
              <>
                <ChatHeader chatName={selectedChat.name} isOnline={true} />
                <MessageList messages={currentMessages} currentUser="Вы" />
                <MessageInput onSendMessage={handleSendMessage} />
              </>
            ) : (
              <div className="flex flex-1 items-center justify-center text-gray-400">
                Выберите чат для начала общения
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
