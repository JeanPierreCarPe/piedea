import BackgroundPath from "../components/BackgroundPath";
import Button from "../components/Button";
import RecipeCard from "../components/RecipeCard";

const FeaturedRecipes = () => {
  return (
    <div className="relative overflow-hidden flex flex-col min-w-full h-auto justify-center items-center bg-none px-16 py-24 gap-8 z-[2] shadow-container">
      <BackgroundPath
        styles="absolute z-0 right-[-200px] top-[-10%]"
        color="#F0C895"
        opacity="0.7"
      />
      <BackgroundPath
        styles="absolute z-0 left-[-200px]"
        color="#F0C895"
        opacity="0.7"
      />
      <BackgroundPath
        styles="absolute z-0 right-[-200px] bottom-[-10%]"
        color="#F0C895"
        opacity="0.7"
      />
      <div className="flex flex-col justify-center items-center gap-8 z-[2]">
        <h1 className="font-ebgaramond font-medium text-6xl text-center text-brown w-[700px] leading-tight">
          User-Crafted Delights
        </h1>
        <p className="font-opensans text-lg text-brown text-center leading-8 tracking-wider w-[500px]">
          Explore the Profiles of Passionate Bakers and Pie Enthusiasts
        </p>
      </div>
      <div className="w-full flex flex-col gap-[100px] z-[2]">
        <div className="flex flex-col items-center gap-8">
          <h1 className="font-ebgaramond font-medium text-5xl text-brown leading-tight w-full">
            Classics
          </h1>
          <div className="flex w-full gap-10">
            <div className="max-w-[700px] flex flex-wrap justify-between gap-y-7">
              <RecipeCard name="strawberry blueberry pie" />
              <RecipeCard name="strawberry blueberry pie" />
              <RecipeCard name="strawberry blueberry pie" />
              <RecipeCard name="strawberry blueberry pie" />
              <RecipeCard name="strawberry blueberry pie" />
              <RecipeCard name="strawberry blueberry pie" />
            </div>
            <RecipeCard type="popular" name="strawberry blueberry pie" />
          </div>
          <Button type="solid" text="see more" styles="w-[300px]" />
        </div>
        <div className="flex flex-col items-center gap-8">
          <h1 className="font-ebgaramond font-medium text-5xl text-brown leading-tight w-full">
            Gluten-free
          </h1>
          <div className="flex w-full gap-10">
            <RecipeCard type="popular" name="strawberry blueberry pie" />
            <div className="max-w-[700px] flex flex-wrap justify-between gap-y-7">
              <RecipeCard name="strawberry blueberry pie" />
              <RecipeCard name="strawberry blueberry pie" />
              <RecipeCard name="strawberry blueberry pie" />
              <RecipeCard name="strawberry blueberry pie" />
              <RecipeCard name="strawberry blueberry pie" />
              <RecipeCard name="strawberry blueberry pie" />
            </div>
          </div>
          <Button type="solid" text="see more" styles="w-[300px]" />
        </div>
        <div className="flex flex-col items-center gap-8">
          <h1 className="font-ebgaramond font-medium text-5xl text-brown leading-tight w-full">
            Modern Twists
          </h1>
          <div className="flex w-full gap-10">
            <div className="max-w-[700px] flex flex-wrap justify-between gap-y-7">
              <RecipeCard name="strawberry blueberry pie" />
              <RecipeCard name="strawberry blueberry pie" />
              <RecipeCard name="strawberry blueberry pie" />
              <RecipeCard name="strawberry blueberry pie" />
              <RecipeCard name="strawberry blueberry pie" />
              <RecipeCard name="strawberry blueberry pie" />
            </div>
            <RecipeCard type="popular" name="strawberry blueberry pie" />
          </div>
          <Button type="solid" text="see more" styles="w-[300px]" />
        </div>
        <div className="flex flex-col items-center gap-8">
          <h1 className="font-ebgaramond font-medium text-5xl text-brown leading-tight w-full">
            Galletes
          </h1>
          <div className="flex w-full gap-10">
            <RecipeCard type="popular" name="strawberry blueberry pie" />
            <div className="max-w-[700px] flex flex-wrap justify-between gap-y-7">
              <RecipeCard name="strawberry blueberry pie" />
              <RecipeCard name="strawberry blueberry pie" />
              <RecipeCard name="strawberry blueberry pie" />
              <RecipeCard name="strawberry blueberry pie" />
              <RecipeCard name="strawberry blueberry pie" />
              <RecipeCard name="strawberry blueberry pie" />
            </div>
          </div>
          <Button type="solid" text="see more" styles="w-[300px]" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedRecipes;
