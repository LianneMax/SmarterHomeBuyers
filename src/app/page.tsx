import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsStrip from "@/components/StatsStrip";
import AboutSection from "@/components/AboutSection";
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
        <section id="about" style={{ scrollMarginTop: "74px" }}>
          <AboutSection />
        </section>
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
