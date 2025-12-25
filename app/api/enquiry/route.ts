import { NextResponse } from 'next/server';

const SHEETS_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbwJpQXmaJSyeeBanyUSVVbNAdQezdHzSZjBSMYokeS-CDKM6s3s_lqm4cdN-u2UX41H/exec"

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Common fields from both forms
    const type = body.type as 'quote' | 'contact' | undefined;
    const name = body.name as string | undefined;
    const email = body.email as string | undefined;
    const phone = (body.phone as string | undefined) || '';
    const product = (body.product as string | undefined) || '';
    const notes = (body.notes as string | undefined) || '';

    if (!type || !name || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 },
      );
    }

    if (SHEETS_WEBHOOK_URL) {
      // Map to what the Apps Script expects
      fetch(SHEETS_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: type === 'quote' ? 'Quote' : 'Contact',
          name,
          email,
          phone,
          product,
          notes,
        }),
      }).catch(() => {
        // fire-and-forget: do not block user response on Sheets failure
      });
    }

    return NextResponse.json({ status: 'ok' }, { status: 200 });
  } catch (error) {
    console.error('Error in enquiry handler', error);
    return NextResponse.json(
      { error: 'Failed to submit enquiry' },
      { status: 500 },
    );
  }
}
