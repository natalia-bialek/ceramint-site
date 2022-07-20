import News from "../components/News/News.js";
import Page from "../components/Page/Page.js";

const NEWS_DATA = [
  {
    data: "8.03.2022",
    title: "Ulep sobie kubek",
    text: `15 marca zapraszamy na zajęcia warsztatowe z lepienia kubków. Odbędą się w godzinach 10:30-12:00. Prosimy o rejestrację za pomocą maila (zakładka 'Kontakt').
    Wstęp wolny. Ilość miejsc ograniczona!`,
    image: "",
    imageAltText: "",
  },
  {
    data: "b",
    title: "b",
    text: "b",
    image: "",
    imageAltText: "",
  },
];

export default function Aktualnosci(props) {
  return (
    <>
      <Page title="Aktualności">
        {NEWS_DATA.map((item) => (
          <News
            data={item.data}
            title={item.title}
            text={item.text}
            image={item.image}
            key={item.data}>
          </News>
        ))}
      </Page>
    </>
  );
}
