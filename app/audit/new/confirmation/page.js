"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { CheckCircle, Github, FileText, ArrowRight, CreditCard } from "lucide-react"

export default function ConfirmationPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [tier, setTier] = useState("")
  const [method, setMethod] = useState("")

  useEffect(() => {
    const tierParam = searchParams.get("tier")
    const methodParam = searchParams.get("method")
    if (tierParam) setTier(tierParam)
    if (methodParam) setMethod(methodParam)
  }, [searchParams])

  const getTierInfo = (tierType) => {
    const tiers = {
      starter: { name: "Starter AI Audit", price: "IDR 0", duration: "~2 minutes" },
      pro: { name: "Pro AI Audit", price: "IDR 499K", duration: "~3 minutes" },
      expert: { name: "Expert Human Audit", price: "IDR 7,999K", duration: "~10 minutes" },
    }
    return tiers[tierType] || { name: "Unknown", price: "IDR 0", duration: "Unknown" }
  }

  const tierInfo = getTierInfo(tier)

  const proceedToScan = () => {
    router.push(`/audit/new/scan?tier=${tier}&method=${method}`)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 p-6 my-8">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-white font-semibold">
                  ✓
                </div>
                <div className="ml-3">
                  <p className="text-secondary font-semibold">Choose Service</p>
                  <p className="text-gray-400 text-sm">Select tier</p>
                </div>
              </div>
              <div className="flex-1 h-px bg-secondary mx-4"></div>

              <div className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-white font-semibold">
                  ✓
                </div>
                <div className="ml-3">
                  <p className="text-secondary font-semibold">Connect</p>
                  <p className="text-gray-400 text-sm">Link repository</p>
                </div>
              </div>
              <div className="flex-1 h-px bg-secondary mx-4"></div>

              <div className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-semibold">
                  3
                </div>
                <div className="ml-3">
                  <p className="text-white font-semibold">Confirmation</p>
                  <p className="text-gray-400 text-sm">Review details</p>
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

        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Confirm Your Audit</h1>
            <p className="text-gray-300">Review your selections before starting the security analysis</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Order Summary */}
            <div className="lg:col-span-2">
              <Card className="gradient-card border-gray-700 mb-6">
                <CardHeader>
                  <CardTitle className="text-white">Audit Details</CardTitle>
                  <CardDescription className="text-gray-300">Your selected service and configuration</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                    <div>
                      <h3 className="text-white font-semibold">{tierInfo.name}</h3>
                      <p className="text-gray-400 text-sm">Estimated completion: {tierInfo.duration}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{tierInfo.price}</div>
                    </div>
                  </div>

                  <div className="border-t border-gray-700 pt-4">
                    <h4 className="text-white font-semibold mb-3">Source Configuration</h4>
                    <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg">
                      {method === "github" ? (
                        <>
                          <Github className="h-5 w-5 text-secondary" />
                          <div>
                            <p className="text-white font-medium">GitHub Repository</p>
                            <p className="text-gray-400 text-sm">Connected successfully</p>
                          </div>
                        </>
                      ) : (
                        <>
                          <FileText className="h-5 w-5 text-primary" />
                          <div>
                            <p className="text-white font-medium">File Upload</p>
                            <p className="text-gray-400 text-sm">Solidity files uploaded</p>
                          </div>
                        </>
                      )}
                      <Badge className="ml-auto bg-secondary text-white">
                        <CheckCircle className="mr-1 h-3 w-3" />
                        Ready
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Information (for paid tiers) */}
              {tier !== "starter" && (
                <Card className="gradient-card border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white">Payment Information</CardTitle>
                    <CardDescription className="text-gray-300">Secure payment processing</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-tertiary/20 border border-tertiary rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <CreditCard className="h-5 w-5 text-tertiary" />
                        <div>
                          <p className="text-white font-semibold">Payment Required</p>
                          <p className="text-gray-300 text-sm">
                            You will be redirected to our secure payment processor to complete your purchase.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Summary Sidebar */}
            <div className="lg:col-span-1">
              <Card className="gradient-card border-gray-700 sticky top-6">
                <CardHeader>
                  <CardTitle className="text-white">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Service</span>
                    <span className="text-white font-semibold">{tierInfo.name}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Duration</span>
                    <span className="text-white">{tierInfo.duration}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Source</span>
                    <span className="text-white capitalize">{method}</span>
                  </div>

                  <div className="border-t border-gray-700 pt-4">
                    <div className="flex justify-between items-center font-semibold">
                      <span className="text-white">Total</span>
                      <span className="text-primary text-xl">{tierInfo.price}</span>
                    </div>
                  </div>

                  <Button
                    onClick={proceedToScan}
                    className="w-full bg-primary hover:bg-primary/90 text-white py-3 font-semibold rounded-xl mt-6"
                  >
                    {tier === "starter" ? "Start Audit" : "Proceed to Payment"}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <div className="text-center">
                    <p className="text-gray-400 text-xs">
                      By proceeding, you agree to our Terms of Service and Privacy Policy
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12">
            <Link href={`/audit/new/connect?tier=${tier}`}>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent">
                Back to Connect
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
