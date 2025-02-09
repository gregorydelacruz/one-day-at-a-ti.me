"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { format, startOfWeek, endOfWeek, eachDayOfInterval, subWeeks, addWeeks } from "date-fns"

export function WeeklyView() {
  const [currentWeek, setCurrentWeek] = useState(new Date())

  const weekStart = startOfWeek(currentWeek)
  const weekEnd = endOfWeek(currentWeek)
  const daysOfWeek = eachDayOfInterval({ start: weekStart, end: weekEnd })

  const goToPreviousWeek = () => setCurrentWeek(subWeeks(currentWeek, 1))
  const goToNextWeek = () => setCurrentWeek(addWeeks(currentWeek, 1))

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
        <CardTitle className="text-center sm:text-left">Week of {format(weekStart, "MMMM d, yyyy")}</CardTitle>
        <div className="flex space-x-2">
          <Button variant="outline" size="icon" onClick={goToPreviousWeek}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={goToNextWeek}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7">
          {daysOfWeek.map((day) => (
            <Card key={day.toISOString()} className="p-4">
              <CardTitle className="text-sm">{format(day, "EEE")}</CardTitle>
              <CardContent className="p-0 pt-2">
                <p className="text-2xl font-bold">{format(day, "d")}</p>
                <p className="text-sm text-muted-foreground">Drinks: -</p>
                <p className="text-sm text-muted-foreground">Uses: -</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

