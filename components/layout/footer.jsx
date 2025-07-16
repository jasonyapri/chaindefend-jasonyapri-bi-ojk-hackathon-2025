import Link from "next/link"
import { Shield, Github, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0b] border-t border-gray-800 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-secondary" />
              <span className="text-2xl font-bold text-white">ChainDefend</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              End-to-end smart contract security platform with AI-powered audits and crowdsourced bug bounties.
            </p>
            <div className="flex space-x-4">
              <Github className="h-6 w-6 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/audit" className="text-gray-400 hover:text-primary transition-colors">
                  Audit
                </Link>
              </li>
              <li>
                <Link href="/bounty" className="text-gray-400 hover:text-secondary transition-colors">
                  Bounty
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 ChainDefend. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
