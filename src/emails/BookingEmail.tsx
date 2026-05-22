import * as React from 'react';
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface BookingEmailTemplateProps {
  name: string;
  email: string;
  description: string;
}

export const BookingEmailTemplate: React.FC<Readonly<BookingEmailTemplateProps>> = ({
  name,
  email,
  description,
}) => (
  <Html>
    <Head />
    <Preview>New Project Inquiry from {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Heading style={headerTitle}>Vexa Web Solutions</Heading>
        </Section>
        <Section style={content}>
          <Text style={text}>
            <strong>You have a new project inquiry.</strong>
          </Text>
          <Text style={text}>
            <strong>Name:</strong> {name}
          </Text>
          <Text style={text}>
            <strong>Email:</strong> {email}
          </Text>
          <Text style={text}>
            <strong>Project Description:</strong>
          </Text>
          <Text style={descriptionText}>
            {description}
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  borderRadius: '8px',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
};

const header = {
  padding: '32px',
  borderBottom: '1px solid #e5e7eb',
  textAlign: 'center' as const,
};

const headerTitle = {
  color: '#cbd5e1', // vexa-muted
  fontSize: '24px',
  fontWeight: '600',
  margin: '0',
};

const content = {
  padding: '32px',
};

const text = {
  color: '#333',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 16px',
};

const descriptionText = {
  color: '#333',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 16px',
  backgroundColor: '#f8fafc',
  padding: '16px',
  borderRadius: '4px',
  whiteSpace: 'pre-wrap' as const,
};
