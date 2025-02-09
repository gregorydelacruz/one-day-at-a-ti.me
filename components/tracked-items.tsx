"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { useState } from "react"

type TrackedItem = {
  id: string
  name: string
  used: boolean
  streak: number
}

const initialItems: TrackedItem[] = [
  { id: "1", name: "Water Bottle", used: false, streak: 5 },
  { id: "2", name: "Gym Bag", used: false, streak: 3 },
  { id: "3", name: "Laptop Charger", used: false, streak: 7 },
]

export function TrackedItems() {
  const [items, setItems] = useState<TrackedItem[]>(initialItems)

  const toggleUsed = (id: string) => {
    setItems(items.map((item) => (item.id === id ? { ...item, used: !item.used } : item)))
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Card key={item.id}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{item.name}</CardTitle>
            <Switch checked={item.used} onCheckedChange={() => toggleUsed(item.id)} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{item.streak} days</div>
            <p className="text-xs text-muted-foreground">Current streak</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

