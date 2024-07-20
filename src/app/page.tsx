import HeroSlider from "@/modules/home/heroSlider";
import MarqueeBanner from "@/modules/home/marqueeBanner";
import JoinXplorers from "@/modules/home/joinXplorers";
import { CommunityBenefits } from "@/modules/home/communityBenefits/communityBenefits";
import "swiper/css/bundle";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <MarqueeBanner />
      <JoinXplorers />
      <CommunityBenefits />
    </main>
  );
}
