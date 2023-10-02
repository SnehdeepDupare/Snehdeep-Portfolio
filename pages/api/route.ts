import { NextApiRequest, NextApiResponse } from "next";
import formData from "form-data";
import Mailgun from "mailgun.js";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const API_KEY = process.env.MAILGUN_API_KEY || "";
  const DOMAIN = process.env.MAILGUN_DOMAIN || "";

  const mailgun = new Mailgun(formData);
  const client = mailgun.client({ username: "api", key: API_KEY });

  const { name, email, subject, message } = req.body;

  const messageData = {
    from: "Portfolio Contact Form <contact@sandbox387b16383dd945519ba93250abfa17e9.mailgun.org>",
    to: "duparesnehdeep@gmail.com",
    subject: `${subject}`,
    text: `New Message from ${name}, ${email}.
    ${message}`,
  };

  try {
    const emailRes = await client.messages.create(DOMAIN, messageData);
    console.log(emailRes);
  } catch (error: any) {
    console.error("Error sending email", error);
  }

  console.log("Data", req.body);
  res.status(200).json({ submitted: "true" });
}
