import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { SITE_CONFIG } from "@/lib/constants";

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Configure nodemailer transporter using App Password
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: SITE_CONFIG.email,
      subject: `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}

Message:
${message}
      `,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f4f5; padding: 20px; margin: 0;">
          <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.05);">
            <tr>
              <td style="background-color: #0f172a; padding: 30px 40px; text-align: center;">
                <h2 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: -0.5px;">New Contact Request</h2>
                <p style="color: #94a3b8; margin: 8px 0 0 0; font-size: 15px;">VK Abilesh CA Portfolio</p>
              </td>
            </tr>
            <tr>
              <td style="padding: 40px;">
                <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                  <tr>
                    <td style="padding-bottom: 16px;">
                      <p style="margin: 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #64748b; font-weight: 600;">Name</p>
                      <p style="margin: 4px 0 0 0; font-size: 16px; color: #0f172a; font-weight: 500;">${name}</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-bottom: 16px;">
                      <p style="margin: 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #64748b; font-weight: 600;">Email Address</p>
                      <p style="margin: 4px 0 0 0; font-size: 16px; color: #0284c7; font-weight: 500;"><a href="mailto:${email}" style="color: #0284c7; text-decoration: none;">${email}</a></p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-bottom: 16px;">
                      <p style="margin: 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #64748b; font-weight: 600;">Phone Number</p>
                      <p style="margin: 4px 0 0 0; font-size: 16px; color: #0f172a; font-weight: 500;">${phone || "Not provided"}</p>
                    </td>
                  </tr>
                </table>
                <div style="background-color: #f8fafc; border-left: 4px solid #334155; padding: 20px; border-radius: 4px 8px 8px 4px;">
                  <p style="margin: 0 0 12px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #64748b; font-weight: 600;">Message</p>
                  <p style="margin: 0; font-size: 15px; color: #334155; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</p>
                </div>
              </td>
            </tr>
            <tr>
              <td style="background-color: #f8fafc; padding: 24px; text-align: center; border-top: 1px solid #e2e8f0;">
                <p style="margin: 0; font-size: 13px; color: #64748b;">This email was automatically generated from your website contact form.</p>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
