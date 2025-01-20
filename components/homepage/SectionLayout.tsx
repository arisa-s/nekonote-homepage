import { FC } from "react";

export interface SectionLayoutProps {
  sectionTitle: string;
  sectionKey: string;
  children?: React.ReactNode;
}

export const SectionLayout: FC<SectionLayoutProps> = ({
  sectionTitle,
  sectionKey,
  children,
}) => {
  return (
    <div
      id={sectionKey}
      className="px-6 md:px-20 py-12 md:py-20 max-w-8xl w-full"
    >
      <hr className="max-w-2xl" />
      <h2 className="pt-6 pb-12 text-lg text-accent">{sectionTitle}</h2>
      {children}
    </div>
  );
};

export default SectionLayout;
