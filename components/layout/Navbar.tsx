import { SECTIONS } from "@/constants/homepage";
import MobileNavMenu from "./MobileNavMenu";

export const Navbar = () => (
  <nav className="max-w-8xl mx-auto flex items-center justify-between py-6 px-6 md:px-20">
    <a
      href={`#`}
      className="text-primary font-medium font-accent text-2xl md:text-lg flex"
    ></a>
    <div className="flex md:hidden">
      <MobileNavMenu />
    </div>
    <ul className="space-x-6 hidden md:flex">
      {Object.values(SECTIONS).map(({ key, title }) => (
        <li key={key}>
          <a href={`#${key}`} className="text-lg hover:underline">
            {title}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
