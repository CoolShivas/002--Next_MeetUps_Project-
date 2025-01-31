import classes from "./MeetUpDetails.module.css";

const MeetUpDetails = (props) => {
  return (
    <>
      <section className={classes.meetup_details}>
        <img src={props.image} alt={props.title} />
        <h1>{props.title}</h1>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </section>
    </>
  );
};

export default MeetUpDetails;
