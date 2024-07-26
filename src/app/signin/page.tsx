"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button, Label, Input } from "../../components/ui";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [publicKey, setPublicKey] = useState("");
  const [challengeResponse, setChallengeResponse] = useState("");

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    const data = {
      email,
      publicKey,
      response: challengeResponse,
    };

    try {
      const response = await fetch("http://localhost:3000/auth/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to sign in");
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
            Vote for the Future
          </h2>
          <p className="mt-1 text-center text-sm text-muted-foreground">
            Your vote is your voice. Be heard and shape the future.
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <Label htmlFor="email-address" className="sr-only">
                Email address
              </Label>
              <Input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-input bg-background px-3 py-2 text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div>
            <Label htmlFor="public-key" className="sr-only">
              Public Key
            </Label>
            <Input
              id="public-key"
              name="publicKey"
              type="text"
              autoComplete="public-key"
              required
              className="relative block w-full appearance-none rounded-none rounded-t-md border border-input bg-background px-3 py-2 text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
              placeholder="Public Key"
              value={publicKey}
              onChange={(e) => setPublicKey(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="challenge-response" className="sr-only">
              Challenge Response
            </Label>
            <Input
              id="challenge-response"
              name="challengeResponse"
              type="text"
              autoComplete="challenge-response"
              required
              className="relative block w-full appearance-none rounded-none rounded-t-md border border-input bg-background px-3 py-2 text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
              placeholder="Challenge Response"
              value={challengeResponse}
              onChange={(e) => setChallengeResponse(e.target.value)}
            />
          </div>
          <div>
            <Button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <div className="h-5 w-5 text-primary-foreground group-hover:text-primary-foreground" />
              </span>
              Login
            </Button>
          </div>
        </form>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          Don't have an account?&nbsp;
          <Link
            href="/signup"
            className="font-lg text-primary hover:text-primary/80"
            prefetch={false}
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
