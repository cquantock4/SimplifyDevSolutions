import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { NextResponse } from "next/server";

const ses = new SESClient({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

  const params = {
    Destination: {
      ToAddresses: ["cody.quantock@simplifydevsolutions.com"],
    },
    Message: {
      Body: {
        Text: {
          Data: `From: ${name} <${email}>\n\n${message}`,
        },
      },
      Subject: {
        Data: subject || "New Contact Form Submission",
      },
    },
    Source: "cody.quantock@simplifydevsolutions.com",
    ReplyToAddresses: [email],
  };

  try {
    await ses.send(new SendEmailCommand(params));
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("SES send error:", error);
    return NextResponse.json({ error: "Email failed to send" }, { status: 500 });
  }
}
