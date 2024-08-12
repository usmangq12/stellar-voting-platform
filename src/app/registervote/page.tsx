"use client";
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from 'axios';

export default function RegisterVotePage() {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    mailingAddress: '',
    idNumber: '',
    idDocument: null,
    politicalParty: '',
    userPublicKey: '',
    userSecretKey: ''
  });

  const handleChange = (e: { target: { id: any; value: any; type: any; files: any; }; }) => {
    const { id, value, type, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }
      console.log("formDataToSend", formDataToSend)
    try {
      const response = await axios.post('http://localhost:3000/vote/register-vote', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Registration successful');
    } catch (error) {
      console.error('Error registering vote:', error);
      alert('Registration failed');
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Vote Registration</CardTitle>
        <CardDescription>Register your vote by filling out the details below.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
          {/* Form fields */}
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" placeholder="John" value={formData.firstName} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="middleName">Middle Name (optional)</Label>
            <Input id="middleName" placeholder="Quincy" value={formData.middleName} onChange={handleChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" placeholder="Doe" value={formData.lastName} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number (optional)</Label>
            <Input id="phone" type="tel" placeholder="(123) 456-7890" value={formData.phone} onChange={handleChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="gender">Gender</Label>
            <Input id="gender" placeholder="Male/Female" value={formData.gender} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Residential Address</Label>
            <Input id="address" placeholder="123 Main St" value={formData.address} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input id="city" placeholder="San Francisco" value={formData.city} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="state">State/Province</Label>
            <Input id="state" placeholder="CA" value={formData.state} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="zip">ZIP/Postal Code</Label>
            <Input id="zip" placeholder="94101" value={formData.zip} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="mailingAddress">Mailing Address (if different)</Label>
            <Input id="mailingAddress" placeholder="456 Oak St" value={formData.mailingAddress} onChange={handleChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="idNumber">National ID/Passport Number</Label>
            <Input id="idNumber" placeholder="ABC123456" value={formData.idNumber} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="idDocument">ID Document</Label>
            <Input id="idDocument" type="file" onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="politicalParty">Political Party</Label>
            <Input id="politicalParty" placeholder="Democratic Party" value={formData.politicalParty} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="userPublicKey">User Public Key</Label>
            <Input id="userPublicKey" placeholder="PublicKey123" value={formData.userPublicKey} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="userSecretKey">User Secret Key</Label>
            <Input id="userSecretKey" placeholder="SecretKey123" type="password" value={formData.userSecretKey} onChange={handleChange} required />
          </div>
          <CardFooter>
            <Button type="submit">Register</Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}