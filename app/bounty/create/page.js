"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { ChevronLeft, ChevronRight, Upload, DollarSign } from "lucide-react"

export default function CreateBounty() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    contractAddress: "",
    rewardAmount: "",
    currency: "ETH",
  })

  const steps = [
    { id: 1, title: "Details", description: "Basic bounty information" },
    { id: 2, title: "Scope", description: "Contract details and scope" },
    { id: 3, title: "Reward", description: "Reward structure and deposit" },
  ]

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = () => {
    // TODO: Implement bounty creation API call
    console.log("Creating bounty with data:", formData)
    alert("Bounty created successfully!")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 p-6">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Create Bug Bounty Program</h1>
            <p className="text-gray-300">Set up a bounty program to crowdsource security research</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              {steps.map((step) => (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                      currentStep >= step.id ? "bg-primary text-white" : "bg-gray-700 text-gray-400"
                    }`}
                  >
                    {step.id}
                  </div>
                  <div className="ml-3 hidden md:block">
                    <p className={`text-sm font-semibold ${currentStep >= step.id ? "text-white" : "text-gray-400"}`}>
                      {step.title}
                    </p>
                    <p className="text-xs text-gray-500">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Progress value={(currentStep / 3) * 100} className="h-2" />
          </div>

          {/* Step Content */}
          <Card className="gradient-card border-gray-700">
            <CardContent className="p-8">
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <CardTitle className="text-white mb-4">Step 1: Bounty Details</CardTitle>
                    <CardDescription className="text-gray-300 mb-6">
                      Provide basic information about your bounty program
                    </CardDescription>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="title" className="text-white">
                        Bounty Title *
                      </Label>
                      <Input
                        id="title"
                        placeholder="e.g., UniSwap V4 Protocol Security Bounty"
                        value={formData.title}
                        onChange={(e) => handleInputChange("title", e.target.value)}
                        className="bg-gray-800 border-gray-600 text-white focus:border-secondary mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="description" className="text-white">
                        Description *
                      </Label>
                      <Textarea
                        id="description"
                        placeholder="Describe your project, what you're looking for, and any specific areas of concern..."
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        className="bg-gray-800 border-gray-600 text-white focus:border-secondary mt-2"
                        rows={6}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="category" className="text-white">
                          Category
                        </Label>
                        <select
                          id="category"
                          className="w-full mt-2 bg-gray-800 border border-gray-600 text-white rounded-md px-3 py-2 focus:border-secondary"
                        >
                          <option>DeFi</option>
                          <option>NFT</option>
                          <option>Governance</option>
                          <option>Oracle</option>
                          <option>Bridge</option>
                          <option>Other</option>
                        </select>
                      </div>

                      <div>
                        <Label htmlFor="duration" className="text-white">
                          Duration
                        </Label>
                        <select
                          id="duration"
                          className="w-full mt-2 bg-gray-800 border border-gray-600 text-white rounded-md px-3 py-2 focus:border-secondary"
                        >
                          <option>30 days</option>
                          <option>60 days</option>
                          <option>90 days</option>
                          <option>Ongoing</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <CardTitle className="text-white mb-4">Step 2: Scope Definition</CardTitle>
                    <CardDescription className="text-gray-300 mb-6">
                      Define the scope of your bounty program
                    </CardDescription>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="contractAddress" className="text-white">
                        Contract Address *
                      </Label>
                      <Input
                        id="contractAddress"
                        placeholder="0x..."
                        value={formData.contractAddress}
                        onChange={(e) => handleInputChange("contractAddress", e.target.value)}
                        className="bg-gray-800 border-gray-600 text-white focus:border-secondary mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="abi" className="text-white">
                        Contract ABI
                      </Label>
                      <div className="mt-2 border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-secondary transition-colors">
                        <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-white mb-2">Upload ABI file</p>
                        <p className="text-gray-400 text-sm mb-4">JSON format preferred</p>
                        <Button
                          variant="outline"
                          className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                        >
                          Choose File
                        </Button>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="scope" className="text-white">
                        Scope Details
                      </Label>
                      <Textarea
                        id="scope"
                        placeholder="Specify what's in scope, what's out of scope, and any special considerations..."
                        className="bg-gray-800 border-gray-600 text-white focus:border-secondary mt-2"
                        rows={4}
                      />
                    </div>

                    <div>
                      <Label className="text-white">Severity Levels</Label>
                      <div className="mt-2 space-y-2">
                        <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                          <span className="text-white">Critical</span>
                          <span className="text-quaternary font-semibold">$10,000 - $50,000</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                          <span className="text-white">High</span>
                          <span className="text-primary font-semibold">$5,000 - $10,000</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                          <span className="text-white">Medium</span>
                          <span className="text-secondary font-semibold">$1,000 - $5,000</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                          <span className="text-white">Low</span>
                          <span className="text-gray-300 font-semibold">$100 - $1,000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <CardTitle className="text-white mb-4">Step 3: Reward & Deposit</CardTitle>
                    <CardDescription className="text-gray-300 mb-6">
                      Set up your reward structure and make the initial deposit
                    </CardDescription>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="rewardAmount" className="text-white">
                          Total Reward Pool *
                        </Label>
                        <div className="relative mt-2">
                          <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <Input
                            id="rewardAmount"
                            placeholder="100000"
                            value={formData.rewardAmount}
                            onChange={(e) => handleInputChange("rewardAmount", e.target.value)}
                            className="pl-10 bg-gray-800 border-gray-600 text-white focus:border-secondary"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="currency" className="text-white">
                          Currency
                        </Label>
                        <select
                          id="currency"
                          value={formData.currency}
                          onChange={(e) => handleInputChange("currency", e.target.value)}
                          className="w-full mt-2 bg-gray-800 border border-gray-600 text-white rounded-md px-3 py-2 focus:border-secondary"
                        >
                          <option>ETH</option>
                          <option>USDC</option>
                          <option>USDT</option>
                          <option>DAI</option>
                        </select>
                      </div>
                    </div>

                    <div className="bg-gray-800 rounded-lg p-6">
                      <h3 className="text-white font-semibold mb-4">Deposit Summary</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-300">Reward Pool</span>
                          <span className="text-white">
                            {formData.rewardAmount || "0"} {formData.currency}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Platform Fee (5%)</span>
                          <span className="text-white">
                            {(Number.parseFloat(formData.rewardAmount || 0) * 0.05).toFixed(2)} {formData.currency}
                          </span>
                        </div>
                        <div className="border-t border-gray-600 pt-2">
                          <div className="flex justify-between font-semibold">
                            <span className="text-white">Total Deposit</span>
                            <span className="text-primary">
                              {(Number.parseFloat(formData.rewardAmount || 0) * 1.05).toFixed(2)} {formData.currency}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-tertiary/20 border border-tertiary rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">Important Notes:</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Funds will be held in escrow until bounty completion</li>
                        <li>• You can add more funds to the pool at any time</li>
                        <li>• Unused funds will be returned after bounty ends</li>
                        <li>• All payouts are subject to verification</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-700">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                >
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>

                {currentStep < 3 ? (
                  <Button onClick={handleNext} className="bg-primary hover:bg-primary/90 text-white">
                    Next
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button onClick={handleSubmit} className="bg-quaternary hover:bg-quaternary/90 text-white">
                    <DollarSign className="mr-2 h-4 w-4" />
                    Deposit & Launch
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
