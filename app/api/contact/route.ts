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
        <div style="background-color: #FAF0ED; padding: 40px 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; text-align: left;" dir="ltr">
          <div style="max-width: 600px; margin: 0 auto; background-color: #0b0a0a; border: 1px solid rgba(197, 168, 128, 0.25); border-radius: 24px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.15);">
            
            <!-- Header Banner -->
            <div style="background-color: #141313; padding: 30px; border-bottom: 1px solid rgba(197, 168, 128, 0.15); text-align: center;">
              <div style="display: inline-block; width: 45px; height: 45px; line-height: 45px; border-radius: 12px; background-color: #ec4e39; color: #FAF0ED; font-weight: bold; font-size: 20px; margin-bottom: 12px;">M</div>
              <h1 style="color: #FAF0ED; font-size: 20px; font-weight: bold; letter-spacing: 1px; margin: 0; text-transform: uppercase;">Masr Al Arabya Elevators</h1>
              <p style="color: #c5a880; font-size: 10px; letter-spacing: 2px; margin: 5px 0 0 0; text-transform: uppercase;">Pioneering Luxury Vertical Transit Since 1979</p>
            </div>
            
            <!-- Content Block -->
            <div style="padding: 40px 30px;">
              <h2 style="color: #FAF0ED; font-size: 18px; font-weight: 300; margin-top: 0; margin-bottom: 25px; border-bottom: 1px solid rgba(250, 240, 237, 0.1); padding-bottom: 15px;">New Client Lead Details</h2>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; font-weight: 600; color: #c5a880; font-size: 13px; width: 140px; border-bottom: 1px solid rgba(250, 240, 237, 0.05);">Client Name:</td>
                  <td style="padding: 12px 0; color: #FAF0ED; font-size: 14px; border-bottom: 1px solid rgba(250, 240, 237, 0.05);">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; font-weight: 600; color: #c5a880; font-size: 13px; border-bottom: 1px solid rgba(250, 240, 237, 0.05);">Phone Number:</td>
                  <td style="padding: 12px 0; color: #FAF0ED; font-size: 14px; border-bottom: 1px solid rgba(250, 240, 237, 0.05);">
                    <a href="tel:${phone}" style="color: #ec4e39; text-decoration: none; font-weight: bold;">${phone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; font-weight: 600; color: #c5a880; font-size: 13px; border-bottom: 1px solid rgba(250, 240, 237, 0.05);">Email Address:</td>
                  <td style="padding: 12px 0; color: #FAF0ED; font-size: 14px; border-bottom: 1px solid rgba(250, 240, 237, 0.05);">
                    ${email ? `<a href="mailto:${email}" style="color: #ec4e39; text-decoration: none;">${email}</a>` : '<span style="color: rgba(250, 240, 237, 0.4);">Not Provided</span>'}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; font-weight: 600; color: #c5a880; font-size: 13px; border-bottom: 1px solid rgba(250, 240, 237, 0.05);">Company / Org:</td>
                  <td style="padding: 12px 0; color: #FAF0ED; font-size: 14px; border-bottom: 1px solid rgba(250, 240, 237, 0.05);">${company || '<span style="color: rgba(250, 240, 237, 0.4);">Not Provided</span>'}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; font-weight: 600; color: #c5a880; font-size: 13px; border-bottom: 1px solid rgba(250, 240, 237, 0.05);">Country / City:</td>
                  <td style="padding: 12px 0; color: #FAF0ED; font-size: 14px; border-bottom: 1px solid rgba(250, 240, 237, 0.05);">${country || "Egypt"}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; font-weight: 600; color: #c5a880; font-size: 13px; border-bottom: 1px solid rgba(250, 240, 237, 0.05);">Solution Required:</td>
                  <td style="padding: 12px 0; color: #ec4e39; font-size: 14px; font-weight: bold; border-bottom: 1px solid rgba(250, 240, 237, 0.05);">${projectType || "General Elevator Query"}</td>
                </tr>
              </table>
              
              <!-- Message Box -->
              <div style="margin-top: 30px; padding: 20px; background-color: #141313; border-left: 4px solid #ec4e39; border-radius: 8px;">
                <h4 style="margin: 0 0 10px 0; color: #c5a880; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message / Inquiry Details:</h4>
                <p style="margin: 0; color: #FAF0ED; font-size: 14px; line-height: 1.6; white-space: pre-line;">${message}</p>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="background-color: #141313; padding: 20px; text-align: center; border-top: 1px solid rgba(250, 240, 237, 0.05);">
              <p style="margin: 0; color: rgba(250, 240, 237, 0.3); font-size: 10px; letter-spacing: 1px; text-transform: uppercase;">© 2026 Masr Al Arabya Elevators. All Rights Reserved.</p>
            </div>
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
