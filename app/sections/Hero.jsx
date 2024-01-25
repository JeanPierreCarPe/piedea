import { bgImage, img1 } from "@/public/assets/images";
import Button from "../components/Button";
import RecipeCard from "../components/RecipeCard";
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="relative overflow-hidden flex flex-col min-w-full h-screen justify-end items-center bg-none gap-10 px-16 pt-16 pb-8 z-[2] shadow-container">
      <Image src={bgImage} alt="bg-img" className="absolute right-[-900px] bottom-[-250px] z-0" />
      <Image src={bgImage} alt="bg-img" className="absolute left-[-900px] bottom-[-250px] z-0 -scale-x-100" />
      <div className="flex flex-col gap-8 z-10 justify-center items-center">
        <h1 className="font-ebgaramond font-medium text-6xl text-center text-brown w-[700px] leading-tight">
          Discover the Art of Pies - Share, Explore, and Create!
        </h1>
        <div className="flex gap-8">
            <Button type='solid' text="get started" />
            <Button type='outline' text="explore now" />
        </div>
      </div>
      <div className="flex flex-col gap-5 z-10 w-full">
        <h5 className="font-ebgaramond font-medium text-2xl text-brown capitalize">
          popular recipes
        </h5>
        <div className="flex justify-between">
          <RecipeCard name='strawberry blueberry pie' image={img1} />
          <RecipeCard name='strawberry blueberry pie' image={img1} />
          <RecipeCard name='strawberry blueberry pie' image={img1} />
          <RecipeCard name='strawberry blueberry pie' image={img1} />
          <RecipeCard name='strawberry blueberry pie' image={img1} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
