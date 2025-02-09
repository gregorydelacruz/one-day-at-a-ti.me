"use client"

import { Trophy, Clock, Wine, Snowflake, Activity, BarChart2, Calendar } from "lucide-react"
import { useState, useEffect } from "react"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { TriggerDialog } from "./trigger-dialog"
import Link from "next/link"
import type React from "react"

export function DailyTracker() {
  const [drinks, setDrinks] = useState(0)
  const [uses, setUses] = useState(0)
  const [stressLevel, setStressLevel] = useState(5)
  const [tirednessLevel, setTirednessLevel] = useState(5)
  const [hungerLevel, setHungerLevel] = useState(5)
  const [physicalLevel, setPhysicalLevel] = useState(5)
  const [showTriggerDialog, setShowTriggerDialog] = useState(false)
  const [triggers, setTriggers] = useState<{ timestamp: Date; trigger: string }[]>([])
  const [randomQuote, setRandomQuote] = useState("")

  const inspirationalQuotes = [
    "You are not alone in this journey.",
    "Every day is a new beginning.",
    "Progress, not perfection.",
    "One day at a time.",
    "Believe you can and you're halfway there.",
    "Your strength is greater than your struggle.",
    "Recovery is not for people who need it, it's for people who want it.",
    "The road to recovery is not a sprint, it's a marathon.",
    "You are stronger than you think.",
    "Every accomplishment starts with the decision to try.",
    "The only way out is through.",
    "Your past does not define your future.",
    "Small steps lead to big changes.",
    "Recovery is about progression, not perfection.",
    "You have the power to say 'This is not how my story will end.'",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Recovery is not a race. You don't have to feel guilty if it takes you longer than you thought it would.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "Your life is worth more than your addiction.",
    "It's okay to not be okay, as long as you are not giving up.",
    "Recovery is a journey, not a destination.",
    "You are brave for trying.",
    "Every day is a second chance.",
    "The struggle you're in today is developing the strength you need for tomorrow.",
    "You are resilient.",
    "Your potential is endless.",
    "Healing is not linear.",
    "You are worthy of a healthy and happy life.",
    "Trust the process.",
    "You are capable of amazing things.",
  ]

  useEffect(() => {
    setRandomQuote(inspirationalQuotes[Math.floor(Math.random() * inspirationalQuotes.length)])
  }, [])

  const handleUseIncrement = () => {
    setShowTriggerDialog(true)
  }

  const handleTriggerSelect = (trigger: string) => {
    setUses(uses + 1)
    setTriggers([...triggers, { timestamp: new Date(), trigger }])
  }

  return (
    <Card className="w-full">
      <CardHeader className="space-y-4">
        <div className="rounded-lg bg-blue-50 dark:bg-blue-900 p-4">
          <p className="text-center text-sm text-blue-600 dark:text-blue-300">&quot;{randomQuote}&quot;</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-yellow-500 dark:text-yellow-400">
            <Trophy className="h-5 w-5" />
            <span className="text-lg font-semibold">0 Days Clean</span>
          </div>
          <Link href="/weekly-summary">
            <Button variant="outline" size="sm" className="text-purple-600 dark:text-purple-400 w-full sm:w-auto">
              <BarChart2 className="mr-2 h-4 w-4" />
              Weekly Summary
            </Button>
          </Link>
        </div>
        <div className="rounded-lg bg-blue-50 dark:bg-blue-900 p-4">
          <div className="text-center text-lg font-bold text-purple-800 dark:text-purple-200">
            {format(new Date(), "EEEE, MMMM d, yyyy")}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Wine className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <span className="font-medium text-purple-600 dark:text-purple-400">Drinks Today</span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setDrinks(Math.max(0, drinks - 1))}
                className="h-8 w-8 rounded-md bg-blue-100 dark:bg-blue-900 p-0 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 hover:text-blue-700 dark:hover:text-blue-300"
              >
                -
              </Button>
              <span className="w-8 text-center font-bold">{drinks}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setDrinks(drinks + 1)}
                className="h-8 w-8 rounded-md bg-green-100 dark:bg-green-900 p-0 text-green-600 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-800 hover:text-green-700 dark:hover:text-green-300"
              >
                +
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Snowflake className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <span className="font-medium text-purple-600 dark:text-purple-400">Uses Today</span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setUses(Math.max(0, uses - 1))}
                className="h-8 w-8 rounded-md bg-blue-100 dark:bg-blue-900 p-0 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 hover:text-blue-700 dark:hover:text-blue-300"
              >
                -
              </Button>
              <span className="w-8 text-center font-bold">{uses}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={handleUseIncrement}
                className="h-8 w-8 rounded-md bg-green-100 dark:bg-green-900 p-0 text-green-600 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-800 hover:text-green-700 dark:hover:text-green-300"
              >
                +
              </Button>
            </div>
          </div>
        </div>

        <LevelSlider
          icon={<Activity className="h-5 w-5 text-purple-600 dark:text-purple-400" />}
          label="Stress Level Today"
          value={stressLevel}
          onChange={(value) => setStressLevel(value[0])}
        />

        <LevelSlider
          icon={<Clock className="h-5 w-5 text-purple-600 dark:text-purple-400" />}
          label="Tiredness Level Today"
          value={tirednessLevel}
          onChange={(value) => setTirednessLevel(value[0])}
        />

        <LevelSlider
          icon={<Activity className="h-5 w-5 text-purple-600 dark:text-purple-400" />}
          label="Hunger Level Today"
          value={hungerLevel}
          onChange={(value) => setHungerLevel(value[0])}
        />

        <LevelSlider
          icon={<Activity className="h-5 w-5 text-purple-600 dark:text-purple-400" />}
          label="Physical Level Today"
          value={physicalLevel}
          onChange={(value) => setPhysicalLevel(value[0])}
        />

        {triggers.length > 0 && (
          <div className="space-y-2">
            <h3 className="font-medium text-purple-600 dark:text-purple-400">Today&apos;s Triggers:</h3>
            <div className="space-y-2">
              {triggers.map((entry, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-purple-50 dark:bg-purple-900 p-2 text-sm text-purple-800 dark:text-purple-200"
                >
                  {format(entry.timestamp, "HH:mm")} - {entry.trigger}
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex justify-center">
        <Link href="/weekly-view">
          <Button variant="outline" className="text-purple-600 dark:text-purple-400 w-full">
            <Calendar className="mr-2 h-4 w-4" />
            View Weekly Progress
          </Button>
        </Link>
      </CardFooter>

      <TriggerDialog
        open={showTriggerDialog}
        onOpenChange={(open) => {
          setShowTriggerDialog(open)
          if (!open) {
            // Reset the dialog state when it's closed
            setShowTriggerDialog(false)
          }
        }}
        onSelect={handleTriggerSelect}
      />
    </Card>
  )
}

interface LevelSliderProps {
  icon: React.ReactNode
  label: string
  value: number
  onChange: (value: number[]) => void
}

function LevelSlider({ icon, label, value, onChange }: LevelSliderProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        {icon}
        <span className="font-medium text-purple-600 dark:text-purple-400">{label}</span>
        <span className="ml-auto font-bold">{value}</span>
      </div>
      <div className="px-2">
        <Slider
          min={0}
          max={10}
          step={1}
          value={[value]}
          onValueChange={onChange}
          className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
        />
      </div>
      <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
        <span>Low</span>
        <span>High</span>
      </div>
    </div>
  )
}

