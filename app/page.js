import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Shield, Zap, Users, ArrowRight, Code, Search, FileText, Award } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0b]">
      <Header />

      {/* Hero Section */}
      <section className="gradient-hero py-32 px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              Secure Your
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Smart Contracts
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              End-to-end smart contract security platform combining AI-powered audits with crowdsourced bug bounties for
              comprehensive protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/audit">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-xl font-semibold rounded-xl"
                >
                  Start Audit
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
              <Link href="/bounty">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-12 py-6 text-xl font-semibold rounded-xl bg-transparent"
                >
                  Launch Bounty
                  <Shield className="ml-3 h-6 w-6" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-4 gradient-professional">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Two Powerful Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive security coverage from development to deployment
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* ChainDefend Audit */}
            <Card className="glass-effect border-0 overflow-hidden group hover:scale-105 transition-all duration-500">
              <CardContent className="p-12">
                <div className="flex items-center mb-8">
                  <div className="p-4 bg-primary/20 rounded-2xl mr-6">
                    <Zap className="h-12 w-12 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">ChainDefend Audit</h3>
                    <p className="text-primary font-semibold">AI-Powered Security Analysis</p>
                  </div>
                </div>

                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Advanced tiered audit system combining cutting-edge AI analysis with expert human review. Identify
                  vulnerabilities during development before they become costly exploits.
                </p>

                <div className="space-y-4 mb-10">
                  <div className="flex items-center text-gray-300">
                    <div className="p-2 bg-primary/20 rounded-lg mr-4">
                      <Code className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-semibold text-white">Starter AI Audit</span>
                      <p className="text-sm text-gray-400">Automated vulnerability detection</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <div className="p-2 bg-primary/20 rounded-lg mr-4">
                      <Search className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-semibold text-white">Pro AI Audit</span>
                      <p className="text-sm text-gray-400">Advanced analysis with custom rules</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <div className="p-2 bg-primary/20 rounded-lg mr-4">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-semibold text-white">Expert Human Audit</span>
                      <p className="text-sm text-gray-400">Professional security expert review</p>
                    </div>
                  </div>
                </div>

                <Link href="/audit">
                  <Button className="bg-primary hover:bg-primary/90 text-white w-full py-4 text-lg font-semibold rounded-xl">
                    Start Security Audit
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* ChainDefend Bounty */}
            <Card className="glass-effect border-0 overflow-hidden group hover:scale-105 transition-all duration-500">
              <CardContent className="p-12">
                <div className="flex items-center mb-8">
                  <div className="p-4 bg-secondary/20 rounded-2xl mr-6">
                    <Users className="h-12 w-12 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">ChainDefend Bounty</h3>
                    <p className="text-secondary font-semibold">Crowdsourced Security</p>
                  </div>
                </div>

                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Harness the power of a global security researcher network. Continuous monitoring and protection for
                  your deployed contracts with competitive reward systems.
                </p>

                <div className="space-y-4 mb-10">
                  <div className="flex items-center text-gray-300">
                    <div className="p-2 bg-secondary/20 rounded-lg mr-4">
                      <Shield className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <span className="font-semibold text-white">Continuous Monitoring</span>
                      <p className="text-sm text-gray-400">24/7 security surveillance</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <div className="p-2 bg-secondary/20 rounded-lg mr-4">
                      <Users className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <span className="font-semibold text-white">Global Researcher Network</span>
                      <p className="text-sm text-gray-400">Access to top security talent</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <div className="p-2 bg-secondary/20 rounded-lg mr-4">
                      <Award className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <span className="font-semibold text-white">Flexible Rewards</span>
                      <p className="text-sm text-gray-400">Customizable bounty programs</p>
                    </div>
                  </div>
                </div>

                <Link href="/bounty">
                  <Button
                    variant="outline"
                    className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white w-full py-4 text-lg font-semibold rounded-xl bg-transparent"
                  >
                    Launch Bounty Program
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-24 px-4 bg-[#0a0a0b]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Trusted by Leading Projects</h2>
            <p className="text-gray-300 text-lg">Join the growing ecosystem of secure smart contracts</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-300">Contracts Secured</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">$50M+</div>
              <div className="text-gray-300">Value Protected</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-gray-300">Security Researchers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-20 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-secondary rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Ready to Secure Your
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Smart Contracts?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Get started with ChainDefend today and protect your code with industry-leading security solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/audit">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-xl font-semibold rounded-xl"
              >
                Start Free Audit
              </Button>
            </Link>
            <Link href="/bounty">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#0a0a0b] px-12 py-6 text-xl font-semibold rounded-xl bg-transparent"
              >
                Explore Bounties
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
