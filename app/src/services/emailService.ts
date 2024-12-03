import axios from "axios";
import ISendEmailRequestBody from "../interfaces/ISendEmailRequestBody";

const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:2222" : "https//next-play-server.vercel.app";

const emailService = {
  sendEmail: async (formData: ISendEmailRequestBody) => {
    console.log("import.meta.env.MODE", import.meta.env.MODE);
    let response = await axios.post(`${BASE_URL}/api/email/send`, formData);
    return response;
  }
}

export default emailService;