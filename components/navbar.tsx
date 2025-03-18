"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import TheLogo from "./the-logo"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full z-50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <TheLogo className="h-10 w-auto" />
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-red-500 px-3 py-2 text-sm font-medium">
              ACCUEIL
            </Link>
            <Link href="/collection" className="text-white hover:text-red-500 px-3 py-2 text-sm font-medium">
              COLLECTION
            </Link>
            <Link href="/nouveautes" className="text-white hover:text-red-500 px-3 py-2 text-sm font-medium">
              NOUVEAUTÉS
            </Link>
            <Link href="/a-propos" className="text-white hover:text-red-500 px-3 py-2 text-sm font-medium">
              À PROPOS
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-white">
              <ShoppingBag className="h-5 w-5" />
              <span className="ml-2">Panier (0)</span>
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <Button variant="ghost" onClick={() => setIsMenuOpen(true)}>
              <Menu className="h-6 w-6 text-white" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col">
          <div className="flex justify-end p-4">
            <Button variant="ghost" onClick={() => setIsMenuOpen(false)}>
              <X className="h-6 w-6 text-white" />
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 space-y-8">
            <Link
              href="/"
              className="text-white hover:text-red-500 px-3 py-2 text-xl font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              ACCUEIL
            </Link>
            <Link
              href="/collection"
              className="text-white hover:text-red-500 px-3 py-2 text-xl font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              COLLECTION
            </Link>
            <Link
              href="/nouveautes"
              className="text-white hover:text-red-500 px-3 py-2 text-xl font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              NOUVEAUTÉS
            </Link>
            <Link
              href="/a-propos"
              className="text-white hover:text-red-500 px-3 py-2 text-xl font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              À PROPOS
            </Link>
            <div className="pt-8">
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                <ShoppingBag className="h-5 w-5 mr-2" />
                Panier (0)
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

