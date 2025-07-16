"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Zap, Shield, Crown, ArrowRight, Check } from "lucide-react"

export default function ChooseService() {
  const [selectedTier, setSelectedTier] = useState("")

  const tiers = [
    {
      id: "starter",
      name: "Starter AI Audit",
      price: "IDR 0",
      icon: Zap,
      description: "Perfect for getting started with basic security analysis",
      features: ["1x Compute Capability", "Public repositories only", "Up to 3 contracts per scan", "Basic Report"],
      recommended: false,
    },
    {
      id: "pro",
      name: "Pro AI Audit",
      price: "IDR 499K",
      icon: Shield,
      description: "Advanced AI analysis for production-ready contracts",
      features: [
        "5x Compute Capability",
        "Private repositories access",
        "Up to 100 contracts per scan",
        "In-Depth Report",
      ],
      recommended: true,
    },
    {
      id: "expert",
      name: "Expert Human Audit",
      price: "IDR 7,999K",
      pricePrefix: "starts from",
      icon: Crown,
      description: "Comprehensive review by security experts",
      features: [
        "Comprehensive code review",
        "Custom Test Suite with PoC",
        "Gas & Performance Optimization",
        "Prioritized Findings & Risk Matrix",
        "Remediation Workshop & Q&A",
        "Post-Audit Verification",
      ],
      recommended: false,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 p-6 my-8">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-semibold">
                  1
                </div>
                <div className="ml-3">
                  <p className="text-white font-semibold">Choose Service</p>
                  <p className="text-gray-400 text-sm">Select tier</p>
                </div>
              </div>
              <div className="flex-1 h-px bg-gray-600 mx-4"></div>

              <div className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-600 text-gray-400 font-semibold">
                  2
                </div>
                <div className="ml-3">
                  <p className="text-gray-400 font-semibold">Connect</p>
                  <p className="text-gray-500 text-sm">Link repository</p>
                </div>
              </div>
              <div className="flex-1 h-px bg-gray-600 mx-4"></div>

              <div className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-600 text-gray-400 font-semibold">
                  3
                </div>
                <div className="ml-3">
                  <p className="text-gray-400 font-semibold">Confirmation</p>
                  <p className="text-gray-500 text-sm">Review details</p>
                </div>
              </div>
              <div className="flex-1 h-px bg-gray-600 mx-4"></div>

              <div className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-600 text-gray-400 font-semibold">
                  4
                </div>
                <div className="ml-3">
                  <p className="text-gray-400 font-semibold">Scan</p>
                  <p className="text-gray-500 text-sm">Analysis in progress</p>
                </div>
              </div>
              <div className="flex-1 h-px bg-gray-600 mx-4"></div>

              <div className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-600 text-gray-400 font-semibold">
                  5
                </div>
                <div className="ml-3">
                  <p className="text-gray-400 font-semibold">View Report</p>
                  <p className="text-gray-500 text-sm">Results ready</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Choose Your Audit Service</h1>
            <p className="text-gray-300">Select the audit tier that best fits your project needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier) => {
              const Icon = tier.icon
              return (
                <Card
                  key={tier.id}
                  className={`gradient-card border-2 cursor-pointer transition-all duration-300 ${
                    selectedTier === tier.id ? "border-primary bg-primary/10" : "border-gray-700 hover:border-gray-600"
                  } ${tier.recommended ? "relative" : ""}`}
                  onClick={() => setSelectedTier(tier.id)}
                >
                  {tier.recommended && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className={`p-4 rounded-2xl ${selectedTier === tier.id ? "bg-primary/20" : "bg-gray-800"}`}>
                        <Icon className={`h-12 w-12 ${selectedTier === tier.id ? "text-primary" : "text-gray-400"}`} />
                      </div>
                    </div>
                    <CardTitle className="text-white text-xl mb-2">{tier.name}</CardTitle>
                    {tier.pricePrefix && <div className="text-xs text-gray-600 mb-1">{tier.pricePrefix}</div>}
                    <div className="text-3xl font-bold text-primary mb-2">{tier.price}</div>
                    <CardDescription className="text-gray-300">{tier.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {tier.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <Check className="h-4 w-4 text-secondary mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex justify-center">
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          selectedTier === tier.id ? "border-primary bg-primary" : "border-gray-400"
                        }`}
                      >
                        {selectedTier === tier.id && <div className="w-3 h-3 rounded-full bg-white"></div>}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <Link href={selectedTier ? `/audit/new/connect?tier=${selectedTier}` : "#"}>
              <Button
                size="lg"
                className={`px-12 py-4 text-lg font-semibold rounded-xl ${
                  selectedTier
                    ? "bg-primary hover:bg-primary/90 text-white"
                    : "bg-gray-600 cursor-not-allowed text-gray-400"
                }`}
                disabled={!selectedTier}
              >
                Continue to Connect
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </Link>
            {!selectedTier && <p className="text-gray-400 text-sm mt-2">Please select an audit tier to continue</p>}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
