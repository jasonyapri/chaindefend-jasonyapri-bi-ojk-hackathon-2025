import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Search, Filter, Plus, TicketIcon, Clock, Users } from "lucide-react"

export default function BountyMarketplace() {
  // Mock data - replace with real API calls
  const bountyPrograms = [
    {
      id: 1,
      name: "CashSwap V4 Protocol",
      description: "Decentralized exchange protocol with concentrated liquidity",
      rewardPool: "IDRX 1.2B",
      maxReward: "IDRX 240M",
      submissions: 23,
      timeLeft: "45 days",
      status: "active",
      category: "DeFi",
      logo: "/img/cashswap.png?height=60&width=60",
    },
    {
      id: 2,
      name: "Pelita Governance",
      description: "Decentralized governance system for lending protocol",
      rewardPool: "IDRX 1.8B",
      maxReward: "IDRX 360M",
      submissions: 12,
      timeLeft: "30 days",
      status: "active",
      category: "Governance",
      logo: "/img/pelita.png?height=60&width=60",
    },
    {
      id: 3,
      name: "DingDong Loans",
      description: "Flash loan mechanism for instant liquidity",
      rewardPool: "IDRX 2.4B",
      maxReward: "IDRX 600M",
      submissions: 45,
      timeLeft: "60 days",
      status: "active",
      category: "DeFi",
      logo: "/img/dingdong.png?height=60&width=60",
    },
    {
      id: 4,
      name: "Garuda Oracles",
      description: "Decentralized oracle network for price feeds",
      rewardPool: "IDRX 4.8B",
      maxReward: "IDRX 1.2B",
      submissions: 67,
      timeLeft: "90 days",
      status: "active",
      category: "Oracle",
      logo: "/img/garuda.jpg?height=60&width=60",
    },
    {
      id: 5,
      name: "Reksa Dana Kripto",
      description: "NFT trading platform with advanced features",
      rewardPool: "IDRX 1.9B",
      maxReward: "IDRX 480M",
      submissions: 34,
      timeLeft: "21 days",
      status: "active",
      category: "NFT",
      logo: "/img/reksadana.png?height=60&width=60",
    },
    {
      id: 6,
      name: "Pelita Bridge",
      description: "Cross-chain bridge for asset transfers",
      rewardPool: "IDRX 3.6B",
      maxReward: "IDRX 720M",
      submissions: 28,
      timeLeft: "75 days",
      status: "active",
      category: "Bridge",
      logo: "/img/pelita.png?height=60&width=60",
    },
  ]

  const categories = ["All", "DeFi", "NFT", "Governance", "Oracle", "Bridge"]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 p-6">
        <div className="container mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Bounty Marketplace</h1>
              <p className="text-gray-300">Discover and participate in bug bounty programs</p>
            </div>
            <Button className="bg-secondary hover:bg-secondary/90 text-white">
              <Plus className="mr-2 h-4 w-4" />
              Create Bounty
            </Button>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search bounty programs..."
                className="pl-10 bg-gray-800 border-gray-600 text-white focus:border-secondary"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
              <select className="bg-gray-800 border border-gray-600 text-white rounded-md px-3 py-2 focus:border-secondary">
                <option>Sort by Reward</option>
                <option>Sort by Time Left</option>
                <option>Sort by Submissions</option>
              </select>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <Badge
                key={category}
                variant="outline"
                className="cursor-pointer border-gray-600 text-gray-300 hover:border-secondary hover:text-secondary"
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Bounty Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bountyPrograms.map((program) => (
              <Card
                key={program.id}
                className="gradient-card border-gray-700 hover:border-secondary transition-all duration-300 cursor-pointer group"
              >
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <img
                      src={program.logo || "/placeholder.svg"}
                      alt={`${program.name} logo`}
                      className="w-12 h-12 rounded-lg"
                    />
                    <div>
                      <CardTitle className="text-white group-hover:text-secondary transition-colors">
                        {program.name}
                      </CardTitle>
                      <Badge variant="outline" className="border-gray-600 text-gray-400 text-xs">
                        {program.category}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="text-gray-300 text-sm">{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <TicketIcon className="h-4 w-4 text-secondary" />
                        <span className="text-white font-semibold">{program.rewardPool}</span>
                      </div>
                      <span className="text-gray-300 text-sm">Total Pool</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <TicketIcon className="h-4 w-4 text-primary" />
                        <span className="text-white font-semibold">{program.maxReward}</span>
                      </div>
                      <span className="text-gray-300 text-sm">Max Reward</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-300">{program.submissions}</span>
                      </div>
                      <span className="text-gray-300 text-sm">Submissions</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-300">{program.timeLeft}</span>
                      </div>
                      <Badge className="bg-secondary text-white">{program.status}</Badge>
                    </div>

                    <Button className="w-full bg-secondary hover:bg-secondary/90 text-white mt-4">View Details</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent">
              Load More Programs
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
