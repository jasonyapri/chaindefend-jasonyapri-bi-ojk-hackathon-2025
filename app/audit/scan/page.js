"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Upload, Github, Zap, Shield, Crown, Loader2 } from "lucide-react"

export default function RepoConnectScan() {
  const [selectedTier, setSelectedTier] = useState("starter")
  const [isScanning, setIsScanning] = useState(false)
  const [repoUrl, setRepoUrl] = useState("")

  const tiers = [
    {
      id: "starter",
      name: "Starter AI Audit",
      price: "$99",
      icon: Zap,
      features: ["Basic vulnerability detection", "Automated analysis", "24h turnaround", "PDF report"],
    },
    {
      id: "pro",
      name: "Pro AI Audit",
      price: "$299",
      icon: Shield,
      features: ["Advanced AI analysis", "Gas optimization", "Custom rules", "12h turnaround", "Detailed report"],
    },
    {
      id: "expert",
      name: "Expert Human Audit",
      price: "$999",
      icon: Crown,
      features: [
        "Human expert review",
        "Custom analysis",
        "Live consultation",
        "48h turnaround",
        "Full report + fixes",
      ],
    },
  ]

  const handleScan = () => {
    setIsScanning(true)
    // Simulate API call
    setTimeout(() => {
      setIsScanning(false)
      // Redirect to results page
      window.location.href = "/audit/report/123"
    }, 3000)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 p-6">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Connect Repository & Scan</h1>
            <p className="text-gray-300">
              Upload your smart contract or connect a GitHub repository for security analysis
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Repository Connection */}
            <Card className="gradient-card border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Repository Source</CardTitle>
                <CardDescription className="text-gray-300">
                  Choose how to provide your smart contract code
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* File Upload */}
                <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-primary transition-colors">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-white mb-2">Drop your contract files here</p>
                  <p className="text-gray-400 text-sm mb-4">or click to browse</p>
                  <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent">
                    Choose Files
                  </Button>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-600" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-gray-400">Or</span>
                  </div>
                </div>

                {/* GitHub Connection */}
                <div className="space-y-4">
                  <Label htmlFor="repo-url" className="text-white">
                    GitHub Repository URL
                  </Label>
                  <div className="flex space-x-2">
                    <Input
                      id="repo-url"
                      placeholder="https://github.com/username/repo"
                      value={repoUrl}
                      onChange={(e) => setRepoUrl(e.target.value)}
                      className="bg-gray-800 border-gray-600 text-white focus:border-secondary"
                    />
                    <Button
                      variant="outline"
                      className="border-secondary text-secondary hover:bg-secondary hover:text-white bg-transparent"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Additional Options */}
                <div className="space-y-4">
                  <Label htmlFor="branch" className="text-white">
                    Branch (optional)
                  </Label>
                  <Input
                    id="branch"
                    placeholder="main"
                    className="bg-gray-800 border-gray-600 text-white focus:border-secondary"
                  />
                </div>

                <div className="space-y-4">
                  <Label htmlFor="notes" className="text-white">
                    Additional Notes
                  </Label>
                  <Textarea
                    id="notes"
                    placeholder="Any specific areas of concern or focus..."
                    className="bg-gray-800 border-gray-600 text-white focus:border-secondary"
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Tier Selection */}
            <Card className="gradient-card border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Select Audit Tier</CardTitle>
                <CardDescription className="text-gray-300">
                  Choose the level of analysis that fits your needs
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {tiers.map((tier) => {
                  const Icon = tier.icon
                  return (
                    <div
                      key={tier.id}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        selectedTier === tier.id
                          ? "border-primary bg-primary/10"
                          : "border-gray-600 hover:border-gray-500"
                      }`}
                      onClick={() => setSelectedTier(tier.id)}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <Icon className={`h-6 w-6 ${selectedTier === tier.id ? "text-primary" : "text-gray-400"}`} />
                          <div>
                            <h3 className="text-white font-semibold">{tier.name}</h3>
                            <p className="text-2xl font-bold text-primary">{tier.price}</p>
                          </div>
                        </div>
                        <div
                          className={`w-4 h-4 rounded-full border-2 ${
                            selectedTier === tier.id ? "border-primary bg-primary" : "border-gray-400"
                          }`}
                        >
                          {selectedTier === tier.id && <div className="w-full h-full rounded-full bg-primary"></div>}
                        </div>
                      </div>
                      <ul className="space-y-1">
                        {tier.features.map((feature, index) => (
                          <li key={index} className="text-gray-300 text-sm flex items-center">
                            <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </CardContent>
            </Card>
          </div>

          {/* Scan Button */}
          <div className="mt-8 text-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-12 py-4 text-lg"
              onClick={handleScan}
              disabled={isScanning || !repoUrl}
            >
              {isScanning ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Scanning...
                </>
              ) : (
                "Scan Now"
              )}
            </Button>
            {isScanning && <p className="text-gray-300 mt-4">Analyzing your smart contract for vulnerabilities...</p>}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
