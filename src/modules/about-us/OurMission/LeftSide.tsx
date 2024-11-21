import Image from "next/image";
type LeftSideProps = {
  title: string;
  description: string;
  imageSrc: string;
};

const LeftSide = ({ title, description, imageSrc }: LeftSideProps) => (
  <div className="relative flex flex-col-reverse gap-2 lg:flex-row lg:gap-4">
    <div className="relative h-32 overflow-hidden lg:w-3/5">
      <div className="absolute -left-8 h-full w-full skew-x-[20deg] bg-primary-600"></div>
      <div className="relative h-full px-8">
        <div className="flex h-full flex-col justify-center gap-2 px-8">
          <h4 className="non-italic text-md leading-tight text-white">
            {title}
          </h4>
          <p className="text-sm leading-tight text-stone-300 md:text-base">
            {description}
          </p>
        </div>
      </div>
    </div>
    <div className="flex justify-center">
      <Image
        src={imageSrc}
        alt="community engagement"
        className="h-36 content-center lg:h-48"
      />
    </div>
  </div>
);

export default LeftSide;
