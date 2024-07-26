
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
        <CardDescription>Please fill out the following details to complete your profile.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First Name</Label>
                <Input id="first-name" placeholder="John" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="middle-name">Middle Name (optional)</Label>
                <Input id="middle-name" placeholder="Quincy" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last Name</Label>
              <Input id="last-name" placeholder="Doe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="john@example.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number (optional)</Label>
              <Input id="phone" type="tel" placeholder="(123) 456-7890" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <Select  required>
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="non-binary">Non-binary</SelectItem>
                  <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="address">Residential Address</Label>
              <Input id="address" placeholder="123 Main St" required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="San Francisco" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State/Province</Label>
                <Input id="state" placeholder="CA" required />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="zip">ZIP/Postal Code</Label>
                <Input id="zip" placeholder="94101" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mailing-address">Mailing Address (if different)</Label>
                <Input id="mailing-address" placeholder="456 Oak St" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="id-number">National ID/Passport Number</Label>
                <Input id="id-number" placeholder="ABC123456" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="id-document">ID Document</Label>
                <Input id="id-document" type="file" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="political-party">Political Party (optional)</Label>
              <Select >
                <SelectTrigger>
                  <SelectValue placeholder="Select political party" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="democrat">Democrat</SelectItem>
                  <SelectItem value="republican">Republican</SelectItem>
                  <SelectItem value="independent">Independent</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <div className="flex justify-end">
          <Button type="submit">Save Changes</Button>
        </div>
      </CardFooter>
    </Card>
  )
}