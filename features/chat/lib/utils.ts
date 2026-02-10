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

