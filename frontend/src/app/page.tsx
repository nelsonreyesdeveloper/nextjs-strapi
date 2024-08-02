import { HeroSectionProps } from "@/components/custom/HeroSection";
import { blockRenderer, getHomePageData } from "@/data/loaders";

export default async function Home() {
  const { layout, blocks } = await getHomePageData();

  if (!blocks)
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-3xl font-bold text-center">No data found</h1>
      </div>
    );

  return (
    <>
      <div
        className={`${
          layout === "full_width" ? "w-full" : "w-[1140px] mx-auto"
        } `}
      >
        {blocks.map((block: HeroSectionProps) => blockRenderer(block))}
      </div>
    </>
  );
}
