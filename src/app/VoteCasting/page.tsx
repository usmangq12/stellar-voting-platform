"use client";
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import axios from 'axios';

export default function VoteCasting() {
  const [selectedCandidate, setSelectedCandidate] = useState<string | null>(null);
  const [userPublicKey, setUserPublicKey] = useState('');
  const [userSecretKey, setUserSecretKey] = useState('');

  const handleVote = async () => {
    if (!selectedCandidate || !userPublicKey || !userSecretKey) {
      alert('Please complete all fields');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/vote/cast-vote', {
        candidateId: selectedCandidate,
        userPublicKey,
        userSecretKey
      });
      alert('Vote cast successfully');
    } catch (error) {
      console.error('Error casting vote:', error);
      alert('Failed to cast vote');
    }
  };

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      {/* Candidate list and details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {[
          // Example candidates
          {
            id: '1',
            name: "John Doe",
            photo: "/placeholder-user.jpg",
            bio: "John Doe is a seasoned politician...",
            platform: "Improve infrastructure...",
            party: "Democratic",
            position: "Mayor",
            experience: "15+ years in public service",
            twitter: "https://twitter.com/johndoe",
          },
          // More candidates...
        ].map((candidate, index) => (
          <Card key={index} className="flex flex-col">
            <div className="flex items-center gap-4">
              <img src={candidate.photo} alt={candidate.name} width={80} height={80} className="rounded-full" />
              <div>
                <h3 className="text-lg font-semibold">{candidate.name}</h3>
                <p className="text-muted-foreground">{candidate.position}</p>
              </div>
            </div>
            <CardContent className="flex-1 mt-4">
              <p className="text-muted-foreground">{candidate.bio}</p>
              <div className="mt-4">
                <p className="font-semibold">Platform:</p>
                <p className="text-muted-foreground">{candidate.platform}</p>
              </div>
              <div className="mt-4">
                <p className="font-semibold">Party Affiliation:</p>
                <p className="text-muted-foreground">{candidate.party}</p>
              </div>
              <div className="mt-4">
                <p className="font-semibold">Experience:</p>
                <p className="text-muted-foreground">{candidate.experience}</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <Link href={candidate.twitter} target="_blank" className="text-primary underline" prefetch={false}>
                Twitter
              </Link>
              <Popover>
                <PopoverTrigger asChild>
                  <Button onClick={() => setSelectedCandidate(candidate.id)}>Vote</Button>
                </PopoverTrigger>
                <PopoverContent className="p-4 w-[300px]">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Confirm your vote</h3>
                    <p>
                      You are about to cast your vote for <strong>{candidate.name}</strong> for the position of{" "}
                      <strong>{candidate.position}</strong>. Are you sure you want to proceed?
                    </p>
                    <div className="space-y-2">
                      <Input placeholder="Your public key" value={userPublicKey} onChange={(e) => setUserPublicKey(e.target.value)} required />
                      <Input placeholder="Your secret key" type="password" value={userSecretKey} onChange={(e) => setUserSecretKey(e.target.value)} required />
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button variant="secondary">Cancel</Button>
                      <Button onClick={handleVote}>Confirm Vote</Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
