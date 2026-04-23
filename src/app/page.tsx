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
      <main style={{ paddingTop: "64px" }}>
        <section id="home">
          <HeroSection />
        </section>
        <StatsStrip />
        <section id="about">
          <AboutSection />
        </section>
        <section id="reviews">
          <Reviews />
        </section>
        <section id="education">
          <VideoSection />
        </section>
        <Footer />
      </main>
    </>
  );
}
