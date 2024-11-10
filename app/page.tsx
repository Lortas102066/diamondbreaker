"use client";
import Image from 'next/image'
import { useRouter } from "next/navigation"

export default function Component() {
  const router = useRouter();
  const handleClick = () => {
    router.push("https://docs.google.com/forms/d/e/1FAIpQLSfdOD8TSZpCkxhMFBfBoxLAAulzIQry6R7dNF0PTWgf_m-sFA/viewform?fbclid=PAZXh0bgNhZW0CMTEAAaapUSdXg3q7NG9Muxvdge-31IuAuMX-NKCwmhp5bEG13hwED32AuwnQif8_aem_CwvYxZM0qVmXutCqjwgO_g");
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#282828] px-4 py-12">
      <div className="relative max-w-4xl w-full">
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 space-y-4">
          <p className="text-3xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 whitespace-nowrap">
            Diamond Breaker Club
          </p>
          <p className="text-xl md:text-2xl text-gray-300">
            La Trobe University
          </p>
          <button 
            className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] hover:bg-white hover:text-black px-8 py-2 bg-[#fff] text-[#696969] rounded-md font-bold transition duration-200 ease-linear text-2xl hover:scale-105"
            onClick={handleClick}
          >
            Register Now
          </button>
        </div>
        
        
        <Image
          src="/balls.png"
          alt="Billiard balls arranged in triangle formation"
          className="w-full h-auto opacity-25"
          width={690}
          height={444}
          priority
        />
      </div>
    </div>
  )
}