import Page from "../components/Page/Page.js";
import ImageText from "../components/ImageText/ImageText.js";

export default function Warsztaty() {
  return (
    <Page title="Warsztaty">
      <ImageText
        image="https://pixabay.com/get/g9008e7e9ee04dadfce22462ad570bb5dddefe1d0fca84c67645c17d9e0dfa4163d034a5ade7718f8cd87051f49cc0d2ba61de2a8509591ae1011d7730c92038f63df35d4217570dcf1ae2f53473f908f_640.jpg"
        header="Kurs dla dorosłych"
        isCyclically="true"
        text="Commodo reprehenderit exercitation exercitation occaecat ipsum officia
        fugiat aliqua. Sunt labore veniam laborum officia. Velit aute ut nisi
        aliqua sit Lorem cillum do aute."
        additionalInfo={{
          "Maksymalny wiek uczestnika": "100 lat",
          "Data wydarzenia": "12.04.2022",
          "Koszt udziału": "100zł od osoby za 4 spotkania",
        }}
        button="Zapisz się teraz!"
        buttonLink="/kontakt"
      />
      <hr />
      <ImageText
        isReverse="true"
        image="https://pixabay.com/get/g92209d5c1bc50c469bb2d8b2f549487297789e7f74d6653a968275e1ad90e9d567a882b57d5a8a98e49df7686e6decb0a919811be707705ea7ac51c446cb4d9cdbc6a97543d9ea556f921fff7b1f7eec_640.jpg"
        header="Warsztaty dla dzieci"
        text="Commodo reprehenderit exercitation exercitation occaecat ipsum officia
        follit in qui commodo minim consectetur occaecat cupidatat occaecat nostrud do nisi."
        additionalInfo={{
          "Maksymalny wiek uczestnika": "10 lat",
          "Data wydarzenia": "13.03.2022, 16.03.2022",
          "Koszt udziału": "50zł od osoby",
        }}
      />
    </Page>
  );
}
