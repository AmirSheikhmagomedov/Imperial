import { Html } from '@react-email/html'
import { Head } from '@react-email/head'
import { Preview } from '@react-email/preview'
import { Tailwind } from '@react-email/tailwind'
import { Container } from '@react-email/container'
import { Heading } from '@react-email/heading'
import { Text } from '@react-email/text'
import { Link } from '@react-email/link'
import { Body } from '@react-email/body'

interface Props {
  name: string
  organization?: string
  phone: string
  email: string
  topic: string
  message: string
}

export default function Email({
  name,
  organization,
  phone,
  email,
  topic,
  message,
}: Props) {
  return (
    <Html>
      <Head />
      <Preview>Пришло сообщение от {name}</Preview>
      <Body style={main} className="font-sans">
        <Tailwind>
          <Container style={container}>
            <Heading className="bg-white my-auto mx-auto font-sans font mt-[40px] mb-[20px] text-blue-500">
              Новое сообщение от Imperial
            </Heading>
            <Text className="font-sans">
              Дата:{' '}
              <b>
                {new Date().toLocaleDateString('en-GB').replace(/\//g, '.')}
              </b>
            </Text>
            <Text className="font-sans">
              ФИO: <b>{name}</b>
            </Text>
            <Text className="font-sans">
              Организация:{' '}
              {organization ? <b>{organization}</b> : <b>Не указана</b>}
            </Text>
            <Text className="font-sans">
              Номер телефона: <b>{phone}</b>
            </Text>
            <Text className="font-sans">
              Email: <b>{email}</b>
            </Text>
            <Text className="font-sans">
              Тема сообщения: <b>{topic}</b>
            </Text>
            <Text className="font-sans">
              Сообщение: <br />
              <Text className="font-bold font-sans mt-[-10px]">{message}</Text>
            </Text>
            <Link
              href={`mailto:${email}`}
              className="font-sans bg-blue-500  text-white px-[16px] py-[12px] rounded-[4px] inline-block mt-[20px]"
            >
              Ответить по почте
            </Link>
          </Container>
        </Tailwind>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: '#ffffff',
}

const container = {
  paddingLeft: '12px',
  paddingRight: '12px',
  margin: '0 auto',
}
