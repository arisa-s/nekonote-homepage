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
      className="px-6 py-12 md:py-20 max-w-[1800px] w-full mx-auto"
    >
      <hr className="" />
      <h2 className="pt-6 pb-12 text-2xl md:text-4xl text-secondary">
        {sectionTitle}:
      </h2>
      {children}
    </div>
  );
};

export default SectionLayout;
