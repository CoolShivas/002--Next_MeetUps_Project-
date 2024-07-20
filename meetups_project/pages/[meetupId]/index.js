import MeetUpDetails from "../../components/meetups/MeetUpDetails";

const MeetUpId = () => {
  return (
    <>
      {/* <img
        src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
        alt="image not found"
      />
      <h1>A First MeetUp.</h1>
      <address>Soni Coloney, Choudhary Mohalla, Guna(M.P.)</address>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem ea
        inventore quibusdam laboriosam ipsa labore excepturi, minima alias cum
        recusandae sapiente optio, vel odit ipsam?
      </p> */}

      {/* This page can be reach out by writing in URL http://localhost:3000/shiva or http://localhost:3000/anything  */}

      <MeetUpDetails
        image="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
        title="A First MeetUp."
        address="Soni Coloney, Choudhary Mohalla, Guna(M.P.)"
        description="This is the great place."
      ></MeetUpDetails>
      {/* Passing the static data to MeetUpDetails not dynamic data; */}
    </>
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // Fetch data for a single meetup ;

  const meetingId = context.params.meetupId;

  return {
    props: {
      meetupdata: {
        id: meetingId,
        image:
          "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        title: "A First MeetUp.",
        address: "Soni Coloney, Choudhary Mohalla, Guna(M.P.)",
        description: "This is the great place.",
      },
    },
  };
}

export default MeetUpId;
