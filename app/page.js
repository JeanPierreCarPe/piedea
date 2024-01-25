import { About, Blog, CTA, FeaturedRecipes, Footer, Hero, Users } from "./sections";

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-[1440px] flex-col items-center justify-between bg-white">
      <Hero />
      <About />
      <FeaturedRecipes />
      <Users />
      <Blog />
      <CTA />
      <Footer />
    </main>
  );
}
