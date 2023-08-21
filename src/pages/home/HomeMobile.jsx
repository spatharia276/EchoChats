import Topbar from "../../components/topbar/TopbarMobile";
import Feed from "../../components/feed/Feed";
import "./home.css"


export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Feed/>

      </div>
    </>
  );
}
