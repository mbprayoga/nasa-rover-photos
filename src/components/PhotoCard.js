import "./DisplayCard.css";

export default function DisplayCard(props) {
  return (
    <div className="containerBig">
      <img src={props.img} alt="" className="posterBig" />
      <div className="descriptionBig">
        <div>
          <p id="title">{props.title}</p>
          <p id="genre">{props.genre}</p>
        </div>
        <div>
          <AiFillStar color={props.color} size={props.size} />
          <AiFillStar color={props.color} size={props.size} />
          <AiFillStar color={props.color} size={props.size} />
          <AiFillStar color={props.color} size={props.size} />
          <AiFillStar color={props.color} size={props.size} />
        </div>
      </div>
    </div>
  );
}
