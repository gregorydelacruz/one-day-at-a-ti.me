"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Cell } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Mock data for the charts
const weeklyData = [
  { day: "Mon", uses: 2, drinks: 1, stress: 6, tiredness: 7 },
  { day: "Tue", uses: 1, drinks: 0, stress: 4, tiredness: 5 },
  { day: "Wed", uses: 0, drinks: 2, stress: 3, tiredness: 4 },
  { day: "Thu", uses: 1, drinks: 1, stress: 5, tiredness: 6 },
  { day: "Fri", uses: 3, drinks: 2, stress: 7, tiredness: 8 },
  { day: "Sat", uses: 2, drinks: 3, stress: 6, tiredness: 7 },
  { day: "Sun", uses: 1, drinks: 1, stress: 4, tiredness: 5 },
]

const triggerData = [
  { name: "Stress Relief", value: 5, color: "#FF6B6B" },
  { name: "Self-Medication", value: 3, color: "#4ECDC4" },
  { name: "Boredom", value: 4, color: "#45B7D1" },
  { name: "Peer Pressure", value: 2, color: "#F7B731" },
  { name: "Decompression", value: 6, color: "#6C5CE7" },
  { name: "Celebration", value: 3, color: "#FFA07A" },
  { name: "Availability", value: 2, color: "#98FB98" },
  { name: "Environmental", value: 1, color: "#DDA0DD" },
]

export function WeeklySummary() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Weekly Usage Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              uses: {
                label: "Uses",
                color: "hsl(var(--chart-1))",
              },
              drinks: {
                label: "Drinks",
                color: "hsl(var(--chart-2))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData}>
                <XAxis dataKey="day" stroke="hsl(var(--foreground))" />
                <YAxis stroke="hsl(var(--foreground))" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="uses" fill="var(--color-uses)" name="Uses" />
                <Bar dataKey="drinks" fill="var(--color-drinks)" name="Drinks" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Stress and Tiredness Levels</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              stress: {
                label: "Stress",
                color: "hsl(var(--chart-3))",
              },
              tiredness: {
                label: "Tiredness",
                color: "hsl(var(--chart-4))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weeklyData}>
                <XAxis dataKey="day" stroke="hsl(var(--foreground))" />
                <YAxis stroke="hsl(var(--foreground))" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line type="monotone" dataKey="stress" stroke="var(--color-stress)" name="Stress" />
                <Line type="monotone" dataKey="tiredness" stroke="var(--color-tiredness)" name="Tiredness" />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Trigger Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              value: {
                label: "Occurrences",
                color: "hsl(var(--chart-5))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={triggerData} layout="vertical">
                <XAxis type="number" stroke="hsl(var(--foreground))" />
                <YAxis dataKey="name" type="category" width={150} stroke="hsl(var(--foreground))" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="value" name="Occurrences">
                  {triggerData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Weekly Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Stat label="Total Uses" value="10" />
            <Stat label="Total Drinks" value="10" />
            <Stat label="Avg. Stress" value="5.0" />
            <Stat label="Avg. Tiredness" value="6.0" />
            <Stat label="Clean Days" value="2" />
            <Stat label="Most Common Trigger" value="Decompression" />
            <Stat label="Improvement" value="+5%" trend="up" />
            <Stat label="Risk Level" value="Moderate" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Trigger Legend</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {triggerData.map((trigger) => (
              <div key={trigger.name} className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-full" style={{ backgroundColor: trigger.color }}></div>
                <span className="text-sm">{trigger.name}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function Stat({ label, value, trend }: { label: string; value: string; trend?: "up" | "down" }) {
  return (
    <div className="text-center">
      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</dt>
      <dd className="mt-1 text-2xl font-semibold text-purple-600 dark:text-purple-400">
        {value}
        {trend && (
          <span className={trend === "up" ? "text-green-500 dark:text-green-400" : "text-red-500 dark:text-red-400"}>
            {trend === "up" ? "↑" : "↓"}
          </span>
        )}
      </dd>
    </div>
  )
}

