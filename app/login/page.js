import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Github, Mail } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-md gradient-card border-gray-700">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white">Welcome Back</CardTitle>
            <CardDescription className="text-gray-300">Choose your login method based on your needs</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="audit" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-gray-800">
                <TabsTrigger value="audit" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  Audit Login
                </TabsTrigger>
                <TabsTrigger value="bounty" className="data-[state=active]:bg-secondary data-[state=active]:text-white">
                  Bounty Login
                </TabsTrigger>
              </TabsList>

              <TabsContent value="audit" className="space-y-4 mt-6">
                <div className="text-center">
                  <p className="text-gray-300 mb-4">Connect with GitHub to access audit features</p>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    <Github className="mr-2 h-4 w-4" />
                    Continue with GitHub
                  </Button>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-400">
                    New to ChainDefend Audit?{" "}
                    <a href="/register" className="text-primary hover:underline">
                      Create account
                    </a>
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="bounty" className="space-y-4 mt-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="bg-gray-800 border-gray-600 text-white focus:border-secondary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-white">
                      Password
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      className="bg-gray-800 border-gray-600 text-white focus:border-secondary"
                    />
                  </div>
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">
                    <Mail className="mr-2 h-4 w-4" />
                    Sign In
                  </Button>
                </div>
                <div className="text-center">
                  <a href="/forgot-password" className="text-sm text-secondary hover:underline">
                    Forgot your password?
                  </a>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-400">
                    New to ChainDefend Bounty?{" "}
                    <a href="/register" className="text-secondary hover:underline">
                      Create account
                    </a>
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  )
}
