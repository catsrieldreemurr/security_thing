"use client"
import Box from "@/components/formbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/ui/topbar";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
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
  return (
    <div className="bg-[url(/ironlungbg2.png)] h-screen bg-cover">
      <Navbar></Navbar>

      <div className="flex justify-center mt-20 p-5">
        <div className="text-white flex flex-col items-center p-5 justify-center bg-black/75 sm:w-2/3 rounded-lg text-center font-bold">
          <h1 className="font-bold text-4xl">Iron Lung Blood Drive</h1>
          <div className="text-slate-300">
            <p>For å feire utgivelsen av Iron Lung, sammarbeider vi med donasjonssentere over hele landet.</p>
            <p>Nå er det mulig å donere blod i noen deltagende kinoer over hele landet, i en kort periode.</p>
          </div>
        </div>
      </div>

      <div className="text-white font-bold flex flex-col justify-center items-center">
        <h1 className="sm:text-3xl mt-10">Registrer deg som blodgiver, redd liv</h1>

        <form className="mt-10" onSubmit={(e) => {
          e.preventDefault();
        }}>
          <Box>
            <Label className="text-lg font-bold">Navn</Label>
            <Input placeholder="Mark Edward Fischbach" className="w-[20rem] bg-black/75"></Input>
          </Box>

          <Box>
            <Label className="text-lg font-bold">Emailaddresse</Label>
            <Input placeholder="markiplier@gmail.com" className="w-[20rem] bg-black/75"></Input>
          </Box>

          <Box>
            <Label className="text-lg font-bold">Addresse / Bosted</Label>
            <Input placeholder="Dork Street 35" className="w-[20rem] bg-black/75"></Input>
          </Box>

          <div className="flex justify-center">
            <Button className="bg-red-700 border border-white">Registrer</Button>
          </div>
          
        </form>
      </div>
      
      
    </div>
  );
}
