"use client";
import { Button } from "@/components/ui/buttons/button";
import { CldImage } from "next-cloudinary";
import css from "./joinXplorers.module.css";
import { joinXplorersGoogleFormUrl } from "@/constants";

const JoinXplorers = () => {
  return (
    <div className="flex justify-center px-5 py-10">
      <a target="_blank" href={joinXplorersGoogleFormUrl}>
        <Button
          id={css.requestToJoinButton}
          className="bg-primary-800 text-base hover:bg-primary md:text-xl dark:bg-primary-400 dark:text-white dark:hover:bg-primary"
          size={"hero"}
        >
          <span className="mr-3"> Request to join Xplorers</span>
          <CldImage
            src="https://res.cloudinary.com/dumkkicev/image/upload/v1729578498/slack_logo_udhx77.svg"
            alt="slack icon"
            width={30}
            height={30}
            crop="fit"
            format="svg"
          />
        </Button>
      </a>
    </div>
  );
};
export default JoinXplorers;
