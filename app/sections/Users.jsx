import BackgroundPath from "../components/BackgroundPath";
import UserCard from "../components/UserCard";

const Users = () => {
  return (
    <div className="relative overflow-hidden flex flex-col min-w-full max-w-full h-auto justify-center bg-brown px-16 py-24 gap-[110px] z-[1]">
      <BackgroundPath
        styles="absolute z-0 right-[-200px] top-[-40%]"
        color="#fbfbfb"
        opacity="0.4"
      />
      <div className="flex flex-col justify-center items-center gap-8 z-[2]">
        <h1 className="font-ebgaramond font-medium text-6xl text-center text-white w-[700px] leading-tight">
          Meet Our Culinary Community
        </h1>
        <p className="font-opensans font-light text-lg text-white text-center leading-8 tracking-wider w-[500px]">
          Explore the Profiles of Passionate Bakers and Pie Enthusiasts
        </p>
      </div>
      <div className="flex justify-between items-center px-10">
        <UserCard name="Isabella Rodriguez" username="@BakeWithBella" />
        <UserCard name="Isabella Rodriguez" username="@BakeWithBella" />
        <UserCard name="Isabella Rodriguez" username="@BakeWithBella" />
      </div>
    </div>
  );
};

export default Users;
