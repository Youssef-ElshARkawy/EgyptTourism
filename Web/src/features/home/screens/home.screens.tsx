import Allgover from "../components/All-gover";
import DealsBanner from "../components/Bannar";
import Features from "../components/Features";
import NewsLatter from "../components/NewsLatter";
import Slider from "../components/Slider";
import TopReatedPlace from "../components/Top.reated.place";

function HomeScreen() {
  return (
    <>
      <div className="container space-y-3">
        <Slider />

        <Features />

        <TopReatedPlace />

        <Allgover />

        <DealsBanner />

        <NewsLatter />
      </div>
    </>
  );
}

export default HomeScreen;
