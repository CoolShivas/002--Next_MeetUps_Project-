import { useRouter } from "next/router";
import Card from "../ui/Card";
import classes from "./MeetUpItem.module.css";

function MeetUpItem(props) {
  const router = useRouter();

  const handlerOnShowDetails = () => {
    console.log("Show Details");
    router.push("/" + props.id);
    // Here, props.id is added with forward slash to connect with MeetUpDetails Page for rendering;
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={handlerOnShowDetails}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetUpItem;
