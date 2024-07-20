import { useEffect, useState } from "react";
import MeetUpList from "../components/meetUps/MeetUpList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First MeetUp.",
    image: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    address: "Soni Coloney, Choudhary Mohalla, Guna(M.P.)",
    description: "Great and amazing place to enjoy.",
  },
  {
    id: "m2",
    title: "The Second MeetUp.",
    image: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    address: "Dubey Coloney, Choudhary Mohalla, Guna(M.P.)",
    description: "Better to best to hangout.",
  },
  {
    id: "m3",
    title: "The Third MeetUp.",
    image: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    address: "Karnel Gunj, Khateek Mohalla, Guna(M.P.)",
    description: "Places of place to explore more and more everyday.",
  },
];

const HomePage = (props) => {
  // const [loadedMeetUps, setLoadedMeetUps] = useState([]);

  // useEffect(() => {
  //   // Send a http request and fetch data ;
  //   setLoadedMeetUps(DUMMY_MEETUPS);
  // }, []);

  return (
    <>
      {/* <MeetUpList meetups={DUMMY_MEETUPS}></MeetUpList> */}

      {/* <MeetUpList meetups={loadedMeetUps}></MeetUpList> */}

      <MeetUpList meetups={props.meetups}></MeetUpList>
    </>
  );
};

export async function getStaticProps() {
  // Fetch data from an API ;
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10, // It wil render in every 10 seconds ;
  };
}

export default HomePage;
