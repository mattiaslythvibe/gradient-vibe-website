"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useIsMobile } from "@/hooks/use-mobile"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isMobile = useIsMobile()

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-[75%_50%] bg-no-repeat md:bg-center"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a0bb4ef3-b580-442d-b95a-766afba19dae%20-%20Copy.jpg-fWPXGpzEWRBnniFrcel5O4u4jlUdaS.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-6 lg:px-24">
        <div className="flex items-center space-x-12">
          <div className="flex items-center">
            <Image src="/logo.svg" alt="Gradient Vibe" width={60} height={33} className="h-8 w-auto" />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
              Portfolio
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
              Insights
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
              About
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            className={`border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent ${
              isMobile && isMobileMenuOpen ? "hidden" : ""
            }`}
          >
            Contact
          </Button>
          {isMobile && (
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-white/80 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </header>

      {isMobile && isMobileMenuOpen && (
        <div className="fixed inset-0 z-20 bg-black/90 backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <nav className="flex flex-col items-center space-y-6">
              <a
                href="#"
                className="text-white text-2xl font-light hover:text-white/80 transition-colors py-3 px-6"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Portfolio
              </a>
              <a
                href="#"
                className="text-white text-2xl font-light hover:text-white/80 transition-colors py-3 px-6"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Insights
              </a>
              <a
                href="#"
                className="text-white text-2xl font-light hover:text-white/80 transition-colors py-3 px-6"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
            </nav>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent mt-8 px-8 py-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="relative z-10 flex flex-col justify-center min-h-[calc(100vh-200px)] px-6 lg:px-24 -mt-16">
        <div className="max-w-2xl">
          <h1 className="text-5xl lg:text-7xl font-light text-white mb-6 leading-tight">
            Replace Legacy. Build for the Future.
          </h1>
          <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-lg">
            Your outdated systems are costing you too much. Our modern factory replaces them with streamlined, AI-ready
            software—at a fraction of the cost.
          </p>
          <Button size="lg" className="bg-white/90 text-gray-900 hover:bg-white px-8 py-3 rounded-full font-medium">
            Explore your idea
          </Button>
        </div>
      </main>

      {/* Bottom Quote */}
      <div className="absolute bottom-24 left-6 lg:left-24 z-10">{/* Placeholder for bottom quote */}</div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 z-10 pb-6">
        <div className="flex flex-col items-center space-y-3">
          <div className="w-72 h-px bg-white/30"></div>

          <div className="flex items-center text-white">
            <span className="text-sm font-normal mr-2">© 2025</span>
            <span className="font-orbitron text-sm font-thin">Gradient</span>
            <span className="font-pacifico text-sm font-thin ml-1">Vibe</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
