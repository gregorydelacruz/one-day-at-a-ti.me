import { WeeklySummary } from "@/components/weekly-summary"

export default function WeeklySummaryPage() {
  return (
    <div className="min-h-screen bg-[#faf8ff] p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-center text-3xl font-bold text-purple-600 dark:text-purple-400">Summary</h1>
        <WeeklySummary />
      </div>
    </div>
  )
}

