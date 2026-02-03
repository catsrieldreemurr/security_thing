"use client"
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    async function WriteWord() {
      const res = await fetch("/api/addToJSON", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                name: 'nameson',
                email: 'email@email.email' })
        });

        console.log(res);
    }

    WriteWord();
  }, [])
  return (
    <h1>test</h1>
  );
}
