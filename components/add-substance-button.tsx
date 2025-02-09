"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react"
import { useState } from "react"

export function AddSubstanceButton() {
  const [open, setOpen] = useState(false)
  const [substanceName, setSubstanceName] = useState("")
  const [unit, setUnit] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add new substance logic here
    setOpen(false)
    setSubstanceName("")
    setUnit("")
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Substance
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Substance to Track</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Substance Name</Label>
            <Input
              id="name"
              value={substanceName}
              onChange={(e) => setSubstanceName(e.target.value)}
              placeholder="Enter substance name..."
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="unit">Unit of Measurement</Label>
            <Input
              id="unit"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              placeholder="e.g., drinks, grams, pills"
            />
          </div>
          <Button type="submit" className="w-full">
            Add Substance
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

