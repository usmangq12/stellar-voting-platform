import Link from "next/link"
import { JSX, SVGProps } from "react"

export default function Steps() {
  return (
    <div className="bg-background text-foreground">
      <header className="bg-primary text-primary-foreground py-6 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold">Voting Information</h1>
          <p className="text-lg mt-2">Everything you need to know about the voting process.</p>
        </div>
      </header>
      <main className="container mx-auto max-w-6xl py-12 px-4 md:px-8 space-y-12">
        <section>
          <h2 className="text-2xl font-bold">Voter Eligibility</h2>
          <div className="mt-4 space-y-4 text-muted-foreground">
            <p>
              To be eligible to vote, you must be a United States citizen, a resident of the state, and at least 18
              years old on or before Election Day.
            </p>
            <p>
              Certain individuals may be ineligible to vote, such as those currently serving a felony sentence or those
              deemed mentally incompetent by a court.
            </p>
            <p>If you have any questions about your eligibility, please contact your local election office.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold">Voter Registration</h2>
          <div className="mt-4 space-y-4 text-muted-foreground">
            <p>
              To vote, you must be registered. You can register to vote online, by mail, or in person at your local
              election office.
            </p>
            <p>
              The registration deadline varies by state, but is typically 30 days before an election. Be sure to
              register early to ensure your eligibility.
            </p>
            <Link href="#" className="inline-flex items-center gap-2 text-primary hover:underline" prefetch={false}>
              <ArrowRightIcon className="w-4 h-4" />
              Register to Vote
            </Link>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold">Voting Methods</h2>
          <div className="mt-4 space-y-4 text-muted-foreground">
            <p>
              There are several ways to cast your ballot, including in-person voting, mail-in voting, and early voting.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-muted rounded-md">
                <h3 className="text-lg font-bold">In-Person Voting</h3>
                <p>
                  Visit your local polling place on Election Day to cast your ballot in person. Bring a valid photo ID.
                </p>
              </div>
              <div className="p-4 bg-muted rounded-md">
                <h3 className="text-lg font-bold">Mail-In Voting</h3>
                <p>
                  Request a mail-in ballot and return it by the deadline. Check with your local election office for
                  deadlines and requirements.
                </p>
              </div>
              <div className="p-4 bg-muted rounded-md">
                <h3 className="text-lg font-bold">Early Voting</h3>
                <p>
                  Many states offer early voting options. Check with your local election office for dates and locations.
                </p>
              </div>
              <div className="p-4 bg-muted rounded-md">
                <h3 className="text-lg font-bold">Curbside Voting</h3>
                <p>
                  Some polling places offer curbside voting for those who are unable to enter the building. Contact your
                  local election office for more information.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold">Important Dates</h2>
          <div className="mt-4 space-y-4 text-muted-foreground">
            <p>Be sure to mark these key dates on your calendar to ensure your voice is heard:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-muted rounded-md">
                <h3 className="text-lg font-bold">Voter Registration Deadline</h3>
                <p>The deadline to register to vote varies by state, but is typically 30 days before an election.</p>
              </div>
              <div className="p-4 bg-muted rounded-md">
                <h3 className="text-lg font-bold">Early Voting Period</h3>
                <p>Many states offer early voting options, with dates and times that vary.</p>
              </div>
              <div className="p-4 bg-muted rounded-md">
                <h3 className="text-lg font-bold">Mail-In Ballot Deadline</h3>
                <p>The deadline to return your mail-in ballot varies by state, so be sure to check the requirements.</p>
              </div>
              <div className="p-4 bg-muted rounded-md">
                <h3 className="text-lg font-bold">Election Day</h3>
                <p>Polls are open from 7am to 8pm on Election Day. Be sure to arrive before the polls close.</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold">Voting Security and Privacy</h2>
          <div className="mt-4 space-y-4 text-muted-foreground">
            <p>
              The integrity and privacy of the voting process is of the utmost importance. Several measures are in place
              to ensure the security and confidentiality of your vote:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Voter registration databases are secured and regularly audited to prevent unauthorized access or
                tampering.
              </li>
              <li>
                Voting machines and ballot counting processes are subject to rigorous testing and certification to
                ensure accuracy and reliability.
              </li>
              <li>
                Voter information and ballot choices are kept strictly confidential, with no way to link a voter to
                their specific ballot.
              </li>
              <li>
                Election officials work closely with cybersecurity experts to monitor and address any potential threats
                to the voting system.
              </li>
            </ul>
            <p>
              If you have any concerns about the security or privacy of the voting process, please contact your local
              election office.
            </p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold">Voting Resources</h2>
          <div className="mt-4 space-y-4 text-muted-foreground">
            <p>Here are some helpful resources to learn more about the voting process and your rights as a voter:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-muted rounded-md">
                <h3 className="text-lg font-bold">State Election Websites</h3>
                <p>
                  Find your state's election website for detailed information on voter registration, polling locations,
                  and more.
                </p>
                <Link href="#" className="inline-flex items-center gap-2 text-primary hover:underline" prefetch={false}>
                  <ArrowRightIcon className="w-4 h-4" />
                  Find Your State
                </Link>
              </div>
              <div className="p-4 bg-muted rounded-md">
                <h3 className="text-lg font-bold">Voter Education Materials</h3>
                <p>Explore educational resources on the voting process, your rights as a voter, and more.</p>
                <Link href="#" className="inline-flex items-center gap-2 text-primary hover:underline" prefetch={false}>
                  <ArrowRightIcon className="w-4 h-4" />
                  Learn More
                </Link>
              </div>
              <div className="p-4 bg-muted rounded-md">
                <h3 className="text-lg font-bold">Election Support Hotline</h3>
                <p>If you have any questions or issues, you can contact the election support hotline for assistance.</p>
                <Link href="#" className="inline-flex items-center gap-2 text-primary hover:underline" prefetch={false}>
                  <ArrowRightIcon className="w-4 h-4" />
                  Contact Support
                </Link>
              </div>
              <div className="p-4 bg-muted rounded-md">
                <h3 className="text-lg font-bold">Voter Rights Information</h3>
                <p>Learn about your rights as a voter and what to do if you encounter any issues at the polls.</p>
                <Link href="#" className="inline-flex items-center gap-2 text-primary hover:underline" prefetch={false}>
                  <ArrowRightIcon className="w-4 h-4" />
                  Know Your Rights
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted text-muted-foreground py-8 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm">&copy; 2024 Voting Information. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function ArrowRightIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
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