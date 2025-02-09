import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST(req: Request) {
  const { messages } = await req.json()

  const result = await streamText({
    model: openai("gpt-4-turbo"),
    messages: [
      {
        role: "system",
        content:
          "You are a supportive and empathetic AI assistant for a substance use tracking app. Your role is to provide encouragement, offer coping strategies, and guide users to professional help when necessary. Always maintain a non-judgmental and compassionate tone. If someone appears to be in crisis, provide the SAMHSA National Helpline number: 1-800-662-4357.",
      },
      ...messages,
    ],
  })

  return result.toDataStreamResponse()
}

