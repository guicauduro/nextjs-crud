import { Container, Text, Title } from "@mantine/core";

export default function AboutPanel() {
  return (
    <Container>
      <Title order={3}>Sobre o sistema</Title>
      <Text>Aqui vao notas das versoes e atualizações.</Text>
    </Container>
  );
}
