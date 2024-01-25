import Image from "next/image";

const RecipeCard = (props) => {
  const { image, name, type } = props;

  if (type === 'popular') {
    return (
      <div
        className={`overflow-hidden relative flex-1 bg-[url('/assets/images/img-1.jpg')] bg-cover bg-center flex items-end rounded-2xl shadow-card hover:scale-110 transition-all`}
      >
        <div className="w-full h-[60px] bg-white flex justify-center items-center">
          <p className="font-opensans text-lg font-medium tracking-wider capitalize text-center text-brown px-3">
            {name}
          </p>
        </div>
      </div>
    );
  }
  else {
    return (
      <div
        className={`overflow-hidden relative w-[200px] h-[215px] bg-[url('/assets/images/img-1.jpg')] bg-cover bg-center flex items-end rounded-2xl shadow-card hover:scale-110 transition-all`}
      >
        <div className="w-full h-[60px] bg-white flex justify-center items-center">
          <p className="font-opensans text-sm font-medium tracking-wider capitalize text-center text-brown px-3">
            {name}
          </p>
        </div>
      </div>
    );
  }
  
};

export default RecipeCard;
