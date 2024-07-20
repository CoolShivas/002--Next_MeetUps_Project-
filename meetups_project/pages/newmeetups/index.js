import NewMeetUpForm from "../../components/meetups/NewMeetUpForm";
import classes from "./NewMeetUps.module.css";

const NewMeetUps = () => {
  return (
    <>
      <h1 className={classes.newmeetups_heading}>Fill the New Meet-Up form.</h1>
      <NewMeetUpForm></NewMeetUpForm>
    </>
  );
};

export default NewMeetUps;
