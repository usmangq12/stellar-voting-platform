import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <Card className="w-full max-w-4xl mx-auto p-6 sm:p-8 md:p-10">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Candidate</CardTitle>
        <CardDescription>Fill out the form below to create your candidate profile.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="full-name" className="text-sm font-medium">
                Full Name
              </Label>
              <Input id="full-name" placeholder="Full Name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="photo" className="text-sm font-medium">
                Photo
              </Label>
              <Input id="photo" type="file" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="bio" className="text-sm font-medium">
                Bio/Description
              </Label>
              <Textarea id="bio" rows={5} placeholder="Enter a brief overview..." />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="platform" className="text-sm font-medium">
                Campaign Platform
              </Label>
              <Textarea id="platform" rows={5} placeholder="Outline your key points..." />
            </div>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email
              </Label>
              <Input id="email" type="email" placeholder="example@email.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone" className="text-sm font-medium">
                Phone
              </Label>
              <Input id="phone" type="tel" placeholder="(123) 456-7890" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="twitter" className="text-sm font-medium">
                Twitter
              </Label>
              <Input id="twitter" placeholder="https://twitter.com/username" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="party" className="text-sm font-medium">
                Party Affiliation
              </Label>
              <Input id="party" placeholder="Democratic Party" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="position" className="text-sm font-medium">
                Election Position
              </Label>
              <Input id="position" placeholder="City Council" />
            </div>
          </div>
          <div className="col-span-full">
            <div className="grid gap-2">
              <Label htmlFor="experience" className="text-sm font-medium">
                Experience/Qualifications
              </Label>
              <Textarea
                id="experience"
                rows={5}
                placeholder="Describe your relevant experience and qualifications..."
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="documents" className="text-sm font-medium">
                Public key
              </Label>
              <Input id="Publickey" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <div className="flex justify-end">
          <Button>Submit Profile</Button>
        </div>
      </CardFooter>
    </Card>
  )
}