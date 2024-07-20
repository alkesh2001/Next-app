'use client'

import Navbar from "@/component/Navbar";
import { usePathname } from "next/navigation";

const Home: React.FC =() => {

  const path  = usePathname()
  return ( 
    <div className="h-screen w-full text-black">
        <div className={`fixed  z-20 w-full  ${path == '/auth/login' ? "hidden" : ""}`}>
          <Navbar/>
        </div>
        <div>
          hdhjfdjhjd 
        </div>
    </div>
  );
}

export default Home