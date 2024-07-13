import {CommunityBenefits} from "@/modules/home/communityBenefits/communityBenefits";

export default function Home() {
  return (
    <main className="grid h-screen place-items-center">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-4">
          <h1 className="font-bold text-primary">Welcome to Xplorers!</h1>
          <hr className="my-2 h-1 w-48 rounded border-0 bg-secondary" />
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam eum
          reiciendis accusantium itaque deleniti in ipsum fugiat eligendi
          assumenda exercitationem dicta et perferendis, eveniet tempore libero
          modi praesentium at placeat.
        </p>
      </div>
      <CommunityBenefits/>
    </main>
  );
}
