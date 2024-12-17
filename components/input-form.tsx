"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, FormEvent } from "react";

export default function InputForm() {
  const [value, setValue] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Submitted: ${value}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-w-md mx-auto mt-10"
    >
      <Input
        type="text"
        placeholder="Enter username"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="p-2"
      />
      <Button
        type="submit"
        className="bg-[#FC4C02] hover:bg-[#e64502] text-white font-medium"
      >
        Roast
      </Button>
    </form>
  );
}