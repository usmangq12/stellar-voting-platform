"use client";
import { useState, ChangeEvent, FormEvent } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface CandidateFormData {
  fullName: string;
  photo: File | null;
  bio: string;
  platform: string;
  email: string;
  phone: string;
  twitter: string;
  party: string;
  electionPosition: string;
  experience: string;
  publicKey: string;
}

export default function Component() {
  const [formData, setFormData] = useState<CandidateFormData>({
    fullName: "",
    photo: null,
    bio: "",
    platform: "",
    email: "",
    phone: "",
    twitter: "",
    party: "",
    electionPosition: "",
    experience: "",
    publicKey: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = event.target;
  
    if (target instanceof HTMLInputElement) {
      if (target.type === 'file') {
        const files = target.files?.[0]; 
        setFormData(prevFormData => ({
          ...prevFormData,
          [target.id]: files || null, 
        }));
      } else {
        setFormData(prevFormData => ({
          ...prevFormData,
          [target.id]: target.value,
        }));
      }
    } else if (target instanceof HTMLTextAreaElement) {
      setFormData(prevFormData => ({
        ...prevFormData,
        [target.id]: target.value,
      }));
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData();
    for (const key in formData) {
      const value = formData[key as keyof CandidateFormData];
      if (value !== null) {
        data.append(key, value);
      }
    }

    try {
      const response = await fetch("http://localhost:3000/candidate/register", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        throw new Error("Failed to register candidate");
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error registering candidate:", error);
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto p-6 sm:p-8 md:p-10">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Candidate</CardTitle>
        <CardDescription>Fill out the form below to create your candidate profile.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="fullName" className="text-sm font-medium">Full Name</Label>
              <Input id="fullName" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="photo" className="text-sm font-medium">Photo</Label>
              <Input id="photo" name="photo" type="file" onChange={handleChange} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="bio" className="text-sm font-medium">Bio/Description</Label>
              <Textarea id="bio" name="bio" rows={5} placeholder="Enter a brief overview..." value={formData.bio} onChange={handleChange} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="platform" className="text-sm font-medium">Campaign Platform</Label>
              <Textarea id="platform" name="platform" rows={5} placeholder="Outline your key points..." value={formData.platform} onChange={handleChange} />
            </div>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-sm font-medium">Email</Label>
              <Input id="email" name="email" type="email" placeholder="example@email.com" value={formData.email} onChange={handleChange} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone" className="text-sm font-medium">Phone</Label>
              <Input id="phone" name="phone" type="tel" placeholder="(123) 456-7890" value={formData.phone} onChange={handleChange} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="twitter" className="text-sm font-medium">Twitter</Label>
              <Input id="twitter" name="twitter" placeholder="https://twitter.com/username" value={formData.twitter} onChange={handleChange} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="party" className="text-sm font-medium">Party Affiliation</Label>
              <Input id="party" name="party" placeholder="Democratic Party" value={formData.party} onChange={handleChange} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="electionPosition" className="text-sm font-medium">Election Position</Label>
              <Input id="electionPosition" name="electionPosition" placeholder="City Council" value={formData.electionPosition} onChange={handleChange} />
            </div>
          </div>
          <div className="col-span-full">
            <div className="grid gap-2">
              <Label htmlFor="experience" className="text-sm font-medium">Experience/Qualifications</Label>
              <Textarea id="experience" name="experience" rows={5} placeholder="Describe your relevant experience and qualifications..." value={formData.experience} onChange={handleChange} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="publicKey" className="text-sm font-medium">Public key</Label>
              <Input id="publicKey" name="publicKey" value={formData.publicKey} onChange={handleChange} />
            </div>
          </div>
          <CardFooter className="col-span-full flex justify-end">
            <Button type="submit">Submit Profile</Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
