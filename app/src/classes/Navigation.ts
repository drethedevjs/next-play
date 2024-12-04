// routes.ts
export default class Navigation {
  // Define static readonly properties for each route path
  static readonly HOME = "/";
  static readonly ABOUT = "/about";
  static readonly CONTACT = "/contact";
  static readonly SERVICES = "/services";
  static readonly BOOKS = "/books";
  static readonly GAME = "/game-plan";
  static readonly FAQ = "/faq";
  static readonly SUBSCRIBE = "/subscribe";
  static readonly SCHEDULE = "/schedule";

  // You can also define a method that returns the routes in an array, if needed
  static getAllRoutes() {
    return [
      Navigation.HOME,
      Navigation.ABOUT,
      Navigation.CONTACT,
      Navigation.SERVICES,
      Navigation.BOOKS,
      Navigation.FAQ,
      Navigation.SUBSCRIBE,
      Navigation.SCHEDULE
    ];
  }
}
