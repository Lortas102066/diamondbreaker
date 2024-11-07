"use client";
import Image from 'next/image';
import { useRouter } from "next/navigation"


export default function About() {
  const router = useRouter();
  const handleClick = () => {
    router.push("https://docs.google.com/forms/d/e/1FAIpQLSfdOD8TSZpCkxhMFBfBoxLAAulzIQry6R7dNF0PTWgf_m-sFA/viewform?fbclid=PAZXh0bgNhZW0CMTEAAaapUSdXg3q7NG9Muxvdge-31IuAuMX-NKCwmhp5bEG13hwED32AuwnQif8_aem_CwvYxZM0qVmXutCqjwgO_g");
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#282828] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl w-full mx-auto space-y-20 sm:space-y-24 lg:space-y-32">
        {/* About Us Section */}
        <section>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 sm:mb-16">About Us</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
            {/* Image */}
            <div className="relative">
              <Image
                src="/4ball.webp"
                alt="Billiard balls showing numbers 1, 3, and 8"
                width={500}
                height={400}
                className="w-full h-auto opacity-75"
              />
            </div>

            {/* Content */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Best Place for Snookers
              </h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                At the University Snooker Club, we invite students to join us in the art and sport of snooker. Whether you&apos;re a seasoned player or new to the cue, our club provides the perfect setting to improve your skills, meet new friends, and engage in friendly competition.
              </p>
              <button 
                className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] hover:bg-white hover:text-black px-8 py-2 bg-[#fff] text-[#696969] rounded-md font-bold transition duration-200 ease-linear text-2xl hover:scale-105"
                onClick={handleClick}
              >
                Register Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
