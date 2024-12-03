import { NextFunction, Request, Response } from 'express';
import SendEmailRequestBody from 'src/interfaces/SendEmailRequestBody.js';
import mailer from '../mailer.js';

const emailController = {
  default: async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({message: `All systems go!`});
  },
  sendEmail: async (req: Request<{}, {}, SendEmailRequestBody>, res: Response, next: NextFunction) => {
    try {
      // Send the email using Nodemailer
      let response = await mailer.sendEmail(req.body);
      res.status(200).send(response);
    } catch (err: any) {
      console.error("Error sending email!", err);
      res.status(500).send({ error: `Error sending email: ${err.message}` });
    }
  }
}

export default emailController;