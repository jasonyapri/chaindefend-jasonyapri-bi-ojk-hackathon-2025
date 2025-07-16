import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Github } from "lucide-react"

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
            <div className="space-y-6">
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
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">Login</Button>
              <div className="text-center">
                <a href="/forgot-password" className="text-sm text-secondary hover:underline">
                  Forgot your password?
                </a>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-gray-400">Or continue with</span>
              </div>
              <Button variant="outline" className="w-full border-gray-600 text-white hover:bg-gray-700 bg-transparent">
                <Github className="mr-2 h-4 w-4" />
                Login with GitHub
              </Button>
              <Button variant="outline" className="w-full border-gray-600 text-white hover:bg-gray-700 bg-transparent">
                <img src="/placeholder.svg?height=16&width=16" alt="Google logo" className="mr-2 h-4 w-4" />
                Login with Google
              </Button>
            </div>
            <div className="text-center mt-6">
              <p className="text-sm text-gray-400">
                Don't have an account?{" "}
                <a href="/register" className="text-primary hover:underline">
                  Register
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  )
}
