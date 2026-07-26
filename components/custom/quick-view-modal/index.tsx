"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { PublicationInterface, WorkInterface, WritingInterface } from "@/type"
import {
  XIcon,
  GlobeIcon,
  ExternalLinkIcon,
  CopyIcon,
  CheckIcon,
  FileTextIcon,
  ChevronRightIcon,
  LayersIcon,
  BookOpenIcon,
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
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

const isWork = (
  item: PublicationInterface | WorkInterface | WritingInterface
): item is WorkInterface => {
  return "metadata" in item && "key_contributions" in item.metadata
}

const isWriting = (
  item: PublicationInterface | WorkInterface | WritingInterface
): item is WritingInterface => {
  return "metadata" in item && "category" in item.metadata
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
