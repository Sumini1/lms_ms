import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Program from "../components/Program";
import Testimonial from "../components/Testimonial";
import Video from "../components/Video";

export default function Home() {
  return (
    <div className="pt-12 bg-slate-200 min-h-screen">
      <Hero />
      <Program />
      <Video />
      <Testimonial />
      <div className="w-full h-screen">
        <div className="container p-4 w-[60%] ">
          <Faq />
        </div>
        <Footer />
      </div>
    </div>
  );
}
