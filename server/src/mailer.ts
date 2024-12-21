
import "dotenv/config";
import { google } from "googleapis";
import nodemailer from "nodemailer";
import SendEmailRequestBody from "./interfaces/SendEmailRequestBody.js";

const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

async function getAccessToken() {
  // Automatically refresh the access token
  const { token } = await oAuth2Client.getAccessToken();
  if (!token) {
    throw new Error("Failed to refresh access token");
  }
  return token;
}

const mailer = {
  sendEmail: async (formData: SendEmailRequestBody) => {
    const {
      firstName,
      lastName,
      company,
      email,
      message,
      city,
      region,
      postalCode,
      services,
      sports
    } = formData;

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.MY_EMAIL,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: await getAccessToken()
      },
      tls: {
        rejectUnauthorized: true,
      },
    });

    //EMAIL OPTIONS
    const from = email;
    const subject = "Next Play Project Inquiry";
    const html = `
      <p><b>Name:</b> ${firstName} ${lastName}</p>
      <p><b>Company:</b> ${company}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Location:</b> ${city}, ${region}, ${postalCode}</p>
      <p><b>Services:</b></p>
      <ul>
        ${services.map(s => '<li>' + s +'</li>').join('')}
      </ul>
      <p><b>Sports:</b></p>
      <ul>
        ${sports.map(sp => '<li>' + sp +'</li>').join('')}
      </ul>

      <p><b>Message:</b></p>
      <p>${message}</p>
    `;

    const result = await transport.sendMail({ from, subject, to: process.env.MY_EMAIL, html, replyTo:email });
    return result;
  }
}


export default mailer;