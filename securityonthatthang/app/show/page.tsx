"use client"
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/topbar";
import { useEffect, useState } from "react";

interface userInfo{
    name: string
    email: string
    address: string
}

interface users{
    users: userInfo[]
}

export default function Page(){
    function tagResult(input:string){
        let string = ""
        for(let i = 0; i < input.length; i++){
            if(input[i] === " "){
                string = string + " "
            }

            else {
                string = string + "*"
            }
            
        }

        return string
    }

    async function RemoveData(id:number){
            const res = await fetch("/api/removeFromJSON", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                id: id
            })
        });

        if(res.status === 400){
            console.log("hi");
        } 
        if(res.status === 200){
            location.reload();
        }
        console.log(res);
    }


    useEffect(() => {
        async function FetchData(){
            const req = await fetch('/api/readJSON')
            const Vardata = await req.json();

            console.log(Vardata)

            try{
                if(req.status === 200 && Array.isArray(Vardata.users)){
                    setData(Vardata.users);
                    setHasFailed(false)
                }

                else {
                    setData([])
                    setHasFailed(req.status !== 200 || false);
                }
            } catch(err){
                setHasFailed(true)
                setData([])
            }
            
            console.log(Vardata)
        }
        FetchData();
    }, [])

    const [data, setData] = useState<userInfo[] | null>(null)
    const [hasFailed, setHasFailed] = useState(false)

    return (
        <div className="bg-[url(/ironlungbg2.png)] bg-cover bg-scroll min-h-screen h-full">
            <Navbar></Navbar>
            <div className="flex justify-center flex-col items-center">
                <div className="mt-10 bg-black/75 sm:w-1/3 p-5 rounded-sm">
                    <h1 className="text-white text-3xl font-bold text-center">Registrerte Blodgivere:</h1>
                </div>
                {   
                    data ? <div>
                    {data.map((index, key) => {
                        return (
                            <div key={key} className="text-white text-center bg-black/75 rounded-xl p-5 m-2">
                                <h1 className="text-2xl font-bold">#{key}</h1>
                                <p>Name: {index.name}</p>
                                <p>Email: {tagResult(index.email)}</p>
                                <p>Address: {tagResult(index.address)}</p>

                                <Button onClick={() => {
                                    RemoveData(key)
                                }} className="bg-gray-800 mt-5">Delete</Button>
                            </div>
                        )
                    })}
                    </div>
                    : <div>
                        <h1 className="text-white text-center">Something went Wrong.</h1>
                    </div>
                }  
                </div>
            
        </div>
    )
}