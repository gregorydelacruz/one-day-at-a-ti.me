"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface TriggerDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSelect: (trigger: string) => void
}

const TRIGGERS = [
  {
    id: "stress-relief",
    label: "Stress Relief",
    description: "Using as a way to cope with stress or anxiety",
    color: "#FF6B6B",
    solutions: [
      {
        title: "Healthy Relaxation Techniques",
        description: "Try meditation, yoga, or deep-breathing exercises to reduce stress naturally.",
      },
      {
        title: "Physical Activity",
        description: "Engage in exercise like running, swimming, or cycling to release endorphins and relieve tension.",
      },
      {
        title: "Creative Outlets",
        description:
          "Explore activities like painting, journaling, or playing a musical instrument for calming and therapeutic effects.",
      },
      {
        title: "Therapy or Counseling",
        description: "Seek professional support to learn tools for managing stress in healthier ways.",
      },
    ],
  },
  {
    id: "self-medication",
    label: "Self-Medication",
    description: "Attempting to manage physical or emotional pain",
    color: "#4ECDC4",
    solutions: [
      {
        title: "Address Underlying Issues",
        description:
          "Seek professional help to treat conditions like anxiety, depression, or chronic pain that may drive self-medication.",
      },
      {
        title: "Healthier Alternatives",
        description:
          "Try natural remedies, such as herbal teas, aromatherapy, or non-drug pain management techniques like acupuncture or massage.",
      },
      {
        title: "Regular Medical Care",
        description: "Encourage routine checkups to address physical or mental health concerns early.",
      },
    ],
  },
  {
    id: "boredom",
    label: "Boredom",
    description: "Using due to lack of activities or stimulation",
    color: "#45B7D1",
    solutions: [
      {
        title: "Structured Schedule",
        description: "Create a daily routine with engaging activities to reduce idle time.",
      },
      {
        title: "Learn New Skills",
        description: "Take classes or workshops in cooking, photography, coding, or other areas of interest.",
      },
      {
        title: "Volunteer or Join Groups",
        description: "Participate in community service or group activities to find meaning and connection.",
      },
      {
        title: "Adventure Activities",
        description: "Introduce new experiences like hiking, camping, or exploring new places to combat monotony.",
      },
    ],
  },
  {
    id: "peer-pressure",
    label: "Peer Pressure",
    description: "Influence from social situations or friends",
    color: "#F7B731",
    solutions: [
      {
        title: "Practice Refusal Skills",
        description: 'Learn to confidently say no with phrases like, "No thanks, that\'s not for me."',
      },
      {
        title: "Choose Positive Influences",
        description: "Build friendships with people who align with healthier choices.",
      },
      {
        title: "Avoid High-Risk Situations",
        description: "Try to avoid environments or events where drug use is prevalent.",
      },
      {
        title: "Focus on Goals",
        description:
          "Identify and prioritize personal ambitions, which can provide the motivation to resist peer influence.",
      },
    ],
  },
  {
    id: "decompression",
    label: "Decompression",
    description: "Unwinding after a long day or stressful event",
    color: "#6C5CE7",
    solutions: [
      {
        title: "Active Relaxation",
        description:
          "Try alternatives like taking a walk in nature, listening to calming music, or practicing mindfulness.",
      },
      {
        title: "Self-Care Practices",
        description: "Engage in activities like taking warm baths, getting a massage, or reading to unwind.",
      },
      {
        title: "Digital Detox",
        description: "Reduce screen time to help calm the mind and improve overall relaxation.",
      },
      {
        title: "Connect with Nature",
        description: "Try activities like gardening or visiting parks for a grounding and peaceful way to decompress.",
      },
    ],
  },
  {
    id: "celebration",
    label: "Celebration",
    description: "Using during special occasions or achievements",
    color: "#FFA07A",
    solutions: [
      {
        title: "Substitute with Healthier Habits",
        description:
          "Try non-drug-related ways to celebrate, like hosting game nights, dance parties, or trying new cuisines.",
      },
      {
        title: "Mindful Moderation",
        description: "Practice moderation and self-awareness when engaging in celebratory activities.",
      },
      {
        title: "Rewarding Milestones",
        description:
          "Celebrate achievements with meaningful experiences like trips, personal treats, or quality time with loved ones.",
      },
    ],
  },
  {
    id: "availability",
    label: "Availability",
    description: "Easy access or opportunity to use",
    color: "#98FB98",
    solutions: [
      {
        title: "Reduce Exposure",
        description: "Avoid environments or social circles where drugs are easily accessible.",
      },
      {
        title: "Set Boundaries",
        description: "Set clear personal boundaries about substance use.",
      },
      {
        title: "Engage in New Activities",
        description:
          "Replace time spent in high-risk areas with hobbies or sports that naturally distance you from drug availability.",
      },
      {
        title: "Promote Education",
        description: "Increase awareness about the risks of casual availability turning into dependency.",
      },
    ],
  },
  {
    id: "environmental",
    label: "Environmental Stressors",
    description: "External factors like location or situations",
    color: "#DDA0DD",
    solutions: [
      {
        title: "Improve Surroundings",
        description:
          "Make small, positive changes in living or working environments to reduce stress (e.g., decluttering, adding plants, or improving lighting).",
      },
      {
        title: "Relocate if Necessary",
        description: "When possible, consider moving away from toxic or triggering environments.",
      },
      {
        title: "Community Support",
        description:
          "Engage with local organizations or resources to address environmental challenges like housing or workplace stress.",
      },
      {
        title: "Mindfulness Techniques",
        description: "Practice staying calm amidst external chaos using grounding exercises.",
      },
    ],
  },
]

export function TriggerDialog({ open, onOpenChange, onSelect }: TriggerDialogProps) {
  const [selectedTrigger, setSelectedTrigger] = useState<string>("")
  const [showSolutions, setShowSolutions] = useState(false)

  const handleSubmit = () => {
    if (selectedTrigger) {
      onSelect(selectedTrigger)
      setShowSolutions(true)
    }
  }

  const handleClose = () => {
    setSelectedTrigger("")
    setShowSolutions(false)
    onOpenChange(false)
  }

  const selectedTriggerData = TRIGGERS.find((trigger) => trigger.id === selectedTrigger)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{showSolutions ? "Actionable Solutions" : "What triggered this use?"}</DialogTitle>
        </DialogHeader>
        {!showSolutions ? (
          <RadioGroup value={selectedTrigger} onValueChange={setSelectedTrigger} className="space-y-3">
            {TRIGGERS.map((trigger) => (
              <div
                key={trigger.id}
                className="flex items-start space-x-3 rounded-lg border p-3 hover:bg-accent"
                style={{ borderColor: trigger.color }}
              >
                <RadioGroupItem value={trigger.id} id={trigger.id} className="mt-1" />
                <Label htmlFor={trigger.id} className="grid cursor-pointer gap-1 font-normal">
                  <span className="font-medium" style={{ color: trigger.color }}>
                    {trigger.label}
                  </span>
                  <span className="text-sm text-muted-foreground">{trigger.description}</span>
                </Label>
              </div>
            ))}
          </RadioGroup>
        ) : (
          selectedTriggerData?.solutions && (
            <div className="space-y-4">
              {selectedTriggerData.solutions.map((solution, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{solution.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          )
        )}
        <DialogFooter>
          {!showSolutions ? (
            <Button onClick={handleSubmit} disabled={!selectedTrigger} className="w-full">
              Submit
            </Button>
          ) : (
            <Button onClick={handleClose} className="w-full">
              Close
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

