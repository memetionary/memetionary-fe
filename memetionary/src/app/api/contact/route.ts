import { ContactForm } from '@/app/contact/page';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transport = {
  service: 'gmail',
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
};

let transporter = nodemailer.createTransport(transport);

const sendMail = (form: ContactForm) => {
  const mailOptions = {
    from: form.email,
    to: process.env.GMAIL_USER,
    subject: `[문의 - ${form.option}] ${form.title}`,
    html: `<h1>${form.title}</h1>
           <p>${form.content}</p>
           <div>
            <span>보낸 사람: </span>
            <a href='mailto:${form.email}'>${form.email}</a>
           </div>
           `,
  };
  return transporter.sendMail(mailOptions);
};

export const POST = async (request: Request) => {
  const res = await request.json();
  try {
    await sendMail(res);
    return NextResponse.json({ res });
  } catch (error) {
    return new Response(JSON.stringify({ error, status: 404 }));
  }
};
