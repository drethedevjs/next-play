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
    isActive: true,
    showSubmenu: false,
    subMenu: [
      {
        name: "G.A.M.E. Plan",
        path: Navigation.GAME,
        isActive: true
      },
      {
        name: "Shop",
        path: Navigation.SHOP,
        isActive: true
      }
    ]
  },
  {
    name: "Books",
    path: Navigation.BOOKS,
    isActive: false
  },
  {
    name: "Contact",
    path: Navigation.CONTACT,
    isActive: true,
    showSubmenu: false,
    subMenu: [
      {
        name: "FAQ",
        path: Navigation.FAQ,
        isActive: true
      },
    ]
  },
  {
    name: "G.A.M.E. Plan",
    path: Navigation.GAME,
    isActive: false
  },
  {
    name: "FAQ",
    path: Navigation.FAQ,
    isActive: false
  },
  {
    name: "Shop",
    path: Navigation.SHOP,
    isActive: false
  }
]

export default navLinks;