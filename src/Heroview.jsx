function Heroview({ hero }) {
  return (
    <div>
      <div key={hero.id}>{hero.name}</div>
      <img
        src={hero.thumbnail.path + "." + hero.thumbnail.extension}
        alt={hero.name}
      ></img>
    </div>
  );
}

export default Heroview;
