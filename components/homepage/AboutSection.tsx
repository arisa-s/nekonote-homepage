export const AboutSection = () => {
  return (
    <div className="max-w-8xl space-y-8">
      <p className="text-xl md:text-3xl leading-normal font-accent">
        Inspired by the Japanese saying “Nekonote mo karitai,” which means
        I&apos;d even want to borrow a cat&apos;s hand when overwhelmed with
        busyness, Nekonote LLC aims to ease the small pains of daily activities
        and enrich life with our software solutions.
      </p>
      <p className="md:text-xl text-secondary">
        Our flagship product, Souschef, is an AI-powered cooking app designed to
        simplify meal preparation.
      </p>
      <p className="md:text-xl text-secondary">
        We now offer design and development services to clients worldwide,
        bringing our expertise in crafting intuitive and impactful digital
        experiences.
      </p>

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
