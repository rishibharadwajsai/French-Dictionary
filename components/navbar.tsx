"use client"

// import { MoonIcon, SunIcon } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function Navbar() {
  // const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <nav className="border-b bg-white dark:bg-slate-950 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="font-bold text-xl text-slate-800 dark:text-white">Dictionnaire</div>
        {/* <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
        </Button> */}
      </div>
    </nav>
  )
}

