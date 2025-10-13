"use client"

import * as React from "react"
import { format } from "date-fns"
import { vi } from "date-fns/locale"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

// ⬇️ Thêm kiểu field để dễ đọc
type CalendarViProps = {
  field: {
    value?: Date
    onChange: (value?: Date) => void
    onBlur?: () => void
    name?: string
  }
  placeholder?: string
  disabled?: boolean
}

export function CalendarVi({ field, placeholder = "Chọn ngày", disabled }: CalendarViProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex flex-col gap-3">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild className="h-12 px-3 flex items-center text-muted-foreground">
          <span>{field.value
            ? format(field.value, "dd/MM/yyyy", { locale: vi })
            : placeholder}</span>
        </PopoverTrigger>

        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={field.value}
            onSelect={(date) => {
              field.onChange(date)
              setOpen(false)
            }}
            locale={vi}
            captionLayout="dropdown"
            fromYear={1950}
            toYear={2100}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
