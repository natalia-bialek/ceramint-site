import Page from "../components/Page/Page.js";
import ImageText from "../components/ImageText/ImageText.js";
import WORKSHOP_DATA from "../mock/workshop-list.js";

export default function Warsztaty() {
  return (
    <Page title="Warsztaty">
      {WORKSHOP_DATA.map((workshop, index) => (
        <>
          <ImageText
            image={workshop.image}
            header={workshop.header}
            isCyclically={workshop.isCyclically}
            text={workshop.text}
            additionalInfo={workshop.additionalInfo}
            button={workshop.button}
            buttonLink={workshop.buttonLink}
            isReverse={workshop.isReverse ? workshop.isReverse : false}
          ></ImageText>
          {index % 2 === 0 && <hr />}
        </>
      ))}
    </Page>
  );
}
