import BackgroundPath from "../components/BackgroundPath";
import Button from "../components/Button";

const CTA = () => {
  return (
    <div className="relative overflow-hidden flex flex-col min-w-full h-auto justify-center bg-brown px-16 py-16 gap-[110px] z-[1]">
      <BackgroundPath
        styles="absolute z-0 right-[-200px] top-[20%]"
        color="#fbfbfb"
        opacity='0.4'
      />
      <div className="flex flex-col justify-center items-center gap-8 z-[2]">
        <h1 className="font-ebgaramond font-medium text-6xl text-center text-white w-[700px] leading-tight">
          Join the Pie Party!
        </h1>
        <p className="font-opensans text-lg text-white text-center leading-8 tracking-wider w-[500px]">
          Become a part of the Piedea community and share your pie masterpieces
          with the world.
        </p>
        <Button type="solid" text="join now" styles="w-[500px]" />
      </div>
    </div>
  );
};

export default CTA;
