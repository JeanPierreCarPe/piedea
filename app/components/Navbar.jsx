import { logo } from "@/public/assets/images"
import Image from "next/image"

const Navbar = () => {
  return (
    <div className="w-screen h-[70px] bg-white fixed z-[1000] flex justify-center items-center shadow-md">
        <ul className="flex justify-center items-center gap-16">
            <li className="font-opensans capitalize text-base text-brown tracking-wider"><a href="/">home</a></li>
            <li className="font-opensans capitalize text-base text-brown tracking-wider">about us</li>
            <Image src={logo} alt='' height={55} /> 
            <li className="font-opensans capitalize text-base text-brown tracking-wider"><a href="/recipes">recipes</a></li>
            <li className="font-opensans capitalize text-base text-brown tracking-wider">blog</li>
        </ul>
    </div>
  )
}

export default Navbar