import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, projectDetails, foundBy, helpWith, budget } = body;

    // Validacija obaveznih polja
    if (!name || !company || !email) {
      return NextResponse.json(
        { error: 'Nedostaju obavezna polja' },
        { status: 400 }
      );
    }

    // Kreiraj transporter za Zoho Mail
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.eu', // ili smtp.zoho.com ovisno o regiji
      port: 587,
      secure: false, // true za port 465, false za ostale portove
      auth: {
        user: process.env.ZOHO_EMAIL, // tvoj Zoho email
        pass: process.env.ZOHO_PASSWORD, // tvoj Zoho password ili app password
      },
    });

    // HTML template za email
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa; padding: 20px;">
        <div style="background: #080D10; color: white; padding: 30px; border-radius: 10px;">
          <h1 style="color: #F59E0B; margin: 0 0 20px 0; font-size: 24px;">🎉 Novi upit s KAVO Studio web stranice!</h1>
          
          <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #F59E0B; margin: 0 0 15px 0;">👤 Osnovne informacije</h3>
            <p><strong>Ime:</strong> ${name}</p>
            <p><strong>Tvrtka:</strong> ${company}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>

          ${foundBy ? `
          <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #F59E0B; margin: 0 0 15px 0;">🔍 Kako nas je našao/la</h3>
            <p>${foundBy}</p>
          </div>
          ` : ''}

          ${helpWith && helpWith.length > 0 ? `
          <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #F59E0B; margin: 0 0 15px 0;">🛠️ Potrebna pomoć</h3>
            <ul style="margin: 0; padding-left: 20px;">
              ${helpWith.map((item: string) => `<li>${item}</li>`).join('')}
            </ul>
          </div>
          ` : ''}

          ${budget ? `
          <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #F59E0B; margin: 0 0 15px 0;">💰 Planirani budžet</h3>
            <p>${budget}</p>
          </div>
          ` : ''}

          ${projectDetails ? `
          <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #F59E0B; margin: 0 0 15px 0;">📝 Detalji projekta</h3>
            <p style="white-space: pre-wrap;">${projectDetails}</p>
          </div>
          ` : ''}

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1);">
            <p style="margin: 0; font-size: 14px; color: #9CA3AF;">
              Poslano s KAVO Studio web stranice • ${new Date().toLocaleString('hr-HR')}
            </p>
          </div>
        </div>
      </div>
    `;

    // Pošalji email na hi@kavo.studio
    await transporter.sendMail({
      from: process.env.ZOHO_EMAIL, // tvoj Zoho email iz kojeg šalješ
      to: 'hi@kavo.studio', // tvoj Zoho email na koji želiš primati upite
      subject: `🎯 Novi upit: ${name} (${company})`,
      html: htmlContent,
      replyTo: email, // email klijenta za direktan odgovor
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Vaš upit je uspješno poslan! Kontaktirat ćemo vas uskoro.' 
    });

  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Greška pri slanju emaila. Molimo kontaktirajte nas direktno.' },
      { status: 500 }
    );
  }
}
