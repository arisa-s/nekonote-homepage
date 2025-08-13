export const HeroSection = () => {
  return (
    <div className="flex flex-col px-6 md:px-6 py-12 md:py-20 w-full max-w-[1800px] mx-auto space-y-6 md:space-y-16">
      <h1 className="text-5xl md:text-8xl font-light">
        We are <span className="font-accent text-accent">design</span> and{" "}
        <span className="font-accent text-accent">development</span> studio that
        turns ideas into{" "}
        <span className="font-accent text-accent">
          beautifully crafted software
        </span>
        .
      </h1>
    </div>
  );
};

export default HeroSection;
