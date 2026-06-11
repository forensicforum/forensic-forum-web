import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createClient } from 'next-sanity';

const resend = new Resend(process.env.RESEND_API_KEY);

const sanityWriteClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
});

export async function POST(request: Request) {
  try {
    console.log("--- STARTING SUBMISSION PIPELINE ---");
    
    const body = await request.json();
    const { name, email, institution, details } = body;

    console.log("1. Sending Email via Resend...");
    await resend.emails.send({
      from: 'Forensic Forum <onboarding@resend.dev>',
      to: ['forensicforum1@gmail.com'],
      subject: `New Service Inquiry from ${institution}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background-color: #12161A; color: #ffffff; padding: 30px; border-radius: 8px;">
          <h2 style="color: #2FB7B2; border-bottom: 1px solid #333; padding-bottom: 10px;">New Service Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Institution:</strong> ${institution}</p>
          <div style="background-color: #0a0a0a; padding: 15px; border-left: 4px solid #2FB7B2; margin-top: 20px;">
            <p style="margin: 0;"><strong>Message Details:</strong></p>
            <p style="margin-top: 10px; line-height: 1.6;">${details}</p>
          </div>
        </div>
      `
    });
    console.log("2. Email Sent Successfully!");

    console.log("3. Attempting to save to Sanity Dashboard...");
    const sanityResult = await sanityWriteClient.create({
      _type: 'inquiry',
      name,
      email,
      institution,
      details,
      submittedAt: new Date().toISOString(),
    });
    
    console.log("4. SUCCESS! Sanity Database replied with:", sanityResult._id);
    console.log("--- PIPELINE FINISHED ---");

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('!!! FATAL ERROR IN PIPELINE !!!', error);
    return NextResponse.json({ error: 'Failed to process inquiry' }, { status: 500 });
  }
}