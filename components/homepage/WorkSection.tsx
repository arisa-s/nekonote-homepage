import Image from "next/image";

export const WorkSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-36">
      <WorkItem
        title="Souschef: AI Cooking App"
        image="/images/work/souschefLogo.png"
        href="https://trysouschef.com"
        role="Idea・Design・Development"
      />
      <WorkItem
        title="Doomers: Homepage"
        image="/images/work/doomersLogo.png"
        href="https://www.doomerslondon.com/"
        role="Design・Development"
      />
      <WorkItem
        title="Studio Defa: Homepage"
        image="/images/work/studioDefaLogo.png"
        href="https://www.studiodefa.com/"
        role="Design・Development"
      />
      <WorkItem
        title="Paratext: Poetry Blog"
        image="/images/work/paratextLogo.png"
        href="https://paratext.ee"
        role="Design・Development"
      />
      <WorkItem
        title="Makkiki: Shopify Store"
        image="/images/work/makkikiLogo.png"
        href="https://makkiki.co.jp/"
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
          className="w-full bg-invert px-24"
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
