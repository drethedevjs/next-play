import Navigation from "../classes/Navigation";
import INavLinks from "../interfaces/INavLinks";

const navLinks: INavLinks[] = [
  {
    name: "Home",
    path: Navigation.HOME,
    isActive: true
  },
  {
    name: "About",
    path: Navigation.ABOUT,
    isActive: true
  },
  {
    name: "Services",
    path: Navigation.SERVICES,
    isActive: true
  },
  {
    name: "Books",
    path: Navigation.BOOKS,
    isActive: false
  },
  {
    name: "G.A.M.E. Plan",
    path: Navigation.GAME,
    isActive: true
  },
  {
    name: "Contact",
    path: Navigation.CONTACT,
    isActive: true
  },
  {
    name: "FAQ",
    path: Navigation.FAQ,
    isActive: true
  }
]

export default navLinks;