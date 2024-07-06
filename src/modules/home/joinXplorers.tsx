import {Button} from "@/components/ui/buttons/button";

const JoinXplorers = () => {
  return (
    <div className="flex justify-center px-5 py-10">
      <Button
        className="bg-primary-400 text-base hover:bg-primary md:text-xl dark:bg-primary-400 dark:text-white dark:hover:bg-primary"
        size={"hero"}
      >
        Request to join Xplorers
      </Button>
    </div>
  );
};
export default JoinXplorers;
