"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Play, Loader2, CheckCircle, AlertTriangle, ArrowRight } from "lucide-react"

export default function ScanPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [tier, setTier] = useState("")
  const [method, setMethod] = useState("")
  const [isScanning, setIsScanning] = useState(false)
  const [scanProgress, setScanProgress] = useState(0)
  const [scanStage, setScanStage] = useState("")
  const [scanComplete, setScanComplete] = useState(false)
  const [reportId, setReportId] = useState("")

  useEffect(() => {
    const tierParam = searchParams.get("tier")
    const methodParam = searchParams.get("method")
    if (tierParam) setTier(tierParam)
    if (methodParam) setMethod(methodParam)
  }, [searchParams])

  const getTierInfo = (tierType) => {
    const tiers = {
      starter: {
        name: "Starter AI Audit",
        price: "IDR 0",
        duration: "~2 minutes",
        stages: [
          "Extracting smart contract code from GitHub Repository",
          "Initializing scan environment",
          "Running basic vulnerability checks using Slither & Mythrill",
          "Retrieving relevant code snippets from our registry to enrich contexts",
          "Cluster findings and classify risks based on severity mapping and past exploits",
          "Generating recommendations based on issue summary based on best practice",
          "Generating report",
        ],
      },
      pro: {
        name: "Pro AI Audit",
        price: "IDR 499K",
        duration: "~3 minutes",
        stages: [
          "Extracting smart contract code from GitHub Repository",
          "Initializing scan environment",
          "Running basic vulnerability checks using Slither & Mythrill",
          "Retrieving relevant code snippets from our registry to enrich contexts",
          "Cluster findings and classify risks based on severity mapping and past exploits",
          "Generating recommendations based on issue summary based on best practice",
          "Generating report",
        ],
      },
      expert: {
        name: "Expert Human Audit",
        price: "IDR 7,999K",
        duration: "~10 minutes",
        stages: [
          "Extracting smart contract code from GitHub Repository",
          "Initializing scan environment",
          "Review smart code comprehensively",
          "Running basic vulnerability checks using Slither & Mythrill",
          "Retrieving relevant code snippets from our registry to enrich contexts",
          "Retrieving relevant code snippets from our registry to enrich contexts",
          "Cluster findings and classify risks based on severity mapping and past exploits",
          "Generating recommendations based on issue summary based on best practice",
          "Analyzing Gas & Performance Optimization",
          "Create Custom Test Suite with PoC (Proof of Concept)",
          "Generating comprehensive report",
        ],
      },
    }
    return tiers[tierType] || { name: "Unknown", price: "IDR 0", duration: "Unknown", stages: [] }
  }

  const tierInfo = getTierInfo(tier)

  const startScan = () => {
    setIsScanning(true)
    setScanProgress(0)
    setScanStage(tierInfo.stages[0])

    // Simulate scan progress
    const totalStages = tierInfo.stages.length
    let currentStage = 0

    const progressInterval = setInterval(
      () => {
        currentStage++
        const progress = (currentStage / totalStages) * 100

        if (currentStage < totalStages) {
          setScanProgress(progress)
          setScanStage(tierInfo.stages[currentStage])
        } else {
          setScanProgress(100)
          setScanStage("Scan completed successfully!")
          setScanComplete(true)
          setReportId("RPT-" + Math.random().toString(36).substr(2, 9).toUpperCase())
          clearInterval(progressInterval)
        }
      },
      tier === "starter" ? 2000 : tier === "pro" ? 3000 : 5000,
    )
  }

  const viewReport = () => {
    // Navigate to report page
    router.push(`/audit/report/${reportId}`)
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
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-white font-semibold">
                  ✓
                </div>
                <div className="ml-3">
                  <p className="text-secondary font-semibold">Confirmation</p>
                  <p className="text-gray-400 text-sm">Review details</p>
                </div>
              </div>
              <div className="flex-1 h-px bg-secondary mx-4"></div>

              <div className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-semibold">
                  4
                </div>
                <div className="ml-3">
                  <p className="text-white font-semibold">Scan</p>
                  <p className="text-gray-400 text-sm">Analysis in progress</p>
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
            <h1 className="text-3xl font-bold text-white mb-2">Scan Your Smart Contract</h1>
            <p className="text-gray-300">
              {scanComplete
                ? "Your audit scan has been completed successfully!"
                : isScanning
                  ? "Your smart contract is being analyzed for security vulnerabilities"
                  : "Ready to start your security audit scan"}
            </p>
            {tier && (
              <div className="mt-4 inline-flex items-center bg-primary/20 text-primary px-4 py-2 rounded-lg">
                <span className="font-semibold">{tierInfo.name}</span>
                <span className="ml-2 text-sm">({tierInfo.price})</span>
              </div>
            )}
          </div>

          <Card className="gradient-card border-gray-700">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                {scanComplete ? (
                  <CheckCircle className="h-16 w-16 text-secondary" />
                ) : isScanning ? (
                  <Loader2 className="h-16 w-16 text-primary animate-spin" />
                ) : (
                  <Play className="h-16 w-16 text-primary" />
                )}
              </div>
              <CardTitle className="text-white text-2xl">
                {scanComplete ? "Scan Complete!" : isScanning ? "Scanning in Progress..." : "Ready to Scan"}
              </CardTitle>
              <CardDescription className="text-gray-300">
                {scanComplete
                  ? "Your security audit report is ready for review"
                  : isScanning
                    ? `Estimated time: ${tierInfo.duration}`
                    : `This will take approximately ${tierInfo.duration}`}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {isScanning && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Progress</span>
                      <span className="text-white">{Math.round(scanProgress)}%</span>
                    </div>
                    <Progress value={scanProgress} className="h-3" />
                  </div>

                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <Loader2 className="h-5 w-5 text-primary animate-spin" />
                      <span className="text-white font-medium">Current Stage:</span>
                    </div>
                    <p className="text-gray-300 mt-2">{scanStage}</p>
                  </div>
                </div>
              )}

              {scanComplete && (
                <div className="space-y-4">
                  <div className="bg-secondary/20 border border-secondary rounded-lg p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <CheckCircle className="h-6 w-6 text-secondary" />
                      <span className="text-white font-semibold text-lg">Audit Complete</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-300">Report ID:</span>
                        <p className="text-white font-mono">{reportId}</p>
                      </div>
                      <div>
                        <span className="text-gray-300">Scan Duration:</span>
                        <p className="text-white">{tierInfo.duration}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-800 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-quaternary mb-1">3</div>
                      <div className="text-gray-300 text-sm">High Severity</div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-primary mb-1">7</div>
                      <div className="text-gray-300 text-sm">Medium Severity</div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-secondary mb-1">12</div>
                      <div className="text-gray-300 text-sm">Low Severity</div>
                    </div>
                  </div>
                </div>
              )}

              {!isScanning && !scanComplete && (
                <div className="text-center space-y-4">
                  <div className="bg-tertiary/20 border border-tertiary rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="h-5 w-5 text-tertiary mt-0.5" />
                      <div className="text-left">
                        <h4 className="text-white font-semibold mb-2">What happens during the scan:</h4>
                        <ul className="text-gray-300 text-sm space-y-1">
                          {tierInfo.stages.map((stage, index) => (
                            <li key={index}>• {stage}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    onClick={startScan}
                    className="bg-primary hover:bg-primary/90 text-white px-12 py-4 text-lg font-semibold rounded-xl"
                  >
                    <Play className="mr-3 h-5 w-5" />
                    Start Scan Now
                  </Button>
                </div>
              )}

              {scanComplete && (
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    onClick={viewReport}
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-3 font-semibold rounded-xl"
                  >
                    View Full Report
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent px-8 py-3 font-semibold rounded-xl"
                  >
                    Download PDF
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Navigation */}
          {!isScanning && !scanComplete && (
            <div className="flex justify-between items-center mt-8">
              <Link href={`/audit/new/confirmation?tier=${tier}&method=${method}`}>
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent">
                  Back to Confirmation
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}
