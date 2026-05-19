import "./divider.css";

function Divider({ text }) {
  return (
    <div className="divider">
      <h2 className="title">{text}</h2>
      <hr />
    </div>
  );
}

export default Divider;
