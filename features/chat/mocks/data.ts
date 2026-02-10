import type { Message } from "@/shared/types"
import type { Chat } from "../types"

const now = new Date()
const today2 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 33)
const today3 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 35)
const today4 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 36)
const today5 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 37)
const yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 15, 0)
const lastWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 5, 12, 0)

export const initialChats: Chat[] = [
  {
    id: "1",
    name: "Мария",
    lastMessage: "Конечно! Во сколько?",
    timestamp: today3,
    unreadCount: 2,
  },
  {
    id: "2",
    name: "Алексей",
    lastMessage: "Привет! Как дела?",
    timestamp: today5,
  },
  {
    id: "3",
    name: "Анна",
    lastMessage: "Спасибо за помощь!",
    timestamp: yesterday,
  },
  {
    id: "4",
    name: "Дмитрий",
    lastMessage: "Встречаемся в 18:00",
    timestamp: lastWeek,
  },
]

export const initialMessages: Record<string, Message[]> = {
  "1": [
    {
      id: "1",
      author: {
        id: "user-maria",
        name: "Мария",
        avatar: "",
      },
      text: "Привет! Всё отлично, спасибо! А у тебя?",
      timestamp: yesterday,
    },
    {
      id: "2",
      author: {
        id: "user-1",
        name: "Вы",
        avatar: "",
      },
      text: "Тоже хорошо. Хочешь встретиться сегодня?",
      timestamp: today2,
      isOwn: true,
    },
    {
      id: "3",
      author: {
        id: "user-maria",
        name: "Мария",
        avatar: "",
      },
      text: "Конечно! Во сколько?",
      timestamp: today3,
    },
    {
      id: "4",
      author: {
        id: "user-1",
        name: "Вы",
        avatar: "",
      },
      text: "Давай в 18:00 в кафе на главной?",
      timestamp: today4,
      isOwn: true,
    },
    {
      id: "8",
      author: {
        id: "user-maria",
        name: "Мария",
        avatar: "",
      },
      text: "Отлично, до встречи!",
      timestamp: today5,
    },
  ],
  "2": [
    {
      id: "5",
      author: {
        id: "user-alexey",
        name: "Алексей",
        avatar: "",
      },
      text: "Привет! Как дела?",
      timestamp: today5,
    },
  ],
  "3": [
    {
      id: "6",
      author: {
        id: "user-anna",
        name: "Анна",
        avatar: "",
      },
      text: "Спасибо за помощь!",
      timestamp: yesterday,
    },
  ],
  "4": [
    {
      id: "7",
      author: {
        id: "user-dmitry",
        name: "Дмитрий",
        avatar: "",
      },
      text: "Встречаемся в 18:00",
      timestamp: lastWeek,
    },
  ],
}

