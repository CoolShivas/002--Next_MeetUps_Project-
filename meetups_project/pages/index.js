import LayOut from "../components/layout/LayOut";
import MainNavigation from "../components/layout/MainNavigation";
import MeetUpList from "../components/meetUps/MeetUpList";

const HomePage = () => {
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

  return (
    <LayOut>
      <MainNavigation></MainNavigation>
      <MeetUpList meetups={DUMMY_MEETUPS}></MeetUpList>
    </LayOut>
  );
};

export default HomePage;
