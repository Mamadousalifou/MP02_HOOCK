export const Post = ({ data, liker, Effacer }) => {
  return (
    <div className={data.liker ? " post active" : "post "}>
      <div>
        <h2>{data.titre}</h2>
        <p>{data.description}</p>
      </div>
      <div className="btn">
        <button onClick={() => liker(data)}>
          {data.liker ? "Deja liker" : "liker"}
        </button>
        <button className="delete" onClick={() => Effacer(data.id)}>
          Effacer
        </button>
      </div>
    </div>
  );
};
