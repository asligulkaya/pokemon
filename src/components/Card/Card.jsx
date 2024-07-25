import classes from "./Card.module.css";

export default function Card() {
  return (
    <>
      <li className={classes.card}>
        <a className={classes.pokemon} href="#">
          <img
            src="https://placehold.co/215"
            alt="pokemon"
            className={classes.pokemonImg}
          />
        </a>
        <div>
          <p className={classes.pokemonId}>#0001</p>
          <div className={classes.pokemonName}>Pokemon</div>
          <div className={classes.tags}>
            <div className={classes.tag}>
              <span>Poison</span>
            </div>
            <div className={classes.tag}>
              <span>Grass</span>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}
