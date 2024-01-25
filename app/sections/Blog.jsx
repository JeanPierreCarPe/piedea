import BackgroundPath from "../components/BackgroundPath";
import BlogCard from "../components/BlogCard";

const Blog = () => {
  return (
    <div className="relative overflow-hidden flex flex-col min-w-full h-auto justify-center items-center bg-none px-16 py-24 gap-8 z-[2] shadow-container">
      <BackgroundPath
        styles="absolute z-0 right-[-200px] top-[-10%]"
        color="#F0C895"
        opacity="0.7"
      />
      <BackgroundPath
        styles="absolute z-0 left-[-200px] bottom-[-10%]"
        color="#F0C895"
        opacity="0.7"
      />
      <div className="flex flex-col justify-center items-center gap-8 z-[2]">
        <h1 className="font-ebgaramond font-medium text-6xl text-center text-brown w-[700px] leading-tight">
          Pie Chronicles: Stories from the Oven
        </h1>
        <p className="font-opensans text-lg text-brown text-center leading-8 tracking-wider w-[500px]">
          A Journey through the World of Pies, Recipes, and Culinary Adventures
        </p>
      </div>
      <div className="w-full h-auto flex flex-col justify-center items-center gap-12 z-[2]">
        <BlogCard
          username="Eva PieArtist"
          date="01 Aug 2024"
          postName="Pie Artistry Unveiled"
          tags={["artistry", "creative baking", "pie designs"]}
          description="Join Eva PieArtist as she unveils her creative process, turning pies into canvases for imagination."
          likes={125}
          styles="self-start"
        />
        <BlogCard
          username="Eva PieArtist"
          date="01 Aug 2024"
          postName="Pie Artistry Unveiled"
          tags={["artistry", "creative baking", "pie designs"]}
          description="Join Eva PieArtist as she unveils her creative process, turning pies into canvases for imagination."
          likes={125}
          styles="self-end"
        />
        <BlogCard
          username="Eva PieArtist"
          date="01 Aug 2024"
          postName="Pie Artistry Unveiled"
          tags={["artistry", "creative baking", "pie designs"]}
          description="Join Eva PieArtist as she unveils her creative process, turning pies into canvases for imagination."
          likes={125}
          styles="self-start"
        />
        <BlogCard
          username="Eva PieArtist"
          date="01 Aug 2024"
          postName="Pie Artistry Unveiled"
          tags={["artistry", "creative baking", "pie designs"]}
          description="Join Eva PieArtist as she unveils her creative process, turning pies into canvases for imagination."
          likes={125}
          styles="self-end"
        />
      </div>
    </div>
  );
};

export default Blog;
