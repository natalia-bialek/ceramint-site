import News from "../components/News/News.js";
import Page from "../components/Page/Page.js";
import NEWS_DATA from "../mock/news-list.js";

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
            key={item.data}
          ></News>
        ))}
      </Page>
    </>
  );
}
