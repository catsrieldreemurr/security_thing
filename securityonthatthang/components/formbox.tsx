import { ReactNode } from "react";

interface props{
    children?: ReactNode
}

export default function Box({children}:props){
    return <div className="flex flex-col justify-center p-3 items-center text-white text-center">
        {children}
    </div>
}