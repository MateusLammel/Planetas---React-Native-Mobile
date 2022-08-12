import { Planet } from "../@types/interfaces";

export const planets: Planet[] = [
  {
    id: "Marte",
    name: "Marte",
    photo:
      "https://www.ien.eu/uploads/tx_etim/Vaisala_LIFT-Mars_the_Red_Planet-1600x900.jpg",
    description: "Planeta Vermelho onde os humanos pretendem habitar no futuro",
    galaxy_id: "Via Lactea",
    size: 124505,
  },
  {
    id: "Terra",
    name: "Terra",
    photo:
      "https://cdn.britannica.com/25/160325-050-EB1C8FB7/image-instruments-Earth-satellite-NASA-Suomi-National-2012.jpg",
    description: "Planeta onde nós habitamos, abundante em água",
    galaxy_id: "Via Lactea",
    size: 315351,
  },
  {
    id: "Venus",
    name: "Venus",
    photo:
      "https://super.abril.com.br/wp-content/uploads/2021/02/fosfina-venus_site.jpg?quality=90&strip=info&w=1024&resize=1200,800",
    description: "Planeta muito seco e quente, perto do sol",
    galaxy_id: "Via Lactea",
    size: 513421,
  },
];
