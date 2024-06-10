import PortfolioSection from "@/app/PortfolioSection";
import MainHeader from "./MainHeader";
import { RiNextjsFill } from "react-icons/ri";

export default function Home() {
  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-scroll">
      <div className="container mx-auto">
        <section className="snap-start snap-always h-screen">
          <MainHeader />
        </section>
        <section className="snap-start snap-always h-screen">
          <PortfolioSection />
        </section>
      </div>
      <RiNextjsFill />
    </main>
  );
}
