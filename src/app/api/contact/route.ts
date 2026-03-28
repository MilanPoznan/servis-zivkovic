import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { ime, telefon, poruka } = await req.json();

  if (!ime || !telefon) {
    return NextResponse.json({ error: "Ime i telefon su obavezni." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Kontakt Forma <onboarding@resend.dev>",
    to: "zivkovicservis1@gmail.com",
    subject: `Nova poruka od ${ime}`,
    text: `Ime: ${ime}\nTelefon: ${telefon}\nPoruka: ${poruka || "—"}`,
  });

  if (error) {
    return NextResponse.json({ error: "Slanje nije uspelo." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
