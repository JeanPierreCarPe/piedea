import Button from "./Button";

const UserCard = (props) => {
  const { image, name, username } = props;
  return (
    <div className=" relative w-[300px] h-auto flex flex-col bg-white justify-center items-center pt-[85px] pb-[25px] px-5 rounded-3xl gap-5 shadow-card">
      <div className="absolute w-[150px] h-[150px] bg-[url('/assets/images/user-img.jpg')] bg-cover top-[-75px] rounded-xl"></div>
      <div className="flex flex-col gap-1">
        <h1 className="font-ebgaramond font-medium text-xl text-center text-brown leading-tight">{name}</h1>
        <p className="font-opensans text-sm text-brown text-center leading-8 tracking-wider">{username}</p>
      </div>
      <div className="flex flex-wrap gap-5 justify-center items-center">
        <div className="w-[120px] h-[120px] rounded-xl bg-[url('/assets/images/img-1.jpg')] bg-cover bg-center"></div>
        <div className="w-[120px] h-[120px] rounded-xl bg-[url('/assets/images/img-1.jpg')] bg-cover bg-center"></div>
        <div className="w-[120px] h-[120px] rounded-xl bg-[url('/assets/images/img-1.jpg')] bg-cover bg-center"></div>
        <div className="w-[120px] h-[120px] rounded-xl bg-[url('/assets/images/img-1.jpg')] bg-cover bg-center"></div>
      </div>
      <Button type='solid' text='see profile' styles='w-full' route={"/user"} />
    </div>
  );
};

export default UserCard;
