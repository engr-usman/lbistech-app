import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export async function sendContactNotification(data: any) {
  try {
    const result = await resend.emails.send({
      from: 'LbisTech <noreply@lbistech.com>',
      to: ['team@lbistech.com'],
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.first_name} ${data.last_name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Course Interest:</strong> ${data.course_interest}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `
    });
    return result;
  } catch (error) {
    console.error('Error sending contact notification:', error);
    throw error;
  }
}

export async function sendEnrollmentNotification(data: any) {
  try {
    const result = await resend.emails.send({
      from: 'LbisTech <noreply@lbistech.com>',
      to: ['team@lbistech.com'],
      subject: 'New Course Enrollment',
      html: `
        <h2>New Course Enrollment</h2>
        <p><strong>Course:</strong> ${data.course_id}</p>
        <p><strong>Name:</strong> ${data.first_name} ${data.last_name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Experience Level:</strong> ${data.experience_level}</p>
        <p><strong>Learning Goals:</strong></p>
        <p>${data.learning_goals}</p>
      `
    });
    return result;
  } catch (error) {
    console.error('Error sending enrollment notification:', error);
    throw error;
  }
}

export async function sendEnrollmentConfirmation(data: any) {
  try {
    const result = await resend.emails.send({
      from: 'LbisTech <noreply@lbistech.com>',
      to: [data.email],
      subject: 'Course Enrollment Confirmation - LbisTech',
      html: `
        <h2>Welcome to LbisTech!</h2>
        <p>Dear ${data.first_name},</p>
        <p>Thank you for enrolling in our ${data.course_id} course. We're excited to have you join our learning community!</p>
        <p>Our team will contact you within 24 hours with next steps and course details.</p>
        <p>Best regards,<br>The LbisTech Team</p>
        <p>Email: team@lbistech.com<br>Phone: +92 03 111 088 881</p>
      `
    });
    return result;
  } catch (error) {
    console.error('Error sending enrollment confirmation:', error);
    throw error;
  }
}