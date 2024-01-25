import BackgroundPath from "../components/BackgroundPath";
import RecipeCard from "../components/RecipeCard";
import { Footer } from "../sections";

const data = [
  "Classic Pies",
  "Fruit-filled Pies",
  "Citrus Pies",
  "Nutty Delights",
  "Seasonal Specials",
  "Chocolate Bliss",
  "Creative Creations",
  "Healthy Options",
  "International Flavors",
  "Quick & Easy Pies",
];

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-[1440px] flex-col items-center justify-between bg-white">
      <div className="relative overflow-hidden flex flex-col min-w-full h-auto items-center bg-none gap-10 px-16 pt-20 pb-16 z-[2] shadow-container">
        <BackgroundPath
          styles="absolute z-0 left-[-200px] top-[-30%]"
          color="#F0C895"
          opacity="0.5"
        />
        <BackgroundPath
          styles="absolute z-0 right-[-200px] bottom-[-30%]"
          color="#F0C895"
          opacity="0.5"
        />
        <h1 className="font-ebgaramond font-medium text-6xl text-center text-brown w-[700px] leading-tight">
          Recipes
        </h1>
        <div className="w-full flex justify-between gap-8">
          <ul className="flex flex-col gap-4">
            {data?.map((item) => (
              <li
                key={item}
                className="font-opensans font-semibold capitalize text-base text-brown tracking-wider"
              >
                <a>{item}</a>
              </li>
            ))}
            <hr />
            <li className="font-opensans font-semibold capitalize text-base text-brown tracking-wider">
              <a>popular</a>
            </li>
            <li className="font-opensans font-semibold capitalize text-base text-brown tracking-wider">
              <a>recent</a>
            </li>
          </ul>
          <div className="flex flex-wrap max-w-[900px] w-fit justify-around gap-y-8">
            <RecipeCard name="strawberry blueberry pie" />
            <RecipeCard name="strawberry blueberry pie" />
            <RecipeCard name="strawberry blueberry pie" />
            <RecipeCard name="strawberry blueberry pie" />
            <RecipeCard name="strawberry blueberry pie" />
            <RecipeCard name="strawberry blueberry pie" />
            <RecipeCard name="strawberry blueberry pie" />
            <RecipeCard name="strawberry blueberry pie" />
            <RecipeCard name="strawberry blueberry pie" />
            <RecipeCard name="strawberry blueberry pie" />
            <RecipeCard name="strawberry blueberry pie" />
            <RecipeCard name="strawberry blueberry pie" />
            <RecipeCard name="strawberry blueberry pie" />
            <RecipeCard name="strawberry blueberry pie" />
            <RecipeCard name="strawberry blueberry pie" />
            <RecipeCard name="strawberry blueberry pie" />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
