import { FileAttachmentIcon, LaptopIcon, Mic01Icon, UserCircleIcon, UserGroupIcon } from "hugeicons-vue";
import IService from "../interfaces/IService";

const services: IService[] = [
  {
    id: 1,  // Unique numeric ID for this service
    name: "One-on-One Coaching",
    tagLine: "Personalized Support for Athletes, Parents, and Coaches",
    offerings: [
      "Explore your unique athletic identity and challenges",
      "Develop a balanced approach to sports and life.",
      "Identify transferable skills for life beyond athletics.",
      "Receive actionable strategies tailored to your goals."
    ],
    highlightHeading: "Ideal For",
    highlights: [
      "Athletes feeling stuck or uncertain about their future.",
      "Parents seeking to support their child's development.",
      "Coaches wanting to foster holistic growth in their players."
    ],
    duration: ["60-minute sessions"],
    formats: [],
    callToActionText: "Book a Free Discovery Call",
    pricing: "Starting at [Insert Price] per session",
    hugeIcon: UserCircleIcon
  },
  {
    id: 2,  // Unique numeric ID for this service
    name: "Group Workshops",
    tagLine: "Interactive Learning for Teams and Organizations",
    offerings: [
      "Build resilience and teamwork among athletes.",
      "Understand the signs and impact of identity foreclosure.",
      "Learn strategies for balancing purpose and performance."
    ],
    highlightHeading: "Topics Include",
    highlights: [
      "Life After Sports: Finding Your Next Chapter",
      "Holistic Development for Young Athletes",
      "Coaching Beyond the Game: Supporting Your Team's Growth"
    ],
    duration: ["90 minutes", "Full-day options available"],
    formats: ["In-person workshops", "Virtual workshops"],
    callToActionText: "Inquire About Workshops",
    pricing: "Contact us for group rates",
    hugeIcon: UserGroupIcon
  },
  {
    id: 3,  // Unique numeric ID for this service
    name: "Online Courses",
    tagLine: "Flexible Learning at Your Pace",
    offerings: [
      "Access our exclusive library of online courses.",
      "Learn practical strategies to build a fulfilling athletic identity.",
      "Complete guided exercises and workbooks for lasting impact."
    ],
    highlightHeading: "Popular Courses",
    highlights: [
      "Athletic Identity: Understanding Who You Are Beyond Sports’",
      "Transferable Skills Decoder: Building Your Next Career’"
    ],
    duration: [],
    formats: ["Video lessons", "Downloadable materials", "Quizzes"],
    callToActionText: "Explore Courses",
    pricing: "Starting at [Insert Price] per course",
    hugeIcon: LaptopIcon
  },
  {
    id: 4,  // Unique numeric ID for this service
    name: "Digital Resources",
    tagLine: "Practical Tools for Growth",
    offerings: [
      "Workbooks, eBooks, and guides to complement your journey.",
      "Designed for athletes, parents, and coaches alike.",
      "Topics include identity development, goal-setting, and resilience."
    ],
    highlightHeading: "",
    highlights: [],
    duration: [],
    formats: ["Workbooks", "eBooks", "Guides"],
    callToActionText: "Browse Resources",
    pricing: "From [Insert Price]",
    hugeIcon: FileAttachmentIcon
  },
  {
    id: 5,  // Unique numeric ID for this service
    name: "Speaking Engagements",
    tagLine: "Inspiring Talks to Educate and Motivate",
    offerings: [
      "Book me for keynote speeches, panels, or events.",
      "Topics include athletic identity, transitions, and holistic development."
    ],
    highlightHeading: "Ideal For",
    highlights: [
      "For: Schools, sports organizations, conferences, and parent groups."
    ],
    duration: ["30-90 minutes"],
    formats: ["In-person", "Virtual"],
    callToActionText: "Request a Speaking Engagement",
    pricing: "Contact us for details",
    hugeIcon: Mic01Icon
  }
];



export default services;