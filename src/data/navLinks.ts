import INavLinks from "../interfaces/INavLinks";

const navLinks: INavLinks[] = [
  {
    name: "Home",
    path: "/",
    isActive: true
  },
  {
    name: "About",
    path: "/about",
    isActive: true
  },
  {
    name: "Services",
    path: "/services",
    isActive: true
  },
  {
    name: "Books",
    path: "/books",
    isActive: false
  },
  {
    name: "Contact",
    path: "/contact",
    isActive: true
  },
  {
    name: "FAQ",
    path: "/faq",
    isActive: true
  }
]

export default navLinks;