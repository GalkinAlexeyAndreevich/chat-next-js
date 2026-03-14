"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui/dialog"
import { CreateChatForm } from "./create-chat-form"
import type { CreateChatFormValues } from "../model/create-chat-schema"

interface CreateChatModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit: (data: CreateChatFormValues) => void
}

export function CreateChatModal({ open, onOpenChange, onSubmit }: CreateChatModalProps) {
  const handleSubmit = (data: CreateChatFormValues) => {
    onSubmit(data)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent showCloseButton={true}>
        <DialogHeader>
          <DialogTitle>Новый чат</DialogTitle>
        </DialogHeader>
        <CreateChatForm
          onSubmit={handleSubmit}
          onCancel={() => onOpenChange(false)}
        />
      </DialogContent>
    </Dialog>
  )
}
