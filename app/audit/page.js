import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Plus, AlertTriangle, CheckCircle, Clock, TrendingUp } from "lucide-react"

export default function AuditDashboard() {
  // Mock data - replace with real API calls
  const auditStats = {
    totalIssues: 47,
    highSeverity: 3,
    mediumSeverity: 12,
    lowSeverity: 32,
    completedAudits: 8,
    pendingAudits: 2,
  }

  const recentAudits = [
    { id: 1, name: "DeFi Protocol V2", status: "completed", issues: 5, severity: "medium", date: "2024-01-15" },
    { id: 2, name: "NFT Marketplace", status: "in-progress", issues: 12, severity: "high", date: "2024-01-14" },
    { id: 3, name: "Token Contract", status: "completed", issues: 2, severity: "low", date: "2024-01-13" },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 p-6">
        <div className="container mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Audit Dashboard</h1>
              <p className="text-gray-300">Monitor your smart contract security audits</p>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              <Plus className="mr-2 h-4 w-4" />
              New Audit
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="gradient-card border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-300 text-sm">Total Issues</p>
                    <p className="text-3xl font-bold text-white">{auditStats.totalIssues}</p>
                  </div>
                  <AlertTriangle className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-card border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-300 text-sm">High Severity</p>
                    <p className="text-3xl font-bold text-quaternary">{auditStats.highSeverity}</p>
                  </div>
                  <AlertTriangle className="h-8 w-8 text-quaternary" />
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-card border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-300 text-sm">Completed Audits</p>
                    <p className="text-3xl font-bold text-secondary">{auditStats.completedAudits}</p>
                  </div>
                  <CheckCircle className="h-8 w-8 text-secondary" />
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-card border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-300 text-sm">Pending Audits</p>
                    <p className="text-3xl font-bold text-primary">{auditStats.pendingAudits}</p>
                  </div>
                  <Clock className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Risk Heatmap */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card className="gradient-card border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Severity Distribution</CardTitle>
                <CardDescription className="text-gray-300">Breakdown of issues by severity level</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">High</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-700 rounded-full h-2">
                        <div className="bg-quaternary h-2 rounded-full" style={{ width: "20%" }}></div>
                      </div>
                      <span className="text-quaternary font-semibold">{auditStats.highSeverity}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Medium</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-700 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "60%" }}></div>
                      </div>
                      <span className="text-primary font-semibold">{auditStats.mediumSeverity}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Low</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-700 rounded-full h-2">
                        <div className="bg-secondary h-2 rounded-full" style={{ width: "80%" }}></div>
                      </div>
                      <span className="text-secondary font-semibold">{auditStats.lowSeverity}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-card border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Audit Trends</CardTitle>
                <CardDescription className="text-gray-300">Security improvements over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-32">
                  <TrendingUp className="h-16 w-16 text-secondary" />
                  <div className="ml-4">
                    <p className="text-2xl font-bold text-secondary">↑ 23%</p>
                    <p className="text-gray-300">Security Score</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Audits */}
          <Card className="gradient-card border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Recent Audits</CardTitle>
              <CardDescription className="text-gray-300">Your latest audit activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentAudits.map((audit) => (
                  <div key={audit.id} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          audit.status === "completed" ? "bg-secondary" : "bg-primary"
                        }`}
                      ></div>
                      <div>
                        <p className="text-white font-semibold">{audit.name}</p>
                        <p className="text-gray-300 text-sm">{audit.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span
                        className={`px-2 py-1 rounded text-xs font-semibold ${
                          audit.severity === "high"
                            ? "bg-quaternary text-white"
                            : audit.severity === "medium"
                              ? "bg-primary text-white"
                              : "bg-secondary text-white"
                        }`}
                      >
                        {audit.issues} issues
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                      >
                        View Report
                      </Button>
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
