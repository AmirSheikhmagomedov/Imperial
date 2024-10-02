import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import Email from '../../../emails/index'

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { name, organization, phone, email, topic, message } = body

    if (!name || !phone || !email || !topic || !message) {
      return new NextResponse('Fields missing', { status: 404 })
    }

    await resend.sendEmail({
      from: 'Imperial <info@imperial-company.com>',
      to: 'imperialco2022@gmail.com',
      subject: 'Новое сообщение',
      react: Email({ name, organization, email, topic, message, phone }),
    })

    return NextResponse.json({ status: 'ok' })
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 409 })
  }
}
