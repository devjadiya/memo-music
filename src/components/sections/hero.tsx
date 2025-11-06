export default function HeroSection() {
  return (
    <section id="home" className="relative h-dvh w-full overflow-hidden bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          {/* Content removed as the video is the main focus */}
      </div>
    </section>
  );
}
