import "./News.css";

export default function News(props) {
    console.log(props.image)
  return (
    <div className="card">
      <p className="card__data">{props.data}</p>
      <img className="card__image" src={props.image}/>
      <div className="card__body">
        <h5 className="card__title">{props.title}</h5>
        <p className="card__text">{props.text}</p>
      </div>
    </div>
  );
}
