import warsztaty1 from "../images/warsztaty1.jpg";
import warsztaty2 from "../images/warsztaty2.jpg";

const WORKSHOP_DATA = [
  {
    image: warsztaty1,
    header: "Kurs dla dorosłych",
    isCyclically: true,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget.",
    additionalInfo: {
      "Maksymalny wiek uczestnika": "100 lat",
      "Data wydarzenia": "12.04.2022",
      "Koszt udziału": "100zł od osoby za 4 spotkania",
    },
    button: "Zapisz się teraz!",
    buttonLink: "/ceramint-site/#/kontakt",
  },
  {
    isReverse: true,
    image: warsztaty2,
    header: "Warsztaty dla dzieci",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget.",
    additionalInfo: {
      "Maksymalny wiek uczestnika": "10 lat",
      "Data wydarzenia": "13.03.2022, 16.03.2022",
      "Koszt udziału": "50zł od osoby",
    },
  },
];

export default WORKSHOP_DATA;
