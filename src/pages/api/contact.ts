import { NextApiRequest, NextApiResponse } from 'next';
import AWS from 'aws-sdk';

// Configure AWS SDK
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

// Create SES instance
const ses = new AWS.SES({ apiVersion: '2010-12-01' });

// API endpoint handler
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Extract email, name, and company from request body
    const {
      email,
      name,
      company,
      message,
    }: {
      email: string;
      name: string;
      company: string;
      message: string;
    } = req.body;

    // Validate email, name, and company (you can add your own validation logic here)
    if (!email || !name || !company || !message) {
      return res.status(400).json({ message: 'Please fill out all fields' });
    }

    const businessParams = {
      Destination: {
        ToAddresses: ['violet@leonwebdesigns.com'],
      },
      Message: {
        Body: {
          Text: {
            Data: `Name: ${name}\nEmail: ${email}\nCompany: ${company} \n \n ${message}`,
          },
        },
        Subject: {
          Data: `New contact form message from ${name} at ${company}`,
        },
      },
      Source: 'violet@leonwebdesigns.com',
    };

    // Send email using SES
    const senderParams = {
      Destination: {
        ToAddresses: [email],
      },
      Message: {
        Body: {
          Text: {
            Data: `Hello ${name}, \nThank you for contacting us. We will get back to you shortly.\n\nBest regards,\nLeon Web Designs \n \nThis is an automated email.`,
          },
        },
        Subject: {
          Data: 'Leon Web Designs - Contact Form Confirmation',
        },
      },
      Source: 'violet@leonwebdesigns.com',
    };

    await ses.sendEmail(senderParams).promise();
    await ses.sendEmail(businessParams).promise();

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
};

export default handler;
