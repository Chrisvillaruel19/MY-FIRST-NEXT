import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CardDemo() {
  return (
    <div className="min-h-screen w-full flex-1 flex item-center justify-center content-center bg-[url('/bglog.jpg')] bg-cover bg-center ">
        <main>
    <Card className="w-200 mt-50 backdrop-blur-sm bg-transparent text-white border-transparent border-2 shadow-lg shadow-white">
      <CardHeader>
        <CardTitle className="text-center">Login to your account</CardTitle>
        <CardDescription className="text-center">
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
       
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full bg-blue-800">
          Login
        </Button>
        <Button variant="outline" className="w-full  text-black">
          Login with Google
        </Button>
      </CardFooter>
    </Card>
    </main>
    </div>
  )
}
