import DailyList from "@/components/widgets/daily-list";
import Footer from "@/components/widgets/footer";
import Header from "@/components/widgets/header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 flex">
        <div className="max-w-[1280px] w-full mx-auto py-8">
          <DailyList />
        </div>
      </main>
      <Footer />
    </div>
  );
}
