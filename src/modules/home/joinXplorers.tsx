import { Button } from "@/components/ui/buttons/button";
import slackIcon from "@public/icons/slack_logo.svg";
import Image from "next/image";
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
          <Image src={slackIcon} alt="slack icon" width={30} height={30} />
        </Button>
      </a>
    </div>
  );
};
export default JoinXplorers;
