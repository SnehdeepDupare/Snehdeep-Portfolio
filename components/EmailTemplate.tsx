import {
  Html,
  Head,
  Container,
  Body,
  Hr,
  Section,
  Heading,
  Text,
  Tailwind,
} from "@react-email/components";

interface Props {
  name: string;
  email: string;
  message: string;
}

function EmailTemplate({ name, email, message }: Props) {
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Tailwind>
        <Body className="bg-gray-100">
          <Container className="py-10">
            <Section>
              <Heading>New email from {name}</Heading>
              <Text>{message}</Text>
              <Hr />
              <Heading as="h2">Sender Details:</Heading>
              <Text>Name: {name}</Text>
              <Text> Email: {email}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default EmailTemplate;
