"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
import { Textarea } from "@/shared/ui/textarea"
import { createChatSchema, type CreateChatFormValues } from "../model/create-chat-schema"
import { cn } from "@/lib/utils"

interface CreateChatFormProps {
  onSubmit: (data: CreateChatFormValues) => void
  onCancel?: () => void
  className?: string
}

export function CreateChatForm({ onSubmit, onCancel, className }: CreateChatFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CreateChatFormValues>({
    resolver: zodResolver(createChatSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  })

  const handleFormSubmit = (data: CreateChatFormValues) => {
    onSubmit({
      ...data,
      description: data.description?.trim() || undefined,
    })
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className={cn("space-y-4", className)}
    >
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">
          Название чата
        </label>
        <Input
          id="name"
          placeholder="Например: Рабочая группа"
          aria-invalid={!!errors.name}
          {...register("name")}
        />
        {errors.name && (
          <p className="text-sm text-destructive" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="description" className="text-sm font-medium">
          Описание <span className="text-muted-foreground">(необязательно)</span>
        </label>
        <Textarea
          id="description"
          placeholder="Краткое описание чата"
          rows={3}
          aria-invalid={!!errors.description}
          className="resize-none"
          {...register("description")}
        />
        {errors.description && (
          <p className="text-sm text-destructive" role="alert">
            {errors.description.message}
          </p>
        )}
      </div>

      <div className="flex gap-2 pt-2">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Создание…" : "Создать чат"}
        </Button>
        {onCancel && (
          <Button type="button" variant="outline" onClick={onCancel}>
            Отмена
          </Button>
        )}
      </div>
    </form>
  )
}
