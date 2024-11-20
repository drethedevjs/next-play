import ISpecialty from "../interfaces/ISpecialty";
// Importing HugeIcon components (replace with actual icon library imports if necessary)
import { Agreement02Icon, Briefcase01Icon, Megaphone01Icon, PresentationLineChart02Icon, UserCircleIcon, UserGroupIcon } from 'hugeicons-vue';

const specialties: ISpecialty[] = [
  {
    id: 1,
    iconUrl: "/icons/personal-branding.svg",
    name: "Personal Branding",
    description: "Helping athletes build a personal brand that reflects their values and vision. This specialty focuses on defining and promoting an athlete’s identity off the field, making them marketable for future ventures in media, public speaking, and business.",
    hugeIcon: UserCircleIcon // HugeIcon component for personal branding
  },
  {
    id: 2,
    iconUrl: "/icons/business-strategy.svg",
    name: "Business Strategy & Entrepreneurship",
    description: "Supporting athletes in navigating the business world by providing insights into entrepreneurship, company formation, and scaling. Athletes often have a strong work ethic and the experience of high-level competition, which can be transformed into successful business ventures.",
    hugeIcon: Briefcase01Icon // HugeIcon component for business strategy
  },
  {
    id: 3,
    iconUrl: "/icons/financial-planning.svg",
    name: "Financial Planning & Investment",
    description: "Guiding athletes in managing their wealth, investments, and financial planning. This service helps athletes transition from a career of temporary earnings to building a long-lasting financial portfolio that will support them after sports.",
    hugeIcon: PresentationLineChart02Icon // HugeIcon component for financial planning
  },
  {
    id: 4,
    iconUrl: "/icons/media-and-communications.svg",
    name: "Media Relations & Communications",
    description: "Helping athletes enhance their presence in the media and manage public relations. From interviews to social media engagement, we guide athletes in using their platforms for influence and impact while building professional relationships with the press.",
    hugeIcon: Megaphone01Icon // HugeIcon component for media relations
  },
  {
    id: 5,
    iconUrl: "/icons/social-impact.svg",
    name: "Social Impact & Advocacy",
    description: "Assisting athletes in using their platform to create social change. Many athletes have a unique opportunity to leverage their popularity to raise awareness for causes they are passionate about, whether it’s mental health, diversity, or environmental sustainability.",
    hugeIcon: Agreement02Icon // HugeIcon component for social impact
  },
  {
    id: 6,
    iconUrl: "/icons/networking.svg",
    name: "Networking & Industry Connections",
    description: "Providing athletes with the tools and strategies to network with industry leaders and influencers. By connecting athletes to people in their field of interest, this specialty helps athletes find mentors, investors, and collaborators for a successful transition into new careers.",
    hugeIcon: UserGroupIcon // HugeIcon component for networking and connections
  }
];

export default specialties;
