import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function StatsPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="container mx-auto p-4 space-y-6">
        <h1 className="text-3xl font-bold">Usage Statistics</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Total Substances Tracked</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Days Since Last Use</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3 days</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Average Weekly Usage</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Varies by substance</div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

