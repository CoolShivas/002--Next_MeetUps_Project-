import classes from "./Layout.module.css";

function LayOut(props) {
  return (
    <div>
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default LayOut;
