import Footer from "@/components/widgets/footer";
import Header from "@/components/widgets/header";
import TaskSchedule from "@/components/widgets/task-schedule";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="max-w-[1280px] flex-1 mx-auto  px-4 sm:px-6 lg:px-8  py-8">
        <TaskSchedule />
      </main>
      <Footer />
    </div>
  );
}
