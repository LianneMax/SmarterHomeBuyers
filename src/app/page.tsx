import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsStrip from "@/components/StatsStrip";
import Reviews from "@/components/Reviews";
import VideoSection from "@/components/VideoSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <StatsStrip />
        <div style={{ background: "var(--sand)", height: "2rem" }} />
        <section id="education" style={{ scrollMarginTop: "74px" }}>
          <VideoSection />
        </section>
        <section id="reviews" style={{ scrollMarginTop: "74px" }}>
          <Reviews />
        </section>
        <Footer />
      </main>
    </>
  );
}
