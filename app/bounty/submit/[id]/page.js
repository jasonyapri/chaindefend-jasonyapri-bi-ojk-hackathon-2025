"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Upload, AlertTriangle, FileText, Send } from "lucide-react"

export default function BountySubmission({ params }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    severity: "medium",
    proofOfConcept: null,
    additionalFiles: [],
  })

  // Mock bounty data - replace with real API call using params.id
  const bountyData = {
    id: params?.id || "1",
    name: "UniSwap V4 Protocol",
    description: "Decentralized exchange protocol with concentrated liquidity",
    rewardPool: "$50,000",
    maxReward: "$10,000",
    timeLeft: "45 days",
    category: "DeFi",
    contractAddress: "0x1234...5678",
    scope: "All smart contracts in the UniSwap V4 core repository",
    severityLevels: [
      { level: "critical", range: "$10,000 - $50,000", color: "text-quaternary" },
      { level: "high", range: "$5,000 - $10,000", color: "text-primary" },
      { level: "medium", range: "$1,000 - $5,000", color: "text-secondary" },
      { level: "low", range: "$100 - $1,000", color: "text-gray-300" },
    ],
  }

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      setFormData((prev) => ({
        ...prev,
        proofOfConcept: file,
      }))
    }
  }

  const handleSubmit = () => {
    // TODO: Implement submission API call
    console.log("Submitting bounty report:", formData)
    alert("Bounty submission sent successfully!")
  }

  const isFormValid = formData.title && formData.description && formData.proofOfConcept

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 p-6">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Submit Vulnerability Report</h1>
            <p className="text-gray-300">Report a security vulnerability for the bounty program</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Bounty Details Sidebar */}
            <div className="lg:col-span-1">
              <Card className="gradient-card border-gray-700 sticky top-6">
                <CardHeader>
                  <CardTitle className="text-white">{bountyData.name}</CardTitle>
                  <Badge variant="outline" className="border-gray-600 text-gray-400 w-fit">
                    {bountyData.category}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-gray-300 text-sm mb-2">{bountyData.description}</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">Total Pool</span>
                      <span className="text-secondary font-semibold">{bountyData.rewardPool}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">Max Reward</span>
                      <span className="text-primary font-semibold">{bountyData.maxReward}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">Time Left</span>
                      <span className="text-white">{bountyData.timeLeft}</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-700 pt-4">
                    <h4 className="text-white font-semibold mb-2">Reward Structure</h4>
                    <div className="space-y-2">
                      {bountyData.severityLevels.map((level) => (
                        <div key={level.level} className="flex justify-between items-center text-sm">
                          <span className="text-gray-300 capitalize">{level.level}</span>
                          <span className={level.color}>{level.range}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-700 pt-4">
                    <h4 className="text-white font-semibold mb-2">Contract Details</h4>
                    <p className="text-gray-300 text-sm mb-2">Address: {bountyData.contractAddress}</p>
                    <p className="text-gray-300 text-sm">{bountyData.scope}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Submission Form */}
            <div className="lg:col-span-2">
              <Card className="gradient-card border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Vulnerability Report</CardTitle>
                  <CardDescription className="text-gray-300">
                    Provide detailed information about the vulnerability you discovered
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="title" className="text-white">
                      Vulnerability Title *
                    </Label>
                    <Input
                      id="title"
                      placeholder="e.g., Reentrancy vulnerability in withdraw function"
                      value={formData.title}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      className="bg-gray-800 border-gray-600 text-white focus:border-secondary mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="severity" className="text-white">
                      Severity Level *
                    </Label>
                    <select
                      id="severity"
                      value={formData.severity}
                      onChange={(e) => handleInputChange("severity", e.target.value)}
                      className="w-full mt-2 bg-gray-800 border border-gray-600 text-white rounded-md px-3 py-2 focus:border-secondary"
                    >
                      <option value="critical">Critical</option>
                      <option value="high">High</option>
                      <option value="medium">Medium</option>
                      <option value="low">Low</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="description" className="text-white">
                      Vulnerability Description *
                    </Label>
                    <Textarea
                      id="description"
                      placeholder="Provide a detailed description of the vulnerability, including:
- What the vulnerability is
- How it can be exploited
- Potential impact
- Steps to reproduce"
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      className="bg-gray-800 border-gray-600 text-white focus:border-secondary mt-2"
                      rows={8}
                    />
                  </div>

                  <div>
                    <Label htmlFor="poc" className="text-white">
                      Proof of Concept *
                    </Label>
                    <div className="mt-2">
                      {formData.proofOfConcept ? (
                        <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg border border-gray-600">
                          <div className="flex items-center space-x-3">
                            <FileText className="h-5 w-5 text-secondary" />
                            <span className="text-white">{formData.proofOfConcept.name}</span>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleInputChange("proofOfConcept", null)}
                            className="border-gray-600 text-gray-300 hover:bg-gray-700"
                          >
                            Remove
                          </Button>
                        </div>
                      ) : (
                        <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-secondary transition-colors">
                          <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                          <p className="text-white mb-2">Upload Proof of Concept</p>
                          <p className="text-gray-400 text-sm mb-4">Code files, screenshots, or documentation</p>
                          <input
                            type="file"
                            onChange={handleFileUpload}
                            className="hidden"
                            id="poc-upload"
                            accept=".sol,.js,.py,.txt,.md,.png,.jpg,.pdf"
                          />
                          <Button
                            variant="outline"
                            className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                            onClick={() => document.getElementById("poc-upload").click()}
                          >
                            Choose File
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="impact" className="text-white">
                      Impact Assessment
                    </Label>
                    <Textarea
                      id="impact"
                      placeholder="Describe the potential impact of this vulnerability on the protocol and its users..."
                      className="bg-gray-800 border-gray-600 text-white focus:border-secondary mt-2"
                      rows={4}
                    />
                  </div>

                  <div>
                    <Label htmlFor="recommendation" className="text-white">
                      Recommended Fix
                    </Label>
                    <Textarea
                      id="recommendation"
                      placeholder="Suggest how this vulnerability could be fixed or mitigated..."
                      className="bg-gray-800 border-gray-600 text-white focus:border-secondary mt-2"
                      rows={4}
                    />
                  </div>

                  <div className="bg-tertiary/20 border border-tertiary rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="h-5 w-5 text-tertiary mt-0.5" />
                      <div>
                        <h4 className="text-white font-semibold mb-2">Submission Guidelines</h4>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• Ensure your report is clear and detailed</li>
                          <li>• Include proof of concept code or screenshots</li>
                          <li>• Do not publicly disclose the vulnerability</li>
                          <li>• Allow reasonable time for the team to respond</li>
                          <li>• Follow responsible disclosure practices</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={handleSubmit}
                    disabled={!isFormValid}
                    className={`w-full text-white ${
                      isFormValid ? "bg-secondary hover:bg-secondary/90" : "bg-gray-600 cursor-not-allowed"
                    }`}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Submit Report
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
