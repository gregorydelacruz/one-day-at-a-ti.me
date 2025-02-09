import { Button } from "@/components/ui/button"
import { BarChart3, Settings, Phone } from "lucide-react"
import Link from "next/link"

export function DashboardHeader() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg">
          My Daily Tracker
        </Link>
        <nav className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/stats">
              <BarChart3 className="h-5 w-5" />
              <span className="sr-only">View Statistics</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/settings">
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="tel:1-800-662-4357">
              <Phone className="h-5 w-5" />
              <span className="sr-only">Get Help</span>
            </a>
          </Button>
        </nav>
      </div>
    </header>
  )
}

