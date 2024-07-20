import LayOut from "../../components/layout/LayOut";
import NewMeetUpForm from "../../components/meetups/NewMeetUpForm";
import classes from "./NewMeetUps.module.css";

const NewMeetUps = () => {
  const handlerOnAddNewMeetUps = (eneteredMeetUpData) => {
    console.log(eneteredMeetUpData); // Getting the data on Console;
  };

  return (
    <LayOut>
      <h1 className={classes.newmeetups_heading}>Fill the New Meet-Up form.</h1>
      <NewMeetUpForm
        handlerOnAddNewMeetUps={handlerOnAddNewMeetUps}
      ></NewMeetUpForm>
    </LayOut>
  );
};

export default NewMeetUps;
