export default interface ISendEmailRequestBody {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  message: string;
  city: string;
  region: string;
  postalCode: string;
  services: string[];
  sports: string[];
}