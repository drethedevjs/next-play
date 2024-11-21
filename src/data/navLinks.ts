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
    isActive: false
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
    isActive: false
  },
  {
    name: "FAQ",
    path: "/faq",
    isActive: false
  }
]

export default navLinks;