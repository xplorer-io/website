import Image from "next/image";
import logo from "@public/images/logos/xplorer_logo.svg";

const Divider = () => {
  return (
    <span className="block h-2 w-2 shrink-0 rounded-full bg-slate-800"></span>
  );
};

const Banner = () => {
  return (
    <>
      <Image src={logo} alt="logo" className="w-24" />
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

const MarqueeBanner = () => {
  return (
    <div className="flex h-[50px] items-center gap-10 overflow-hidden bg-primary-50/15">
      <div className="marquee flex w-auto shrink-0 items-center justify-evenly gap-10 text-xl xl:w-full">
        <Banner />
        <Banner />
      </div>
      <div
        className="marquee flex w-auto shrink-0 items-center justify-evenly gap-10 text-xl xl:w-full"
        aria-hidden="true"
      >
        <Banner />
        <Banner />
      </div>
    </div>
  );
};
export default MarqueeBanner;
