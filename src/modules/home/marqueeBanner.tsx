"use client";
import { CldImage } from "next-cloudinary";

const Divider = () => {
  return (
    <span
      aria-hidden="true"
      className="block h-2 w-2 shrink-0 rounded-full bg-slate-800"
    ></span>
  );
};

const Banner = () => {
  return (
    <>
      <CldImage
        src="xplorer_logo_pjyd96"
        alt="logo"
        width={96}
        height={96}
        loading="lazy"
      />
      <Divider />
      <p>Learn</p>
      <Divider />
      <p>Share</p>
      <Divider />
      <p>Grow</p>
      <Divider />
    </>
  );
};

const MarqueeContent = ({ ariaHidden }: { ariaHidden?: boolean }) => {
  return (
    <div
      className="marquee flex w-full shrink-0 items-center justify-evenly gap-6 text-xl"
      aria-hidden={ariaHidden}
    >
      <Banner />
    </div>
  );
};

const MarqueeBanner = () => {
  return (
    <div className="flex h-[50px] items-center gap-6 overflow-hidden bg-primary-50/15">
      <MarqueeContent />
      <MarqueeContent ariaHidden />
    </div>
  );
};
export default MarqueeBanner;
