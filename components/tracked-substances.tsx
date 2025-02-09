"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

type TrackedSubstance = {
  id: string
  name: string
  amount: number
  unit: string
  lastUsed: Date | null
}

const initialSubstances: TrackedSubstance[] = [
  { id: "1", name: "Alcohol", amount: 0, unit: "drinks", lastUsed: null },
  { id: "2", name: "Cannabis", amount: 0, unit: "grams", lastUsed: null },
]

export function TrackedSubstances() {
  const [substances, setSubstances] = useState<TrackedSubstance[]>(initialSubstances)

  const updateAmount = (id: string, amount: number) => {
    setSubstances(
      substances.map((substance) => (substance.id === id ? { ...substance, amount: Math.max(0, amount) } : substance)),
    )
  }

  const recordUse = (id: string) => {
    setSubstances(
      substances.map((substance) => (substance.id === id ? { ...substance, lastUsed: new Date() } : substance)),
    )
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {substances.map((substance) => (
        <Card key={substance.id}>
          <CardHeader>
            <CardTitle>{substance.name}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Input
                type="number"
                value={substance.amount}
                onChange={(e) => updateAmount(substance.id, Number.parseFloat(e.target.value))}
                min={0}
                step={0.1}
              />
              <span>{substance.unit}</span>
            </div>
            <Button onClick={() => recordUse(substance.id)} className="w-full">
              Record Use
            </Button>
            <div className="text-sm text-muted-foreground">
              Last used: {substance.lastUsed ? substance.lastUsed.toLocaleString() : "Never"}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

