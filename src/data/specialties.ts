import ISpecialty from "../interfaces/ISpecialty";
// Importing HugeIcon components (replace with actual icon library imports if necessary)
import { FileAttachmentIcon, LaptopIcon, Mic01Icon, UserCircleIcon, UserGroupIcon } from 'hugeicons-vue';

const specialties: ISpecialty[] = [
  {
    id: 1,
    iconUrl: "/icons/personal-branding.svg",
    name: "One-on-One Coaching",
    description: "Our one-on-one coaching offers personalized guidance tailored to the unique needs of each individual. Whether you're an athlete, parent, or coach, we focus on helping you unlock your full potential. This dedicated support helps you overcome obstacles and achieve your personal goals.",
    hugeIcon: UserCircleIcon // Huge Icon for personal branding
  },
  {
    id: 2,
    iconUrl: "/icons/business-strategy.svg",
    name: "Group Workshops",
    description: "Our group workshops provide an interactive platform for learning and growth. They are designed to foster collaboration, allowing participants to share ideas and experiences. These workshops are ideal for teams and organizations looking to enhance their skills and strategies together.",
    hugeIcon: UserGroupIcon // Huge Icon for group collaboration
  },
  {
    id: 3,
    iconUrl: "/icons/financial-planning.svg",
    name: "Online Courses",
    description: "Our online courses offer flexibility, allowing you to learn at your own pace. Whether you want to gain new skills or enhance existing ones, these courses provide valuable resources and knowledge. Designed for busy schedules, they empower you to learn whenever and wherever suits you best.",
    hugeIcon: LaptopIcon // Huge Icon for learning and online courses
  },
  {
    id: 4,
    iconUrl: "/icons/media-and-communications.svg",
    name: "Digital Resources",
    description: "Our digital resources provide practical tools to support your growth. From templates to guides, these resources are designed to help you implement new strategies effectively. They are accessible and easy to use, making them perfect for those who prefer learning through hands-on tools.",
    hugeIcon: FileAttachmentIcon // Huge Icon for digital tools/resources
  },
  {
    id: 5,
    iconUrl: "/icons/social-impact.svg",
    name: "Speaking Engagements",
    description: "Our speaking engagements offer inspiring talks aimed at educating and motivating audiences. These talks are designed to spark change and encourage positive action in both personal and professional life. With a focus on social impact, they inspire listeners to take meaningful steps toward growth and success.",
    hugeIcon: Mic01Icon // Huge Icon for speaking engagements
  }
];

export default specialties;