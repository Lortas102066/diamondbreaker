import Image from 'next/image'
export default function Component() {
  const link = "https://docs.google.com/forms/d/e/1FAIpQLSfdOD8TSZpCkxhMFBfBoxLAAulzIQry6R7dNF0PTWgf_m-sFA/viewform?fbclid=PAZXh0bgNhZW0CMTEAAaapUSdXg3q7NG9Muxvdge-31IuAuMX-NKCwmhp5bEG13hwED32AuwnQif8_aem_CwvYxZM0qVmXutCqjwgO_g";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#000000] px-4 py-12">
      <div className="relative w-full max-w-4xl mx-auto">
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 space-y-4 p-4">
          <div>
            <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl box-content font-extrabold text-transparent text-center select-none">
              Diamond Breaker Club
            </span>
            <h1
                className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
                Diamond Breaker Club
            </h1>
          </div>
          <div>
          <div className="relative inline-flex  group">
              <div
                  className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
              </div>
              <a href={link} title="Register Now"
                  className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button">Register Now
              </a>
          </div>
          </div>
        </div>
        
        <div className="relative w-full h-0 pb-[64%]">
          <Image
            src="/balls.png"
            alt="Billiard balls arranged in triangle formation"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-25"
            layout="fill"
            priority
          />
        </div>
      </div>
    </div>
  )
}
