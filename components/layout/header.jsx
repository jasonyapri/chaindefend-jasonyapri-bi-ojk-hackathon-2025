import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Menu } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-transparent backdrop-blur-md border-b border-gray-700/50">
      <div className="container mx-auto px-4 py-4 relative">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-white">ChainDefend</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/audit" className="text-white hover:text-primary transition-colors">
                Audit
              </Link>
              <Link href="/bounty" className="text-white hover:text-secondary transition-colors">
                Bounty
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-tertiary bg-transparent"
                >
                  Login
                </Button>
              </Link>
              <Button variant="ghost" size="icon" className="md:hidden text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
