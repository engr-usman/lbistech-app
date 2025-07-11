import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

const TO_EMAIL = import.meta.env.RESEND_TO_EMAIL || 'engr.syedusmanahmad@gmail.com';
const FROM_EMAIL = import.meta.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

export async function sendContactNotification(data: any) {
  return await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    subject: `New Contact Form Submission: ${data.first_name} ${data.last_name}`,
    html: `
      <h2>New Contact Submission</h2>
      <p><strong>Name:</strong> ${data.first_name} ${data.last_name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Course Interest:</strong> ${data.course_interest}</p>
      <p><strong>Message:</strong><br>${data.message}</p>
    `
  });
}

export async function sendEnrollmentNotification(data: any) {
  return await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    subject: `New Enrollment Submission: ${data.first_name} ${data.last_name}`,
    html: `
      <h2>New Enrollment Submitted</h2>
      <p><strong>Course:</strong> ${data.course_id}</p>
      <p><strong>Name:</strong> ${data.first_name} ${data.last_name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Experience Level:</strong> ${data.experience_level}</p>
      <p><strong>Learning Goals:</strong><br>${data.learning_goals}</p>
      <p><strong>Is Free:</strong> ${data.is_free ? 'Yes' : 'No'}</p>
    `
  });
}

export async function sendEnrollmentConfirmation(data: any) {
  return await resend.emails.send({
    from: FROM_EMAIL,
    to: data.email,
    subject: `Enrollment Confirmation – ${data.course_id}`,
    html: `
      <h2>Thank you for enrolling!</h2>
      <p>Dear ${data.first_name},</p>
      <p>We've received your enrollment for the <strong>${data.course_id}</strong> course.</p>
      <p>We'll contact you shortly with further details.</p>
      <br>
      <p>Best regards,<br>LbisTech Team</p>
    `
  });
}

