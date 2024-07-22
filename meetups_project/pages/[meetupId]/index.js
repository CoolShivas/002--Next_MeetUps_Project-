// import MeetUpDetails from "../../components/meetups/MeetUpDetails";

// const MeetUpId = () => {
//   return (
//     <>
//       {/* <img
//         src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
//         alt="image not found"
//       />
//       <h1>A First MeetUp.</h1>
//       <address>Soni Coloney, Choudhary Mohalla, Guna(M.P.)</address>
//       <p>
//         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem ea
//         inventore quibusdam laboriosam ipsa labore excepturi, minima alias cum
//         recusandae sapiente optio, vel odit ipsam?
//       </p> */}

//       {/* This page can be reach out by writing in URL http://localhost:3000/shiva or http://localhost:3000/anything  */}

//       <MeetUpDetails
//         image="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
//         title="A First MeetUp."
//         address="Soni Coloney, Choudhary Mohalla, Guna(M.P.)"
//         description="This is the great place."
//       ></MeetUpDetails>
//       {/* Passing the static data to MeetUpDetails not dynamic data; */}
//     </>
//   );
// };

// export async function getStaticPaths() {
//   return {
//     fallback: true,
//     paths: [
//       {
//         params: {
//           meetupId: "m1",
//         },
//       },
//       {
//         params: {
//           meetupId: "m2",
//         },
//       },
//     ],
//   };
// }

// export async function getStaticProps(context) {
//   // Fetch data for a single meetup ;

//   const meetingId = context.params.meetupId;

//   return {
//     props: {
//       meetupdata: {
//         id: meetingId,
//         image:
//           "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
//         title: "A First MeetUp.",
//         address: "Soni Coloney, Choudhary Mohalla, Guna(M.P.)",
//         description: "This is the great place.",
//       },
//     },
//   };
// }

// export default MeetUpId;

///******************************************************************************************************************* */

import Head from "next/head";
import { MongoClient, ObjectId } from "mongodb";
import MeetUpDetails from "../../components/meetups/MeetUpDetails";

const MeetUpId = (props) => {
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

      <Head>
        <title> {props.dataFromServer.title} </title>
        <meta name="description" content={props.dataFromServer.description} />
      </Head>

      <MeetUpDetails
        // image="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
        // title="A First MeetUp."
        // address="Soni Coloney, Choudhary Mohalla, Guna(M.P.)"
        // description="This is the great place."
        image={props.dataFromServer.image}
        title={props.dataFromServer.title}
        address={props.dataFromServer.address}
        description={props.dataFromServer.description}
      ></MeetUpDetails>
      {/* Passing the static data to MeetUpDetails not dynamic data; */}
    </>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://shivas2710cool00:8frqrkDg0VDOu0MK@cluster0.ncqmpot.mongodb.net/shivajiData?retryWrites=true&w=majority&appName=Cluster0"
  );

  const db = client.db();

  const meetupsCollection = db.collection("uniqueStar");

  const result = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    // paths: [
    //   {
    //     params: {
    //       meetupId: "m1",
    //     },
    //   },
    //   {
    //     params: {
    //       meetupId: "m2",
    //     },
    //   },
    // ],
    paths: result.map((brr) => ({
      params: { meetupId: brr._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // Fetch data for a single meetup ;

  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://shivas2710cool00:8frqrkDg0VDOu0MK@cluster0.ncqmpot.mongodb.net/shivajiData?retryWrites=true&w=majority&appName=Cluster0"
  );

  const db = client.db();

  const meetupsCollection = db.collection("uniqueStar");

  const selectedMeetUp = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  console.log(selectedMeetUp);

  client.close();

  return {
    // props: {
    //   meetupdata: {
    //     id: meetingId,
    //     image:
    //       "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    //     title: "A First MeetUp.",
    //     address: "Soni Coloney, Choudhary Mohalla, Guna(M.P.)",
    //     description: "This is the great place.",
    //   },
    // },
    props: {
      dataFromServer: {
        id: selectedMeetUp._id.toString(),
        title: selectedMeetUp.title,
        address: selectedMeetUp.address,
        image: selectedMeetUp.image,
        description: selectedMeetUp.description,
      },
    },
  };
}

export default MeetUpId;
