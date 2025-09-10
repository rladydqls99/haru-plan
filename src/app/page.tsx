import Footer from "@/components/widgets/footer";
import Header from "@/components/widgets/header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="max-w-[1280px] flex-1 mx-auto px-4 sm:px-6 lg:px-8"></main>
      <Footer />
    </div>
  );
}
