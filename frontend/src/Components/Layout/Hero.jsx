import heroImg from "../../images/hero-img.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative h-[900px] md:h-[750px]">
      {/* Background Image */}
      <img src={heroImg} alt="aura" className="w-full h-full object-cover" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <div className="text-center text-white px-4 sm:px-6">
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter uppercase mb-4">
            Break <br className="hidden sm:block" /> Ready
          </h1>

          <p className="text-sm sm:text-base md:text-lg tracking-tight mb-6 max-w-xl mx-auto">
            Step into vacation mode – Shop lightweight, luxe outfits now!
          </p>

          <Link
            to="#"
            className="bg-white text-gray-950 px-6 py-2 rounded-sm text-base sm:text-lg hover:bg-gray-100 transition"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
