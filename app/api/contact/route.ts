import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message, projectType, country } = body;

    // Check if SMTP environment variables are configured
    const host = process.env.SMTP_HOST || "smtp.gmail.com";
    const port = parseInt(process.env.SMTP_PORT || "587");
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const receiver = process.env.CONTACT_RECEIVER_EMAIL || "bbido761@gmail.com";

    // If SMTP details are not configured, print to console as fallback
    if (!user || !pass) {
      console.warn("SMTP credentials (SMTP_USER / SMTP_PASS) not configured. Printing form data instead:");
      console.log({ name, email, phone, company, message, projectType, country });
      
      // Return success in dev mode even if email couldn't be sent physically
      return NextResponse.json({ 
        success: true, 
        warning: "SMTP not configured. Form logged to server console successfully." 
      });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // true for port 465, false for 587
      auth: {
        user,
        pass,
      },
    });

    const mailOptions = {
      from: `"Masr Al Arabya Elevators" <${user}>`,
      to: receiver,
      replyTo: email || undefined,
      subject: `New Lead: ${name} (${projectType || "Elevator Inquiry"})`,
      text: `
        New Lead Submission:
        
        Name: ${name}
        Email: ${email || "Not Provided"}
        Phone: ${phone}
        Company: ${company || "Not Provided"}
        Country: ${country || "Egypt"}
        Project Type: ${projectType || "General Inquiry"}
        
        Message:
        ${message}
      `,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 12px; background-color: #fafafa;">
          <h2 style="color: #ec4e39; border-bottom: 2px solid #ec4e39; padding-bottom: 10px; margin-top: 0;">New Lead Inquiry</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #444; width: 120px;">Name:</td>
              <td style="padding: 8px 0; color: #111;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #444;">Phone:</td>
              <td style="padding: 8px 0; color: #111;">
                <a href="tel:${phone}" style="color: #ec4e39; text-decoration: none;">${phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #444;">Email:</td>
              <td style="padding: 8px 0; color: #111;">
                ${email ? `<a href="mailto:${email}" style="color: #ec4e39; text-decoration: none;">${email}</a>` : "Not Provided"}
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #444;">Company:</td>
              <td style="padding: 8px 0; color: #111;">${company || "Not Provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #444;">Country:</td>
              <td style="padding: 8px 0; color: #111;">${country || "Egypt"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #444;">Project Type:</td>
              <td style="padding: 8px 0; color: #111; font-weight: 600;">${projectType || "General Inquiry"}</td>
            </tr>
          </table>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #fff; border-left: 4px solid #ec4e39; border-radius: 4px;">
            <h4 style="margin: 0 0 10px 0; color: #333;">Message:</h4>
            <p style="margin: 0; color: #555; line-height: 1.5; white-space: pre-line;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; font-size: 11px; color: #999; text-align: center; border-top: 1px solid #eee; padding-top: 15px;">
            Sent from Masr Al Arabya Elevators Web Platform.
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error in contact API:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to send email." },
      { status: 500 }
    );
  }
}
