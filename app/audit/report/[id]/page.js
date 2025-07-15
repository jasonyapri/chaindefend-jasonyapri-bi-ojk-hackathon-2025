import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { AlertTriangle, CheckCircle, Info, Download, Share, Code } from "lucide-react"

export default function AuditReportDetail({ params }) {
  // Mock data - replace with real API call using params.id
  const reportData = {
    id: params?.id || "123",
    projectName: "DeFi Protocol V2",
    scanDate: "2024-01-15",
    tier: "Pro AI Audit",
    status: "completed",
    overallScore: 78,
    vulnerabilities: [
      {
        id: 1,
        title: "Reentrancy Vulnerability in withdraw()",
        severity: "high",
        description:
          "The withdraw function is vulnerable to reentrancy attacks due to external calls before state changes.",
        file: "contracts/DeFiProtocol.sol",
        line: 145,
        code: `function withdraw(uint256 amount) external {
    require(balances[msg.sender] >= amount, "Insufficient balance");
    
    // Vulnerable: External call before state change
    (bool success, ) = msg.sender.call{value: amount}("");
    require(success, "Transfer failed");
    
    balances[msg.sender] -= amount; // State change after external call
}`,
        recommendation: "Use the checks-effects-interactions pattern. Update state before external calls.",
        impact: "Attackers can drain contract funds through recursive calls.",
      },
      {
        id: 2,
        title: "Integer Overflow in calculateReward()",
        severity: "medium",
        description: "Potential integer overflow in reward calculation without SafeMath.",
        file: "contracts/RewardCalculator.sol",
        line: 67,
        code: `function calculateReward(uint256 stake, uint256 multiplier) public pure returns (uint256) {
    return stake * multiplier; // Potential overflow
}`,
        recommendation: "Use SafeMath library or Solidity 0.8+ built-in overflow protection.",
        impact: "Incorrect reward calculations leading to economic exploits.",
      },
      {
        id: 3,
        title: "Missing Access Control on setFee()",
        severity: "medium",
        description: "The setFee function lacks proper access control modifiers.",
        file: "contracts/FeeManager.sol",
        line: 23,
        code: `function setFee(uint256 newFee) external {
    fee = newFee; // Anyone can call this
}`,
        recommendation: "Add onlyOwner or appropriate access control modifier.",
        impact: "Unauthorized users can manipulate fee structure.",
      },
      {
        id: 4,
        title: "Unused Variable in processTransaction()",
        severity: "low",
        description: 'Variable "timestamp" is declared but never used.',
        file: "contracts/TransactionProcessor.sol",
        line: 89,
        code: `function processTransaction() internal {
    uint256 timestamp = block.timestamp; // Unused variable
    // ... rest of function
}`,
        recommendation: "Remove unused variable to optimize gas usage.",
        impact: "Minor gas inefficiency.",
      },
    ],
  }

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "high":
        return "bg-quaternary text-white"
      case "medium":
        return "bg-primary text-white"
      case "low":
        return "bg-secondary text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  const getSeverityIcon = (severity) => {
    switch (severity) {
      case "high":
        return <AlertTriangle className="h-4 w-4" />
      case "medium":
        return <AlertTriangle className="h-4 w-4" />
      case "low":
        return <Info className="h-4 w-4" />
      default:
        return <Info className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 p-6">
        <div className="container mx-auto max-w-6xl">
          {/* Report Header */}
          <div className="mb-8">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">{reportData.projectName}</h1>
                <p className="text-gray-300">Audit Report #{reportData.id}</p>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent">
                  <Share className="mr-2 h-4 w-4" />
                  Share
                </Button>
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-300">
              <span>Scan Date: {reportData.scanDate}</span>
              <span>Tier: {reportData.tier}</span>
              <Badge className="bg-secondary text-white">
                <CheckCircle className="mr-1 h-3 w-3" />
                {reportData.status}
              </Badge>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="gradient-card border-gray-700">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">{reportData.overallScore}</div>
                <div className="text-gray-300">Security Score</div>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                  <div className="bg-secondary h-2 rounded-full" style={{ width: `${reportData.overallScore}%` }}></div>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-card border-gray-700">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-quaternary mb-2">
                  {reportData.vulnerabilities.filter((v) => v.severity === "high").length}
                </div>
                <div className="text-gray-300">High Severity</div>
              </CardContent>
            </Card>

            <Card className="gradient-card border-gray-700">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {reportData.vulnerabilities.filter((v) => v.severity === "medium").length}
                </div>
                <div className="text-gray-300">Medium Severity</div>
              </CardContent>
            </Card>

            <Card className="gradient-card border-gray-700">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-secondary mb-2">
                  {reportData.vulnerabilities.filter((v) => v.severity === "low").length}
                </div>
                <div className="text-gray-300">Low Severity</div>
              </CardContent>
            </Card>
          </div>

          {/* Vulnerabilities List */}
          <Card className="gradient-card border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Vulnerabilities Found</CardTitle>
              <CardDescription className="text-gray-300">
                Detailed analysis of security issues discovered in your smart contract
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {reportData.vulnerabilities.map((vuln) => (
                  <div key={vuln.id} className="border border-gray-700 rounded-lg p-6 bg-tertiary/20">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        {getSeverityIcon(vuln.severity)}
                        <h3 className="text-xl font-semibold text-white">{vuln.title}</h3>
                      </div>
                      <Badge className={getSeverityColor(vuln.severity)}>{vuln.severity.toUpperCase()}</Badge>
                    </div>

                    <p className="text-gray-300 mb-4">{vuln.description}</p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-white font-semibold mb-2 flex items-center">
                          <Code className="mr-2 h-4 w-4" />
                          Vulnerable Code
                        </h4>
                        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                          <div className="text-xs text-gray-400 mb-2">
                            {vuln.file}:{vuln.line}
                          </div>
                          <pre className="text-sm text-gray-300 font-mono">
                            <code>{vuln.code}</code>
                          </pre>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-white font-semibold mb-2">Impact & Recommendation</h4>
                        <div className="space-y-3">
                          <div>
                            <span className="text-quaternary font-semibold">Impact:</span>
                            <p className="text-gray-300 text-sm mt-1">{vuln.impact}</p>
                          </div>
                          <div>
                            <span className="text-secondary font-semibold">Recommendation:</span>
                            <p className="text-gray-300 text-sm mt-1">{vuln.recommendation}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
