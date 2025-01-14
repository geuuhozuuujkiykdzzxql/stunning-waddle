import "@mantine/core/styles.css";
import { Carousel } from '@mantine/carousel';
import { MantineProvider, Group, Image } from "@mantine/core";
import { theme } from "./theme";


function Demo() {
  return (
    <Group>
      Hey Hey!
      <Carousel withIndicators height={500}>
      <Carousel.Slide><Image  h={500} w="auto" src="/tiger_cubs.jpg"/></Carousel.Slide>
      <Carousel.Slide><Image  h={500} w="auto" src="/babyTiger.jpg"/></Carousel.Slide>
      <Carousel.Slide><Image   h={500} w="auto" src="/basketOfCubs.jpg"/></Carousel.Slide>
      </Carousel>
    </Group>
  );
}



export default function App() {
  return <MantineProvider theme={theme}><Demo/></MantineProvider>;
}
