"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [stravaId, setStravaId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Submitted Strava ID: ${stravaId}`);
    // TODO: Implement Strava API integration and roast generation
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-24">
      <div className="w-full max-w-md space-y-6 sm:space-y-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center">Stravburn🔥</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="Enter your Strava ID"
            value={stravaId}
            onChange={(e) => setStravaId(e.target.value)}
            required
            className="w-full text-base sm:text-lg"
          />
          <Button
            type="submit"
            className="w-full font-medium text-base sm:text-lg bg-[#FC4C02] hover:bg-[#e64502] text-white"
          >
            Roast Me!
          </Button>
        </form>
      </div>
    </div>
  )
}