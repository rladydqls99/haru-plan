import DailyPlan from "@/components/widgets/daily-plan";
import Footer from "@/components/widgets/footer";
import Header from "@/components/widgets/header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 flex">
        <div className="max-w-[1280px] w-full mx-auto py-8  px-4 sm:px-6 lg:px-8">
          <DailyPlan />
        </div>
      </main>
      <Footer />
    </div>
  );
}
