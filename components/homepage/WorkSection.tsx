export const WorkSection = () => {
  return (
    <div className="max-w-8xl flex flex-col gap-6 md:gap-12">
      <WorkItem
        title="Souschef"
        // image="/images/work/souschefLogo.png"
        href="https://trysouschef.com"
        role="Idea・Design・Dev"
      />
      <WorkItem
        title="Doomers"
        // image="/images/work/doomersLogo.png"
        href="https://www.doomerslondon.com/"
        role="Design・Dev"
      />
      <WorkItem
        title="Studio Defa"
        // image="/images/work/studioDefaLogo.png"
        href="https://www.studiodefa.com/"
        role="Design・Dev"
      />
      <WorkItem
        title="Paratext"
        // image="/images/work/paratextLogo.png"
        href="https://paratext.ee"
        role="Design・Dev"
      />
      <WorkItem
        title="Makkiki"
        // image="/images/work/makkikiLogo.png"
        href="https://makkiki.co.jp/"
        role="Design・Dev"
      />
    </div>
  );
};

const WorkItem = ({
  title,
  // image,
  href,
  role,
}: {
  title: string;
  // image: string;
  href: string;
  role?: string;
}) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <h1
        className="text-2xl md:text-5xl font-light underline"
        style={{
          textDecorationThickness: "1px",
          textUnderlineOffset: "8px",
          textDecorationColor: "#B0A6DF",
        }}
      >
        {title} ({role})
      </h1>
    </a>
  );
};

export default WorkSection;
