"use client";
import { useRouter } from "next/navigation";

const Button = (props) => {
  const router = useRouter();
  const { route, styles, type, text } = props;

  if (type === "solid") {
    return (
      <button
        type="button"
        onClick={() => router.push(route)}
        className={`flex w-[215px] justify-center items-center py-3 capitalize bg-pink text-base text-white font-opensans font-medium tracking-wider rounded-xl hover:scale-105 transition-all ${styles}`}
      >
        {text}
      </button>
    );
  }

  if (type === "outline") {
    return (
      <button
        type="button"
        onClick={() => router.push(route)}
        className="flex w-[215px] justify-center items-center py-3 capitalize bg-none border-2 border-pink text-base text-pink font-opensans font-medium tracking-wider rounded-xl hover:scale-105 transition-all"
      >
        {text}
      </button>
    );
  }

  if (type === "outline-white") {
    return (
      <button
        type="button"
        onClick={() => router.push(route)}
        className="flex w-[215px] justify-center items-center py-3 capitalize bg-none border-2 border-white text-base text-white font-opensans font-medium tracking-wider rounded-xl hover:scale-105 transition-all"
      >
        {text}
      </button>
    );
  }
};

export default Button;
