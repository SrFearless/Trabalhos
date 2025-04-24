"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function NavBar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-black-100 text-red-800">
      <div className="container flex h-16 items-center ">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-pixel">
              <Link href="/" className="flex items-center gap-2 text-lg font-pixel" onClick={() => setIsOpen(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                </svg>
                <span className="font-pixel">Esquadramer</span>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        <Link href="/" className="flex items-center gap-2 text-lg font-pixel ">
          <div className="mb-4 rounded-full">
            <img src="/icons/Marca.png" alt="Gráfico" className="h-10 w-10" />
          </div>
          <span className="font-pixel">Esquadramer</span>
        </Link>
      </div>
    </header>
  )
}