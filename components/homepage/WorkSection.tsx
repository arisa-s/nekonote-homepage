import Image from "next/image";

export const WorkSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      <WorkItem
        title="Souschef: AI Cooking App"
        image="/images/work/souschefLogo.png"
        href="https://trysouschef.com"
        role="Idea・Design・Development"
      />
      <WorkItem
        title="Paratext: Poetry Blog"
        image="/images/work/paratextLogo.png"
        href="https://paratext.ee"
        role="Design・Development"
      />
    </div>
  );
};

const WorkItem = ({
  title,
  image,
  href,
  role,
}: {
  title: string;
  image: string;
  href: string;
  role?: string;
}) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <div className="flex flex-col items-center space-y-6">
        <Image
          src={image}
          width={500}
          height={500}
          alt={title}
          className="w-full border bg-invert"
        />
        <div className="flex flex-col items-center space-y-2">
          <label className="text-xl md:text-2xl font-accent font-semibold">
            {title}
          </label>
          <span className="text-secondary">{role}</span>
        </div>
      </div>
    </a>
  );
};

export default WorkSection;
