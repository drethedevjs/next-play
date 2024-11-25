import IContactFormData from "../interfaces/IContactFormData";

export default class ContactFormData implements IContactFormData {
  constructor(
    public firstName: string = "",
    public lastName: string = "",
    public email: string = "",
    public message: string = "",
    public city: string = "",
    public region: string = "",
    public postalCode: string = "",
    public services: string[] = [],
    public sports: string[] = []
  ) {

  }

  clear() {
    this.firstName = "",
    this.lastName = "",
    this.email = "",
    this.message = "",
    this.city = "",
    this.region = "",
    this.postalCode = "",
    this.services = [],
    this.sports = []
  }
}