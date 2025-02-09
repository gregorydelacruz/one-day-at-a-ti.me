"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageCircle, Send, Loader2 } from "lucide-react"
import { useChat } from "ai/react"
import { cn } from "@/lib/utils"

export function ChatSupport() {
  const [isOpen, setIsOpen] = useState(false)
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: "/api/chat",
    initialMessages: [
      {
        id: "welcome",
        role: "assistant",
        content:
          "Hi, I'm here to support you. Feel free to share what's on your mind or ask for help. Remember, you're not alone in this journey.",
      },
    ],
  })

  if (!isOpen) {
    return (
      <Button
        className="fixed bottom-4 right-4 rounded-full p-4 shadow-lg hover:shadow-xl transition-shadow"
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle className="h-6 w-6" />
        <span className="sr-only">Open Chat Support</span>
      </Button>
    )
  }

  return (
    <Card className="fixed bottom-4 right-4 w-80 h-[500px] flex flex-col shadow-xl">
      <CardHeader className="border-b">
        <CardTitle className="flex justify-between items-center">
          <span className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5" />
            Chat Support
          </span>
          <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
            Close
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 p-4">
        <ScrollArea className="h-full w-full pr-4">
          {error && (
            <div className="p-2 mb-2 text-sm text-red-500 bg-red-50 rounded">
              Something went wrong. Please try again.
            </div>
          )}
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn("mb-4 flex", message.role === "user" ? "justify-end" : "justify-start")}
            >
              <div
                className={cn(
                  "rounded-lg px-3 py-2 max-w-[85%] text-sm",
                  message.role === "user"
                    ? "bg-purple-600 text-white"
                    : "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100",
                )}
              >
                {message.content}
              </div>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
      <CardFooter className="border-t p-4">
        <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message..."
            disabled={isLoading}
            className="flex-1"
          />
          <Button type="submit" size="icon" disabled={isLoading}>
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            <span className="sr-only">Send message</span>
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}

