export const AboutSection = () => {
  return (
    <div className="w-full space-y-8">
      <h1 className="text-5xl md:text-8xl  font-light">
        Inspired by the Japanese saying{" "}
        <span className="text-accent font-accent">“Nekonote mo karitai”</span>
        (so busy I&apos;d even borrow a cat&apos;s hand), Nekonote LLC creates
        software to make everyday tasks easier and life moren enjoyable.
      </h1>
      {/* <p className="md:text-xl text-secondary">
        Our flagship product, Souschef, is an AI-powered cooking app designed to
        simplify meal preparation.
      </p>
      <p className="md:text-xl text-secondary">
        We now offer design and development services to clients worldwide,
        bringing our expertise in crafting intuitive and impactful digital
        experiences.
      </p> */}

      <div className="space-y-2 pt-12">
        <label className="text-medium">SERVICES</label>
        <ul className="text-lg">
          <li>Design</li>
          <li>UI / UX</li>
          <li>Web Development</li>
          <li>Mobile Development</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutSection;
