import { DefaultLayout, LeftLanding, RightLanding } from "@/components";

export default function Home() {
  return (
    <DefaultLayout>
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center min-h-[80vh] max-w-6xl mx-auto px-4 py-8 w-full">
        <LeftLanding />
        <RightLanding />
      </div>
    </DefaultLayout>
  );
}
