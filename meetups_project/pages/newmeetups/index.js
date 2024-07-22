import { useRouter } from "next/router";
import NewMeetUpForm from "../../components/meetups/NewMeetUpForm";
import classes from "./NewMeetUps.module.css";

const NewMeetUps = () => {
  const router = useRouter();

  const handlerOnAddNewMeetUps = async (eneteredMeetUpData) => {
    console.log(eneteredMeetUpData); // Getting the data on Console;
    try {
      const response = await fetch(`/api/apiMeetUps`, {
        method: "POST",
        body: JSON.stringify(eneteredMeetUpData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      router.replace("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <h1 className={classes.newmeetups_heading}>Fill the New Meet-Up form.</h1>
      <NewMeetUpForm
        handlerOnAddNewMeetUps={handlerOnAddNewMeetUps}
      ></NewMeetUpForm>
    </>
  );
};

export default NewMeetUps;
