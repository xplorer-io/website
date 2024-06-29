import HeroSlider from "@/components/layout/heroSlider";
import MarqueeBanner from "@/components/layout/marqueeBanner";
import JoinXplorers from "@/components/layout/joinXplorers";
import "swiper/css/bundle";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <MarqueeBanner />
      <JoinXplorers />
    </main>
  );
}
