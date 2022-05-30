import News from "../components/News";
import Page from "../components/Page";

const newsList = [
  {
    data: "8.03.2022",
    title: "Ulep sobie kubek",
    text: `15 marca zapraszamy na zajęcia warsztatowe z lepienia kubków.{\n}
    Odbędą się w godzinach 10:30-12:00. Prosimy o rejestrację za pomocą maila (zakładka 'Kontakt').
    Wstęp wolny. Ilość miejsc ograniczona!`,
    image: "https://pixabay.com/get/ga0f4a3b5a7bc10b04bf0e6ae29d2a2c4b582a3c4e45a95a61650d06a95cb4c5eee67cc63c53c157708ea26f77383fea464b0edc4e622105bab81e1864d8e73de85b421711add49bf53480e40d13742f2_640.jpg", 
  },
  {
    data: "b",
    title: "b",
    text: "b",
    image: "b",
  },
];

export default function Aktualnosci(props) {
  return (
    <>
      <Page title="Aktualności">
        {newsList.map((item) => (
          <News
            data={item.data}
            title={item.title}
            text={item.text}
            image={item.image} >
          </News>
        ))}
      </Page>
    </>
  );
}
