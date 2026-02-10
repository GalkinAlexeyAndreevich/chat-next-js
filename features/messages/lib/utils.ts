import type { Message } from "@/shared/types"

export function isOwnMessage(message: Message, currentUserId?: string): boolean {
  if (message.isOwn === true) return true
  
  if (!currentUserId) return false
  
  return message.author.id === currentUserId
}

export function getAvatarColor(isOwn: boolean): string {
  return isOwn ? "bg-green-600" : "bg-blue-600"
}

export function getMessageBubbleClasses(isOwn: boolean): string {
  return isOwn
    ? "bg-green-600 text-white rounded-tr-sm"
    : "bg-gray-800 text-gray-100 rounded-tl-sm"
}

export function getTimestampColor(isOwn: boolean): string {
  return isOwn ? "text-green-100" : "text-gray-400"
}

export function formatMessageTime(date: Date): string {
  return date.toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" })
}

export function formatChatTimestamp(date: Date): string {
  const now = new Date()
  const isToday = date.toDateString() === now.toDateString()
  
  if (isToday) {
    return date.toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" })
  }

  const dayOfWeek = now.getDay()
  const daysToMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1
  
  const startOfWeek = new Date(now)
  startOfWeek.setDate(now.getDate() - daysToMonday)
  startOfWeek.setHours(0, 0, 0, 0)

  const endOfWeek = new Date(startOfWeek)
  endOfWeek.setDate(startOfWeek.getDate() + 6)
  endOfWeek.setHours(23, 59, 59, 999)

  const isThisWeek = date >= startOfWeek && date <= endOfWeek
  if (isThisWeek) {
    const daysOfWeek = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]
    return daysOfWeek[date.getDay()]
  }

  return date.toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit", year: "numeric" })
}

export function formatDateSeparator(date: Date): string {
  const now = new Date()
  const isToday = date.toDateString() === now.toDateString()
  
  if (isToday) {
    return "Сегодня"
  }

  const yesterday = new Date(now)
  yesterday.setDate(now.getDate() - 1)
  const isYesterday = date.toDateString() === yesterday.toDateString()
  
  if (isYesterday) {
    return "Вчера"
  }

  const dayOfWeek = now.getDay()
  const daysToMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1
  
  const startOfWeek = new Date(now)
  startOfWeek.setDate(now.getDate() - daysToMonday)
  startOfWeek.setHours(0, 0, 0, 0)

  const endOfWeek = new Date(startOfWeek)
  endOfWeek.setDate(startOfWeek.getDate() + 6)
  endOfWeek.setHours(23, 59, 59, 999)

  const isThisWeek = date >= startOfWeek && date <= endOfWeek
  if (isThisWeek) {
    const daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
    return daysOfWeek[date.getDay()]
  }

  return date.toLocaleDateString("ru-RU", { 
    day: "numeric", 
    month: "long", 
    year: "numeric" 
  })
}

export function isSameDay(date1: Date, date2: Date): boolean {
  return date1.toDateString() === date2.toDateString()
}

