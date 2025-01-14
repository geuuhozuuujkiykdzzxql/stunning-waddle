import "@mantine/core/styles.css";
import { Carousel } from '@mantine/carousel';
import { MantineProvider, Group, Image, Tooltip } from "@mantine/core";
import { theme } from "./theme";


function Demo() {
  return (
    <Group>
      Roar!
      <Carousel withIndicators height={500}>
      <Carousel.Slide>    
        <Tooltip label="https://taronga.org.au/media-release/2019-04-01/three-rare-tiger-cubs-debut-taronga-zoo-sydney">
          <Image h={500} w="auto" src="/stunning-waddle/tigerCubs.jpg"/>
        </Tooltip>
      </Carousel.Slide>
      <Carousel.Slide>    
        <Tooltip label="https://pngtree.com/freebackground/baby-tiger-cub-is-walking-on-rocks_2663035.html">
          <Image h={500} w="auto" src="/stunning-waddle/babyTiger.jpg"/>
        </Tooltip>
      </Carousel.Slide>
      <Carousel.Slide>    
        <Tooltip label="https://fox17.com/news/local/gallery/nashville-zoo-celebrates-birth-of-three-sumatran-tiger-cubs-marking-joyful-milestone?photo=14">
          <Image h={500} w="auto" src="/stunning-waddle/basketOfCubs.jpg"/>
        </Tooltip>
      </Carousel.Slide>
      </Carousel>
    </Group>
  );
}



export default function App() {
  return <MantineProvider theme={theme}><Demo/></MantineProvider>;
}
