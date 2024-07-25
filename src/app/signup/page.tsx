"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Label, Button, Input } from '../../components/ui';

const SignUp = () => {
  const [keys, setKeys] = useState<{ publicKey: string; secret: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare form data
    const formData = new FormData(e.currentTarget as HTMLFormElement);

    try {
      // Send form data to the backend
      const response = await fetch('http://localhost:3000/stellar/generate-keys', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify({
        //   fullName: formData.get('full-name'),
        //   email: formData.get('email'),
        //   wallet: formData.get('wallet'),
        //   document: formData.get('document'),
        // }),
      });
    
      if (!response.ok) {
        throw new Error('Failed to generate keys');
      }
    
      const data = await response.json();
      setKeys(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
    
    
    
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
            Sign up for your account
          </h2>
          <h3 className="mt-2 text-center text-sm text-muted-foreground">
            Or{" "}
            <p className="mt-2 text-center text-sm text-muted-foreground">
              Already have an account? &nbsp;
              <Link
                href="/signin"
                className="font-medium text-primary hover:text-primary/80"
                prefetch={false}
              >
                Login
              </Link>
            </p>
          </h3>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <Label
              htmlFor="full-name"
              className="block text-sm font-medium text-foreground"
            >
              Full Name
            </Label>
            <div className="mt-1">
              <Input
                id="full-name"
                name="full-name"
                type="text"
                autoComplete="name"
                required
                className="block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 placeholder-muted-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                placeholder="John Doe"
              />
            </div>
          </div>
          <div>
            <Label
              htmlFor="email"
              className="block text-sm font-medium text-foreground"
            >
              Email Address
            </Label>
            <div className="mt-1">
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 placeholder-muted-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <Label
              htmlFor="wallet"
              className="block text-sm font-medium text-foreground"
            >
              Wallet Connection
            </Label>
            <div className="mt-1">
              <Input
                id="wallet"
                name="wallet"
                type="text"
                autoComplete="wallet"
                required
                className="block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 placeholder-muted-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                placeholder="0x123456789abcdef"
              />
            </div>
          </div>
          <div>
            <Label
              htmlFor="document"
              className="block text-sm font-medium text-foreground"
            >
              Verification Document
            </Label>
            <div className="mt-1">
              <Input
                id="document"
                name="document"
                type="file"
                required
                className="block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 placeholder-muted-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
              />
            </div>
          </div>
          <div>
            <Button
              type="submit"
              className="flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Signing Up...' : 'Sign Up'}
            </Button>
          </div>
        </form>

        {/* Popup for displaying keys */}
        {keys && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold">Your Stellar Keys</h3>
              <p className="mt-2"><strong>Public Key:</strong> {keys.publicKey}</p>
              <p className="mt-2"><strong>Secret Key:</strong> {keys.secret}</p>
              <Button
                onClick={() => setKeys(null)}
                className="mt-4 bg-red-500 text-white hover:bg-red-700"
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;
