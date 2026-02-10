import type { Chat, Message } from "../types"

export const initialChats: Chat[] = [
  {
    id: "1",
    name: "Мария",
    lastMessage: "Конечно! Во сколько?",
    timestamp: "10:35",
    unreadCount: 2,
  },
  {
    id: "2",
    name: "Алексей",
    lastMessage: "Привет! Как дела?",
    timestamp: "10:30",
  },
  {
    id: "3",
    name: "Анна",
    lastMessage: "Спасибо за помощь!",
    timestamp: "Вчера",
  },
  {
    id: "4",
    name: "Дмитрий",
    lastMessage: "Встречаемся в 18:00",
    timestamp: "Вчера",
  },
]

export const initialMessages: Record<string, Message[]> = {
  "1": [
    {
      id: "1",
      author: "Мария",
      text: "Привет! Всё отлично, спасибо! А у тебя?",
      timestamp: "10:32",
    },
    {
      id: "2",
      author: "Вы",
      text: "Тоже хорошо. Хочешь встретиться сегодня?",
      timestamp: "10:33",
      isOwn: true,
    },
    {
      id: "3",
      author: "Мария",
      text: "Конечно! Во сколько?",
      timestamp: "10:35",
    },
    {
      id: "4",
      author: "Вы",
      text: "Давай в 18:00 в кафе на главной?",
      timestamp: "10:36",
      isOwn: true,
    },
  ],
  "2": [
    {
      id: "5",
      author: "Алексей",
      text: "Привет! Как дела?",
      timestamp: "10:30",
    },
  ],
  "3": [
    {
      id: "6",
      author: "Анна",
      text: "Спасибо за помощь!",
      timestamp: "Вчера",
    },
  ],
  "4": [
    {
      id: "7",
      author: "Дмитрий",
      text: "Встречаемся в 18:00",
      timestamp: "Вчера",
    },
  ],
}

