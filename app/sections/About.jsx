import { aboutImg } from "@/public/assets/images";
import Button from "../components/Button";
import Image from "next/image";
import BackgroundPath from "../components/BackgroundPath";

const About = () => {
  return (
    <div className="relative overflow-hidden flex flex-col min-w-full h-[575px] justify-center bg-brown px-16 z-[1]">
      <Image src={aboutImg} alt="bg-img" className="absolute right-[-300px] z-[2]" />
      <BackgroundPath styles='absolute z-0 right-[-200px]' color='#fbfbfb' opacity='0.4' />
      <div className="flex flex-col gap-10 w-[490px] z-[2]">
        <h2 className="font-ebgaramond font-medium text-white text-5xl">
          Welcome to Piedea!
        </h2>
        <p className="font-opensans text-base text-white leading-8 tracking-wider">
          Piedea is a vibrant online community for pie lovers and creators.
          We`re not just about recipes; we`re a celebration of the artistry,
          flavors, and joy that pies bring to our lives.
          <br />
          <br />
          Whether you`re a seasoned pro or just starting, Piedea is your virtual
          kitchen. Share your recipes, discover new ones, and join a community
          passionate about all things pie.
        </p>
        <Button type="outline-white" text="read more" />
      </div>
    </div>
  );
};

export default About;
