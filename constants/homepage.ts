import {
  AboutSection,
  ContactSection,
  WorkSection,
} from "@/components/homepage";

export const SECTIONS = {
  WORK: { key: "work", component: WorkSection, title: "Work" },
  ABOUT: { key: "about", component: AboutSection, title: "About" },
  CONTACT: { key: "contact", component: ContactSection, title: "Contact" },
};
