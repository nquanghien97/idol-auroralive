import { Button } from '@/components/ui/button'
import Modal from '@/components/ui/modal'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

interface PopupProps {
  open: boolean
  onClose: () => void
  refValue: React.RefObject<HTMLTextAreaElement | null>
  setValue: (value: React.SetStateAction<string>) => void
  title: string
}

function Popup(props: PopupProps) {
  const {
    open,
    onClose,
    refValue,
    setValue,
    title
  } = props

  return (
    <Modal
      open={open}
      onClose={onClose}
      className="bg-white p-4 w-1/2"
    >
      <p className="text-center mb-4 text-2xl">{title}</p>
      <div className="mb-4">
        <Textarea rows={8} placeholder={title} ref={refValue} />
      </div>
      <div className="flex justify-end gap-4">
        <Button variant="destructive" className="cursor-pointer" onClick={onClose}>Hủy</Button>
        <Button
          className="cursor-pointer"
          onClick={() => {
            setValue(refValue.current?.value || '')
            onClose()
          }}
        >
          Lưu
        </Button>
      </div>
    </Modal>
  )
}

export default Popup