import Link from "next/link"
import { JSX, SVGProps } from "react"

export default function Component() {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Civic Engagement Made Easy</h1>
          <p className="text-muted-foreground mt-2">Empower your voice in the democratic process.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-primary rounded-full p-2 text-primary-foreground">
                <VoteIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Register to Vote</h3>
            </div>
            <p className="text-muted-foreground">
              Secure and simple voter registration process. Enter your details and get started.
            </p>
            <Link
              href="#"
              className="inline-flex items-center mt-4 font-medium text-primary hover:underline"
              prefetch={false}
            >
              Get Registered
              <ChevronRightIcon className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-primary rounded-full p-2 text-primary-foreground">
                <VoteIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Research Candidates</h3>
            </div>
            <p className="text-muted-foreground">
              Explore candidate profiles, policies, and endorsements to make an informed decision.
            </p>
            <Link
              href="#"
              className="inline-flex items-center mt-4 font-medium text-primary hover:underline"
              prefetch={false}
            >
              Explore Candidates
              <ChevronRightIcon className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-primary rounded-full p-2 text-primary-foreground">
                <VoteIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Cast Your Ballot</h3>
            </div>
            <p className="text-muted-foreground">
              Access your personalized digital ballot, review your selections, and submit your vote securely.
            </p>
            <Link
              href="#"
              className="inline-flex items-center mt-4 font-medium text-primary hover:underline"
              prefetch={false}
            >
              Vote Now
              <ChevronRightIcon className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-primary rounded-full p-2 text-primary-foreground">
              <InfoIcon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold">Learn More</h3>
          </div>
          <p className="text-muted-foreground">
            Explore our comprehensive resources for detailed information on the voting process, eligibility, and more.
          </p>
          <Link
            href="/fqa"
            className="inline-flex items-center mt-4 font-medium text-primary hover:underline"
            prefetch={false}
          >
            Visit FAQ
            <ChevronRightIcon className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

function ChevronRightIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function InfoIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}


function VoteIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 12 2 2 4-4" />
      <path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" />
      <path d="M22 19H2" />
    </svg>
  )
}


function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}