"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { PublicationInterface, WorkInterface, WritingInterface } from "@/type"
import ResearchContent from "./ResearchContent"

interface QuickViewModalProps {
  isOpen: boolean
  data: PublicationInterface | WorkInterface | WritingInterface | null
  onClose: () => void
}

const isPublication = (
  item: PublicationInterface | WorkInterface | WritingInterface
): item is PublicationInterface => {
  return "authors" in item
}

const isProject = (
  item: PublicationInterface | WorkInterface | WritingInterface
): item is WorkInterface => {
  return "metadata" in item && "key_contributions" in item.metadata
}

const QuickViewModal = ({ isOpen, data, onClose }: QuickViewModalProps) => {
  if (!data) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-[calc(100%-2rem)] overflow-hidden rounded-none border border-border/60 bg-card shadow-2xl backdrop-blur-2xl sm:max-w-2xl md:max-w-3xl"
        showCloseButton={false}
      >
        {(() => {
          if (isPublication(data)) {
            return <ResearchContent data={data} onClose={onClose} />
          }
        })()}
      </DialogContent>
    </Dialog>
  )
}

export default QuickViewModal
