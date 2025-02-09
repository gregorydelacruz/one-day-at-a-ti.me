import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { ChatSupport } from "@/components/chat-support"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "My Daily Tracker",
  description: "Track your daily activities and monitor your progress",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <nav className="bg-purple-600 dark:bg-purple-900 p-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
              <div className="w-1/3"></div>
              <Link href="/" className="text-xl font-bold text-center flex-1">
                My Daily Tracker
              </Link>
              <div className="flex items-center space-x-4 w-1/3 justify-end">
                <Link href="/weekly-summary" className="hover:underline">
                  Summary
                </Link>
                <ThemeToggle />
              </div>
            </div>
          </nav>
          <div className="min-h-screen bg-background">
            {children}
            <ChatSupport />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

