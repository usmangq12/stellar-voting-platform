import React from "react";

export default function Component() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Election Results</h1>
        </div>
      </header>
      <main className="flex-1 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h2 className="text-2xl font-bold">Recent Election Results</h2>
              <p className="text-muted-foreground mt-2">
                Here you can find the latest results for local, state, and
                national elections.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Elections</h3>
              <div className="mt-4 space-y-4">
                <div className="bg-muted rounded-lg p-4">
                  <h4 className="text-lg font-medium">City Council</h4>
                  <div className="mt-2 grid grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="bg-primary rounded-full px-2 py-1 text-xs text-primary-foreground">
                          Democrat
                        </div>
                        <div>Jane Doe</div>
                      </div>
                      <div className="text-muted-foreground text-sm mt-1">
                        52% of votes
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="bg-secondary rounded-full px-2 py-1 text-xs text-secondary-foreground">
                          Republican
                        </div>
                        <div>John Smith</div>
                      </div>
                      <div className="text-muted-foreground text-sm mt-1">
                        48% of votes
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-muted text-muted-foreground py-6 px-4 md:px-6">
        <div className="container mx-auto text-center text-sm">
          &copy; 2024 Election Results. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
