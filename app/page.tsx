import { DailyTracker } from "@/components/daily-tracker"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#faf8ff] p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-md">
        <DailyTracker />
      </div>
    </div>
  )
}

