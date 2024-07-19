import Link from "next/link"

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="grid gap-8">
          <div className="grid gap-2">
            <h2 className="text-3xl font-bold tracking-tight">Upcoming Elections</h2>
            <p className="text-muted-foreground">Stay informed about the latest local and national elections.</p>
          </div>
          <div className="grid gap-6">
            <div className="grid gap-4 bg-card p-6 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="font-semibold">2024 Presidential Election</div>
                <div className="text-sm bg-primary px-2 py-1 rounded-md text-primary-foreground">November 5, 2024</div>
              </div>
              <p className="text-muted-foreground">
                The next US presidential election will be held on November 5, 2024.
              </p>
              <Link href="#" className="font-medium text-primary" prefetch={false}>
                View Election Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}