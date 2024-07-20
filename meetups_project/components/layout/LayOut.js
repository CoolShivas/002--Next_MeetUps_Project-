import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";

function LayOut(props) {
  return (
    <div>
      <MainNavigation></MainNavigation>
      {/* Making the header or MainNavigation common to all pages while importing it to here; */}
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default LayOut;
