import { Title, Text, Container, Overlay } from '@mantine/core';
import {HeroSectionFrom} from '../components/HeroSectionForm';
import '../styles/HeroSection.css'

export function HeroSection() {
  return (
    <div className="wrapper">
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className="inner">
        <Title className="title">
          Réservez votre instant{' '}
          <Text component="span" inherit className="highlight">
          détente.
          </Text>
        </Title>

        <Container size={700}>
          <Text size="lg" className="description">
            en un clic, découvrez des professionnels proches de vous
          </Text>
          <HeroSectionFrom/>
        </Container>

      </div>
    </div>
  );
}