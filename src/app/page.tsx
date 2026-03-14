import HeroVideo from "../components/HeroVideo";
import CreatePublish from "../components/CreatePublish";
import WebsiteShowcase from "../components/WebsiteShowcase";
import Footer from "../components/Footer";
// import MeetingJoin from "../components/meetingJoin";
// import CreateMeetingPage from "../components/meetingJoin";



export default function Home() {
  return (
    <>
      <HeroVideo />
      <CreatePublish />
      {/* <MeetingJoin/> */}
      {/* <CreateMeetingPage/> */}
      <WebsiteShowcase />
      <Footer/>
    </>
  );
}
