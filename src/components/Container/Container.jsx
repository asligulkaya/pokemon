import classes from "./Container.module.css";

import Card from "../Card/Card";

export default function Container() {
  return (
    <>
      <div className={classes.containerBg}>
        <section className={classes.listResults}>
          <ul className={classes.results}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </ul>
        </section>
      </div>
    </>
  );
}
