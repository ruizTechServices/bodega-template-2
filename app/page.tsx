//C:\Users\Gio\OneDrive\Desktop\ruizTechServices\nextjs\bodega-template-2\app\page.tsx
import { Hero } from "../components/home/Hero";
import { FeaturedCategories } from "../components/home/FeaturedCategories";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8 lg:p-12">
      <FeaturedCategories />{/* These are the cards */}
      <Hero />
      {/* More Sections required... */}
    </main>
  );
}
{/*This is the homepage of the bodega template. All pages must be server-side and all inclusions must be components. 
  this way, consistency is maintained and Components can be removed and added efficiently */}
