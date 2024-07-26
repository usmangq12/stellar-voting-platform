"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import { Label, Button, Input } from "../../components/ui";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [document, setDocument] = useState<File | null>(null);
  const [keys, setKeys] = useState<{
    publicKey: string;
    secret: string;
    challenge?: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;

    if (file) {
      const allowedTypes = ["image/png", "image/jpeg"];
      if (!allowedTypes.includes(file.type)) {
        alert("Please upload a PNG, JPG, or JPEG file.");
        e.target.value = "";
        setDocument(null);
      } else {
        setDocument(file);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("email", email);
    if (document) {
      formData.append("document", document);
    }

    try {
      const response = await fetch("http://localhost:3000/auth/sign-up", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to sign up");
      }

      const data = await response.json();
      setKeys(data);

      setFullName("");
      setEmail("");
      setDocument(null);

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error during sign up");
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
                Sign In
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
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
                className="block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 placeholder-muted-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <Label
              htmlFor="document"
              className="block text-sm font-medium text-foreground"
            >
              Document
            </Label>
            <div className="mt-1">
              <Input
                id="document"
                name="document"
                type="file"
                accept=".png,.jpg,.jpeg"
                onChange={handleFileChange}
                className="block w-full rounded-md border border-input bg-background px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                ref={fileInputRef}
              />
            </div>
          </div>
          <div>
            <Button
              type="submit"
              className="flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing Up..." : "Sign Up"}
            </Button>
          </div>
        </form>

        {keys && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold">Your Stellar Keys</h3>
              <p className="mt-2">
                <strong>Public Key:</strong> {keys.publicKey}
              </p>
              <p className="mt-2">
                <strong>Secret Key:</strong> {keys.secret}
              </p>
              {keys.challenge && (
                <p className="mt-2">
                  <strong>Challenge:</strong> {keys.challenge}
                </p>
              )}
              <Button
                onClick={() => setKeys(null)}
                className="mt-4 bg-red-500 text-white hover:bg-red-700"
              >
                Close
              </Button>
            </div>
          </div>
        )}

        {message && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mt-4 text-center text-sm text-muted-foreground">
                {message}
              </div>
              <Button
                onClick={() => setMessage(null)}
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
