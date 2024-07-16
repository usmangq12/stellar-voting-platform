import React from "react";
import Link from "next/link";
import { Label, Button, Input } from "../../components/ui";

const SignUp = () => {
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
        <form className="space-y-6" action="#" method="POST">
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
            >
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
