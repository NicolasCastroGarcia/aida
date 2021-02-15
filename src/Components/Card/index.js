import "./style.scss";

function Card({ data }) {
  return (
    <div className="card">
      {data && data.img && (
        <img src={`/aida/${data.img}`} alt={data.img} className="img" />
      )}
      {data && data.video && (
        <video autoPlay muted className="video">
          <source src={`/aida/${data.video}`} type="video/mp4" />
        </video>
      )}
      {data && data.story && <p className="text">{data.story}</p>}
    </div>
  );
}

export default Card;
