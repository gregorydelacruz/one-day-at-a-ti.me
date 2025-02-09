import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ResourcesCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Need Help?</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>If you're concerned about your substance use, help is available:</p>
        <Button asChild className="w-full">
          <a href="https://www.samhsa.gov/find-help/national-helpline" target="_blank" rel="noopener noreferrer">
            SAMHSA National Helpline
          </a>
        </Button>
        <Button asChild variant="outline" className="w-full">
          <a href="https://www.aa.org/" target="_blank" rel="noopener noreferrer">
            Alcoholics Anonymous
          </a>
        </Button>
        <Button asChild variant="outline" className="w-full">
          <a href="https://www.na.org/" target="_blank" rel="noopener noreferrer">
            Narcotics Anonymous
          </a>
        </Button>
      </CardContent>
    </Card>
  )
}

