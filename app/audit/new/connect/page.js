"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Upload, Github, ArrowRight, FileText } from "lucide-react"

export default function ConnectRepository() {
  const searchParams = useSearchParams()
  const [tier, setTier] = useState("")
  const [connectionMethod, setConnectionMethod] = useState("")
  const [repoUrl, setRepoUrl] = useState("")
  const [uploadedFile, setUploadedFile] = useState(null)
  const [notes, setNotes] = useState("")

  useEffect(() => {
    const tierParam = searchParams.get("tier")
    if (tierParam) {
      setTier(tierParam)
    }
  }, [searchParams])

  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (file && file.name.endsWith(".sol")) {
      setUploadedFile(file)
      setConnectionMethod("upload")
    } else {
      alert("Please upload a .sol file")
    }
  }

  const handleRepoConnect = () => {
    if (repoUrl) {
      setConnectionMethod("github")
    }
  }

  const canProceed =
    connectionMethod && ((connectionMethod === "github" && repoUrl) || (connectionMethod === "upload" && uploadedFile))

  const getTierInfo = (tierType) => {
    const tiers = {
      starter: { name: "Starter AI Audit", price: "IDR 0" },
      pro: { name: "Pro AI Audit", price: "IDR 499K" },
      expert: { name: "Expert Human Audit", price: "IDR 7,999K" },
    }
    return tiers[tierType] || { name: "Unknown", price: "IDR 0" }
  }

  const tierInfo = getTierInfo(tier)

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
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-semibold">
                  2
                </div>
                <div className="ml-3">
                  <p className="text-white font-semibold">Connect</p>
                  <p className="text-gray-400 text-sm">Link repository</p>
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
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Connect Your Code</h1>
            <p className="text-gray-300">Link your GitHub repository or upload your Solidity files for analysis</p>
            {tier && (
              <div className="mt-4 inline-flex items-center bg-primary/20 text-primary px-4 py-2 rounded-lg">
                <span className="font-semibold">{tierInfo.name}</span>
                <span className="ml-2 text-sm">({tierInfo.price})</span>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* GitHub Connection */}
            <Card className="gradient-card border-gray-700">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Github className="h-8 w-8 text-secondary" />
                  <div>
                    <CardTitle className="text-white">GitHub Repository</CardTitle>
                    <CardDescription className="text-gray-300">
                      Connect your GitHub repository for analysis
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="repo-url" className="text-white">
                    Repository URL
                  </Label>
                  <Input
                    id="repo-url"
                    placeholder="https://github.com/username/repo"
                    value={repoUrl}
                    onChange={(e) => setRepoUrl(e.target.value)}
                    className="bg-gray-800 border-gray-600 text-white focus:border-secondary mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="branch" className="text-white">
                    Branch (optional)
                  </Label>
                  <Input
                    id="branch"
                    placeholder="main"
                    className="bg-gray-800 border-gray-600 text-white focus:border-secondary mt-2"
                  />
                </div>
                <Button
                  onClick={handleRepoConnect}
                  className="w-full bg-secondary hover:bg-secondary/90 text-white"
                  disabled={!repoUrl}
                >
                  <Github className="mr-2 h-4 w-4" />
                  Connect Repository
                </Button>
                {connectionMethod === "github" && (
                  <div className="flex items-center text-secondary text-sm">
                    <FileText className="mr-2 h-4 w-4" />
                    Repository connected successfully
                  </div>
                )}
              </CardContent>
            </Card>

            {/* File Upload */}
            <Card className="gradient-card border-gray-700">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Upload className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle className="text-white">Upload Files</CardTitle>
                    <CardDescription className="text-gray-300">
                      Upload your Solidity (.sol) files directly
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {uploadedFile ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg border border-gray-600">
                      <div className="flex items-center space-x-3">
                        <FileText className="h-5 w-5 text-primary" />
                        <span className="text-white">{uploadedFile.name}</span>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setUploadedFile(null)
                          setConnectionMethod("")
                        }}
                        className="border-gray-600 text-gray-300 hover:bg-gray-700"
                      >
                        Remove
                      </Button>
                    </div>
                    <div className="flex items-center text-primary text-sm">
                      <FileText className="mr-2 h-4 w-4" />
                      File uploaded successfully
                    </div>
                  </div>
                ) : (
                  <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-primary transition-colors">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-white mb-2">Drop your .sol files here</p>
                    <p className="text-gray-400 text-sm mb-4">or click to browse</p>
                    <input
                      type="file"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="file-upload"
                      accept=".sol"
                      multiple
                    />
                    <Button
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                      onClick={() => document.getElementById("file-upload").click()}
                    >
                      Choose Files
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Additional Notes */}
          <Card className="gradient-card border-gray-700 mt-8">
            <CardHeader>
              <CardTitle className="text-white">Additional Information</CardTitle>
              <CardDescription className="text-gray-300">
                Provide any specific areas of concern or focus for the audit
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Any specific functions, patterns, or security concerns you'd like us to focus on..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="bg-gray-800 border-gray-600 text-white focus:border-secondary"
                rows={4}
              />
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12">
            <Link href="/audit/new">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent">
                Back to Service Selection
              </Button>
            </Link>

            <Link href={canProceed ? `/audit/new/confirmation?tier=${tier}&method=${connectionMethod}` : "#"}>
              <Button
                size="lg"
                className={`px-12 py-4 text-lg font-semibold rounded-xl ${
                  canProceed
                    ? "bg-primary hover:bg-primary/90 text-white"
                    : "bg-gray-600 cursor-not-allowed text-gray-400"
                }`}
                disabled={!canProceed}
              >
                Continue to Confirmation
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
